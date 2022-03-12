
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ĭ/g, "Ŷ");
  car = car.replace(/ĭ/g, "ŷ");
  
  car = car.replace(/Ğ/g, "Ǧ");
  car = car.replace(/Y/g, "Ý");
  car = car.replace(/I/g, "Y");
  car = car.replace(/İ/g, "I");
  car = car.replace(/J/g, "Ž");
  car = car.replace(/C/g, "J");
  car = car.replace(/Ñ/g, "Ň");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/y/g, "ý");
  car = car.replace(/ı/g, "y");
  car = car.replace(/j/g, "ž");
  car = car.replace(/c/g, "j");
  car = car.replace(/ñ/g, "ň");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}