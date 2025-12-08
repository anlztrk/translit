var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.toUpperCase();
  car = car.toLowerCase();
  car = car.normalize('NFC');
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.toLowerCase();
  car = car.toUpperCase();
  car = car.normalize('NFC');
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
