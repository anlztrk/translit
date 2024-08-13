var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.toUpperCase();
  car = car.toLowerCase();
  car = car.normalize('NFC');
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.toLowerCase();
  car = car.toUpperCase();
  car = car.normalize('NFC');
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
