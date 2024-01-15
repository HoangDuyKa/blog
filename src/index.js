
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
// console.log(path.join(__dirname,'public'))
//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({ 
  // defaultLayout: 'main' ,
  extname:'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourses\\views'))

app.get('/', (req, res) => {
  res.render('home')
});
app.get('/news', (req, res) => {
  res.render('news')
});

app.get('/search', (req, res) => {
  res.render('search')
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});
