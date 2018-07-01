var express = require("express");
var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);
app.use(express.static("public"));

var routes = require("./controllers/freelancer_controller.js");
var routes = require("./controllers/employer_controller.js");

app.use(routes);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});
