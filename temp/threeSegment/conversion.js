var car;

function cyrlat() {
	car = document.transcription.text1.value;
	variable = document.transcription.text3.value;
	document.transcription.text2.value = car.replace(/\u0023/g, variable);	
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
