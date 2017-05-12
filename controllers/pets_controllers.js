var express = require('express');
var router = express.Router();
var db = require('../models');


///////////////////////////////////////////////////////////////////////////////////////////
  
router.get("/", function(request, response) {

  db.adoptablePets.findAll({}).then(function(result){

    var adoptable = {
      adoptablePets: result,
      banner: "CURRENT LIST OF PETS UP FOR ADOPTION AT RBC"
    };
    response.render("index", adoptable);
  });
  
});
//////////////////////////////////////////////////////////////////////////////////////////
router.get("/home", function(requeset, response){

  response.render("home");
});

//////////////////////////////////////////////////////////////////////////////////////////
router.get("/local", function(req, res) {


db.adoptablePets.findAll({

  where: {
    adopted: false
  }
}).then(function(result){


      var adoptable = result;

res.render("petdisplay.handlebars", {
  animal: adoptable,
  banner: "OUR PETS",
  mylink: "/outside",
  words: "Not finding the pet you want please click here and we'll show you some pets available in the area!" 
});

  });
});
////////////////////////////////////////////////////////////////////////////////////////  
router.get("/about", function(request, response){

  response.render('about');
})
////////////////////////////////////////////////////////////////////////////////////////
router.get("/contact", function(request, response){

  response.render('contacts');

})


//////////////////////////////////////////////////////////////////////////////////////////

router.get("/outside", function(req, res) {


// db.adoptablePets.findAll({}).then(function(result){
//       var adoptable = result;
// res.render("petdisplay.handlebars", {
//   animal: adoptable,
//   banner: "OTHER SHELTERS"

// });
//   });


var petfinder = require('pet-finder-api')('7810ae652b6934051e946af7af8cd39d', 'bfbcd5a247aa9c333a7b4b93e9ce395a');
// animal will need to be changed to request.body.animal to search for the right kind of pet
// should this be in the models folder? 
// should setup form with request.body.zipcode and request.body.animal to pass in the values for the search or
// just the pet and hardcode in the zip for the shelter
petfinder.findPet("08902", { animal: "dog" }, function(err, results) {
  
  // console.log(animal)

//console.log(animal[1].media.photos[1].pn);
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

res.render("petdisplay.handlebars", {
  animal: animal, 
  banner: "Other Shelters"
    

});


});




});



///////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////  

router.get("/dogwalkerform", function(request, response){
var display = {
  banner: "ADD A DOG WALKER"
};

  response.render("dogwalkerform", display);
})  
/////////////////////////////////////////////////////////////////////////////////////////////

router.get("/addpet", function(request, response){
var display = {
  banner: "ADD A NEW PET THAT IS UP FOR ADOPTION"
};
  response.render("addpet", display);
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////



router.get("/hi", function(request, response){
  console.log('hit hi route');

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





// router.get('/availwalker', function(request, response){




// })




module.exports = router;