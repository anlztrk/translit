var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFC');
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
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
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "s\u0308");
car = car.replace(/ъ|Ъ/g, "\u2019");
car = car.replace(/ы/g, "y");
car = car.replace(/ь/g, "\u0237\u0308");
car = car.replace(/э/g, "ë");
car = car.replace(/ю/g, "ü");
car = car.replace(/ё/g, "ö");
car = car.replace(/я/g, "ä");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
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
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "S\u0308");
car = car.replace(/Ы/g, "Y");
car = car.replace(/Ь/g, "J\u0308");
car = car.replace(/Э/g, "Ë");
car = car.replace(/Ю/g, "Ü");
car = car.replace(/Ё/g, "Ö");
car = car.replace(/Я/g, "Ä");
car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
car = car.normalize('NFC');
document.transcription.text2.value = car;
}

function latcyr () {
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
