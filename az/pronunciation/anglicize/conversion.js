function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/Ä/g, "Ə")
		.replace(/ä/g, "ə");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/Ə(\p{L})/ug, "A$1")
		.replace(/ə(\p{L})/ug, "a$1")
		.replace(/Ə/g, "EH")
		.replace(/J/g, "Zh")
		.replace(/C/g, "J")
		.replace(/Ç/g, "Ch")
		.replace(/Ğ/g, "GH")
		.replace(/X/g, "Kh")
		.replace(/İ/g, "I")
		.replace(/Ş/g, "Sh")
		.replace(/Q/g, "G")
		.replace(/Ö/g, "O")
		.replace(/Ü/g, "U")
		.replace(/ə/g, "eh")
		.replace(/j/g, "zh")
		.replace(/c/g, "j")
		.replace(/ç/g, "ch")
		.replace(/ğ/g, "gh")
		.replace(/x/g, "kh")
		.replace(/ı/g, "i")
		.replace(/ş/g, "sh")
		.replace(/q/g, "g")
		.replace(/ö/g, "o")
		.replace(/ü/g, "u");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
