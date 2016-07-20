angular.module('starter')
.factory('Database', function() {
  /*
  // Probably best to have separate tables/databases for each of these
  // data structures (reviews, discussions, followUps) and use unique ids
  // in firebase database to reference certain entries i.e:
  // - Each course has a unique courseID.
  // - Each review of a course has the same courseID.
  // - Each discussion of a course has the same courseID and a unique discussionID.
  // - Each followUp of a discussion has the same discussionID.
  // Use IDs as a filter in firebase databse e.g
  // if Operating Systems has the unique courseID 2349 then:
  // - "firebase.getReviews(courseID: 2349)"
        will get all reviews from Reviews table/databse with courseID matching 2349
  // - "firebase.getDiscussions(courseID: 2349)"
        will get all discussions from Discussions table with courseID matching 2349
  // - "firebase.getFollowUps(discussionID: 1938)"
        will get all followUps from FollowUps table with discussionID matching 1938
  */
  var dummyCourses =  [
    {
      title: "Multivariable Calculus",
      code: "M2AA2",
      year: "2015-16",
      uniCode: "198"
    },
    {
      title: "Compilers",
      code: "CO221",
      year: "2014-15",
      uniCode: "198"
    },
    {
      title: "Software Engineering Design",
      code: "CO220",
      year: "2015-16",
      uniCode: "198"
    },
    {
      title: "Introduction to Artificial Intelligence",
      code: "CO231",
      year: "2014-15",
      uniCode: "198"
    },
    {
      title: "Statistics",
      code: "MJS2",
      year: "2014-15",
      uniCode: "198"
    },
    {
      title: "Operating Systems",
      code: "CO211",
      year: "2014-15",
      uniCode: "198"
    }
  ];

  var dummyDiscussions = [
    {
      title: "What does the valid bit mean?",
      author: "John Smith",
      description: "Might be trivial but I don't fully understand what the valid bit means in a page table and what can be interpreted from it.",
      timeCreated: "10:27",
      dateCreated: "12 Feb 2015",
      followUps: [
        {
          author: "Anonymous",
          comment: "It's one if the frame pointed to is valid (it's in physical memory), otherwise it's zero. It might be zero if it's an uninitialized page, or it's swapped out etc.",
          timeCreated: "19:05",
          dateCreated: "12 Feb 2015",
          upVotes: 5,
          downVotes: 0
        }
      ]
    },
    {
      title: "Move memory to memory",
      author: "Jane Kang",
      description: "In slide 21 on Runtime organisation, why are we allowed to move memory to memory? I saw in one of the assembly instructions that it had mov [ECX], [EBX]. But I thought this kind of operation was illegal as we had to move it into a register first and then memory.",
      timeCreated: "13:39",
      dateCreated: "17 Dec 2014",
      followUps: [
        {
          author: "Anonymous",
          comment: "I wouldn't worry about it. You won't be asked to write correct assembly code, just pseudocode. It may be wrong, but probably varies between instruction sets.",
          timeCreated: "12:15",
          dateCreated: "21 Dec 2014",
          upVotes: 4,
          downVotes: 1
        },
        {
          author: "Rob Simmons",
          comment: "It depends on the architecture. Overall, it really doesn't matter if you can or can not move data from memory to memory. In exams you are usually given Haskell instructions that represent the instructions in that specific architecture, so just use that.",
          timeCreated: "22:47",
          dateCreated: "24 Dec 2014",
          upVotes: 7,
          downVotes: 0
        }
      ]
    }
  ];

  var dummyReviews = [
    {
      title: "This is my review",
      author: "Anonymous",
      comment: "I thought this course was kinda hard but interesting.",
      timeCreated: "21:44",
      dateCreated: "29 Mar 2015",
      rating: 3.3
    },
    {
      title: "Such a great course",
      author: "John Smith",
      comment: "The lecture notes were so detailed and the lecturer explained everything so well with loads of examples!",
      timeCreated: "10:29",
      dateCreated: "02 Jun 2015",
      rating: 4.7
    }
  ];

  return {
    getCourses: function() {
      return dummyCourses;
    },
    getDiscussions: function() {
      return dummyDiscussions;
    },
    getReviews: function() {
      return dummyReviews;
    }
  };
});
