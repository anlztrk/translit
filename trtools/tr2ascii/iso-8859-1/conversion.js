
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ð/g, "ğ");
  car = car.replace(/Ð/g, "Ğ");
  car = car.replace(/ý/g, "ı");
  car = car.replace(/Ý/g, "İ");
  car = car.replace(/þ/g, "ş");
  car = car.replace(/Þ/g, "Ş");
  car = car.replace(/ş/g, "s");
  car = car.replace(/Ş/g, "S");
  car = car.replace(/ğ/g, "g");
  car = car.replace(/Ğ/g, "G");
  car = car.replace(/ı/g, "i");
  car = car.replace(/İ/g, "I");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/Ə/g, "Ä");
document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}