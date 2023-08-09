var car;
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/é/g, "ë");
  translit = translit.replace(/É/g, "Ë");
  car = car.replace(/G(H|h)/g, "Ƣ");
  car = car.replace(/C(H|h)/g, "\u2060Q");
  car = car.replace(/S(H|h)/g, "\u2060X");
  car = car.replace(/Z(H|h)/g, "Ⱬ");
  car = car.replace(/gh/g, "ƣ");
  car = car.replace(/ch/g, "\u2060q");
  car = car.replace(/sh/g, "\u2060x");
  car = car.replace(/zh/g, "ⱬ");
  car = car.replace(/G'(H|h)/g, "G$1");
  car = car.replace(/g'h/g, "gh");
  car = car.replace(/e/g, "ə");
  car = car.replace(/(é|ë)/g, "e");
  car = car.replace(/ö/g, "ɵ");
  car = car.replace(/h/g, "ⱨ");
  car = car.replace(/q/g, "ⱪ");
  car = car.replace(/\u2060ⱪ/g, "q");  
  car = car.replace(/x/g, "h");
  car = car.replace(/\u2060h/g, "x");
  car = car.replace(/E/g, "Ə");
  car = car.replace(/(É|Ë)/g, "E");
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/H/g, "Ⱨ");
  car = car.replace(/Q/g, "Ⱪ");
  car = car.replace(/\u2060Ⱪ/g, "Q");
  car = car.replace(/X/g, "H");
  car = car.replace(/\u2060H/g, "X");  
  document.transcription.text1.value=translit;
  document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/C(H|h)/g, "Q");
  car = car.replace(/Z(H|h)/g, "J");
  car = car.replace(/S(H|h)/g, "X");
  car = car.replace(/ch/g, "q");
  car = car.replace(/zh/g, "j");
  car = car.replace(/sh/g, "x");
  
  car = car.replace(/e/g, "ë");
  car = car.replace(/ə/g, "e");
  car = car.replace(/h/g, "\u2060x");
  car = car.replace(/ⱨ/g, "h");
  car = car.replace(/v/g, "w");
  car = car.replace(/ⱪ/g, "\u2060q");
  car = car.replace(/E/g, "Ë");
  car = car.replace(/Ə/g, "E");
  car = car.replace(/H/g, "\u2060X");
  car = car.replace(/Ⱨ/g, "H");
  car = car.replace(/V/g, "W");
  car = car.replace(/Ⱪ/g, "\u2060Q");
  
  car = car.replace(/G(H|h)/g, "G'$1");
  car = car.replace(/gh/g, "g'h");
  
  car = car.replace(/c/g, "s");
  car = car.replace(/C/g, "S");
  car = car.replace(/ƣ/g, "gh");
  car = car.replace(/ⱬ/g, "zh");
  car = car.replace(/x/g, "sh");
  car = car.replace(/q/g, "ch");
  car = car.replace(/Ƣ/g, "Gh");
  car = car.replace(/Ⱬ/g, "Zh");
  car = car.replace(/X/g, "Sh");
  car = car.replace(/Q/g, "Ch");
  car = car.replace(/\u2060C(H|h)/g, "Q");
  car = car.replace(/\u2060ch/g, "q");
  car = car.replace(/\u2060S(H|h)/g, "X");
  car = car.replace(/\u2060sh/g, "x");
  document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}