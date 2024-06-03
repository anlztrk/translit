
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/İ/g, "Î");
  car = car.replace(/i/g, "î"); 
  car = car.replace(/Í/g, "İ");
  car = car.replace(/í/g, "i"); 
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}