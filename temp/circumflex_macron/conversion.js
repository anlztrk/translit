

var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/\u00af/g, "\u0302");
  car = car.replace(/Ā/g, "Â");
  car = car.replace(/Ē/g, "Ê");
  car = car.replace(/Ī/g, "Î");
  car = car.replace(/Ō/g, "Ô");
  car = car.replace(/Ū/g, "Û");
  car = car.replace(/Ȳ/g, "Ŷ");
  car = car.replace(/ā/g, "â");
  car = car.replace(/ē/g, "ê");
  car = car.replace(/ī/g, "î");
  car = car.replace(/ō/g, "ô");
  car = car.replace(/ū/g, "û");
  car = car.replace(/ȳ/g, "ŷ");
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/\u0302/g, "\u00af");
  car = car.replace(/Â/g, "Ā");
  car = car.replace(/Ê/g, "Ē");
  car = car.replace(/Î/g, "Ī");
  car = car.replace(/Ô/g, "Ō");
  car = car.replace(/Û/g, "Ū");
  car = car.replace(/Ŷ/g, "Ȳ");
  car = car.replace(/â/g, "ā");
  car = car.replace(/ê/g, "ē");
  car = car.replace(/î/g, "ī");
  car = car.replace(/ô/g, "ō");
  car = car.replace(/û/g, "ū");
  car = car.replace(/ŷ/g, "ȳ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}