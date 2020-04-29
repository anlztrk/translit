//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/c/g, "j");
  car = car.replace(/C/g, "J");
  car = car.replace(/ç/g, "ch");
  car = car.replace(/Ç/g, "Ch");
  car = car.replace(/ş/g, "sh");
  car = car.replace(/Ş/g, "Sh");
  car = car.replace(/ğ/g, "gh");
  car = car.replace(/Ğ/g, "GH");
  car = car.replace(/q/g, "g");
  car = car.replace(/Q/g, "G");
  car = car.replace(/x/g, "kh");
  car = car.replace(/X/g, "Kh");
  car = car.replace(/ı/g, "i");
  car = car.replace(/İ/g, "I");
  car = car.replace(/ə/g, "a");
  car = car.replace(/Ə/g, "A");
  car = car.replace(/ö/g, "o");
  car = car.replace(/Ö/g, "O");
  car = car.replace(/ü/g, "u");
  car = car.replace(/Ü/g, "U");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}