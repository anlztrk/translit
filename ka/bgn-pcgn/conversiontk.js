﻿
//  copyright lexilogos.com
var car;
function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

  translit = translit.replace(/ə/g, "ә");
  translit = translit.replace(/Ə/g, "Ә");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/Ə/g, "Ä");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "ä");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "gh");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "zh");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "ī");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ng");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "ū");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "kh");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/щ/g, "shch");
  car = car.replace(/ъ/g, "”");
  car = car.replace(/ы/g, "y");
  car = car.replace(/і/g, "i");
  car = car.replace(/ь/g, "’");
  car = car.replace(/э/g, "ė");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Gh");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ж/g, "Zh");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "Ī");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "NG");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "Ū");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "Kh");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/Щ/g, "Shch");
  car = car.replace(/Ъ/g, "”");
  car = car.replace(/Ы/g, "Y");
  car = car.replace(/І/g, "I");
  car = car.replace(/Ь/g, "’");
  car = car.replace(/Э/g, "Ė");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}