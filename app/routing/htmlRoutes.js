const express = require('express');
const path = require("path");
const htmlRoutes = express.Router();


htmlRoutes.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

htmlRoutes.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = htmlRoutes;