var car;
function latcyr () {
  car = document.transcription.text2.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/h/g, "г");
car = car.replace(/g/g, "ґ");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ê/g, "є");
car = car.replace(/ż/g, "ж");
car = car.replace(/z/g, "з");
car = car.replace(/i/g, "і");
car = car.replace(/y/g, "и");
car = car.replace(/ĩ/g, "ї\u0301");
car = car.replace(/î/g, "ї");
car = car.replace(/j/g, "й");
car = car.replace(/k/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/c/g, "ц");
car = car.replace(/ċ/g, "ч");
car = car.replace(/ṡ/g, "ш");
car = car.replace(/ŝ/g, "щ");
car = car.replace(/\u02bc|\u2019/g, "ъ");
car = car.replace(/ĵ/g, "ь");
car = car.replace(/û/g, "ю");
car = car.replace(/â/g, "я");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/H/g, "Г");
car = car.replace(/G/g, "Ґ");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ê/g, "Є");
car = car.replace(/Ż/g, "Ж");
car = car.replace(/Z/g, "З");
car = car.replace(/Y/g, "И");
car = car.replace(/I/g, "І");
car = car.replace(/Ĩ/g, "Ї\u0301");
car = car.replace(/Î/g, "Ї");
car = car.replace(/J/g, "Й");
car = car.replace(/K/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/C/g, "Ц");
car = car.replace(/Ċ/g, "Ч");
car = car.replace(/Ṡ/g, "Ш");
car = car.replace(/Ŝ/g, "Щ");
car = car.replace(/Ĵ/g, "Ь");
car = car.replace(/Û/g, "Ю");
car = car.replace(/Â/g, "Я");
car = car.replace(/\u201e/g, "«");
car = car.replace(/\u201c/g, "»");


car = car.replace(/(А|Б|В|Г|Д|Е|Ж|З|И|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ы|Ь|Э|Ю|Ё|Я)ъ/g, "$1Ъ");
document.transcription.text1.value = car;
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFC');
car = car.replace(/ʼ/g, "ъ");
car = car.replace(/’/g, "ъ");
car = car.replace(/'/g, "ъ");
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/є/g, "ê");
car = car.replace(/ж/g, "ż");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "y");
car = car.replace(/і/g, "i");
car = car.replace(/ї\u0301/g, "ĩ");
car = car.replace(/ї/g, "î"); 
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "x");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "ċ");
car = car.replace(/ш/g, "ṡ");
car = car.replace(/щ/g, "ŝ");
car = car.replace(/ь/g, "ĵ");
car = car.replace(/ю/g, "û");
car = car.replace(/я/g, "â");
car = car.replace(/ъ/g, "ʼ");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Ґ/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Є/g, "Ê");
car = car.replace(/Ж/g, "Ż");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "Y");
car = car.replace(/І/g, "I");
car = car.replace(/Ї\u0301/g, "Ĩ");
car = car.replace(/Ї/g, "Î");
car = car.replace(/Й/g, "J");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "X");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Ċ");
car = car.replace(/Ш/g, "Ṡ");
car = car.replace(/Щ/g, "Ŝ");
car = car.replace(/Ь/g, "Ĵ");
car = car.replace(/Ю/g, "Û");
car = car.replace(/Я/g, "Â");
car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
