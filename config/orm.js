var connection = require("./connection");

var orm = {
    selectAll: function(cb) {
        var query = "SELECT * from burgers";
        connection.query(query, function(err, res) {
            cb(res)   
        })
    },
    insertOne: function(burgerName, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUE (?)";
        connection.query(query, burgerName, function(err, res) {
            cb(res);
        })
    },
    updateOne: function(id, cb) {
        var query = "UPDATE burgers SET DEVOURED = 1 WHERE id = ?";
        connection.query(query, id, function(err, res) {
            cb(res);
        })
    }
}
module.exports = orm;


