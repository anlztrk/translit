//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ś/g, "Ș");
  car = car.replace(/ś/g, ș");
  car = car.replace(/Ë/g, "Ê");
  car = car.replace(/ë/g, "ê");
  car = car.replace(/Ï/g, "Î");
  car = car.replace(/ï/g, "î");
  car = car.replace(/Â/g, "Á");
  car = car.replace(/â/g, "á");
  car = car.replace(/Ô/g, "Ó");
  car = car.replace(/ô/g, "ó");
  car = car.replace(/Û/g, "Ú");
  car = car.replace(/û/g, "ú");
  document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
