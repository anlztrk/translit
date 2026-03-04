function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
        .normalize('NFD')
		.replace(/\u0300|\u0301|\u0027|\u2019/g, "")
		.normalize('NFC')

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

        .replace(/([AEIOUaeiou])i/g, "$1y")
		.replace(/([AEIOU])I/g, "$1Y")
        .replace(/I([AEIOUaeiou])/g, "Y$1")
		.replace(/i([aeiou])/g, "y$1")

		.replace(/([Ĉĉ])y([aou])/g, "$1$2")
		.replace(/ĈY([AOU])/g, "Ĉ$1")
		.replace(/([Ĝĝ])y([aou])/g, "$1$2")
		.replace(/ĜY([AOU])/g, "Ĝ$1")
		.replace(/([Ŝŝ])y([aou])/g, "$1$2")
		.replace(/ŜY([AOU])/g, "Ŝ$1")

        .replace(/GN/g, "NY")
        .replace(/Gn/g, "Ny")
        .replace(/gn/g, "ny")
		
		.replace(/GLY([AEOU])/g, "LY$1")
        .replace(/Gly([aeou])/g, "Ly$1")
        .replace(/gly([aeou])/g, "ly$1")

		.replace(/GLI/g, "LYI")
        .replace(/Gli/g, "Lyi")
        .replace(/gli/g, "lyi")

		.replace(/([AEIOUY])LY/g, "$1LLY")
		.replace(/([AEIOUYaeiouy])ly/g, "$1lly")

		.replace(/[cq]/g, "k")
		.replace(/[CQ]/g, "K")
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
		.replace(/H(\p{Lowercase})/ug, (_, c) => c.toUpperCase());
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
