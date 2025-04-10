var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.normalize('NFD');
	car = car.replace(/(ं|ँ)(क|ख|ग|घ|ह)/g, "\u0303\u200cṅ$2");
	car = car.replace(/(ं|ँ)(त|थ|द|ध|ल|स)/g, "\u0303\u200cn$2");
	car = car.replace(/(ं|ँ)(प|फ|ब|भ|व)/g, "\u0303\u200cm$2");
	car = car.replace(/(ं|ँ)(?![\u093e-\u094c])/g, "\u0303\u200c");
	car = car.replace(/क़/g, "\u200bq\u200c");
	car = car.replace(/ख़/g, "\u200bx\u200c");
	car = car.replace(/ग़/g, "\u200bġ\u200c");
	car = car.replace(/ज़/g, "\u200bz\u200c");
	car = car.replace(/झ़/g, "\u200bź\u200c");
	car = car.replace(/फ़/g, "\u200bf\u200c");
	car = car.replace(/ड़/g, "\u200bṛ\u200c");
	car = car.replace(/ढ़/g, "\u200bṛh\u200c");
	car = car.replace(/क/g, "\u200bk\u200c");
	car = car.replace(/ख/g, "\u200bkh\u200c");
	car = car.replace(/ग/g, "\u200bg\u200c");
	car = car.replace(/घ/g, "\u200bgh\u200c");
	car = car.replace(/ङ/g, "\u200bṅ\u200c");
	car = car.replace(/ह/g, "\u200bh\u200c");
	car = car.replace(/च/g, "\u200bc\u200c");
	car = car.replace(/छ/g, "\u200bch\u200c");
	car = car.replace(/ज/g, "\u200bj\u200c");
	car = car.replace(/झ/g, "\u200bjh\u200c");
	car = car.replace(/ञ/g, "\u200bñ\u200c");
	car = car.replace(/य/g, "\u200by\u200c");
	car = car.replace(/श/g, "\u200bś\u200c");
	car = car.replace(/ट/g, "\u200bṭ\u200c");
	car = car.replace(/ठ/g, "\u200bṭh\u200c");
	car = car.replace(/ड/g, "\u200bḍ\u200c");
	car = car.replace(/ढ/g, "\u200bḍh\u200c");
	car = car.replace(/ण/g, "\u200bṇ\u200c");
	car = car.replace(/र/g, "\u200br\u200c");
	car = car.replace(/ष/g, "\u200bṣ\u200c");
	car = car.replace(/त/g, "\u200bt\u200c");
	car = car.replace(/थ/g, "\u200bth\u200c");
	car = car.replace(/द/g, "\u200bd\u200c");
	car = car.replace(/ध/g, "\u200bdh\u200c");
	car = car.replace(/न/g, "\u200bn\u200c");
	car = car.replace(/ल/g, "\u200bl\u200c");
	car = car.replace(/स/g, "\u200bs\u200c");
	car = car.replace(/प/g, "\u200bp\u200c");
	car = car.replace(/फ/g, "\u200bph\u200c");
	car = car.replace(/ब/g, "\u200bb\u200c");
	car = car.replace(/भ/g, "\u200bbh\u200c");
	car = car.replace(/म/g, "\u200bm\u200c");
	car = car.replace(/व/g, "\u200bv\u200c");
	car = car.replace(/ळ/g, "\u200bḷ\u200c");
	car = car.replace(/व़/g, "\u200bw\u200c");
	car = car.replace(/\u200c्/g, "");
	car = car.replace(/\u200c(ि|ु|ृ|े|ो|ा|ी|ू|ै|ौ)/g, "$1");
	car = car.replace(/अ/g, "\u200ba");
	car = car.replace(/इ/g, "\u200bi");
	car = car.replace(/ि/g, "\u200bi");
	car = car.replace(/उ/g, "\u200bu");
	car = car.replace(/ु/g, "\u200bu");
	car = car.replace(/ऋ/g, "\u200bŕ");
	car = car.replace(/ृ/g, "\u200bŕ");
	car = car.replace(/ए/g, "\u200be");
	car = car.replace(/े/g, "\u200be");
	car = car.replace(/ओ/g, "\u200bo");
	car = car.replace(/ो/g, "\u200bo");
	car = car.replace(/आ/g, "\u200bā");
	car = car.replace(/ा/g, "\u200bā");
	car = car.replace(/ई/g, "\u200bī");
	car = car.replace(/ी/g, "\u200bī");
	car = car.replace(/ऊ/g, "\u200bū");
	car = car.replace(/ू/g, "\u200bū");
	car = car.replace(/ऐ/g, "\u200bai");
	car = car.replace(/ै/g, "\u200bai");
	car = car.replace(/औ/g, "\u200bau");
	car = car.replace(/ौ/g, "\u200bau");
	car = car.replace(/ः/g, "\u200bḥ");
	// === Schwa Deletion with First + Second-Last Schwa Preservation ===

	// 1. Preserve second-last schwa if followed by another schwa-ending consonant at word end (punctuation allowed)
	car = car.replace(/(\u200b[^\u200b\u200c\s]{1,4})\u200c(?=(\u200b[^\u200b\u200c\s]{1,4})\u200c(?=[\s.,:;!?।]|$))/g,"$1#");

	// 2. Preserve first schwa in word
	car = car.replace(/(^|\s)(\u200b[^\u200b\u200c\s]{1,4})\u200c/g, "$1$2#");

	// 3. Delete other schwas between consonants
	car = car.replace(/(\u200b[^\u200b\u200c\s]{1,4})\u200c(\u200b[^\u200b\u200c\s]{1,4})/g, "$1$2");

	// Step 4: Restore protected schwas
	car = car.replace(/#/g, "\u200c");

	// Step 5a: Break CCCC → CCəCC
	car = car.replace(/(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,4})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,4})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,4})/g, "$1$2\u200c$3$4");

	// Step 5b: Break CCC → CəCC
	car = car.replace(/(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})(?!\u200c)(\u200b[^\u200b\u200c\s]{1,2})/g, "$1\u200c$2$3");

	car = car.replace(/\u200c(\u200b|\u0303)/g, "a$1");
	car = car.replace(/(\u200b|\u200c)/g, "");
	car = car.replace(/\u0964/g, "\u002e");
	car = car.replace(/\u0965/g, "");
	car = car.normalize('NFC');
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