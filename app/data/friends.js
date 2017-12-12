// ===============================================================================
// DATA
// Below data will hold all of the Friend Informaiton.
// Initially we just set it equal to a "dummy" friend.
// ===============================================================================

var friendsArray = [
  {
   	name: "Ahmed",
    photo: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
    scores: "[]"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
