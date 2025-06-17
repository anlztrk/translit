var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ])Е/g, "$1Э");
	car = car.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩбвгджҗзйклмнңпрстфхһцчшщ])е/g, "$1э");
	
	car = car.replace(/ЬЕ/g, "ЙЭ");
	car = car.replace(/Ье/g, "Йэ");
	car = car.replace(/ье/g, "йэ");
	car = car.replace(/ЬЁ/g, "ЙО");
	car = car.replace(/Ьё/g, "Йо");
	car = car.replace(/ьё/g, "йо");
	car = car.replace(/ЬЯ/g, "ЙА");
	car = car.replace(/Ья/g, "Йа");
	car = car.replace(/ья/g, "йа");
	car = car.replace(/ЬЮ/g, "ЙУ");
	car = car.replace(/Ью/g, "Йу");
	car = car.replace(/ью/g, "йу");

	car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])Ц/g, "$1ТС");
	car = car.replace(/([аеёиоуыюяәөү])Ц/g, "$1Тс");
	car = car.replace(/([аеёиоуыюяәөү])ц/g, "$1тс");
	car = car.replace(/Ц/g, "С");
	car = car.replace(/ц/g, "с");

	car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])Щ([АЕЁИОУЫЮЯӘӨҮ])/g, "$1ЧЧ$2");
	car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])щ([аеёиоуыюяәөү])/g, "$1чч$2");
	car = car.replace(/([аеёиоуыюяәөү])щ([аеёиоуыюяәөү])/g, "$1чч$2");
	car = car.replace(/щ/g, "ч");
	car = car.replace(/Щ/g, "Ч");

	const rules = [{
			test: /[ӘЭИӨҮ][БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Я/,
			pattern: /([ӘЭИӨҮ])([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Я/g,
			replace: "$1$2ЙӘ",
		},
		{
			test: /[ӘЭИӨҮәэиөү][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}я/,
			pattern: /([ӘЭИӨҮәэиөү])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})я/g,
			replace: "$1$2йә",
		},
		{
			test: /[ӘЭИӨҮ][БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Ю/,
			pattern: /([ӘЭИӨҮ])([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Ю/g,
			replace: "$1$2ЙҮ",
		},
		{
			test: /[ӘЭИӨҮәэиөү][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}ю/,
			pattern: /([ӘЭИӨҮәэиөү])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})ю/g,
			replace: "$1$2йү",
		},
		{
			test: /[ӘЭИӨ][БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Е/,
			pattern: /([ӘЭИӨ])([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Е/g,
			replace: "$1$2ЙЭ",
		},
		{
			test: /[ӘЭИӨәэиө][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}е/,
			pattern: /([ӘЭИӨәэиө])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})е/g,
			replace: "$1$2йэ",
		},
		{
			test: /Ү[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Е/,
			pattern: /Ү([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Е/g,
			replace: "$1Э",
		},
		{
			test: /[Үү][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}е/,
			pattern: /([Үү])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})е/g,
			replace: "$1$2э",
		},
		{
			test: /Я[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘЭИӨҮЬ]/,
			pattern: /Я([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘЭИӨҮЬ])/g,
			replace: "ЙӘ$1$2",
		},
		{
			test: /Я[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
			pattern: /Я([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
			replace: "Йә$1$2",
		},
		{
			test: /я[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
			pattern: /я([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
			replace: "йә$1$2",
		},
		{
			test: /Ю[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘИӨҮЬ]/,
			pattern: /Ю([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘИӨҮЬ])/g,
			replace: "ЙҮ$1$2",
		},
		{
			test: /Ю[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әиөүь]/,
			pattern: /Ю([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әиөүь])/g,
			replace: "Йү$1$2",
		},
		{
			test: /ю[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әиөүь]/,
			pattern: /ю([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әиөүь])/g,
			replace: "йү$1$2",
		},       
		{
			test: /Ю[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Э/,
			pattern: /Ю([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Э/g,
			replace: "ЙҮ$1Э",
		},
		{
			test: /Ю[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}э/,
			pattern: /Ю([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})э/g,
			replace: "Йү$1э",
		},
		{
			test: /ю[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}э/,
			pattern: /ю([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})э/g,
			replace: "йү$1э",
		},
		{
			test: /Е[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘЭИӨҮЬ]/,
			pattern: /Е([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘЭИӨҮЬ])/g,
			replace: "ЙЭ$1$2",
		},
		{
			test: /Е[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
			pattern: /Е([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
			replace: "Йэ$1$2",
		},
		{
			test: /е[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
			pattern: /е([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
			replace: "йэ$1$2",
		}
	];

	// 2. Loop until none of the rules fire
	let changed = true;
	while (changed) {
		changed = false;
		for (const {
				test,
				pattern,
				replace
			}
			of rules) {
			if (test.test(car)) {
				car = car.replace(pattern, replace);
				changed = true;
			}
		}
	}
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
	car = car.replace(/Я/g, "Йа");
	car = car.replace(/я/g, "йа");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
	car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЫ $1$2");
	car = car.replace(/Е(\p{Uppercase})/ug, "ЙЫ$1");
	car = car.replace(/Е/g, "Йы");
	car = car.replace(/е/g, "йы");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
	car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
	car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
	car = car.replace(/Ё/g, "Йо");
	car = car.replace(/ё/g, "йо");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
	car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
	car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
	car = car.replace(/Ю/g, "Йу");
	car = car.replace(/ю/g, "йу");
	
	car = car.replace(/([АЫОУ])(Й)?Г/g, "$1$2Ғ");
	car = car.replace(/([АЫОУаыоу])(й)?г/g, "$1$2ғ");
	car = car.replace(/Г([АЫОУЪаыоуъ])/g, "Ғ$1");
	car = car.replace(/г([аыоуъ])/g, "ғ$1");

	car = car.replace(/([АЫОУ])(Й)?К/g, "$1$2Қ");
	car = car.replace(/([АЫОУаыоу])(й)?к/g, "$1$2қ");
	car = car.replace(/К([АЫОУЪаыоуъ])/g, "Қ$1");
	car = car.replace(/к([аыоуъ])/g, "қ$1");

	car = car.replace(/([ҒҚ])А([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ә$2$3");
	car = car.replace(/([ҒҚ])ЫЙ([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1И$2$3");
	car = car.replace(/([ҒҚ])Ы([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Э$2$3");
	car = car.replace(/([ҒҚ])О([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ө$2$3");
	car = car.replace(/([ҒҚ])У([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ү$2$3");

	car = car.replace(/([ҒҚғқ])а([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ә$2$3");
	car = car.replace(/([ҒҚғқ])ый([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1и$2$3");
	car = car.replace(/([ҒҚғқ])ы([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1э$2$3");
	car = car.replace(/([ҒҚғқ])о([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ө$2$3");
	car = car.replace(/([ҒҚғқ])У([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ү$2$3");

	car = car.replace(/(А|Ы|О)У/g, "$1В");
	car = car.replace(/(А|Ы|О|а|ы|о)у/g, "$1в");
	car = car.replace(/(Э|И|Ә|Ө)Ү/g, "$1В");
	car = car.replace(/(Э|И|Ә|Ө|э|и|ә|ө)ү/g, "$1в");
	car = car.replace(/У(А|Ы|О)/g, "УВ$1");
	car = car.replace(/(У|у)(а|ы|о)/g, "$1в$2");
	car = car.replace(/Ү(Э|И|Ә|Ө)/g, "ҮВ$1");
	car = car.replace(/(Ү|ү)(э|и|ә|ө)/g, "$1в$2");

	car = car.replace(/А/g, "A");
	car = car.replace(/Ә/g, "E");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "W");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Ғ/g, "Ğ");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/Җ/g, "Ɉ");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "Ī");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Қ/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/Ң/g, "Ñ");
	car = car.replace(/О/g, "Ŭ");
	car = car.replace(/Ө/g, "Ũ");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ү/g, "Ü");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Һ/g, "H");
	car = car.replace(/Ч/g, "Ś");
	car = car.replace(/Ш/g, "Ş");
	car = car.replace(/Ы/g, "I");
	car = car.replace(/Э/g, "İ");
	car = car.replace(/а/g, "a");
	car = car.replace(/ә/g, "e");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "w");
	car = car.replace(/г/g, "g");
	car = car.replace(/ғ/g, "ğ");
	car = car.replace(/д/g, "d");
	car = car.replace(/ж/g, "j");
	car = car.replace(/җ/g, "ɉ");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "ī");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/қ/g, "q");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/ң/g, "ñ");
	car = car.replace(/о/g, "ŭ");
	car = car.replace(/ө/g, "ũ");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ү/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/һ/g, "h");
	car = car.replace(/ч/g, "ś");
	car = car.replace(/ш/g, "ş");
	car = car.replace(/ы/g, "ı");
	car = car.replace(/э/g, "i");
	car = car.replace(/(Ъ|ъ|Ь|ь|\u2060)/g, "");
	car = car.normalize('NFC');
	car = car.replace(/\u00bb/g, "\u201d");
	car = car.replace(/\u00ab/g, "\u201c");
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
