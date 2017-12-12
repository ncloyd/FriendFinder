// ===============================================================================
// DATA
// Below data will hold all of the Friend Informaiton.
// Initially we just set it equal to a "dummy" friend.
// ===============================================================================

var friendsArray = [
  {
   	"name": "Ahmed",
    "photo": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    "scores": [1, 3, 2, 4, 3, 5, 2, 4, 2, 1]
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
