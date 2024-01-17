const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    let sql= `SELECT * FROM deces ORDER BY deces_id DESC LIMIT 0, 50 `;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.render('pages/deces', {
            list_deces: result
        });
    });
};

exports.ajouter= (req, res)=>{
    let sql= 'INSERT INTO deces SET ?' ;
    let post= {
        sexe: req.body.sexe_defunt,
        Mois_deces: req.body.Mois_deces,
        formation_sanitaire: req.body.fs,
        age_defunt: req.body.age,
        libelle_adresse: req.body.adresse,
        cause_deces: req.body.cause_deces,
        district: req.body.district
    }
    let max_id;
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        let sql2= `SELECT MAX(deces_id) AS max FROM deces`;
        connexe.query(sql2, (err2, result2)=>{
            if (err2) throw err2;
            result2.forEach(element => {
                max_id= element.max;
            });
            console.log(max_id);
            req.flash('success', 'Ajouter avec succès');
            res.redirect('deces');
        });
    });
}

exports.modifier= (req, res)=>{
     let post= {
         deces_id: req.body.id_modif,
         sexe: req.body.sexe_defunt_modif,
         Mois_deces: req.body.Mois_deces_modif,
         formation_sanitaire: req.body.fs_modif,
         age_defunt: req.body.age_modif,
         libelle_adresse: req.body.adresse_modif,
         district: req.body.district_modif
     }
     let sql= `UPDATE deces SET ? WHERE deces_id='${post.deces_id}' `;
     connexe.query(sql, post, (err, result)=>{
         if (err) throw err;
         res.redirect('deces');
     });
}

exports.supprimer= (req, res)=>{
    let post= {
        deces_id: req.body.id_supp
    }
    let sql= ` DELETE FROM deces WHERE deces_id='${post.deces_id}' `;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.redirect('deces')
    })
}

