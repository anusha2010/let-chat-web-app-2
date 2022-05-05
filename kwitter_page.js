const firebaseConfig = {
    apiKey: "AIzaSyD28FgpefhR5i6cGqcAfeyH-8En1-O9f-c",
    authDomain: "kwitter-77789.firebaseapp.com",
    databaseURL: "https://kwitter-77789-default-rtdb.firebaseio.com",
    projectId: "kwitter-77789",
    storageBucket: "kwitter-77789.appspot.com",
    messagingSenderId: "128893292442",
    appId: "1:128893292442:web:bae6b4c20d29b57568f423"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          commment:msg,
          likes:0
    });
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}