const mysql = require('mysql');
const sqlconf = require('../../config/sqlconfig');

const connection = mysql.createConnection(sqlconf.mysql);

 exports.connectdatabase= async function(sql){
    var result;
    try {
        connection.connect();
        connection.query(sql, function (err, rows, fields) {

            if (err) {
                result = {
                    err:'conectionerr'
                };
            } else {
                result = rows;
            }
            console.log(result);
            return result;
        });
        connection.end();
    }catch (e){
        result= {
            err:'conectionerr'
        }
    }
}
