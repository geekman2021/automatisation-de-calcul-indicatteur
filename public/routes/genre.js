const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const genreControl= require('../js/genreController');

route.get('/genre', auth, genreControl.formList);
route.post('/genre',auth, genreControl.ajoutGenre);
route.post('/supp_genre', auth,  genreControl.suppGenre);
route.post('/modif_genre', auth, genreControl.modifGenre);
    

module.exports= route;
