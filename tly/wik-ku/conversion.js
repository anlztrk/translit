var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/c/g, "č");
  car = car.replace(/ç/g, "c");
  car = car.replace(/ẍ/g, "ǧ");
  car = car.replace(/ş/g, "š");
  car = car.replace(/j/g, "ž");
  car = car.replace(/y/g, "j");
  car = car.replace(/i/g, "y");
  car = car.replace(/î/g, "i");
  car = car.replace(/e/g, "ə");
  car = car.replace(/ê/g, "e");

  car = car.replace(/C/g, "Č");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/Ẍ/g, "Ǧ");
  car = car.replace(/Ş/g, "Š");
  car = car.replace(/J/g, "Ž");
  car = car.replace(/Y/g, "J");
  car = car.replace(/I/g, "Y");
  car = car.replace(/Î/g, "I");
  car = car.replace(/E/g, "Ə");
  car = car.replace(/Ê/g, "E");
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/c/g, "ç");
  car = car.replace(/č/g, "c");
  car = car.replace(/ǧ/g, "ẍ");
  car = car.replace(/š/g, "ş");
  car = car.replace(/i/g, "î");
  car = car.replace(/y/g, "i");
  car = car.replace(/j/g, "y");
  car = car.replace(/ž/g, "j");
  car = car.replace(/e/g, "ê");
  car = car.replace(/ə/g, "e");

  car = car.replace(/C/g, "Ç");
  car = car.replace(/Č/g, "C");
  car = car.replace(/Ǧ/g, "Ẍ");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/I/g, "Î");
  car = car.replace(/Y/g, "I");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/E/g, "Ê");
  car = car.replace(/Ə/g, "E");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
