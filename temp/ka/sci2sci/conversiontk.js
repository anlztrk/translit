
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;

  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/Ī/g, "Î");
  car = car.replace(/Ň/g, "Ñ");
  car = car.replace(/Ū/g, "Û");
  car = car.replace(/Ħ/g, "X");
  car = car.replace(/Č/g, "Ç");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/Ś/g, "Ṣ");
  car = car.replace(/É/g, "Ẹ");
  
  car = car.replace(/y/g, "ı");
  car = car.replace(/j/g, "y");
  car = car.replace(/ž/g, "j");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/ī/g, "î");
  car = car.replace(/ň/g, "ñ");
  car = car.replace(/ū/g, "û");
  car = car.replace(/ħ/g, "x");
  car = car.replace(/č/g, "ç");
  car = car.replace(/š/g, "ş");
  car = car.replace(/ś/g, "ṣ");
  car = car.replace(/é/g, "ẹ");
  
  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}