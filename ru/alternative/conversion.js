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

translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Е/g, "$1ЬE");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)е/g, "$1ьe");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Э/g, "$1E");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)э/g, "$1e");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)И/g, "$1ЬI");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)и/g, "$1ьi");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ы/g, "$1I");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ы/g, "$1i");
  
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1ЬA");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьa");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ё/g, "$1ЬO");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ё/g, "$1ьo");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1ЬU");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьu");

translit = translit.replace(/гь/g, "ǵ");
translit = translit.replace(/зь/g, "ź");
translit = translit.replace(/ль/g, "l");
translit = translit.replace(/мь/g, "ḿ");
translit = translit.replace(/нь/g, "ń");
translit = translit.replace(/пь/g, "ṕ");
translit = translit.replace(/рь/g, "ŕ");
translit = translit.replace(/сь/g, "ś");
translit = translit.replace(/ць/g, "ć");
translit = translit.replace(/Г(Ь|ь)/g, "Ǵ");
translit = translit.replace(/З(Ь|ь)/g, "Ź");
translit = translit.replace(/Л(Ь|ь)/g, "L");
translit = translit.replace(/М(Ь|ь)/g, "Ḿ");
translit = translit.replace(/Н(Ь|ь)/g, "Ń");
translit = translit.replace(/П(Ь|ь)/g, "Ṕ");
translit = translit.replace(/Р(Ь|ь)/g, "Ŕ");
translit = translit.replace(/С(Ь|ь)/g, "Ś");
translit = translit.replace(/Ц(Ь|ь)/g, "Ć");
  
translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "je");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/й/g, "j");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "ł");
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
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "ș");
translit = translit.replace(/ъ/g, "\u02bc");
translit = translit.replace(/ы/g, "ï");
translit = translit.replace(/ь/g, "y");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "ju");
translit = translit.replace(/ё/g, "jo");
translit = translit.replace(/я/g, "ja");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Je");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "I");
translit = translit.replace(/Й/g, "J");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "Ł");
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
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/Щ/g, "Ș");
translit = translit.replace(/Ы/g, "Ï");
translit = translit.replace(/Ь/g, "Y");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Ju");
translit = translit.replace(/Ё/g, "Jo");
translit = translit.replace(/Я/g, "Ja");

translit = translit.replace(/ǵ\u02bc/g, "g");
translit = translit.replace(/ź\u02bc/g, "z");
translit = translit.replace(/l\u02bc/g, "ł");
translit = translit.replace(/ḿ\u02bc/g, "m");
translit = translit.replace(/ń\u02bc/g, "n");
translit = translit.replace(/ṕ\u02bc/g, "p");
translit = translit.replace(/ŕ\u02bc/g, "r");
translit = translit.replace(/ś\u02bc/g, "s");
translit = translit.replace(/ć\u02bc/g, "c");
translit = translit.replace(/y\u02bc/g, "");
translit = translit.replace(/Ǵ\u02bc/g, "G");
translit = translit.replace(/Ź\u02bc/g, "Z");
translit = translit.replace(/L\u02bc/g, "Ł");
translit = translit.replace(/Ḿ\u02bc/g, "M");
translit = translit.replace(/Ń\u02bc/g, "N");
translit = translit.replace(/Ṕ\u02bc/g, "P");
translit = translit.replace(/Ŕ\u02bc/g, "R");
translit = translit.replace(/Ś\u02bc/g, "S");
translit = translit.replace(/Y\u02bc/g, "");  

document.transcription.text1.value = car;
document.transcription.text2.value = translit;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
