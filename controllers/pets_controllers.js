var express = require('express');
var router = express.Router();
var db = require('../models');


///////////////////////////////////////////////////////////////////////////////////////////
  
router.get("/", function(request, response) {

  db.adoptablePets.findAll({}).then(function(result){

    var adoptable = {
      adoptablePets: result
    };
    response.render("index", adoptable);
  });
  
});
//////////////////////////////////////////////////////////////////////////////////////////
router.get("/local", function(req, res) {


db.adoptablePets.findAll({}).then(function(result){


      var adoptable = result;

res.render("petdisplay.handlebars", {
  animal: adoptable,
  banner: "OUR PETS"
});

  });


    // var petlist = {
    //   adoptablePets: result,
    //   banner: "RBC Pet Shelter"
    // };

// res.render("petdisplay.handlebars");
    // response.render("index", adoptable);

 // res.render("petdisplay.handlebars", {

 //    animal: petlist,
 //    banner: "RBC Pet Shelter"
 //  });


  // });


 



});
//////////////////////////////////////////////////////////////////////////////////////////

router.get("/outside", function(req, res) {


db.adoptablePets.findAll({}).then(function(result){


      var adoptable = result;

res.render("petdisplay.handlebars", {
  animal: adoptable,
  banner: "OTHER SHELTERS"
});

  });



});



///////////////////////////////////////////////////////////////////////////////////////////

router.get("/walker", function(request, response){
    db.dogWalker.findAll({}).then(function(result){

    var walkers = {
      dogWalker: result
    };
    response.render("walker", walkers);
  });

});

/////////////////////////////////////////////////////////////////////////////////////////////  

router.get("/dogwalkerform", function(request, response){


  response.render("dogwalkerform");
})  
/////////////////////////////////////////////////////////////////////////////////////////////

router.get("/addpet", function(request, response){

  response.render("addpet");
})  

////////////////////////////////////////////////////////////////////////////////////////////

router.get("/assistance", function(request, response){

  response.render("adopteeneedsawalker")
})


///////////////////////////////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////////////////////////

router.post('/addpet', function(request, response){



db.adoptablePets.create({
    name: request.body.newpet,
    sex: request.body.gender,
    age: request.body.age,
    size: request.body.size,
    animal: request.body.animal,
    contact: 'RCB Pet Shelter (908)-867-5309',
    breeds: request.body.breeds,
    media: request.body.media,
    description: request.body.description
  }).then(function(result){
    response.redirect("/")
  })


})
/////////////////////////////////////////////////////////////////////////////////////


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

///////////////////////////////////////this is not working for getting rid of pets//////////////////////////////////////////////

router.put("/", function(request, response){


db.adoptablePets.update({
  adopted: request.body.adopted
},
  {   
  where: {
    id: request.body.this
  }


}).then(function(result){

response.redirect("/")

})


})

module.exports = router;