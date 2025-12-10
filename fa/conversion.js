function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ا/g, "ʾ")
		.replace(/آ/g, "ā")
		.replace(/ب/g, "b")
		.replace(/پ/g, "p")
		.replace(/ت/g, "t")
		.replace(/ث/g, "s")
		.replace(/ج/g, "j")
		.replace(/چ/g, "č")
		.replace(/ح/g, "h")
		.replace(/خ/g, "x")
		.replace(/د/g, "d")
		.replace(/ذ/g, "z")
		.replace(/ر/g, "r")
		.replace(/ز/g, "z")
		.replace(/ژ/g, "ž")
		.replace(/س/g, "s")
		.replace(/ش/g, "š")
		.replace(/ص/g, "s")
		.replace(/ض/g, "z")
		.replace(/ط/g, "t")
		.replace(/ظ/g, "z")
		.replace(/ع/g, "ʿ")
		.replace(/غ/g, "q")
		.replace(/ف/g, "f")
		.replace(/ق/g, "q")
		.replace(/ك/g, "k")
		.replace(/ک/g, "k")
		.replace(/گ/g, "g")
		.replace(/ل/g, "l")
		.replace(/م/g, "m")
		.replace(/ن/g, "n")
		.replace(/و/g, "v")
		.replace(/ه/g, "h")
		.replace(/ة/g, "")
		.replace(/ی/g, "y")
		.replace(/ء/g, "ʾ")
		.replace(/ؤ/g, "ʾ")
		.replace(/ئ/g, "ʾ");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value)
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value)
}
