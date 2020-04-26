//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
car = car.replace(/Ä/g, "Ə");
  car = car.replace(/ä/g, "ə");
  car = car.replace(/Ñ/g, "Ꞑ");
  car = car.replace(/ñ/g, "ꞑ");  
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/ö/g, "ɵ");
  car = car.replace(/Í/g, "Iy");
  car = car.replace(/í/g, "ıy");
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
  car = car.replace(/IY/g, "Í");
  car = car.replace(/Iy/g, "Í");
  car = car.replace(/ıy/g, "í");
  car = car.replace(/ía/g, "ıya");
  car = car.replace(/íä/g, "ıyä");
  car = car.replace(/íe/g, "ıye");
  car = car.replace(/íı/g, "ıyı");
  car = car.replace(/íi/g, "ıyi");
  car = car.replace(/íí/g, "ıyí");
  car = car.replace(/ío/g, "ıyo");
  car = car.replace(/íö/g, "ıyö");
  car = car.replace(/íu/g, "ıyu");
  car = car.replace(/íü/g, "ıyü");
  car = car.replace(/í\u005Bä/g, "ıy\u005Bä");
  car = car.replace(/í\u005Bü/g, "ıy\u005Bü");
  car = car.replace(/Ía/g, "Iya");
  car = car.replace(/Íä/g, "Iyä");
  car = car.replace(/Íe/g, "Iye");
  car = car.replace(/Íı/g, "Iyı");
  car = car.replace(/Íi/g, "Iyi");
  car = car.replace(/Íí/g, "Iyí");
  car = car.replace(/Ío/g, "Iyo");
  car = car.replace(/Íö/g, "Iyö");
  car = car.replace(/Íu/g, "Iyu");
  car = car.replace(/Íü/g, "Iyü");
  car = car.replace(/Í\u005Bä/g, "Iy\u005Bä");
  car = car.replace(/Í\u005Bü/g, "Iy\u005Bü");
  car = car.replace(/ÍA/g, "IYA");
  car = car.replace(/ÍÄ/g, "IYÄ");
  car = car.replace(/ÍE/g, "IYE");
  car = car.replace(/ÍI/g, "IYI");
  car = car.replace(/Íİ/g, "IYİ");
  car = car.replace(/ÍÍ/g, "IYÍ");
  car = car.replace(/ÍO/g, "IYO");
  car = car.replace(/ÍÖ/g, "IYÖ");
  car = car.replace(/ÍU/g, "IYU");
  car = car.replace(/ÍÜ/g, "IYÜ");
  car = car.replace(/Í\u005BÄ/g, "IY\u005BÄ");
  car = car.replace(/Í\u005BÜ/g, "IY\u005BÜ");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}