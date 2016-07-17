angular.module('starter')
.factory('Database', function() {

  var dummyCourses =  [
    {
      title: "Multivariable Calculus",
      code: "M2AA2",
      year: "2015-16"
    },
    {
      title: "Compilers",
      code: "CO221",
      year: "2014-15"
    },
    {
      title: "Software Engineering Design",
      code: "CO220",
      year: "2015-16"
    },
    {
      title: "Introduction to Artificial Intelligence",
      code: "CO231",
      year: "2014-15"
    },
    {
      title: "Statistics",
      code: "MJS2",
      year: "2014-15"
    },
    {
      title: "Operating Systems",
      code: "CO211",
      year: "2014-15"
    }
  ];
    return {
        getCourses: function() {
          return dummyCourses;
        }
    };
});
