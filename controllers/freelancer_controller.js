var express = require("express");
var router = express.Router();
var db = require("../models");

// post route to create burgers
router.post("/freelanceadd", function(req, res) {
  // edited burger create to add in a burger_name
  db.freelancer.create({
    FName: req.body.FName,
    LName: req.body.LName,
    Email: req.body.Email,
    Phone: req.body.Phone,
    City: req.body.City,
    State: req.body.State,
    Fields: req.body.Fields,
  })
  // pass the result of our call
    .then(function(dbFreelancer) {
    // log the result to our terminal/bash window
      console.log(dbFreelancer);
      // redirect
      res.redirect("/");
    });
});


module.exports = router;
