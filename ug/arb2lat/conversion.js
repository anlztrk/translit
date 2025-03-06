var car; 
function cyrlat () { 
  car = document.transcription.text1.value;

  car = car.replace(/(الله|ﷲ)/g, "ئاللاھ"); 

  car = car.replace(/نگ/g, "نئگ"); 
  car = car.replace(/گھ/g, "گئھ");
  car = car.replace(/نغ/g, "نئغ"); 
  car = car.replace(/سھ/g, "سئھ"); 
  car = car.replace(/زھ/g, "زئھ"); 

  car = car.replace(/(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1$2");
  car = car.replace(/(ب|چ|د|ف|گ|غ|ھ|ج|ك|ل|م|ن|ڭ|پ|ق|ر|س|ش|ت|ۋ|خ|ي|ز|ژ)ئ/g, "$1ئئ");
  car = car.replace(/ئ(ا|ە|ې|ى|و|ۆ|ۇ|ۈ)/g, "$1");  
  car = car.replace(/ا/g, "A"); 
  car = car.replace(/ە/g, "E"); 
  car = car.replace(/ې/g, "Ë"); 
  car = car.replace(/ى/g, "I"); 
  car = car.replace(/و/g, "O"); 
  car = car.replace(/ۆ/g, "Ö"); 
  car = car.replace(/ۇ/g, "U"); 
  car = car.replace(/ۈ/g, "Ü");

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

  car = car.replace(/ئ/g, "\u2019");

  car = car.replace(/\u060c/g, "\u002c"); 
  car = car.replace(/\u061f/g, "\u003f"); 
  car = car.replace(/\u061b/g, "\u003b");
  car = car.replace(/\u06d4/g, "\u002e"); 
  car = car.replace(/\u0640/g, "");

  car = car.replace(/(\p{Lu})([\p{L}\p{N}ëéöüËéöü\s,;?!"'()]+)/gu, function(_, first, second) {
    return first + second.toLowerCase();
});
document.transcription.text2.value=car; 
}

function latcyr () { 
  car = document.transcription.text2.value;
  car = car.replace(/É/g, "Ë");
  car = car.replace(/é/g, "ë");
  car = car.replace(/\u00b4/g, "\u2019"); 
  car = car.replace(/\u02bc/g, "\u2019"); 
  car = car.replace(/\u0027/g, "\u2019");

  car = car.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|\u2019)(A|E|Ë|I|O|Ö|U|Ü)/g, "$1\u200c$2");
  car = car.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|b|d|f|g|h|j|k|l|m|n|p|q|r|s|t|w|x|y|z|\u2019)(a|e|ë|i|o|ö|u|ü)/g, "$1\u200c$2");

  car = car.replace(/(CH|Ch|ch)/g, "چ"); 
  car = car.replace(/(GH|Gh|gh)/g, "غ"); 
  car = car.replace(/(NG|Ng|ng)/g, "ڭ"); 
  car = car.replace(/(SH|Sh|sh)/g, "ش"); 
  car = car.replace(/(ZH|Zh|zh)/g, "ژ"); 
  
  car = car.replace(/[Aa]/g, "ئا");
  car = car.replace(/[Bb]/g, "ب"); 
  car = car.replace(/[Dd]/g, "د"); 
  car = car.replace(/[Ëë]/g, "ئې"); 
  car = car.replace(/[Ee]/g, "ئە"); 
  car = car.replace(/[Ff]/g, "ف"); 
  car = car.replace(/[Gg]/g, "گ");   
  car = car.replace(/[Hh]/g, "ھ"); 
  car = car.replace(/[Ii]/g, "ئى");
  car = car.replace(/[Jj]/g, "ج");   
  car = car.replace(/[Kk]/g, "ك");
  car = car.replace(/[Ll]/g, "ل"); 
  car = car.replace(/[Mm]/g, "م"); 
  car = car.replace(/[Nn]/g, "ن");   
  car = car.replace(/[Oo]/g, "ئو"); 
  car = car.replace(/[Öö]/g, "ئۆ"); 
  car = car.replace(/[Pp]/g, "پ"); 
  car = car.replace(/[Qq]/g, "ق"); 
  car = car.replace(/[Rr]/g, "ر"); 
  car = car.replace(/[Ss]/g, "س");   
  car = car.replace(/[Tt]/g, "ت"); 
  car = car.replace(/[Uu]/g, "ئۇ");
  car = car.replace(/[Üü]/g, "ئۈ"); 
  car = car.replace(/[Ww]/g, "ۋ"); 
  car = car.replace(/[Xx]/g, "خ"); 
  car = car.replace(/[Yy]/g, "ي"); 
  car = car.replace(/[Zz]/g, "ز"); 
  car = car.replace(/\u2019/g, "ئ");  
  car = car.replace(/ئاللاھ/g, "ﷲ"); 
  
  car = car.replace(/(گ|س|ز)ئھ/g, "$1ھ")
  car = car.replace(/نئغ/g, "نغ");
  car = car.replace(/\u200cئ/g, "");
  
  car = car.replace(/\u002c/g, "\u060c"); 
  car = car.replace(/\u003f/g, "\u061f"); 
  car = car.replace(/\u003b/g, "\u061b"); 
  car = car.replace(/\u002e/g, "\u06d4");
document.transcription.text1.value=car; 
} 
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
