var car;

function cyrlat() {
	car = document.transcription.text1.value;
	var fix = car;
	fix = fix.replace(/<</g, "«");
	fix = fix.replace(/>>/g, "»");
	document.transcription.text1.value = fix;
	car = car.replace(/<</g, "«");
	car = car.replace(/>>/g, "»");

	car = car.replace(/(\u2019|\u0027)/g, "\u02bc");

	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Я/g, "$1ЬА");
	car = car.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1ьА");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьа");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Ю/g, "$1ЬУ");
	car = car.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1ьУ");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьу");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Є/g, "$1ЬЕ");
	car = car.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1ьЕ");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ье");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ)Ї/g, "$1ЬІ");
	car = car.replace(/(б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ї/g, "$1ьІ");
	car = car.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ї/g, "$1ьі");

	car = car.replace(/\u02bc/g, "");

	car = car.replace(/ль/g, "љ");
	car = car.replace(/Л(Ь|ь)/g, "Љ");
	car = car.replace(/лі/g, "љі");
	car = car.replace(/Л(І|і)/g, "Љ$1");

	car = car.replace(/Ь(А|Е|И|О|У|а|е|и|о|у)/g, "І$1");
	car = car.replace(/ь(А|Е|И|О|У|а|е|и|о|у)/g, "і$1");
	car = car.replace(/(Ь|ь)І/g, "І");
	car = car.replace(/ьі/g, "і");

	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 CH");
	car = car.replace(/(\p{Uppercase})Х/ug, "$1CH");
	car = car.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
	car = car.replace(/Х(\p{Uppercase})/ug, "CH$1");
	car = car.replace(/Х/g, "Ch");
	car = car.replace(/х/g, "ch");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 CZ");
	car = car.replace(/(\p{Uppercase})Ч/ug, "$1CZ");
	car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CZ $1$2");
	car = car.replace(/Ч(\p{Uppercase})/ug, "CZ$1");
	car = car.replace(/Ч/g, "Cz");
	car = car.replace(/ч/g, "cz");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 SZ");
	car = car.replace(/(\p{Uppercase})Ш/ug, "$1SZ");
	car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SZ $1$2");
	car = car.replace(/Ш(\p{Uppercase})/ug, "SZ$1");
	car = car.replace(/Ш/g, "Sz");
	car = car.replace(/ш/g, "sz");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 SZCZ");
	car = car.replace(/(\p{Uppercase})Щ/ug, "$1SZCZ");
	car = car.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "SZCZ $1$2");
	car = car.replace(/Щ(\p{Uppercase})/ug, "SZCZ$1");
	car = car.replace(/Щ/g, "Szcz");
	car = car.replace(/щ/g, "szcz");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 JE");
	car = car.replace(/(\p{Uppercase})Є/ug, "$1JE");
	car = car.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "JE $1$2");
	car = car.replace(/Є(\p{Uppercase})/ug, "JE$1");
	car = car.replace(/Є/g, "Je");
	car = car.replace(/є/g, "je");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 JI");
	car = car.replace(/(\p{Uppercase})Ї/ug, "$1JI");
	car = car.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "JI $1$2");
	car = car.replace(/Ї(\p{Uppercase})/ug, "JI$1");
	car = car.replace(/Ї/g, "Ji");
	car = car.replace(/ї/g, "ji");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 JU");
	car = car.replace(/(\p{Uppercase})Ю/ug, "$1JU");
	car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "JU $1$2");
	car = car.replace(/Ю(\p{Uppercase})/ug, "JU$1");
	car = car.replace(/Ю/g, "Ju");
	car = car.replace(/ю/g, "ju");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 JA");
	car = car.replace(/(\p{Uppercase})Я/ug, "$1JA");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "JA $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "JA$1");
	car = car.replace(/Я/g, "Ja");
	car = car.replace(/я/g, "ja");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "w");
	car = car.replace(/г/g, "h");
	car = car.replace(/ґ/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "e");
	car = car.replace(/ж/g, "ż");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "y");
	car = car.replace(/і/g, "i");
	car = car.replace(/й/g, "j");
	car = car.replace(/к/g, "k");
	car = car.replace(/љ/g, "l");
	car = car.replace(/л/g, "ł");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/о/g, "o");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ф/g, "f");
	car = car.replace(/ц/g, "c");
	car = car.replace(/ь/g, "\u0301");

	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "W");
	car = car.replace(/Г/g, "H");
	car = car.replace(/Ґ/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ж/g, "Ż");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "Y");
	car = car.replace(/І/g, "I");
	car = car.replace(/Й/g, "J");
	car = car.replace(/К/g, "K");
	car = car.replace(/Љ/g, "L");
	car = car.replace(/Л/g, "Ł");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/О/g, "O");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Ц/g, "C");
	car = car.replace(/Ь/g, "\u0301");

	car = car.replace(/(D|d|T|t)\u0301/g, "$1\u0326");

	car = car.replace(/\u2039/g, "\u2018");
	car = car.replace(/\u203a/g, "\u2019");
	car = car.replace(/\u00ab/g, "\u201c");
	car = car.replace(/\u00bb/g, "\u201d");

	car = car.normalize('NFC');
	document.transcription.text2.value = car;
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
