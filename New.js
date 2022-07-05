
    const firebaseApp = firebase.initializeApp({ 
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
  
  
     const signUp = () => 
     {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email, password)
                firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((result) => {
                // Signed in 
                document.write("You are signed up.")
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

     const signIn = () => 
     {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in
        document.write("You are signed in.")
        window.location.href = "Home.html";
          alert("You have successfully logged in. Please click ok and continue to home page ");
                console.log(result)
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        alert("Invalid Id or Password. Please click ok and try again.");
      });
     }

