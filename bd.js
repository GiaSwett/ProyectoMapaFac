const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "sql8.freesqldatabase.com",
    user: "sql8816222",
    password: "hs2xVcIyRq",
    database: "sql8816222",
    port: 3306
});

conexion.connect((err) => {
    if (err) {
        console.error("Error de conexión: " + err);
        return;
    }
    console.log("Conexión exitosa a MySQL");
});

module.exports = conexion;
