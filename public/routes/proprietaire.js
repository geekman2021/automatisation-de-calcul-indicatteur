const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const proprietaireController= require('../js/proprietaireController');

route.get('/proprietaire', auth, proprietaireController.formList);

route.post('/proprietaire', auth, proprietaireController.ajoutProprietaire);

route.post('/proprietaire_modifier', auth, proprietaireController.modifProprietaire);

route.post('/supp_proprietaire', auth, proprietaireController.suppProprietaire );


module.exports= route;