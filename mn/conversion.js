function topright() {
	// --- INPUT NORMALIZATION & MIXED SCRIPT FIXES ---
	document.transcription.text1.value = document.transcription.text1.value
		// Normalize archaic / variant Cyrillic letters to standard ones
		.replace(/(є|ѳ)/g, "ө")
		.replace(/(Є|Ѳ)/g, "Ө")

		// Convert homoglyphic Latin letters to Cyrillic when adjacent to Cyrillic (right side)
		.replace(/(\p{Script=Cyrl})A/ug, "$1А")
		.replace(/(\p{Script=Cyrl})C/ug, "$1С")
		.replace(/(\p{Script=Cyrl})E/ug, "$1Е")
		.replace(/(\p{Script=Cyrl})Ë/ug, "$1Ё")
		.replace(/(\p{Script=Cyrl})Ї/ug, "$1Ү")
		.replace(/(\p{Script=Cyrl})O/ug, "$1О")
		.replace(/(\p{Script=Cyrl})P/ug, "$1Р")
		.replace(/(\p{Script=Cyrl})X/ug, "$1Х")

		// Same as above for lowercase
		.replace(/(\p{Script=Cyrl})a/ug, "$1а")
		.replace(/(\p{Script=Cyrl})c/ug, "$1с")
		.replace(/(\p{Script=Cyrl})e/ug, "$1е")
		.replace(/(\p{Script=Cyrl})ë/ug, "$1ё")
		.replace(/(\p{Script=Cyrl})ї/ug, "$1ү")
		.replace(/(\p{Script=Cyrl})o/ug, "$1о")
		.replace(/(\p{Script=Cyrl})p/ug, "$1р")
		.replace(/(\p{Script=Cyrl})x/ug, "$1х")

		// Convert homoglyphic Latin letters to Cyrillic when adjacent to Cyrillic (left side)
		.replace(/A(\p{Script=Cyrl})/ug, "А$1")
		.replace(/C(\p{Script=Cyrl})/ug, "С$1")
		.replace(/E(\p{Script=Cyrl})/ug, "Е$1")
		.replace(/Ë(\p{Script=Cyrl})/ug, "Ё$1")
		.replace(/Ї(\p{Script=Cyrl})/ug, "Ү$1")
		.replace(/O(\p{Script=Cyrl})/ug, "О$1")
		.replace(/P(\p{Script=Cyrl})/ug, "Р$1")
		.replace(/X(\p{Script=Cyrl})/ug, "Х$1")

		// Same as above for lowercase
		.replace(/a(\p{Script=Cyrl})/ug, "а$1")
		.replace(/c(\p{Script=Cyrl})/ug, "с$1")
		.replace(/e(\p{Script=Cyrl})/ug, "е$1")
		.replace(/ë(\p{Script=Cyrl})/ug, "ё$1")
		.replace(/ї(\p{Script=Cyrl})/ug, "ү$1")
		.replace(/o(\p{Script=Cyrl})/ug, "о$1")
		.replace(/p(\p{Script=Cyrl})/ug, "р$1")
		.replace(/x(\p{Script=Cyrl})/ug, "х$1");

	// --- MAIN TRANSFORMATION PIPELINE ---
	document.transcription.text3.value = document.transcription.text1.value
		.normalize('NFC') // Normalize Unicode composition

		// --- Й + VOWEL DIACRITIC MARKING ---
		.replace(/Й([АаЭэОоӨөУуҮү])/g, "Й$1\u0308")
		.replace(/й([аэоөуү])/g, "й$1\u0308")

		// --- PALATALIZATION MARKING (CONSONANT + IOTATED VOWEL) ---
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩ])Я/g, "$1Á")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩбвгджзклмнпрстфхцчшщ])я/g, "$1á")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩ])Е/g, "$1É")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩбвгджзклмнпрстфхцчшщ])е/g, "$1é")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩ])Ё/g, "$1Ó")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩбвгджзклмнпрстфхцчшщ])ё/g, "$1ó")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩ])Ю/g, "$1Ú")
		.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩбвгджзклмнпрстфхцчшщ])ю/g, "$1ú")

		// --- VOWEL COLLISION / RESOLUTION RULES ---
		.replace(/ЕЭ/g, "ЙЭЭ")
		.replace(/Еэ/g, "Йээ")
		.replace(/еэ/g, "йээ")
		.replace(/ЭЕ/g, "ЭЙЭ")
		.replace(/([Ээ])е/g, "$1йэ")
		.replace(/ЮҮ/g, "ЙҮҮ")
		.replace(/Юү/g, "Йүү")
		.replace(/юү/g, "йүү")
		.replace(/ҮЮ/g, "ҮЙҮ")
		.replace(/([Үү])ю/g, "$1йү")

		// --- IOTATED VOWELS → Й + VOWEL (CASE-SENSITIVE HANDLING) ---
		.replace(/(\p{Uppercase})Я/ug, "$1ЙА")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА")
		.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2")
		.replace(/Я(\p{Uppercase})/ug, "ЙА$1")
		.replace(/Я/g, "Йа")
		.replace(/я/g, "йа")

		.replace(/(\p{Uppercase})Е/ug, "$1ЙӨ")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙӨ")
		.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙӨ $1$2")
		.replace(/Е(\p{Uppercase})/ug, "ЙӨ$1")
		.replace(/Е/g, "Йө")
		.replace(/е/g, "йө")

		.replace(/(\p{Uppercase})Ё/ug, "$1ЙО")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО")
		.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2")
		.replace(/Ё(\p{Uppercase})/ug, "ЙО$1")
		.replace(/Ё/g, "Йо")
		.replace(/ё/g, "йо")

		.replace(/(\p{Uppercase})Ю/ug, "$1ЙУ")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ")
		.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2")
		.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1")
		.replace(/Ю/g, "Йу")
		.replace(/ю/g, "йу")

		// --- FINAL Й SIMPLIFICATION (NON-VOWEL CONTEXT) ---
		.replace(/([АЕЁИОӨУҮЫЭЮЯ])Й(?![АЕЁИЙОӨУҮЫЭЮЯ])/g, "$1И")
		.replace(/([АЕЁИОӨУҮЫЭЮЯаеёиоөуүыэюя])й(?![аеёийоөуүыэюя])/g, "$1и")

		// Handle soft sign before Й
		.replace(/ьй([аэоөуү])/g, "й$1\u0301")
		.replace(/ЬЙ([АЭОӨУҮ])/g, "Й$1\u0301")

		// --- CYRILLIC → LATIN TRANSLITERATION (LOWERCASE) ---
		.replace(/а/g, "a")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/д/g, "d")
		.replace(/е/g, "yọ")
		.replace(/ж/g, "j")
		.replace(/з/g, "z")
		.replace(/и/g, "i")
		.replace(/й/g, "y")
		.replace(/к/g, "k")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/о/g, "o")
		.replace(/ө/g, "ọ")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "u")
		.replace(/ү/g, "ụ")
		.replace(/ф/g, "f")
		.replace(/х/g, "h")
		.replace(/ц/g, "c")
		.replace(/ч/g, "č")
		.replace(/ш/g, "š")
		.replace(/щ/g, "ś")
		.replace(/ы/g, "ị")
		.replace(/ь/g, "y")
		.replace(/ъ/g, "")
		.replace(/э/g, "e")
		.replace(/ю/g, "yu")
		.replace(/ё/g, "yo")
		.replace(/я/g, "ya")

		// --- CYRILLIC → LATIN TRANSLITERATION (UPPERCASE) ---
		.replace(/А/g, "A")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Д/g, "D")
		.replace(/Е/g, "Yọ")
		.replace(/Ж/g, "J")
		.replace(/З/g, "Z")
		.replace(/И/g, "I")
		.replace(/Й/g, "Y")
		.replace(/К/g, "K")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/О/g, "O")
		.replace(/Ө/g, "Ọ")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "U")
		.replace(/Ү/g, "Ụ")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "H")
		.replace(/Ц/g, "C")
		.replace(/Ч/g, "Č")
		.replace(/Ш/g, "Š")
		.replace(/Щ/g, "Ś")
		.replace(/Ы/g, "Ị")
		.replace(/Ь/g, "Y")
		.replace(/Ъ/g, "")
		.replace(/Э/g, "E")
		.replace(/Ю/g, "Yu")
		.replace(/Ё/g, "Yo")
		.replace(/Я/g, "Ya")

		// --- TYPOGRAPHIC QUOTES ---
		.replace(/«/g, "\u201e") // low double quote
		.replace(/»/g, "\u201c") // high double quote

		.normalize('NFC'); // Final normalization
	
	topleft();
}

function topleft() {
// --- INPUT NORMALIZATION & MIXED SCRIPT FIXES ---
	document.transcription.text1.value = document.transcription.text1.value
		// Normalize archaic / variant Cyrillic letters to standard ones
		.replace(/(є|ѳ)/g, "ө")
		.replace(/(Є|Ѳ)/g, "Ө")

		// Convert homoglyphic Latin letters to Cyrillic when adjacent to Cyrillic (right side)
		.replace(/(\p{Script=Cyrl})A/ug, "$1А")
		.replace(/(\p{Script=Cyrl})C/ug, "$1С")
		.replace(/(\p{Script=Cyrl})E/ug, "$1Е")
		.replace(/(\p{Script=Cyrl})Ë/ug, "$1Ё")
		.replace(/(\p{Script=Cyrl})Ї/ug, "$1Ү")
		.replace(/(\p{Script=Cyrl})O/ug, "$1О")
		.replace(/(\p{Script=Cyrl})P/ug, "$1Р")
		.replace(/(\p{Script=Cyrl})X/ug, "$1Х")

		// Same as above for lowercase
		.replace(/(\p{Script=Cyrl})a/ug, "$1а")
		.replace(/(\p{Script=Cyrl})c/ug, "$1с")
		.replace(/(\p{Script=Cyrl})e/ug, "$1е")
		.replace(/(\p{Script=Cyrl})ë/ug, "$1ё")
		.replace(/(\p{Script=Cyrl})ї/ug, "$1ү")
		.replace(/(\p{Script=Cyrl})o/ug, "$1о")
		.replace(/(\p{Script=Cyrl})p/ug, "$1р")
		.replace(/(\p{Script=Cyrl})x/ug, "$1х")

		// Convert homoglyphic Latin letters to Cyrillic when adjacent to Cyrillic (left side)
		.replace(/A(\p{Script=Cyrl})/ug, "А$1")
		.replace(/C(\p{Script=Cyrl})/ug, "С$1")
		.replace(/E(\p{Script=Cyrl})/ug, "Е$1")
		.replace(/Ë(\p{Script=Cyrl})/ug, "Ё$1")
		.replace(/Ї(\p{Script=Cyrl})/ug, "Ү$1")
		.replace(/O(\p{Script=Cyrl})/ug, "О$1")
		.replace(/P(\p{Script=Cyrl})/ug, "Р$1")
		.replace(/X(\p{Script=Cyrl})/ug, "Х$1")

		// Same as above for lowercase
		.replace(/a(\p{Script=Cyrl})/ug, "а$1")
		.replace(/c(\p{Script=Cyrl})/ug, "с$1")
		.replace(/e(\p{Script=Cyrl})/ug, "е$1")
		.replace(/ë(\p{Script=Cyrl})/ug, "ё$1")
		.replace(/ї(\p{Script=Cyrl})/ug, "ү$1")
		.replace(/o(\p{Script=Cyrl})/ug, "о$1")
		.replace(/p(\p{Script=Cyrl})/ug, "р$1")
		.replace(/x(\p{Script=Cyrl})/ug, "х$1");

	// --- MAIN TRANSFORMATION PIPELINE ---
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 YA")
		.replace(/(\p{Uppercase})Я/ug, "$1YA")
		.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "YA $1$2")
		.replace(/Я(\p{Uppercase})/ug, "YA$1")
		.replace(/Я/g, "Ya")
		.replace(/я/g, "ya")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 YE")
		.replace(/(\p{Uppercase})Е/ug, "$1YE")
		.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "YE $1$2")
		.replace(/Е(\p{Uppercase})/ug, "YE$1")
		.replace(/Е/g, "Ye")
		.replace(/е/g, "ye")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 YO")
		.replace(/(\p{Uppercase})Ё/ug, "$1YO")
		.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "YO $1$2")
		.replace(/Ё(\p{Uppercase})/ug, "YO$1")
		.replace(/Ё/g, "Yo")
		.replace(/ё/g, "yo")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 YU")
		.replace(/(\p{Uppercase})Ю/ug, "$1YU")
		.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "YU $1$2")
		.replace(/Ю(\p{Uppercase})/ug, "YU$1")
		.replace(/Ю/g, "Yu")
		.replace(/ю/g, "yu")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 KH")
		.replace(/(\p{Uppercase})Х/ug, "$1KH")
		.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "KH $1$2")
		.replace(/Х(\p{Uppercase})/ug, "KH$1")
		.replace(/Х/g, "Kh")
		.replace(/х/g, "kh")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 TS")
		.replace(/(\p{Uppercase})Ц/ug, "$1TS")
		.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "TS $1$2")
		.replace(/Ц(\p{Uppercase})/ug, "TS$1")
		.replace(/Ц/g, "Ts")
		.replace(/ц/g, "ts")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 CH")
		.replace(/(\p{Uppercase})Ч/ug, "$1CH")
		.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2")
		.replace(/Ч(\p{Uppercase})/ug, "CH$1")
		.replace(/Ч/g, "Ch")
		.replace(/ч/g, "ch")
		.replace(/(\p{Uppercase})(\p{Uppercase}) [ШЩ]/ug, "$1$2 SH")
		.replace(/(\p{Uppercase})[ШЩ]/ug, "$1SH")
		.replace(/[ШЩ] (\p{Uppercase})(\p{Uppercase})/ug, "SH $1$2")
		.replace(/[ШЩ](\p{Uppercase})/ug, "SH$1")
		.replace(/[ШЩ]/g, "Sh")
		.replace(/[шщ]/g, "sh")
		
		.replace(/а/g, "a")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/д/g, "d")
		.replace(/е/g, "ye")
		.replace(/ж/g, "j")
		.replace(/з/g, "z")
		.replace(/и/g, "i")
		.replace(/й/g, "i")
		.replace(/к/g, "k")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/о/g, "o")
		.replace(/ө/g, "ö")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "u")
		.replace(/ү/g, "ü")
		.replace(/ф/g, "f")
		.replace(/х/g, "kh")
		.replace(/ц/g, "ts")
		.replace(/ч/g, "ch")
		.replace(/ш/g, "sh")
		.replace(/щ/g, "sh")
		.replace(/ъ/g, "i")
		.replace(/ы/g, "y")
		.replace(/ь/g, "i")
		.replace(/э/g, "e")
		.replace(/ю/g, "yu")
		.replace(/я/g, "ya")

		.replace(/А/g, "A")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Д/g, "D")
		.replace(/Е/g, "Ye")
		.replace(/Ж/g, "J")
		.replace(/З/g, "Z")
		.replace(/И/g, "I")
		.replace(/Й/g, "I")
		.replace(/К/g, "K")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/О/g, "O")
		.replace(/Ө/g, "Ö")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "U")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "Kh")
		.replace(/Ц/g, "Ts")
		.replace(/Ч/g, "Ch")
		.replace(/Ш/g, "Sh")
		.replace(/Щ/g, "Sh")
		.replace(/Ъ/g, "I")
		.replace(/Ы/g, "Y")
		.replace(/Ь/g, "I")
		.replace(/Э/g, "E")
		.replace(/Ю/g, "Yu")
		.replace(/Я/g, "Ya");
}

function righttop() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}

function copy3() {
	navigator.clipboard.writeText(document.transcription.text3.value);
}
