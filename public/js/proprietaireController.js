const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    let sql= ` SELECT * FROM proprietaire ORDER BY id_proprietaire DESC LIMIT 0, 50`;
    connexe.query(sql, (err, result)=>{
        if(err) throw err;
        res.render('pages/proprietaire', {
            list_proprietaires: result
        });
    });
};

exports.ajoutProprietaire= (req, res)=>{
    let sql= 'INSERT INTO proprietaire SET ?';
    
    let post={
        nom: req.body.nom,
        adresse: req.body.adresse,
        profession: req.body.profession,
        district: req.body.district

    };

    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        req.flash('success', 'Ajouter avec succès');
        res.redirect('proprietaire');
    });
};

exports.modifProprietaire= (req, res)=>{
    let post={
        id_proprietaire: req.body.IDModif,
        nom: req.body.nomModif,
        adresse: req.body.adresseModif,
        profession: req.body.professionModif,
        district: req.body.districtModif
    };

    let sql=`UPDATE proprietaire SET ? WHERE id_proprietaire= '${post.id_proprietaire}' `;
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.redirect('/app/proprietaire');
    });
};

exports.suppProprietaire= (req, res)=>{
    let post={
        id_proprietaire: req.body.ID_supp
    };

    let sql= `DELETE FROM proprietaire WHERE id_proprietaire= '${post.id_proprietaire}' `;

    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.redirect('/app/proprietaire');

    });
}