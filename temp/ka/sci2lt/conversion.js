
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;

  car = car.replace(/Ñ/g, "Ņ");
  car = car.replace(/Ç/g, "Ć");
  car = car.replace(/Ş/g, "Ș");
  car = car.replace(/Ṣ/g, "Ś");
  car = car.replace(/Ẹ/g, "É");
  
  car = car.replace(/ñ/g, "ņ");
  car = car.replace(/ç/g, "ć");
  car = car.replace(/ş/g, "ș");
  car = car.replace(/ṣ/g, "ś");
  car = car.replace(/ẹ/g, "é");
  
  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}