const connexe= require('../db/connexion');



exports.formList= (req, res)=>{
    let sql=`SELECT * FROM marque ORDER BY code_marque`;
   connexe.query(sql, (err, result)=>{
       if(err) throw err;
    //    if (req.session.success){
    //     res.locals.success = req.session.success;
    //     req.session.success= undefined;
    // }


       console.log(req.session);
        res.render('pages/marque', {
            list_marques: result
    });
   });
};

exports.ajoutMarque= (req, res)=>{
    let sql= 'INSERT INTO marque SET ?';
    let post= {
        code_marque: req.body.code_marque,
        nom_marque: req.body.nom_marque
    };

    connexe.query(sql, post, (err, result)=>{
        if(err) throw err;
        req.flash('success', 'Ajouter avec succès');
        res.redirect('marque'); 
    });
};

exports.modifMarque= (req, res)=>{
    let post={
        code_marque: req.body.code_marqueModif1,
        nom_marque: req.body.nom_marqueModif,
        
    };
    let sql= ` UPDATE  marque SET ? WHERE code_marque= '${req.body.code_marqueModif}' `;
    connexe.query(sql, post,  (err, result)=>{
        if (err) throw err;
        res.redirect('/app/marque');
    });
};

exports.suppMarque= (req, res)=>{
    let post= {
        code_marque: req.body.marque_supp
    };
    let sql= ` DELETE FROM marque WHERE code_marque= '${post.code_marque}' `;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.redirect('/app/marque');

    });
}