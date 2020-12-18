const express = require('express')
const router = express.Router()
const classController = require("../controllers/classController")
const isLogin = (req, res, next ) => {
    if(req.session.userId) {
        next()
    } else {
        res.redirect('/login?error=Tolong Login terlebih dahulu')
    }
}
const isAdmin = (req,res, next) => {
    let id = req.session.userId
    if(req.session.userId && req.session.role === 'admin') {
        next()
    }else{
        res.redirect(`/students/${id}`)
    }
}
router.use(isLogin)
router.get("/classes",isAdmin, classController.list)
router.get('/classes/add',isAdmin, classController.getAdd)
router.post('/classes/add',isAdmin, classController.postAdd)
router.get('/classes/edit/:class_id',isAdmin, classController.getEdit)
router.post('/classes/edit/:class_id',isAdmin, classController.postEdit)
router.get('/classes/delete/:class_id',isAdmin, classController.delete)

module.exports = router