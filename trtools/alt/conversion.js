var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/i/g, "ï");
  car = car.replace(/ı/g, "i");
  car = car.replace(/j/g, "z\u0327");
  car = car.replace(/c/g, "j");
  car = car.replace(/ç/g, "c");
  car = car.replace(/İ/g, "Ï");  
  car = car.replace(/J/g, "Z\u0327");
  car = car.replace(/C/g, "J");
  car = car.replace(/Ç/g, "C");
   document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
