const mysql = require('mysql');
const sqlconf = require('../../config/sqlconfig');

const connection = mysql.createConnection(sqlconf);

export function connectsql(sql){
    connection.connect();
    result;
    connection.query(sql,function(err,rows,fields){
        if(err){
           result = null;
        }else{
            result = rows;
        }
    });
    connection.end();
    return result;
}
