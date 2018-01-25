var orm = require("../config/orm.js");

// Burger model

var Burger = {

  all: function(cb) {
    console.log("burger.js all");
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(burgerName, cb) {
    orm.insertOne("burgers", "name", burgerName, function(res) {
      cb(res);
    });
  },

  eat: function(id, cb) {
    orm.updateOne("burgers", "eaten", true, "id", id, function(res) {
      cb(res);
    });
  }
}

module.exports = Burger;