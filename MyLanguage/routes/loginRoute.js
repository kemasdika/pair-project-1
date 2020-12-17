const express = require('express')
const router = express.Router()
const loginController = require("../controllers/loginCotroller")

router.get("/register", loginController.formRegister)
router.post("/register", loginController.register)
router.get("/login", loginController.formLogin)
router.post("/login", loginController.login)

module.exports = router