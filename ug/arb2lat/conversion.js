var car;

function cyrlat() {
	car = document.transcription.text1.value;

	let latinWords = {};
	let index = 0;
	car = car.replace(/\p{sc=Latin}+/ug, function(match) {
		let key = `__placeholder${index}__`;
		latinWords[key] = match;
		index++;
		return key;
	});

	car = car.replace(/(الله|ﷲ)/g, "ئاللاھ");

	car = car.replace(/نگ/g, "نئگ");
	car = car.replace(/گھ/g, "گئھ");
	car = car.replace(/نغ/g, "نئغ");
	car = car.replace(/سھ/g, "سئھ");
	car = car.replace(/زھ/g, "زئھ");

	car = car.replace(/(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1$2");
	car = car.replace(/(ب|چ|د|ف|گ|غ|ھ|ج|ك|ل|م|ن|ڭ|پ|ق|ر|س|ش|ت|ۋ|خ|ي|ز|ژ)ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1ئئ$2");
	car = car.replace(/ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1");
	car = car.replace(/ا/g, "A");
	car = car.replace(/ە/g, "E");
	car = car.replace(/ې/g, "Ë");
	car = car.replace(/ى/g, "I");
	car = car.replace(/و/g, "O");
	car = car.replace(/ۆ/g, "Ö");
	car = car.replace(/ۇ/g, "U");
	car = car.replace(/ۈ/g, "Ü");

	car = car.replace(/ب/g, "B");
	car = car.replace(/ج/g, "J");
	car = car.replace(/چ/g, "CH");
	car = car.replace(/د/g, "D");
	car = car.replace(/ف|ڧ/g, "F");
	car = car.replace(/گ/g, "G");
	car = car.replace(/غ/g, "GH");
	car = car.replace(/ھ/g, "H");
	car = car.replace(/ژ/g, "ZH");
	car = car.replace(/ك/g, "K");
	car = car.replace(/ل/g, "L");
	car = car.replace(/م/g, "M");
	car = car.replace(/ن/g, "N");
	car = car.replace(/ڭ/g, "NG");
	car = car.replace(/پ/g, "P");
	car = car.replace(/ق/g, "Q");
	car = car.replace(/ر/g, "R");
	car = car.replace(/س/g, "S");
	car = car.replace(/ش/g, "SH");
	car = car.replace(/ت/g, "T");
	car = car.replace(/ۋ/g, "W");
	car = car.replace(/خ/g, "X");
	car = car.replace(/ي/g, "Y");
	car = car.replace(/ز/g, "Z");

	car = car.replace(/ئ/g, "\u2019");

	car = car.replace(/\u060c/g, "\u002c");
	car = car.replace(/\u061f/g, "\u003f");
	car = car.replace(/\u061b/g, "\u003b");
	car = car.replace(/\u06d4/g, "\u002e");
	car = car.replace(/\u0640/g, "");

	car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019\u00ab\u00bb\u2039\u203a'"()]+)/gu, function(_, first, second) {
		return first + second.toLowerCase();
	});

	Object.keys(latinWords).forEach(key => {
		car = car.replace(key, latinWords[key]);
	});
	document.transcription.text2.value = car;
	latcta();
}

function acuteFix(car) {
	car = document.transcription.text2.value;
	car = car.replace(/É/g, "Ë")
		.replace(/é/g, "ë");
	return car;
}

function latcyr() {
	document.transcription.text2.value = acuteFix(document.transcription.text2.value);
	car = document.transcription.text2.value;
	car = car.replace(/\u00b4/g, "\u2019");
	car = car.replace(/\u02bc/g, "\u2019");
	car = car.replace(/\u0027/g, "\u2019");

	car = car.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|\u2019)(A|E|Ë|I|O|Ö|U|Ü)/g, "$1\u200c$2");
	car = car.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|b|d|f|g|h|j|k|l|m|n|p|q|r|s|t|w|x|y|z|\u2019)(a|e|ë|i|o|ö|u|ü)/g, "$1\u200c$2");

	car = car.replace(/(CH|Ch|ch)/g, "چ");
	car = car.replace(/(GH|Gh|gh)/g, "غ");
	car = car.replace(/(NG|Ng|ng)/g, "ڭ");
	car = car.replace(/(SH|Sh|sh)/g, "ش");
	car = car.replace(/(ZH|Zh|zh)/g, "ژ");

	car = car.replace(/[Aa]/g, "ئا");
	car = car.replace(/[Bb]/g, "ب");
	car = car.replace(/[Dd]/g, "د");
	car = car.replace(/[Ëë]/g, "ئې");
	car = car.replace(/[Ee]/g, "ئە");
	car = car.replace(/[Ff]/g, "ف");
	car = car.replace(/[Gg]/g, "گ");
	car = car.replace(/[Hh]/g, "ھ");
	car = car.replace(/[Ii]/g, "ئى");
	car = car.replace(/[Jj]/g, "ج");
	car = car.replace(/[Kk]/g, "ك");
	car = car.replace(/[Ll]/g, "ل");
	car = car.replace(/[Mm]/g, "م");
	car = car.replace(/[Nn]/g, "ن");
	car = car.replace(/[Oo]/g, "ئو");
	car = car.replace(/[Öö]/g, "ئۆ");
	car = car.replace(/[Pp]/g, "پ");
	car = car.replace(/[Qq]/g, "ق");
	car = car.replace(/[Rr]/g, "ر");
	car = car.replace(/[Ss]/g, "س");
	car = car.replace(/[Tt]/g, "ت");
	car = car.replace(/[Uu]/g, "ئۇ");
	car = car.replace(/[Üü]/g, "ئۈ");
	car = car.replace(/[Ww]/g, "ۋ");
	car = car.replace(/[Xx]/g, "خ");
	car = car.replace(/[Yy]/g, "ي");
	car = car.replace(/[Zz]/g, "ز");
	car = car.replace(/ئاللاھ/g, "ﷲ");

	car = car.replace(/(گ|ڭ|س|ز)\u2019ھ/g, "$1ھ")
	car = car.replace(/ن\u2019غ/g, "نغ");
	car = car.replace(/\u2019/g, "ئ");
	car = car.replace(/\u200cئ/g, "");

	car = car.replace(/\u002c/g, "\u060c");
	car = car.replace(/\u003f/g, "\u061f");
	car = car.replace(/\u003b/g, "\u061b");
	car = car.replace(/\u002e/g, "\u06d4");
	document.transcription.text1.value = car;
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

	let words = text.split(/(\s+)/);
	let transformedText = words.map(word => /\s/.test(word) ? word : transformWord(word));
	return transformedText.join('');
}

function latcta() {
	document.transcription.text2.value = document.transcription.text2.value.replace(/é/g, "ë")
		.replace(/É/g, "Ë");
	car = document.transcription.text2.value;
	car = car.replace(/[\u2019|\u02bc]/g, "\u0027");

	car = car.replace(/gh/g, "ğ");
	car = car.replace(/Gh/g, "Ğ");
	car = car.replace(/GH/g, "Ğ");

	car = car.replace(/sh/g, "ş");
	car = car.replace(/Sh/g, "Ş");
	car = car.replace(/SH/g, "Ş");

	car = car.replace(/ch/g, "ç");
	car = car.replace(/Ch/g, "Ç");
	car = car.replace(/CH/g, "Ç");

	car = car.replace(/j/g, "c");
	car = car.replace(/J/g, "C");

	car = car.replace(/zh/g, "j");
	car = car.replace(/Zh/g, "J");
	car = car.replace(/ZH/g, "J");

	car = car.replace(/ng/g, "ñ");
	car = car.replace(/Ng/g, "Ñ");
	car = car.replace(/NG/g, "Ñ");

	car = car.replace(/ñ'h/g, "ñh");
	car = car.replace(/Ñ'h/g, "Ñh");
	car = car.replace(/Ñ'H/g, "ÑH");

	car = car.replace(/nğ/g, "ñh");
	car = car.replace(/Nğ/g, "Ñh");
	car = car.replace(/NĞ/g, "ÑH");

	car = car.replace(/n'ğ/g, "nğ");
	car = car.replace(/N'ğ/g, "Nğ");
	car = car.replace(/N'Ğ/g, "NĞ");

	car = car.replace(/g'h/g, "gh");
	car = car.replace(/G'h/g, "Gh");
	car = car.replace(/G'H/g, "GH");

	car = car.replace(/s'h/g, "sh");
	car = car.replace(/S'h/g, "Sh");
	car = car.replace(/S'H/g, "SH");

	car = car.replace(/z'h/g, "zh");
	car = car.replace(/Z'h/g, "Zh");
	car = car.replace(/Z'H/g, "ZH");

	car = car.replace(/n'g/g, "ng");
	car = car.replace(/N'g/g, "Ng");
	car = car.replace(/N'G/g, "NG");

	car = car.replace(/n'g'h/g, "ngh");
	car = car.replace(/N'g'h/g, "Ngh");
	car = car.replace(/N'G'h/g, "NGh");
	car = car.replace(/N'G'H/g, "NGH");

	car = car.replace(/e/g, "ä");
	car = car.replace(/ë/g, "e");
	car = car.replace(/é/g, "e");
	car = car.replace(/w/g, "v");
	car = car.replace(/E/g, "Ä");
	car = car.replace(/Ë/g, "E");
	car = car.replace(/É/g, "E");
	car = car.replace(/W/g, "V");

	car = car.replace(/(Ğ|Q|X|ğ|q|x)i/g, "$1ı");
	car = car.replace(/(H|h|K|k)ı/g, "$1i");
	car = car.replace(/i(ğ|q|x)/g, "ı$1");
	car = car.replace(/ı(h|k)/g, "i$1");

	car = handleDotlessI(car);
	document.transcription.text3.value = car;
}

function ctalat() {
	car = document.transcription.text3.value;
	car = car.replace(/ngh/g, "n'g'h");
	car = car.replace(/Ngh/g, "N'g'h");
	car = car.replace(/NGh/g, "N'G'h");
	car = car.replace(/NGH/g, "N'G'H");
	car = car.replace(/ng/g, "n'g");
	car = car.replace(/gh/g, "g'h");
	car = car.replace(/nğ/g, "n'gh");
	car = car.replace(/sh/g, "s'h");
	car = car.replace(/zh/g, "z'h");

	car = car.replace(/Ng/g, "N'g");
	car = car.replace(/Nğ/g, "N'gh");
	car = car.replace(/Sh/g, "S'h");
	car = car.replace(/Zh/g, "Z'h");
	car = car.replace(/Gh/g, "G'h");

	car = car.replace(/NG/g, "N'G");
	car = car.replace(/GH/g, "G'H");
	car = car.replace(/NĞ/g, "N'GH");
	car = car.replace(/SH/g, "S'H");
	car = car.replace(/ZH/g, "Z'H");

	car = car.replace(/j/g, "zh");
	car = car.replace(/c/g, "j");
	car = car.replace(/ç/g, "ch");
	car = car.replace(/e/g, "ë");
	car = car.replace(/ä/g, "e");
	car = car.replace(/ı/g, "i");
	car = car.replace(/ğ/g, "gh");
	car = car.replace(/ñ/g, "ng");
	car = car.replace(/ş/g, "sh");
	car = car.replace(/v/g, "w");
	car = car.replace(/J/g, "Zh");
	car = car.replace(/C/g, "J");
	car = car.replace(/Ç/g, "Ch");
	car = car.replace(/E/g, "Ë");
	car = car.replace(/Ä/g, "E");
	car = car.replace(/İ/g, "I");
	car = car.replace(/Ğ/g, "Gh");
	car = car.replace(/Ñ/g, "NG");
	car = car.replace(/Ş/g, "Sh");
	car = car.replace(/V/g, "W");
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

function copy3() {
	textRange = document.transcription.text3.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}
