angular.module('starter')

.controller('MyReviewsCtrl', function($scope, Courses,Users) {

$scope.todoAdd = function()
{
    //date and time stamp
    var date  = new Date();
    var currentTime = date.getHours() + '.' + date.getMinutes();
    var currentDate = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();

    $scope.reviews = Courses.getReviews();
   
    console.log('REVIEW length: '+ $scope.reviews.length);
    console.log($scope.ds.name);
    console.log($scope.ds.code);


    //get a sample user I created
    Users.get('eggs11');
    $scope.user = Users.getUN('eggs11');
    //console.log( Users.getUN('eggs11'));
 
    var id = Courses.getReviews().length;
    //TODO: change this to add a review to a courses review list - chnage courses schema first to allow this
    //a review being added to a list of course/reviews - courses
    console.log('id' + id);

    $scope.reviews.push({id: id,
    courseCode:$scope.ds.code ,
    courseName: $scope.ds.name,
    author: $scope.user.userName,
    comment: $scope.ds.comment,
    rating: 4,
    timeCreated: currentTime,
    dateCreated: currentDate,
    upvotes: 0,
    downvotes: 0 
    });

    //to check if review was added 
    console.log(($scope.reviews.length));
    
    $scope.user.reviewsByMe.push({reviewID: id 
    });


    //$scope.list = $scope.user.reviewsByMe;

  };


})


.controller('RCtrl', function($scope, Courses,Users,$stateParams) {
   $scope.list = Users.getUN('eggs11').reviewsByMe;
   //get the loggd in user's reviews //eggs11 is the user logged in 
   $scope.list = Courses.getUserReview('eggs11');


})

//can use above controller review deatil  
.controller('ReviewDetailCtrl', function($scope, $stateParams, Courses,Users) {

  //load first - seems to only work this way

  //$scope.myReview = Users.all();
  $scope.myReview = Courses.getReviews();
  $scope.revlist = Courses.getUserReview('eggs11');
  $scope.myReview = $scope.revlist[$stateParams.reviewId];

  //$scope.myReview = Users.all();
  //$scope.myReview = Users.getUN('eggs11').reviewsByMe[$stateParams.reviewId];
  //console.log(Users.getUN('eggs11').reviewsByMe[$stateParams.reviewId]);
  // $scope.de = Users.getList('eggs11',$stateParams.reviewId);
  

  // console.log($scope.de[0]);
  // $scope.chat = $scope.de.reviewsByMe[$stateParams.reviewIds ];
});
