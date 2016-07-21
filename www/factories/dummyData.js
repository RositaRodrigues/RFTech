angular.module('starter')

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    coursecode:'2322' ,
    courseName: 'biology concepts',
    author: 'Ben Sparrow',
    comments: 'it was ok like?',
    rating: '3',
    time: '12:00',
    date: '12/7/2016',
    face:'img/ben.png'

  }, {
    id: 1,
    author: 'Max Lynx',
    coursecode:'2322' ,
    courseName: 'stuffy concepts',
    comments: 'You on your way?',
    rating: '4',
    time: '12:00',
    date: '2/7/2016',
    face: 'img/max.png'
  }, {
    id: 2,
    author: 'Adam Bradleyson',
    coursecode:'2322' ,
    courseName: 'maths concepts',
    comments: 'teacher was hilr ',
    rating: '2',
    time: '12:00',
    date: '12/7/2016',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    author: 'Perry Governor',
    coursecode:'2322' ,
    courseName: 'science concepts',
    comments: 'it was aight ?',
    rating: '2',
    time: '12:00',
    date: '14/7/2016',
    face: 'img/perry.png'
  }, {
    id: 4,
    author: 'Mike Harrington',
    coursecode:'2322' ,
    courseName: 'biology concepts',
    comments: 'the course was ok , could have been beter doe',
    rating: '5',
    time: '12:00',
    date: '12/7/2016',
    face: 'img/mike.png'
  }];


  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.service('Settings', function () {
    var settings = {
    loggedIn: false,
    user: "l"
  };

    return {
    set: function(bool,username){
    settings.loggedIn = bool;
    settings.user = username;
    console.log(bool + username);
  },
    all: function() {
      return settings.loggedIn;
    },
    theUser: function() {
      return settings.user;
    },
     name: function() {
      return settings.user;
    },
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
    }
  };
})

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
    name: 'Dan bowe',
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
      getUN: function(userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].userName == userId) {
          return users[i];
        }
      }
      return null;
    }
  };
});
