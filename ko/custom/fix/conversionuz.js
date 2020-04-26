//  zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/ĵ/g, "c\u0323h");
translit = translit.replace(/Ĵ/g, "C\u0323h");
document.transcription.text2.value = translit;
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
