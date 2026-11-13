function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/Ŏ/g, "Ö")
		.replace(/ŏ/g, "ö")
		.replace(/C/g, "Ç")
		.replace(/c/g, "ç");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}