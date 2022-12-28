var mysql=require('mysql');
require('dotenv').config()

 var configuration={
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME, 
  } 
var con = mysql.createPool(configuration);
 


module.exports = con;
