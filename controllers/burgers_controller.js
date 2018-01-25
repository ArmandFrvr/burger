var express = require("express");
var burger = require("../app/models/burger.js");

var router = express.Router();

// Main page
router.get("/", function(req, res) {
  console.log("burgers_controller.js");
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// New burger
router.post("/api/addburger", function(req, res) {
  console.log("posting");
  burger.create(req.body.name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// Eat burger
router.put("/api/burgers/:id", function(req, res) {
  burger.eat(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});








module.exports = router;