var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/n̡/g, "ꞑ");
  translit = translit.replace(/N̡/g, "Ꞑ");
  translit = translit.replace(/ᶇ/g, "ꞑ");
  translit = translit.replace(/Ņ/g, "Ꞑ");
  translit = translit.replace(/ņ/g, "ꞑ");
  translit = translit.replace(/Ŋ/g, "Ꞑ");
  translit = translit.replace(/ŋ/g, "ꞑ");
  
  translit = translit.replace(/Ә/g, "Ə");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Ə/g, "Ä");
  translit = translit.replace(/ә/g, "ə");
  car = car.replace(/ә/g, "ä");
  translit = translit.replace(/ǝ/g, "ə");
  car = car.replace(/ǝ/g, "ä");
  translit = translit.replace(/∂/g, "ə");
  car = car.replace(/∂/g, "ä");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/N̡/g, "Ñ");
  car = car.replace(/ᶇ/g, "ñ");
  car = car.replace(/n̡/g, "ñ");
  car = car.replace(/Ꞑ/g, "Ñ");
  car = car.replace(/ꞑ/g, "ñ");
  car = car.replace(/Ņ/g, "Ñ");
  car = car.replace(/ņ/g, "ñ");
  car = car.replace(/Ŋ/g, "Ñ");
  car = car.replace(/ŋ/g, "ñ");
  translit = translit.replace(/Ө/g, "Ɵ");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/Ɵ/g, "Ö");
  translit = translit.replace(/ө/g, "ɵ");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/ɵ/g, "ö");
  translit = translit.replace(/Θ/g, "ɵ");
  car = car.replace(/Θ/g, "ö");
  document.transcription.text1.value=translit; 
  document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  car = car.replace(/Ä/g, "Ə");
  car = car.replace(/ä/g, "ə");
  car = car.replace(/Ñ/g, "Ꞑ");
  car = car.replace(/ñ/g, "ꞑ");  
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/ö/g, "ɵ");
  car = car.replace(/Í/g, "Iy");
  car = car.replace(/í/g, "ıy");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
