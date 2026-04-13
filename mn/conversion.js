function cyrlat() {
	// --- INPUT NORMALIZATION & MIXED SCRIPT FIXES ---
	document.transcription.text1.value = document.transcription.text1.value
		// Normalize archaic / variant Cyrillic letters to standard ones
		.replace(/(є|ѳ)/g, "ө")
		.replace(/(Є|Ѳ)/g, "Ө")

		// Convert Latin letters to Cyrillic when adjacent to Cyrillic (right side)
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

		// Convert Latin letters to Cyrillic when adjacent to Cyrillic (left side)
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
		.normalize('NFC') // Normalize Unicode composition

		// --- HARD/SOFT SIGN + VOWEL HANDLING ---
		.replace(/([ЪЬ])([АОУ])/g, "$1\u2019$2") // Insert apostrophe after Ъ/Ь before vowels
		.replace(/([ЪЬъь])([аоу])/g, "$1\u2019$2")
		.replace(/ЪЕ/g, "ЙЭ") // Special case transformations
		.replace(/([Ъъ])е/g, "йэ")
		.replace(/([ЬЪ])Э/g, "$1\u2019Э")
		.replace(/([ЬЪьъ])э/g, "$1\u2019э")
		
		// --- Й + VOWEL DIACRITIC MARKING ---
		.replace(/Й([Аа])/g, "Й$1\u0308")
		.replace(/йа/g, "йа\u0308")
		.replace(/Й([Ээ])/g, "Й$1\u0308")
		.replace(/йэ/g, "йэ\u0308")
		.replace(/Й([Уу])/g, "Й$1\u0308")
		.replace(/йу/g, "йу\u0308")
		.replace(/Й([Оо])/g, "Й$1\u0308")
		.replace(/йо/g, "йо\u0308")

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
		
		// Remove redundant soft sign before Й
		.replace(/ьй/g, "й")
		.replace(/ЬЙ/g, "Й")

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
}

function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.normalize('NFC')

		.replace(/\u201e/g, "«")
		.replace(/\u201c/g, "»")

		// Apostrophe-marked sequences
		.replace(/Y’([AOUE])/g, "Ь$1")
		.replace(/y’([aoue])/g, "ь$1")
		.replace(/’([AOUE])/g, "Ъ$1")
		.replace(/’([aoue])/g, "ъ$1")

		// Й + vowel sequences
		.replace(/YÄ/g, "ЙА")
		.replace(/yä/g, "йа")
		.replace(/YË/g, "ЙЭ")
		.replace(/yë/g, "йэ")
		.replace(/YÖ/g, "ЙО")
		.replace(/yö/g, "йо")
		.replace(/YÜ/g, "ЙУ")
		.replace(/yü/g, "йу")

		// Plain digraphs
		.replace(/Yo/g, "Ё")
		.replace(/yo/g, "ё")
		.replace(/Yu/g, "Ю")
		.replace(/yu/g, "ю")
		.replace(/Ya/g, "Я")
		.replace(/ya/g, "я")
		.replace(/Yọ/g, "Е")
		.replace(/yọ/g, "е")

		// Accented consonant + vowel results
		.replace(/Á/g, "Я")
		.replace(/á/g, "я")
		.replace(/É/g, "Е")
		.replace(/é/g, "е")
		.replace(/Ó/g, "Ё")
		.replace(/ó/g, "ё")
		.replace(/Ú/g, "Ю")
		.replace(/ú/g, "ю")

		// Special vowels
		.replace(/Ọ/g, "Ө")
		.replace(/ọ/g, "ө")
		.replace(/Ụ/g, "Ү")
		.replace(/ụ/g, "ү")
		.replace(/Ị/g, "Ы")
		.replace(/ị/g, "ы")

		// Consonants with dedicated Latin symbols
		.replace(/Č/g, "Ч")
		.replace(/č/g, "ч")
		.replace(/Š/g, "Ш")
		.replace(/š/g, "ш")
		.replace(/Ś/g, "Щ")
		.replace(/ś/g, "щ")

		// Contextual y -> soft sign, otherwise y -> й
		.replace(/([BCDFGHJKLMNPQRSTVWXZČŠŚbcdfghjklmnpqrstvwxzčšś])Y/g, "$1Ь")
		.replace(/([BCDFGHJKLMNPQRSTVWXZČŠŚbcdfghjklmnpqrstvwxzčšś])y/g, "$1ь")
		.replace(/Y/g, "Й")
		.replace(/y/g, "й")

		// Basic alphabet
		.replace(/A/g, "А")
		.replace(/a/g, "а")
		.replace(/B/g, "Б")
		.replace(/b/g, "б")
		.replace(/V/g, "В")
		.replace(/v/g, "в")
		.replace(/G/g, "Г")
		.replace(/g/g, "г")
		.replace(/D/g, "Д")
		.replace(/d/g, "д")
		.replace(/J/g, "Ж")
		.replace(/j/g, "ж")
		.replace(/Z/g, "З")
		.replace(/z/g, "з")
		.replace(/I/g, "И")
		.replace(/i/g, "и")
		.replace(/K/g, "К")
		.replace(/k/g, "к")
		.replace(/L/g, "Л")
		.replace(/l/g, "л")
		.replace(/M/g, "М")
		.replace(/m/g, "м")
		.replace(/N/g, "Н")
		.replace(/n/g, "н")
		.replace(/O/g, "О")
		.replace(/o/g, "о")
		.replace(/P/g, "П")
		.replace(/p/g, "п")
		.replace(/R/g, "Р")
		.replace(/r/g, "р")
		.replace(/S/g, "С")
		.replace(/s/g, "с")
		.replace(/T/g, "Т")
		.replace(/t/g, "т")
		.replace(/U/g, "У")
		.replace(/u/g, "у")
		.replace(/F/g, "Ф")
		.replace(/f/g, "ф")
		.replace(/H/g, "Х")
		.replace(/h/g, "х")
		.replace(/C/g, "Ц")
		.replace(/c/g, "ц")
		.replace(/E/g, "Э")
		.replace(/e/g, "э")

		.normalize('NFC');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
