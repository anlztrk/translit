function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value;
}

function latcyr () { 
  document.transcription.text1.value = document.transcription.text2.value;
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
