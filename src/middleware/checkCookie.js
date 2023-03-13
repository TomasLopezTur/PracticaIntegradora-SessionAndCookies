module.exports = (req, res, next) => {
    if(req.cookies.color && !req.session.user) {
        req.session.user = req.cookies.color;
        res.locals.user = req.session.user;
    }
    next();
}