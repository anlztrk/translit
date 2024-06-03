

var car;
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/<</g, "«");
  translit = translit.replace(/>>/g, "»");
  car = car.replace(/<</g, "«");
  car = car.replace(/>>/g, "»");
  
  car = car.replace(/\u201e/g, "«");
  car = car.replace(/\u201c/g, "»");

  car = car.replace(/\u2019/g, "\u02ee");
  car = car.replace(/\u02bc/g, "\u02ee");
  car = car.replace(/\u0307/g, "\u02bc");
  car = car.replace(/\u0323/g, "\u02bc");
  
  
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}