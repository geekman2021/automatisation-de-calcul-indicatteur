const express= require('express');
let app= express();
const bodyParser= require('body-parser');
const mysql= require("mysql");
const path = require('path');
const energie_route= require('./public/routes/energie');
const genre_route= require('./public/routes/genre');
const marque_route= require('./public/routes/marque');
const proprietaire_route= require('./public/routes/proprietaire');
const vehicule_route= require('./public/routes/vehicule');
const graphique_route= require('./public/routes/graphique');
const resultat_route=require('./public/routes/resultat');
const naissance_route=require('./public/routes/Naissance');
const deces_route= require('./public/routes/deces');
const resultat_etat_civil_route= require('./public/routes/resultat_etat_civil');
const resultat_deces_route= require('./public/routes/resultat_deces');
const graphique_naiss_route= require('./public/routes/graphique_naiss');
const graphique_deces_route= require('./public/routes/graphique_deces');
const registre_route= require ('./public/routes/registre');
const login_route= require ('./public/routes/login');
const fich_etab_route= require ('./public/routes/fichierEtablissement');
const res_etab_route= require ('./public/routes/resultat_Etablissement');
const ipc_route= require ('./public/routes/IPC');
const session= require ('express-session');



// console.log(Object.keys(wb));
// console.log(wb.SheetNames);
// console.log(wb.Sheets);




const auth = require('./middleware/auth');

//load public
app.use(express.static(path.join(__dirname, "public")));



//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(session({
    secret: 'aaazeeezz',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }


}));
app.use(require('./middleware/flash'));



//route
app.use('/app', energie_route);
app.use('/app', genre_route);
app.use('/app', marque_route);
app.use('/app', proprietaire_route);
app.use('/app', vehicule_route);
app.use('/app', graphique_route);
app.use('/app', resultat_route);
app.use('/app', naissance_route);
app.use('/app', deces_route);
app.use('/app', resultat_etat_civil_route);
app.use('/app', resultat_deces_route);
app.use('/app', graphique_deces_route);
app.use('/app', graphique_naiss_route);
app.use('/app', login_route);
app.use('/app', registre_route);
app.use('/app', fich_etab_route);
app.use('/app', res_etab_route);
app.use('/app', ipc_route);



app.get('/app/', (req, res)=>{
    res.redirect("graphique_naiss");
});







app.set('view engine', 'ejs');


 app.listen(process.env.PORT || '3000' , ()=>{
    console.log(`server on running:  ${process.env.PORT || '3000'}`)
        
 });



