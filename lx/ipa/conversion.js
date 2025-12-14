function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/ɑ/g, "a");
	.replace(/p/g, "b")
		.replace(/ts/g, "z")
		.replace(/zʰ/g, "c")
		.replace(/t/g, "d")
		.replace(/dʰ/g, "t")
		.replace(/χ/g, "h")
		.replace(/k/g, "g")
		.replace(/gʰ/g, "k")
		.replace(/bʰ/g, "p")
		.replace(/ð/g, "r")
		.replace(/ʂ/g, "s")
		.replace(/ə/g, "y");
}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/A/g, "a")
		.replace(/B/g, "b")
		.replace(/C/g, "c")
		.replace(/D/g, "d")
		.replace(/E/g, "e")
		.replace(/G/g, "g")
		.replace(/H/g, "h")
		.replace(/I/g, "i")
		.replace(/J/g, "j")
		.replace(/K/g, "k")
		.replace(/L/g, "l")
		.replace(/M/g, "m")
		.replace(/O/g, "o")
		.replace(/P/g, "p")
		.replace(/R/g, "r")
		.replace(/S/g, "s")
		.replace(/T/g, "t")
		.replace(/U/g, "u")
		.replace(/W/g, "w")
		.replace(/Y/g, "y")
		.replace(/Z/g, "z")

		.replace(/a/g, "ɑ")
		.replace(/t/g, "tʰ")
		.replace(/s/g, "ʂ")
		.replace(/c/g, "tsʰ")
		.replace(/d/g, "t")
		.replace(/k/g, "kʰ")
		.replace(/g/g, "k")
		.replace(/h/g, "χ")
		.replace(/p/g, "pʰ")
		.replace(/b/g, "p")
		.replace(/r/g, "ð")
		.replace(/y/g, "ə")
		.replace(/z/g, "ts");

}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}