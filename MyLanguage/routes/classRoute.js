const express = require('express')
const router = express.Router()
const classController = require("../controllers/classController")

router.get("/classes", classController.list)
router.get('/classes/add', classController.getAdd)
router.post('/classes/add', classController.postAdd)
router.get('/classes/edit/:class_id', classController.getEdit)
router.post('/classes/edit/:class_id', classController.postEdit)
router.get('/classes/delete/:class_id', classController.delete)

module.exports = router