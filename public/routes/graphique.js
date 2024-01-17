const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const graphiqueController= require('../js/graphiqueController');


route.get('/graphique', auth, graphiqueController.formList);

route.post('/graphique', auth, graphiqueController.ListGraph);



module.exports= route;