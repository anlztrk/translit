//  zaciatocne e musi byt ye
var translit;
var car;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/’/g, "ň");
translit = translit.replace(/ʼ/g, "’");
translit = translit.replace(/ň/g, "ʼ");

translit = translit.replace(/‘/g, "ý");
translit = translit.replace(/ʻ/g, "‘");
translit = translit.replace(/ý/g, "ʻ");
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
