const {User , LanguageClass, UserClass} = require('../models')
class StudentController {
    static view (req,res) {
        let id = req.params.id
        let student = {}
        User.findOne({where:{id} ,include: [LanguageClass]})
            .then((data) => {
                console.log(LanguageClass)
                student = data
            })
            .then((data2) => {
                // res.send({data : student, listClass :  data2})
                res.render('studentPage/studentView',{data : student, listClass :  data2})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static addClassFromStudent (req,res) {
        let id = req.params.id
        let student = {}
        User.findOne({where:{id} ,include: [LanguageClass]})
            .then((data) => {
                student = data
                return LanguageClass.findAll()
            })
            .then((data2) => {
                res.render('studentPage/addClassfromStudent',{data : student, listClass :  data2})
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static addClass (req,res) {
        id = +req.params.id
        let inputs = req.body
        UserClass.create(inputs)
            .then((data) => {
                res.redirect(`/students/${id}`)
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    }
    static studentList (req,res) {
            User.findAll({where: {role: 'student'}})
             .then(data => res.render('studentPage/studentList', {data}))
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

    static dashboard (req,res) {
        res.render('studentPage/dashboard')
    }
    static diagrams (req,res) {
        let user,kelas,userClass;
        LanguageClass.findAll()
            .then((data) => {
                // console.log(data)
                // res.send(data)
                res.render('studentPage/diagram',{data}) 
            })
            .catch((err) => {
                res.send(err)
            })
    }
}
module.exports = StudentController