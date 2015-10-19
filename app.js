var profile = require('./profile');

var usernames = process.argv.slice(2);

// retrieve data and print relevant stats about each user
usernames.forEach(profile.get);
