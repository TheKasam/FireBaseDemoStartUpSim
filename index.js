//used to switch display screens when user is signed in or not 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_display").style.display = "initial";
      document.getElementById("login_display").style.display = "none";

      var user = firebase.auth().currentUser;

      if (user != null){
          var email_id = user.email;

          document.getElementById("user_para").innerHTML = "Wecome User : "+email_id
      }
    } else {
      // No user is signed in.
      document.getElementById("user_display").style.display = "none";
      document.getElementById("login_display").style.display = "initial";

    }
  });

//code that signs in the user
function signin() {
    var userEmail = document.getElementById("InputEmail").value;
    var userPassword = document.getElementById("InputPassword").value;

    // handles erros if the emial and password do not match up
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error : " + errorMessage);
    });
}

//code to get the user emial and password into the database
function signup(){
    var userEmail = document.getElementById("InputEmail").value;
    var userPassword = document.getElementById("InputPassword").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " + errorMessage);
      });
}

//code to log user out of their profile
function logout(){
    firebase.auth().signOut();
    //document.getElementById("user_display").style.display = "initial";
}