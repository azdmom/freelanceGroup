
var path = require("path");


module.exports = function(app) {
  
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/employer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employer.html"));
  });

 
}
