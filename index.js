var express = require("express");
var bodyParser = require("body-parser");
var orm = require('orm');
var nodemailer = require('nodemailer');

var app = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);
app.use(express.static("public"));

var routes1 = require("./controllers/freelancer_controller.js");
var routes2 = require("./controllers/employer_controller.js");

app.use(routes1);
app.use(routes2);


var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'FemaleTechFreelancers@gmail.com',
         pass: 'FTF2018!'
     }
 });


 req.models.freelancer.find({ email: email}), function (err, freelancer){
 const mailOptions = {
  from: 'FemaleTechFreelancers@gmail.com', // sender address
  to: email, // list of receivers
  subject: 'Thank you for registering with Female Tech Freelancers!', // Subject line
  html: '<p>We are so excited to reach back out to you as soon as our site is up and running! Please look out for pending news of our upcoming Launch Party! </p>'// plain text body
};
 };

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});

