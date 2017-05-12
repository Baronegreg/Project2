var express = require('express');
var router = express.Router();
var db = require('../models');




///////////////////////////////////////////////////////////////////////////////////
/////////////////////////GET DOG WALKERS CURRENLTY WORKING////////////////////////
/////////////////////////CAN MAKE WALKERS INACTIVE FROM THIS PAGE////////////////
////////////////////////////////////////////////////////////////////////////////



router.get("/walker", function(request, response){
    db.dogWalker.findAll({
      where: {
        workingCurrently: true
      }
    }).then(function(result){

    var walkers = {
      dogWalker: result,
      banner: "CURRENT LIST OF DOG WALKERS"
    };
    response.render("walker", walkers);
  });

});


///////////////////////////////////////////////////////////////////////////////////
/////////////////////////GET DOG WALKERS CURRENLTY WORKING////////////////////////
/////////////////////////CAN WALK THAT SIZE AND DURING THAT TIME/////////////////
////////////////////////////////////////////////////////////////////////////////

router.get("/getdogwalkers", function(request, response){
  var sizeArray = [];

  if(request.query.size === "l"){
    sizeArray.push("l");
  };
  
  if(request.query.size === "m"){
    sizeArray.push("l");
    sizeArray.push("m");
  };
  
  if(request.query.size === "s"){
    sizeArray.push("s");
    sizeArray.push("m");
    sizeArray.push("l");
  };
console.log(sizeArray);

    db.dogWalker.findAll({
      where: {
        workingCurrently: true, 
        start: {
          $lte: request.query.time
        },
        endTime: {
          $gte: request.query.time
        },
          largestDogWillingToWalk: {
          $in: sizeArray
        }
        }
    }).then(function(result){

    var walkers = {
      dogWalker: result,
      banner: "CURRENT LIST OF DOG WALKERS AVAILABLE"
    };

response.render("availwalker", walkers);
     });

});


///////////////////////////////////////////////////////////////////////////////////
/////////////////////////UPDATE DOG WALKERS /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


router.put("/:id", function(request, response){


db.dogWalker.update({
workingCurrently: request.body.workingCurrently
},

{
  where: {
    id: request.params.id
  }


}).then(function(result){

response.redirect("walker")

})


})


///////////////////////////////////////////////////////////////////////////////////
/////////////////////////ADD NEW DOG WALKERS /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


router.get("/dogwalkerform", function(request, response){
var display = {
  banner: "ADD A DOG WALKER"
};

  response.render("dogwalkerform", display);
})  




///////////////////////////////////////////////////////////////////////////////////
/////////////////////////POST TO ADD NEW DOG WALKERS //////////////////////////////
/////////////////////////REDIRECT TO PAGE SHOWING THEM ///////////////////////////
//////////////////////////////////////////////////////////////////////////////////


router.post('/', function(request, response){

db.dogWalker.create({
    name: request.body.newwalker,
    start: request.body.start,
    endTime: request.body.endtime,
    small: request.body.small,
    medium: request.body.medium,
    large: request.body.large,
    email: request.body.email,
    phone: request.body.phone
  }).then(function(result){
    response.redirect("/walker")
  })

})

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////ROUTE TO ALL PAST WORKERS //////////////////////////////
/////////////////////////CAN MOVE WORKERS BACK TO ACTIVE////////////////////////
///////////////////////////////////////////////////////////////////////////////

router.get("/pastworker", function(request, response){
    db.dogWalker.findAll({
      where: {
        workingCurrently: false
      }
    }).then(function(result){

    var walkers = {
      dogWalker: result,
      banner: "LIST OF INACTIVE DOG WALKERS"
    };
    response.render("pastdogwalkers", walkers);
  });

});



module.exports = router;