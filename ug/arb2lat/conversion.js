var car; 
function cyrlat () { 
car = document.transcription.text1.value;
car = car.replace(/الله/g, "ئاللاھ");
car = car.replace(/ئ/g, "\u0027"); 
car = car.replace(/ا/g, "A"); 
car = car.replace(/ە/g, "E"); 
car = car.replace(/ې/g, "Ë"); 
car = car.replace(/ى/g, "I"); 
car = car.replace(/و/g, "O"); 
car = car.replace(/ۆ/g, "Ö"); 
car = car.replace(/ۇ/g, "U"); 
car = car.replace(/ۈ/g, "Ü");

car = car.replace(/نگ/g, "N\u0027G"); 
car = car.replace(/نغ/g, "N\u0027GH"); 
car = car.replace(/سھ/g, "S\u0027H"); 
car = car.replace(/گھ/g, "G\u0027H"); 
car = car.replace(/زھ/g, "Z\u0027H"); 
car = car.replace(/ب/g, "B"); 
car = car.replace(/ج/g, "J"); 
car = car.replace(/چ/g, "CH"); 
car = car.replace(/د/g, "D"); 
car = car.replace(/ف/g, "F"); 
car = car.replace(/گ/g, "G"); 
car = car.replace(/غ/g, "GH"); 
car = car.replace(/ھ/g, "H"); 
car = car.replace(/ژ/g, "ZH"); 
car = car.replace(/ك/g, "K"); 
car = car.replace(/ل/g, "L"); 
car = car.replace(/م/g, "M"); 
car = car.replace(/ن/g, "N"); 
car = car.replace(/ڭ/g, "NG"); 
car = car.replace(/پ/g, "P"); 
car = car.replace(/ق/g, "Q"); 
car = car.replace(/ر/g, "R"); 
car = car.replace(/س/g, "S"); 
car = car.replace(/ش/g, "SH"); 
car = car.replace(/ت/g, "T"); 
car = car.replace(/ۋ/g, "W"); 
car = car.replace(/خ/g, "X"); 
car = car.replace(/ي/g, "Y"); 
car = car.replace(/ز/g, "Z"); 
car = car.replace(/ئ/g, "\u0027");

car = car.replace(/(A|E|Ë|I|O|Ö|U|Ü)\u0027(A|E|Ë|I|O|Ö|U|Ü)/g, "$1$2");

car = car.replace(/\u060c/g, "\u002c"); 
car = car.replace(/\u061f/g, "\u003f"); 
car = car.replace(/\u061b/g, "\u003b");
car = car.replace(/\u06d4/g, "\u002e"); 
car = car.replace(/\u0027/g, "\u2019");
car = car.replace(/\u0640/g, "");
car = car.replace(/(\p{Lu})([\p{L}\p{N}ëéöüËÉÖÜ\s,;?!"'()]+)/gu, function(_, first, second){
    return first + second.toLowerCase();
});
document.transcription.text2.value=car; 
}

function latcyr () { 
car = document.transcription.text2.value; 
car = car.replace(/\u2019/g, "\u0027");

car = car.replace(/(?<!(a|e|ë|i|o|ö|u|ü))(a|e|ë|i|o|ö|u|ü)/g, "$1\u200c$2");
car = car.replace(/\u0027/g, "ئ");

car = car.replace(/ch/g, "چ"); 
car = car.replace(/gh/g, "غ");
car = car.replace(/ng/g, "ڭ"); 
car = car.replace(/sh/g, "ش"); 
car = car.replace(/zh/g, "ژ");

car = car.replace(/a/g, "ئا");
car = car.replace(/b/g, "ب");
car = car.replace(/d/g, "د");
car = car.replace(/ë/g, "ئې");
car = car.replace(/e/g, "ئە");
car = car.replace(/f/g, "ف");
car = car.replace(/g/g, "گ");
car = car.replace(/h/g, "ھ");
car = car.replace(/i/g, "ئى");
car = car.replace(/j/g, "ج");
car = car.replace(/k/g, "ك");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/o/g, "ئو");
car = car.replace(/ö/g, "ئۆ");
car = car.replace(/p/g, "پ");
car = car.replace(/q/g, "ق");
car = car.replace(/r/g, "ر");
car = car.replace(/s/g, "س");
car = car.replace(/t/g, "ت");
car = car.replace(/u/g, "ئۇ");
car = car.replace(/ü/g, "ئۈ");
car = car.replace(/w/g, "ۋ");
car = car.replace(/x/g, "خ");
car = car.replace(/y/g, "ي");
car = car.replace(/z/g, "ز");

car = car.replace(/ئاللاھ/g, "الله");

car = car.replace(/\u002c/g, "\u060c");
car = car.replace(/\u003f/g, "\u061f");
car = car.replace(/\u003b/g, "\u061b");
car = car.replace(/\u002e/g, "\u06d4");
car = car.replace(/\u200cئ/g, "");

car = car.replace(/(گ|س|ز)ئھ/g, "$1ھ");
car = car.replace(/نئ(گ|غ)/g, "ن$1");
document.transcription.text1.value=car;
} 
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
