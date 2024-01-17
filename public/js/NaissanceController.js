const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    let sql=` SELECT *, DATE_FORMAT(Date_Naiss, "%d %b %y") AS date_naiss, DATE_FORMAT(Date_Enre, "%d %b %y") AS date_enreg FROM naissance ORDER BY ID DESC LIMIT 0, 100`;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.render('pages/Naissance', {
            list_personnes: result
        });
        //console.log(result);
    });
};

exports.ajoutNaiss= (req, res)=>{
    let sql= 'INSERT INTO naissance SET ?';
    let post= {
        Date_Naiss: req.body.date_naiss,
        formation_sanitaire: req.body.fs,
        sexe: req.body.sexe,
        Date_Enre: req.body.date_enreg,
        profession_mere: req.body.profession_mere,
        annee_naiss_mere: req.body.naissance_mere,
        profession_pere: req.body.profession_pere,
        annee_naiss_pere: req.body.naissance_pere,
        adresse: req.body.adresse
    };
    let max_id;
    let sql2= `SELECT MAX(ID) AS max FROM naissance`;
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        connexe.query(sql2, (err2, result2)=>{
            if (err2) throw err2;
            result2.forEach(element => {
                max_id= element.max;
            });
            
            console.log(max_id.max);
            let sql3= `UPDATE naissance SET age_mere= (YEAR(Date_Enre)-annee_naiss_mere), age_pere= (YEAR(Date_Enre)-annee_naiss_pere) WHERE ID='${max_id}'`;
            connexe.query(sql3, (err3, result3)=>{
                if (err3) throw err3;
            });
            req.flash('success', 'Ajouter avec succès');
            res.redirect('naissance');
        });
    });
};

exports.suppNaiss= (req, res)=>{
    post= {
        ID: req.body.ID_supp
    }
    let sql= ` DELETE FROM naissance WHERE ID= '${post.ID}' `;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.redirect('naissance');
    });
};

exports.modifNaiss= (req, res)=>{
    post= {

        ID: req.body.IDModif,
        Date_Naiss: req.body.date_naissModif,
        formation_sanitaire: req.body.fsModif,
        sexe: req.body.sexeModif,
        Date_Enre: req.body.date_enregModif,
        profession_mere: req.body.profession_mereModif,
        annee_naiss_mere: req.body.naissance_mereModif,
        profession_pere: req.body.profession_pereModif,
        annee_naiss_pere: req.body.naissance_pereModif
    }
     console.log(post.ID);
    let sql= ` UPDATE naissance SET ? WHERE ID='${post.ID}' `;
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.redirect('naissance');
    });

}