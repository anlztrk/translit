
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
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
