function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ә/g, "ə")
		.replace(/b/g, "ʙ")
		.replace(/ө/g, "ɵ")
		.replace(/ƅ/g, "ь")
		.replace(/[ŋᶇ]/g, "ꞑ")
		.replace(/Ә/g, "Ə")
		.replace(/Ө/g, "Ɵ")
		.replace(/Ƅ/g, "Ь")
		.replace(/Ŋ/g, "Ꞑ")
		.replace(/Y/g, "У");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ʙ/g, "b")
		.replace(/c/g, "\u200c")
		.replace(/ç/g, "c")
		.replace(/\u200c/g, "ç")
		.replace(/ə/g, "ä")
		.replace(/ƣ/g, "ğ")
		.replace(/ь/g, "ı")
		.replace(/j/g, "\u200c")
		.replace(/y/g, "ü")
		.replace(/\u200c/g, "y")
		.replace(/ꞑ/g, "ñ")
		.replace(/ɵ/g, "ö")
		.replace(/ƶ/g, "j")
		.replace(/C/g, "\u200c")
		.replace(/Ç/g, "C")
		.replace(/\u200c/g, "Ç")
		.replace(/Ə/g, "Ä")
		.replace(/Ƣ/g, "Ğ")
		.replace(/I/g, "İ")
		.replace(/Ь/g, "I")
		.replace(/J/g, "\u200c")
		.replace(/У/g, "Ü")
		.replace(/\u200c/g, "Y")
		.replace(/Ꞑ/g, "Ñ")
		.replace(/Ɵ/g, "Ö")
		.replace(/Ƶ/g, "J");
}

function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/ä/g, "ə")
		.replace(/b/g, "ʙ")
		.replace(/c/g, "\u200c")
		.replace(/ç/g, "c")
		.replace(/\u200c/g, "ç")
		.replace(/ğ/g, "ƣ")
		.replace(/ı/g, "ь")
		.replace(/j/g, "ƶ")
		.replace(/ñ/g, "ꞑ")
		.replace(/ö/g, "ɵ")
		.replace(/ü/g, "\u200c")
		.replace(/y/g, "j")
		.replace(/\u200c/g, "y")
		.replace(/Ä/g, "Ə")
		.replace(/C/g, "\u200c")
		.replace(/Ç/g, "C")
		.replace(/\u200c/g, "Ç")
		.replace(/Ğ/g, "Ƣ")
		.replace(/I/g, "Ь")
		.replace(/İ/g, "I")
		.replace(/J/g, "Ƶ")
		.replace(/Ñ/g, "Ꞑ")
		.replace(/Ö/g, "Ɵ")
		.replace(/Ü/g, "\u200c")
		.replace(/Y/g, "J")
		.replace(/\u200c/g, "У");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
