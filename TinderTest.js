

var request = require('request');
var tinder = require('tinderjs');
var fs = require('fs');
var client = new tinder.TinderClient();
var keys = require('./authKeys.js');

var accountSid = 'ACe25d9d023ac6181dd63481fa866a5e06';
var authToken = '15b7f729e05ce1162eb67a3ab107b5f0';
var twilio = require('twilio')(accountSid, authToken);

var FB_USER_TOKEN = keys.fbUserToken;
var FB_USER_ID = keys.fbUserID;
console.log(FB_USER_TOKEN)
console.log(FB_USER_ID)


//var URL = "http://i.imgur.com/REdTb8a.jpg";

/* Facial Recognition API served up by mashape. 
If error being thrown then go to MashApe to get a new key*/ 
var runFacialRecognition = function(URL, cb){
  var options = {
    url: 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?url='+URL,
    headers: {
      'X-Mashape-Key': 'H7SUTDerX7mshZfgezL0oKl0E8hYp1WKpHhjsn42V6rHAGX5ms',
      Accept: 'application/json'
    }
  }
  request(options, function(error, response, body){

    if(!error && response.statusCode == 200){

      var parsed = JSON.parse(body)

      if (parsed.face[0] !== undefined){
        var attributes = parsed.face[0].attribute;
        cb(attributes);
      }
    } 
  })
}
function autoSwiper(){
client.authorize(
  FB_USER_TOKEN,
  FB_USER_ID,
  function() {
    client.getRecommendations(1, function(error, data){
      if(error){
          console.log("There was an error from getting recommendations", error)
        }
      var id = data.results[0]._id;
      var name = data.results[0].name;
      var photoURL = data.results[0].photos[0].url;
        runFacialRecognition(photoURL, function(val){
          var race = val.race.value;
          console.log("Analyzing facial features...!")
          if(race === 'White' || race === 'Asian'){
            client.like(id, function(error, data){
              if(data.matched){
                fs.appendFile('likeList.txt', name, function(err){
                  console.log("There was an error writing to file", err)
                })
                twilio.messages.create({
                  body: "You matched with" + name,
                  to: "+14088880999",
                  from: "+14084711842",
                  }, function (err, message) {
                    console.log("Message sent", message);
                  })
                console.log("You have matched with " + name + " !")
                console.log("Here is one of her pics: " + photoURL)
              }
              if(error){
                console.log("There was an error matching", error)
              }
            });
          }
        });
      });
  });
}

autoSwiper();