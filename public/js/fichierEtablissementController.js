const connexe= require('../db/connexion');


exports.formList= (req, res)=>{
    let sql= `SELECT *, DATE_FORMAT(Date_Maj, "%d %b %y") AS Date_1 FROM fichier_etablissement ORDER BY ID DESC`;

    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.render('pages/fichierEtablissement', {
            list_Fichier: result
        });
    })
    
};

exports.ajoutFiche= (req, res)=>{
    let post= {
        TPMAJ: req.body.tp_maj,
        Date_Maj: req.body.date_maj,
        Code_Firaisana: req.body.code_firaisana,
        District: req.body.district,
        Fonds: req.body.fond,
        sal_M: req.body.sale_M,
        sal_MM: req.body.sale_MM,
        sal_MF: req.body.sale_MF,
        sal_E: req.body.sale_ME,
        Secteur: req.body.secteur,
        Branche: req.body.branche,
    };

    let sql ='INSERT INTO fichier_etablissement SET ?';

    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        req.flash('success', 'Ajouter avec succès');
        res.redirect('fich_etab');
    });
};

exports.modifFiche= (req, res)=>{
    let post= {
        ID: req.body.IDModif,
        TPMAJ: req.body.tp_maj_modif,
        Date_Maj: req.body.date_majModif,
        Code_Firaisana: req.body.code_firaisanaModif,
        District: req.body.districtModif,
        Fonds: req.body.fondModif,
        sal_M: req.body.sale_MModif,
        sal_MM: req.body.sale_MMModif,
        sal_MF: req.body.sale_MFModif,
        sal_E: req.body.sale_MEModif,
        Secteur: req.body.secteurModif,
        Branche: req.body.brancheModif

    };
    let sql= `UPDATE fichier_etablissement SET ? WHERE ID= '${post.ID}' `;

    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.redirect('fich_etab');
    });
};

exports.suppFiche= (req, res)=>{
    let post= {
        ID: req.body.IDSupp
    };

    let sql= `DELETE FROM  fichier_etablissement WHERE ID= '${post.ID}'`;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.redirect('fich_etab');
    });

}