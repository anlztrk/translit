function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ä/g, "ə")
	    .replace(/Ä/g, "Ə");
	
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/e/g, "ë")
		.replace(/E/g, "Ë")
		.replace(/ə/g, "e")
		.replace(/Ə/g, "E");
}

function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/e/g, "ə")
		.replace(/E/g, "Ə")
		.replace(/ë/g, "e")
		.replace(/Ë/g, "E");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
