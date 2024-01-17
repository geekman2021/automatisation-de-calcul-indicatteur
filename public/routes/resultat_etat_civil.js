const express= require('express');
const connexe= require('../db/connexion');
const route= express.Router();

route.post('/resultat_etat_civil', (req, res)=>{


    let sql1= `SELECT COUNT(CASE WHEN(age_mere<15) THEN 1 END) AS age_mere, 
                      COUNT(CASE WHEN(age_pere<15) THEN 1 END) AS age_pere FROM naissance 
                UNION
                
                
                SELECT COUNT(CASE WHEN(age_mere>=15 AND age_mere<=19 ) THEN 1 END) AS age_mere, 
                       COUNT(CASE WHEN(age_pere>=15 AND age_pere<=19 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=20 AND age_mere<=24 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=20 AND age_pere<=24 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=25 AND age_mere<=29 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=25 AND age_pere<=29 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=30 AND age_mere<=34 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=30 AND age_pere<=34 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=35 AND age_mere<=39 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=35 AND age_pere<=39 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=30 AND age_mere<=34 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=30 AND age_pere<=34 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=35 AND age_mere<=39 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=35 AND age_pere<=39 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=30 AND age_mere<=34 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=30 AND age_pere<=34 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=35 AND age_mere<=39 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=35 AND age_pere<=39 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=40 AND age_mere<=44 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=40 AND age_pere<=44 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=45 AND age_mere<=49 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=45 AND age_pere<=49 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=50 AND age_mere<=54 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=50 AND age_pere<=54 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=55 AND age_mere<=59 ) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=55 AND age_pere<=59 ) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere>=60) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere>=60) THEN 1 END) AS age_pere FROM naissance 
                    UNION
                    
                    
                SELECT COUNT(CASE WHEN(age_mere IS NULL) THEN 1 END) AS age_mere, 
                    COUNT(CASE WHEN(age_pere IS NULL) THEN 1 END) AS age_pere FROM naissance `;

    let sql2= `SELECT COUNT(*) AS TOTAL FROM naissance`;

    let sql3= ` SELECT COUNT(sexe) AS effectif FROM naissance WHERE sexe='masculin' UNION
                SELECT COUNT(sexe) AS effectif FROM naissance WHERE sexe='feminin' `;


    let sql4= `SELECT MIN(age_mere) as min_mere, MAX(age_pere) as min_pere FROM naissance UNION
                SELECT AVG(age_mere) as moyen_mere, AVG(age_pere) as moyen_pere FROM naissance UNION
                SELECT MAX(age_mere) as max_mere, MAX(age_pere) as max_pere FROM naissance`;

    connexe.query(sql1, (err1, result1)=>{
        if (err1) throw err1;
        connexe.query(sql2, (err2, result2)=>{
            if (err2) throw err2;
            connexe.query(sql3, (err3,result3)=>{
                if (err3) throw err3;
                connexe.query(sql4, (err4, result4)=>{
                    if (err4) throw err4;
                    res.json({
                        res1: result1,
                        res2: result2,
                        res3: result3,
                        res4: result4
                    });
                });
            });
        });
    });
});


    


route.get('/resultat_etat_civil', (req, res)=>{
    res.render('pages/resultat_etat_civil');
});

module.exports= route;