
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;  
  car = car.replace(/ñ/g, "ň");
  car = car.replace(/Ñ/g, "Ň");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/Ğ/g, "Ǧ");
  car = car.replace(/ĭ/g, "ᵻ")
  car = car.replace(/Ĭ/g, "Ɨ")
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}