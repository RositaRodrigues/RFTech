angular.module('starter')

.factory('Courses', function() {
  // Might use a resource here that returns a JSON array


    var courses = [

     {
      code:'comp233',
       name:'Networks',
       year:'2015-16',
       uniCode:'102',
       uniName:'University of Southampton',
       link: 'http://google.co.uk' ,
       about: 'Second from. Tree stars is fifth greater. Bring Third deep there without and given grass may hi'
    
     },

       {
        code:'comp3434',
         name:'computational biology ',
         year:'2015-16',
         uniCode:'102',
         uniName:'University of Southampton',
         link: 'http://google.co.uk' ,
         about: 'Second from. Tree stars is fifth greater. Bring Third deep there without and given grass may hi'
         
       },
        {
        code:'comp9090',
         name:'algorithms  ',
         year:'2014-15',
         uniCode:'102',
         uniName:'University of Southampton',
         link: 'http://google.co.uk' ,
         about: 'Second from. Tree stars is fifth greater. Bring Third deep there without and given grass may hi'
         
       },
        {
        code:'comp1234',
         name:'history of computing  ',
         year:'2015-16',
         uniCode:'102',
         uniName:'University of Southampton',
         link: 'http://google.co.uk' ,
         about: 'Second from. Tree stars is fifth greater. Bring Third deep there without and given grass may hi'
         
       },
        {
        code:'domp2828',
         name:'distributed systems ',
         year:'2013-14',
         uniCode:'102',
         uniName:'University of Southampton',
         link: 'http://google.co.uk' ,
         about: 'Second from. Tree stars is fifth greater. Bring Third deep there without and given grass may hi'
         
       }];
       
       var reviews = [
       {
         id: 0,
         courseCode:"comp2828",
         author: "eggs11", 
         courseName:"distributed systems",
         comment: "great course , great laugh as teacher was a clown . no really he was !",
         dateCreated:"23/4/2016",
         timeCreated: "12:00",
         rating: 3, 
         upvotes: 3, 
         downvotes: 23
       }

    ];
      

  return {
    getCourses: function() {
      return courses;
    },
    getReviews: function() {
      return reviews;
    },
    getCourse: function(code){
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].code === parseInt(code)) {
          return courses[i]; //return the course witht that code  
        }
      }
      return null;
    },
    getUserReview:function(username){
      var list = [];
      for (var i = 0; i < reviews.length; i++) 
      {
          if(reviews[i].author == username)
          {
            list.push(reviews[i]);
            console.log('found the user');
          }
          else
          {
              console.log('user not found');

          }
      }
      return list;
    },
    getCourseName: function(courseCode){
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].code == courseCode) {
          console.log('found it ');
            return courses[i].name;
        }
        else{
          console.log('cant find course with that course code');
        }
      }
    },
    upvote: function(reviewID) {
      for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].id === parseInt(reviewID)) {
              reviews[i].upvotes += 1;
        }
      }
     
    },
    downvote: function(reviewID) {
      for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].id === parseInt(reviewID)) {
              reviews[i].downvotes -= 1;
        }
      }
     
    },
    //from review list 
    getReview: function(reviewID){
        for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].id === parseInt(userID)) {
              return reviews[i];
        }
      }
    },
    //for cousrse page 
    //get all the reviews with this course code 
    getCourseReviews: function(courseCode) {
      var list = [];
      for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].courseCode == courseCode) {
         list.push(reviews[i]);
          
        }
      }
      return list;
    },
     generateUUID: function(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
},
    remove: function(chat) {
      courses.splice(courses.indexOf(chat), 1);
    },
  
   // add a review object to list of reviews
   //dont need this , will use a factory in the controller to get all reviews then push the review to it :)
    createReview: function(review) {
      reviews.push(review);
    },
    //to be used for when crating a review we would calll this to get the user's full name to use for the author fiedl of a review
    getUserFullName: function(userID) {
      for (var i = 0; i < users.length; i++) {
        if (usres[i].id === parseInt(userID)) {
          return users[i].name;
        }
      }
      return null;
    },
    get: function(chatId) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(chatId)) {
          return courses[i];
        }
      }
      return null;
    }
  };
})


// .service('Settings', function () {
//     var settings = {
//     loggedIn: false,
//     user: "l"
//   };

//     return {
//     set: function(bool,username){
//     settings.loggedIn = bool;
//     settings.user = username;
//     console.log(bool + username);
//   },
//     all: function() {
//       return settings.loggedIn;
//     },
//     theUser: function() {
//       return settings.user;
//     },
//      name: function() {
//       return settings.user;
//     },
//     remove: function(user) {
//       users.splice(users.indexOf(user), 1);
//     },
//     get: function(userId) {
//       for (var i = 0; i < users.length; i++) {
//         if (users[i].id === parseInt(userId)) {
//           return users[i];
//         }
//       }
//       return null;
//     }
//   };
// })

.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [{
    id: 0,
    userName:'spag22' ,
    name: 'Jane Does',
    uniName: 'Solent',
    reviewsByMe: [],
    bookmarks: [],
    password: 'spago',
    email: 'ja@hotmail.com'

  }, {
    id: 1,
    userName:'eggs11' ,
    name: 'Dan Bowe',
    uniName: 'Reading',
    reviewsByMe: [],
    bookmarks: [],
    password: 'eggsbacon',
    email: 'dan@hotmail.com'
  }
];


  return {
    all: function() {
      return users;
    },
    getList: function(userId,In) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].userName == userId) {
          return users[i];
        }
      }
      return null;
    }
    ,
    remove: function(user) {
      users.splice(users.indexOf(user), 1);
    },
    get: function(userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;
    },
      getUN: function(username) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].userName == username) {
          return users[i];
        }
      }
      return null;
    }
  };
});
