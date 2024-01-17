const con = require('../public/db/connexion');


module.exports = (req, res, next)=>{
        try {
            const { headers : {cookie}} = req;
            let values = {}
            try{
                if (cookie) {
                    values = cookie.split(';'). reduce((resultat, item) =>{
                        const data = item.trim().split('=');
                        return { ...resultat, [data[0]]: data[1] };
                    
                    }, {});
                }else{
                console.log('Probleme de cookie')
                }
            } 
            catch(err){
                console.log(err)
            }

            if(values.email && values.password){
                //console.log(values.email); console.log(values.password);
            console.log(req.headers.cookie) ;     

            let sql = 'SELECT pseudo, email, password FROM login where email=? Limit 1';
            values.email = values.email.replace('%40', '@');
            con.query(sql,values.email,(err, result)=>{
                //console.log(result[0].email);
                if(err) throw err;
                if (values.email == result[0].email && values.password == result[0].password) {
                    // res.redirect('/app/menage');
                    // d=1;
                    //res.json({nom : result[0].nom});
                    next();
                }else{
                    res.redirect('/app/login');
                }
                        
                    
                    // if(d==0){
                    //     res.redirect('/api/login');
                    // }
                
            });
            //next();
            }
            else{
                res.redirect('/app/login')
            }
            
        } catch(err){
            console.log(err)
        }
    
};