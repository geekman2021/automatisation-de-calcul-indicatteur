const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    res.render('pages/graphique_deces');
};

exports.GraphDeces= (req, res)=>{

    let sql1= `SELECT Mois_deces,
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS total
                FROM deces GROUP BY Mois_deces`;
    
    let sql2= `SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                FROM deces WHERE age_defunt<1

                                    UNION
                SELECT  COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                FROM deces WHERE age_defunt<5 AND age_defunt>=1

                                    UNION
                SELECT  COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                FROM deces WHERE age_defunt<10 AND age_defunt>4

                                UNION
                SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL
                    
                    FROM deces WHERE age_defunt<15 AND age_defunt>9

                                    UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<20 AND age_defunt>14

                                                UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<25 AND age_defunt>19

                                                UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<30 AND age_defunt>24



                            UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<35 AND age_defunt>29

                                                UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<40 AND age_defunt>34

                                        UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<45 AND age_defunt>39

                                                UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<50 AND age_defunt>44

                                        UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<55 AND age_defunt>49

                                                UNION
                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<60 AND age_defunt>54

                                        UNION

                    SELECT  COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<65 AND age_defunt>59

                                                            UNION

                    SELECT   COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE age_defunt<70 AND age_defunt>64

                                        UNION

                    SELECT 
                        COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                        COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                        COUNT(formation_sanitaire) AS TOTAL

                    FROM deces WHERE  age_defunt>70`;

        let sql3= `SELECT formation_sanitaire, COUNT(formation_sanitaire) AS TOTAL FROM deces GROUP BY formation_sanitaire `;

        let sql4= `SELECT libelle_adresse,
                        COUNT(CASE WHEN Mois_deces<4 THEN 1 END) AS trimestre1,
                        COUNT(CASE WHEN Mois_deces>3 AND Mois_deces<7 THEN 1 END) AS trimestre2,
                        COUNT(CASE WHEN Mois_deces>6 AND Mois_deces<10 THEN 1 END) AS trimestre3,
                        COUNT(CASE WHEN Mois_deces>9 AND Mois_deces<13 THEN 1 END) AS trimestre4,
                        COUNT(formation_sanitaire) AS total
                    FROM deces GROUP BY libelle_adresse`
        connexe.query(sql1, (err1, result1)=>{
            if (err1) throw err1;
            connexe.query(sql2, (err2, result2)=>{
                if (err2) throw err2;
                connexe.query(sql3, (err3, result3)=>{
                    if (err3) throw err3;
                    connexe.query(sql4, (err4, result4)=>{
                        if (err4) throw err4;
                        res.json({
                            res1: result1,
                            res2: result2,
                            res3: result3,
                            res4: result4
                        })
                    })
                })
            })
        })
    }