
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
  car = car.replace(/ғ/g, "ğ");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "io");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "i");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ұ/g, "ū");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ч/g, "tş");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/щ/g, "ş");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "y");
  car = car.replace(/і/g, "ı");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "e");
  car = car.replace(/ю/g, "iu");
  car = car.replace(/я/g, "ia");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ğ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ё/g, "İo");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "İ");
  car = car.replace(/Й/g, "İ");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ұ/g, "Ū");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/Ч/g, "Tş");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Щ/g, "Ş");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "Y");
  car = car.replace(/І/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "E");
  car = car.replace(/Ю/g, "İu");
  car = car.replace(/Я/g, "İa");
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