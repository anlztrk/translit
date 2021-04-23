//zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;

translit = translit.replace(/'/g, "ʼ");
translit = translit.replace(/ˈ/g, "ʼ");
translit = translit.replace(/’/g, "ʼ");
translit = translit.replace(/ʼ/g, "ʼ");
translit = translit.replace(/‘/g, "ʼ");
translit = translit.replace(/ʻ/g, "ʼ");
translit = translit.replace(/´/g, "ʼ");
translit = translit.replace(/`/g, "ʼ");
translit = translit.replace(/ʿ/g, "ʼ");
translit = translit.replace(/ʹ/g, "ʼ");
translit = translit.replace(/ˊ/g, "ʼ");
translit = translit.replace(/׳/g, "ʼ");
translit = translit.replace(/′/g, "ʼ");
translit = translit.replace(/ʽ/g, "ʼ");
translit = translit.replace(/ߵ/g, "ʼ");
translit = translit.replace(/՚/g, "ʼ");
translit = translit.replace(/ߴ/g, "ʼ");
translit = translit.replace(/᾿/g, "ʼ");
translit = translit.replace(/ՙ/g, "ʼ");
translit = translit.replace(/῾/g, "ʼ");
translit = translit.replace(/‛/g, "ʼ");
translit = translit.replace(/ʾ/g, "ʼ");
translit = translit.replace(/՛/g, "ʼ");
translit = translit.replace(/ˋ/g, "ʼ");

translit = translit.replace(/oʼ/g, "oʻ");
translit = translit.replace(/Oʼ/g, "Oʻ");
translit = translit.replace(/gʼ/g, "gʻ");
translit = translit.replace(/Gʼ/g, "Gʻ");

translit = translit.replace(/oʻ/g, "ō");
translit = translit.replace(/Oʻ/g, "Ō");
translit = translit.replace(/gʻ/g, "ḡ");
translit = translit.replace(/Gʻ/g, "Ḡ");

translit = translit.replace(/ch/g, "ç");
translit = translit.replace(/Ch/g, "Ç");
translit = translit.replace(/CH/g, "Ç");

translit = translit.replace(/sh/g, "ş");
translit = translit.replace(/Sh/g, "Ş");
translit = translit.replace(/SH/g, "Ş");

translit = translit.replace(/sʼh/g, "sh");
translit = translit.replace(/Sʼh/g, "Sh");
translit = translit.replace(/SʼH/g, "SH");
document.transcription.text2.value = translit;
}

function latcyr () {
translit = document.transcription.text2.value;
translit = translit.replace(/'/g, "ʼ");
translit = translit.replace(/ˈ/g, "ʼ");
translit = translit.replace(/’/g, "ʼ");
translit = translit.replace(/ʼ/g, "ʼ");
translit = translit.replace(/‘/g, "ʼ");
translit = translit.replace(/ʻ/g, "ʼ");
translit = translit.replace(/´/g, "ʼ");
translit = translit.replace(/`/g, "ʼ");
translit = translit.replace(/ʿ/g, "ʼ");
translit = translit.replace(/ʹ/g, "ʼ");
translit = translit.replace(/ˊ/g, "ʼ");
translit = translit.replace(/׳/g, "ʼ");
translit = translit.replace(/′/g, "ʼ");
translit = translit.replace(/ʽ/g, "ʼ");
translit = translit.replace(/ߵ/g, "ʼ");
translit = translit.replace(/՚/g, "ʼ");
translit = translit.replace(/ߴ/g, "ʼ");
translit = translit.replace(/᾿/g, "ʼ");
translit = translit.replace(/ՙ/g, "ʼ");
translit = translit.replace(/῾/g, "ʼ");
translit = translit.replace(/‛/g, "ʼ");
translit = translit.replace(/ʾ/g, "ʼ");
translit = translit.replace(/՛/g, "ʼ");
translit = translit.replace(/ˋ/g, "ʼ");

translit = translit.replace(/sh/g, "sʼh");
translit = translit.replace(/Sh/g, "Sʼh");
translit = translit.replace(/SH/g, "SʼH");

translit = translit.replace(/ş/g, "sh");
translit = translit.replace(/Ş/g, "Sh");

translit = translit.replace(/ç/g, "ch");
translit = translit.replace(/Ç/g, "Ch");

translit = translit.replace(/ō/g, "oʻ");
translit = translit.replace(/Ō/g, "Oʻ");
translit = translit.replace(/ḡ/g, "gʻ");
translit = translit.replace(/Ḡ/g, "Gʻ");
document.transcription.text1.value = translit;
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
