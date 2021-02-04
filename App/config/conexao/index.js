const mysql = require('mysql')
 
const con  = mysql.createConnection({ 
    host:"localhost",
    port:"3306",
    database:"cardapio",
    password:"",
    user:"root"
 })

 con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})



 const query = (sql,callback) => {
     return con.query(sql,callback);
 };

module.exports = {
    con, query
}

