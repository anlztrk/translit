function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/c/g, "ç")
		.replace(/č/g, "c")
		.replace(/ǧ/g, "ğ")
		.replace(/š/g, "ş")
		.replace(/y/g, "ı")
		.replace(/j/g, "y")
		.replace(/ž/g, "j")
		.replace(/g/g, "q")

		.replace(/C/g, "Ç")
		.replace(/Č/g, "C")
		.replace(/Ǧ/g, "Ğ")
		.replace(/Š/g, "Ş")
		.replace(/I/g, "İ")
		.replace(/Y/g, "I")
		.replace(/J/g, "Y")
		.replace(/Ž/g, "J")
		.replace(/G/g, "Q");
}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/c/g, "č")
		.replace(/ç/g, "c")
		.replace(/ğ/g, "ǧ")
		.replace(/ş/g, "š")
		.replace(/j/g, "ž")
		.replace(/y/g, "j")
		.replace(/ı/g, "y")
		.replace(/q/g, "g")
		.replace(/ü/g, "u")

		.replace(/C/g, "Č")
		.replace(/Ç/g, "C")
		.replace(/Ğ/g, "Ǧ")
		.replace(/Ş/g, "Š")
		.replace(/J/g, "Ž")
		.replace(/Y/g, "J")
		.replace(/I/g, "Y")
		.replace(/İ/g, "I")
		.replace(/Q/g, "G")
		.replace(/Ü/g, "U");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}