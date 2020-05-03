
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/nd/g, "nn");
translit = translit.replace(/ld/g, "ll");
translit = translit.replace(/zd/g, "zz");
translit = translit.replace(/sd/g, "ss");
translit = translit.replace(/st/g, "ss");
translit = translit.replace(/şj/g, "şş");
translit = translit.replace(/zs/g, "ss");
translit = translit.replace(/ts/g, "ss");
translit = translit.replace(/tç/g, "çç");
translit = translit.replace(/çs/g, "şs");
translit = translit.replace(/çl/g, "şl");
translit = translit.replace(/çd/g, "şd");
translit = translit.replace(/çj/g, "şş");
translit = translit.replace(/gb/g, "gw");
translit = translit.replace(/Nd/g, "Nn");
translit = translit.replace(/Ld/g, "Ll");
translit = translit.replace(/Zd/g, "Zz");
translit = translit.replace(/Sd/g, "Ss");
translit = translit.replace(/St/g, "Ss");
translit = translit.replace(/Şj/g, "Şş");
translit = translit.replace(/Zs/g, "Ss");
translit = translit.replace(/Ts/g, "Ss");
translit = translit.replace(/Tç/g, "Çç");
translit = translit.replace(/Çs/g, "Şs");
translit = translit.replace(/Çl/g, "Şl");
translit = translit.replace(/Çd/g, "Şd");
translit = translit.replace(/Çj/g, "Şş");
translit = translit.replace(/Gb/g, "Gw");
translit = translit.replace(/ND/g, "NN");
translit = translit.replace(/LD/g, "LL");
translit = translit.replace(/ZD/g, "ZZ");
translit = translit.replace(/SD/g, "SS");
translit = translit.replace(/ST/g, "SS");
translit = translit.replace(/ŞJ/g, "ŞŞ");
translit = translit.replace(/ZS/g, "SS");
translit = translit.replace(/TS/g, "SS");
translit = translit.replace(/TÇ/g, "ÇÇ");
translit = translit.replace(/ÇS/g, "ŞS");
translit = translit.replace(/ÇL/g, "ŞL");
translit = translit.replace(/ÇD/g, "ŞD");
translit = translit.replace(/ÇJ/g, "ŞŞ");
translit = translit.replace(/GB/g, "GW");
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
