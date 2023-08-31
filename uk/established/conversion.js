
var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(К|к)(Г|г)/g, "$1ъ$2");
car = car.replace(/ʼ/g, "ъ");
car = car.replace(/’/g, "ъ");
car = car.replace(/'/g, "ъ");
car = car.replace(/Ь/g, "ь");

car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1Ě");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1Ǔ");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1Ǎ");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ě");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ǔ");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ǎ");

car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/є/g, "je");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "y");
car = car.replace(/і/g, "i");
car = car.replace(/ї́/g, "jí");
car = car.replace(/ї/g, "ji");
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
car = car.replace(/х/g, "ch");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "šč");
car = car.replace(/ь/g, "\u02bc");
car = car.replace(/ъ/g, "\u02ee");
car = car.replace(/ю/g, "ju");
car = car.replace(/я/g, "ja");

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
car = car.replace(/И/g, "Y");
car = car.replace(/І/g, "I");
car = car.replace(/Ї́/g, "Jí");
car = car.replace(/Ї/g, "Ji");
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
car = car.replace(/Х/g, "Ch");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Šč");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");

car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
document.transcription.text2.value = car;
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
