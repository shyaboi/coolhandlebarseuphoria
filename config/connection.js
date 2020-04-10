const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "px4bozub3ubld6d6",
        password: "s9aok2094dkktp1q",
        database: "d7bt0zavdnb3jhmd.burgers"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;