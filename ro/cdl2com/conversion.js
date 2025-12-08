
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/ş/g, "ș");
translit = translit.replace(/Ş/g, "Ș");
translit = translit.replace(/ţ/g, "ț");
translit = translit.replace(/Ţ/g, "Ț");
translit = translit.replace(/ǎ/g, "ă");
translit = translit.replace(/Ǎ/g, "Ă");
translit = translit.replace(/ã/g, "ă");
translit = translit.replace(/Ã/g, "Ă");
document.transcription.text1.value = translit;
}

function latcyr () {
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
