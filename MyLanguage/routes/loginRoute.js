const express = require('express')
const router = express.Router()
const loginController = require("../controllers/loginCotroller")

const isLogin = (req, res, next ) => {
    id = req.session.userId
    if(!req.session.userId) {
        next()
    } else {
        if(req.session.role === 'admin'){
            res.redirect('/dashboard')
        }else{
            res.redirect(`/students/${id}`)
        }
    }
}


router.get("/register", isLogin,loginController.formRegister)
router.post("/register", loginController.register)
router.get("/login",isLogin, loginController.formLogin)
router.post("/login", loginController.login)

module.exports = router