const connexe = require("../db/connexion");

exports.formList = (req, res) => {
  res.render("pages/graphique_naiss");
};

exports.GraphNaiss = (req, res) => {
  // let sql1= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere<15 `;
  // let sql2= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=15 AND age_mere<=19 `;
  // let sql3= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=20 AND age_mere<=24`;
  // let sql4= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=25 AND age_mere<=29`;
  // let sql5= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=30 AND age_mere<=34`;
  // let sql6= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=35 AND age_mere<=39` ;
  // let sql7= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=40 AND age_mere<=44`;
  // let sql8= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=45 AND age_mere<=49`;
  // let sql9= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere>=50 AND age_mere<=54`;
  // let sql10= `SELECT COUNT(age_mere) as age_mere FROM naissance WHERE age_mere!='NULL' `;

  // /////////////////////// Groupe age père ////////////////////////////////

  // let sql11= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=15 AND age_pere<=19 `;
  // let sql12= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=20 AND age_pere<=24 `;
  // let sql13= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=25 AND age_pere<=29`;
  // let sql14= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=30 AND age_pere<=34`;
  // let sql15= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=35 AND age_pere<=39`;
  // let sql16= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=40 AND age_pere<=44` ;
  // let sql17= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=45 AND age_pere<=49`;
  // let sql18= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=50 AND age_pere<=54`;
  // let sql19= `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=55 AND age_pere<=59`;
  // let sq21 = `SELECT COUNT(age_pere) as age_pere FROM naissance WHERE age_pere>=60`;
  // let sql22= `SELECT COUNT(*) as total FROM naissance`;

  ///////////////////////////////////////////////////////////////////////////////////////// GRAPH 1 /////////////////////////////////////////////

  let sql1 = `SELECT COUNT(CASE WHEN(age_mere<15) THEN 1 END) AS age_mere, 
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

  let sql2 = `SELECT COUNT(*) AS TOTAL FROM naissance`;

  let sql3 = ` SELECT COUNT(sexe) AS effectif FROM naissance WHERE sexe='masculin' UNION
SELECT COUNT(sexe) AS effectif FROM naissance WHERE sexe='feminin' `;

  let sql4 = `SELECT COUNT(sexe) AS total, MONTH(Date_Naiss) FROM naissance GROUP BY MONTH(Date_Naiss) ORDER BY MONTH(Date_Naiss) `;

  let sql5 = `SELECT  COUNT(adresse) AS total_adresse, adresse FROM naissance GROUP BY adresse`;

  let sql6 = `SELECT COUNT(sexe) AS total, sexe FROM naissance GROUP BY sexe  `;

  let sql7 = `SELECT Mois_deces,
                  COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                  COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                  COUNT(formation_sanitaire) AS total
            FROM deces GROUP BY Mois_deces`;
  let sql8 = `SELECT COUNT(sexe) AS total FROM deces`;

  connexe.query(sql1, (err1, result1) => {
    if (err1) throw err1;
    connexe.query(sql2, (err2, result2) => {
      if (err2) throw err2;
      connexe.query(sql3, (err3, result3) => {
        if (err3) throw err3;
        connexe.query(sql4, (err4, result4) => {
          if (err4) throw err4;
          connexe.query(sql5, (err5, result5) => {
            if (err5) throw err5;
            connexe.query(sql6, (err6, result6) => {
              if (err6) throw err6;
              connexe.query(sql8, (err8, result8) => {
                if (err8) throw err8;
                connexe.query(sql7, (err7, result7) => {
                  if (err7) throw result7;
                  res.json({
                    res1: result1,
                    res2: result2,
                    res3: result3,
                    res4: result4,
                    res5: result5,
                    res6: result6,
                    res7: result7,
                    res8: result8,
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};
