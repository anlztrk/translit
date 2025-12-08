
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ð/g, "ğ");
  car = car.replace(/Ð/g, "Ğ");
  car = car.replace(/ý/g, "ı");
  car = car.replace(/Ý/g, "İ");
  car = car.replace(/þ/g, "ş");
  car = car.replace(/Þ/g, "Ş");
  car = car.replace(/â/g, "a");
  car = car.replace(/Â/g, "A");
  car = car.replace(/î/g, "i");
  car = car.replace(/Î/g, "İ");
  car = car.replace(/û/g, "u");
  car = car.replace(/Û/g, "U");
  car = car.replace(/ç/g, "c");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/ş/g, "s");
  car = car.replace(/Ş/g, "S");
  car = car.replace(/ğ/g, "g");
  car = car.replace(/Ğ/g, "G");
  car = car.replace(/ı/g, "i");
  car = car.replace(/İ/g, "I");
  car = car.replace(/ə/g, "a");
  car = car.replace(/Ə/g, "A");
  car = car.replace(/ä/g, "a");
  car = car.replace(/Ä/g, "A");
  car = car.replace(/ö/g, "o");
  car = car.replace(/Ö/g, "O");
  car = car.replace(/ü/g, "u");
  car = car.replace(/Ü/g, "U");
document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}