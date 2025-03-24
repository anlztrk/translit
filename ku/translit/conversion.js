var car; 
function cyrlat () { 
  car = document.transcription.text1.value;
  
  let latinWords = {};
   let index = 0;
   car = car.replace(/\p{sc=Latin}+/ug, function(match) {
     let key = `__placeholder${index}__`;
     latinWords[key] = match;
     index++;
     return key;
  });

  car = car.replace(/(ا|ە|ێ|ۆ)و/g, "$1W");
  car = car.replace(/(ا|ە|ێ|ۆ)ی/g, "$1Y");
  car = car.replace(/و(ا|ە|ێ|ۆ)/g, "W$1");
  car = car.replace(/ی(ا|ە|ێ|ۆ)/g, "Y$1");

  car = car.replace(/یی(ب|ج|چ|د|ف|گ|غ|ھ|ژ|ک|ك|ل|ڵ|م|ن|پ|ق|ر|ڕ|س|ش|ت|خ|ز|ئ|ع)/g, "یY$1");
  
  car = car.replace(/وو/g, "Û");
  car = car.replace(/ا/g, "A"); 
  car = car.replace(/ە/g, "E"); 
  car = car.replace(/ێ/g, "Ê"); 
  car = car.replace(/ی/g, "Î"); 
  car = car.replace(/ۆ/g, "O"); 
  car = car.replace(/و/g, "U");   

  car = car.replace(/ب/g, "B"); 
  car = car.replace(/ج/g, "C"); 
  car = car.replace(/چ/g, "Ç"); 
  car = car.replace(/د/g, "D"); 
  car = car.replace(/ف/g, "F"); 
  car = car.replace(/گ/g, "G"); 
  car = car.replace(/غ/g, "X"); 
  car = car.replace(/ھ/g, "H"); 
  car = car.replace(/ژ/g, "J"); 
  car = car.replace(/ک|ك/g, "K"); 
  car = car.replace(/ل/g, "L"); 
  car = car.replace(/ڵ/g, "L");
  car = car.replace(/م/g, "M"); 
  car = car.replace(/ن/g, "N");
  car = car.replace(/پ/g, "P"); 
  car = car.replace(/ق/g, "Q"); 
  car = car.replace(/ر/g, "R"); 
  car = car.replace(/ڕ/g, "R"); 
  car = car.replace(/س/g, "S"); 
  car = car.replace(/ش/g, "Ş"); 
  car = car.replace(/ت/g, "T"); 
  car = car.replace(/خ/g, "X"); 
  car = car.replace(/ز/g, "Z"); 
  
  car = car.replace(/ئ/g, "");
  car = car.replace(/ع/g, "");

  car = car.replace(/\u060c/g, "\u002c"); 
  car = car.replace(/\u061f/g, "\u003f"); 
  car = car.replace(/\u061b/g, "\u003b");
  car = car.replace(/\u06d4/g, "\u002e"); 
  car = car.replace(/\u0640/g, "");

  car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019\u00ab\u00bb\u2039\u203a'"()]+)/gu, function(_, first, second) {
    return first + second.toLowerCase();
});

   Object.keys(latinWords).forEach(key => {
     car = car.replace(key, latinWords[key]);
});
document.transcription.text2.value=car; 
}
/*
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
} */
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
