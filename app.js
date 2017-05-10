// Import modules
var express = require('express');
var app = express();
var path = require('path');

var petfinder = require('pet-finder-api')('7810ae652b6934051e946af7af8cd39d', 'bfbcd5a247aa9c333a7b4b93e9ce395a');

petfinder.findShelter('Philadelphia, PA', {}, function(err, shelters) {
	var shelterid = shelters[1].id;
    petfinder.getPetsInShelter(shelterid, { 'animal': 'Dog' }, function(err, pets) {
        //pets 3 only because pets[0] with my search didn't come up with results maybe a closed
        //shelter
    for (i=0; i<5; i++){
    	console.log("====================================================================================");
    	console.log("====================================================================================");     
        console.log(pets[i].name);
        console.log("====================================================================================");     
        console.log(pets[i].sex);
        console.log("====================================================================================");
        console.log(pets[i].age);
        console.log("====================================================================================");
        console.log(pets[i].size);
        console.log("====================================================================================");
        console.log(pets[i].animal);
        console.log("====================================================================================");
        console.log(pets[i].contact);
        console.log("====================================================================================");
        console.log(pets[i].breeds);
        console.log("====================================================================================");
        console.log(pets[i].media.photos[2].pnt);
        console.log("====================================================================================");
        console.log(pets[i].description);
        console.log("====================================================================================");
    	console.log("====================================================================================");
    }

    });
});
// var petfinder = require('pet-finder-api')('7810ae652b6934051e946af7af8cd39d', 'bfbcd5a247aa9c333a7b4b93e9ce395a');



// petfinder.findPet("07093", { animal: "dog" }, function(err, pets) {
//     for (var i = 0; i < pets.length; i++) {
//         console.log(pets[i].animal);
//     }
// });

// Define the port to run on
app.set('port', 3000);

// Get list of breeds 
// petfinder.getBreedList('bird', function(err, breeds) {
//   console.log(breeds);
// });


// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Find Pets on port ' + port);
});
