const express = require('express')
const router = express.Router()
const StudentController = require("../controllers/studentController")

router.get("/students", StudentController.list)

module.exports = router