var car;
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
car = car.replace(/<</g, "«");
car = car.replace(/>>/g, "»");
translit = translit.replace(/<</g, "«");
translit = translit.replace(/>>/g, "»");

translit = translit.replace(/(\u2019|\u0027)/g, "\u02bc");

translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(ь|Ь)О/g, "$1Ö");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(ь|Ь)о/g, "$1ö");
  
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1Ä");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ä");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1Ü");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ü");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1Ë");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ë");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ї/g, "$1Ï");
translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ї/g, "$1ï");

translit = translit.replace(/Ь(А|Е|І|У|а|е|і|у)/g, "Ь\u2019$1");
translit = translit.replace(/ь(а|е|і|у)/g, "ь\u2019$1");
translit = translit.replace(/ЬЯ/g, "ЬA");
translit = translit.replace(/ЬЄ/g, "ЬE");
translit = translit.replace(/ЬЇ/g, "ЬI");
translit = translit.replace(/ЬЮ/g, "ЬU");
translit = translit.replace(/(Ь|ь)я/g, "$1a");
translit = translit.replace(/(Ь|ь)є/g, "$1e");
translit = translit.replace(/(Ь|ь)ї/g, "$1i");
translit = translit.replace(/(Ь|ь)ю/g, "$1u");

translit = translit.replace(/\u02bc/g, "");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "h"); 
translit = translit.replace(/ґ/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "y");
translit = translit.replace(/і/g, "i");
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
translit = translit.replace(/х/g, "x");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "šč");
translit = translit.replace(/ь/g, "j");
translit = translit.replace(/є/g, "je");
translit = translit.replace(/ї/g, "ji");
translit = translit.replace(/ю/g, "ju");
translit = translit.replace(/я/g, "ja");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "H");
translit = translit.replace(/Ґ/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "Y");
translit = translit.replace(/І/g, "I");
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
translit = translit.replace(/Х/g, "X");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/Щ/g, "Šč");
translit = translit.replace(/Ь/g, "J");
translit = translit.replace(/Є/g, "Je");
translit = translit.replace(/Ї/g, "Ji");
translit = translit.replace(/Ю/g, "Ju");
translit = translit.replace(/Я/g, "Ja");

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
