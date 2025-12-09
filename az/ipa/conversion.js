function latcyr() {}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/A/g, "a")
		.replace(/B/g, "b")
		.replace(/C/g, "c")
		.replace(/Ç/g, "ç")
		.replace(/D/g, "d")
		.replace(/E/g, "e")
		.replace(/Ə/g, "ə")
		.replace(/F/g, "f")
		.replace(/G/g, "ɡ")
		.replace(/Ğ/g, "ğ")
		.replace(/H/g, "h")
		.replace(/X/g, "x")
		.replace(/I/g, "ı")
		.replace(/İ/g, "i")
		.replace(/J/g, "j")
		.replace(/K/g, "k")
		.replace(/Q/g, "q")
		.replace(/L/g, "l")
		.replace(/M/g, "m")
		.replace(/N/g, "n")
		.replace(/O/g, "o")
		.replace(/Ö/g, "ö")
		.replace(/P/g, "p")
		.replace(/R/g, "r")
		.replace(/S/g, "s")
		.replace(/Ş/g, "ş")
		.replace(/T/g, "t")
		.replace(/U/g, "u")
		.replace(/Ü/g, "ü")
		.replace(/V/g, "v")
		.replace(/Y/g, "y")
		.replace(/Z/g, "z")

		.replace(/c/g, "dʒ")
		.replace(/ç/g, "tʃ")
		.replace(/g/g, "ɟ")
		.replace(/ğ/g, "ɣ")
		.replace(/j/g, "ʒ")
		.replace(/k/g, "c")
		.replace(/q/g, "ɡ")
		.replace(/r/g, "ɾ")
		.replace(/ş/g, "ʃ")
		.replace(/y/g, "j")

		.replace(/a/g, "ɑ")
		.replace(/ə/g, "æ")
		.replace(/ı/g, "ɯ")
		.replace(/ö/g, "œ")
		.replace(/ü/g, "y");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
