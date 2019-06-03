const express = require('express');
const path = require("path");
const Friends = require("../data/friends");

var apiRoutes = express.Router();


apiRoutes.get("/api/friends", function(req, res) {
    // console.log("GETT!!!!!!");
    res.json(Friends.friendsArr);
});

apiRoutes.post("/api/friends", function(req, res) {
    var friend = req.body;
    Friends.findFriend();
    console.log("friend =" + JSON.stringify(Friends.friendsArr));
    
    // Friends.friends.push(friend);
    res.json(friend);
});

module.exports = apiRoutes;