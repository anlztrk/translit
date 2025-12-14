function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/c/g, "č")
		.replace(/ç/g, "c")
		.replace(/ẍ/g, "ǧ")
		.replace(/ş/g, "š")
		.replace(/j/g, "ž")
		.replace(/y/g, "j")
		.replace(/i/g, "y")
		.replace(/î/g, "i")
		.replace(/e/g, "ə")
		.replace(/ê/g, "e")

		.replace(/C/g, "Č")
		.replace(/Ç/g, "C")
		.replace(/Ẍ/g, "Ǧ")
		.replace(/Ş/g, "Š")
		.replace(/J/g, "Ž")
		.replace(/Y/g, "J")
		.replace(/I/g, "Y")
		.replace(/Î/g, "I")
		.replace(/E/g, "Ə")
		.replace(/Ê/g, "E");
}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/c/g, "ç")
		.replace(/č/g, "c")
		.replace(/ǧ/g, "ẍ")
		.replace(/š/g, "ş")
		.replace(/i/g, "î")
		.replace(/y/g, "i")
		.replace(/j/g, "y")
		.replace(/ž/g, "j")
		.replace(/e/g, "ê")
		.replace(/ə/g, "e")

		.replace(/C/g, "Ç")
		.replace(/Č/g, "C")
		.replace(/Ǧ/g, "Ẍ")
		.replace(/Š/g, "Ş")
		.replace(/I/g, "Î")
		.replace(/Y/g, "I")
		.replace(/J/g, "Y")
		.replace(/Ž/g, "J")
		.replace(/E/g, "Ê")
		.replace(/Ə/g, "E");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}