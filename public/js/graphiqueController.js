const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    res.render('pages/graphique');
};

 exports.ListGraph= (req, res)=>{
     let sql1= ` SELECT ve.lot,COUNT(ve.lot) AS TOTAL,
                COUNT(CASE WHEN MONTH(date_entree)>0 AND MONTH(date_entree)<4 THEN 1 END) AS trimestre_1,
                COUNT(CASE WHEN MONTH(date_entree)>3 AND MONTH(date_entree)<7 THEN 1 END)  AS trimestre_2,
                COUNT(CASE WHEN MONTH(date_entree)>6 AND MONTH(date_entree)<10 THEN 1 END) AS trimestre_3,
                COUNT(CASE WHEN MONTH(date_entree)>9 AND MONTH(date_entree)<13 THEN 1 END)  AS trimestre_4
FROM vehicule ve GROUP BY ve.lot `;

     let sql2= ` SELECT 
                COUNT(CASE WHEN MONTH(date_entree)<4 AND MONTH(date_entree)>0 THEN 1 END) AS trimestre_1, 
                COUNT(CASE WHEN MONTH(date_entree)<7 AND MONTH(date_entree)>3 THEN 1 END) AS trimestre_2, 
                COUNT(CASE WHEN MONTH(date_entree)<10 AND MONTH(date_entree)>6 THEN 1 END) AS trimestre_3, 
                COUNT(CASE WHEN MONTH(date_entree)<13 AND MONTH(date_entree)>9 THEN 1 END) AS trimestre_4,
                COUNT(CASE WHEN MONTH(date_entree)<13 AND MONTH(date_entree)>0 THEN 1 END) AS TOTAL

FROM vehicule`;

     let sql3= `SELECT v.energie, 
                    COUNT(CASE WHEN v.lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS mutation,
                    COUNT(CASE WHEN v.lot='Véhicules neufs' THEN 1 END) AS neufs,
                    COUNT(CASE WHEN v.lot='Véhicules usagés importés' THEN 1 END) AS occasion,
                    COUNT(v.energie) AS total
                FROM vehicule v WHERE MONTH(date_entree)<13 AND MONTH(date_entree)>9 GROUP BY v.energie`;

     let sql4= `SELECT
                    COUNT(CASE WHEN lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS mutation,
                    COUNT(CASE WHEN lot='Véhicules usagés importés' THEN 1 END) AS occasion,
                    COUNT(CASE WHEN lot='Véhicules neufs' THEN 1 END) AS neufs,
                    COUNT(lot) AS TOTAL 
                FROM vehicule WHERE MONTH(date_entree)<13 AND MONTH(date_entree)>9`;

     let sql5= `SELECT 
                    COUNT(CASE WHEN age<5 AND age>=0 AND lot='Véhicules usagés importés' THEN 1 END) AS moins_5, 
                    COUNT(CASE WHEN age>=5 AND age<10 AND lot='Véhicules usagés importés' THEN 1 END) AS cinque_10, 			
                    COUNT(CASE WHEN age>=10 AND age<15 AND lot='Véhicules usagés importés' THEN 1 END) AS dix_quinze, 
                    COUNT(CASE WHEN age>=15 AND age<20 AND lot='Véhicules usagés importés' THEN 1 END) AS quinze_20, 		
                    COUNT(CASE WHEN age>=20 AND lot='Véhicules usagés importés' THEN 1 END) AS plus_20, 
                    COUNT(CASE WHEN lot='Véhicules usagés importés' THEN 1 END) AS TOTAL 
                FROM vehicule WHERE MONTH(date_entree)<13 AND MONTH(date_entree)>9 `;
     let sql6= `SELECT 
                    COUNT(CASE WHEN age<5 AND age>=0 AND lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS moins_5, 
                    COUNT(CASE WHEN age>=5 AND age<10 AND lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS cinque_10, 			
                    COUNT(CASE WHEN age>=10 AND age<15 AND lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS dix_quinze, 
                    COUNT(CASE WHEN age>=15 AND age<20 AND lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS quinze_20, 		
                    COUNT(CASE WHEN age>=20 AND lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS plus_20, 
                    COUNT(CASE WHEN lot='Mutation province et propriétaire à  la fois' THEN 1 END) AS TOTAL 
 FROM vehicule WHERE MONTH(date_entree)<13 AND MONTH(date_entree)>9`;


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
                            res.json({
                                res1: result1,
                                res2: result2,
                                res3: result3,
                                res4: result4,
                                res5: result5,
                                res6: result6
                            });
                        });
                    });
                });
            });
        });
    });
}