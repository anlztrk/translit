//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/ä/g, "ə");
  translit = translit.replace(/Ä/g, "Ə");
  car = car.replace(/ä/g, "ə");
  car = car.replace(/Ä/g, "Ə");
  car = car.replace(/b/g, "ʙ");
  car = car.replace(/c/g, "ҹ");
  car = car.replace(/ç/g, "c");
  car = car.replace(/ҹ/g, "ç");
  car = car.replace(/ğ/g, "ƣ");
  car = car.replace(/ı/g, "ь");
  car = car.replace(/j/g, "ƶ");
  car = car.replace(/ñ/g, "ꞑ");
  car = car.replace(/ö/g, "ɵ");
  car = car.replace(/y/g, "j");
  car = car.replace(/ü/g, "y");
  car = car.replace(/C/g, "Ҹ");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/Ҹ/g, "Ç");
  car = car.replace(/Ğ/g, "Ƣ");
  car = car.replace(/I/g, "Ь");
  car = car.replace(/İ/g, "I");
  car = car.replace(/J/g, "Ƶ");
  car = car.replace(/Ñ/g, "Ꞑ");
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/Y/g, "J");
  car = car.replace(/Ü/g, "Y");
   document.transcription.text1.value=translit;
   document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/в/g, "ʙ");
  translit = translit.replace(/ꞑ/g, "ꞑ");
  translit = translit.replace(/N̡/g, "Ꞑ");
  translit = translit.replace(/ᶇ/g, "ꞑ");
  translit = translit.replace(/Ņ/g, "Ꞑ");
  translit = translit.replace(/ņ/g, "ꞑ");
  translit = translit.replace(/Ŋ/g, "Ꞑ");
  translit = translit.replace(/ŋ/g, "ꞑ");
  car = car.replace(/ʙ/g, "b");
  car = car.replace(/в/g, "b");
  car = car.replace(/Ꞑ/g, "Ñ");
  car = car.replace(/ꞑ/g, "ñ");
  car = car.replace(/ꞑ/g, "ñ");
  car = car.replace(/N̡/g, "Ñ");
  car = car.replace(/ᶇ/g, "ñ");
  car = car.replace(/Ņ/g, "Ñ");
  car = car.replace(/ņ/g, "ñ");
  car = car.replace(/Ŋ/g, "Ñ");
  car = car.replace(/ŋ/g, "ñ");  
  car = car.replace(/c/g, "ч");
  car = car.replace(/ç/g, "c");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/ƣ/g, "ğ");
  car = car.replace(/ь/g, "ı");
  car = car.replace(/y/g, "ü");
  car = car.replace(/j/g, "y");
  car = car.replace(/ƶ/g, "j");
  car = car.replace(/ɵ/g, "ö");
  car = car.replace(/В/g, "B");
  car = car.replace(/C/g, "Ч");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ƣ/g, "Ğ");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Ь/g, "I");
  car = car.replace(/Y/g, "Ü");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ƶ/g, "J");
  car = car.replace(/Ɵ/g, "Ö"); 
  car = car.replace(/ʼ/g, ""); 
document.transcription.text2.value=translit;
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}