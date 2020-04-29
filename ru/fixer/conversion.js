//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/\u201c/g, "\u201e");
  car = car.replace(/\u201d/g, "\u201c");
  car = car.replace(/\u02bc\u02bc/g, "\u201d");
  car = car.replace(/\u02bc/g, "\u2019");
  document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}