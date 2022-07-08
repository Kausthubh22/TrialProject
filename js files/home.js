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
  
  // const db = getDatabase();
  // const userRef = ref(db, 'user/');
  // onValue(userRef,(snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //       const childKey = childSnapshot.key;
  //       const childData = childSnapshot.val();
  //       // ...

        
  //       console.log(childData.email.val() + childData.usertype.val());
        
  //     });
  //   }, {
  //     onlyOnce: true
  //   });



  const getdata = () => 
  {


     //validating fields 
  
   
     var database_ref = database.ref()
             
             database_ref.child('user/').on('value',(snapshot)=>console.log(snapshot.val()))
             alert("Congratulations you are signed up!!!. Please click ok and sign in again to proceed to home page.");
             
            //  console.log(result)
             // ...
       
  }
