var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.replace(/(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я|Э|Ә)Ц/g, "$1ТС");
	car = car.replace(/(а|е|ё|и|о|ө|у|ү|ы|ю|я|э|ә)Ц/g, "$1Тс");
	car = car.replace(/(а|е|ё|и|о|ө|у|ү|ы|ю|я|э|ә)ц/g, "$1тс");
	car = car.replace(/Ц/g, "С");
	car = car.replace(/ц/g, "с");

	car = car.replace(/(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я|Э|Ә)Щ(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я|Э|Ә)/g, "$1ШШ$2");
	car = car.replace(/(А|Е|Ё|И|О|Ө|У|Ү|Ы|Ю|Я|Э|Ә)щ(а|е|ё|и|о|ө|у|ү|ы|ю|я|э|ә)/g, "$1Шш$2");
	car = car.replace(/(а|е|ё|и|о|ө|у|ү|ы|ю|я|э|ә)щ(а|е|ё|и|о|ө|у|ү|ы|ю|я|э|ә)/g, "$1шш$2");
	car = car.replace(/щ/g, "ш");
	car = car.replace(/Щ/g, "Ш");

	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш)Я/g, "$1ЬА");
	car = car.replace(/(б|в|г|ғ|д|ж|з|ҙ|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)Я/g, "$1ьА");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)я/g, "$1ьа");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)Ю/g, "$1Ү");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)ю/g, "$1ү");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|Й|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|й|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)Е/g, "$1Э");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|Й|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|й|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)е/g, "$1э");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)Ё/g, "$1Ө");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Ҙ|К|Ҡ|Л|М|Н|Ң|П|Р|С|Ҫ|Т|Ф|Х|Һ|Ч|Ш|б|в|г|ғ|д|ж|з|ҙ|к|ҡ|л|м|н|ң|п|р|с|ҫ|т|ф|х|һ|ч|ш)ё/g, "$1ө");

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
	car = car.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1");
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
	
	car = car.replace(/(А|Ы|О|У)У/g, "$1В");
	car = car.replace(/(А|Ы|О|У|а|ы|о|у)у/g, "$1в");
	car = car.replace(/(И|Э|Ә|Ө|Ү)Ү/g, "$1В");
	car = car.replace(/(И|Э|Ә|Ө|Ү|и|э|ә|ө|ү)ү/g, "$1в");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "w");
	car = car.replace(/г/g, "g");
	car = car.replace(/ғ/g, "ğ");
	car = car.replace(/д/g, "d");
	car = car.replace(/ҙ/g, "ż");
	car = car.replace(/е/g, "i");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "î");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/ҡ/g, "q");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/ң/g, "ñ");
	car = car.replace(/о/g, "o");
	car = car.replace(/ө/g, "ö");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/ҫ/g, "ṡ");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ү/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/һ/g, "h");	
	car = car.replace(/ч/g, "ç");
	car = car.replace(/ш/g, "ş");
	car = car.replace(/ь/g, "");
	car = car.replace(/ы/g, "ı");
	car = car.replace(/э/g, "i");
	car = car.replace(/ә/g, "e");

	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "W");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Ғ/g, "Ğ");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ҙ/g, "Ż");
	car = car.replace(/Е/g, "İ");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "Î");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Ҡ/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/Ң/g, "Ñ");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ө/g, "Ö");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Ҫ/g, "Ṡ");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ү/g, "Ü");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Һ/g, "H");	
	car = car.replace(/Ч/g, "Ç");
	car = car.replace(/Ш/g, "Ş");
	car = car.replace(/Ь/g, "");
	car = car.replace(/Ы/g, "I");
	car = car.replace(/Э/g, "İ");
	car = car.replace(/Ә/g, "E");

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
