const con = require('../db/connexion');

exports.vue = (req, res)=>{
        res.render('pages/stat')
};
// // SELECT menage.reference, menage.lot, fokotany.codeFkt from menage,logement, fokotany WHERE menage.lot = logement.lot AND fokotany.codeFkt= logement.codeFkt AND fokotany.codeFkt = '001' 

// // REQUETE PAR ARRONDISSEMENT SELECT COUNT(menage.reference) AS REF, logement.adresse, fokotany.codeFkt, arrondissement.codeArr from menage,logement, fokotany, arrondissement WHERE menage.idLoge = logement.idLoge AND fokotany.codeFkt= logement.codeFkt AND arrondissement.codeArr=fokotany.codeArr AND arrondissement.codeArr='301001' GROUP by arrondissement.codeArr 



// exports.chart = (req, res)=>{
//         let sql = `SELECT count(sexe) as homme from personne WHERE sexe="M"`;
//         let sql2 = `SELECT count(sexe) as femme from personne where sexe = "F"`;
//         //let sql2 = ``;
//         //let tab = [];
//         //tab[0] = sql; tab[1] = sql2;
//         con.query(sql, (err, results)=>{
//              if(err) throw err;
//              con.query(sql2, (err, results2)=>{
//                 if(err) throw err;
//                 res.json({info2:results2, info:results,})
                        
//                 })  
//         })
// }


exports.arr = (req, res) =>{
        // -------------------------- HOMME / FEMME -----------------------------------------------------------------------------------
        let hom = `SELECT count(sexe) as homme from personne WHERE sexe="M"`;
        let fem = `SELECT count(sexe) as femme from personne where sexe = "F"`;
        //---------------------------MENAGE PAR ARRONDISSEMENT-----------------------------------------------------------------------------------------
        let ambodimanga = `SELECT COUNT(menage.reference) AS effAmbo, logement.adresse, fokotany.codeFkt, arrondissement.codeArr from menage,logement, fokotany, arrondissement WHERE menage.idLoge = logement.idLoge AND fokotany.codeFkt= logement.codeFkt AND arrondissement.codeArr=fokotany.codeArr AND arrondissement.codeArr='301001' GROUP by arrondissement.codeArr `
        let anjoma = `SELECT COUNT(menage.reference) AS effAnjo, logement.adresse, fokotany.codeFkt, arrondissement.codeArr from menage,logement, fokotany, arrondissement WHERE menage.idLoge = logement.idLoge AND fokotany.codeFkt= logement.codeFkt AND arrondissement.codeArr=fokotany.codeArr AND arrondissement.codeArr='301002' GROUP by arrondissement.codeArr `
        let morarano = `SELECT COUNT(menage.reference) AS effMora, logement.adresse, fokotany.codeFkt, arrondissement.codeArr from menage,logement, fokotany, arrondissement WHERE menage.idLoge = logement.idLoge AND fokotany.codeFkt= logement.codeFkt AND arrondissement.codeArr=fokotany.codeArr AND arrondissement.codeArr='301003' GROUP by arrondissement.codeArr `
        let tanambao = `SELECT COUNT(menage.reference) AS effTana, logement.adresse, fokotany.codeFkt, arrondissement.codeArr from menage,logement, fokotany, arrondissement WHERE menage.idLoge = logement.idLoge AND fokotany.codeFkt= logement.codeFkt AND arrondissement.codeArr=fokotany.codeArr AND arrondissement.codeArr='301004' GROUP by arrondissement.codeArr `
        let ankirihiry = `SELECT COUNT(menage.reference) AS effAnki, logement.adresse, fokotany.codeFkt, arrondissement.codeArr from menage,logement, fokotany, arrondissement WHERE menage.idLoge = logement.idLoge AND fokotany.codeFkt= logement.codeFkt AND arrondissement.codeArr=fokotany.codeArr AND arrondissement.codeArr='301005' GROUP by arrondissement.codeArr `
        //------------------------- DEMI PYRAMIDE----------------------------------------------------------------------------------------------------
        let sqli = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>'00' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='05' AND sexe='M'`
        let sqliF = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>'00' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='05' AND sexe='F'`

        let sqli2 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='06' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='10' AND sexe='M'`
        let sqli2F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='06' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='10' AND sexe='F'`

        let sqli3 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='11' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='15' AND sexe='M'`
        let sqli3F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='11' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='15' AND sexe='F'`

        let sqli4 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='16' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='20' AND sexe='M'`
        let sqli4F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='16' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='20' AND sexe='F'`

        let sqli5 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='21' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='25' AND sexe='M'`
        let sqli5F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='21' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='25' AND sexe='F'`

        let sqli6 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='26' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='30' AND sexe='M'`
        let sqli6F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='26' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='30' AND sexe='F'`

        let sqli7 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='31' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='35' AND sexe='M'`
        let sqli7F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='31' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='35' AND sexe='F'`

        let sqli8 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='36' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='40' AND sexe='M'`
        let sqli8F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='36' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='40' AND sexe='F'`

        let sqli9 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='41' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='45' AND sexe='M'`
        let sqli9F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='41' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='45' AND sexe='F'`

        let sqli10 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='46' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='50' AND sexe='M'`
        let sqli10F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='46' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='50' AND sexe='F'`

        let sqli11 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='51' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='55' AND sexe='M'`
        let sqli11F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='51' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='55' AND sexe='F'`

        let sqli12 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='56' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='60' AND sexe='M'`
        let sqli12F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='56' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='60' AND sexe='F'`
        
        let sqli13 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='60' AND sexe='M' `
        let sqli13F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
        WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='60' AND sexe='F' `
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //-------ARRONDISSEMENT-----------------------------------
        con.query(ambodimanga, (err, results1)=>{
                if(err) throw err;
                con.query(anjoma, (err, results2)=>{
                        if(err) throw err;
                        con.query(morarano, (err, results3)=>{
                                if(err) throw err;
                                con.query(tanambao, (err, results4)=>{
                                        if(err) throw err;
                                        con.query(ankirihiry, (err, results5)=>{
                                                if(err) throw err;
                                                //------------HOMME FEMME----------------------------
                                                con.query(hom, (err, resultat)=>{
                                                        if(err) throw err;
                                                        con.query(fem, (err, resultat2)=>{
                                                           if(err) throw err;
                                                           //-----------PYRAMIDE------------------
                                                           con.query(sqli, (err, resultsH)=>{
                                                                if(err) throw err;
                                                                con.query(sqli2, (err, results2H)=>{
                                                                   if(err) throw err;
                                                                   con.query(sqli3, (err, results3H)=>{
                                                                           if(err) throw err;
                                                                           con.query(sqli4, (err, results4H)=>{
                                                                                   if(err) throw err;
                                                                                   con.query(sqli5, (err, results5H)=>{
                                                                                           if(err) throw err;
                                                                                           con.query(sqli6, (err, results6H)=>{
                                                                                                   if(err) throw err;
                                                                                                   con.query(sqli7, (err, results7H)=>{
                                                                                                           if(err) throw err;
                                                                                                           con.query(sqli8, (err, results8H)=>{
                                                                                                                   if(err) throw err;
                                                                                                                   con.query(sqli9, (err, results9H)=>{
                                                                                                                           if(err) throw err;
                                                                                                                           con.query(sqli10, (err, results10H)=>{
                                                                                                                                   if(err) throw err;
                                                                                                                                   con.query(sqli11, (err, results11H)=>{
                                                                                                                                           if(err) throw err;
                                                                                                                                           con.query(sqli12, (err, results12H)=>{
                                                                                                                                                   if(err) throw err;
                                                                                                                                                   con.query(sqli13, (err, results13H)=>{
                                                                                                                                                           if(err) throw err;
                                                                                                                                                           con.query(sqliF, (err, resultsF)=>{
                                                                                                                                                                   if(err) throw err;
                                                                                                                                                                   con.query(sqli2F, (err, results2F)=>{
                                                                                                                                                                           if(err) throw err;
                                                                                                                                                                           con.query(sqli3F, (err, results3F)=>{
                                                                                                                                                                                   if(err) throw err;
                                                                                                                                                                                   con.query(sqli4F, (err, results4F)=>{
                                                                                                                                                                                           if(err) throw err;
                                                                                                                                                                                           con.query(sqli5F, (err, results5F)=>{
                                                                                                                                                                                                   if(err) throw err;
                                                                                                                                                                                                   con.query(sqli6F, (err, results6F)=>{
                                                                                                                                                                                                           if(err) throw err;
                                                                                                                                                                                                           con.query(sqli7F, (err, results7F)=>{
                                                                                                                                                                                                                   if(err) throw err;
                                                                                                                                                                                                                   con.query(sqli8F, (err, results8F)=>{
                                                                                                                                                                                                                           if(err) throw err;
                                                                                                                                                                                                                           con.query(sqli9F, (err, results9F)=>{
                                                                                                                                                                                                                                   if(err) throw err;
                                                                                                                                                                                                                                   con.query(sqli10F, (err, results10F)=>{
                                                                                                                                                                                                                                           if(err) throw err;
                                                                                                                                                                                                                                           con.query(sqli11F, (err, results11F)=>{
                                                                                                                                                                                                                                                   if(err) throw err;
                                                                                                                                                                                                                                                   con.query(sqli12F, (err, results12F)=>{
                                                                                                                                                                                                                                                           if(err) throw err;
                                                                                                                                                                                                                                                           con.query(sqli13F, (err, results13F)=>{
                                                                                                                                                                                                                                                                if(err) throw err;
                                                                                                                                                                                                                                                                res.json({
                                                                                                                                                                                                                                                                //---------RESULTAT HOMME FEMME -----------------
                                                                                                                                                                                                                                                                        info2:resultat2, 
                                                                                                                                                                                                                                                                        info:resultat,
                                                                                                                                                                                                                                                                //-------------------------------------------
                                                                                                                                                                                                                                                                //--------PAR ARRONDISSEMENT-----------------     
                                                                                                                                                                                                                                                                        nbAmbo : results1,
                                                                                                                                                                                                                                                                        nbAnjo : results2,
                                                                                                                                                                                                                                                                        nbMora : results3,
                                                                                                                                                                                                                                                                        nbTana : results4,
                                                                                                                                                                                                                                                                        nbAnki : results5,
                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                //-----------------------------------------   
                                                                                                                                                                                                                                                                //--------PYRAMIDE---------------------------
                                                                                                                                                                                                                                                                        age:resultsH,
                                                                                                                                                                                                                                                                        age13:results13H,
                                                                                                                                                                                                                                                                        age2:results2H,
                                                                                                                                                                                                                                                                        age3:results3H,
                                                                                                                                                                                                                                                                        age4:results4H,
                                                                                                                                                                                                                                                                        age5:results5H,
                                                                                                                                                                                                                                                                        age6:results6H,
                                                                                                                                                                                                                                                                        age7:results7H,
                                                                                                                                                                                                                                                                        age8:results8H,
                                                                                                                                                                                                                                                                        age9:results9H,
                                                                                                                                                                                                                                                                        age10:results10H,
                                                                                                                                                                                                                                                                        age11:results11H,
                                                                                                                                                                                                                                                                        age12:results12H,
                                                                                                                                                                                                                                                                        ageF:resultsF,
                                                                                                                                                                                                                                                                        age13F:results13F,
                                                                                                                                                                                                                                                                        age2F:results2F,
                                                                                                                                                                                                                                                                        age3F:results3F,
                                                                                                                                                                                                                                                                        age4F:results4F,
                                                                                                                                                                                                                                                                        age5F:results5F,
                                                                                                                                                                                                                                                                        age6F:results6F,
                                                                                                                                                                                                                                                                        age7F:results7F,
                                                                                                                                                                                                                                                                        age8F:results8F,
                                                                                                                                                                                                                                                                        age9F:results9F,
                                                                                                                                                                                                                                                                        age10F:results10F,
                                                                                                                                                                                                                                                                        age11F:results11F,
                                                                                                                                                                                                                                                                        age12F:results12F,
                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                //------------------------------------------------
                                                                                                                                                                                                                                                                })  
                                                                                                                                                                                                                                                        })

                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                
                                                                                                                                                                                                                        })

                                                                                                                                                                                                                })
                                                                                                                                                                                                        })
                                                                                                                                                                                                })
                                                                                                                                                                                        })
                                                                                                                                                                                })
                                                                                                                                                                        })
                                                                                                                                                                })
                                                                                                                                                        })
                                                                                                                                                })
                                                                                                                                        })
                                                                                                                                })
                                                                                                                        })
                                                                                                                })
                                                                                                        })
                                                                                                })
                                                                                        })
                                                                                })
                                                                        })
                                                                })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})
                                                                                                                                                                                                                
}




// exports.age = (req, res)=>{
//         let sqli = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>'00' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='05' AND sexe='M'`
//         let sqliF = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>'00' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='05' AND sexe='F'`

//         let sqli2 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='06' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='10' AND sexe='M'`
//         let sqli2F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='06' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='10' AND sexe='F'`

//         let sqli3 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='11' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='15' AND sexe='M'`
//         let sqli3F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='11' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='15' AND sexe='F'`

//         let sqli4 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='16' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='20' AND sexe='M'`
//         let sqli4F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='16' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='20' AND sexe='F'`

//         let sqli5 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='21' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='25' AND sexe='M'`
//         let sqli5F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='21' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='25' AND sexe='F'`

//         let sqli6 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='26' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='30' AND sexe='M'`
//         let sqli6F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='26' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='30' AND sexe='F'`

//         let sqli7 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='31' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='35' AND sexe='M'`
//         let sqli7F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='31' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='35' AND sexe='F'`

//         let sqli8 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='36' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='40' AND sexe='M'`
//         let sqli8F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='36' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='40' AND sexe='F'`

//         let sqli9 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='41' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='45' AND sexe='M'`
//         let sqli9F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='41' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='45' AND sexe='F'`

//         let sqli10 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='46' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='50' AND sexe='M'`
//         let sqli10F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='46' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='50' AND sexe='F'`

//         let sqli11 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='51' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='55' AND sexe='M'`
//         let sqli11F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='51' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='55' AND sexe='F'`

//         let sqli12 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='56' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='60' AND sexe='M'`
//         let sqli12F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='56' AND (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)<='60' AND sexe='F'`
        
//         let sqli13 = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='60' AND sexe='M' `
//         let sqli13F = `SELECT COUNT(DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0) AS age FROM personne 
//         WHERE (DATE_FORMAT(FROM_DAYS(TO_DAYS(NOW())- TO_DAYS(dateNais)), '%Y')+0)>='60' AND sexe='F' `
        
//         //let sql2 = ``;
//         //let tab = [];
//         //tab[0] = sql; tab[1] = sql2; res.send({age:results}) 
        // con.query(sqli, (err, resultsH)=>{
        //      if(err) throw err;
        //      con.query(sqli2, (err, results2H)=>{
        //         if(err) throw err;
        //         con.query(sqli3, (err, results3H)=>{
        //                 if(err) throw err;
        //                 con.query(sqli4, (err, results4H)=>{
        //                         if(err) throw err;
        //                         con.query(sqli5, (err, results5H)=>{
        //                                 if(err) throw err;
        //                                 con.query(sqli6, (err, results6H)=>{
        //                                         if(err) throw err;
        //                                         con.query(sqli7, (err, results7H)=>{
        //                                                 if(err) throw err;
        //                                                 con.query(sqli8, (err, results8H)=>{
        //                                                         if(err) throw err;
        //                                                         con.query(sqli9, (err, results9H)=>{
        //                                                                 if(err) throw err;
        //                                                                 con.query(sqli10, (err, results10H)=>{
        //                                                                         if(err) throw err;
        //                                                                         con.query(sqli11, (err, results11H)=>{
        //                                                                                 if(err) throw err;
        //                                                                                 con.query(sqli12, (err, results12H)=>{
        //                                                                                         if(err) throw err;
        //                                                                                         con.query(sqli13, (err, results13H)=>{
        //                                                                                                 if(err) throw err;
        //                                                                                                 con.query(sqliF, (err, resultsF)=>{
        //                                                                                                         if(err) throw err;
        //                                                                                                         con.query(sqli2F, (err, results2F)=>{
        //                                                                                                                 if(err) throw err;
        //                                                                                                                 con.query(sqli3F, (err, results3F)=>{
        //                                                                                                                         if(err) throw err;
        //                                                                                                                         con.query(sqli4F, (err, results4F)=>{
        //                                                                                                                                 if(err) throw err;
        //                                                                                                                                 con.query(sqli5F, (err, results5F)=>{
        //                                                                                                                                         if(err) throw err;
        //                                                                                                                                         con.query(sqli6F, (err, results6F)=>{
        //                                                                                                                                                 if(err) throw err;
        //                                                                                                                                                 con.query(sqli7F, (err, results7F)=>{
        //                                                                                                                                                         if(err) throw err;
        //                                                                                                                                                         con.query(sqli8F, (err, results8F)=>{
        //                                                                                                                                                                 if(err) throw err;
        //                                                                                                                                                                 con.query(sqli9F, (err, results9F)=>{
        //                                                                                                                                                                         if(err) throw err;
        //                                                                                                                                                                         con.query(sqli10F, (err, results10F)=>{
        //                                                                                                                                                                                 if(err) throw err;
        //                                                                                                                                                                                 con.query(sqli11F, (err, results11F)=>{
        //                                                                                                                                                                                         if(err) throw err;
        //                                                                                                                                                                                         con.query(sqli12F, (err, results12F)=>{
        //                                                                                                                                                                                                 if(err) throw err;
        //                                                                                                                                                                                                 con.query(sqli13F, (err, results13F)=>{
        //                                                                                                                                                                                                         if(err) throw err;
//                                                                                                                                                                                                                 res.json({
//                                                                                                                                                                                                                         age:resultsH,
//                                                                                                                                                                                                                         age13:results13H,
//                                                                                                                                                                                                                         age2:results2H,
//                                                                                                                                                                                                                         age3:results3H,
//                                                                                                                                                                                                                         age4:results4H,
//                                                                                                                                                                                                                         age5:results5H,
//                                                                                                                                                                                                                         age6:results6H,
//                                                                                                                                                                                                                         age7:results7H,
//                                                                                                                                                                                                                         age8:results8H,
//                                                                                                                                                                                                                         age9:results9H,
//                                                                                                                                                                                                                         age10:results10H,
//                                                                                                                                                                                                                         age11:results11H,
//                                                                                                                                                                                                                         age12:results12H,
//                                                                                                                                                                                                                         ageF:resultsF,
//                                                                                                                                                                                                                         age13F:results13F,
//                                                                                                                                                                                                                         age2F:results2F,
//                                                                                                                                                                                                                         age3F:results3F,
//                                                                                                                                                                                                                         age4F:results4F,
//                                                                                                                                                                                                                         age5F:results5F,
//                                                                                                                                                                                                                         age6F:results6F,
//                                                                                                                                                                                                                         age7F:results7F,
//                                                                                                                                                                                                                         age8F:results8F,
//                                                                                                                                                                                                                         age9F:results9F,
//                                                                                                                                                                                                                         age10F:results10F,
//                                                                                                                                                                                                                         age11F:results11F,
//                                                                                                                                                                                                                         age12F:results12F,
//                                                                                                                                                                                                                 })
//                                                                                                                                                                                                         })
//                                                                                                                                                                                                 })
//                                                                                                                                                                                         })
//                                                                                                                                                                                 })
//                                                                                                                                                                         })
//                                                                                                                                                                 })
//                                                                                                                                                         })
//                                                                                                                                                 })
//                                                                                                                                         })
//                                                                                                                                 })
//                                                                                                                         })
                                                                                                                
//                                                                                                                 })
//                                                                                                         })
//                                                                                                 })
//                                                                                         })
//                                                                                 })
//                                                                         })
//                                                                 })
//                                                         })
//                                                 })
//                                         })
//                                 })
//                         })
//                 })
//         })
// })
// }



