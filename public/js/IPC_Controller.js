const connexe= require('../db/connexion');

exports.formList= (req, res)=>{

    let sql= `SELECT *, DATE_FORMAT(date_saisi, "%d %b %y") AS date_style FROM ipc `;

    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.render('pages/IPC', {
            list_ipc: result
        });
    });
};

exports.ajouter= (req, res)=>{
    let sql= 'INSERT INTO ipc SET ?';
    let post= {
        date_saisi: req.body.date_saisi,
        Id_pvt: req.body.id_pvt,
        lib_pvt: req.body.lib_pvt,
        typ_pvt: req.body.Type_pvt,
        typ_qust: req.body.type_quest,
        tv: req.body.TV,
        Id_Serie: req.body.id_serie,
        lib_ser: req.body.lib_serie,
        code_var: req.body.code_var,
        passage: req.body.passage,
        prix: req.body.prix_vente,
        poids: req.body.poids
    }

    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        req.flash('success', 'Ajouter avec succès');
        res.redirect('ipc');
    });
}

exports.modifier= (req, res)=>{
    let post= {
        ID: req.body.ID_Modif,
        date_saisi: req.body.date_saisi_Modif,
        Id_pvt: req.body.id_pvt_Modif,
        lib_pvt: req.body.lib_pvt_Modif,
        typ_pvt: req.body.Type_pvt_Modif,
        typ_qust: req.body.type_quest_Modif,
        tv: req.body.TV_Modif,
        Id_Serie: req.body.id_serie_Modif,
        lib_ser: req.body.lib_serie_Modif,
        code_var: req.body.code_var_Modif,
        passage: req.body.passage_Modif,
        prix: req.body.prix_vente_Modif,
        poids: req.body.poids_Modif
    };
    let sql= `UPDATE ipc SET ? WHERE ID= '${post.ID}'`;
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.redirect('ipc');
    })

}

exports.supprimer= (req, res)=>{
    let post= {
        ID: req.body.ID_supp
    }
    let sql= `DELETE FROM ipc WHERE ID='${post.ID}'`;
    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        res.redirect('ipc');
    });
}