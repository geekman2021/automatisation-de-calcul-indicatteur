const express= require("express");
const connexe= require("../db/connexion");
const route= express.Router();

route.get('/energie', (req, res)=>{
    let sql=`SELECT * FROM energie ORDER BY code_energie`;
    connexe.query(sql, (err, results)=>{
        if(err) throw err;
        res.render('pages/energie', {
            list_energies: results
        });
    });
});

route.post('/energie', (req, res)=>{
    let post= {
        code_energie: req.body.code_energie,
        lot_energie: req.body.lot_energie
    };
    let sql= 'INSERT INTO energie SET ?';
    let query= connexe.query(sql,post, (err, result)=>{
        if(err) throw err;
        res.redirect('energie');
    });
});

route.post('/supEnergie',(req, res)=>{
    let post ={
        code_energie: req.body.suppEnergie,
    };
    let sql= `DELETE FROM energie WHERE code_energie= '${post.code_energie}' `;
    connexe.query(sql, (err, result)=>{
        if(err) throw err;
        res.redirect('/app/energie');
    });

        
    
});

route.post('/modif_energie', (req,res)=>{
    let post ={
        code_energie: req.body.code_energieModif,
        lot_energie: req.body.lot_energieModif
    };
    let sql= `UPDATE energie SET ? WHERE code_energie= '${post.code_energie}' `;

    connexe.query(sql,post, (err, result)=>{
        if(err) throw err;
        res.redirect('/app/energie');
    } )
})
module.exports= route;
