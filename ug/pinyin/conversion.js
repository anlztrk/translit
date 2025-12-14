function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(\u2019|\u02bc)/g, "")
		.replace(/C(H|h)/g, "Q")
		.replace(/Z(H|h)/g, "J")
		.replace(/S(H|h)/g, "X")
		.replace(/ch/g, "q")
		.replace(/zh/g, "j")
		.replace(/sh/g, "x")

		.replace(/e/g, "ë")
		.replace(/ə/g, "e")
		.replace(/ɵ/g, "ö")
		.replace(/h/g, "\u2060x")
		.replace(/ⱨ/g, "h")
		.replace(/v/g, "w")
		.replace(/ⱪ/g, "\u2060q")
		.replace(/E/g, "Ë")
		.replace(/Ə/g, "E")
		.replace(/Ɵ/g, "Ö")
		.replace(/H/g, "\u2060X")
		.replace(/Ⱨ/g, "H")
		.replace(/V/g, "W")
		.replace(/Ⱪ/g, "\u2060Q")

		.replace(/N(Ƣ|ƣ)/g, "N\u0027$1")
		.replace(/nƣ/g, "n\u0027ƣ")
		.replace(/G(H|h)/g, "G\u0027$1")
		.replace(/gh/g, "g\u0027h")

		.replace(/c/g, "s")
		.replace(/C/g, "S")
		.replace(/ƣ/g, "gh")
		.replace(/ⱬ/g, "zh")
		.replace(/x/g, "sh")
		.replace(/q/g, "ch")
		.replace(/Ƣ/g, "Gh")
		.replace(/Ⱬ/g, "Zh")
		.replace(/X/g, "Sh")
		.replace(/Q/g, "Ch")
		.replace(/\u2060C(H|h)/g, "Q")
		.replace(/\u2060ch/g, "q")
		.replace(/\u2060S(H|h)/g, "X")
		.replace(/\u2060sh/g, "x");
}

function latcyr() {
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/é/g, "ë")
		.replace(/É/g, "Ë");

	document.transcription.text1.value = document.transcription.text2.value
		.replace(/G(H|h)/g, "Ƣ")
		.replace(/C(H|h)/g, "\u2060Q")
		.replace(/S(H|h)/g, "\u2060X")
		.replace(/Z(H|h)/g, "Ⱬ")
		.replace(/gh/g, "ƣ")
		.replace(/ch/g, "\u2060q")
		.replace(/sh/g, "\u2060x")
		.replace(/zh/g, "ⱬ")
		.replace(/N\u0027(Ƣ|ƣ)/g, "N$1")
		.replace(/n\u0027ƣ/g, "nƣ")
		.replace(/G\u0027(H|h)/g, "G$1")
		.replace(/g\u0027h/g, "gh")
		.replace(/e/g, "ə")
		.replace(/(é|ë)/g, "e")
		.replace(/ö/g, "ɵ")
		.replace(/h/g, "ⱨ")
		.replace(/q/g, "ⱪ")
		.replace(/\u2060ⱪ/g, "q")
		.replace(/x/g, "h")
		.replace(/\u2060h/g, "x")
		.replace(/E/g, "Ə")
		.replace(/(É|Ë)/g, "E")
		.replace(/Ö/g, "Ɵ")
		.replace(/H/g, "Ⱨ")
		.replace(/Q/g, "Ⱪ")
		.replace(/\u2060Ⱪ/g, "Q")
		.replace(/X/g, "H")
		.replace(/\u2060H/g, "X")

		.replace(/(A|E|Ə|I|O|Ɵ|U|Ü)(A|E|Ə|I|O|Ɵ|U|Ü|a|e|ə|i|o|ɵ|u|ü)/g, "$1\u02bc$2")
		.replace(/(a|e|ə|i|o|ɵ|u|ü)(a|e|ə|i|o|ɵ|u|ü)/g, "$1\u02bc$2");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}