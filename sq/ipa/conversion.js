function latcyr() {}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/A/g, "a")
		.replace(/B/g, "b")
		.replace(/C/g, "c")
		.replace(/Ç/g, "ç")
		.replace(/D/g, "d")
		.replace(/E/g, "e")
		.replace(/Ë/g, "ë")
		.replace(/F/g, "f")
		.replace(/G/g, "g")
		.replace(/H/g, "h")
		.replace(/I/g, "i")
		.replace(/J/g, "j")
		.replace(/K/g, "k")
		.replace(/L/g, "l")
		.replace(/M/g, "m")
		.replace(/N/g, "n")
		.replace(/O/g, "o")
		.replace(/P/g, "p")
		.replace(/Q/g, "q")
		.replace(/R/g, "r")
		.replace(/S/g, "s")
		.replace(/T/g, "t")
		.replace(/U/g, "u")
		.replace(/V/g, "v")
		.replace(/X/g, "x")
		.replace(/Y/g, "y")
		.replace(/Z/g, "z")

		.replace(/r/g, "р")

		.replace(/dh/g, "ð")
		.replace(/gj/g, "ɟʝ")
		.replace(/ll/g, "ɫ")
		.replace(/nj/g, "ɲ")
		.replace(/ng/g, "ŋ")
		.replace(/sh/g, "ʃ")
		.replace(/th/g, "θ")
		.replace(/xh/g, "dʒ")
		.replace(/zh/g, "ʒ")
		.replace(/рр/g, "r")

		.replace(/a/g, "ᴀ")
		.replace(/c/g, "ts")
		.replace(/ç/g, "tʃ")
		.replace(/e/g, "ɛ")
		.replace(/ë/g, "ə")
		.replace(/o/g, "ɔ")
		.replace(/q/g, "cç")
		.replace(/x/g, "dz")
		.replace(/р/g, "ɾ")
		.replace(/g/g, "ɡ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}