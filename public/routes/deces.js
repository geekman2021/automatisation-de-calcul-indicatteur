const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const decesController= require('../js/decesController');

route.get('/deces', auth, decesController.formList);
route.post('/deces', auth, decesController.ajouter);
route.post('/modif_deces', auth, decesController.modifier);
route.post('/supp_deces', auth, decesController.supprimer);



module.exports= route;