var car;
var translit;

function cyrlat() {
	translit = document.transcription.text1.value;
	car = document.transcription.text1.value;
	car = car.replace(/<</g, "«");
	car = car.replace(/>>/g, "»");
	translit = translit.replace(/<</g, "«");
	translit = translit.replace(/>>/g, "»");

	translit = translit.replace(/([ЪЬ])([АЭЫОУ])/g, "$1\u2019$2");
	translit = translit.replace(/([ЪЬъь])([аэыоу])/g, "$1\u2019$2");

	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Я/g, "$1Ä");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])я/g, "$1ä");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Е/g, "$1Ë");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])е/g, "$1ë");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])И/g, "$1I");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])и/g, "$1i");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ё/g, "$1Ö");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ё/g, "$1ö");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ю/g, "$1Ü");
	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ю/g, "$1ü");

	translit = translit.replace(/(\p{Uppercase})Я/ug, "$1ЙА");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
	translit = translit.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
	translit = translit.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
	translit = translit.replace(/Я/g, "Йа");
	translit = translit.replace(/я/g, "йа");
	translit = translit.replace(/(\p{Uppercase})Е/ug, "$1ЙЭ");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
	translit = translit.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
	translit = translit.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1");
	translit = translit.replace(/Е/g, "Йэ");
	translit = translit.replace(/е/g, "йэ");
	translit = translit.replace(/(\p{Uppercase})Ё/ug, "$1ЙО");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
	translit = translit.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
	translit = translit.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
	translit = translit.replace(/Ё/g, "Йо");
	translit = translit.replace(/ё/g, "йо");
	translit = translit.replace(/(\p{Uppercase})Ю/ug, "$1ЙУ");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
	translit = translit.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
	translit = translit.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
	translit = translit.replace(/Ю/g, "Йу");
	translit = translit.replace(/ю/g, "йу");

	translit = translit.replace(/([АЭЫОУЯЕИЙЁЮ])Ь/g, "$1Й");
	translit = translit.replace(/([АЭЫОУЯЕИЙЁЮаэыоуяеийёю])ь/g, "$1й");

	translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Э/g, "$1È");
	translit = translit.replace(/([ЪЬбвгджзклмнпрстфхцчшщъь])э/g, "$1è");
	translit = translit.replace(/Ë/g, "E");
	translit = translit.replace(/ë/g, "e");

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
	translit = translit.replace(/х/g, "h");
	translit = translit.replace(/ц/g, "c");
	translit = translit.replace(/ч/g, "č");
	translit = translit.replace(/ш/g, "š");
	translit = translit.replace(/щ/g, "ś");
	translit = translit.replace(/ы/g, "y");
	translit = translit.replace(/ь/g, "j");
	translit = translit.replace(/ъ/g, "");
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
	translit = translit.replace(/Х/g, "H");
	translit = translit.replace(/Ц/g, "C");
	translit = translit.replace(/Ч/g, "Č");
	translit = translit.replace(/Ш/g, "Š");
	translit = translit.replace(/Щ/g, "Ś");
	translit = translit.replace(/Ы/g, "Y");
	translit = translit.replace(/Ь/g, "J");
	translit = translit.replace(/Ъ/g, "");
	translit = translit.replace(/Э/g, "E");
	translit = translit.replace(/Ю/g, "Ju");
	translit = translit.replace(/Ё/g, "Jo");
	translit = translit.replace(/Я/g, "Ja");
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
