//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/ğ/g, "ғ");
  car = car.replace(/Ğ/g, "Ғ");
  
  car = car.replace(/ş/g, "ш");
  car = car.replace(/Ş/g, "Ш");

  car = car.replace(/ç/g, "ч");
  car = car.replace(/Ç/g, "Ч");
  
  car = car.replace(/j/g, "ж");
  car = car.replace(/J/g, "Ж");
  
  car = car.replace(/ñ/g, "ң");
  car = car.replace(/Ñ/g, "Ң");
  
  car = car.replace(/yu/g, "ю");
  car = car.replace(/Yu/g, "Ю");
  car = car.replace(/YU/g, "Ю");
  
  car = car.replace(/ya/g, "я");
  car = car.replace(/Ya/g, "Я");
  car = car.replace(/YA/g, "Я");
  
  car = car.replace(/a/g, "а");
  car = car.replace(/b/g, "б");
  car = car.replace(/c/g, "җ");
  car = car.replace(/d/g, "д");
  car = car.replace(/e/g, "е");
  car = car.replace(/ə/g, "ә");
  car = car.replace(/f/g, "ф");
  car = car.replace(/g/g, "г");
  car = car.replace(/q/g, "қ");
  car = car.replace(/x/g, "х");
  car = car.replace(/h/g, "һ");
  car = car.replace(/i/g, "и");
  car = car.replace(/k/g, "к");
  car = car.replace(/l/g, "л");
  car = car.replace(/m/g, "м");
  car = car.replace(/n/g, "н");
  car = car.replace(/o/g, "о");
  car = car.replace(/ö/g, "ө");
  car = car.replace(/p/g, "п");
  car = car.replace(/r/g, "р");
  car = car.replace(/s/g, "с");
  car = car.replace(/t/g, "т");
  car = car.replace(/u/g, "у");
  car = car.replace(/ü/g, "ү");
  car = car.replace(/v/g, "в");
  car = car.replace(/y/g, "й");
  car = car.replace(/z/g, "з");
  car = car.replace(/A/g, "А");
  car = car.replace(/B/g, "Б");
  car = car.replace(/C/g, "Җ");
  car = car.replace(/D/g, "Д");
  car = car.replace(/E/g, "Е");
  car = car.replace(/Ə/g, "Ә");
  car = car.replace(/F/g, "Ф");
  car = car.replace(/G/g, "Г");
  car = car.replace(/Q/g, "Қ");
  car = car.replace(/H/g, "Һ");
  car = car.replace(/X/g, "Х");
  car = car.replace(/I/g, "И");
  car = car.replace(/K/g, "К");
  car = car.replace(/L/g, "Л");
  car = car.replace(/M/g, "М");
  car = car.replace(/N/g, "Н");
  car = car.replace(/O/g, "О");
  car = car.replace(/Ö/g, "Ө");
  car = car.replace(/P/g, "П");
  car = car.replace(/R/g, "Р");
  car = car.replace(/S/g, "С");
  car = car.replace(/T/g, "Т");
  car = car.replace(/U/g, "У");
  car = car.replace(/Ü/g, "Ү");
  car = car.replace(/V/g, "В");
  car = car.replace(/Y/g, "Й");
  car = car.replace(/Z/g, "З");
  car = car.replace(/'/g, "");
  car = car.replace(/\u201c/g, "«");
  car = car.replace(/\u201d/g, "»");
  document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/җ/g, "c");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ә/g, "ə");
  car = car.replace(/ф/g, "f");
  car = car.replace(/г/g, "g");
  car = car.replace(/қ/g, "q");
  car = car.replace(/ғ/g, "ğ");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/и/g, "i");
  car = car.replace(/ж/g, "j");
  car = car.replace(/к/g, "k");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/в/g, "v");
  car = car.replace(/й/g, "y");
  car = car.replace(/з/g, "z");
  car = car.replace(/я/g, "ya");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/Җ/g, "C");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ә/g, "Ə");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Ғ/g, "Ğ");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Х/g, "X");
  car = car.replace(/И/g, "I");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/К/g, "K");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/В/g, "V");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/З/g, "Z");
  car = car.replace(/Я/g, "Ya");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}