const { validationResult } = require("express-validator")

module.exports = {
    index: (req, res) => {
        res.locals.user = req.session.user;
        res.render('index',{
            session:req.session
        })
    },
    userProcess: (req, res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){
            let {name, backgroundColor, email, edad} = req.body;
            req.session.user = {
                name,
                backgroundColor,
                email,
                edad
            };
            /* tiempo de duracion - 1 hora */
            let times = 160000;

            /* cookie para mantener la cuenta abierta */
            
            if (req.body.checkBox){
                res.cookie(
                    'color',
                    req.session.user,
                    {
                        expires: new Date(Date.now() + times),
                        httpOnly: true
                    }
                )
            }
            
            res.locals.user = req.session.user;
            
            res.render('index',{
                name,
                backgroundColor,
                email,
                edad,
                session:req.session
            })
        }else{

            
            res.render('index',{
                errors:errors.mapped(),
                old:req.body,
                session:req.session
            })
        }
    },
    user: (req, res) => {
        res.locals.user = req.session.user;
        
        res.render('user',{
            backgroundColor: req.session.user.backgroundColor,
            name:req.session.user.name,
            session:req.session
        })
    },
    resert: (req, res) => {
        req.session.destroy();
        res.clearCookie('name');
        res.clearCookie('backgroundColor');
        res.redirect("/");

    },
    not_entry: (req, res)=> res.render('not-entry')
}