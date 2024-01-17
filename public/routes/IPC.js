const express= require('express');
const route= express.Router();
const auth = require('../../middleware/auth');
const ipc_controller= require('../js/IPC_Controller');

route.get('/ipc', auth, ipc_controller.formList);
route.post('/ipc', auth, ipc_controller.ajouter);
route.post('/modif_ipc', auth, ipc_controller.modifier);
route.post('/supp_ipc', auth, ipc_controller.supprimer);

module.exports= route;