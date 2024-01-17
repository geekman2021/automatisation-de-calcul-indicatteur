const express= require('express');
const connexe= require('../db/connexion');
const route= express.Router();

route.get('/Res_Etab', (req, res)=>{
    res.render('pages/Res_Etab');
});

route.post('/Res_Etab', (req, res)=>{

    let sql_FJ= `SELECT GROUP_CONCAT(DISTINCT CONCAT(" COUNT(CASE WHEN Lib_FJ=" "'",Lib_FJ ,"'"  " THEN 1 END) AS ", Lib_FJ )) AS FJ FROM fichier_etablissement`;
    connexe.query(sql_FJ, (err_fj, result_fj)=>{
        if (err_fj) throw err_fj;

        /////////////////////////////////////////////////// District //////////////////////////////////////////////////

        let sql= `SELECT fe.district, ${result_fj[0].FJ}, COUNT(fe.District) AS TOTAL FROM fichier_etablissement fe GROUP BY District`;

        //////////////////////////////////////////////////////////// Secteur /////////////////////////////////////////////////////////
    
        let sql2= `SELECT fe.Secteur, ${result_fj[0].FJ}, COUNT(fe.secteur) AS TOTAL FROM fichier_etablissement fe GROUP BY Secteur`;

        /////////////////////////////////////////////////////// Branche /////////////////////////////////////////////////////////
    
        let sql3= `SELECT fe.Branche, ${result_fj[0].FJ}, COUNT(fe.Branche) AS TOTAL FROM fichier_etablissement fe GROUP BY fe.Branche`;

        ////////////////////////////////////////////////////// fORME jURIDIQUE//////////////////////////////////////////////

        let sql4= `SELECT Lib_FJ FROM (SELECT COUNT(Lib_FJ) AS liste, Lib_FJ, District FROM fichier_etablissement GROUP BY District, Lib_FJ) a GROUP BY Lib_FJ`;

        let sql5= `SELECT AVG(Fonds) as compte, Lib_FJ FROM fichier_etablissement GROUP BY Lib_FJ`;

        ////////////////////////////////////////////// TOTAL GLOBAL ///////////////////////////////

        let sql10= `SELECT ${result_fj[0].FJ}, COUNT(fe.District) AS TOTAL FROM fichier_etablissement fe`;

        // /////////////////////////// Chaque Trimestre //////////////////////////////////////////

        let sql6= `SELECT AVG(Fonds) as compte, Lib_FJ FROM fichier_etablissement WHERE MONTH(Date_Maj)<4 GROUP BY Lib_FJ`;
        let sql7= `SELECT AVG(Fonds) as compte, Lib_FJ FROM fichier_etablissement WHERE MONTH(Date_Maj)<7 GROUP BY Lib_FJ`;
        let sql8= `SELECT AVG(Fonds) as compte, Lib_FJ FROM fichier_etablissement WHERE MONTH(Date_Maj)<10 GROUP BY Lib_FJ`;
        let sql9= `SELECT AVG(Fonds) as compte, Lib_FJ FROM fichier_etablissement WHERE MONTH(Date_Maj)<13 GROUP BY Lib_FJ`;
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
                                connexe.query(sql10, (err10, result10)=>{
                                    if (err10) throw err10;
                                            res.json({
                                                res: result,
                                                res2: result2,
                                                res3: result3,
                                                res4: result4,
                                                res5: result5,
                                                res6: result6,
                                                res10: result10
                                            });
                                        });
                                    });
                                });
                            });
                        })
                    });
                });
            });
        });

module.exports= route;