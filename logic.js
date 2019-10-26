var firebaseConfig = {
    apiKey: "AIzaSyDQ66iMF_wsL_F29Bk23DvD6R0nf63bFkY",
    authDomain: "group2-employment-tracker.firebaseapp.com",
    databaseURL: "https://group2-employment-tracker.firebaseio.com",
    projectId: "group2-employment-tracker",
    storageBucket: "group2-employment-tracker.appspot.com",
    messagingSenderId: "401541146441",
    appId: "1:401541146441:web:6d65761407c554d1de9c98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  database.ref().push({
    employeeName: "",
    role: "",
    startDate: "",
    monthlyRate: 0,
  })

  database.ref().on("value", function(snapshot) {
    


  });

  var name = $("#employee-name").val()
  var role = $("#employee-role").val()
  var startDate = $("#start-date").val()
  var rate = $("#monthly-rate").val()
  

  $("#run-search").on("click", function(){
    console.log(name);
    console.log(role);
  });