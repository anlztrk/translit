var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/J/g, "C");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/Ý/g, "Y");
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/Ň/g, "Ñ");

  car = car.replace(/j/g, "c");
  car = car.replace(/ž/g, "j");
  car = car.replace(/y/g, "ı");
  car = car.replace(/ý/g, "y");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/ň/g, "ñ");  
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/J/g, "Ž");
  car = car.replace(/C/g, "J");
  car = car.replace(/Ğ/g, "Ǧ");
  car = car.replace(/Y/g, "Ý");
  car = car.replace(/I/g, "Y");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Ñ/g, "Ň");
  car = car.replace(/j/g, "ž");
  car = car.replace(/c/g, "j");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/y/g, "ý");
  car = car.replace(/ı/g, "y");
  car = car.replace(/ñ/g, "ň");
  
  car = car.replace(/Ə/g, "Ä");
  car = car.replace(/Â/g, "A");
  car = car.replace(/Î/g, "I");
  car = car.replace(/Û/g, "U");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/â/g, "a");
  car = car.replace(/î/g, "i");
  car = car.replace(/û/g, "u");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
