function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/\u200c/g, "")
		.replace(/\u0327/g, "\u0323")
		.replace(/(N|n)\u0304/g, "$1\u0303")
		.normalize('NFC');
}

function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.normalize('NFD')
		.replace(/\u0323/g, "\u0327")
		.replace(/(N|n)\u0303/g, "$1\u0304")
		.normalize('NFC');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value)
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value)
}