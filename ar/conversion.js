function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/آ/g, "ʾā")
		.replace(/ء|أ|إ|ؤ|ئ/g, "ʾ")
		.replace(/ة/g, "(h)")


		.replace(/ا/g, "ă")
		.replace(/ى/g, "y̆")
		//.replace(/آ/g, "") 
		.replace(/ب/g, "b")
		.replace(/پ/g, "p")
		.replace(/ت/g, "t")
		.replace(/ث/g, "þ")
		.replace(/ج/g, "j")
		.replace(/چ/g, "č")
		.replace(/ح/g, "ħ")
		.replace(/خ/g, "x")
		.replace(/د/g, "d")
		.replace(/ذ/g, "ð")
		.replace(/ر/g, "r")
		.replace(/ز/g, "z")
		//.replace(/ژ/g, "ž") 
		.replace(/س/g, "s")
		.replace(/ش/g, "š")
		.replace(/ص/g, "ṣ")
		.replace(/ض/g, "ḍ")
		.replace(/ط/g, "ṭ")
		.replace(/ظ/g, "ð\u0323")
		.replace(/ع/g, "ʕ")
		.replace(/غ/g, "ğ")
		.replace(/ف/g, "f")
		.replace(/ق/g, "q")
		.replace(/ك/g, "k")
		.replace(/ک/g, "k")
		.replace(/گ/g, "g")
		.replace(/ل/g, "l")
		.replace(/م/g, "m")
		.replace(/ن/g, "n")
		.replace(/ه/g, "h")
		.replace(/و/g, "ŭ")
		.replace(/ي/g, "ĭ")
		.replace(/ؤ/g, "ʾ")
		.replace(/ئ/g, "ʾ");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
