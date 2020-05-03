
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/ğ/g, "ḡ");
translit = translit.replace(/Ğ/g, "Ḡ");
translit = translit.replace(/ş/g, "s̩");
translit = translit.replace(/Ş/g, "S̩");
translit = translit.replace(/ç/g, "c̩");
translit = translit.replace(/Ç/g, "C̩");
document.transcription.text2.value = translit;
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
