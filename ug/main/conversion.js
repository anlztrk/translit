function arblat() {
	let latinWords = {};
	let index = 0;

	document.transcription.text2.value = document.transcription.text1.value.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})

		.replace(/(الله|ﷲ)/g, "ئاللاھ")

		.replace(/نگ/g, "نئگ")
		.replace(/گھ/g, "گئھ")
		.replace(/نغ/g, "نئغ")
		.replace(/سھ/g, "سئھ")
		.replace(/زھ/g, "زئھ")

		.replace(/(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1$2")
		.replace(/(ب|چ|د|ف|گ|غ|ھ|ج|ك|ل|م|ن|ڭ|پ|ق|ر|س|ش|ت|ۋ|خ|ي|ز|ژ)ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1ئئ$2")
		.replace(/ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1")
		.replace(/ا/g, "A")
		.replace(/ە/g, "E")
		.replace(/ې/g, "Ë")
		.replace(/ى/g, "I")
		.replace(/و/g, "O")
		.replace(/ۆ/g, "Ö")
		.replace(/ۇ/g, "U")
		.replace(/ۈ/g, "Ü")

		.replace(/ب/g, "B")
		.replace(/ج/g, "J")
		.replace(/چ/g, "CH")
		.replace(/د/g, "D")
		.replace(/ف|ڧ/g, "F")
		.replace(/گ/g, "G")
		.replace(/غ/g, "GH")
		.replace(/ھ/g, "H")
		.replace(/ژ/g, "ZH")
		.replace(/ك/g, "K")
		.replace(/ل/g, "L")
		.replace(/م/g, "M")
		.replace(/ن/g, "N")
		.replace(/ڭ/g, "NG")
		.replace(/پ/g, "P")
		.replace(/ق/g, "Q")
		.replace(/ر/g, "R")
		.replace(/س/g, "S")
		.replace(/ش/g, "SH")
		.replace(/ت/g, "T")
		.replace(/ۋ/g, "W")
		.replace(/خ/g, "X")
		.replace(/ي/g, "Y")
		.replace(/ز/g, "Z")

		.replace(/ئ/g, "\u2019")

		.replace(/\u060c/g, "\u002c")
		.replace(/\u061f/g, "\u003f")
		.replace(/\u061b/g, "\u003b")
		.replace(/\u06d4/g, "\u002e")
		.replace(/\u0640/g, "")

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019\u00ab\u00bb\u2039\u203a'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value.replace(key, latinWords[key]);
	});
	latcta();
}

function acuteFix(car) {
	car = document.transcription.text2.value;
	car = car.replace(/É/g, "Ë")
		.replace(/é/g, "ë");
	return car;
}

function latarb() {
	document.transcription.text2.value = acuteFix(document.transcription.text2.value);
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/\u00b4/g, "\u2019")
		.replace(/\u02bc/g, "\u2019")
		.replace(/\u0027/g, "\u2019")

		.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|\u2019)(A|E|Ë|I|O|Ö|U|Ü)/g, "$1\u200c$2")
		.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|b|d|f|g|h|j|k|l|m|n|p|q|r|s|t|w|x|y|z|\u2019)(a|e|ë|i|o|ö|u|ü)/g, "$1\u200c$2")

		.replace(/(CH|Ch|ch)/g, "چ")
		.replace(/(GH|Gh|gh)/g, "غ")
		.replace(/(NG|Ng|ng)/g, "ڭ")
		.replace(/(SH|Sh|sh)/g, "ش")
		.replace(/(ZH|Zh|zh)/g, "ژ")

		.replace(/[Aa]/g, "ئا")
		.replace(/[Bb]/g, "ب")
		.replace(/[Dd]/g, "د")
		.replace(/[Ëë]/g, "ئې")
		.replace(/[Ee]/g, "ئە")
		.replace(/[Ff]/g, "ف")
		.replace(/[Gg]/g, "گ")
		.replace(/[Hh]/g, "ھ")
		.replace(/[Ii]/g, "ئى")
		.replace(/[Jj]/g, "ج")
		.replace(/[Kk]/g, "ك")
		.replace(/[Ll]/g, "ل")
		.replace(/[Mm]/g, "م")
		.replace(/[Nn]/g, "ن")
		.replace(/[Oo]/g, "ئو")
		.replace(/[Öö]/g, "ئۆ")
		.replace(/[Pp]/g, "پ")
		.replace(/[Qq]/g, "ق")
		.replace(/[Rr]/g, "ر")
		.replace(/[Ss]/g, "س")
		.replace(/[Tt]/g, "ت")
		.replace(/[Uu]/g, "ئۇ")
		.replace(/[Üü]/g, "ئۈ")
		.replace(/[Ww]/g, "ۋ")
		.replace(/[Xx]/g, "خ")
		.replace(/[Yy]/g, "ي")
		.replace(/[Zz]/g, "ز")
		.replace(/ئاللاھ/g, "ﷲ")

		.replace(/(گ|ڭ|س|ز)\u2019ھ/g, "$1ھ")
		.replace(/ن\u2019غ/g, "نغ")
		.replace(/\u2019/g, "ئ")
		.replace(/\u200cئ/g, "")

		.replace(/\u002c/g, "\u060c")
		.replace(/\u003f/g, "\u061f")
		.replace(/\u003b/g, "\u061b");
}

function handleDotlessI(text) {
	const consonants = "BCÇDFGHJKLMNÑPQRSŞTVXYZbcçdfghjklmnñpqrsştvxyz";
	const backVowels = "AOUaouı";
	const frontVowels = "ÄEİÖÜäeöü";
	const vowels = backVowels + frontVowels + "Ii"; // Combine all vowels for easy checking

	function getVowelType(char) {
		if (backVowels.includes(char)) return 'back';
		if (frontVowels.includes(char)) return 'front';
		return 'uncertain';
	}

	function findNextVowelWithKnownBackness(index, text) {
		// Search forward
		for (let i = index + 1; i < text.length; i++) {
			const type = getVowelType(text[i]);
			if (type !== 'uncertain') {
				return type;
			}
		}
		// Search backward if no forward match
		for (let i = index - 1; i >= 0; i--) {
			const type = getVowelType(text[i]);
			if (type !== 'uncertain') {
				return type;
			}
		}
		return null; // No known vowel type found
	}

	function transformWord(word) {
		let modifiedWord = word.split('');
		let lastKnownVowelBackness = null;

		// Start from the end of the word, find the last 'I' or 'i'
		for (let i = modifiedWord.length - 1; i >= 0; i--) {
			if (modifiedWord[i] === 'I' || modifiedWord[i] === 'i') {
				lastKnownVowelBackness = findNextVowelWithKnownBackness(i, modifiedWord.join(''));
				if (lastKnownVowelBackness === null && modifiedWord[i] === 'I') {
					modifiedWord[i] = 'İ'; // Default to 'İ' if 'I' is the only vowel and no known backness
				} else {
					modifiedWord[i] = modifiedWord[i] === 'I' ?
						(lastKnownVowelBackness === 'front' ? 'İ' : 'I') :
						(lastKnownVowelBackness === 'back' ? 'ı' : 'i');
				}
			}
		}

		return modifiedWord.join('');
	}

	let words = text.split(/([\s-]+)/);
	let transformedText = words.map(word => /^[\s-]+$/.test(word) ? word : transformWord(word));
	return transformedText.join('');
}

function latcta() {
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/é/g, "ë")
		.replace(/É/g, "Ë");
	document.transcription.text3.value = document.transcription.text2.value
		.replace(/[\u2019|\u02bc]/g, "\u0027")

		.replace(/gh/g, "ğ")
		.replace(/Gh/g, "Ğ")
		.replace(/GH/g, "Ğ")

		.replace(/sh/g, "ş")
		.replace(/Sh/g, "Ş")
		.replace(/SH/g, "Ş")

		.replace(/ch/g, "ç")
		.replace(/Ch/g, "Ç")
		.replace(/CH/g, "Ç")

		.replace(/j/g, "c")
		.replace(/J/g, "C")

		.replace(/zh/g, "j")
		.replace(/Zh/g, "J")
		.replace(/ZH/g, "J")

		.replace(/ng/g, "ñ")
		.replace(/Ng/g, "Ñ")
		.replace(/NG/g, "Ñ")

		.replace(/ñ'h/g, "ñh")
		.replace(/Ñ'h/g, "Ñh")
		.replace(/Ñ'H/g, "ÑH")

		.replace(/nğ/g, "ñh")
		.replace(/Nğ/g, "Ñh")
		.replace(/NĞ/g, "ÑH")

		.replace(/n'ğ/g, "nğ")
		.replace(/N'ğ/g, "Nğ")
		.replace(/N'Ğ/g, "NĞ")

		.replace(/g'h/g, "gh")
		.replace(/G'h/g, "Gh")
		.replace(/G'H/g, "GH")

		.replace(/s'h/g, "sh")
		.replace(/S'h/g, "Sh")
		.replace(/S'H/g, "SH")

		.replace(/z'h/g, "zh")
		.replace(/Z'h/g, "Zh")
		.replace(/Z'H/g, "ZH")

		.replace(/n'g/g, "ng")
		.replace(/N'g/g, "Ng")
		.replace(/N'G/g, "NG")

		.replace(/n'g'h/g, "ngh")
		.replace(/N'g'h/g, "Ngh")
		.replace(/N'G'h/g, "NGh")
		.replace(/N'G'H/g, "NGH")

		.replace(/e/g, "ä")
		.replace(/ë/g, "e")
		.replace(/é/g, "e")
		.replace(/w/g, "v")
		.replace(/E/g, "Ä")
		.replace(/Ë/g, "E")
		.replace(/É/g, "E")
		.replace(/W/g, "V")

		.replace(/(Ğ|Q|X|ğ|q|x)i/g, "$1ı")
		.replace(/(H|h|K|k)ı/g, "$1i")
		.replace(/i(ğ|q|x)/g, "ı$1")
		.replace(/ı(h|k)/g, "i$1");

	document.transcription.text3.value = handleDotlessI(document.transcription.text3.value);
}

function ctalat() {
	document.transcription.text2.value = document.transcription.text3.value
		.replace(/ngh/g, "n\u0027g\u0027h")
		.replace(/Ngh/g, "N\u0027g\u0027h")
		.replace(/NGh/g, "N\u0027G\u0027h")
		.replace(/NGH/g, "N\u0027G\u0027H")
		.replace(/ng/g, "n\u0027g")
		.replace(/gh/g, "g\u0027h")
		.replace(/nğ/g, "n\u0027gh")
		.replace(/sh/g, "s\u0027h")
		.replace(/zh/g, "z\u0027h")

		.replace(/Ng/g, "N\u0027g")
		.replace(/Nğ/g, "N\u0027gh")
		.replace(/Sh/g, "S\u0027h")
		.replace(/Zh/g, "Z\u0027h")
		.replace(/Gh/g, "G\u0027h")

		.replace(/NG/g, "N\u0027G")
		.replace(/GH/g, "G\u0027H")
		.replace(/NĞ/g, "N\u0027GH")
		.replace(/SH/g, "S\u0027H")
		.replace(/ZH/g, "Z\u0027H")

		.replace(/j/g, "zh")
		.replace(/c/g, "j")
		.replace(/ç/g, "ch")
		.replace(/e/g, "ë")
		.replace(/ä/g, "e")
		.replace(/ı/g, "i")
		.replace(/ğ/g, "gh")
		.replace(/ñ/g, "ng")
		.replace(/ş/g, "sh")
		.replace(/v/g, "w")
		.replace(/ŷ/g, "y")
		.replace(/J/g, "Zh")
		.replace(/C/g, "J")
		.replace(/Ç/g, "Ch")
		.replace(/E/g, "Ë")
		.replace(/Ä/g, "E")
		.replace(/İ/g, "I")
		.replace(/Ğ/g, "Gh")
		.replace(/Ñ/g, "NG")
		.replace(/Ş/g, "Sh")
		.replace(/V/g, "W")
		.replace(/Ŷ/g, "Y");
}

function cyrcta() {
	document.transcription.text3.value = document.transcription.text4.value

		.replace(/([АӘБВГҒДЕЖҖЗИЙКҚЛМНҢОӨПРСТУҮФХҺЧШЮЯ])Ж/g, "$1J")
		.replace(/([АӘБВГҒДЕЖҖЗИЙКҚЛМНҢОӨПРСТУҮФХҺЧШЮЯаәбвгғдежҗзийкқлмнңоөпрстуүфхһчшюя])ж/g, "$1j")

		.replace(/а/g, "a")
		.replace(/ә/g, "ä")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/ғ/g, "ğ")
		.replace(/д/g, "d")
		.replace(/е/g, "e")
		.replace(/ж/g, "ŷ")
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
		.replace(/ю/g, "yu")
		.replace(/я/g, "ya")
		.replace(/А/g, "A")
		.replace(/Ә/g, "Ä")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Ғ/g, "Ğ")
		.replace(/Д/g, "D")
		.replace(/Е/g, "E")
		.replace(/Ж/g, "Ŷ")
		.replace(/Җ/g, "C")
		.replace(/З/g, "Z")
		.replace(/И/g, "I")
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
		.replace(/Ю/g, "Yu")
		.replace(/Я/g, "Ya")
		.replace(/[Ъъ]/g, "\u0027")
		.replace(/«/g, "\u201c")
		.replace(/»/g, "\u201d")
		
		.replace(/([ĞQXğqx])i/g, "$1ı")
		.replace(/([HhKk])ı/g, "$1i")
		.replace(/i([ğqx])/g, "ı$1")
		.replace(/ı([hk])/g, "i$1");

	document.transcription.text3.value = handleDotlessI(document.transcription.text3.value);
}

function ctacyr() {
	document.transcription.text4.value = document.transcription.text3.value
		.replace(/A/g, "А")
		.replace(/Ä/g, "Ә")
		.replace(/B/g, "Б")
		.replace(/V/g, "В")
		.replace(/G/g, "Г")
		.replace(/Ğ/g, "Ғ")
		.replace(/D/g, "Д")
		.replace(/E/g, "Е")
		.replace(/[JŶ]/g, "Ж")
		.replace(/C/g, "Җ")
		.replace(/Z/g, "З")
		.replace(/[Iİ]/g, "И")
		.replace(/Y/g, "Й")
		.replace(/K/g, "К")
		.replace(/Q/g, "Қ")
		.replace(/L/g, "Л")
		.replace(/M/g, "М")
		.replace(/N/g, "Н")
		.replace(/Ñ/g, "Ң")
		.replace(/O/g, "О")
		.replace(/Ö/g, "Ө")
		.replace(/P/g, "П")
		.replace(/R/g, "Р")
		.replace(/S/g, "С")
		.replace(/T/g, "Т")
		.replace(/U/g, "У")
		.replace(/Ü/g, "Ү")
		.replace(/F/g, "Ф")
		.replace(/H/g, "Һ")
		.replace(/X/g, "Х")
		.replace(/Ç/g, "Ч")
		.replace(/Ş/g, "Ш")
		.replace(/a/g, "а")
		.replace(/ä/g, "ә")
		.replace(/b/g, "б")
		.replace(/v/g, "в")
		.replace(/g/g, "г")
		.replace(/ğ/g, "ғ")
		.replace(/d/g, "д")
		.replace(/[jŷ]/g, "ж")
		.replace(/c/g, "җ")
		.replace(/z/g, "з")
		.replace(/i/g, "и")
		.replace(/y/g, "й")
		.replace(/k/g, "к")
		.replace(/q/g, "қ")
		.replace(/l/g, "л")
		.replace(/m/g, "м")
		.replace(/n/g, "н")
		.replace(/ñ/g, "ң")
		.replace(/o/g, "о")
		.replace(/ö/g, "ө")
		.replace(/p/g, "п")
		.replace(/r/g, "р")
		.replace(/s/g, "с")
		.replace(/t/g, "т")
		.replace(/u/g, "у")
		.replace(/ü/g, "ү")
		.replace(/f/g, "ф")
		.replace(/h/g, "һ")
		.replace(/x/g, "х")
		.replace(/ç/g, "ч")
		.replace(/ş/g, "ш")
		.replace(/[ıi]/g, "и")
		.replace(/Й[Аа]/g, "Я")
		.replace(/Й[Уу]/g, "Ю")
		.replace(/йа/g, "я")
		.replace(/йу/g, "ю")
		.replace(/\u201c/g, "«")
		.replace(/\u201d/g, "»")
		.replace(/[\u0027\u2018\u2019]/g, "Ъ")
		.replace(/Ъ(\p{Ll})/ug, "ъ$1");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}

function copy3() {
	navigator.clipboard.writeText(document.transcription.text3.value);
}

function copy4() {
	navigator.clipboard.writeText(document.transcription.text4.value);
}
