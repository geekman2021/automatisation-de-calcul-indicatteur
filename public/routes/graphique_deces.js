const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const graphiqueDecesController= require('../js/graphiqueDecesController');


route.get('/graphique_deces', auth, graphiqueDecesController.formList);

route.post('/graphique_deces', auth, graphiqueDecesController.GraphDeces);




module.exports= route;