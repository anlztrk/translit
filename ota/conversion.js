function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/آ/g, 'a')
		.replace(/او/g, 'w̆')
		.replace(/ا/g, 'ă')
		.replace(/ء/g, '\u2019')
		.replace(/ب/g, 'b')
		.replace(/پ/g, 'p')
		.replace(/ت/g, 't')
		.replace(/ث/g, 'ʦ')
		.replace(/ج/g, 'c')
		.replace(/چ/g, 'ç')
		.replace(/ح/g, 'ћ')
		.replace(/خ/g, 'x')
		.replace(/د/g, 'd')
		.replace(/ذ/g, 'ʣ')
		.replace(/ر/g, 'r')
		.replace(/ز/g, 'z')
		.replace(/ژ/g, 'j')
		.replace(/س/g, 's')
		.replace(/ش/g, 'ş')
		.replace(/ص/g, 'ṣ')
		.replace(/ض/g, 'ẓ')
		.replace(/ط/g, 'ṭ')
		.replace(/ظ/g, 'ʣ̣')
		.replace(/ع/g, '\u2018')
		.replace(/غ/g, 'ğ')
		.replace(/ف/g, 'f')
		.replace(/ق/g, 'q')
		.replace(/ک|ك/g, 'k')
		.replace(/گ/g, 'g')
		.replace(/ڭ/g, 'ñ')
		.replace(/ل/g, 'l')
		.replace(/م/g, 'm')
		.replace(/ن/g, 'n')
		.replace(/و/g, 'w̆')
		.replace(/ه/g, '(ă)(h)')
		.replace(/ی/g, 'y̆')
		.replace(/\u060c/g, "\u002c")
		.replace(/\u061f/g, "\u003f")
		.replace(/\u061b/g, "\u003b")
		.replace(/\u06d4/g, "\u002e")
		.replace(/\u0640/g, "");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}