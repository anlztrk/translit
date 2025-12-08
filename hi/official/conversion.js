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

	car = car.replace(/(ं|ँ)(क|ख|ग|घ|ह)/g, "\u200bN$2");
	car = car.replace(/(ं|ँ)(त|थ|द|ध|ल|स)/g, "\u200bN$2");
	car = car.replace(/(ं|ँ)(प|फ|ब|भ|व)/g, "\u200bM$2");
	car = car.replace(/(ं|ँ)(?![\u093e-\u094c])/g, "\u200bN");
	car = car.replace(/क़/g, "\u200bQ\u200c");
	car = car.replace(/ख़/g, "\u200bKH\u200c");
	car = car.replace(/ग़/g, "\u200bGH\u200c");
	car = car.replace(/ज़/g, "\u200bZ\u200c");
	car = car.replace(/झ़/g, "\u200bZH\u200c");
	car = car.replace(/फ़/g, "\u200bF\u200c");
	car = car.replace(/ड़/g, "\u200bR\u200c");
	car = car.replace(/ढ़/g, "\u200bRH\u200c");
	car = car.replace(/ज्ञ/g, "\u200bGY\u200c");
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
	car = car.replace(/व/g, "\u200bV\u200c");
	car = car.replace(/ळ/g, "\u200bL\u200c");
	car = car.replace(/व़/g, "\u200bW\u200c");
	car = car.replace(/\u200c्/g, "");
	car = car.replace(/\u200c(ि|ु|ृ|े|ो|ा|ी|ू|ै|ौ)/g, "$1");
	car = car.replace(/अ/g, "A");
	car = car.replace(/इ/g, "I");
	car = car.replace(/ि/g, "I");
	car = car.replace(/उ/g, "U");
	car = car.replace(/ु/g, "U");
	car = car.replace(/ऋ/g, "RI");
	car = car.replace(/ृ/g, "RI");
	car = car.replace(/ए/g, "E");
	car = car.replace(/े/g, "E");
	car = car.replace(/ओ/g, "O");
	car = car.replace(/ो/g, "O");
	car = car.replace(/आ/g, "A");
	car = car.replace(/ा/g, "A");
	car = car.replace(/ई/g, "I");
	car = car.replace(/ी/g, "I");
	car = car.replace(/ऊ/g, "U");
	car = car.replace(/ू/g, "U");
	car = car.replace(/ऐ/g, "AI");
	car = car.replace(/ै/g, "AI");
	car = car.replace(/औ/g, "AU");
	car = car.replace(/ौ/g, "AU");
	car = car.replace(/ः/g, "\u200bH");
	car = car.replace(/\u200c(\u200b|\u0303)/g, "A$1");
	car = car.replace(/(\u200b|\u200c)/g, "");
	car = car.replace(/\u0964/g, "\u002e");
	car = car.replace(/\u0965/g, "");
	car = car.normalize('NFC');
	car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
		return first + second.toLowerCase();
	});

	Object.keys(latinWords).forEach(key => {
		car = car.replace(key, latinWords[key]);
	});
	document.transcription.text2.value = car;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
