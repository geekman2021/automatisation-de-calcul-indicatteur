const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const graphiqueNaissController= require('../js/graphiqueNaissController');

route.post('/graphique_naiss', auth, graphiqueNaissController.GraphNaiss );

route.get('/graphique_naiss', auth, graphiqueNaissController.formList);


module.exports= route;