const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const NaissanceController= require('../js/NaissanceController');

route.get('/naissance', auth, NaissanceController.formList );

route.post('/naissance', auth, NaissanceController.ajoutNaiss );

route.post('/supp_personne', auth, NaissanceController.suppNaiss);

route.post('/modifier_Naissance', auth, NaissanceController.modifNaiss);




module.exports= route;