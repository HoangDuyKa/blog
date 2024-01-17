const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname,'public'))
//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        // defaultLayout: 'main' ,
        extname: 'hbs',
    }),
);
      app.set('view engine', 'hbs');
      app.set('views',          path.join(__dirname, 'resourses\\views'));

          route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
