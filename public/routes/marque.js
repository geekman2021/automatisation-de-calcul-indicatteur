const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const marqueControl= require('../js/marqueController');


route.get('/marque', auth, marqueControl.formList );
route.post('/marque', marqueControl.ajoutMarque);
route.post('/supp_marque',  marqueControl.suppMarque);
route.post('/modif_marque', marqueControl.modifMarque);

module.exports= route;