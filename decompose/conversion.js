var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.normalize('NFD');
document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
