//membuat tampilan awal sebelum login/register
class HomeController {
    static homePage (req,res) {
        res.render('homePage/homeView')
    }
}

module.exports = HomeController