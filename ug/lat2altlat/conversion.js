var car;
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/é/g, "ë");
  translit = translit.replace(/É/g, "Ë");
  car = car.replace(/e/g, "ä");
  car = car.replace(/E/g, "Ä");
  car = car.replace(/ë/g, "e");
  car = car.replace(/Ë/g, "E");
  car = car.replace(/w/g, "v");
  car = car.replace(/V/g, "V");
  car = car.replace(/(K|k)h/g, "$1'h");
  car = car.replace(/KH/g, "K'H");
  car = car.replace(/x/g, "kh");
  car = car.replace(/X/g, "Kh");
  document.transcription.text1.value=translit;
  document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/kh/g, "x");
  car = car.replace(/K(H|h)/g, "X");
  car = car.replace(/k'h/g, "kh");
  car = car.replace(/K'(H|h)/g, "K$1");
  car = car.replace(/e/g, "ë");
  car = car.replace(/E/g, "Ë");
  car = car.replace(/ä/g, "e");
  car = car.replace(/Ä/g, "E");
  car = car.replace(/v/g, "w");
  car = car.replace(/V/g, "W");
  document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}