const {User} = require("../models")
class LoginController {
    static formRegister (req,res) {
        res.render('loginPage/formRegister')
    }
    static register (req,res) {
        let inputs = req.body
        User.create(inputs)
            .then((data) => {
                res.render('loginPage/formLogin')
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static formLogin (req,res) {
        res.render('loginPage/formLogin')
    }
    static login (req,res) {
        
    }
}
module.exports = LoginController