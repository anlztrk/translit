var car;
var fix;

function cyrlat() {
	car = document.transcription.text1.value;
	fix = car
	fix = fix.replace(/(\p{Script=Cyrl})(I|1)/ug, "$1Ӏ");
	fix = fix.replace(/(I|1)(\p{Script=Cyrl})/ug, "Ӏ$2");
	fix = fix.replace(/(\p{Script=Cyrl})l/ug, "$1ӏ");
	fix = fix.replace(/l(\p{Script=Cyrl})/ug, "ӏ$1");

	fix = fix.replace(/(\p{Lowercase})( )?Ӏ/ug, "$1$2ӏ");
	fix = fix.replace(/(\p{Uppercase})( )?Ӏ( )?(\p{Lowercase})/ug, "$1$2ӏ$3$4");
	document.transcription.text1.value = fix;
	car = car.replace(/(\p{Script=Cyrl})(I|1)/ug, "$1Ӏ");
	car = car.replace(/(I|1)(\p{Script=Cyrl})/ug, "Ӏ$2");
	car = car.replace(/(\p{Script=Cyrl})l/ug, "$1ӏ");
	car = car.replace(/l(\p{Script=Cyrl})/ug, "ӏ$1");

	car = car.replace(/(\p{Lowercase})( )?Ӏ/ug, "$1$2ӏ");
	car = car.replace(/(\p{Uppercase})( )?Ӏ( )?(\p{Lowercase})/ug, "$1$2ӏ$3$4");

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

	car = car.replace(/у(а|е|и|о|у|ы|э)/g, "ў$1");
	car = car.replace(/У(А|Е|И|О|У|Ы|Э|а|е|и|о|у|ы|э)/g, "Ў$1");
	car = car.replace(/(А|Е|И|О|У|Ы|Э|а|е|и|о|у|ы|э)у/g, "$1ў");
	car = car.replace(/(А|Е|И|О|У|Ы|Э)У/g, "$1Ў");

	car = car.replace(/кхъ/g, "къхъ");
	car = car.replace(/Кхъ/g, "Къхъ");
	car = car.replace(/КХЪ/g, "КЪХЪ");
	car = car.replace(/жь/g, "j");
	car = car.replace(/Ж(Ь|ь)/g, "J");
	car = car.replace(/хь/g, "ħ");
	car = car.replace(/Х(Ь|ь)/g, "Ħ");
	car = car.replace(/гъ/g, "ġ");
	car = car.replace(/Г(Ъ|ъ)/g, "Ġ");
	car = car.replace(/къ/g, "q");
	car = car.replace(/К(Ъ|ъ)/g, "Q");
	car = car.replace(/лъ/g, "ł");
	car = car.replace(/Л(Ъ|ъ)/g, "Ł");
	car = car.replace(/хъ/g, "ḥ");
	car = car.replace(/Х(Ъ|ъ)/g, "Ḥ");
	car = car.replace(/жъ/g, "ż");
	car = car.replace(/Ж(Ъ|ъ)/g, "Ż");
	car = car.replace(/чъ/g, "ċ");
	car = car.replace(/Ч(Ъ|ъ)/g, "Ċ");
	car = car.replace(/шъ/g, "ṣ");
	car = car.replace(/Ш(Ъ|ъ)/g, "Ṣ");
	car = car.replace(/чӏ/g, "ċӏ");
	car = car.replace(/Ч(Ӏ|ӏ)/g, "Ċ$1");
	car = car.replace(/кӏ/g, "čӏ");
	car = car.replace(/Ч(Ӏ|ӏ)/g, "Č$1");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "é");
	car = car.replace(/ж/g, "ž");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "í");
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
	car = car.replace(/ц/g, "c");
	car = car.replace(/ч/g, "č");
	car = car.replace(/ш/g, "š");
	car = car.replace(/щ/g, "ṡ");
	car = car.replace(/ъ/g, "");
	car = car.replace(/ы/g, "i");
	car = car.replace(/ь/g, "");
	car = car.replace(/э/g, "e");
	car = car.replace(/ӏ/g, "h");
	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "É");
	car = car.replace(/Ж/g, "Ž");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "Í");
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
	car = car.replace(/Ц/g, "C");
	car = car.replace(/Ч/g, "Č");
	car = car.replace(/Ш/g, "Š");
	car = car.replace(/Щ/g, "Ṡ");
	car = car.replace(/Ъ/g, "");
	car = car.replace(/Ы/g, "I");
	car = car.replace(/Ь/g, "");
	car = car.replace(/Э/g, "E");
	car = car.replace(/Ӏ/g, "H");

	car = car.replace(/\u2039/g, "\u2018");
	car = car.replace(/\u203a/g, "\u2019");
	car = car.replace(/\u00ab/g, "\u201c");
	car = car.replace(/\u00bb/g, "\u201d");
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
