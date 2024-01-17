const express= require('express');
const connexe= require('../db/connexion');
const route= express.Router();

route.post('/registre', (req, res)=>{
    let post={
        pseudo: req.body.pseudo,
        password: req.body.password_1,
        email: req.body.email

    }
    let sql= 'INSERT INTO login SET ? ' ;
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.redirect('registre');
    });
});


route.get('/registre', (req, res)=>{
    res.render('partials/registre');
});


module.exports= route;