//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/é/g, "ë");
  translit = translit.replace(/É/g, "Ë");
  car = car.replace(/e/g, "ä");
  car = car.replace(/ë/g, "e");
  car = car.replace(/é/g, "e");
  car = car.replace(/kh/g, "k'h");
  car = car.replace(/x/g, "kh");  
  car = car.replace(/E/g, "Ä");
  car = car.replace(/Ë/g, "E");
  car = car.replace(/É/g, "E");
  car = car.replace(/KH/g, "K'H");
  car = car.replace(/Kh/g, "K'h");
  car = car.replace(/X/g, "Kh");
  document.transcription.text1.value=translit;
  document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/e/g, "ë");
  car = car.replace(/ä/g, "e");
  car = car.replace(/kh/g, "x");
  car = car.replace(/k'h/g, "kh");
  
  car = car.replace(/E/g, "Ë");
  car = car.replace(/Ä/g, "E");
  car = car.replace(/KH/g, "X");
  car = car.replace(/Kh/g, "X");
  car = car.replace(/K'H/g, "KH");
  car = car.replace(/K'h/g, "Kh");  
  document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}