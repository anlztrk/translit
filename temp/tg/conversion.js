
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/e/g, "ê");
  car = car.replace(/E/g, "Ê");
  car = car.replace(/a/g, "e");
  car = car.replace(/A/g, "E");
  car = car.replace(/o/g, "a");
  car = car.replace(/O/g, "A");
  car = car.replace(/ī/g, "î");
  car = car.replace(/Ī/g, "Î");
  car = car.replace(/ū/g, "û");
  car = car.replace(/Ū/g, "Û");
  car = car.replace(/ǧ/g, "ẍ");
  car = car.replace(/Ǧ/g, "Ẍ");
  car = car.replace(/š/g, "ş");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/c/g, "ç");
  car = car.replace(/C/g, "Ç");
  car = car.replace(/j/g, "c");
  car = car.replace(/J/g, "C");
  car = car.replace(/ž/g, "j");
  car = car.replace(/Ž/g, "J");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
