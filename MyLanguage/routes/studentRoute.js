const express = require('express')
const router = express.Router()
const StudentController = require("../controllers/studentController")

router.get("/students", StudentController.list)
router.get('/students/add', StudentController.getAdd)
router.post('/students/add', StudentController.postAdd)
router.get('/students/edit/:student_id', StudentController.getEdit)
router.post('/students/edit/:student_id', StudentController.postEdit)
router.get('/students/delete/:student_id', StudentController.delete)

module.exports = router