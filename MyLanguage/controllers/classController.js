const { LanguageClass } = require('../models')

class ClassController {
    static list(req, res) {
        LanguageClass.findAll()
         .then(data => res.render('classPage/classView', {data}))
    }
    static getAdd(req, res) {
        res.render('classPage/addClassForm')
    }
    static postAdd(req, res) {
        let newClass = {
            class_name: req.body.class_name,
            schedule: req.body.schedule,
            description: req.body.description,
            price: req.body.price
        }
        LanguageClass.create(newClass)
         .then(() => res.redirect('/classes'))
         .catch(err => res.send(err))
    }
    static getEdit(req, res) {
        let id = +req.params.class_id
        LanguageClass.findByPk(id)
         .then(data => res.render('classPage/classEditForm', {data}))
         .catch(err => res.send(err))
    }
    static postEdit(req, res) {
        let id = +req.params.class_id
        let newClass = {
            class_name: req.body.class_name,
            schedule: req.body.schedule,
            description: req.body.description,
            price: req.body.price
        }
        LanguageClass.update(newClass, {where: {id}})
         .then(() => res.redirect('/classes'))
         .catch(err => res.send(err))
    }
    static delete(req, res) {
        let id = +req.params.class_id
        LanguageClass.destroy({where: {id}})
        .then(() => res.redirect('/classes'))
        .catch(err => res.send(err))
    }
}

module.exports = ClassController