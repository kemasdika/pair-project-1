const { User } = require('../models')

class StudentController {
    static list(req, res) {
        User.findAll({where: {role: 'student'}})
         .then(data => res.render('studentPage/studentView', {data}))
    }
    static getAdd(req, res) {
        res.render('studentPage/studentAddForm')
    }
    static postAdd(req, res) {
        let newStud = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            role: 'student'
        }
        User.create(newStud)
         .then(() => res.redirect('/students'))
         .catch(err => res.send(err))
    }
    static getEdit(req, res) {
        let id = +req.params.student_id
        User.findByPk(id)
         .then(data => res.render('studentPage/studentEditForm', {data}))
         .catch(err => res.send(err))
    }
    static postEdit(req, res) {
        let id = +req.params.student_id
        let newStud = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number
        }
        User.update(newStud, {where: {id}})
         .then(() => res.redirect('/students'))
         .catch(err => res.send(err))
    }
    static delete(req, res) {
        let id = +req.params.student_id
        User.destroy({where: {id}})
        .then(() => res.redirect('/students'))
        .catch(err => res.send(err))
    }
}
module.exports = StudentController