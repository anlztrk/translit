function latcyr() {
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/i/g, "İ")
		.toUpperCase();

	document.transcription.text1.value = document.transcription.text2.value
		.replace(/I/g, "ı")
		.replace(/İ/g, "I")
		.toLowerCase();
}

function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/I/g, "ı")
		.replace(/İ/g, "I")
		.toLowerCase();

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/i/g, "İ")
		.toUpperCase();
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}