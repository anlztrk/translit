function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ð/g, "ğ")
		.replace(/Ð/g, "Ğ")
		.replace(/ý/g, "ı")
		.replace(/Ý/g, "İ")
		.replace(/þ/g, "ş")
		.replace(/Þ/g, "Ş")
		.replace(/â/g, "a")
		.replace(/Â/g, "A")
		.replace(/î/g, "i")
		.replace(/Î/g, "İ")
		.replace(/û/g, "u")
		.replace(/Û/g, "U")
		.replace(/ç/g, "c")
		.replace(/Ç/g, "C")
		.replace(/ş/g, "s")
		.replace(/Ş/g, "S")
		.replace(/ğ/g, "g")
		.replace(/Ğ/g, "G")
		.replace(/ı/g, "i")
		.replace(/İ/g, "I")
		.replace(/ə/g, "a")
		.replace(/Ə/g, "A")
		.replace(/ä/g, "a")
		.replace(/Ä/g, "A")
		.replace(/ö/g, "o")
		.replace(/Ö/g, "O")
		.replace(/ü/g, "u")
		.replace(/Ü/g, "U");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}