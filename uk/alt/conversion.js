//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
document.transcription.text2.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/цг/g, "ц·г");
car = car.replace(/Цг/g, "Ц·г");
car = car.replace(/ЦГ/g, "Ц·Г");
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
car = car.replace(/є/g, "ye");
car = car.replace(/ж/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "ĕ");
car = car.replace(/і/g, "ê");
car = car.replace(/ї́/g, "yế");
car = car.replace(/ї/g, "yê");
car = car.replace(/й/g, "y");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "ŏ");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "ch");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "šč");
car = car.replace(/ь/g, "\u0323");
car = car.replace(/ю/g, "yŏ");
car = car.replace(/я/g, "ya");
car = car.replace(/ъ/g, "’");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Ґ/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Є/g, "Je");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "Ĕ");
car = car.replace(/І/g, "Ê");
car = car.replace(/Ї́/g, "Yế");
car = car.replace(/Ї/g, "Yê");
car = car.replace(/Й/g, "Y");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "Ŏ");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "Ch");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Šč");
car = car.replace(/Ь/g, "\u0323");
car = car.replace(/Ю/g, "Yŏ");
car = car.replace(/Я/g, "Ya");
car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");

car = car.replace(/g\u0323/g, "g\u0307");
car = car.replace(/p\u0323/g, "p\u0307");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}