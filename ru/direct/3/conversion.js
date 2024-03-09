var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ж/g, "ź");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/й/g, "j");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "l");
translit = translit.replace(/м/g, "m");
translit = translit.replace(/н/g, "n");
translit = translit.replace(/о/g, "o");
translit = translit.replace(/п/g, "p");
translit = translit.replace(/р/g, "r");
translit = translit.replace(/с/g, "s");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "ć");
translit = translit.replace(/ш/g, "ś");
translit = translit.replace(/щ/g, "ș");
translit = translit.replace(/ъ|Ъ/g, "\u0219");
translit = translit.replace(/ы/g, "y");
translit = translit.replace(/ь/g, "ĭ");
translit = translit.replace(/э/g, "ë");
translit = translit.replace(/ю/g, "ü");
translit = translit.replace(/ё/g, "ö");
translit = translit.replace(/я/g, "ä");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ж/g, "Ź");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "I");
translit = translit.replace(/Й/g, "J");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "L");
translit = translit.replace(/М/g, "M");
translit = translit.replace(/Н/g, "N");
translit = translit.replace(/О/g, "O");
translit = translit.replace(/П/g, "P");
translit = translit.replace(/Р/g, "R");
translit = translit.replace(/С/g, "S");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Ć");
translit = translit.replace(/Ш/g, "Ś");
translit = translit.replace(/Щ/g, "Ș");
translit = translit.replace(/Ы/g, "Y");
translit = translit.replace(/Ь/g, "Ĭ");
translit = translit.replace(/Э/g, "Ë");
translit = translit.replace(/Ю/g, "Ü");
translit = translit.replace(/Ё/g, "Ö");
translit = translit.replace(/Я/g, "Ä");
translit = translit.replace(/«/g, "\u201e");
translit = translit.replace(/»/g, "\u201c");

document.transcription.text2.value = translit;
}

function latcyr () {
translit = document.transcription.text2.value;
translit = translit.replace(/a/g, "а");
translit = translit.replace(/b/g, "б");
translit = translit.replace(/v/g, "в");
translit = translit.replace(/g/g, "г");
translit = translit.replace(/d/g, "д");
translit = translit.replace(/e/g, "е");
translit = translit.replace(/ź/g, "ж");
translit = translit.replace(/z/g, "з");
translit = translit.replace(/i/g, "и");
translit = translit.replace(/j/g, "й");
translit = translit.replace(/k/g, "к");
translit = translit.replace(/l/g, "л");
translit = translit.replace(/m/g, "м");
translit = translit.replace(/n/g, "н");
translit = translit.replace(/o/g, "о");
translit = translit.replace(/p/g, "п");
translit = translit.replace(/r/g, "р");
translit = translit.replace(/s/g, "с");
translit = translit.replace(/t/g, "т");
translit = translit.replace(/u/g, "у");
translit = translit.replace(/f/g, "ф");
translit = translit.replace(/h/g, "х");
translit = translit.replace(/c/g, "ц");
translit = translit.replace(/ć/g, "ч");
translit = translit.replace(/ś/g, "ш");
translit = translit.replace(/ș/g, "щ");
translit = translit.replace(/\u02bc|\u2019/g, "ъ");
translit = translit.replace(/y/g, "ы");
translit = translit.replace(/ĭ/g, "ь");
translit = translit.replace(/ë/g, "э");
translit = translit.replace(/ü/g, "ю");
translit = translit.replace(/ö/g, "ё");
translit = translit.replace(/ä/g, "я");

translit = translit.replace(/A/g, "А");
translit = translit.replace(/B/g, "Б");
translit = translit.replace(/V/g, "В");
translit = translit.replace(/G/g, "Г");
translit = translit.replace(/D/g, "Д");
translit = translit.replace(/E/g, "Е");
translit = translit.replace(/Ź/g, "Ж");
translit = translit.replace(/Z/g, "З");
translit = translit.replace(/I/g, "И");
translit = translit.replace(/J/g, "Й");
translit = translit.replace(/K/g, "К");
translit = translit.replace(/L/g, "Л");
translit = translit.replace(/M/g, "М");
translit = translit.replace(/N/g, "Н");
translit = translit.replace(/O/g, "О");
translit = translit.replace(/P/g, "П");
translit = translit.replace(/R/g, "Р");
translit = translit.replace(/S/g, "С");
translit = translit.replace(/T/g, "Т");
translit = translit.replace(/U/g, "У");
translit = translit.replace(/F/g, "Ф");
translit = translit.replace(/H/g, "Х");
translit = translit.replace(/C/g, "Ц");
translit = translit.replace(/Ć/g, "Ч");
translit = translit.replace(/Ś/g, "Ш");
translit = translit.replace(/Ș/g, "Щ");
translit = translit.replace(/Y/g, "Ы");
translit = translit.replace(/Ĭ/g, "Ь");
translit = translit.replace(/Ë/g, "Э");
translit = translit.replace(/Ü/g, "Ю");
translit = translit.replace(/Ö/g, "Ё");
translit = translit.replace(/Ä/g, "Я");
translit = translit.replace(/\u201e/g, "«");
translit = translit.replace(/\u201c/g, "»");


translit = translit.replace(/(А|Б|В|Г|Д|Е|Ж|З|И|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ы|Ь|Э|Ю|Ё|Я)ъ/g, "$1Ъ");
document.transcription.text1.value = translit;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
