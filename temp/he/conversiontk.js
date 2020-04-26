var translit; 
function cyrlat () { 
translit = document.transcription.text1.value; 
translit = translit.replace(/א/g, "ا"); 
translit = translit.replace(/ב/g, "ب");
translit = translit.replace(/ג/g, "ج");
translit = translit.replace(/ד/g, "د");
translit = translit.replace(/ה/g, "ه");
translit = translit.replace(/ו/g, "و");
translit = translit.replace(/ז/g, "ز");
translit = translit.replace(/ח/g, "ح");
translit = translit.replace(/ט/g, "ط");
translit = translit.replace(/י/g, "ي");
translit = translit.replace(/כ/g, "ك");
translit = translit.replace(/ך/g, "ك");
translit = translit.replace(/ל/g, "ل");
translit = translit.replace(/מ/g, "م");
translit = translit.replace(/ם/g, "م");
translit = translit.replace(/נ/g, "ن");
translit = translit.replace(/ן/g, "ن");
translit = translit.replace(/ס/g, "س");
translit = translit.replace(/ע/g, "ع");
translit = translit.replace(/פ/g, "ف");
translit = translit.replace(/ף/g, "ف");
translit = translit.replace(/צ/g, "ص");
translit = translit.replace(/ץ/g, "ص");
translit = translit.replace(/ק/g, "ق");
translit = translit.replace(/ר/g, "ر");
translit = translit.replace(/ש/g, "ش");
translit = translit.replace(/ת/g, "ت");
translit = translit.replace(/,/g, "،");
document.transcription.text2.value=translit; 
} 
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}