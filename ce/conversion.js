var car;
var fix;

function cyrlat() {
car = document.transcription.text1.value;
	fix = car;
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

	car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я)Щ(А|Е|Ё|И|О|У|Ы|Ю|Я)/g, "$1ШШ$2");
	car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я)щ(а|е|ё|и|о|у|ы|ю|я)/g, "$1Шш$2");
	car = car.replace(/(а|е|ё|и|о|у|ы|ю|я)щ(а|е|ё|и|о|у|ы|ю|я)/g, "$1шш$2");
	car = car.replace(/щ/g, "ш");
	car = car.replace(/Щ/g, "Ш");

	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|КЪ|Л|М|Н|П|Р|С|Т|Ф|Х|ХЬ|Ц|Ч|Ш|Ӏ)Е/g, "$1Э");
	car = car.replace(/(Б|В|Г|Д|Ж|З|Й|К|Къ|Л|М|Н|П|Р|С|Т|Ф|Х|Хь|Ц|Ч|Ш|Ӏ|б|в|г|д|ж|з|й|к|къ|л|м|н|п|р|с|т|ф|х|хь|ц|ч|ш|ӏ)е/g, "$1э");

	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Ц|Ч|Ш)ЬИ/g, "$1ЙИ");
	car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Ц|Ч|Ш|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|ц|ч|ш)ьи/g, "йи");

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

	car = car.replace(/аь/g, "ä");
	car = car.replace(/ккъ/g, "qqh");
	car = car.replace(/къ/g, "qh");
	car = car.replace(/ккх/g, "qq");
	car = car.replace(/кх/g, "q");
	car = car.replace(/оь/g, "ö");
	car = car.replace(/уь/g, "ü");
	car = car.replace(/ххь/g, "ħħ");
	car = car.replace(/хь/g, "ħ");
	car = car.replace(/ххӏ/g, "ḥḥ");
	car = car.replace(/хӏ/g, "ḥ");
	car = car.replace(/А(Ь|ь)/g, "Ä");
	car = car.replace(/Ккъ/g, "Qqh");
	car = car.replace(/ККЪ/g, "QQH");
	car = car.replace(/Къ/g, "Qh");
	car = car.replace(/КЪ/g, "QH");
	car = car.replace(/Ккх/g, "Qq");
	car = car.replace(/ККХ/g, "QQ");
	car = car.replace(/К(Х|х)/g, "Q");
	car = car.replace(/О(Ь|ь)/g, "Ö");
	car = car.replace(/У(Ь|ь)/g, "Ü");
	car = car.replace(/Ххь/g, "Ħħ");
	car = car.replace(/ХХЬ/g, "ĦĦ");
	car = car.replace(/Х(Ь|ь)/g, "Ħ");
	car = car.replace(/Ххӏ/g, "Ḥḥ");
	car = car.replace(/ХХӀ/g, "ḤḤ");
	car = car.replace(/Х(Ӏ|ӏ)/g, "Ḥ");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/ж/g, "j");
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
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/ц/g, "c");
	car = car.replace(/ч/g, "č");
	car = car.replace(/ш/g, "š");
	car = car.replace(/ъ/g, "\u02bc");
	car = car.replace(/ы/g, "i");
	car = car.replace(/ь/g, "");
	car = car.replace(/э/g, "e");
	car = car.replace(/ӏ/g, "h");
	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ж/g, "J");
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
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Ц/g, "C");
	car = car.replace(/Ч/g, "Č");
	car = car.replace(/Ш/g, "Š");
	car = car.replace(/Ъ/g, "\u02bc");
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
