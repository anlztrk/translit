var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/ǐ/g, "î");
translit = translit.replace(/ě/g, "ê");
translit = translit.replace(/û/g, "ǔ");
translit = translit.replace(/ô/g, "ǒ");
translit = translit.replace(/â/g, "ǎ");

translit = translit.replace(/Ǐ/g, "Î");
translit = translit.replace(/Ě/g, "Ê");
translit = translit.replace(/Û/g, "Ǔ");
translit = translit.replace(/Ô/g, "Ǒ");
translit = translit.replace(/Â/g, "Ǎ");

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
