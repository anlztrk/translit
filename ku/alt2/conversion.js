function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ı/g, "i")
		.replace(/İ/g, "Î");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/j/g, "ĵ")
		.replace(/c/g, "j")
		.replace(/ç/g, "c")
		.replace(/ş/g, "ŝ")
		.replace(/ê/g, "é")
		.replace(/î/g, "í")
		.replace(/û/g, "ú")
		.replace(/J/g, "Ĵ")
		.replace(/Ç/g, "C")
		.replace(/Ş/g, "Ŝ")
		.replace(/Ê/g, "É")
		.replace(/Î/g, "Í")
		.replace(/Û/g, "Ú");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}