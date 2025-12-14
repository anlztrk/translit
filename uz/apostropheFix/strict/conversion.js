function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/['ˈ’ʼ‘ʻ´`ʿʹˊ׳′ʽߵ՚ߴ᾿ՙ῾‛ʾ՛ˋ]/g, "ʼ")
		.replace(/([OoGg])ʼ/g, "$1ʻ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}