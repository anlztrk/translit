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
	document.transcription.text2.value = document.transcription.text1.value

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
		.replace(/«/g, "\u201c")
		.replace(/»/g, "\u201d");

	document.transcription.text2.value = handleDotlessI(document.transcription.text2.value);
}

function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/A/g, "А")
		.replace(/Ä/g, "Ә")
		.replace(/B/g, "Б")
		.replace(/V/g, "В")
		.replace(/G/g, "Г")
		.replace(/Ğ/g, "Ғ")
		.replace(/D/g, "Д")
		.replace(/E/g, "Е")
		.replace(/J|Ŷ/g, "Ж")
		.replace(/C/g, "Җ")
		.replace(/Z/g, "З")
		.replace(/I|İ/g, "И")
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
		.replace(/j|ŷ/g, "ж")
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
		.replace(/ı|i/g, "и")
		.replace(/Й[Аа]/g, "Я")
		.replace(/Й[Уу]/g, "Ю")
		.replace(/йа/g, "я")
		.replace(/йу/g, "ю")
		.replace(/\u201c/g, "«")
		.replace(/\u201d/g, "»");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}