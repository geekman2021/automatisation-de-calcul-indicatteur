const connexe= require('../db/connexion');

exports.formList= (req, res)=>{
    res.render('pages/graphique_naiss');
};

exports.GraphNaiss= (req, res)=>{
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

let sql4= `SELECT COUNT(sexe) AS total, MONTH(Date_Naiss) FROM naissance GROUP BY MONTH(Date_Naiss) ORDER BY MONTH(Date_Naiss) `

let sql5= `SELECT  COUNT(adresse) AS total_adresse, adresse FROM naissance GROUP BY adresse`;

let sql6= `SELECT COUNT(sexe) AS total, sexe FROM naissance GROUP BY sexe  `;

let sql7= `SELECT Mois_deces,
                  COUNT(CASE WHEN sexe='masculin' THEN 1 END) AS masculin,
                  COUNT(CASE WHEN sexe='feminin' THEN 1 END) AS feminin,
                  COUNT(formation_sanitaire) AS total
            FROM deces GROUP BY Mois_deces`;
let sql8= `SELECT COUNT(sexe) AS total FROM deces`;

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
                  connexe.query(sql8, (err8, result8)=>{
                    if (err8) throw err8;
                    connexe.query(sql7, (err7, result7)=>{
                      if (err7) throw result7;
                      res.json({
                        res1: result1,
                        res2: result2,
                        res3: result3,
                        res4: result4,
                        res5: result5,
                        res6: result6,
                        res7: result7,
                        res8: result8
                      });
                    });
                  });
                });
              });
            });
        });
    });
});



    // let sql23= ` SELECT COUNT(Mois_deces) AS total , Mois_deces FROM deces GROUP BY Mois_deces`;
    // let sql24= `SELECT COUNT(deces_id) AS defunt FROM deces `;

    // let sql29= ` SELECT COUNT(sexe) AS masculin FROM naissance WHERE sexe='masculin' `;
    // let sql30= ` SELECT COUNT(sexe) AS feminin FROM naissance WHERE sexe='feminin' ` ;
    // let sql31= ` SELECT COUNT(sexe) AS total_sexe FROM naissance` ;



    // let sql32= ` SELECT COUNT(Date_Naiss) AS naissance, MONTH(Date_Naiss) FROM naissance GROUP BY MONTH(Date_Naiss) `
    // let sql33= ` SELECT COUNT(Date_Naiss) AS naissance FROM naissance `
    // connexe.query(sql1, (err, result1)=>{
    //     if (err) throw err;
    //     connexe.query(sql2, (err2, result2)=>{
    //         if (err2) throw err2;
    //         connexe.query(sql3, (err3, result3)=>{
    //             if (err3) throw err3;
    //             connexe.query(sql4, (err4, result4)=>{
    //                 if (err4) throw err4;
    //                 connexe.query(sql5, (err5, result5)=>{
    //                     if (err5) throw err5;
    //                     connexe.query(sql6, (err6, result6)=>{
    //                         if (err6) throw err6;
    //                         connexe.query(sql7, (err7, result7)=>{
    //                             if (err7) throw err7;
    //                             connexe.query(sql8, (err8, result8)=>{
    //                                 if (err8) throw err8;
    //                                 connexe.query(sql9, (err9, result9)=>{
    //                                     if (err9) throw err9;
    //                                     connexe.query(sql10, (err10, result10)=>{
    //                                         if (err10) throw err10;
    //                                         connexe.query(sql11, (err11, result11)=>{
    //                                             if (err11) throw err11;
    //                                             connexe.query(sql12, (err12, result12)=>{
    //                                                 if (err12) throw err12;
    //                                                 connexe.query(sql13, (err13, result13)=>{
    //                                                     if (err13) throw err13;
    //                                                     connexe.query(sql14, (err14, result14)=>{
    //                                                         if (err14) throw err14;
    //                                                         connexe.query(sql15, (err15, result15)=>{
    //                                                             if (err15) throw err15;
    //                                                             connexe.query(sql16, (err16, result16)=>{
    //                                                                 if (err16) throw err16;
    //                                                                 connexe.query(sql17, (err17, result17)=>{
    //                                                                     if (err17) throw err17;
    //                                                                     connexe.query(sql18, (err18, result18)=>{
    //                                                                         if (err18) throw err18;
    //                                                                         connexe.query(sql19, (err19, result19)=>{
    //                                                                             if (err19) throw err19;
    //                                                                                 connexe.query(sq21, (err21, result21)=>{
    //                                                                                     if (err21) throw err21;
    //                                                                                     connexe.query(sql22, (err22, result22)=>{
    //                                                                                         if(err22) throw err22;
    //                                                                                         connexe.query(sql29, (err29, result29)=>{
    //                                                                                             if (err29) throw err29;
    //                                                                                             connexe.query(sql30, (err30, result30)=>{
    //                                                                                                 if (err30) throw err30;
    //                                                                                                 connexe.query(sql31, (err31, result31)=>{
    //                                                                                                     if (err31) throw err31;
    //                                                                                                     connexe.query(sql32, (err32, result32)=>{
    //                                                                                                         if (err32) throw err32;
    //                                                                                                         connexe.query(sql33, (err33, result33)=>{
    //                                                                                                             if (err33) throw err33;
    //                                                                                                             connexe.query(sql23, (err23, result23)=>{
    //                                                                                                                 if (err23) throw err23;
    //                                                                                                                 connexe.query(sql24, (err24, result24)=>{
    //                                                                                                                     if (err24) throw err24;
    //                                                                                                                     res.json({
    //                                                                                                                         res: result1,
    //                                                                                                                         res2: result2,
    //                                                                                                                         res3: result3,
    //                                                                                                                         res4: result4,
    //                                                                                                                         res5: result5, 
    //                                                                                                                         res6: result6,
    //                                                                                                                         res7: result7,
    //                                                                                                                         res8: result8,
    //                                                                                                                         res9: result9,
    //                                                                                                                         res10: result10,
    //                                                                                                                         res11: result11,
    //                                                                                                                         res12: result12,
    //                                                                                                                         res13: result13,
    //                                                                                                                         res14: result14,
    //                                                                                                                         res15: result15,
    //                                                                                                                         res16: result16,
    //                                                                                                                         res17: result17,
    //                                                                                                                         res18: result18,
    //                                                                                                                         res19: result19,
    //                                                                                                                         res21: result21,
    //                                                                                                                         res22: result22,
    //                                                                                                                         res23: result23,
    //                                                                                                                         res24: result24,
    //                                                                                                                         res29: result29,
    //                                                                                                                         res30: result30,
    //                                                                                                                         res31: result31,
    //                                                                                                                         res32: result32,
    //                                                                                                                         res33: result33
    //                                                                                                                 });

    //                                                                                                                 });
                                                                


    //                                                                                                         });
    //                                                                                                     });
    //                                                                                                 });
    //                                                                                             });
    //                                                                                         });
    //                                                                                      });
    //                                                                                 });
    //                                                                             });
    //                                                                         });
    //                                                                     });
    //                                                                 });
    //                                                             });
    //                                                         });
    //                                                     });
    //                                                 });
    //                                             });
    //                                         });
    //                                     });
    //                                 });
    //                             });
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });
}