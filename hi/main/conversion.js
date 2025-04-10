var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.normalize('NFD');

	let latinWords = {};
	let index = 0;
	car = car.replace(/\p{sc=Latin}+/ug, function(match) {
		let key = `__placeholder${index}__`;
		latinWords[key] = match;
		index++;
		return key;
	});

	// Nasal + consonant rules
	car = car.replace(/(ं|ँ)(क|ख|ग|घ|ह)/g, "N$2");
	car = car.replace(/(ं|ँ)(त|थ|द|ध|ल|स)/g, "N$2");
	car = car.replace(/(ं|ँ)(प|फ|ब|भ|व)/g, "M$2");
	car = car.replace(/(ं|ँ)(?![\u093e-\u094c])/g, "N");

	// Special consonants with nukta
	car = car.replace(/क़/g, "\u200bQ\u200c");
	car = car.replace(/ख़/g, "\u200bKH\u200c");
	car = car.replace(/ग़/g, "\u200bGH\u200c");
	car = car.replace(/ज़/g, "\u200bZ\u200c");
	car = car.replace(/झ़/g, "\u200bZH\u200c");
	car = car.replace(/फ़/g, "\u200bF\u200c");
	car = car.replace(/ड़/g, "\u200bR\u200c");
	car = car.replace(/ढ़/g, "\u200bRH\u200c");
	car = car.replace(/ज्ञ/g, "\u200bGY\u200c");

	// Regular consonants
	car = car.replace(/क/g, "\u200bK\u200c");
	car = car.replace(/ख/g, "\u200bKH\u200c");
	car = car.replace(/ग/g, "\u200bG\u200c");
	car = car.replace(/घ/g, "\u200bGH\u200c");
	car = car.replace(/ङ/g, "\u200bN\u200c");
	car = car.replace(/ह/g, "\u200bH\u200c");
	car = car.replace(/च/g, "\u200bCH\u200c");
	car = car.replace(/छ/g, "\u200bCHH\u200c");
	car = car.replace(/ज/g, "\u200bJ\u200c");
	car = car.replace(/झ/g, "\u200bJH\u200c");
	car = car.replace(/ञ/g, "\u200bN\u200c");
	car = car.replace(/य/g, "\u200bY\u200c");
	car = car.replace(/श/g, "\u200bSH\u200c");
	car = car.replace(/ट/g, "\u200bT\u200c");
	car = car.replace(/ठ/g, "\u200bTH\u200c");
	car = car.replace(/ड/g, "\u200bD\u200c");
	car = car.replace(/ढ/g, "\u200bDH\u200c");
	car = car.replace(/ण/g, "\u200bN\u200c");
	car = car.replace(/र/g, "\u200bR\u200c");
	car = car.replace(/ष/g, "\u200bSH\u200c");
	car = car.replace(/त/g, "\u200bT\u200c");
	car = car.replace(/थ/g, "\u200bTH\u200c");
	car = car.replace(/द/g, "\u200bD\u200c");
	car = car.replace(/ध/g, "\u200bDH\u200c");
	car = car.replace(/न/g, "\u200bN\u200c");
	car = car.replace(/ल/g, "\u200bL\u200c");
	car = car.replace(/स/g, "\u200bS\u200c");
	car = car.replace(/प/g, "\u200bP\u200c");
	car = car.replace(/फ/g, "\u200bPH\u200c");
	car = car.replace(/ब/g, "\u200bB\u200c");
	car = car.replace(/भ/g, "\u200bBH\u200c");
	car = car.replace(/म/g, "\u200bM\u200c");
	car = car.replace(/व/g, "\u200bW\u200c");
	car = car.replace(/ळ/g, "\u200bL\u200c");
	car = car.replace(/व़/g, "\u200bW\u200c");

	// Independent vowels
	car = car.replace(/अ/g, "\u200bA");
	car = car.replace(/इ/g, "\u200bI");
	car = car.replace(/उ/g, "\u200bU");
	car = car.replace(/ऋ/g, "\u200bRI");
	car = car.replace(/ए/g, "\u200bE");
	car = car.replace(/ओ/g, "\u200bO");
	car = car.replace(/आ/g, "\u200bAA");
	car = car.replace(/ई/g, "\u200bEE");
	car = car.replace(/ऊ/g, "\u200bOO");
	car = car.replace(/ऐ/g, "\u200bAI");
	car = car.replace(/औ/g, "\u200bAU");

	// Matras (dependent vowels)
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

	// Protect first schwa in each sequence of consonant-schwa patterns
	car = car.replace(/((?:\u200b[^\u200b\u200c\s]{1,2}\u200c)+)/g, function(group) {
		let protected = false;
		return group.replace(/(\u200b[^\u200b\u200c\s]{1,2})\u200c/g, function(_, cons) {
			if (!protected) {
				protected = true;
				return cons + "#";
			} else {
				return cons + "\u200c\u200b";
			}
		});
	});

	// Restore protected schwas
	car = car.replace(/#/g, "\u200c");

	// Reinsert schwa in 4-consonant clusters → CCəCC
	car = car.replace(/(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})/g, "$1$2\u200c$3$4");

	// Reinsert schwa in 3-consonant clusters → CəCC
	car = car.replace(/(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})/g, "$1\u200c$2$3");

	// Realize and delete schwas
	car = car.replace(/\u200c(?!\u200b)/g, "A"); // Realized schwa
	car = car.replace(/\u200c\u200b/g, "");     // Deleted schwa
	car = car.replace(/\u200b/g, "");           // Cleanup ZWSP

	// Other punctuation handling
	car = car.replace(/\u0964/g, "\u002e");
	car = car.replace(/\u0965/g, "");

	// Normalize and fix casing
	car = car.normalize('NFC');
	car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
		return first + second.toLowerCase();
	});

	// Restore placeholders
	Object.keys(latinWords).forEach(key => {
		car = car.replace(key, latinWords[key]);
	});

	document.transcription.text2.value = car;
}
