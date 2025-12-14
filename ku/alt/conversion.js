function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ı/g, "i")
		.replace(/İ/g, "Î");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/c/g, "ĝ")
		.replace(/ç/g, "c")
		.replace(/ş/g, "ŝ")
		.replace(/C/g, "Ĝ")
		.replace(/Ç/g, "C")
		.replace(/Ş/g, "Ŝ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);

}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);

}