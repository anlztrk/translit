function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
        .normalize('NFD')
		.replace(/\u0300|\u0301|\u0027|\u2019/g, "")
		.normalize('NFC')
        
		.replace(/([AEIOUaeiou])i/g, "$1y")
		.replace(/([AEIOU])I/g, "$1Y")
        .replace(/I([AEIOUaeiou])/g, "Y$1")
		.replace(/i([aeiou])/g, "y$1")

		.replace(/c([ie])/g, "ĉ$1")
		.replace(/g([ie])/g, "ĝ$1")
		.replace(/cĉ/g, "ĉĉ")
		.replace(/gĝ/g, "ĝĝ")
		.replace(/([AEIOUaeiou])sĉ([aeiou])/g, "$1ŝŝ$2")
		.replace(/sĉ/g, "ŝ")
		.replace(/([AEIOUaeiou])s([aeiou])/g, "$1ż$2")
		.replace(/zz/g, "ttż")
		.replace(/z/g, "tż")

		.replace(/C([IEie])/g, "Ĉ$1")
		.replace(/G([IEie])/g, "Ĝ$1")
		.replace(/C([Ĉĉ])/g, "Ĉ$1")
		.replace(/G([Ĝĝ])/g, "Ĝ$1")
		.replace(/([AEIOU])SĈ([AEIOU])/g, "$1ŜŜ$2")
		.replace(/S([Ĉĉ])/g, "Ŝ")
		.replace(/([AEIOU])S([AEIOU])/g, "$1Ż$2")
		.replace(/Zz/g, "Ttż")
		.replace(/ZZ/g, "TTŻ")
		.replace(/Z/g, "TŻ")

		.replace(/c/g, "k")
		.replace(/C/g, "K")
		.replace(/ĝ/g, "c")
		.replace(/Ĝ/g, "C")
		.replace(/ĉ/g, "ç")
		.replace(/Ĉ/g, "Ç")
		.replace(/ŝ/g, "ş")
		.replace(/Ŝ/g, "Ş")
		.replace(/I/g, "İ")
        .replace(/ż/g, "z")
        .replace(/Ż/g, "Z")
		.replace(/h/g, "")
		.replace(/H/g, "");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
