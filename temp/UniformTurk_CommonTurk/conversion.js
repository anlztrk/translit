var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/Ä/g, "Ə");
  car = car.replace(/Ç/g, "Ч");
  car = car.replace(/C/g, "Ç");
  car = car.replace(/Ч/g, "C");
  car = car.replace(/Ğ/g, "Ƣ");
  car = car.replace(/I/g, "Ь");
  car = car.replace(/İ/g, "I");
  car = car.replace(/J/g, "Ƶ");
  car = car.replace(/Ñ/g, "Ꞑ");
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/Y/g, "J");
  car = car.replace(/Ü/g, "У");
  car = car.replace(/ä/g, "ə");
  car = car.replace(/ç/g, "ч");
  car = car.replace(/c/g, "ç");
  car = car.replace(/ч/g, "c");
  car = car.replace(/ğ/g, "ƣ");
  car = car.replace(/ı/g, "ь");
  car = car.replace(/j/g, "ƶ");
  car = car.replace(/ñ/g, "ꞑ");
  car = car.replace(/ö/g, "ɵ");
  car = car.replace(/y/g, "j");
  car = car.replace(/ü/g, "y");
  car = car.replace(/b/g, "ʙ");
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/C/g, "Ч");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ə/g, "Ä");
  car = car.replace(/Ƣ/g, "Ğ");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Ꞑ/g, "Ñ");
  car = car.replace(/Ɵ/g, "Ö");
  car = car.replace(/У/g, "Ü");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ƶ/g, "J");
  car = car.replace(/Ь/g, "I");
  car = car.replace(/c/g, "ч");
  car = car.replace(/ç/g, "c");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/ƣ/g, "ğ");
  car = car.replace(/ꞑ/g, "ñ");
  car = car.replace(/ɵ/g, "ö");
  car = car.replace(/y/g, "ü");
  car = car.replace(/j/g, "y");
  car = car.replace(/ƶ/g, "j");
  car = car.replace(/ь/g, "ı");
  car = car.replace(/ʙ/g, "b");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}