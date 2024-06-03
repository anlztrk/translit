
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ŏ/g, "Ȯ"); 
  car = car.replace(/ŏ/g, "ȯ");
  car = car.replace(/Ŭ/g, "U̇");
  car = car.replace(/ŭ/g, "u̇");
  car = car.replace(/Ĭ/g, "Ị");
  car = car.replace(/ĭ/g, "ị");
  car = car.replace(/ʼʼ/g, "”");
  car = car.replace(/ʼ/g, "’");
  
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}