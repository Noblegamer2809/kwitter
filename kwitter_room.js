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



user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

