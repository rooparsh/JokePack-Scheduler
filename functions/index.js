const functions = require('firebase-functions');
var request = require('request');


exports.scheduledFunctionCrontab = functions.pubsub.schedule('5 11 * * *')
  .timeZone('Asia/Kolkata')
  .onRun((context) => {
  console.log('This will be run every day at 11:05 AM!');

  request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Respose>>>",body);
    }
})


  return null;
});

