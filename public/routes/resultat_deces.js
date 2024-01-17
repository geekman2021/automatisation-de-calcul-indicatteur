const express= require('express');
const { Result } = require('express-validator');
const connexe= require('../db/connexion');
const route= express.Router();

route.post('/resultat_deces', (req, res)=>{

        // ////////////////////////////// Formation sanitaire //////////////////////////////////////////////////

         let sql1 = `SELECT formation_sanitaire,
                            COUNT(CASE WHEN Mois_deces<4 THEN 1 END) AS trimestre1,
                            COUNT(CASE WHEN Mois_deces>3 AND Mois_deces<7 THEN 1 END) AS trimestre2,
                            COUNT(CASE WHEN Mois_deces>6 AND Mois_deces<10 THEN 1 END) AS trimestre3,
                            COUNT(CASE WHEN Mois_deces>9 AND Mois_deces<13 THEN 1 END) AS trimestre4,
                            COUNT(formation_sanitaire) AS TOTAL
                    FROM deces GROUP BY formation_sanitaire`;

        /////////////////////////////////  District /////////////////////////////////////////////////////////////

         let sql2= `SELECT district,
                            COUNT(CASE WHEN Mois_deces<4 THEN 1 END) AS trimestre1,
                            COUNT(CASE WHEN Mois_deces>3 AND Mois_deces<7 THEN 1 END) AS trimestre2,
                            COUNT(CASE WHEN Mois_deces>6 AND Mois_deces<10 THEN 1 END) AS trimestre3,
                            COUNT(CASE WHEN Mois_deces>9 AND Mois_deces<13 THEN 1 END) AS trimestre4,
                            COUNT(formation_sanitaire) AS total
                    FROM deces GROUP BY district`;

        //////////////////////////////////////////////   ADRESSE /////////////////////////////////////////////////

         let sql3= `SELECT libelle_adresse,
                            COUNT(CASE WHEN Mois_deces<4 THEN 1 END) AS trimestre1,
                            COUNT(CASE WHEN Mois_deces>3 AND Mois_deces<7 THEN 1 END) AS trimestre2,
                            COUNT(CASE WHEN Mois_deces>6 AND Mois_deces<10 THEN 1 END) AS trimestre3,
                            COUNT(CASE WHEN Mois_deces>9 AND Mois_deces<13 THEN 1 END) AS trimestre4,
                            COUNT(formation_sanitaire) AS total
                    FROM deces GROUP BY libelle_adresse`;

         /////////////////////////////////////////////// SEXE /////////////////////////////////////////////////////

         let sql4= `SELECT sexe,
                            COUNT(CASE WHEN Mois_deces<4 THEN 1 END) AS trimestre1,
                            COUNT(CASE WHEN Mois_deces>3 AND Mois_deces<7 THEN 1 END) AS trimestre2,
                            COUNT(CASE WHEN Mois_deces>6 AND Mois_deces<10 THEN 1 END) AS trimestre3,
                            COUNT(CASE WHEN Mois_deces>9 AND Mois_deces<13 THEN 1 END) AS trimestre4,
                            COUNT(formation_sanitaire) AS total
                    FROM deces GROUP BY sexe`;

        /////////////////////////////////////////////// MOIS //////////////////////////////////////////////////////


         let sql5= `SELECT Mois_deces,
                            COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hôpital' THEN 1 END) AS masculin1,
                            COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hôpital' THEN 1 END) AS feminin1,
                            COUNT(CASE WHEN formation_sanitaire='Hôpital' THEN 1 END) AS hopital,
                            COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                            COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                            COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,
                            COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                            COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                            COUNT(formation_sanitaire) AS total
                    FROM deces GROUP BY Mois_deces`;

    //////////////////////////////////////////// TOTAL ///////////////////////////////////////////////////////////

            let sql7=`SELECT COUNT(CASE WHEN Mois_deces<4 THEN 1 END)  AS trimestre1,
                                COUNT(CASE WHEN Mois_deces<7 AND Mois_deces>3 THEN 1 END) AS trimestre2,
                                COUNT(CASE WHEN Mois_deces>6 AND Mois_deces<10 THEN 1 END) AS trimestre3,
                                COUNT(CASE WHEN Mois_deces>9 AND Mois_deces<13 THEN 1 END) AS trimestre4,
                                COUNT(Mois_deces) AS total 
                        FROM deces`;


            let sql8= `SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                        FROM deces`;

            ////////////////////////////////////////////////////////// GROUPE D'AGE /////////////////////////////////////////////
         
            let sql6= `SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL

                        FROM deces WHERE age_defunt<1

                                                                UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<5 AND age_defunt>=1

                                                                UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<10 AND age_defunt>4

                                                            UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<15 AND age_defunt>9

                                                                UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<20 AND age_defunt>14

                                                        UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<25 AND age_defunt>19




                        UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<30 AND age_defunt>24



                                                        UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<35 AND age_defunt>29

                                                        UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<40 AND age_defunt>34
                        
                                                UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<45 AND age_defunt>39

                                                        UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<50 AND age_defunt>44

                                                UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<55 AND age_defunt>49

                                                        UNION
                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,

                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<60 AND age_defunt>54

                                                UNION

                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,
                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<65 AND age_defunt>59

                                                                    UNION

                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,
                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE age_defunt<70 AND age_defunt>64

                                                UNION

                        SELECT COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='hôpital' THEN 1 END) AS masculin1,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='hôpital' THEN 1 END) AS feminin1,
                                COUNT(CASE WHEN formation_sanitaire='hôpital' THEN 1 END) AS hopital,
                                COUNT(CASE WHEN sexe='masculin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS masculin2,
                                COUNT(CASE WHEN sexe='feminin' AND formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS feminin2,
                                COUNT(CASE WHEN formation_sanitaire='Hors formation sanitaire' THEN 1 END) AS hors,
                                COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                                COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                                COUNT(formation_sanitaire) AS TOTAL
                    
                        FROM deces WHERE  age_defunt>70`;


connexe.query(sql1, (err1, result1)=>{
    if (err1) throw err1;
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
                                res.json({
                                    res1: result1,
                                    res2: result2,
                                    res3: result3,
                                    res4: result4,
                                    res5: result5,
                                    res6: result6,
                                    res7: result7,
                                    res8: result8
                                })
                            })
                        });
                    })
                })
            })
        })
    })
})



});
route.get('/resultat_deces', (req, res)=>{
    res.render('pages/resultat_deces');
});





 module.exports= route;