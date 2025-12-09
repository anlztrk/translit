function latcyr() {
	document.transcription.text2.value = document.transcription.text2.value
		.toUpperCase();

	document.transcription.text1.value = document.transcription.text2.value
		.toLowerCase()
		.normalize('NFC');
}

function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.toLowerCase();

	document.transcription.text2.value = document.transcription.text1.value
		.toUpperCase()
		.normalize('NFC');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
