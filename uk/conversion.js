
var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFC');
  
car = car.replace(/ЛЄ/g, "ЉЕ");
car = car.replace(/ЛЮ/g, "ЉУ");
car = car.replace(/ЛЯ/g, "ЉА");
car = car.replace(/Л(І|і)/g, "Љ$1");
car = car.replace(/Л(Ь|ь)/g, "Љ");
car = car.replace(/Лє/g, "Ље");
car = car.replace(/Лю/g, "Љу");
car = car.replace(/Ля/g, "Ља");
car = car.replace(/лє/g, "ље");
car = car.replace(/лю/g, "љу");
car = car.replace(/ля/g, "ља");
car = car.replace(/лі/g, "љі");
car = car.replace(/ль/g, "љ");

car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1IE");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1IU");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1IA");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ЬО/g, "$1IO");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ЬИ/g, "$1IY");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ie");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1iu");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ia");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ьо/g, "$1io");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ьи/g, "$1iy");

car = car.replace(/Д(Ь|ь)/g, "Ḑ");
car = car.replace(/дь/g, "ḑ");
car = car.replace(/Т(Ь|ь)/g, "Ț");
car = car.replace(/ть/g, "ț");
car = car.replace(/(Ь|ь)/g, "\u0301");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/є/g, "je");
car = car.replace(/ж/g, "ż");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "y");
car = car.replace(/і/g, "i");
car = car.replace(/ї́/g, "jí");
car = car.replace(/ї/g, "ji");
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "ł");
car = car.replace(/љ/g, "l");
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
car = car.replace(/ч/g, "cz");
car = car.replace(/ш/g, "sz");
car = car.replace(/щ/g, "szcz");
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
car = car.replace(/Л/g, "Ł");
car = car.replace(/Љ/g, "L");
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
car = car.replace(/Ч/g, "Cz");
car = car.replace(/Ш/g, "Sz");
car = car.replace(/Щ/g, "Szcz");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");

car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");

car = car.replace(/(ʼ|’|')/g, "");
car = car.normalize('NFC');
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
