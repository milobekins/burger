var orm = require("../config/orm");

module.exports = {
    selectAll: function(cb) {
        orm.selectAll(function(data) {
            cb(data);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(data) {
            cb(data);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, function(data) {
            cb(data);
        });
    }
}

