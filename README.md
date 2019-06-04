# friend-finder

## Overview
In this activity, I built a compatibility-based "FriendFinder" application. This full-stack site takes in results from your users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

Express is used to handle routing. The app is also deployed to Heroku at https://peaceful-stream-67258.herokuapp.com/ so other users can fill it out.

## Screenshots

### Navigate to the survey

![start](docs/screenshots/start.gif?raw=true "start")

### Demonstration

New users enter their info and take the survey. The app starts with three sample users. 

![demonstration](docs/screenshots/demonstration.gif?raw=true "demonstration")

### API

A GET request to /api/friends returns a JSON response of all the users.

![api](docs/screenshots/api.gif?raw=true "api")
