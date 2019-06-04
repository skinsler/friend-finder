//define some friends for testing
let friendsArr = [
    {
        "name": "Tiny Tim",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tiny_Tim.jpg/220px-Tiny_Tim.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        "name": "Max Power",
        "photo": "https://static.simpsonswiki.com/images/f/fb/Homer%27s_new_name.png",
        "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        "name": "Joe Blow",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Jonathan_Blow%2C_Gamelab_2018_%2842432130094%29.jpg/220px-Jonathan_Blow%2C_Gamelab_2018_%2842432130094%29.jpg",
        "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    }

    
];

//return closest match
let findFriend = function(f) {
    let match = {};
    let minDifference;
    for (let i = 0; i < friendsArr.length; i++) {
        let totalDifference = 0;
        for (let j = 0; j < friendsArr[i].scores.length; j++) {
          totalDifference += Math.abs(f.scores[j] - friendsArr[i].scores[j]);
        }
        //determine if any subsequent elements match better than the 0th element 
        if (i===0) {
            minDifference = totalDifference
            match = friendsArr[i];   
        }
        else if (totalDifference <= minDifference) {
          minDifference = totalDifference;
          match = friendsArr[i];
        }
      }
    
    return match;
};

//export array and function
module.exports = {
    friendsArr : friendsArr,
    findFriend : findFriend
    }