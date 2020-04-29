//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A\u0301/g, "Á");
  car = car.replace(/G\u0301/g, "Ǵ");
  car = car.replace(/N\u0301/g, "Ń");
  car = car.replace(/O\u0301/g, "Ó");
  car = car.replace(/U\u0301/g, "Ú");
  car = car.replace(/Y\u0301/g, "Ý");
  car = car.replace(/a\u0301/g, "á");
  car = car.replace(/g\u0301/g, "ǵ");
  car = car.replace(/n\u0301/g, "ń");
  car = car.replace(/o\u0301/g, "ó");
  car = car.replace(/u\u0301/g, "ú");
  car = car.replace(/y\u0301/g, "ý");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}