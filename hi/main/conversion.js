var car;

function realizeFirstValidSchwa(text) {
	return text.replace(/\p{sc=Devanagari}+/gu, function(word) {
		// If word starts with a standalone vowel, skip
		if (/^[अआइईउऊएऐओऔऋ]/.test(word)) return word;

		// If the first consonant is followed by a vowel sign or halant, skip
		if (/^[क-हक़-य़](ा|ि|ी|ु|ू|े|ै|ो|ौ|ृ|्)/.test(word)) return word;

		// Else: mark first schwa as realized
		return word.replace(/^([क-हक़-य़])/, "$1\u200c\u200b");
	});
}

function cyrlat() {
	let car = document.transcription.text1.value;

	// Normalize to decomposed form
	car = car.normalize('NFD');

	// Realize first valid schwa before any transliteration
	car = realizeFirstValidSchwa(car);

	// Protect Latin-script words
	let latinWords = {};
	let index = 0;
	car = car.replace(/\p{sc=Latin}+/ug, function(match) {
		let key = `__placeholder${index}__`;
		latinWords[key] = match;
		index++;
		return key;
	});

	// Nasal handling
	car = car.replace(/(ं|ँ)(क|ख|ग|घ|ह)/g, "\u200bN$2");
	car = car.replace(/(ं|ँ)(त|थ|द|ध|ल|स)/g, "\u200bN$2");
	car = car.replace(/(ं|ँ)(प|फ|ब|भ|व)/g, "\u200bM$2");
	car = car.replace(/(ं|ँ)(?![\u093e-\u094c])/g, "\u200bN");

	// Remove schwa before halant
	car = car.replace(/\u094d/g, "");

	// Remove schwa before matras
	car = car.replace(/\u093f|\u0941|\u0943|\u0947|\u094b|\u093e|\u0940|\u0942|\u0948|\u094c/g, "");

	// Consonant transliteration block
	// [Insert full consonant mapping block here, as previously defined with \u200bX\u200c or \u200bX\u200c\u200b based on schwa presence]
	// For brevity in this preview, that block should be copy-pasted fully from earlier

	// Vowel transliteration
	car = car.replace(/अ/g, "\u200bA");
	car = car.replace(/आ/g, "\u200bAA");
	car = car.replace(/इ/g, "\u200bI");
	car = car.replace(/ई/g, "\u200bEE");
	car = car.replace(/उ/g, "\u200bU");
	car = car.replace(/ऊ/g, "\u200bOO");
	car = car.replace(/ए/g, "\u200bE");
	car = car.replace(/ऐ/g, "\u200bAI");
	car = car.replace(/ओ/g, "\u200bO");
	car = car.replace(/औ/g, "\u200bAU");
	car = car.replace(/ऋ/g, "\u200bRI");

	// Matras (handled after schwa stripping)
	car = car.replace(/ि/g, "I");
	car = car.replace(/ु/g, "U");
	car = car.replace(/ृ/g, "RI");
	car = car.replace(/े/g, "E");
	car = car.replace(/ो/g, "O");
	car = car.replace(/ा/g, "AA");
	car = car.replace(/ी/g, "EE");
	car = car.replace(/ू/g, "OO");
	car = car.replace(/ै/g, "AI");
	car = car.replace(/ौ/g, "AU");

	// Visarga
	car = car.replace(/ः/g, "\u200bH");

	// Optional cluster-breaking step would go here

	// Realize and remove schwas
	car = car.replace(/\u200c\u200b/g, "A"); // realized schwas
	car = car.replace(/\u200c/g, "");        // deleted schwas
	car = car.replace(/\u200b/g, "");        // remove ZWSPs

	// Punctuation and cleanup
	car = car.replace(/\u0964/g, ".");
	car = car.replace(/\u0965/g, "");
	car = car.normalize('NFC');
	car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'\"()]+)/gu, function(_, first, second) {
		return first + second.toLowerCase();
	});

	// Restore Latin placeholders
	Object.keys(latinWords).forEach(key => {
		car = car.replace(key, latinWords[key]);
	});

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
