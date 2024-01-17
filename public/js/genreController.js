const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    let sql=`SELECT * FROM genre ORDER BY code_genre`;
    connexe.query(sql, (err, results)=>{
        if(err) throw err;
        res.render('pages/genre', {
            list_genres: results
        });
       
    });
   
}; 

exports.ajoutGenre= (req, res)=>{
    let sql= 'INSERT INTO genre SET ?';
    let post={
        code_genre: req.body.code_genre,
        lot_genre: req.body.lot_genre
    };
    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        req.flash('success', 'Ajouter avec succès');
        res.redirect('genre');
    });
};

exports.suppGenre= (req, res)=>{
    let post={
        code_genre: req.body.genre_supprimer
    };
    let sql= `DELETE FROM genre WHERE code_genre= '${post.code_genre}' `;
    connexe.query(sql, (err, result)=>{
        if(err) throw err;
        res.redirect('/app/genre');
    });
}; 

exports.modifGenre= (req, res)=>{
    let post={
        code_genre: req.body.code_genreModif1,
        lot_genre: req.body.lot_genre
    };

    let sql= ` UPDATE genre SET ? WHERE code_genre= '${req.body.code_genreModif}' `;

    connexe.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.redirect('/app/genre');
    });
}