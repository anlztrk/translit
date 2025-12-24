function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ə/g, 'ә')
		.replace(/Ə/g, 'Ә');
	
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ])Е/g, "$1Э")
		.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩбвгджҗзйклмнңпрстфхһцчшщ])е/g, "$1э")

		.replace(/ЬЕ/g, "ЙЭ")
		.replace(/Ье/g, "Йэ")
		.replace(/ье/g, "йэ")
		.replace(/Ь[ЁО]/g, "ЙО")
		.replace(/Ь[ёо]/g, "Йо")
		.replace(/ь[ёо]/g, "йо")
		.replace(/ЬЯ/g, "ЙА")
		.replace(/Ья/g, "Йа")
		.replace(/ья/g, "йа")
		.replace(/ЬЮ/g, "ЙУ")
		.replace(/Ью/g, "Йу")
		.replace(/ью/g, "йу")

		.replace(/([АЕЁИОУЫЮЯӘӨҮ])Ц/g, "$1ТС")
		.replace(/([аеёиоуыюяәөү])Ц/g, "$1Тс")
		.replace(/([аеёиоуыюяәөү])ц/g, "$1тс")
		.replace(/Ц/g, "С")
		.replace(/ц/g, "с")

		.replace(/([АЕЁИОУЫЮЯӘӨҮ])Щ([АЕЁИОУЫЮЯӘӨҮ])/g, "$1ЧЧ$2")
		.replace(/([АЕЁИОУЫЮЯӘӨҮ])щ([аеёиоуыюяәөү])/g, "$1чч$2")
		.replace(/([аеёиоуыюяәөү])щ([аеёиоуыюяәөү])/g, "$1чч$2")
		.replace(/щ/g, "ч")
		.replace(/Щ/g, "Ч");

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
			if (test.test(document.transcription.text2.value)) {
				document.transcription.text2.value = document.transcription.text2.value
					.replace(pattern, replace);
				changed = true;
			}
		}
	}
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА")
		.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2")
		.replace(/Я(\p{Uppercase})/ug, "ЙА$1")
		.replace(/Я/g, "Йа")
		.replace(/я/g, "йа")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЫ")
		.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЫ $1$2")
		.replace(/Е(\p{Uppercase})/ug, "ЙЫ$1")
		.replace(/Е/g, "Йы")
		.replace(/е/g, "йы")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО")
		.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2")
		.replace(/Ё(\p{Uppercase})/ug, "ЙО$1")
		.replace(/Ё/g, "Йо")
		.replace(/ё/g, "йо")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ")
		.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2")
		.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1")
		.replace(/Ю/g, "Йу")
		.replace(/ю/g, "йу")

		.replace(/([АЫОУ])(Й)?Г/g, "$1$2Ғ")
		.replace(/([АЫОУаыоу])(й)?г/g, "$1$2ғ")
		.replace(/Г([АЫОУЪаыоуъ])/g, "Ғ$1")
		.replace(/г([аыоуъ])/g, "ғ$1")

		.replace(/([АЫОУ])(Й)?К/g, "$1$2Қ")
		.replace(/([АЫОУаыоу])(й)?к/g, "$1$2қ")
		.replace(/К([АЫОУЪаыоуъ])/g, "Қ$1")
		.replace(/к([аыоуъ])/g, "қ$1")

		.replace(/([ҒҚ])А([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ә$2$3")
		.replace(/([ҒҚ])ЫЙ([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1И$2$3")
		.replace(/([ҒҚ])Ы([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Э$2$3")
		.replace(/([ҒҚ])О([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ө$2$3")
		.replace(/([ҒҚ])У([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ү$2$3")

		.replace(/([ҒҚғқ])а([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ә$2$3")
		.replace(/([ҒҚғқ])ый([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1и$2$3")
		.replace(/([ҒҚғқ])ы([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1э$2$3")
		.replace(/([ҒҚғқ])о([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ө$2$3")
		.replace(/([ҒҚғқ])У([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ү$2$3")

		.replace(/(А|Ы|О)У/g, "$1В")
		.replace(/(А|Ы|О|а|ы|о)у/g, "$1в")
		.replace(/(И|Э|Ә|Ө)Ү/g, "$1В")
		.replace(/(И|Э|Ә|Ө|и|э|ә|ө)ү/g, "$1в")

		.replace(/А/g, "A")
		.replace(/Ә/g, "Ä")
		.replace(/Б/g, "B")
		.replace(/В/g, "W")
		.replace(/Г/g, "G")
		.replace(/Ғ/g, "Ğ")
		.replace(/Д/g, "D")
		.replace(/Ж/g, "J")
		.replace(/Җ/g, "C")
		.replace(/З/g, "Z")
		.replace(/И/g, "İ")
		.replace(/Й/g, "Y")
		.replace(/К/g, "K")
		.replace(/Қ/g, "Q")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/Ң/g, "Ñ")
		.replace(/О/g, "O")
		.replace(/Ө/g, "Ö")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "U")
		.replace(/Ү/g, "Ü")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "X")
		.replace(/Һ/g, "H")
		.replace(/Ч/g, "Ç")
		.replace(/Ш/g, "Ş")
		.replace(/Ы/g, "I")
		.replace(/Э/g, "E")
		.replace(/а/g, "a")
		.replace(/ә/g, "ä")
		.replace(/б/g, "b")
		.replace(/в/g, "w")
		.replace(/г/g, "g")
		.replace(/ғ/g, "ğ")
		.replace(/д/g, "d")
		.replace(/ж/g, "j")
		.replace(/җ/g, "c")
		.replace(/з/g, "z")
		.replace(/и/g, "i")
		.replace(/й/g, "y")
		.replace(/к/g, "k")
		.replace(/қ/g, "q")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/ң/g, "ñ")
		.replace(/о/g, "o")
		.replace(/ө/g, "ö")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "u")
		.replace(/ү/g, "ü")
		.replace(/ф/g, "f")
		.replace(/х/g, "x")
		.replace(/һ/g, "h")
		.replace(/ч/g, "ç")
		.replace(/ш/g, "ş")
		.replace(/ы/g, "ı")
		.replace(/э/g, "e")
		.replace(/(Ъ|ъ|Ь|ь|\u2060)/g, "")
		.normalize('NFC')
		.replace(/\u00bb/g, "\u201d")
		.replace(/\u00ab/g, "\u201c");
}

function latcyr() {
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/[әə]/g, 'ä')
		.replace(/[ƏӘ]/g, 'Ä')
		.replace(/[ɵө]/g, 'ö')
		.replace(/[ƟӨ]/g, 'Ö')
		.replace(/[ꞑŋ]/g, 'ñ')
		.replace(/[ꞐŊ]/g, 'Ñ');
		
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/a/g, 'а')
		.replace(/A/g, 'А')
		.replace(/ä/g, 'ә')
		.replace(/Ä/g, 'Ә')
		.replace(/b/g, 'б')
		.replace(/B/g, 'Б')
		.replace(/c/g, 'җ')
		.replace(/C/g, 'Җ')
		.replace(/ç/g, 'ч')
		.replace(/Ç/g, 'Ч')
		.replace(/d/g, 'д')
		.replace(/D/g, 'Д')
		.replace(/e/g, 'э')
		.replace(/E/g, 'Э')
		.replace(/f/g, 'ф')
		.replace(/F/g, 'Ф')
		.replace(/g/g, 'г')
		.replace(/G/g, 'Г')
		.replace(/ğ/g, 'ғ')
		.replace(/Ğ/g, 'Ғ')
		.replace(/h/g, 'һ')
		.replace(/H/g, 'Һ')
		.replace(/ı/g, 'ы')
		.replace(/I/g, 'Ы')
		.replace(/i/g, 'и')
		.replace(/İ/g, 'И')
		.replace(/j/g, 'ж')
		.replace(/J/g, 'Ж')
		.replace(/k/g, 'к')
		.replace(/K/g, 'К')
		.replace(/q/g, 'ҡ')
		.replace(/Q/g, 'Ҡ')
		.replace(/l/g, 'л')
		.replace(/L/g, 'Л')
		.replace(/m/g, 'м')
		.replace(/M/g, 'М')
		.replace(/n/g, 'н')
		.replace(/N/g, 'Н')
		.replace(/ñ/g, 'ң')
		.replace(/Ñ/g, 'Ң')
		.replace(/o/g, 'о')
		.replace(/O/g, 'О')
		.replace(/ö/g, 'ө')
		.replace(/Ö/g, 'Ө')
		.replace(/p/g, 'п')
		.replace(/P/g, 'П')
		.replace(/r/g, 'р')
		.replace(/R/g, 'Р')
		.replace(/s/g, 'с')
		.replace(/S/g, 'С')
		.replace(/ş/g, 'ш')
		.replace(/Ş/g, 'Ш')
		.replace(/t/g, 'т')
		.replace(/T/g, 'Т')
		.replace(/u/g, 'у')
		.replace(/U/g, 'У')
		.replace(/ü/g, 'ү')
		.replace(/Ü/g, 'Ү')
		.replace(/v/g, 'в')
		.replace(/V/g, 'В')
		.replace(/w/g, 'ў')
		.replace(/W/g, 'Ў')
		.replace(/x/g, 'х')
		.replace(/X/g, 'Х')
		.replace(/y/g, 'й')
		.replace(/Y/g, 'Й')
		.replace(/z/g, 'з')
		.replace(/Z/g, 'З')

		.replace(/ғэ([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'гы$1ь')
		.replace(/Ғэ([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Гы$1ь')
		.replace(/ҒЭ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'ГЫ$1Ь')
		.replace(/ғә([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'га$1ь')
		.replace(/Ғә([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Га$1ь')
		.replace(/ҒӘ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'ГА$1Ь')
		.replace(/ғи([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'гый$1ь')
		.replace(/Ғи([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Гый$1ь')
		.replace(/ҒИ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'ГЫЙ$1Ь')
		.replace(/ғө([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'го$1ь')
		.replace(/Ғө([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Го$1ь')
		.replace(/ҒӨ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'ГО$1Ь')
		.replace(/ғy([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'гу$1ь')
		.replace(/Ғy([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Гу$1ь')
		.replace(/ҒY([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'ГУ$1Ь')

		.replace(/ҡэ([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'кы$1ь')
		.replace(/Ҡэ([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Кы$1ь')
		.replace(/ҠЭ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'КЫ$1Ь')
		.replace(/ҡә([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'ка$1ь')
		.replace(/Ҡә([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Ка$1ь')
		.replace(/ҠӘ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'КА$1Ь')
		.replace(/ҡи([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'кый$1ь')
		.replace(/Ҡи([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Кый$1ь')
		.replace(/ҠИ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'КЫЙ$1Ь')
		.replace(/ҡө([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'ко$1ь')
		.replace(/Ҡө([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Ко$1ь')
		.replace(/ҠӨ([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'КО$1Ь')
		.replace(/ҡy([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'ку$1ь')
		.replace(/Ҡy([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])/g, 'Ку$1ь')
		.replace(/ҠY([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])/g, 'КУ$1Ь')

		.replace(/(а|ы|ый|о|у)([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])ь([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])?([эәиөү])/g, '$1$2$3$4')
		.replace(/(А|Ы|ЫЙ|О|У)([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])Ь([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])?([ЭӘИӨҮ])/g, '$1$2$3$4')

		.replace(/([ЭӘИӨҮэәиөү])ғ/g, '$1гъ')
		.replace(/([ЭӘИӨҮ])Ғ/g, '$1ГЪ')
		.replace(/([ЭӘИӨҮэәиөү])ҡ/g, '$1къ')
		.replace(/([ЭӘИӨҮ])Ҡ/g, '$1КЪ')

		.replace(/ғэ([эәиөү])/g, 'гы$1')
		.replace(/Ғэ([эәиөү])/g, 'Гы$1')
		.replace(/ҒЭ([ЭӘИӨҮ])/g, 'ГЫ$1')		
		.replace(/ғә([эәиөү])/g, 'га$1')
		.replace(/Ғә([эәиөү])/g, 'Га$1')
		.replace(/ҒӘ([ЭӘИӨҮ])/g, 'ГА$1')		
		.replace(/ғи([эәиөү])/g, 'гый$1')
		.replace(/Ғи([эәиөү])/g, 'Гый$1')
		.replace(/ҒИ([ЭӘИӨҮ])/g, 'ГЫЙ$1')		
		.replace(/ғө([эәиөү])/g, 'го$1')
		.replace(/Ғө([эәиөү])/g, 'Го$1')
		.replace(/ҒӨ([ЭӘИӨҮ])/g, 'ГО$1')		
		.replace(/ғү([эәиөү])/g, 'гу$1')
		.replace(/Ғү([эәиөү])/g, 'Гу$1')
		.replace(/ҒҮ([ЭӘИӨҮ])/g, 'ГУ$1')
		.replace(/ҡэ([эәиөү])/g, 'кы$1')
		.replace(/Ҡэ([эәиөү])/g, 'Кы$1')
		.replace(/ҠЭ([ЭӘИӨҮ])/g, 'КЫ$1')		
		.replace(/ҡә([эәиөү])/g, 'ка$1')
		.replace(/Ҡә([эәиөү])/g, 'Ка$1')
		.replace(/ҠӘ([ЭӘИӨҮ])/g, 'КА$1')		
		.replace(/ҡи([эәиөү])/g, 'кый$1')
		.replace(/Ҡи([эәиөү])/g, 'Кый$1')
		.replace(/ҠИ([ЭӘИӨҮ])/g, 'КЫЙ$1')		
		.replace(/ҡө([эәиөү])/g, 'ко$1')
		.replace(/Ҡө([эәиөү])/g, 'Ко$1')
		.replace(/ҠӨ([ЭӘИӨҮ])/g, 'КО$1')		
		.replace(/ҡү([эәиөү])/g, 'ку$1')
		.replace(/Ҡү([эәиөү])/g, 'Ку$1')
		.replace(/ҠҮ([ЭӘИӨҮ])/g, 'КУ$1')		
		
		.replace(/([ЭӘИӨҮэәиөү])ғ/g, '$1гъ')
		.replace(/([ЭӘИӨҮэәиөү])ҡ/g, '$1къ')
		
		.replace(/([Гг])ъ([аыоу])/g, '$1$2')
		.replace(/ГЪ([АЫОУ])/g, 'Г$1')
		.replace(/([Кк])ъ([аыоу])/g, '$1$2')
		.replace(/КЪ([АЫОУ])/g, 'К$1')
		
		.replace(/Ў([АЫОУЭӘИӨҮаыоуэәиөү])/g, 'В$1')
		.replace(/ў([аыоуэәиөү])/g, 'в$1')
		.replace(/([АЫОаыо])ў/g, '$1у')
		.replace(/([АЫО])Ў/g, '$1У')
		.replace(/([ЭӘИӨэәиө])ў/g, '$1ү')
		.replace(/([ЭӘИӨ])Ў/g, '$1Ү')
		
		.replace(/йа/g, 'я')
		.replace(/Й[Аа]/g, 'Я')
		.replace(/йы/g, 'е')
		.replace(/Й[Ыы]/g, 'Е')
		.replace(/йу/g, 'ю')
		.replace(/Й[Уу]/g, 'Ю')

		.replace(/([ЭӘИӨҮэәиөү])([бвўгғджҗзйкҡлмнңпрстфхһцчшщ])([яею])/g, '$1$2ь$3')
		.replace(/([ЭӘИӨҮ])([БВЎГҒДЖҖЗЙКҠЛМНҢПРСТФХҺЦЧШЩ])([ЯЕЮ])/g, '$1$2Ь$3')

		.replace(/([Үү])э/g, '$1е')
		.replace(/ҮЭ/g, 'ҮЕ')

		.replace(/йә/g, 'я')
		.replace(/Й[Әә]/g, 'Я')
		.replace(/йэ/g, 'е')
		.replace(/Й[Ээ]/g, 'Е')
		.replace(/йү/g, 'ю')
		.replace(/Й[Үү]/g, 'Ю')
		
		.replace(/ў/g, 'в')
		.replace(/Ў/g, 'В')
		.replace(/ғ/g, 'г')
		.replace(/Ғ/g, 'Г')
		.replace(/ҡ/g, 'к')
		.replace(/Ҡ/g, 'К')
		
		.replace(/([БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩбвгджҗзклмнңпрстфхһцчшщ])йо/g, "$1ьо")
		.replace(/([БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩ])ЙО/g, "$1ЬО")
		.replace(/([БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩбвгджҗзклмнңпрстфхһцчшщ])йэ/g, "$1ье")
		.replace(/([БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩ])ЙЭ/g, "$1ЬЕ")
		.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩбвгджҗзйклмнңпрстфхһцчшщ])э/g, "$1е")
		.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ])Э/g, "$1Е");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
