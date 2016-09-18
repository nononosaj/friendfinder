

var friendsArray = require('../data/friends.js');

// ROUTING
module.exports = function(app){

// API GET Requests
		app.get('/api/friends', function(req, res){
		res.json(tableData);
		});

// API POST Requests
		app.post('/api/friends',function(req,res){

		var newFriend = req.body;
		
		friendsList.push(newFriend);

		
		var totalDifference = 0;

		
		var differencesArray = [];
		

		for (var i = 0; i < (friendsList.length - 1); i++){
			
			
		for (var j = 0; j < friendsList[i].scores.length; j++){
				totalDifference += Math.abs(friendsList[i].scores[j] - newFriend.scores[j]);
			}

			differencesArray.push(totalDifference);
			totalDifference = 0;
		}
		
		var bestMatch = friendsList[differencesArray.indexOf(Math.min.apply(null, differencesArray))];

		res.send(bestMatch);

		});
}

