var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.replace(/(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я)Ц/g, "$1ТС");
	car = car.replace(/(а|е|ё|и|о|ө|у|ү|ы|ю|я)Ц/g, "$1Тс");
	car = car.replace(/(а|е|ё|и|о|ө|у|ү|ы|ю|я)ц/g, "$1тс");
	car = car.replace(/Ц/g, "С");
	car = car.replace(/ц/g, "с");

	car = car.replace(/(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я)Щ(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я)/g, "$1ШШ$2");
	car = car.replace(/(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я)щ(а|е|ё|и|о|ө|у|ү|ы|ю|я)/g, "$1Шш$2");
	car = car.replace(/(а|е|ё|и|о|ө|у|ү|ы|ю|я)щ(а|е|ё|и|о|ө|у|ү|ы|ю|я)/g, "$1шш$2");
	car = car.replace(/щ/g, "ш");
	car = car.replace(/Щ/g, "Ш");

	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш)Я/g, "$1ЬА");
	car = car.replace(/(б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)Я/g, "$1ьА");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)я/g, "$1ьа");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)Ю/g, "$1Ү");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)ю/g, "$1ү");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)Е/g, "$1Э");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)е/g, "$1э");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)Ё/g, "$1Ө");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|ч|ш)ё/g, "$1ө");

	car = car.replace(/Ь(И|и)/g, "Й$1");
	car = car.replace(/ьи/g, "йи");

	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
	car = car.replace(/(\p{Uppercase})Я/ug, "$1ЙА");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
	car = car.replace(/Я/g, "Йа");
	car = car.replace(/я/g, "йа");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
	car = car.replace(/(\p{Uppercase})Е/ug, "$1ЙЭ");
	car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
	car = car.replace(/Е(\p{Uppercase})/g, "ЙЭ$1");
	car = car.replace(/Е/g, "Йэ");
	car = car.replace(/е/g, "йэ");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
	car = car.replace(/(\p{Uppercase})Ё/ug, "$1ЙО");
	car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
	car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
	car = car.replace(/Ё/g, "Йо");
	car = car.replace(/ё/g, "йо");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
	car = car.replace(/(\p{Uppercase})Ю/ug, "$1ЙУ");
	car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
	car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
	car = car.replace(/Ю/g, "Йу");
	car = car.replace(/ю/g, "йу");

	car = car.replace(/(Ъ|ъ)/g, "");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "e");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/ң/g, "ñ");
	car = car.replace(/о/g, "o");
	car = car.replace(/ө/g, "ö");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ү/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "h");
	car = car.replace(/ч/g, "ç");
	car = car.replace(/ш/g, "ş");
	car = car.replace(/ь/g, "");
	car = car.replace(/ы/g, "ı");
	car = car.replace(/э/g, "e");

	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "İ");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/Ң/g, "Ñ");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ө/g, "Ö");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ү/g, "Ü");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "H");
	car = car.replace(/Ч/g, "Ç");
	car = car.replace(/Ш/g, "Ş");
	car = car.replace(/Ь/g, "");
	car = car.replace(/Ы/g, "I");
	car = car.replace(/Э/g, "E");

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
