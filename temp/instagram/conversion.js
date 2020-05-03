
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/\u003D2/g, "\u003a");
translit = translit.replace(/\u003D1/g, "\u002e");
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
