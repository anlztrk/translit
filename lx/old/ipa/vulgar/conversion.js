﻿
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/е/g, "ё");
  car = car.replace(/Е/g, "Ё");
  car = car.replace(/ы/g, "і");
  car = car.replace(/Ы/g, "І");
  car = car.replace(/й/g, "ј");
  car = car.replace(/Й/g, "Ј");
  car = car.replace(/ҳ/g, "хь");
  car = car.replace(/Ҳ/g, "ХЬ");
  car = car.replace(/қ/g, "кь");
  car = car.replace(/Қ/g, "КЬ");

  car = car.replace(/â/g, "å");
  car = car.replace(/Â/g, "Å");
  car = car.replace(/ă/g, "á");
  car = car.replace(/Ă/g, "Á");
  car = car.replace(/ĕ/g, "é");
  car = car.replace(/є/g, "é");
  car = car.replace(/Ĕ/g, "É");
  car = car.replace(/ŭ/g, "ú");
  car = car.replace(/Ŭ/g, "Ú");
  car = car.replace(/ŏ/g, "å");
  car = car.replace(/Ŏ/g, "Å");
  car = car.replace(/ô/g, "å");
  car = car.replace(/Ô/g, "Å");
  car = car.replace(/’/g, "'");
  car = car.replace(/'/g, "-");
  car = car.replace(/dzh/g, "ч");
  car = car.replace(/Dzh/g, "ч");
  car = car.replace(/DZH/g, "ч");
  car = car.replace(/d-z-h/g, "дзхь");
  car = car.replace(/D-z-h/g, "дзхь");
  car = car.replace(/D-Z-H/g, "дзхь");
  car = car.replace(/dz-h/g, "ѕхь");
  car = car.replace(/Dz-h/g, "ѕхь");
  car = car.replace(/DZ-H/g, "ѕхь");
  car = car.replace(/d-zh/g, "дж");
  car = car.replace(/D-zh/g, "дж");
  car = car.replace(/D-ZH/g, "дж");
  car = car.replace(/d-z/g, "дз");
  car = car.replace(/D-z/g, "дз");
  car = car.replace(/D-Z/g, "дз");
  car = car.replace(/z-h/g, "зхь");
  car = car.replace(/Z-h/g, "зхь");
  car = car.replace(/Z-H/g, "зхь");
  car = car.replace(/t-x/g, "тш");
  car = car.replace(/T-x/g, "тш");
  car = car.replace(/T-X/g, "тш");
  car = car.replace(/k-h/g, "кхь");
  car = car.replace(/K-h/g, "кхь");
  car = car.replace(/K-H/g, "кхь");
  car = car.replace(/tx/g, "щ");
  car = car.replace(/Tx/g, "щ");
  car = car.replace(/TX/g, "щ");
  car = car.replace(/zh/g, "ж");
  car = car.replace(/Zh/g, "ж");
  car = car.replace(/ZH/g, "ж");
  car = car.replace(/dz/g, "ѕ");
  car = car.replace(/Dz/g, "ѕ");
  car = car.replace(/DZ/g, "ѕ");  
  car = car.replace(/kh/g, "х");  
  car = car.replace(/Kh/g, "х");
  car = car.replace(/KH/g, "х");  
  
  car = car.replace(/u/g, "у");
  car = car.replace(/У/g, "у");
  car = car.replace(/j/g, "ј");
  car = car.replace(/Ј/g, "ј");
  car = car.replace(/m/g, "м");
  car = car.replace(/М/g, "м");
  car = car.replace(/i/g, "и");
  car = car.replace(/И/g, "и");
  car = car.replace(/å/g, "о");
  car = car.replace(/О/g, "о");
  car = car.replace(/o/g, "ё");
  car = car.replace(/Ё/g, "ё");
  car = car.replace(/g/g, "г");
  car = car.replace(/Г/g, "г");
  car = car.replace(/n/g, "н");
  car = car.replace(/Н/g, "н");
  car = car.replace(/s/g, "с");
  car = car.replace(/С/g, "с");
  car = car.replace(/y/g, "і");
  car = car.replace(/І/g, "і");
  car = car.replace(/b/g, "б");
  car = car.replace(/Б/g, "б");
  car = car.replace(/f/g, "ф");
  car = car.replace(/Ф/g, "ф");
  car = car.replace(/v/g, "в");
  car = car.replace(/В/g, "в");
  car = car.replace(/w/g, "ў");
  car = car.replace(/Ў/g, "ў");
  car = car.replace(/k/g, "кь");
  car = car.replace(/КЬ/g, "кь");
  car = car.replace(/q/g, "к");
  car = car.replace(/К/g, "к");
  car = car.replace(/t/g, "т");
  car = car.replace(/Т/g, "т");
  car = car.replace(/l/g, "л");
  car = car.replace(/Л/g, "л");
  car = car.replace(/e/g, "э");
  car = car.replace(/Э/g, "э");
  car = car.replace(/é/g, "эа");
  car = car.replace(/Є/g, "эа");
  car = car.replace(/ú/g, "ю");
  car = car.replace(/Ю/g, "ю");
  car = car.replace(/c/g, "ц");
  car = car.replace(/Ц/g, "ц");
  car = car.replace(/z/g, "з");
  car = car.replace(/З/g, "з");
  car = car.replace(/a/g, "а");
  car = car.replace(/А/g, "а");
  car = car.replace(/á/g, "я");
  car = car.replace(/Я/g, "я");
  car = car.replace(/p/g, "п");
  car = car.replace(/П/g, "п");
  car = car.replace(/d/g, "д");
  car = car.replace(/Д/g, "д");
  car = car.replace(/r/g, "р");
  car = car.replace(/Р/g, "р");
  car = car.replace(/U/g, "у");
  car = car.replace(/J/g, "ј");
  car = car.replace(/M/g, "м");
  car = car.replace(/I/g, "и");
  car = car.replace(/Å/g, "о");
  car = car.replace(/O/g, "ё");
  car = car.replace(/G/g, "г");
  car = car.replace(/N/g, "н");
  car = car.replace(/x/g, "ш");
  car = car.replace(/X/g, "ш");
  car = car.replace(/S/g, "с");
  car = car.replace(/Y/g, "і");
  car = car.replace(/B/g, "б");
  car = car.replace(/F/g, "ф");
  car = car.replace(/V/g, "в");
  car = car.replace(/W/g, "ў");
  car = car.replace(/Q/g, "к");
  car = car.replace(/T/g, "т");
  car = car.replace(/L/g, "л");
  car = car.replace(/E/g, "э");
  car = car.replace(/É/g, "эа");
  car = car.replace(/Ú/g, "ю");
  car = car.replace(/C/g, "ц");
  car = car.replace(/Z/g, "з");
  car = car.replace(/A/g, "а");
  car = car.replace(/K/g, "кь");
  car = car.replace(/Á/g, "я");
  car = car.replace(/P/g, "п");
  car = car.replace(/D/g, "д");
  car = car.replace(/R/g, "р");
  car = car.replace(/ХЬ/g, "хь");
  car = car.replace(/h/g, "хь");
  car = car.replace(/H/g, "хь");
  car = car.replace(/Х/g, "х");
  car = car.replace(/Ѕ/g, "ѕ");
  car = car.replace(/Ж/g, "ж");
  car = car.replace(/Ч/g, "ч");
  car = car.replace(/Ш/g, "ш");
  car = car.replace(/Щ/g, "щ");

  car = car.replace(/ў/g, "w");
  car = car.replace(/кь/g, "k");
  car = car.replace(/у/g, "u");
  car = car.replace(/ј/g, "j");
  car = car.replace(/м/g, "m");
  car = car.replace(/и/g, "i");
  car = car.replace(/о/g, "ɒ");
  car = car.replace(/ё/g, "o");
  car = car.replace(/г/g, "ɢ");
  car = car.replace(/н/g, "ɲ");
  car = car.replace(/ш/g, "ɕ");
  car = car.replace(/щ/g, "tɕ");
  car = car.replace(/ж/g, "ʑ");
  car = car.replace(/ч/g, "dʑ");
  car = car.replace(/с/g, "s");
  car = car.replace(/і/g, "ɪː");
  car = car.replace(/б/g, "b");
  car = car.replace(/ф/g, "f");
  car = car.replace(/в/g, "v");
  car = car.replace(/т/g, "tθ");
  car = car.replace(/л/g, "ʎ");
  car = car.replace(/э/g, "ɛ");
  car = car.replace(/ю/g, "ʊː");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ѕ/g, "dz");
  car = car.replace(/хь/g, "h");
  car = car.replace(/х/g, "x");
  car = car.replace(/з/g, "z");
  car = car.replace(/а/g, "ʌ");
  car = car.replace(/к/g, "q");
  car = car.replace(/я/g, "a");
  car = car.replace(/п/g, "p");
  car = car.replace(/д/g, "dð");
  car = car.replace(/р/g, "ð");
  car = car.replace(/«/g, "“");
  car = car.replace(/»/g, "”");
  car = car.replace(/ - /g, " – ");
  car = car.replace(/-/g, "'");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}