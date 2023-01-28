
const firebaseConfig = {
    apiKey: "AIzaSyDOIMxKP70OMzkKPnQdNjTYJcWUYy-OQJI",
    authDomain: "jinkster-a3cec.firebaseapp.com",
    databaseURL: "https://jinkster-a3cec-default-rtdb.firebaseio.com",
    projectId: "jinkster-a3cec",
    storageBucket: "jinkster-a3cec.appspot.com",
    messagingSenderId: "963394470294",
    appId: "1:963394470294:web:16f2d478fc07d8e9475db7",
    measurementId: "G-HHFBZ41T27"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"
    });
}

function take_snapshot()
{
  console.log(img_id);

  Webcam.snap(function(data_uri) {

    if(img_id=-"selfie1"){
      document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'

    }
    if(img_id=="selfie2"){
      document.getElementById("result2").innerHTML = '<img "id=selfie2" src="'+data_uri='"/>';

    }
    if(img_id=="delfie3"){
      document.getElementById("result3").innerHTML = '<img id="selfie3" src"'data_uri+'"/>;
    }
  
}

setTimeout(function()
{
  img_id="selfir1";
  take_snapshot();
  speak_data = "Taking your next Selfie in 10 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  SpeechSynthesis.speak(utterThis);
},5000);
 
function take_snapshot()

console. log(ing_id) ;

Webcam. snap( function(data_uri) {

  if (ing_id=="selfiel"}{

document . getElementById("result1") . innerHTML = '<ing id="selfiel" src="+data_uri+""/>';

if(ing_id=="selfie2"){

 document . getElementById("result2") . innerHTML = '<ing id="selfie2" src="+data_uri+'"/>';

 If (ing_id=="selfie3"){

document . getElementById("result3") . innerHTML = '<ing id="selfies" sec="+data_uri+'"/>';

