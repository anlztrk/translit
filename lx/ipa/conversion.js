
var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/ɑ/g, "a");
  car = car.replace(/p/g, "b");
  car = car.replace(/ts/g, "z");
  car = car.replace(/zʰ/g, "c");
  car = car.replace(/t/g, "d");
  car = car.replace(/dʰ/g, "t");
  car = car.replace(/χ/g, "h");
  car = car.replace(/k/g, "g");
  car = car.replace(/gʰ/g, "k");
  car = car.replace(/bʰ/g, "p");
  car = car.replace(/ð/g, "r");
  car = car.replace(/ʂ/g, "s");
  car = car.replace(/ə/g, "y");
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A/g, "a");
  car = car.replace(/B/g, "b");
  car = car.replace(/C/g, "c");
  car = car.replace(/D/g, "d");
  car = car.replace(/E/g, "e");
  car = car.replace(/G/g, "g");
  car = car.replace(/H/g, "h");
  car = car.replace(/I/g, "i");
  car = car.replace(/J/g, "j");
  car = car.replace(/K/g, "k");
  car = car.replace(/L/g, "l");
  car = car.replace(/M/g, "m");
  car = car.replace(/O/g, "o");
  car = car.replace(/P/g, "p");
  car = car.replace(/R/g, "r");
  car = car.replace(/S/g, "s");
  car = car.replace(/T/g, "t");
  car = car.replace(/U/g, "u");
  car = car.replace(/W/g, "w");
  car = car.replace(/Y/g, "y");
  car = car.replace(/Z/g, "z");
  
  car = car.replace(/a/g, "ɑ");
  car = car.replace(/t/g, "tʰ");
  car = car.replace(/s/g, "ʂ");
  car = car.replace(/c/g, "tsʰ");
  car = car.replace(/d/g, "t");
  car = car.replace(/k/g, "kʰ");
  car = car.replace(/g/g, "k");
  car = car.replace(/h/g, "χ");
  car = car.replace(/p/g, "pʰ");
  car = car.replace(/b/g, "p");
  car = car.replace(/r/g, "ð");
  car = car.replace(/y/g, "ə");
  car = car.replace(/z/g, "ts");
  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}