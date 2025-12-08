var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/c/g, "ç");
  car = car.replace(/č/g, "c");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/š/g, "ş");
  car = car.replace(/y/g, "ı");
  car = car.replace(/j/g, "y");
  car = car.replace(/ž/g, "j");
  car = car.replace(/g/g, "q");

  car = car.replace(/C/g, "Ç");
  car = car.replace(/Č/g, "C");
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/G/g, "Q");
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/c/g, "č");
  car = car.replace(/ç/g, "c");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/ş/g, "š");
  car = car.replace(/j/g, "ž");
  car = car.replace(/y/g, "j");
  car = car.replace(/ı/g, "y");
  car = car.replace(/q/g, "g");
  car = car.replace(/ü/g, "u");

  car = car.replace(/C/g, "Č");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/Ğ/g, "Ǧ");
  car = car.replace(/Ş/g, "Š");
  car = car.replace(/J/g, "Ž");
  car = car.replace(/Y/g, "J");
  car = car.replace(/I/g, "Y");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Q/g, "G");
  car = car.replace(/Ü/g, "U");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
