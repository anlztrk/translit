var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.normalize('NFC')

	car = car.replace(/(є|ѳ)/g, "ө");
	car = car.replace(/ї/g, "ү");
	car = car.replace(/(Є|Ѳ)/g, "Ө");
	car = car.replace(/Ї/g, "Ү");

	car = car.replace(/Ъ(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "\u2019$1");
	car = car.replace(/ъ(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "\u2019$1");

	car = car.replace(/еө/g, "йөө");
	car = car.replace(/Еө/g, "Йөө");
	car = car.replace(/ЕӨ/g, "ЙӨӨ");

	car = car.replace(/юү/g, "йүү̇");
	car = car.replace(/Юү/g, "Йүү̇");
	car = car.replace(/ЮҮ/g, "ЙҮҮ̇");

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

	car = car.replace(/ЬЙ/g, "J\u0306");
	car = car.replace(/(Ь|ь)й/g, "j\u0306");
	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/ж/g, "ġ");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "j");
	car = car.replace(/к/g, "k");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/о/g, "o");
	car = car.replace(/ө/g, "ŏ");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ү/g, "ŭ");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "h");
	car = car.replace(/ц/g, "c");
	car = car.replace(/ч/g, "ċ");
	car = car.replace(/ш/g, "ṡ");
	car = car.replace(/щ/g, "ṣ");
	car = car.replace(/ы/g, "y");
	car = car.replace(/ь/g, "j");
	car = car.replace(/э/g, "e");

	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ж/g, "Ġ");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "J");
	car = car.replace(/К/g, "K");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ө/g, "Ŏ");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ү/g, "Ŭ");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "H");
	car = car.replace(/Ц/g, "C");
	car = car.replace(/Ч/g, "Ċ");
	car = car.replace(/Ш/g, "Ṡ");
	car = car.replace(/Щ/g, "Ṣ");
	car = car.replace(/Ы/g, "Y");
	car = car.replace(/Ь/g, "J");
	car = car.replace(/Э/g, "E");
	car = car.replace(/(Ъ|ъ)/g, "");

	car = car.replace(/\u2039/g, "\u2018");
	car = car.replace(/\u203a/g, "\u2019");
	car = car.replace(/\u00ab/g, "\u201c");
	car = car.replace(/\u00bb/g, "\u201d");

	car = car.normalize('NFC');
	document.transcription.text2.value = car;
}

function latcyr() {}

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
