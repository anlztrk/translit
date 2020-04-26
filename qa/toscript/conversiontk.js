//  copyright lexilogos.com
var translit;
var car;
function latcyr () {
translit = document.transcription.text2.value;
car = document.transcription.text2.value;
  translit = translit.replace(/a\u0027/g, "a\u02bb");
  translit = translit.replace(/a\u2018/g, "a\u02bb");
  translit = translit.replace(/A\u0027/g, "A\u02bb");
  translit = translit.replace(/A\u2018/g, "A\u02bb");
  translit = translit.replace(/i\u0027/g, "i\u02bb");
  translit = translit.replace(/i\u2018/g, "i\u02bb");
  translit = translit.replace(/I\u0027/g, "I\u02bb");
  translit = translit.replace(/I\u2018/g, "I\u02bb");
  translit = translit.replace(/n\u0027/g, "n\u02bb");
  translit = translit.replace(/n\u2018/g, "n\u02bb");
  translit = translit.replace(/N\u0027/g, "N\u02bb");
  translit = translit.replace(/N\u2018/g, "N\u02bb");
  translit = translit.replace(/g\u0027/g, "g\u02bb");
  translit = translit.replace(/g\u2018/g, "g\u02bb");
  translit = translit.replace(/G\u0027/g, "G\u02bb");
  translit = translit.replace(/G\u2018/g, "G\u02bb");
  translit = translit.replace(/o\u0027/g, "o\u02bb");
  translit = translit.replace(/o\u2018/g, "o\u02bb");
  translit = translit.replace(/O\u0027/g, "O\u02bb");
  translit = translit.replace(/O\u2018/g, "O\u02bb");
  translit = translit.replace(/u\u0027/g, "u\u02bb");
  translit = translit.replace(/u\u2018/g, "u\u02bb");
  translit = translit.replace(/U\u0027/g, "U\u02bb");
  translit = translit.replace(/U\u2018/g, "U\u02bb");

  car = car.replace(/a\u0027/g, "a\u02bb");
  car = car.replace(/a\u2018/g, "a\u02bb");
  car = car.replace(/A\u0027/g, "A\u02bb");
  car = car.replace(/A\u2018/g, "A\u02bb");
  car = car.replace(/i\u0027/g, "i\u02bb");
  car = car.replace(/i\u2018/g, "i\u02bb");
  car = car.replace(/I\u0027/g, "I\u02bb");
  car = car.replace(/I\u2018/g, "I\u02bb");
  car = car.replace(/n\u0027/g, "n\u02bb");
  car = car.replace(/n\u2018/g, "n\u02bb");
  car = car.replace(/N\u0027/g, "N\u02bb");
  car = car.replace(/N\u2018/g, "N\u02bb");
  car = car.replace(/g\u0027/g, "g\u02bb");
  car = car.replace(/g\u2018/g, "g\u02bb");
  car = car.replace(/G\u0027/g, "G\u02bb");
  car = car.replace(/G\u2018/g, "G\u02bb");
  car = car.replace(/o\u0027/g, "o\u02bb");
  car = car.replace(/o\u2018/g, "o\u02bb");
  car = car.replace(/O\u0027/g, "O\u02bb");
  car = car.replace(/O\u2018/g, "O\u02bb");
  car = car.replace(/u\u0027/g, "u\u02bb");
  car = car.replace(/u\u2018/g, "u\u02bb");
  car = car.replace(/U\u0027/g, "U\u02bb");
  car = car.replace(/U\u2018/g, "U\u02bb");
  car = car.replace(/\u02bb/g, "\u0306");
  document.transcription.text2.value=translit;
  document.transcription.text1.value=car;
}
function cyrlat () {
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}