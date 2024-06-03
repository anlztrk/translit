
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/í/g, "ī");
  car = car.replace(/Í/g, "Ī");
  car = car.replace(/ú/g, "ū");
  car = car.replace(/Ú/g, "Ū");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}