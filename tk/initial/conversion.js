function latcyr() {
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/Ұ/g, "\u00A5");

	document.transcription.text1.value = document.transcription.text2.value
		.replace(/\u017F/g, "ž")
		.replace(/\u00A3/g, "Ž")
		.replace(/ñ/g, "ň")
		.replace(/Ñ/g, "Ň")
		.replace(/\u00A2/g, "ş")
		.replace(/\u0024/g, "Ş")
		.replace(/ÿ/g, "ý")
		.replace(/\u00A5/g, "Ý")
		.replace(/Ұ/g, "Ý");
}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ž/g, "\u017F")
		.replace(/Ž/g, "\u00A3")
		.replace(/ň/g, "ñ")
		.replace(/Ň/g, "Ñ")
		.replace(/ş/g, "\u00A2")
		.replace(/Ş/g, "\u0024")
		.replace(/ý/g, "ÿ")
		.replace(/Ý/g, "\u00A5");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}