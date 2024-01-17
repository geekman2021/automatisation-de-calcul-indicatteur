const connexe = require("../db/connexion");

exports.formList = (req, res) => {
  let sql = `SELECT vehicule.ID, marque.nom_marque, vehicule.Lot, genre.lot_genre, proprietaire.nom, vehicule.num_immat, vehicule.nbre_place, vehicule.charge_utile, vehicule.poid_vide, vehicule.energie, (YEAR(date_entree)-(YEAR(date_sortie))) as age, date_entree, date_sortie FROM vehicule,marque,genre, proprietaire WHERE vehicule.code_marque=marque.code_marque AND vehicule.code_genre=genre.code_genre AND  vehicule.id_proprietaire=proprietaire.id_proprietaire ORDER BY vehicule.num_immat DESC LIMIT 0, 100`;
  let sql1 = `SELECT * FROM genre`;
  let sql3 = `SELECT * FROM marque`;
  let sql4 = `SELECT * FROM proprietaire`;
  connexe.query(sql, (err, result) => {
    if (err) throw err;
    connexe.query(sql1, (err1, result1) => {
      if (err1) throw err1;
      connexe.query(sql3, (err3, result3) => {
        if (err3) throw err3;
        connexe.query(sql4, (err4, result4) => {
          if (err4) throw err4;
          res.render("pages/vehicule", {
            list_vehicules: result,
            list_genres: result1,
            list_marques: result3,
            list_proprietaires: result4,
          });
        });
      });
    });
  });
};

exports.ajoutVehicule = (req, res) => {
  let post = {
    ID: req.body.ID,
    num_immat: req.body.num_immat,
    code_genre: req.body.code_genre,
    code_marque: req.body.code_marque,
    energie: req.body.code_energie,
    id_proprietaire: req.body.id_proprietaire,
    nbre_place: req.body.nbre_place,
    charge_utile: req.body.charge_utile,
    poid_vide: req.body.poid_vide,
    date_sortie: req.body.date_sortie,
    date_entree: req.body.date_entree,
    Lot: req.body.lot,
  };
  let sql = "INSERT INTO vehicule SET ?";
  let sql2 = `UPDATE vehicule SET age= (YEAR(date_entree)-(YEAR(date_sortie)))  WHERE num_immat='${post.num_immat}' `;
  connexe.query(sql, post, (err, result) => {
    if (err) throw err;
    connexe.query(sql2, (err, result2) => {
      if (err) throw err;
      req.flash("success", "Ajouter avec succès");
      res.redirect("vehicule");
    });
  });
};

exports.modifVehicule = (req, res) => {
  let post = {
    ID: req.body.IDModif,
    num_immat: req.body.num_immatModif,
    code_marque: req.body.code_marqueModif,
    code_genre: req.body.code_genreModif,
    energie: req.body.code_energieModif,
    date_entree: req.body.date_entreeModif,
    date_sortie: req.body.date_sortieModif,
    id_proprietaire: req.body.id_proprietaireModif,
    nbre_place: req.body.nbre_placeModif,
    charge_utile: req.body.charge_utileModif,
    poid_vide: req.body.poid_videModif,
  };

  let sql = `UPDATE vehicule SET ? WHERE ID= '${post.ID}' `;

  connexe.query(sql, post, (err, result) => {
    if (err) throw err;
    res.redirect("vehicule");
  });
};

exports.suppVehicule = (req, res) => {
  let post = {
    ID: req.body.IDSupp,
    num_immat: req.body.num_immatSupp,
  };

  let sql = `DELETE FROM vehicule WHERE ID= '${post.ID}' `;

  connexe.query(sql, (err, result) => {
    if (err) throw err;
    res.redirect("vehicule");
  });
};

exports.get_info = (req, res) => {
  let num_immat = req.body.num;
  let sql = `SELECT proprietaire.nom, proprietaire.profession, proprietaire.adresse, marque.nom_marque,  vehicule.num_immat, DATE_FORMAT(vehicule.date_sortie, "%d %b %Y") AS date_sortie, genre.lot_genre, vehicule.nbre_place, vehicule.poid_vide, vehicule.charge_utile  FROM vehicule, genre, marque, proprietaire WHERE vehicule.code_marque=marque.code_marque AND vehicule.code_genre= genre.code_genre AND proprietaire.id_proprietaire= vehicule.id_proprietaire AND vehicule.num_immat='${num_immat}' `;
  connexe.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ info: result, nb: result.length });
  });
};
