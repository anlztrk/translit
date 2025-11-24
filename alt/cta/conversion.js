var car;

function cyrlat() {
	car = document.transcription.text1.value;

	car = car.replace(/j/g, "ј");
	car = car.replace(/J/g, "Ј");
	car = car.replace(/ö/g, "ӧ");
	car = car.replace(/ÿ/g, "ӱ");
	car = car.replace(/Ö/g, "Ӧ");
	car = car.replace(/Ÿ/g, "Ӱ");

	car = car.replace(/([АЕЁИОӦУӰЫЮЯ])Ц/g, "$1ТС");
	car = car.replace(/([аеёиоӧуӱыюя])Ц/g, "$1Тс");
	car = car.replace(/([аеёиоӧуӱыюя])ц/g, "$1тс");
	car = car.replace(/Ц/g, "С");
	car = car.replace(/ц/g, "с");

	car = car.replace(/([АЕЁИОӦУӰЫЮЯ])Щ([АЕЁИОӦУӰЫЮЯ])/g, "$1ШШ$2");
	car = car.replace(/([АЕЁИОӦУӰЫЮЯ])Щ([аеёиоӧуӱыюя])/g, "$1Шш$2");
	car = car.replace(/([аеёиоӧуӱыюя])щ([аеёиоӧуӱыюя])/g, "$1шш$2");
	car = car.replace(/щ/g, "ш");
	car = car.replace(/Щ/g, "Ш");

	car = car.replace(/([БВГДЈЖЗКЛМНҤПРСТФХЧШ])Я/g, "$1ЬА");
	car = car.replace(/([бвгдјжзклмнҥпрстфхчш])Я/g, "$1ьА");
	car = car.replace(/([БВГДЈЖЗКЛМНҤПРСТФХЧШЩбвгдјжзклмнҥпрстфхчш])я/g, "$1ьа");
	car = car.replace(/([БВГДЈЖЗКЛМНҤПРСТФХЧШЩбвгдјжзклмнҥпрстфхчш])Ю/g, "$1Ӱ");
	car = car.replace(/([БВГДЈЖЗКЛМНҤПРСТФХЧШЩбвгдјжзклмнҥпрстфхчш])ю/g, "$1ӱ");
	car = car.replace(/([БВГДЈЖЗЙКЛМНҤПРСТФХЧШЩбвгдјжзйклмнҥпрстфхчш])Е/g, "$1Э");
	car = car.replace(/([БВГДЈЖЗЙКЛМНҤПРСТФХЧШЩбвгдјжзйклмнҥпрстфхчш])е/g, "$1э");
	car = car.replace(/([БВГДЈЖЗКЛМНҤПРСТФХЧШЩбвгдјжзклмнҥпрстфхчш])Ё/g, "$1Ӧ");
	car = car.replace(/([БВГДЈЖЗКЛМНҤПРСТФХЧШЩбвгдјжзклмнҥпрстфхчш])ё/g, "$1ӧ");

	car = car.replace(/Ь([Ии])/g, "Й$1");
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

	car = car.replace(/([Ъъ])/g, "");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/ј/g, "c");
	car = car.replace(/е/g, "e");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/ҥ/g, "ñ");
	car = car.replace(/о/g, "o");
	car = car.replace(/ӧ/g, "ö");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ӱ/g, "ü");
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
	car = car.replace(/Ј/g, "C");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "İ");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/Ҥ/g, "Ñ");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ӧ/g, "Ö");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ӱ/g, "Ü");
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
