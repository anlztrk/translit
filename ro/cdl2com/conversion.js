function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ş/g, "ș")
		.replace(/Ş/g, "Ș")
		.replace(/ţ/g, "ț")
		.replace(/Ţ/g, "Ț")
		.replace(/ǎ/g, "ă")
		.replace(/Ǎ/g, "Ă")
		.replace(/ã/g, "ă")
		.replace(/Ã/g, "Ă");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}