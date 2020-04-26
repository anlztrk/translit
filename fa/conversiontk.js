var translit; 
function cyrlat () { 
translit = document.transcription.text1.value;
translit = translit.replace(/ا/g, "ʾ"); 
translit = translit.replace(/آ/g, "ā"); 
translit = translit.replace(/ب/g, "b"); 
translit = translit.replace(/پ/g, "p"); 
translit = translit.replace(/ت/g, "t"); 
translit = translit.replace(/ث/g, "s"); 
translit = translit.replace(/ج/g, "j"); 
translit = translit.replace(/چ/g, "č"); 
translit = translit.replace(/ح/g, "h"); 
translit = translit.replace(/خ/g, "x"); 
translit = translit.replace(/د/g, "d"); 
translit = translit.replace(/ذ/g, "z"); 
translit = translit.replace(/ر/g, "r"); 
translit = translit.replace(/ز/g, "z"); 
translit = translit.replace(/ژ/g, "ž"); 
translit = translit.replace(/س/g, "s"); 
translit = translit.replace(/ش/g, "š"); 
translit = translit.replace(/ص/g, "s"); 
translit = translit.replace(/ض/g, "z"); 
translit = translit.replace(/ط/g, "t"); 
translit = translit.replace(/ظ/g, "z"); 
translit = translit.replace(/ع/g, "ʿ"); 
translit = translit.replace(/غ/g, "q"); 
translit = translit.replace(/ف/g, "f"); 
translit = translit.replace(/ق/g, "q"); 
translit = translit.replace(/ك/g, "k"); 
translit = translit.replace(/ک/g, "k"); 
translit = translit.replace(/گ/g, "g"); 
translit = translit.replace(/ل/g, "l"); 
translit = translit.replace(/م/g, "m"); 
translit = translit.replace(/ن/g, "n"); 
translit = translit.replace(/و/g, "v"); 
translit = translit.replace(/ه/g, "h"); 
translit = translit.replace(/ة/g, ""); 
translit = translit.replace(/ی/g, "y"); 
translit = translit.replace(/ء/g, "ʾ"); 
translit = translit.replace(/ؤ/g, "ʾ"); 
translit = translit.replace(/ئ/g, "ʾ");
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