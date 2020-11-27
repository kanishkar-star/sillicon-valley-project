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

       function login(){
       user_name = document.getElementById("username").value;

       Address = document.getElementById("address_input").value;
     
       description = document.getElementById("description_input").value;

       console.log(user_name);

       firebase.database().ref("Advocates").child(user_name).update({
           purpose : "Adding Details to Database",
           
           Username : user_name,

           address : Address,

           Description : description
       });

       localStorage.setItem("Username", user_name);

      window.location = "advocate_room.html";
  }