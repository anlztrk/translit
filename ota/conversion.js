var car; 
function cyrlat () { 
car = document.transcription.text1.value;
car = car.replace(/آ/g, 'a');
car = car.replace(/او/g, 'w̆');
car = car.replace(/ا/g, 'ă');
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
car = car.replace(/ض/g, 'ẓ');
car = car.replace(/ط/g, 'ṭ');
car = car.replace(/ظ/g, 'ʣ̣');
car = car.replace(/ع/g, '\u2018');
car = car.replace(/غ/g, 'ğ');
car = car.replace(/ف/g, 'f');
car = car.replace(/ق/g, 'q');
car = car.replace(/ک|ك/g, 'k');
car = car.replace(/گ/g, 'g');
car = car.replace(/ڭ/g, 'ñ');
car = car.replace(/ل/g, 'l');
car = car.replace(/م/g, 'm');
car = car.replace(/ن/g, 'n');
car = car.replace(/و/g, 'w̆'); 
car = car.replace(/ه/g, '(ă)(h)');
car = car.replace(/ی/g, 'y̆');
car = car.replace(/\u060c/g, "\u002c"); 
car = car.replace(/\u061f/g, "\u003f"); 
car = car.replace(/\u061b/g, "\u003b");
car = car.replace(/\u06d4/g, "\u002e"); 
car = car.replace(/\u0640/g, "");

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
