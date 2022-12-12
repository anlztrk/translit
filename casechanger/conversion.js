//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.toUpperCase();
  if (car == İ){
  car = car.replace(/İ/g, "i");
  }
  else {
  car = car.toLowerCase();
  }
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  if (translit == İ){
  translit = translit.replace(/İ/g, "i");
  }
  else {
  translit = translit.toLowerCase();
  }
  car = car.toUpperCase();
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
