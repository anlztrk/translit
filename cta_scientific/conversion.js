var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/J/g, "C");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Ï/g, "I");
  car = car.replace(/Ġ/g, "Ğ");
  car = car.replace(/Ṅ/g, "Ñ");

  car = car.replace(/j/g, "c");
  car = car.replace(/ž/g, "j");
  car = car.replace(/ï/g, "ı");
  car = car.replace(/ġ/g, "ğ");
  car = car.replace(/ṅ/g, "ñ");  
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/J/g, "Ž");
  car = car.replace(/C/g, "J");
  car = car.replace(/Ğ/g, "Ġ");
  car = car.replace(/I/g, "Ï");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Ñ/g, "Ṅ");
  car = car.replace(/j/g, "ž");
  car = car.replace(/c/g, "j");
  car = car.replace(/ğ/g, "ġ");
  car = car.replace(/ı/g, "ï");
  car = car.replace(/ñ/g, "ṅ");
  
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
