//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
car = car.replace(/E/g, "Ə");
  car = car.replace(/e/g, "ə");
  car = car.replace(/İ/g, "E");
  car = car.replace(/i/g, "e");
  car = car.replace(/Î/g, "İ");
  car = car.replace(/î/g, "i");
  car = car.replace(/Ɨ/g, "Í");
  car = car.replace(/ᵼ/g, "í");
  car = car.replace(/Ñ/g, "Ꞑ");
  car = car.replace(/ñ/g, "ꞑ");  
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/ö/g, "ɵ");
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/n̡/g, "ꞑ");
  translit = translit.replace(/N̡/g, "Ꞑ");
  translit = translit.replace(/ᶇ/g, "ꞑ");
  translit = translit.replace(/Ņ/g, "Ꞑ");
  translit = translit.replace(/ņ/g, "ꞑ");
  translit = translit.replace(/Ŋ/g, "Ꞑ");
  translit = translit.replace(/ŋ/g, "ꞑ");
  translit = translit.replace(/Ө/g, "Ɵ");
  translit = translit.replace(/ө/g, "ɵ");
  translit = translit.replace(/Θ/g, "ɵ");
  translit = translit.replace(/Ә/g, "Ə");
  translit = translit.replace(/ә/g, "ə");
  translit = translit.replace(/∂/g, "ə");
  translit = translit.replace(/ǝ/g, "ə");
  car = car.replace(/Í/g, "Ɨ");
  car = car.replace(/í/g, "ᵼ");
  car = car.replace(/İ/g, "Î");
  car = car.replace(/i/g, "î");
  car = car.replace(/E/g, "İ");
  car = car.replace(/e/g, "i");
  car = car.replace(/Ə/g, "E");
  car = car.replace(/Ä/g, "E");
  car = car.replace(/ə/g, "e");
  car = car.replace(/ä/g, "e");
  car = car.replace(/Ә/g, "E");
  car = car.replace(/ә/g, "e");
  car = car.replace(/ǝ/g, "e");
  car = car.replace(/∂/g, "e");
  car = car.replace(/N̡/g, "Ñ");
  car = car.replace(/ᶇ/g, "ñ");
  car = car.replace(/n̡/g, "ñ");
  car = car.replace(/Ꞑ/g, "Ñ");
  car = car.replace(/ꞑ/g, "ñ");
  car = car.replace(/Ņ/g, "Ñ");
  car = car.replace(/ņ/g, "ñ");
  car = car.replace(/Ŋ/g, "Ñ");
  car = car.replace(/ŋ/g, "ñ");  
  car = car.replace(/Ɵ/g, "Ö");
  car = car.replace(/ɵ/g, "ö");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/Θ/g, "ö");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
