const mysql = require('mysql');
const express = require('express');


//create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'stage'
});
db.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected');
});



module.exports = db;