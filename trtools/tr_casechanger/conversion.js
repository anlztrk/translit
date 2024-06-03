
var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/i/g, "İ");
  translit = translit.toUpperCase();
  car = car.replace(/I/g, "ı");
  car = car.replace(/İ/g, "I");
  car = car.toLowerCase();
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/I/g, "ı");
  translit = translit.replace(/İ/g, "I");
  translit = translit.toLowerCase();
  car = car.replace(/i/g, "İ");
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