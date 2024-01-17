const express= require('express');
const { Result } = require('express-validator');
const connexe= require('../db/connexion');
const route= express.Router();

route.post('/resultat', (req, res)=>{


    let sql_lot= `SELECT GROUP_CONCAT(DISTINCT CONCAT(" COUNT(CASE WHEN v.lot=" "'", v.lot, "'"  " AND v.code_genre=g.code_genre THEN 1 END) AS T")) AS LOT  FROM vehicule v;`


    connexe.query(sql_lot, (err_lot, result_lot)=>{
        if (err_lot) throw err_lot;

        //console.log(result_lot[0].LOT);

        //////////////////////////////////////////////////////   CHAQUE TRIMESTRE //////////////////////////////////////////

        let sql= `SELECT ve.lot,COUNT(ve.lot) AS TOTAL,
                            COUNT(CASE WHEN MONTH(date_entree)>0 AND MONTH(date_entree)<4 THEN 1 END) AS trimestre_1,
                            COUNT(CASE WHEN MONTH(date_entree)>3 AND MONTH(date_entree)<7 THEN 1 END)  AS trimestre_2,
                            COUNT(CASE WHEN MONTH(date_entree)>6 AND MONTH(date_entree)<10 THEN 1 END) AS trimestre_3,
                            COUNT(CASE WHEN MONTH(date_entree)>9 AND MONTH(date_entree)<13 THEN 1 END)  AS trimestre_4
            FROM vehicule ve GROUP BY ve.lot`;

        /////////////////////////////////////////////////////// TRIMESTRE 4 ////////////////////////////////////////////


        //////////////////////////////////////////////////////// lot genre ////////////////////////////////////////////


        let sql2= `SELECT g.lot_genre,
                                COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' AND v.code_genre=g.code_genre THEN 1 END) AS mutation,
                                COUNT(CASE WHEN v.lot='Véhicules neufs' AND v.code_genre=g.code_genre THEN 1 END) AS neufs,
                                COUNT(CASE WHEN v.lot='Véhicules usagés importés' AND v.code_genre=g.code_genre THEN 1 END) AS occasion,
                                COUNT(CASE WHEN v.code_genre=g.code_genre THEN 1 END ) AS total
        FROM vehicule v, genre g WHERE MONTH(v.date_entree)<13 AND MONTH(v.date_entree)>9 GROUP BY g.lot_genre`;


        ///////////////////////////////////////////////////////   MARQUE   //////////////////////////////////////////////


        let sql3= `SELECT m.nom_marque,
                                COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' AND v.code_marque=m.code_marque THEN 1 END) AS mutation,
                                COUNT(CASE WHEN v.lot='Véhicules neufs' AND v.code_marque=m.code_marque THEN 1 END) AS neufs,
                                COUNT(CASE WHEN v.lot='Véhicules usagés importés' AND v.code_marque=m.code_marque THEN 1 END) AS occasion,
                                COUNT(CASE WHEN v.code_marque=m.code_marque THEN 1 END ) AS total 
                FROM vehicule v, marque m WHERE MONTH(v.date_entree)<13 AND MONTH(v.date_entree)>9 GROUP BY m.nom_marque ORDER BY 
                COUNT(CASE WHEN v.code_marque=m.code_marque THEN 1 END ) DESC`;

        /////////////////////////////////////////////////////  ENERGIE   ///////////////////////////////////////////////

        let sql4= `SELECT v.energie, 
                        COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS mutation,
                        COUNT(CASE WHEN v.lot='Véhicules neufs' THEN 1 END) AS neufs,
                        COUNT(CASE WHEN v.lot='Véhicules usagés importés' THEN 1 END) AS occasion,
                        COUNT(v.energie) AS total
                FROM vehicule v WHERE MONTH(date_entree)<13 AND MONTH(date_entree)>9 GROUP BY v.energie`;


        ////////////////////////////////////////////////////  TOTAL  ///////////////////////////////////////////////////

        let sql5= `SELECT 
		                COUNT(CASE WHEN MONTH(date_entree)<4 AND MONTH(date_entree)>0 THEN 1 END) AS trimestre_1, 
                        COUNT(CASE WHEN MONTH(date_entree)<7 AND MONTH(date_entree)>3 THEN 1 END) AS trimestre_2, 
                        COUNT(CASE WHEN MONTH(date_entree)<10 AND MONTH(date_entree)>6 THEN 1 END) AS trimestre_3, 
                        COUNT(CASE WHEN MONTH(date_entree)<13 AND MONTH(date_entree)>9 THEN 1 END) AS trimestre_4,
                        COUNT(CASE WHEN MONTH(date_entree)<13 AND MONTH(date_entree)>0 THEN 1 END) AS TOTAL

                    FROM vehicule`;
        let sql6= `SELECT
                            COUNT(CASE WHEN lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS mutation,
		                    COUNT(CASE WHEN lot='Véhicules usagés importés' THEN 1 END) AS occasion,
                            COUNT(CASE WHEN lot='Véhicules neufs' THEN 1 END) AS neufs,
                            COUNT(lot) AS TOTAL 
                    FROM vehicule WHERE MONTH(date_entree)<13 AND MONTH(date_entree)>9 `;

        ////////////////////////////////////////////////////////  TRIMESTRE 3 /////////////////////////////////////////////////////////


        //////////////////////////////////////////////////////// lot genre ////////////////////////////////////////////////////


        let sql7= `SELECT g.lot_genre,
                                COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' AND v.code_genre=g.code_genre THEN 1 END) AS mutation,
                                COUNT(CASE WHEN v.lot='Véhicules neufs' AND v.code_genre=g.code_genre THEN 1 END) AS neufs,
                                COUNT(CASE WHEN v.lot='Véhicules usagés importés' AND v.code_genre=g.code_genre THEN 1 END) AS occasion,
                                COUNT(CASE WHEN v.code_genre=g.code_genre THEN 1 END ) AS total
        FROM vehicule v, genre g WHERE MONTH(v.date_entree)<10 AND MONTH(v.date_entree)>6 GROUP BY g.lot_genre`;


        ///////////////////////////////////////////////////////   MARQUE   //////////////////////////////////////////////


        let sql8= `SELECT m.nom_marque,
                                COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' AND v.code_marque=m.code_marque THEN 1 END) AS mutation,
                                COUNT(CASE WHEN v.lot='Véhicules neufs' AND v.code_marque=m.code_marque THEN 1 END) AS neufs,
                                COUNT(CASE WHEN v.lot='Véhicules usagés importés' AND v.code_marque=m.code_marque THEN 1 END) AS occasion,
                                COUNT(CASE WHEN v.code_marque=m.code_marque THEN 1 END ) AS total 
                FROM vehicule v, marque m WHERE MONTH(v.date_entree)<10 AND MONTH(v.date_entree)>6 GROUP BY m.nom_marque ORDER BY 
                COUNT(CASE WHEN v.code_marque=m.code_marque THEN 1 END ) DESC`;

        /////////////////////////////////////////////////////  ENERGIE   ///////////////////////////////////////////////

        let sql9= `SELECT v.energie, 
                        COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS mutation,
                        COUNT(CASE WHEN v.lot='Véhicules neufs' THEN 1 END) AS neufs,
                        COUNT(CASE WHEN v.lot='Véhicules usagés importés' THEN 1 END) AS occasion,
                        COUNT(v.energie) AS total
                FROM vehicule v WHERE MONTH(date_entree)<10 AND MONTH(date_entree)>6 GROUP BY v.energie`;


        ////////////////////////////////////////////////////  TOTAL  ///////////////////////////////////////////////////
        let sql10= `SELECT 
                            COUNT(CASE WHEN lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS mutation,
		                    COUNT(CASE WHEN lot='Véhicules usagés importés' THEN 1 END) AS occasion,
                            COUNT(CASE WHEN lot='Véhicules neufs' THEN 1 END) AS neufs,
                            COUNT(lot) AS TOTAL 
                    FROM vehicule WHERE MONTH(date_entree)<10 AND MONTH(date_entree)>6 `;

    connexe.query(sql, (err, result)=>{
        if (err) throw err;
        connexe.query(sql2, (err2, result2)=>{
            if (err2) throw err2;
            connexe.query(sql3, (err3, result3)=>{
                if (err3) throw err3;
                connexe.query(sql4, (err4, result4)=>{
                    if (err4) throw err4;
                    connexe.query(sql5, (err5, result5)=>{
                        if (err5) throw err5;
                        connexe.query(sql6, (err6, result6)=>{
                            if (err6) throw err6;
                            connexe.query(sql7, (err7, result7)=>{
                                if (err7) throw err7;
                                connexe.query(sql8, (err8, result8)=>{
                                    if (err8) throw err8;
                                    connexe.query(sql9, (err9, result9)=>{
                                        if (err9) throw err9;
                                        connexe.query(sql10, (err10, result10)=>{
                                            if (err10) throw err10;
                                            res.json(
                                                {
                                                    res1: result,
                                                    res2: result2,
                                                    res3: result3,
                                                    res4: result4,
                                                    res5: result5,
                                                    res6: result6,
                                                    res7: result7,
                                                    res8: result8,
                                                    res9: result9,
                                                    res10: result10
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

});

route.get('/resultat', (req, res)=>{
    res.render('pages/resultat');
});

module.exports= route;