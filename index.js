const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
//npm Nodemon lắng nghe sự thay đổi trong các file để tự reload mà không cần thoát server rồi chạy lại: npm i nodemon --save-dev để cài trực tiếp vào depedencies của project mà không ảnh hưởng tới project khác và chỉ cần khi dev chứ không cần khi chạy thực tế
//Node Package Manager: npm 
//npm i express 