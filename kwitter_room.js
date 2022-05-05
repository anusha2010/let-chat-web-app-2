const firebaseConfig = {
    apiKey: "AIzaSyCO2nzd6wyoUndMOR8Tt43g7UNzA-iJK7g",
    authDomain: "let-chat-web-app-53606.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-53606-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-53606",
    storageBucket: "let-chat-web-app-53606.appspot.com",
    messagingSenderId: "263628650897",
    appId: "1:263628650897:web:b56861c5d040683ed64230"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addroom(){
    room_name=document.getElementById("addroom").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
          room : "adding the room name"
    });

window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name = "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
     
      //End code
      });});}
getData();

function redirecttoroomname(name){
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html" ;
 }
 
 
 function logout(){
       localStorage.removeItem("room_name");
       localStorage.removeItem("user_name");
       window.location="index.html";
 
 }