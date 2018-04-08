// index page
exports.index = function(req, res) {
    res.render('index', {
        title: '首页',
        nav: 0
    });
}