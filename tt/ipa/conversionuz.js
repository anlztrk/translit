//  copyright lexilogos.com
var car;
var translit;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value; 
 car = car.replace(/IY/g, "Í");
 car = car.replace(/Iy/g, "Í");
 car = car.replace(/ıy/g, "í");

 car = car.replace(/A/g, "a");
 car = car.replace(/Ä/g, "ä");
 car = car.replace(/B/g, "b");
 car = car.replace(/C/g, "c");
 car = car.replace(/Ç/g, "ç");
 car = car.replace(/D/g, "d");
 car = car.replace(/E/g, "e");
 car = car.replace(/F/g, "f");
 car = car.replace(/G/g, "ɡ");
 car = car.replace(/Ğ/g, "ğ");
 car = car.replace(/H/g, "h");
 car = car.replace(/I/g, "ı");
 car = car.replace(/Í/g, "í");
 car = car.replace(/İ/g, "i");
 car = car.replace(/J/g, "j");
 car = car.replace(/K/g, "k");
 car = car.replace(/L/g, "l");
 car = car.replace(/M/g, "m");
 car = car.replace(/N/g, "n");
 car = car.replace(/Ñ/g, "ñ");
 car = car.replace(/O/g, "o");
 car = car.replace(/Ö/g, "ö");
 car = car.replace(/P/g, "p");
 car = car.replace(/Q/g, "q");
 car = car.replace(/R/g, "r");
 car = car.replace(/S/g, "s");
 car = car.replace(/Ş/g, "ş");
 car = car.replace(/T/g, "t");
 car = car.replace(/U/g, "u");
 car = car.replace(/Ü/g, "ü");
 car = car.replace(/V/g, "v");
 car = car.replace(/W/g, "w");
 car = car.replace(/X/g, "x");
 car = car.replace(/Y/g, "y");
 car = car.replace(/Z/g, "z");
 
 car = car.replace(/aa/g, "aː");
 car = car.replace(/ää/g, "äː");
 car = car.replace(/bb/g, "bː");
 car = car.replace(/cc/g, "cː");
 car = car.replace(/çç/g, "çː");
 car = car.replace(/dd/g, "dː");
 car = car.replace(/ee/g, "eː");
 car = car.replace(/ff/g, "fː");
 car = car.replace(/gg/g, "ɡː");
 car = car.replace(/ğğ/g, "ğː");
 car = car.replace(/hh/g, "hː");
 car = car.replace(/ıı/g, "ıː");
 car = car.replace(/íí/g, "íː");
 car = car.replace(/ii/g, "iː");
 car = car.replace(/jj/g, "jː");
 car = car.replace(/kk/g, "kː");
 car = car.replace(/ll/g, "lː");
 car = car.replace(/mm/g, "mː");
 car = car.replace(/nn/g, "nː");
 car = car.replace(/ññ/g, "ñː");
 car = car.replace(/oo/g, "oː");
 car = car.replace(/öö/g, "öː");
 car = car.replace(/pp/g, "pː");
 car = car.replace(/qq/g, "qː");
 car = car.replace(/rr/g, "rː");
 car = car.replace(/ss/g, "sː");
 car = car.replace(/şş/g, "şː");
 car = car.replace(/tt/g, "tː");
 car = car.replace(/uu/g, "uː");
 car = car.replace(/üü/g, "üː");
 car = car.replace(/vv/g, "vː");
 car = car.replace(/ww/g, "wː");
 car = car.replace(/xx/g, "xː");
 car = car.replace(/yy/g, "yː");
 car = car.replace(/zz/g, "zː");
 
 car = car.replace(/c/g, "ʑ");
 car = car.replace(/ç/g, "ɕ");
 car = car.replace(/g/g, "ɡ");
 car = car.replace(/ğ/g, "ʁ");
 car = car.replace(/j/g, "ʒ");
 car = car.replace(/ñ/g, "ŋ");
 car = car.replace(/ş/g, "ʃ");
 car = car.replace(/x/g, "χ");
 car = car.replace(/y/g, "j");
 
 car = car.replace(/a/g, "ɑ");
 car = car.replace(/ä/g, "æ");
 car = car.replace(/e/g, "ɪ");
 car = car.replace(/ı/g, "ɯ");
 car = car.replace(/í/g, "ɯɪ̯");
 car = car.replace(/o/g, "ʊ");
 car = car.replace(/ö/g, "ʏ");
 car = car.replace(/ü/g, "y");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}