var car;

function cyrlat() {
	car = document.transcription.text1.value;

	car = car.replace(/Ÿ/g, "Ӳ");
	car = car.replace(/ÿ/g, "ӳ");
	car = car.replace(/Ĕ/g, "Ӗ");
	car = car.replace(/ĕ/g, "ӗ");

	car = car.replace(/(\p{Script=Cyrl})Ç/ug, "$1Ҫ");
	car = car.replace(/Ç(\p{Script=Cyrl})/ug, "Ҫ$1");
	car = car.replace(/(\p{Script=Cyrl})ç/ug, "$1ҫ");
	car = car.replace(/ç(\p{Script=Cyrl})/ug, "ҫ$1");

	car = car.replace(/(\p{Script=Cyrl})Ă/ug, "$1Ӑ");
	car = car.replace(/Ă(\p{Script=Cyrl})/ug, "Ӑ$1");
	car = car.replace(/(\p{Script=Cyrl})ă/ug, "$1ӑ");
	car = car.replace(/ă(\p{Script=Cyrl})/ug, "ӑ$1");

	car = car.replace(/(\p{Script=Cyrl})Ç/ug, "$1Ҫ");
	car = car.replace(/Ç(\p{Script=Cyrl})/ug, "Ҫ$1");
	car = car.replace(/(\p{Script=Cyrl})ç/ug, "$1ҫ");
	car = car.replace(/ç(\p{Script=Cyrl})/ug, "ҫ$1");

	car = car.replace(/щ/g, "ҫ");
	car = car.replace(/Щ/g, "Ҫ");

	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш)Я/g, "$1ЬА");
	car = car.replace(/(б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)Я/g, "$1ьА");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)я/g, "$1ьа");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш)Ю/g, "$1ЬУ");
	car = car.replace(/(б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)Ю/g, "$1ьУ");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)ю/g, "$1ьу");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)Е/g, "$1Э");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)е/g, "$1э");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш)Ё/g, "$1ЬО");
	car = car.replace(/(б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)Ё/g, "$1ьО");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Ҫ|Т|Ф|Х|Ц|Ч|Ш|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|ҫ|т|ф|х|ц|ч|ш)ё/g, "$1ьо");

	car = car.replace(/Ь(И|и)/g, "Й$1");
	car = car.replace(/ьи/g, "йи");
	car = car.replace(/Ь(О|о)/g, "Й$1");
	car = car.replace(/ьо/g, "йо");

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
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 ТС");
	car = car.replace(/(\p{Uppercase})Ц/ug, "$1ТС");
	car = car.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "ТС $1$2");
	car = car.replace(/Ц(\p{Uppercase})/ug, "ТС$1");
	car = car.replace(/Ц/g, "Тс");
	car = car.replace(/ц/g, "тс");

	car = car.replace(/(Ъ|ъ)/g, "");

	car = car.replace(/Р(Ь|ь)/g, "Ŗ");
	car = car.replace(/рь/g, "ŗ");
	car = car.replace(/Л(Ь|ь)/g, "Ļ");
	car = car.replace(/ль/g, "ļ");
	car = car.replace(/Н(Ь|ь)/g, "Ņ");
	car = car.replace(/нь/g, "ņ");
	car = car.replace(/Т(Ь|ь)/g, "Ț");
	car = car.replace(/ть/g, "ț");

	car = car.replace(/а/g, "a");
	car = car.replace(/ӑ/g, "o");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "e");
	car = car.replace(/ӗ/g, "ö");
	car = car.replace(/ж/g, "ž");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "j");
	car = car.replace(/к/g, "k");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/о/g, "ò");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/ҫ/g, "ș");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ӳ/g, "y");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "h");
	car = car.replace(/ч/g, "c");
	car = car.replace(/ш/g, "š");
	car = car.replace(/ь/g, "");
	car = car.replace(/ы/g, "ï");
	car = car.replace(/э/g, "e");

	car = car.replace(/А/g, "A");
	car = car.replace(/Ӑ/g, "O");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ӗ/g, "Ö");
	car = car.replace(/Ж/g, "Ž");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "J");
	car = car.replace(/К/g, "K");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/О/g, "Ò");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Ҫ/g, "Ș");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ӳ/g, "Y");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "H");
	car = car.replace(/Ч/g, "C");
	car = car.replace(/Ш/g, "Š");
	car = car.replace(/Ь/g, "");
	car = car.replace(/Ы/g, "Ï");
	car = car.replace(/Э/g, "E");

	car = car.replace(/\u2039/g, "\u2018");
	car = car.replace(/\u203a/g, "\u2019");
	car = car.replace(/\u00ab/g, "\u201c");
	car = car.replace(/\u00bb/g, "\u201d");
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
