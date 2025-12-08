
var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/\u0301/g, "");
car = car.replace(/Ь/g, "ь");

car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1ьA");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьa");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1ьE");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ьe");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ї/g, "$1ьİ");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ї/g, "$1ьi");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1ьU");
car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьu");

car = car.replace(/ьa/g, "à");
car = car.replace(/ьA/g, "À");
car = car.replace(/ьu/g, "ù");
car = car.replace(/ьU/g, "Ù");

car = car.replace(/Д(Ж|ж)/g, "C");
car = car.replace(/дж/g, "c");

car = car.replace(/ʼ/g, "ъ");
car = car.replace(/’/g, "ъ");
car = car.replace(/'/g, "ъ");
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/є/g, "ye");
car = car.replace(/е/g, "e");
car = car.replace(/ж/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "ı");
car = car.replace(/і/g, "i");
car = car.replace(/ї/g, "yi");
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
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ч/g, "ç");
car = car.replace(/ш/g, "ş");
car = car.replace(/щ/g, "şç");
car = car.replace(/ь/g, "");
car = car.replace(/ю/g, "yu");
car = car.replace(/я/g, "ya");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Ґ/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Є/g, "Ye");
car = car.replace(/Ж/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/І/g, "İ");
car = car.replace(/Ї/g, "Yi");
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
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ч/g, "Ç");
car = car.replace(/Ш/g, "Ş");
car = car.replace(/Щ/g, "Şç");
car = car.replace(/Ь/g, "");
car = car.replace(/Ю/g, "Yu");
car = car.replace(/Я/g, "Ya");

car = car.replace(/(A|E|I|İ|O|U|a|e|ı|i|o|u)ц/g, "$1ts");
car = car.replace(/(A|E|I|İ|O|U)Ц/g, "$1TS");
car = car.replace(/ц/g, "s");
car = car.replace(/Ц/g, "S");

car = car.replace(/(G|g|K|k|L|l)à/g, "$1â");
car = car.replace(/(G|g|K|k|L|l)À/g, "$1Â");
car = car.replace(/(G|g|K|k|L|l)ù/g, "$1û");
car = car.replace(/(G|g|K|k|L|l)ù/g, "$1Û");
car = car.replace(/à/g, "a");
car = car.replace(/À/g, "A");
car = car.replace(/ù/g, "u");
car = car.replace(/Ù/g, "U");

car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
document.transcription.text2.value = car;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
