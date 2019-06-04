const express = require('express');
const Friends = require("../data/friends");

const apiRoutes = express.Router();

//show all friends
apiRoutes.get("/api/friends", function(req, res) {
    res.json(Friends.friendsArr);
});

//take a friend, return their closest match, and add them to possible friends
apiRoutes.post("/api/friends", function(req, res) {
    let newFriend = req.body;
  
    let match = Friends.findFriend(newFriend);
    
    Friends.friendsArr.push(newFriend);

    res.json(match);
});

module.exports = apiRoutes;