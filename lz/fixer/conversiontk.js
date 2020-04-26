//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/C\u0327\u030c/g, "Č\u0327");
  car = car.replace(/c\u0327\u030c/g, "č\u0327");
  car = car.replace(/C\u030c\u0327/g, "Č\u0327");
  car = car.replace(/c\u030c\u0327/g, "č\u0327");
  car = car.replace(/Ç\u030c/g, "Č\u0327");
  car = car.replace(/ç\u030c/g, "č\u0327");
  car = car.replace(/Ḉ/g, "Č\u0327");
  car = car.replace(/ḉ/g, "č\u0327");
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Ḱ/g, "Ǩ");
  car = car.replace(/ḱ/g, "ǩ");
  car = car.replace(/Ṕ/g, "P\u030c");
  car = car.replace(/ṕ/g, "p\u030c");
  car = car.replace(/T\u0306/g, "Ť");
  car = car.replace(/ť/g, "t\u0306");
  car = car.replace(/З/g, "Ʒ");
  car = car.replace(/з/g, "ʒ");  
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}