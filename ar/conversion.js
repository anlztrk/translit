var translit; 
function cyrlat () { 
translit = document.transcription.text1.value;
translit = translit.replace(/آ/g, "ʾā"); 
translit = translit.replace(/ء|أ|إ|ؤ|ئ/g, "ʾ");
translit = translit.replace(/ة/g, "(h)");
 

translit = translit.replace(/ا/g, "ă"); 
translit = translit.replace(/ى/g, "y̆"); 
//translit = translit.replace(/آ/g, ""); 
translit = translit.replace(/ب/g, "b"); 
translit = translit.replace(/پ/g, "p"); 
translit = translit.replace(/ت/g, "t"); 
translit = translit.replace(/ث/g, "þ"); 
translit = translit.replace(/ج/g, "j"); 
translit = translit.replace(/چ/g, "č"); 
translit = translit.replace(/ح/g, "ħ"); 
translit = translit.replace(/خ/g, "x"); 
translit = translit.replace(/د/g, "d"); 
translit = translit.replace(/ذ/g, "ð"); 
translit = translit.replace(/ر/g, "r"); 
translit = translit.replace(/ز/g, "z"); 
//translit = translit.replace(/ژ/g, "ž"); 
translit = translit.replace(/س/g, "s"); 
translit = translit.replace(/ش/g, "š"); 
translit = translit.replace(/ص/g, "ṣ"); 
translit = translit.replace(/ض/g, "ḍ"); 
translit = translit.replace(/ط/g, "ṭ"); 
translit = translit.replace(/ظ/g, "ð\u0323"); 
translit = translit.replace(/ع/g, "ʕ"); 
translit = translit.replace(/غ/g, "ğ"); 
translit = translit.replace(/ف/g, "f"); 
translit = translit.replace(/ق/g, "q"); 
translit = translit.replace(/ك/g, "k"); 
translit = translit.replace(/ک/g, "k"); 
translit = translit.replace(/گ/g, "g"); 
translit = translit.replace(/ل/g, "l"); 
translit = translit.replace(/م/g, "m"); 
translit = translit.replace(/ن/g, "n"); 
translit = translit.replace(/ه/g, "h"); 
translit = translit.replace(/و/g, "ŭ"); 
translit = translit.replace(/ي/g, "ĭ"); 
translit = translit.replace(/ؤ/g, "ʾ"); 
translit = translit.replace(/ئ/g, "ʾ");
document.transcription.text2.value=translit; 
}

function latcyr () {
} 
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}