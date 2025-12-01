var car; 
function cyrlat () { 
car = document.transcription.text1.value;
car = car.replace(/ا/g, 'ä');
car = car.replace(/ء/g, '\u2019');
car = car.replace(/ب/g, 'b');
car = car.replace(/پ/g, 'p');
car = car.replace(/ت/g, 't');
car = car.replace(/ث/g, 'ʦ');
car = car.replace(/ج/g, 'c');
car = car.replace(/چ/g, 'ç');
car = car.replace(/ح/g, 'ћ');
car = car.replace(/خ/g, 'x');
car = car.replace(/د/g, 'd');
car = car.replace(/ذ/g, 'ʣ');
car = car.replace(/ر/g, 'r');
car = car.replace(/ز/g, 'z');
car = car.replace(/ژ/g, 'j');
car = car.replace(/س/g, 's');
car = car.replace(/ش/g, 'ş');
car = car.replace(/ص/g, 'ṣ');
car = car.replace(/ض/g, 'ḍ');
car = car.replace(/ط/g, 'ṭ');
car = car.replace(/ظ/g, 'ʣ̣');
car = car.replace(/ع/g, '\u2018');
car = car.replace(/غ/g, 'ğ');
car = car.replace(/ف/g, 'f');
car = car.replace(/ق/g, 'q');
car = car.replace(/ک/g, 'k');
car = car.replace(/گ/g, 'g');
car = car.replace(/ڭ/g, 'ñ');
car = car.replace(/ل/g, 'l');
car = car.replace(/م/g, 'm');
car = car.replace(/ن/g, 'n');
car = car.replace(/و/g, 'ŭ');
car = car.replace(/ه/g, 'h');
car = car.replace(/ی/g, 'ĭ');
document.transcription.text2.value=car; 
}

function latcyr () {
} 
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
