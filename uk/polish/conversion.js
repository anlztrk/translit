var car;
var translit;

function cyrlat() {
	translit = document.transcription.text1.value;
	car = document.transcription.text1.value;
	car = car.replace(/<</g, "«");
	car = car.replace(/>>/g, "»");
	translit = translit.replace(/<</g, "«");
	translit = translit.replace(/>>/g, "»");

	translit = translit.replace(/(\u2019|\u0027)/g, "\u02bc");

	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Я/g, "$1ЬА");
	translit = translit.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1ьА");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьа");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Ю/g, "$1ЬУ");
	translit = translit.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1ьУ");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьу");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Є/g, "$1ЬЕ");
	translit = translit.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1ьЕ");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ье");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Ї/g, "$1ЬІ");
	translit = translit.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ї/g, "$1ьІ");
	translit = translit.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ї/g, "$1ьі");

	translit = translit.replace(/\u02bc/g, "");

	translit = translit.replace(/ль/g, "љ");
	translit = translit.replace(/Л(Ь|ь)/g, "Љ");
	translit = translit.replace(/лі/g, "љі");
	translit = translit.replace(/Л(І|і)/g, "Љ$1");

	translit = translit.replace(/Ь(А|Е|И|О|У|а|е|и|о|у)/g, "І$1");
	translit = translit.replace(/ь(А|Е|И|О|У|а|е|и|о|у)/g, "і$1");
	translit = translit.replace(/(Ь|ь)І/g, "І");
	translit = translit.replace(/ьі/g, "і");

	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 CH");
	translit = translit.replace(/(\p{Uppercase})Х/ug, "$1CH");
	translit = translit.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
	translit = translit.replace(/Х(\p{Uppercase})/ug, "CH$1");
	translit = translit.replace(/Х/g, "Ch");
	translit = translit.replace(/х/g, "ch");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 CZ");
	translit = translit.replace(/(\p{Uppercase})Ч/ug, "$1CZ");
	translit = translit.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CZ $1$2");
	translit = translit.replace(/Ч(\p{Uppercase})/ug, "CZ$1");
	translit = translit.replace(/Ч/g, "Cz");
	translit = translit.replace(/ч/g, "cz");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 SZ");
	translit = translit.replace(/(\p{Uppercase})Ш/ug, "$1SZ");
	translit = translit.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SZ $1$2");
	translit = translit.replace(/Ш(\p{Uppercase})/ug, "SZ$1");
	translit = translit.replace(/Ш/g, "Sz");
	translit = translit.replace(/ш/g, "sz");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 SZCZ");
	translit = translit.replace(/(\p{Uppercase})Щ/ug, "$1SZCZ");
	translit = translit.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "SZCZ $1$2");
	translit = translit.replace(/Щ(\p{Uppercase})/ug, "SZCZ$1");
	translit = translit.replace(/Щ/g, "Szcz");
	translit = translit.replace(/щ/g, "szcz");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 JE");
	translit = translit.replace(/(\p{Uppercase})Є/ug, "$1JE");
	translit = translit.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "JE $1$2");
	translit = translit.replace(/Є(\p{Uppercase})/ug, "JE$1");
	translit = translit.replace(/Є/g, "Je");
	translit = translit.replace(/є/g, "je");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 JI");
	translit = translit.replace(/(\p{Uppercase})Ї/ug, "$1JI");
	translit = translit.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "JI $1$2");
	translit = translit.replace(/Ї(\p{Uppercase})/ug, "JI$1");
	translit = translit.replace(/Ї/g, "Ji");
	translit = translit.replace(/ї/g, "ji");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 JU");
	translit = translit.replace(/(\p{Uppercase})Ю/ug, "$1JU");
	translit = translit.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "JU $1$2");
	translit = translit.replace(/Ю(\p{Uppercase})/ug, "JU$1");
	translit = translit.replace(/Ю/g, "Ju");
	translit = translit.replace(/ю/g, "ju");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 JA");
	translit = translit.replace(/(\p{Uppercase})Я/ug, "$1JA");
	translit = translit.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "JA $1$2");
	translit = translit.replace(/Я(\p{Uppercase})/ug, "JA$1");
	translit = translit.replace(/Я/g, "Ja");
	translit = translit.replace(/я/g, "ja");

	translit = translit.replace(/а/g, "a");
	translit = translit.replace(/б/g, "b");
	translit = translit.replace(/в/g, "w");
	translit = translit.replace(/г/g, "h");
	translit = translit.replace(/ґ/g, "g");
	translit = translit.replace(/д/g, "d");
	translit = translit.replace(/е/g, "e");
	translit = translit.replace(/ж/g, "ż");
	translit = translit.replace(/з/g, "z");
	translit = translit.replace(/и/g, "y");
	translit = translit.replace(/і/g, "i");
	translit = translit.replace(/й/g, "j");
	translit = translit.replace(/к/g, "k");
	translit = translit.replace(/љ/g, "l");
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
	translit = translit.replace(/ц/g, "c");
	translit = translit.replace(/ь/g, "\u0301");

	translit = translit.replace(/А/g, "A");
	translit = translit.replace(/Б/g, "B");
	translit = translit.replace(/В/g, "W");
	translit = translit.replace(/Г/g, "H");
	translit = translit.replace(/Ґ/g, "G");
	translit = translit.replace(/Д/g, "D");
	translit = translit.replace(/Е/g, "E");
	translit = translit.replace(/Ж/g, "Ż");
	translit = translit.replace(/З/g, "Z");
	translit = translit.replace(/И/g, "Y");
	translit = translit.replace(/І/g, "I");
	translit = translit.replace(/Й/g, "J");
	translit = translit.replace(/К/g, "K");
	translit = translit.replace(/Љ/g, "L");
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
	translit = translit.replace(/Ц/g, "C");
	translit = translit.replace(/Ь/g, "\u0301");

	translit = translit.replace(/(D|d|T|t)\u0301/g, "$1\u0326");

	translit = translit.replace(/\u2039/g, "\u2018");
	translit = translit.replace(/\u203a/g, "\u2019");
	translit = translit.replace(/\u00ab/g, "\u201c");
	translit = translit.replace(/\u00bb/g, "\u201d");

	translit = translit.normalize('NFC');
	document.transcription.text1.value = car;
	document.transcription.text2.value = translit;
}

function copy1() {
	textRange = document.transcription.text1.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}

function copy2() {
	textRange = document.transcription.text2.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}
