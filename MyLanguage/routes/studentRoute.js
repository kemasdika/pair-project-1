const express = require('express')
const router = express.Router()
const StudentController = require("../controllers/studentController")
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

const isStudent = (req,res, next) => {
    if(req.session.userId && req.session.role === 'student') {
        next()
    }else{
        res.redirect(`/dashboard`)
    }
}
router.use(isLogin)
router.get("/students",isAdmin, StudentController.studentList)
router.get("/students/:id",isStudent, StudentController.view)
router.get("/dashboard",isAdmin, StudentController.dashboard)
router.get("/students/addClass/:id", isStudent,StudentController.addClassFromStudent)
router.post("/students/addClass/:id", isStudent,StudentController.addClass)
router.get('/students/edit/:student_id',isAdmin, StudentController.getEdit)
router.post('/students/edit/:student_id',isAdmin, StudentController.postEdit)
router.get('/students/delete/:student_id',isAdmin, StudentController.delete)
router.get('/diagram', StudentController.diagrams)

module.exports = router