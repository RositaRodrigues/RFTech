angular.module('starter')

.controller('MyReviewsCtrl', function($scope, Chats,Users,Settings) {

// $scope.courseCode = "jane hi ";
// $scope.comments = "jsne";
// console.log($scope.courseCode);



$scope.todoAdd = function()
{
    var date  = new Date();
    var currentTime = date.getHours() + '.' + date.getMinutes();
    var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
    
    $scope.chats = Chats.all();

    console.log(($scope.chats.length));
    console.log($scope.ds.courseName);

    Users.get('eggs11');
    $scope.user = Users.getUN('eggs11');
    console.log( Users.getUN('eggs11'));


    $scope.chats.push({id: (Chats.all().length),
    coursecode:$scope.ds.courseCode ,
    courseName: $scope.ds.courseName,
    author: $scope.user.name,
    comments: $scope.ds.comments,
    rating: '3',
    time: currentTime,
    date: currentDate,
    face:'img/identicon.png'});

    $scope.user.reviewsByMe.push({id: (Chats.all().length),
    coursecode:$scope.ds.courseCode ,
    courseName: $scope.ds.courseName,
    author: $scope.user.name,
    comments: $scope.ds.comments,
    rating: '3',
    time: currentTime,
    date: currentDate,
    face:'img/identicon.png'});  

    $scope.list = $scope.user.reviewsByMe;


//scope.$apply();

    // $scope.de.courseCode = "";
    // $scope.ds.comments = "";
    // $scope.ds.courseName= "";
  };


})
.controller('LoginCtrl', function($scope, Users,$state,Settings) {

  $scope.doLogin = function()
  {

      console.log('hi');
      console.log('hi');
      $scope.users = Users.all();

      for (var i = 0; i < $scope.users.length; i++) {
         console.log($scope.users[i].userName);
        }

        // if($scope.loginctrl.username == 'eggs11' && $scope.loginctrl.password  == 'eggsbacon')
        // {
            console.log('yelkz');
            Settings.set(true, $scope.loginctrl.username);
            $state.go('tab.dash');
        // }
        // else
        // {
        //   console.log('nolkz');
        // }


      // $scope.users = Users.all();
      //
      // console.log(($scope.chats.length));
      // console.log($scope.ds.courseName);
      //
      //
      // $scope.chats.push({id: (Chats.all().length),
      // coursecode:$scope.ds.courseCode ,
      // courseName: $scope.ds.courseName,
      // author: 'Jane Ossai',
      // comments: $scope.ds.comments,
      // rating: '3',
      // time: currentTime,
      // date: currentDate,
      // face:'img/identicon.png'});

      // $scope.de.courseCode = "";
      // $scope.ds.comments = "";
      // $scope.ds.courseName= "";
    };


})

.controller('RCtrl', function($scope, Chats,Users,$stateParams) {
   $scope.list = Users.getUN('eggs11').reviewsByMe;
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };

})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ReviewDetailCtrl', function($scope, $stateParams, Chats,Users) {
  //load first
  //$scope.chat = Users.getUN('eggs11').reviewsByMe[$stateParams.reviewId];

  $scope.de = Users.getList('eggs11',$stateParams.reviewId);
  $scope.chat = $scope.de.reviewsByMe[$stateParams.reviewId - 1 ]; 
});

