const { LanguageClass } = require('../models')

class ClassController {
    static list(req, res) {
        LanguageClass.findAll()
         .then(data => res.render('classPage/classView', {data}))
    }
}

module.exports = ClassController