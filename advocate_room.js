 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAjkdNEmECa0Kv1C9hSFtfbWa5BIZ3MdEE",
    authDomain: "advocate-client-app.firebaseapp.com",
    databaseURL: "https://advocate-client-app.firebaseio.com",
    projectId: "advocate-client-app",
    storageBucket: "advocate-client-app.appspot.com",
    messagingSenderId: "1059912745870",
    appId: "1:1059912745870:web:e6ecddd653d58f46005adf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE

  user_name = localStorage.getItem("Username");



  function addCase(){
      casename = document.getElementById("case_name").value;

      firebase.database().ref("/").child(room_name).update({Casename : casename});

      localStorage.setItem("Casename", casename);

      window.location = "advocate_create.html";
  }