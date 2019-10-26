var Config = {
  apiKey: "AIzaSyDQ66iMF_wsL_F29Bk23DvD6R0nf63bFkY",
  authDomain: "group2-employment-tracker.firebaseapp.com",
  databaseURL: "https://group2-employment-tracker.firebaseio.com",
  projectId: "group2-employment-tracker",
  storageBucket: "group2-employment-tracker.appspot.com",
  messagingSenderId: "401541146441",
  appId: "1:401541146441:web:6d65761407c554d1de9c98"
};
// Initialize Firebase

firebase.initializeApp(Config);

var database = firebase.database();



  database.ref().on("value", function(snapshot) {
    
  });


  

  $("#submit-button").on("click", function(event){
    event.preventDefault();
    var name = $("#employee-name").val()
    var roleInput = $("#employee-role").val()
    var startDateInput = $("#start-date").val()
    var rateInput = $("#monthly-rate").val()
    database.ref().push({
        employeeName: name,
        role: roleInput,
        startDate: startDateInput,
        monthlyRate: rateInput,
      })
      console.log(name);
      console.log(startDateInput);
      console.log(roleInput);
      console.log(rateInput);
  });
