function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ý/g, "ı")
		.replace(/þ/g, "ş")
		.replace(/ð/g, "ğ")
		.replace(/Ý/g, "İ")
		.replace(/Þ/g, "Ş")
		.replace(/Ð/g, "Ğ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}