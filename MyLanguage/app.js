 const express = require('express')
 const app = express()
 const PORT = 3000
 const loginRoute = require("./routes/loginRoute")
 const homeRoute = require("./routes/homeRoute")
 const studentRoute = require("./routes/studentRoute")
 const classRoute = require("./routes/classRoute")

 app.set('view engine','ejs')
 app.use(express.urlencoded({extended:false}))

 app.use("/",loginRoute)
 app.use("/",homeRoute)
 app.use("/",studentRoute)
 app.use("/",classRoute)

 app.listen(PORT, () => {console.log(`listen at port : ${PORT}`)})



