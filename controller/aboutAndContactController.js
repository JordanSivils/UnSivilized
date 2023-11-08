module.exports.get_about = (req, res) => {
    res.render('about', {title: 'About'});
}

module.exports.get_contact = (req, res) => {
    res.render('contact', {title: 'Contact'})
}