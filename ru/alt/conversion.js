var car;
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
car = car.replace(/<</g, "«");
car = car.replace(/>>/g, "»");
translit = translit.replace(/<</g, "«");
translit = translit.replace(/>>/g, "»");

translit = translit.replace(/Ъ/g, "ъ");
translit = translit.replace(/Ь/g, "ь");

translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Е/g, "$1E");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)е/g, "$1e");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Э/g, "$1ъE");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)э/g, "$1ъe");

translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1ьA");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьa");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ё/g, "$1ьO");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ё/g, "$1ьo");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1ьU");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьu");

translit = translit.replace(/ьa/g, "â");
translit = translit.replace(/ьA/g, "Â");
translit = translit.replace(/ьu/g, "û");
translit = translit.replace(/ьU/g, "Û");

translit = translit.replace(/Д(Ж|ж)/g, "C");
translit = translit.replace(/дж/g, "c");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "ye");
translit = translit.replace(/ж/g, "j");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/й/g, "y");
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
translit = translit.replace(/ч/g, "ç");
translit = translit.replace(/ш/g, "ş");
translit = translit.replace(/щ/g, "ş");
translit = translit.replace(/ъ/g, "");
translit = translit.replace(/ы/g, "ı");
translit = translit.replace(/ь/g, "");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "yu");
translit = translit.replace(/ё/g, "yo");
translit = translit.replace(/я/g, "ya");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Ye");
translit = translit.replace(/Ж/g, "J");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "İ");
translit = translit.replace(/Й/g, "Y");
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
translit = translit.replace(/Ч/g, "Ç");
translit = translit.replace(/Ш/g, "Ş");
translit = translit.replace(/Щ/g, "Ş");
translit = translit.replace(/Ы/g, "I");
translit = translit.replace(/Ь/g, "");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Yu");
translit = translit.replace(/Ё/g, "Yo");
translit = translit.replace(/Я/g, "Ya");

translit = translit.replace(/(A|E|I|İ|O|U|a|e|ı|i|o|u)ц/g, "$1ts");
translit = translit.replace(/(A|E|I|İ|O|U)Ц/g, "$1TS");
translit = translit.replace(/ц/g, "s");
translit = translit.replace(/Ц/g, "S");

document.transcription.text1.value = car;
document.transcription.text2.value = translit;
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
