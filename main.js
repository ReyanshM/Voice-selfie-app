var recognition=new window.webkitSpeechRecognition;
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").textContent=Content;
    if(Content.toLowerCase()=="take my selfie"){
        speak()
        Webcam.attach( '#camera' );
        setTimeout(function(){
           snapshot();
           save();
        },5000);
    }
}
function snapshot(){
    Webcam.snap(function(selfie){
        document.getElementById("result").innerHTML=`
        <img id="Seelfie" src="${selfie}" alt="">
        `;
    });
}
function save(){
    document.getElementById("link").href=document.getElementById("Seelfie").src;
    document.getElementById("link").click();
}
function speak(){
    var speak_data="Taking your selfie in five seconds";
    var voice=new SpeechSynthesisUtterance(speak_data);
    console.log(voice);
    console.clear();
    window.speechSynthesis.speak(voice);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });