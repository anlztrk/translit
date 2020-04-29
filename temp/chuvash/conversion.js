//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ą/g, "Ạ");
  car = car.replace(/Ę/g, "Ẹ");
  car = car.replace(/Į/g, "Ï");
  car = car.replace(/ą/g, "ạ");
  car = car.replace(/ę/g, "ẹ");
  car = car.replace(/į/g, "ï");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}