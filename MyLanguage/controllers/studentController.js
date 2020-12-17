const { User } = require('../models')

class StudentController {
    static list(req, res) {
        User.findAll({where: {role: 'student'}})
         .then(data => res.render('studentPage/studentView', {data}))
    }
}
module.exports = StudentController