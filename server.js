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

// Handlebars.registerPartial("walkers", Handlebars.templates("walkers"))

// not exactly sure if this is getting both routes..... 
// but it's listening
var routes = require("./controllers/pets_controllers.js");
// var routes2 = require("./controllers/petwalker-sitter_controllers.js");
app.use('/', routes); 



// app.listen(PORT, function() {
// 	console.log("App listening on PORT: " + PORT);
// });




db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});