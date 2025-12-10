function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ä/g, "ə")
		.replace(/Ä/g, "Ə");
	
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/x/g, "ḥ")
		.replace(/X/g, "Ḥ")

		.replace(/(B|C|D|G|Q|b|c|d|g|q)/g, "\u2060$1")
		.replace(/B/g, "P")
		.replace(/C/g, "Ç")
		.replace(/D/g, "T")
		.replace(/G/g, "K")
		.replace(/Q/g, "X")
		.replace(/b/g, "p")
		.replace(/c/g, "ç")
		.replace(/d/g, "t")
		.replace(/g/g, "k")
		.replace(/q/g, "x")

		.replace(/(K|k)(a|o|u)/g, "$1$2\u0302")
		.replace(/K(A|O|U)/g, "K$1\u0302")

		.replace(/(F|P|S|T|K|Ç|X|Ş|H|f|p|s|t|k|ç|x|ş|h)\u2060(p|ç|t|k|x)/g, "$1$2")
		.replace(/(F|P|S|T|K|Ç|X|Ş|H)\u2060(P|Ç|T|K|X)/g, "$1$2")
		.replace(/\u2060(P|Ç|T|K|X|p|ç|t|k|x)(f|p|s|t|k|ç|x|ş|h)/g, "$1$2")
		.replace(/\u2060(P|Ç|T|K|X)(F|P|S|T|K|Ç|X|Ş|H)/g, "$1$2")

		.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)X\u2060/g, "$1Ġ\u2060")
		.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)x\u2060/g, "$1ġ\u2060")
		.replace(/Ġ(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060X$1")
		.replace(/ġ(a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060x$1")
		.replace(/Ġ/g, "Ğ")
		.replace(/ġ/g, "ğ")

		.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)K\u2060/g, "$1Ẏ\u2060")
		.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)k\u2060/g, "$1ẏ\u2060")
		.replace(/Ẏ(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060K$1")
		.replace(/ẏ(a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060k$1")

		.replace(/\u2060(P|Ç|T|K|X)(A|E|Ə|I|İ|O|Ö|U|Ü)/g, "\u2060\u2060$1$2")
		.replace(/\u2060(P|Ç|T|K|X|p|ç|t|k|x)(a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060\u2060$1$2")
		.replace(/(A|Ç|E|Ə|F|Ğ|H|I|İ|J|K|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Z|a|ç|e|ə|f|ğ|h|i|İ|j|k|l|m|n|o|ö|p|r|s|ş|t|u|ü|v|y|z)\u2060/g, "$1")
		.replace(/\u2060P/g, "B")
		.replace(/\u2060Ç/g, "C")
		.replace(/\u2060T/g, "D")
		.replace(/\u2060K/g, "G")
		.replace(/\u2060X/g, "Q")
		.replace(/\u2060p/g, "b")
		.replace(/\u2060ç/g, "c")
		.replace(/\u2060t/g, "d")
		.replace(/\u2060k/g, "g")
		.replace(/\u2060x/g, "q")
		.replace(/\u2060/g, "")

		.replace(/(E|Ə|İ|Ö|Ü)Q/g, "$1Ġ")
		.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)q/g, "$1ġ")
		.replace(/Q(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)/g, "Ġ$1")
		.replace(/q(e|ə|i|ö|ü)/g, "ġ$1")

		.replace(/(ġ)(a|o|u)/g, "g$2")
		.replace(/(Ġ)(A|O|U|a|o|u)/g, "G$2")

		.replace(/(E|Ə|İ|Ö|Ü)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ẏ|Z)Q/g, "$1$2Ġ")
		.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ẏ|z)q/g, "$1$2ġ")

		.replace(/(Ġ|ġ)q/g, "$1ġ")
		.replace(/ĠQ/g, "ĠĠ")
		.replace(/q/g, "g")
		.replace(/Q/g, "G")
		.replace(/e/g, "é")
		.replace(/E/g, "É")
		.replace(/ə/g, "e")
		.replace(/Ə/g, "E")
		.replace(/x/g, "ḥ")
		.replace(/X/g, "Ḥ")
		.normalize('NFC');
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
