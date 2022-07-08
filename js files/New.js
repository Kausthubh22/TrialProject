


    const firebaseApp = firebase.initializeApp
    ({ 
          apiKey: "AIzaSyBZ9JDWOoVtV7Hugq1MU9j7e2-9L83SIPY",
        authDomain: "sankey-website-trial.firebaseapp.com",
        databaseURL: "https://sankey-website-trial-default-rtdb.firebaseio.com",
        projectId: "sankey-website-trial",
        storageBucket: "sankey-website-trial.appspot.com",
        messagingSenderId: "337574551004",
        appId: "1:337574551004:web:8063cc5707d03bb4bb4319",
        measurementId: "G-YCP2F97K1J"
   });
     const db = firebaseApp.firestore();
     const auth = firebaseApp.auth();
     const database = firebaseApp.database();
  
  
     const signUp = () => 
     {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const usertype = document.getElementById("usertype").value;

        //validating fields 
        if(validate_field(email) == false || validate_field(password) == false || validate_field(usertype) == false ){
          alert("One or more fields are missing or incorrect"); 
          return
        }

        console.log(email, password)
                firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((result) => {
                //Declared user variable
                var user = auth.currentUser
                
                //Adding this user to realtime database
                var database_ref = database.ref()

                //creating user object which will contain all users data 
                var user_data = {
                  email : email,
                  usertype : usertype,
                  last_login : Date.now()
                }
                
                database_ref.child('user/' + user.uid).set(user_data)
                alert("Congratulations you are signed up!!!. Please click ok and sign in again to proceed to home page.");
                
                console.log(result)
                // ...
              })
              .catch((error) => {
                console.log(error.code);
                console.log(error.message)
                alert("Existing user/Invalid Id or Password. Please click ok and try again.");
                // ..
              });
     }

     function validate_field(field) 
     {
          if(field == null){
            return false
          }
          if(field<=0){
            return false
          } else {
            return true
          }
     }

     function signIn() 
     {
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
          // Signed in
          //Declared user variable
          var user = auth.currentUser
          //Adding this user to database
          var database_ref = database.ref()
          //creating user object which will contain all users data 
          var user_data = {
            last_login : Date.now()
          }
          database_ref.child('user/' + user.uid).update(user_data)
          alert("You have successfully logged in. Please click ok and continue to home page ");

          window.location.href = "Home.html";
          
                  console.log(result)
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message)
          alert("Invalid Id or Password. Please click ok and try again.");
        });
     }


  

