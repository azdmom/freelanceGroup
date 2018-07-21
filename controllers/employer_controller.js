var express = require("express");
var router = express.Router();
var db = require("../models");


router.post("/employeradd", function(req, res) {
 
  db.employer.create({
    EmployerName: req.body.EmployerName,
    Industry: req.body.Industry,
    ContactName: req.body.ContactName,
    ContactPhone: req.body.ContactPhone,
    ContactEmail: req.body.ContactEmail,
    Fields: req.body.Fields,
  })
  // pass the result of our call
    .then(function(dbEmployer) {
    // log the result to our terminal/bash window
      console.log(dbEmployer);
      // redirect
      res.redirect("/");
    });
});


module.exports = router;