var translit; 
function cyrlat () { 
translit = document.transcription.text1.value;
translit = translit.replace(/ا/g, "\u0028a\u0029");
translit = translit.replace(/آ/g, "ạ"); 
translit = translit.replace(/ء/g, "\u2019"); 
translit = translit.replace(/ب/g, "b"); 
translit = translit.replace(/پ/g, "p"); 
translit = translit.replace(/ت/g, "t"); 
translit = translit.replace(/ث/g, "s̱"); 
translit = translit.replace(/ج/g, "c"); 
translit = translit.replace(/چ/g, "ç"); 
translit = translit.replace(/ح/g, "ẖ"); 
translit = translit.replace(/خ/g, "ḥ"); 
translit = translit.replace(/د/g, "d"); 
translit = translit.replace(/ذ/g, "ẕ"); 
translit = translit.replace(/ر/g, "r"); 
translit = translit.replace(/ز/g, "z"); 
translit = translit.replace(/ژ/g, "j"); 
translit = translit.replace(/س/g, "s"); 
translit = translit.replace(/ش/g, "ş"); 
translit = translit.replace(/ص/g, "ṣ"); 
translit = translit.replace(/ض/g, "ʣ"); 
translit = translit.replace(/ط/g, "ṭ"); 
translit = translit.replace(/ظ/g, "ẓ"); 
translit = translit.replace(/ع/g, "\u0028\u2018\u0029"); 
translit = translit.replace(/غ/g, "ğ"); 
translit = translit.replace(/ف/g, "f"); 
translit = translit.replace(/ق/g, "ḳ"); 
translit = translit.replace(/ك/g, "k"); 
translit = translit.replace(/گ/g, "g"); 
translit = translit.replace(/ڭ/g, "ñ"); 
translit = translit.replace(/ل/g, "l"); 
translit = translit.replace(/م/g, "m"); 
translit = translit.replace(/ن/g, "n"); 
translit = translit.replace(/و/g, "\u0028v\u0029"); 
translit = translit.replace(/ه/g, "\u0028h\u0029"); 
translit = translit.replace(/ی/g, "\u0028y\u0029"); 
document.transcription.text2.value=translit; 
}

function latcyr () {
} 
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}