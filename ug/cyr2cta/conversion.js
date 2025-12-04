var car;

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

function cyrlat() {
	car = document.transcription.text1.value;

	car = car.replace(/([АӘБВГҒДЕЖҖЗИЙКҚЛМНҢОӨПРСТУҮФХҺЧШЮЯ])Ж/g, "$1J");
	car = car.replace(/([АӘБВГҒДЕЖҖЗИЙКҚЛМНҢОӨПРСТУҮФХҺЧШЮЯаәбвгғдежҗзийкқлмнңоөпрстуүфхһчшюя])ж/g, "$1j");

	car = car.replace(/а/g, "a");
	car = car.replace(/ә/g, "ä");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/ғ/g, "ğ");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "e");
	car = car.replace(/ж/g, "ŷ");
	car = car.replace(/җ/g, "c");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/қ/g, "q");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/ң/g, "ñ");
	car = car.replace(/о/g, "o");
	car = car.replace(/ө/g, "ö");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ү/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/һ/g, "h");
	car = car.replace(/ч/g, "ç");
	car = car.replace(/ш/g, "ş");
	car = car.replace(/ю/g, "yu");
	car = car.replace(/я/g, "ya");
	car = car.replace(/А/g, "A");
	car = car.replace(/Ә/g, "Ä");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Ғ/g, "Ğ");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ж/g, "Ŷ");
	car = car.replace(/Җ/g, "C");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Қ/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/Ң/g, "Ñ");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ө/g, "Ö");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ү/g, "Ü");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Һ/g, "H");
	car = car.replace(/Ч/g, "Ç");
	car = car.replace(/Ш/g, "Ş");
	car = car.replace(/Ю/g, "Yu");
	car = car.replace(/Я/g, "Ya");
	car = car.replace(/«/g, "\u201c");
	car = car.replace(/»/g, "\u201d");
	
	car = handleDotlessI(car);
	document.transcription.text2.value = car;
}

function latcyr() {
	car = document.transcription.text2.value;
	car = car.replace(/A/g, "А");
	car = car.replace(/Ä/g, "Ә");
	car = car.replace(/B/g, "Б");
	car = car.replace(/V/g, "В");
	car = car.replace(/G/g, "Г");
	car = car.replace(/Ğ/g, "Ғ");
	car = car.replace(/D/g, "Д");
	car = car.replace(/E/g, "Е");
	car = car.replace(/J|Ŷ/g, "Ж");
	car = car.replace(/C/g, "Җ");
	car = car.replace(/Z/g, "З");
	car = car.replace(/I|İ/g, "И");
	car = car.replace(/Y/g, "Й");
	car = car.replace(/K/g, "К");
	car = car.replace(/Q/g, "Қ");
	car = car.replace(/L/g, "Л");
	car = car.replace(/M/g, "М");
	car = car.replace(/N/g, "Н");
	car = car.replace(/Ñ/g, "Ң");
	car = car.replace(/O/g, "О");
	car = car.replace(/Ö/g, "Ө");
	car = car.replace(/P/g, "П");
	car = car.replace(/R/g, "Р");
	car = car.replace(/S/g, "С");
	car = car.replace(/T/g, "Т");
	car = car.replace(/U/g, "У");
	car = car.replace(/Ü/g, "Ү");
	car = car.replace(/F/g, "Ф");
	car = car.replace(/H/g, "Һ");
	car = car.replace(/X/g, "Х");
	car = car.replace(/Ç/g, "Ч");
	car = car.replace(/Ş/g, "Ш");
	car = car.replace(/a/g, "а");
	car = car.replace(/ä/g, "ә");
	car = car.replace(/b/g, "б");
	car = car.replace(/v/g, "в");
	car = car.replace(/g/g, "г");
	car = car.replace(/ğ/g, "ғ");
	car = car.replace(/d/g, "д");
	car = car.replace(/j|ŷ/g, "ж");
	car = car.replace(/c/g, "җ");
	car = car.replace(/z/g, "з");
	car = car.replace(/i/g, "и");
	car = car.replace(/y/g, "й");
	car = car.replace(/k/g, "к");
	car = car.replace(/q/g, "қ");
	car = car.replace(/l/g, "л");
	car = car.replace(/m/g, "м");
	car = car.replace(/n/g, "н");
	car = car.replace(/ñ/g, "ң");
	car = car.replace(/o/g, "о");
	car = car.replace(/ö/g, "ө");
	car = car.replace(/p/g, "п");
	car = car.replace(/r/g, "р");
	car = car.replace(/s/g, "с");
	car = car.replace(/t/g, "т");
	car = car.replace(/u/g, "у");
	car = car.replace(/ü/g, "ү");
	car = car.replace(/f/g, "ф");
	car = car.replace(/h/g, "һ");
	car = car.replace(/x/g, "х");
	car = car.replace(/ç/g, "ч");
	car = car.replace(/ş/g, "ш");
	car = car.replace(/ı|i/g, "и");
	car = car.replace(/Й[Аа]/g, "Я");
	car = car.replace(/Й[Уу]/g, "Ю");
	car = car.replace(/йа/g, "я");
	car = car.replace(/йу/g, "ю");
	car = car.replace(/\u201c/g, "«");
	car = car.replace(/\u201d/g, "»");
	document.transcription.text1.value = car;
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
