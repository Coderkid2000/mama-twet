// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDTuJViE9t9pqHV4-Q94VfqYf17tq4VgeU",
      authDomain: "let-chat-mom.firebaseapp.com",
      databaseURL: "https://let-chat-mom-default-rtdb.firebaseio.com",
      projectId: "let-chat-mom",
      storageBucket: "let-chat-mom.appspot.com",
      messagingSenderId: "872309834651",
      appId: "1:872309834651:web:dd1269523a008d27d3173e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
