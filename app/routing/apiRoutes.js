// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");
console.log(friends)
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // API POST Requests
    app.post("/api/friends", function(req, res) {
    
      // Here we take the result of the user's survey POST and parse it.
        var newFriend = req.body;
        var userScores = newFriend.scores;
        
        var matchName = '';
        var matchPhoto = '';
        var totalDifference = 10000;

        console.log(friends)
        console.log(newFriend);
        // Loop through all the friend possibilities in the database. 

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            
            // Loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // We calculate the difference between the scores and sum them into the totalDifference
                // diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                if (diff < totalDifference) {

                    totalDifference = diff;
                    matchName = friends[i].name;
                    matchImage = friends[i].photo;
                }
            }
        }
        friends.push(newFriend);
        res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
    });
};