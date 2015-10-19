var https = require('https');

// print user stats message
function printMessage(username, badgeCount, points) {
  var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in JavaScript';
  console.log(message);
}

// print error message
function printError(error) {
  console.log(error.message);
}

function get(username) {
  var data = '';

  // grab the data from treehouse
  var request = https.get('https://teamtreehouse.com/' + username + '.json', function(response) {
    response.on('data', function(chunk) {
      data += chunk;
    });

    response.on('end', function() {
      // parse the data
      try {
        data = JSON.parse(data);
      }
      catch(error) {
        printError(error);
      }

      // print relevant data
      printMessage(username, data.badges.length, data.points.JavaScript);
    });
  });

  // in case of connection error
  request.on('error', printError);
}

module.exports.get = get;
