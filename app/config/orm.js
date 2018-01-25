var connection = require("./connection.js");

var orm = {

  selectAll: function(table, cb) {

    let query = "SELECT * from ??";
    let params = [table];

    connection.query(query, params, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, field, value, cb) {

    let query = "INSERT INTO ?? SET ?? = ?";
    let params = [table, field, value];

    connection.query(query, params, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, field, newValue, whereField, whereValue, cb) {

    let query = "UPDATE ?? SET ?? = ? where ?? = ?";
    let params = [table, field, newValue, whereField, whereValue];

    connection.query(query, params, function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;