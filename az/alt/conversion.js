//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/e/g, "ë");
  car = car.replace(/E/g, "Ë");
  car = car.replace(/ə/g, "e");
  car = car.replace(/Ə/g, "E");
document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/e/g, "ə");
  car = car.replace(/E/g, "Ə");
  car = car.replace(/ë/g, "e");
  car = car.replace(/Ë/g, "E");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
