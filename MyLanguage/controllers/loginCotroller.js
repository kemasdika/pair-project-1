const {User} = require("../models")
const bcrypt = require('bcryptjs')
class LoginController {
    static formRegister (req,res) {
        let errors
        if(req.query.errors){
            errors = req.query.errors.split(',')
        }
        res.render('loginPage/formRegister',{errors})
    }

    static register (req,res) {
        let inputs = req.body
        User.create(inputs)
            .then((data) => {
                // res.send(data)
                res.redirect('/login')
            })
            .catch((err) => {
                console.log(err)
                let errorMessages = []
                err.errors.forEach(element => {
                    errorMessages.push(element.message)
                });
                res.redirect(`/register?errors=${errorMessages}`)
            })
    }

    static formLogin (req,res) {
        let errors
        if(req.query.error){
            errors = req.query.error.split(',')
        }
        res.render('loginPage/formLogin',{errors})
    }

    static login (req,res) {
        const { username, password } = req.body
        User.findOne({where: {username}})
            .then((data) => {
                if(data) {
                    const isValidPassword = bcrypt.compareSync(password, data.password)
                    console.log(isValidPassword)
                    if(isValidPassword) {
                        req.session.userId = data.id
                        req.session.role = data.role
                        if(data.role === 'admin'){
                            res.redirect(`/dashboard`)
                        }else{
                            res.redirect(`/students/${data.id}`)
                        }
                    } else {
                         res.redirect("/login?error=username dan password invalid")
                    }
                }else {
                    res.redirect("/login?error= user tidak ada! silahakan daftar terlebih dahulu")
                }
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    }
}
module.exports = LoginController