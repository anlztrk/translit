var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(Ь|Ъ|ь|ъ)(е|и|о)/g, "$1й$2");
  car = car.replace(/(Ь|Ъ)(Е|И|О)/g, "$1Й$2");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "á");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ǵ");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ń");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ó");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ү/g, "ú");
  car = car.replace(/ў/g, "w");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/ҳ/g, "h");
  car = car.replace(/ц/g, "c");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/щ/g, "sh");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "e");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Á");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ǵ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "I");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ń");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ó");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ү/g, "Ú");
  car = car.replace(/Ў/g, "W");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Ҳ/g, "H");
  car = car.replace(/Ц/g, "C");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/Щ/g, "Sh");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "Í");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "E");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
var car_Orig = car;
  car_Orig = car_Orig.replace(/í/g, "ı");

  car = car.replace(/A/g, "А");
  car = car.replace(/(Á|Ä)/g, "Ә");
  car = car.replace(/B/g, "Б");
  car = car.replace(/V/g, "В");
  car = car.replace(/G/g, "Г");
  car = car.replace(/(Ǵ|Ğ)/g, "Ғ");
  car = car.replace(/D/g, "Д");
  car = car.replace(/E/g, "Е");
  car = car.replace(/J/g, "Ж");
  car = car.replace(/Z/g, "З");
  if(/Ä|ä|Ç|ç|Ğ|ğ|İ|Ñ|ñ|Ö|ö|Ş|ş|Ü|ü/.test(car_Orig)) {
  car = car.replace(/I/g, "Ы");
  }
  car = car.replace(/(I|İ)/g, "И");
  car = car.replace(/Y/g, "Й");
  car = car.replace(/K/g, "К");
  car = car.replace(/Q/g, "Қ");
  car = car.replace(/L/g, "Л");
  car = car.replace(/M/g, "М");
  car = car.replace(/N/g, "Н");
  car = car.replace(/(Ń|Ñ)/g, "Ң");
  car = car.replace(/O/g, "О");
  car = car.replace(/(Ó|Ö)/g, "Ө");
  car = car.replace(/P/g, "П");
  car = car.replace(/R/g, "Р");
  car = car.replace(/S/g, "С");
  car = car.replace(/T/g, "Т");
  car = car.replace(/U/g, "У");
  car = car.replace(/W/g, "Ў");
  car = car.replace(/(Ú|Ü)/g, "Ү");
  car = car.replace(/F/g, "Ф");
  car = car.replace(/H/g, "Ҳ");
  car = car.replace(/X/g, "Х");
  car = car.replace(/C/g, "Ц");
  car = car.replace(/Ç/g, "Ч");
  car = car.replace(/Ş/g, "Ш");
  car = car.replace(/Í/g, "Ы");
  car = car.replace(/a/g, "а");
  car = car.replace(/(á|ä)/g, "ә");
  car = car.replace(/b/g, "б");
  car = car.replace(/v/g, "в");
  car = car.replace(/g/g, "г");
  car = car.replace(/(ǵ|ğ)/g, "ғ");
  car = car.replace(/d/g, "д");
  car = car.replace(/j/g, "ж");
  car = car.replace(/z/g, "з");
  car = car.replace(/i/g, "и");
  car = car.replace(/y/g, "й");
  car = car.replace(/k/g, "к");
  car = car.replace(/q/g, "қ");
  car = car.replace(/l/g, "л");
  car = car.replace(/m/g, "м");
  car = car.replace(/n/g, "н");
  car = car.replace(/(ń|ñ)/g, "ң");
  car = car.replace(/o/g, "о");
  car = car.replace(/ó/g, "ө");
  car = car.replace(/p/g, "п");
  car = car.replace(/r/g, "р");
  car = car.replace(/s/g, "с");
  car = car.replace(/t/g, "т");
  car = car.replace(/u/g, "у");
  car = car.replace(/w/g, "ў");
  car = car.replace(/(ú|ü)/g, "ү");
  car = car.replace(/f/g, "ф");
  car = car.replace(/h/g, "ҳ");
  car = car.replace(/x/g, "х");
  car = car.replace(/c/g, "ц");
  car = car.replace(/i/g, "и");
  car = car.replace(/(ı|í)/g, "ы");
  car = car.replace(/Й(А|а)/g, "Я");
  car = car.replace(/Й(У|у)/g, "Ю");
  car = car.replace(/йа/g, "я");
  car = car.replace(/йу/g, "ю");
  
  if(/Ä|ä|Ç|ç|Ğ|ğ|İ|Ñ|ñ|Ö|ö|Ş|ş|Ü|ü/.test(car_Orig) == false || /Á|á|Ǵ|ǵ|Í|Ń|ń|Ó|ó|Ú|ú/.test(car_Orig)) {
  car = car.replace(/цҳ/g, "ч");
  car = car.replace(/Ц(Ҳ|ҳ)/g, "Ч");
  car = car.replace(/сҳ/g, "ш");
  car = car.replace(/С(Ҳ|ҳ)/g, "Ш");
  }  
  car = car.replace(/\u201c/g, "«");
  car = car.replace(/\u201d/g, "»");
document.transcription.text2.value=car_Orig;
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
