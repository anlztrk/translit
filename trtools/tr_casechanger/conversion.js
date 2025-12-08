
var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/i/g, "İ");
  translit = translit.toUpperCase();
  car = car.replace(/I/g, "ı");
  car = car.replace(/İ/g, "I");
  car = car.toLowerCase();
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/I/g, "ı");
  translit = translit.replace(/İ/g, "I");
  translit = translit.toLowerCase();
  car = car.replace(/i/g, "İ");
  car = car.toUpperCase();
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}