angular.module('starter')

.controller('MyReviewsCtrl', function($scope, Courses,Users,Settings) {

$scope.todoAdd = function()
{
    //date and time stamp
    var date  = new Date();
    var currentTime = date.getHours() + '.' + date.getMinutes();
    var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();

    $scope.courses = Courses.all();

    console.log(($scope.courses.length));
    console.log($scope.ds.courseName);

    //get a sample user I created
    Users.get('eggs11');
    $scope.user = Users.getUN('eggs11');
    //console.log( Users.getUN('eggs11'));


    //TODO: change this to add a review to a courses review list - chnage courses schema first to allow this
    //a review being added to a list of course/reviews - courses
    $scope.courses.push({id: (Courses.all().length),
    coursecode:$scope.ds.courseCode ,
    courseName: $scope.ds.courseName,
    author: $scope.user.name,
    comments: $scope.ds.comments,
    rating: '3',
    time: currentTime,
    date: currentDate,
    face:'img/identicon.png'});

    console.log(Users.getUN('eggs11').reviewsByMe.length)
    $scope.user.reviewsByMe.push({id: (Users.getUN('eggs11').reviewsByMe.length),
    coursecode:$scope.ds.courseCode ,
    courseName: $scope.ds.courseName,
    author: $scope.user.name,
    comments: $scope.ds.comments,
    rating: '3',
    time: currentTime,
    date: currentDate,
    face:'img/identicon.png'});

    $scope.list = $scope.user.reviewsByMe;

  };


})


.controller('RCtrl', function($scope, Courses,Users,$stateParams) {
   $scope.list = Users.getUN('eggs11').reviewsByMe;

})

.controller('ReviewDetailCtrl', function($scope, $stateParams, Courses,Users) {

  //load first - seems to only work this way
  $scope.myReview = Users.all();
  $scope.myReview = Users.getUN('eggs11').reviewsByMe[$stateParams.reviewId];
  console.log(Users.getUN('eggs11').reviewsByMe[$stateParams.reviewId]);
  // $scope.de = Users.getList('eggs11',$stateParams.reviewId);
  // console.log($scope.de[0]);
  // $scope.chat = $scope.de.reviewsByMe[$stateParams.reviewIds ];
});
