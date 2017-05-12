var express = require('express');
var router = express.Router();
var db = require('../models');
var petfinder = require('pet-finder-api')('7810ae652b6934051e946af7af8cd39d', 'bfbcd5a247aa9c333a7b4b93e9ce395a');


/////////////////////////////////////////////////////////////////////////////////////
///////////////////////GET LIST OF DOGS AVAILABLE IN OUR SHELTER////////////////////
///////////////////////////////////////////////////////////////////////////////////
router.get("/rbc_shelter", function(req, res) {

db.adoptablePets.findAll({

  where: {
    adopted: false
  }
}).then(function(result){


      var adoptable = result;

res.render("petdisplay", {
  animal: adoptable,
  banner: "OUR PETS",
  mylink: "/outside",
  words: "Not finding the pet you want please click here and we'll show you some pets available in the area!" 
});

  });
});


/////////////////////////////////////////////////////////////////////////////////////
///////////////////////GET LIST OF DOGS AVAILABLE IN AREA///////////////////////////
///////////////////////////////////////////////////////////////////////////////////

router.get("/other_shelters", function(req, res) {

petfinder.findPet("08902", { animal: "dog" }, function(err, results) {

var animal = [];
var listCount = results.length
for(i=0;i<listCount;i++) {
  var Animals = {
    name: results[i].name,
    media: results[i].media.photos[1].pn,
    animal: results[i].animal,
    breeds: results[i].breeds,
    sex: results[i].sex,
    description: results[i].description
  }
  animal.push(Animals);
}

res.render("petdisplay", {
  animal: animal, 
  banner: "Other Shelters"
});
});
});


/////////////////////////////////////////////////////////////////////////////////////
///////////////////////ADD A PET TO OUR SHELTER FORM////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


router.get("/addpet", function(request, response){
var display = {
  banner: "ADD A NEW PET THAT IS UP FOR ADOPTION"
};
  response.render("addpet", display);
})  




/////////////////////////////////////////////////////////////////////////////////////
/////////////////ADD A PET TO OUR SHELTER DATABASE /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
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
    response.redirect("/addpet")
  })
})



/////////////////////////////////////////////////////////////////////////////////////
/////////////////UPDATE A PET IN OUR SHELTER DATABASE TO ADOPTED////////////////////
///////////////////////////////////////////////////////////////////////////////////
router.put("/update_pet", function(request, response){


db.adoptablePets.update({
  adopted: request.body.adopted
},
  {   
  where: {
    id: request.body.this
  }


}).then(function(result){

response.redirect("/pets_maintenance")

})
})


/////////////////////////////////////////////////////////////////////////////////////
/////////////////GETS A LIST OF ALL OUR PETS AVAILABLE FOR ADOPTION/////////////////
///////////////////////////////////////////////////////////////////////////////////
  
router.get("/pets_maintenance", function(request, response) {

  db.adoptablePets.findAll({}).then(function(result){

    var adoptable = {
      adoptablePets: result,
      banner: "CURRENT LIST OF PETS UP FOR ADOPTION AT RBC"
    };
    response.render("index", adoptable);
  });
  
});



//////exports router//////
module.exports = router;