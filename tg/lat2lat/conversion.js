function cyrlat() {

	document.transcription.text1.value = document.transcription.text1.value
		.replace(/в/g, "b")
		.replace(/ʙ/g, "b")
		.replace(/Ğ/g, "Ǧ")
		.replace(/ğ/g, "ǧ")
		.replace(/Ġ/g, "Ǧ")
		.replace(/ġ/g, "ǧ")
		.replace(/Ƣ/g, "Ǧ")
		.replace(/ƣ/g, "ǧ")
		.replace(/Ƶ/g, "Ž")
		.replace(/ƶ/g, "ž")
		.replace(/Î/g, "Í")
		.replace(/î/g, "í")
		.replace(/Ī/g, "Í")
		.replace(/ī/g, "í")
		.replace(/Û/g, "Ú")
		.replace(/û/g, "ú")
		.replace(/Ü/g, "Ú")
		.replace(/ü/g, "ú")
		.replace(/Ū/g, "Ú")
		.replace(/ū/g, "ú")
		.replace(/Ç/g, "J")
		.replace(/ç/g, "j")
		.replace(/Ş/g, "Š")
		.replace(/ş/g, "š");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/b/g, "ʙ")
		.replace(/Ğ/g, "Ƣ")
		.replace(/ğ/g, "ƣ")
		.replace(/Ġ/g, "Ƣ")
		.replace(/ġ/g, "ƣ")
		.replace(/Ǧ/g, "Ƣ")
		.replace(/ǧ/g, "ƣ")
		.replace(/Ž/g, "Ƶ")
		.replace(/ž/g, "ƶ")
		.replace(/Î/g, "Ī")
		.replace(/î/g, "ī")
		.replace(/Í/g, "Ī")
		.replace(/í/g, "ī")
		.replace(/Û/g, "Ū")
		.replace(/û/g, "ū")
		.replace(/Ü/g, "Ū")
		.replace(/ü/g, "ū")
		.replace(/Ú/g, "Ū")
		.replace(/ú/g, "ū")
		.replace(/J/g, "Ç")
		.replace(/j/g, "ç")
		.replace(/Y/g, "J")
		.replace(/y/g, "j")
		.replace(/Š/g, "Ş")
		.replace(/š/g, "ş");
}

function latcyr() {
	document.transcription.text2.value = document.transcription.text2.value
		.replace(/в/g, "ʙ")
		.replace(/b/g, "ʙ")
		.replace(/Ğ/g, "Ƣ")
		.replace(/ğ/g, "ƣ")
		.replace(/Ġ/g, "Ƣ")
		.replace(/ġ/g, "ƣ")
		.replace(/Ǧ/g, "Ƣ")
		.replace(/ǧ/g, "ƣ")
		.replace(/Ž/g, "Ƶ")
		.replace(/ž/g, "ƶ")
		.replace(/Î/g, "Ī")
		.replace(/î/g, "ī")
		.replace(/Í/g, "Ī")
		.replace(/í/g, "ī")
		.replace(/Û/g, "Ū")
		.replace(/û/g, "ū")
		.replace(/Ü/g, "Ū")
		.replace(/ü/g, "ū")
		.replace(/Ú/g, "Ū")
		.replace(/ú/g, "ū")
		.replace(/Y/g, "J")
		.replace(/y/g, "j")
		.replace(/Š/g, "Ş")
		.replace(/š/g, "ş");

	document.transcription.text1.value = document.transcription.text2.value
		.replace(/в/g, "b")
		.replace(/ʙ/g, "b")
		.replace(/Ğ/g, "Ǧ")
		.replace(/ğ/g, "ǧ")
		.replace(/Ġ/g, "Ǧ")
		.replace(/ġ/g, "ǧ")
		.replace(/Ƣ/g, "Ǧ")
		.replace(/ƣ/g, "ǧ")
		.replace(/Ƶ/g, "Ž")
		.replace(/ƶ/g, "ž")
		.replace(/Î/g, "Í")
		.replace(/î/g, "í")
		.replace(/Ī/g, "Í")
		.replace(/ī/g, "í")
		.replace(/Û/g, "Ú")
		.replace(/û/g, "ú")
		.replace(/Ü/g, "Ú")
		.replace(/ü/g, "ú")
		.replace(/Ū/g, "Ú")
		.replace(/ū/g, "ú")
		.replace(/J/g, "Y")
		.replace(/j/g, "y")
		.replace(/Ç/g, "J")
		.replace(/ç/g, "j")
		.replace(/Ş/g, "Š")
		.replace(/ş/g, "š");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}