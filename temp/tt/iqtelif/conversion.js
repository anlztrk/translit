
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;

  car = car.replace(/IY/g, "Ĭ");
  car = car.replace(/Iy/g, "Ĭ");
  car = car.replace(/İ/g, "Î");
  car = car.replace(/Í/g, "İ");
  
  car = car.replace(/i/g, "î");
  car = car.replace(/í/g, "i");
  car = car.replace(/ıy/g, "ĭ");
  
  car = car.replace(/ĭa/g, "ıya");
  car = car.replace(/ĭä/g, "ıyä");
  car = car.replace(/ĭe/g, "ıye");
  car = car.replace(/ĭı/g, "ıyı");
  car = car.replace(/ĭi/g, "ıyi");
  car = car.replace(/ĭĭ/g, "ıyĭ");
  car = car.replace(/ĭo/g, "ıyo");
  car = car.replace(/ĭö/g, "ıyö");
  car = car.replace(/ĭu/g, "ıyu");
  car = car.replace(/ĭü/g, "ıyü");
  car = car.replace(/Ĭa/g, "Iya");
  car = car.replace(/Ĭä/g, "Iyä");
  car = car.replace(/Ĭe/g, "Iye");
  car = car.replace(/Ĭı/g, "Iyı");
  car = car.replace(/Ĭi/g, "Iyi");
  car = car.replace(/Ĭĭ/g, "Iyĭ");
  car = car.replace(/Ĭo/g, "Iyo");
  car = car.replace(/Ĭö/g, "Iyö");
  car = car.replace(/Ĭu/g, "Iyu");
  car = car.replace(/Ĭü/g, "Iyü");
  car = car.replace(/ĬA/g, "IYA");
  car = car.replace(/ĬÄ/g, "IYÄ");
  car = car.replace(/ĬE/g, "IYE");
  car = car.replace(/ĬI/g, "IYI");
  car = car.replace(/Ĭİ/g, "IYİ");
  car = car.replace(/ĬĬ/g, "IYĬ");
  car = car.replace(/ĬO/g, "IYO");
  car = car.replace(/ĬÖ/g, "IYÖ");
  car = car.replace(/ĬU/g, "IYU");
  car = car.replace(/ĬÜ/g, "IYÜ");
  
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