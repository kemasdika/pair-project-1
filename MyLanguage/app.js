 const express = require('express')
 const app = express()
 const PORT = 3000
 const loginRoute = require("./routes/loginRoute")
 const homeRoute = require("./routes/homeRoute")
 const studentRoute = require("./routes/studentRoute")
 const classRoute = require("./routes/classRoute")
 const session = require("express-session")
 const nodemailer = require('nodemailer')

 app.use(session({
     secret: 'naise',
     resave: false,
     saveUninitialized:false,
     cookie:{secure:false}
 }))

 app.set('view engine','ejs')
 app.use(express.urlencoded({extended:false}))

 app.use("/",loginRoute)
 app.use("/",homeRoute)
 app.use("/",studentRoute)
 app.use("/",classRoute)

 app.listen(PORT, () => {console.log(`listen at port : ${PORT}`)})



