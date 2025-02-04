var car;
var fix;

function cyrlat() {
	car = document.transcription.text1.value;
	fix = car;
	fix = fix.replace(/(\p{Script=Cyrl})( )?Æ/ug, "$1$2Ӕ");
	fix = fix.replace(/Æ( )?(\p{Script=Cyrl})/ug, "Ӕ$1$2");
	fix = fix.replace(/(\p{Script=Cyrl})( )?æ/ug, "$1$2ӕ");
	fix = fix.replace(/æ( )?(\p{Script=Cyrl})/ug, "ӕ$1$2");
	document.transcription.text1.value = fix;
	car = car.replace(/(\p{Script=Cyrl})( )?Æ/ug, "$1$2Ӕ");
	car = car.replace(/Æ( )?(\p{Script=Cyrl})/ug, "Ӕ$1$2");
	car = car.replace(/(\p{Script=Cyrl})( )?æ/ug, "$1$2ӕ");
	car = car.replace(/æ( )?(\p{Script=Cyrl})/ug, "ӕ$1$2");

	car = car.replace(/(А|Ӕ|Е|Ё|И|О|У|Ы|Ю|Я|Э)Щ(А|Ӕ|Е|Ё|И|О|У|Ы|Ю|Я|Э)/g, "$1СС$2");
	car = car.replace(/(А|Ӕ|Е|Ё|И|О|У|Ы|Ю|Я|Э)щ(а|ӕ|е|ё|и|о|у|ы|ю|я|э)/g, "$1Сс$2");
	car = car.replace(/(а|ӕ|е|ё|и|о|у|ы|ю|я|э)щ(а|ӕ|е|ё|и|о|у|ы|ю|я|э)/g, "$1сс$2");
	car = car.replace(/щ/g, "с");
	car = car.replace(/Щ/g, "С");
	car = car.replace(/ш/g, "с");
	car = car.replace(/Ш/g, "С");
	car = car.replace(/ж/g, "з");
	car = car.replace(/Ж/g, "З");
	car = car.replace(/э/g, "е");
	car = car.replace(/Э/g, "Е");

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

	car = car.replace(/у(а|ӕ|е|и|о|у|ы)/g, "ў$1");
	car = car.replace(/У(А|Ӕ|Е|И|О|У|Ы|а|ӕ|е|и|о|у|ы)/g, "Ў$1");
	car = car.replace(/(А|Ӕ|Е|И|О|У|Ы|а|ӕ|е|и|о|у|ы)у/g, "$1ў");
	car = car.replace(/(А|Ӕ|Е|И|О|У|Ы)У/g, "$1Ў");

	car = car.replace(/(К|П|Т|Ц|Ч)ГЪ/g, "$1\u2019H");
	car = car.replace(/(К|П|Т|Ц|Ч|к|п|т|ц|ч)гъ/g, "$1\u2019h");
	car = car.replace(/Г(Ъ|ъ)/g, "H");
	car = car.replace(/гъ/g, "h");
	car = car.replace(/Х(Ъ|ъ)/g, "Q");
	car = car.replace(/хъ/g, "q");
	car = car.replace(/Д(Ж|ж)/g, "J");
	car = car.replace(/дж/g, "j");
	car = car.replace(/Д(З|з)/g, "Ź");
	car = car.replace(/дз/g, "ź");
	car = car.replace(/(К|П|Т|Ц|Ч)Ъ/g, "$1H");
	car = car.replace(/(К|П|Т|Ц|Ч|к|п|т|ц|ч)ъ/g, "$1h");

	car = car.replace(/а/g, "a");
	car = car.replace(/ӕ/g, "â");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "e");
	car = car.replace(/ж/g, "z");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/о/g, "o");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ў/g, "w");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/ц/g, "ś");
	car = car.replace(/ч/g, "c");
	car = car.replace(/ь/g, "");
	car = car.replace(/ы/g, "î");

	car = car.replace(/А/g, "A");
	car = car.replace(/Ӕ/g, "Â");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ж/g, "Z");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/О/g, "O");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ў/g, "W");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Ц/g, "Ś");
	car = car.replace(/Ч/g, "C");
	car = car.replace(/Ь/g, "");
	car = car.replace(/Ы/g, "Î");

	car = car.replace(/\u2039/g, "\u2018");
	car = car.replace(/\u203a/g, "\u2019");
	car = car.replace(/\u00ab/g, "\u201c");
	car = car.replace(/\u00bb/g, "\u201d");

	car = car.replace(/(Ъ|ъ)/g, "");
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
