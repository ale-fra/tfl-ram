


 


var accountSid = 'AC780e02b4a7335e16d919d73ddf6dad1c';
var authToken = 'b6c2daf60461a3bf52065b4af8776ff8';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({ to: "+447452986739",
from: "+447452986739",
body: "This is the ship that made the Kessel Run in fourteen parsecs?",
mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",  },
function(err, message) { console.log("hello"); });
