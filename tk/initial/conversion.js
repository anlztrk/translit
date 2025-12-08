
var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  car = car.replace(/\u017F/g, "ž");
  car = car.replace(/\u00A3/g, "Ž");
  car = car.replace(/ñ/g, "ň");
  car = car.replace(/Ñ/g, "Ň");
  car = car.replace(/\u00A2/g, "ş");
  car = car.replace(/\u0024/g, "Ş");
  car = car.replace(/ÿ/g, "ý");
  car = car.replace(/\u00A5/g, "Ý");
  translit = translit.replace(/Ұ/g, "\u00A5");
  car = car.replace(/Ұ/g, "Ý");
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ž/g, "\u017F");
  car = car.replace(/Ž/g, "\u00A3");
  car = car.replace(/ň/g, "ñ");
  car = car.replace(/Ň/g, "Ñ");
  car = car.replace(/ş/g, "\u00A2");
  car = car.replace(/Ş/g, "\u0024");
  car = car.replace(/ý/g, "ÿ");
  car = car.replace(/Ý/g, "\u00A5");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}