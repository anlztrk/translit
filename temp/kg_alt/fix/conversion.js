
var car;
var translit;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/n̆/g, "ň");
  car = car.replace(/N̆/g, "Ň");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/Ğ/g, "Ǧ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}