var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.normalize('NFD');
document.transcription.text2.value=car;
}
function cyrlat () {
car = document.transcription.text2.value;
  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
