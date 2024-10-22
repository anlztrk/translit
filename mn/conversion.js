var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFC');

car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)ЕӨ/g, "$1ЬӨӨ");
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)еө/g, "$1ьөө");
  
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Е/g, "$1ЬЭ");
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)е/g, "$1ьэ");

car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Ё/g, "$1ЬО");
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ё/g, "$1ьо");

car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)ЮҮ/g, "$1ЬҮҮ");
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)юү/g, "$1ьүү");

car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Ю/g, "$1ЬУ");
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьу");

car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Я/g, "$1ЬА");
car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьа");

car = car.replace(/ЪЬ/g, "Й");
car = car.replace(/(Ъ|ъ)ь/g, "й");

car = car.replace(/еө/g, "jȯȯ");
car = car.replace(/Еө/g, "Jȯȯ");
car = car.replace(/Еө/g, "JȮȮ");

car = car.replace(/юү/g, "ju̇u̇");
car = car.replace(/Юү/g, "Ju̇u̇");
car = car.replace(/ЮҮ/g, "JU̇U̇");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "je");
car = car.replace(/ё/g, "jo");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/(ө|є)/g, "ȯ");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/(ү|ї)/g, "u̇");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "ś");
car = car.replace(/ы/g, "y");
car = car.replace(/ь/g, "j́");
car = car.replace(/э/g, "e");
car = car.replace(/ю/g, "ju");
car = car.replace(/я/g, "ja");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "Je");
car = car.replace(/Ё/g, "Jo");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/Й/g, "J");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/(Ө|Є)/g, "Ȯ");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/(Ү|Ї)/g, "U̇");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Ś");
car = car.replace(/Ы/g, "Y");
car = car.replace(/Ь/g, "J́");
car = car.replace(/Э/g, "E");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");
car = car.replace(/ъ|Ъ/g, "");
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
