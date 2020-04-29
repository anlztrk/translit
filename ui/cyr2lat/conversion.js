//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/é/g, "ë");
  translit = translit.replace(/É/g, "Ë");
  
  car = car.replace(/n'g'h/g, "нгһ");
  car = car.replace(/N'g'h/g, "Нгһ");
  car = car.replace(/N'G'h/g, "НГһ");
  car = car.replace(/N'G'H/g, "НГҺ");
  
  car = car.replace(/ngh/g, "ңһ");
  car = car.replace(/Ngh/g, "Ңһ");
  car = car.replace(/NGh/g, "Ңһ");
  car = car.replace(/NGH/g, "ҢҺ");
  
  car = car.replace(/n'gh/g, "нғ");
  car = car.replace(/N'gh/g, "Нғ");
  car = car.replace(/N'Gh/g, "НҒ");
  car = car.replace(/N'GH/g, "НҒ");
  
  car = car.replace(/g'h/g, "гһ");
  car = car.replace(/G'h/g, "Гһ");
  car = car.replace(/G'H/g, "ГҺ");
  
  car = car.replace(/s'h/g, "сһ");
  car = car.replace(/S'h/g, "Сһ");
  car = car.replace(/S'H/g, "СҺ");
  
  car = car.replace(/c'h/g, "cһ");
  car = car.replace(/C'h/g, "Cһ");
  car = car.replace(/C'H/g, "CҺ");
  
  car = car.replace(/z'h/g, "зһ");
  car = car.replace(/Z'h/g, "Зһ");
  car = car.replace(/Z'H/g, "ЗҺ");
  
  car = car.replace(/n'g/g, "нг");
  car = car.replace(/N'g/g, "Нг");
  car = car.replace(/N'G/g, "НГ");
  
  car = car.replace(/gh/g, "ғ");
  car = car.replace(/Gh/g, "Ғ");
  car = car.replace(/GH/g, "Ғ");
  
  car = car.replace(/sh/g, "ш");
  car = car.replace(/Sh/g, "Ш");
  car = car.replace(/SH/g, "Ш");

  car = car.replace(/ch/g, "ч");
  car = car.replace(/Ch/g, "Ч");
  car = car.replace(/CH/g, "Ч");
  
  car = car.replace(/zh/g, "ж");
  car = car.replace(/Zh/g, "Ж");
  car = car.replace(/ZH/g, "Ж");
  
  car = car.replace(/ng/g, "ң");
  car = car.replace(/Ng/g, "Ң");
  car = car.replace(/NG/g, "Ң");
  
  car = car.replace(/yu/g, "ю");
  car = car.replace(/Yu/g, "Ю");
  car = car.replace(/YU/g, "Ю");
  
  car = car.replace(/ya/g, "я");
  car = car.replace(/Ya/g, "Я");
  car = car.replace(/YA/g, "Я");
  
  car = car.replace(/a/g, "а");
  car = car.replace(/b/g, "б");
  car = car.replace(/j/g, "җ");
  car = car.replace(/d/g, "д");
  car = car.replace(/ë/g, "е");
  car = car.replace(/é/g, "е");
  car = car.replace(/e/g, "ә");
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
  car = car.replace(/w/g, "в");
  car = car.replace(/v/g, "в");
  car = car.replace(/y/g, "й");
  car = car.replace(/z/g, "з");
  car = car.replace(/A/g, "А");
  car = car.replace(/B/g, "Б");
  car = car.replace(/J/g, "Җ");
  car = car.replace(/D/g, "Д");
  car = car.replace(/Ë/g, "Е");
  car = car.replace(/É/g, "Е");
  car = car.replace(/E/g, "Ә");
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
  car = car.replace(/W/g, "В");
  car = car.replace(/V/g, "В");
  car = car.replace(/Y/g, "Й");
  car = car.replace(/Z/g, "З");
  car = car.replace(/'/g, "");
  car = car.replace(/\u201c/g, "«");
  car = car.replace(/\u201d/g, "»");
  document.transcription.text2.value=translit;
  document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/нгһ/g, "n'g'h");
  car = car.replace(/Нгһ/g, "N'g'h");
  car = car.replace(/НГһ/g, "N'G'h");
  car = car.replace(/НГҺ/g, "N'G'H");
  car = car.replace(/нг/g, "n'g");
  car = car.replace(/нғ/g, "n'gh");
  car = car.replace(/сһ/g, "s'h");
  car = car.replace(/cһ/g, "c'h");
  car = car.replace(/зһ/g, "z'h");
  car = car.replace(/гһ/g, "g'h");
  
  car = car.replace(/Нг/g, "N'g");
  car = car.replace(/Нғ/g, "N'gh");
  car = car.replace(/Сһ/g, "S'h");
  car = car.replace(/Cһ/g, "C'h");
  car = car.replace(/Зһ/g, "Z'h");
  car = car.replace(/Гһ/g, "G'h");
  
  car = car.replace(/НГ/g, "N'G");
  car = car.replace(/НҒ/g, "N'GH");
  car = car.replace(/СҺ/g, "S'H");
  car = car.replace(/CҺ/g, "C'H");
  car = car.replace(/ЗҺ/g, "Z'H");
  car = car.replace(/ГҺ/g, "G'H");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/җ/g, "j");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "ë");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ә/g, "e");
  car = car.replace(/ф/g, "f");
  car = car.replace(/г/g, "g");
  car = car.replace(/қ/g, "q");
  car = car.replace(/ғ/g, "gh");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/и/g, "i");
  car = car.replace(/ж/g, "zh");
  car = car.replace(/к/g, "k");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ng");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/в/g, "w");
  car = car.replace(/й/g, "y");
  car = car.replace(/з/g, "z");
  car = car.replace(/я/g, "ya");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/Җ/g, "J");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "Ë");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ә/g, "E");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Ғ/g, "Gh");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Х/g, "X");
  car = car.replace(/И/g, "I");
  car = car.replace(/Ж/g, "Zh");
  car = car.replace(/К/g, "K");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "NG");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/В/g, "W");
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