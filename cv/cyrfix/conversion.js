function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/Ă/g, "Ӑ")
		.replace(/ă/g, "ӑ")
		.replace(/Ĕ/g, "Ӗ")
		.replace(/ĕ/g, "ӗ")
		.replace(/Ç/g, "Ҫ")
		.replace(/ç/g, "ҫ")
		.replace(/Ÿ/g, "Ӳ")
		.replace(/ÿ/g, "ӳ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value)
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value)
}