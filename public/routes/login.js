const express= require('express');
const connexe= require('../db/connexion');
const route= express.Router();

route.get('/login', (req, res)=>{
    res.render('partials/login');
});


route.post('/login', (req, res)=>{
    let post={
        email: req.body.email,
        password: req.body.password
    };

    let sql= `SELECT email, pseudo, password FROM login WHERE email=? Limit 1 `;
    connexe.query(sql, post.email, (err, result)=>{
        if (err) throw err;
        console.log(typeof(result[0]));
        if (result[0] && post.email== result[0].email && post.password== result[0].password){
            res.cookie('email', post.email);
            res.cookie('password', post.password);
            res.cookie('pseudo', result[0].pseudo)
            res.redirect('/app/');
        }

            
                
            else{
            //rq.flash('error',',mot de passe incorrect.' );
            res.redirect('login');
            }
       
        
     });
});

route.get('/logout', (req ,res)=>{
        res.clearCookie('email');
        res.clearCookie('password');
        res.redirect('/app/login');
});




module.exports= route;