var firebaseConfig = {
      apiKey: "AIzaSyDAq_BlFn0mP01AqkFiCMtN3TzmBgEpFfk",
      authDomain: "kwitter-b0a9d.firebaseapp.com",
      databaseURL: "https://kwitter-b0a9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-b0a9d",
      storageBucket: "kwitter-b0a9d.appspot.com",
      messagingSenderId: "1083264613633",
      appId: "1:1083264613633:web:fd00af092c6293e08f6f00"
    };
    
   
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 name = message_data['name']; 
 message = message_data['message']; 
 like = message_data['like']; 
 name_with_tag = "<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>"
 message_with_tag =  "<h4 class='message_h4'> "+message+" </h4>"

 like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+" </span> </button> <hr>";
 row = name_with_tag+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");
}

