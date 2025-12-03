var car;

function cyrlat() {
	car = document.transcription.text1.value;
	variable = document.transcription.text3.value;
	document.transcription.text2.value = car.replace(/\u0023/g, variable);	
}

function copy1() {
	textRange = document.transcription.text1.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}

function copy2() {
	textRange = document.transcription.text2.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}
