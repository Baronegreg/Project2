var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
app.use("/cssfiles", express.static(__dirname + "/public"));

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ 
	extended: false 
}));

app.use(methodOverride("_method"));

app.engine("handlebars",exphbs({
	defaultLayout: 'main'
}));

app.set("view engine", "handlebars");


var routes = require("./controllers/pets_controllers.js");
var routes2 = require("./controllers/walker_controllers.js");
var routes3 = require("./controllers/home_controllers.js");


app.use('/', routes, routes2, routes3); 





db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});