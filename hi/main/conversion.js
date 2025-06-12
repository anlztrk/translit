var car;

function realizeFirstValidSchwa(text) {
	return text.replace(/[\u0900-\u097F]+/g, function(word) {
		// If word starts with a standalone vowel, skip
		if (/^[अआइईउऊएऐओऔऋ]/.test(word)) return word;

		// If the first consonant is followed by a vowel sign or halant, skip
		if (/^[क-हक़-य़](ा|ि|ी|ु|ू|े|ै|ो|ौ|ृ|्)/.test(word)) return word;

		// Else: mark first schwa as realized
		return word.replace(/^([क-हक़-य़])/, "$1\u200c\u200b");
	});
}

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.normalize('NFD');
	car = realizeFirstValidSchwa(car);

	// protect Latin-script words
	let latinWords = {},
		idx = 0;
	car = car.replace(/[A-Za-z]+/g, m => {
		let k = `__p${idx}__`;
		latinWords[k] = m;
		idx++;
		return k;
	});

	// Nasal handling
	car = car.replace(/(ं|ँ)(क|ख|ग|घ|ह)/g, "\u200bN$2");
	car = car.replace(/(ं|ँ)(त|थ|द|ध|ल|स)/g, "\u200bN$2");
	car = car.replace(/(ं|ँ)(प|फ|ब|भ|व)/g, "\u200bM$2");
	car = car.replace(/(ं|ँ)(?![\u093e-\u094c])/g, "\u200bN");

	// only strip out the ZWJ marker, not the script signs themselves
	car = car.replace(/\u200c(?=\u094d)/g, "");
	car = car.replace(/\u200c(?=[\u093e\u093f\u0940\u0941\u0942\u0947\u0948\u094b\u094c])/g, "");

	// Consonant transliteration block
	// Consonants with nukta
	car = car.replace(/क़\u200c\u200b/g, "\u200bQ\u200c\u200b");
	car = car.replace(/क़/g, "\u200bQ\u200c");

	car = car.replace(/ख़\u200c\u200b/g, "\u200bKH\u200c\u200b");
	car = car.replace(/ख़/g, "\u200bKH\u200c");

	car = car.replace(/ग़\u200c\u200b/g, "\u200bGH\u200c\u200b");
	car = car.replace(/ग़/g, "\u200bGH\u200c");

	car = car.replace(/ज़\u200c\u200b/g, "\u200bZ\u200c\u200b");
	car = car.replace(/ज़/g, "\u200bZ\u200c");

	car = car.replace(/झ़\u200c\u200b/g, "\u200bZH\u200c\u200b");
	car = car.replace(/झ़/g, "\u200bZH\u200c");

	car = car.replace(/फ़\u200c\u200b/g, "\u200bF\u200c\u200b");
	car = car.replace(/फ़/g, "\u200bF\u200c");

	car = car.replace(/ड़\u200c\u200b/g, "\u200bR\u200c\u200b");
	car = car.replace(/ड़/g, "\u200bR\u200c");

	car = car.replace(/ढ़\u200c\u200b/g, "\u200bRH\u200c\u200b");
	car = car.replace(/ढ़/g, "\u200bRH\u200c");

	// Ligature: ज्ञ = GY
	car = car.replace(/ज्ञ\u200c\u200b/g, "\u200bGY\u200c\u200b");
	car = car.replace(/ज्ञ/g, "\u200bGY\u200c");

	// Regular consonants
	car = car.replace(/क\u200c\u200b/g, "\u200bK\u200c\u200b");
	car = car.replace(/क/g, "\u200bK\u200c");

	car = car.replace(/ख\u200c\u200b/g, "\u200bKH\u200c\u200b");
	car = car.replace(/ख/g, "\u200bKH\u200c");

	car = car.replace(/ग\u200c\u200b/g, "\u200bG\u200c\u200b");
	car = car.replace(/ग/g, "\u200bG\u200c");

	car = car.replace(/घ\u200c\u200b/g, "\u200bGH\u200c\u200b");
	car = car.replace(/घ/g, "\u200bGH\u200c");

	car = car.replace(/ङ\u200c\u200b/g, "\u200bN\u200c\u200b");
	car = car.replace(/ङ/g, "\u200bN\u200c");

	car = car.replace(/च\u200c\u200b/g, "\u200bCH\u200c\u200b");
	car = car.replace(/च/g, "\u200bCH\u200c");

	car = car.replace(/छ\u200c\u200b/g, "\u200bCHH\u200c\u200b");
	car = car.replace(/छ/g, "\u200bCHH\u200c");

	car = car.replace(/ज\u200c\u200b/g, "\u200bJ\u200c\u200b");
	car = car.replace(/ज/g, "\u200bJ\u200c");

	car = car.replace(/झ\u200c\u200b/g, "\u200bJH\u200c\u200b");
	car = car.replace(/झ/g, "\u200bJH\u200c");

	car = car.replace(/ञ\u200c\u200b/g, "\u200bN\u200c\u200b");
	car = car.replace(/ञ/g, "\u200bN\u200c");

	car = car.replace(/ट\u200c\u200b/g, "\u200bT\u200c\u200b");
	car = car.replace(/ट/g, "\u200bT\u200c");

	car = car.replace(/ठ\u200c\u200b/g, "\u200bTH\u200c\u200b");
	car = car.replace(/ठ/g, "\u200bTH\u200c");

	car = car.replace(/ड\u200c\u200b/g, "\u200bD\u200c\u200b");
	car = car.replace(/ड/g, "\u200bD\u200c");

	car = car.replace(/ढ\u200c\u200b/g, "\u200bDH\u200c\u200b");
	car = car.replace(/ढ/g, "\u200bDH\u200c");

	car = car.replace(/ण\u200c\u200b/g, "\u200bN\u200c\u200b");
	car = car.replace(/ण/g, "\u200bN\u200c");

	car = car.replace(/त\u200c\u200b/g, "\u200bT\u200c\u200b");
	car = car.replace(/त/g, "\u200bT\u200c");

	car = car.replace(/थ\u200c\u200b/g, "\u200bTH\u200c\u200b");
	car = car.replace(/थ/g, "\u200bTH\u200c");

	car = car.replace(/द\u200c\u200b/g, "\u200bD\u200c\u200b");
	car = car.replace(/द/g, "\u200bD\u200c");

	car = car.replace(/ध\u200c\u200b/g, "\u200bDH\u200c\u200b");
	car = car.replace(/ध/g, "\u200bDH\u200c");

	car = car.replace(/न\u200c\u200b/g, "\u200bN\u200c\u200b");
	car = car.replace(/न/g, "\u200bN\u200c");

	car = car.replace(/प\u200c\u200b/g, "\u200bP\u200c\u200b");
	car = car.replace(/प/g, "\u200bP\u200c");

	car = car.replace(/फ\u200c\u200b/g, "\u200bPH\u200c\u200b");
	car = car.replace(/फ/g, "\u200bPH\u200c");

	car = car.replace(/ब\u200c\u200b/g, "\u200bB\u200c\u200b");
	car = car.replace(/ब/g, "\u200bB\u200c");

	car = car.replace(/भ\u200c\u200b/g, "\u200bBH\u200c\u200b");
	car = car.replace(/भ/g, "\u200bBH\u200c");

	car = car.replace(/म\u200c\u200b/g, "\u200bM\u200c\u200b");
	car = car.replace(/म/g, "\u200bM\u200c");

	car = car.replace(/य\u200c\u200b/g, "\u200bY\u200c\u200b");
	car = car.replace(/य/g, "\u200bY\u200c");

	car = car.replace(/र\u200c\u200b/g, "\u200bR\u200c\u200b");
	car = car.replace(/र/g, "\u200bR\u200c");

	car = car.replace(/ल\u200c\u200b/g, "\u200bL\u200c\u200b");
	car = car.replace(/ल/g, "\u200bL\u200c");

	car = car.replace(/व\u200c\u200b/g, "\u200bW\u200c\u200b");
	car = car.replace(/व/g, "\u200bW\u200c");

	car = car.replace(/श\u200c\u200b/g, "\u200bSH\u200c\u200b");
	car = car.replace(/श/g, "\u200bSH\u200c");

	car = car.replace(/ष\u200c\u200b/g, "\u200bSH\u200c\u200b");
	car = car.replace(/ष/g, "\u200bSH\u200c");

	car = car.replace(/स\u200c\u200b/g, "\u200bS\u200c\u200b");
	car = car.replace(/स/g, "\u200bS\u200c");

	car = car.replace(/ह\u200c\u200b/g, "\u200bH\u200c\u200b");
	car = car.replace(/ह/g, "\u200bH\u200c");

	car = car.replace(/ळ\u200c\u200b/g, "\u200bL\u200c\u200b");
	car = car.replace(/ळ/g, "\u200bL\u200c");

	car = car.replace(/व़\u200c\u200b/g, "\u200bW\u200c\u200b");
	car = car.replace(/व़/g, "\u200bW\u200c");

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
	car = car.replace(/\u200c\u200b/g, "A");
	car = car.replace(/\u200c/g, "");
	car = car.replace(/\u200b/g, "");

	// punctuation / normalize
	car = car.normalize('NFC');

	// lowercase rest (cross-browser):
	car = car.replace(
		/([\w]|__placeholder\d+__)([A-Za-z0-9\t ,;\-\u2010\u201c\u201d\u2018\u2019'"()]+)/g,
		(_, first, rest) => first + rest.toLowerCase()
	);

	// restore Latin
	for (let k in latinWords) car = car.replace(k, latinWords[k]);

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
