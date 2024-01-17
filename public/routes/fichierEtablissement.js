const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const fichEtabControl= require('../js/fichierEtablissementController');

route.get('/fich_etab', auth, fichEtabControl.formList);

route.post('/fich_etab', fichEtabControl.ajoutFiche);

route.post('/modif_fiche', fichEtabControl.modifFiche);

route.post('/supp_fiche', fichEtabControl.suppFiche);

module.exports= route;