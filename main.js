var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start() {
    document.getElementById("voice_text").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if (content =="take my selfie") {
    console.log("taking selfie ---");
        speak();
    }
    document.getElementById("voice_text").innerHTML=content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("voice_text").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format : png,
    png_quality : 1
});

function takesnapshot(){
    webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src"'+data_uri'">'
    });
}

