var car;
var diacritic;

function cyrlat() {
  car = document.transcription.text1.value;
  diacritic = toLowercase(document.transcription.text3.value);
  if (diacritic == "acute"){
	document.transcription.text2.value = concat(car,"\u0301");
  }  else if (diacritic == "grave"){
  document.transcription.text2.value = concat(car,"\u0300");
  }  else if (diacritic == "circumflex"){
  document.transcription.text2.value = concat(car,"\u0302");
  }  else if (diacritic == "tilde"){
  document.transcription.text2.value = concat(car,"\u0303");
  }  else if (diacritic == "macron"){
  document.transcription.text2.value = concat(car,"\u0304");
  }  else if (diacritic == "hacek" || diacritic == "hachek" || diacritic == "caron" || diacritic == "haček" || diacritic == "háček"){
  document.transcription.text2.value = concat(car,"\u030c");
  }  else if (diacritic == "breve"){
  document.transcription.text2.value = concat(car,"\u0306");
  }  else if (diacritic == "umlaut" || diacritic == "diaeresis" || diacritic == "trema" || diacritic == "tréma"){
  document.transcription.text2.value = concat(car,"\u0308");
  }  else if (diacritic == "dotabove"){
  document.transcription.text2.value = concat(car,"\u0307");
  }  else if (diacritic == "hook"){
  document.transcription.text2.value = concat(car,"\u0309");
  }  else if (diacritic == "ringabove" || diacritic == "ring"){
  document.transcription.text2.value = concat(car,"\u030a");
  }  else if (diacritic == "dotbelow"){
  document.transcription.text2.value = concat(car,"\u0323");
  }  else if (diacritic == "doubleacute"){
  document.transcription.text2.value = concat(car,"\u030b");
  }  else if (diacritic == "cedilla"){
  document.transcription.text2.value = concat(car,"\u0327");
  }  else if (diacritic == "ogonek"){
  document.transcription.text2.value = concat(car,"\u0328");
  }  else {
  document.transcription.text2.value = car;
  }
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
