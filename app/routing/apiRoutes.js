const express = require('express');
const Friends = require("../data/friends");

var apiRoutes = express.Router();

//show all friends
apiRoutes.get("/api/friends", function(req, res) {
    res.json(Friends.friendsArr);
});

//take a friend, return their closest match, and add them to possible friends
apiRoutes.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    var match = Friends.findFriend(newFriend);
    
    Friends.friendsArr.push(newFriend);

    res.json(match);
});

module.exports = apiRoutes;