const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const vehiculeController= require('../js/vehiculeController');

route.get('/vehicule', auth, vehiculeController.formList);

route.post('/vehicule', auth, vehiculeController.ajoutVehicule);

route.post('/modif_vehicule', auth, vehiculeController.modifVehicule);

route.post('/supp_vehicule', auth, vehiculeController.suppVehicule);

route.post('/get_info', auth, vehiculeController.get_info);

module.exports= route;