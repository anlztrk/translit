
var car;
var translit;
function cyrlat () {
car = document.transcription.text1.value;car = car.replace(/ag/g, "aǧ");
  car = car.replace(/U/g, "Ū");
  car = car.replace(/W|Û/g, "U");
  car = car.replace(/Y/g, "Ý");
  car = car.replace(/I/g, "Y");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Î|Ý/g, "İ");
  car = car.replace(/Ņ/g, "Ŋ");
  car = car.replace(/Ş/g, "Ş");
  car = car.replace(/X/g, "H");
  
  car = car.replace(/u/g, "ū");
  car = car.replace(/w|û/g, "u");
  car = car.replace(/y/g, "ý");
  car = car.replace(/ı/g, "y");
  car = car.replace(/i/g, "ı");
  car = car.replace(/î|ý/g, "i");
  car = car.replace(/ņ/g, "ŋ");
  car = car.replace(/ş/g, "ş");
  car = car.replace(/x/g, "h");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}