//  copyright lexilogos.com
var car;
function newLineUppercase($0,$1) {return '\n' + $1.toUpperCase()};
function latgeo () {
car = document.transcription.text2.value;

//1. convert all BIG letters into small
car = car.replace(/A/g, "a");
car = car.replace(/B/g, "b");
car = car.replace(/G/g, "g");
car = car.replace(/D/g, "d");
car = car.replace(/E/g, "e");
car = car.replace(/V/g, "v");
car = car.replace(/Z/g, "z");
car = car.replace(/T/g, "t");
car = car.replace(/I/g, "i");
car = car.replace(/K'/g, "k'");
car = car.replace(/L/g, "l");
car = car.replace(/M/g, "m");
car = car.replace(/N/g, "n");
car = car.replace(/O/g, "o");
car = car.replace(/P'/g, "p'");
car = car.replace(/J/g, "j");
car = car.replace(/R/g, "r");
car = car.replace(/S/g, "s");
car = car.replace(/Ť/g, "t'");
car = car.replace(/T'/g, "t'");
car = car.replace(/U/g, "u");
car = car.replace(/P/g, "p");
car = car.replace(/K/g, "k");
car = car.replace(/Ǧ/g, "ǧ");
car = car.replace(/Ğ/g, "ǧ");
car = car.replace(/Q/g, "q");
car = car.replace(/Ş/g, "ş");
car = car.replace(/Ç/g, "ç");
car = car.replace(/Z'/g, "z'");
car = car.replace(/Ç/g, "ç'");
car = car.replace(/X/g, "x");
car = car.replace(/C/g, "c");
car = car.replace(/Č/g, "č");
car = car.replace(/H/g, "h");
car = car.replace(/F/g, "f");
car = car.replace(/Y/g, "y");
car = car.replace(/Ǯ/g, "ǯ");


//2. convert all special characters 
//3. convert old version of alphabet into version used in this converter
car = car.replace(/ʼ/g, "’");
car = car.replace(/’/g, "’");
car = car.replace(/'/g, "’");
car = car.replace(/ğ/g, "ǧ");
car = car.replace(/ɣ/g, "ǧ");
car = car.replace(/ts/g, "3");
car = car.replace(/З/g, "3");
car = car.replace(/з/g, "3");
car = car.replace(/ʒ/g, "3");
car = car.replace(/Ʒ/g, "3");
car = car.replace(/ǯ/g, "3'");
car = car.replace(/ť/g, "t'");
car = car.replace(/t̆/g, "t'");
car = car.replace(/t\u200c\u030c/g, "t'");
car = car.replace(/ǩ/g, "k'");
car = car.replace(/Ǩ/g, "k'");
car = car.replace(/ḱ/g, "k'");
car = car.replace(/Ḱ/g, "k'");
car = car.replace(/p̌/g, "p'");
car = car.replace(/ṕ/g, "p'");
car = car.replace(/Ṕ/g, "p'");
car = car.replace(/ç̌/g, "ç'");
car = car.replace(/ç̌/g, "ç'");
car = car.replace(/ḉ/g, "ç'");
car = car.replace(/Ḉ/g, "ç'");
car = car.replace(/ž/g, "z'");
car = car.replace(/Ž/g, "z'");

//4. again apostrof just for each case: š, č plus apostrof
car = car.replace(/ʼ/g, "'");
car = car.replace(/’/g, "'");
car = car.replace(/’/g, "'");

//5. dotted and dotless I in Turkish, just to avoid spelling mistake
car = car.replace(/İ/g, "i");
car = car.replace(/i/g, "i");
car = car.replace(/I/g, "i");
car = car.replace(/ı/g, "i");


//6. standard convertion LAT-GEO
car = car.replace(/a/g, "ა");
car = car.replace(/b/g, "ბ");
car = car.replace(/g/g, "გ");
car = car.replace(/d/g, "დ");
car = car.replace(/e/g, "ე");
car = car.replace(/v/g, "ვ");
car = car.replace(/t'/g, "ტ");
car = car.replace(/t/g, "თ");
car = car.replace(/(i|y)/g, "ი");
car = car.replace(/k'/g, "კ");
car = car.replace(/l/g, "ლ");
car = car.replace(/m/g, "მ");
car = car.replace(/n/g, "ნ");
car = car.replace(/o/g, "ო");
car = car.replace(/p'/g, "პ");
car = car.replace(/j/g, "ჟ");
car = car.replace(/r/g, "რ");
car = car.replace(/s/g, "ს");
car = car.replace(/u/g, "უ");
car = car.replace(/(p|f)/g, "ფ");
car = car.replace(/k/g, "ქ");
car = car.replace(/ǧ/g, "ღ");
car = car.replace(/q/g, "ყ");
car = car.replace(/ş/g, "შ");
car = car.replace(/ç'/g, "ჭ");
car = car.replace(/ç/g, "ჩ");
car = car.replace(/z'/g, "ძ");
car = car.replace(/z/g, "ზ");
car = car.replace(/3'/g, "წ");
car = car.replace(/3/g, "ც");
car = car.replace(/x/g, "ხ");
car = car.replace(/c/g, "ჯ");
car = car.replace(/h/g, "ჰ");

   document.transcription.text1.value=car;
}
function geolat () {
car = document.transcription.text1.value;
car = car.replace(/(ა|ე|ი|ო|უ)ი/g, "$1ჲ");
car = car.replace(/ი(ა|ე|ი|ო|უ)/g, "ჲ$1");
car = car.replace(/ა/g, "a");
car = car.replace(/ბ/g, "b");
car = car.replace(/გ/g, "g");
car = car.replace(/დ/g, "d");
car = car.replace(/ე/g, "e");
car = car.replace(/ვ/g, "v");
car = car.replace(/ზ/g, "z");
car = car.replace(/თ/g, "t");
car = car.replace(/ი/g, "i");
car = car.replace(/კ/g, "k'");
car = car.replace(/ლ/g, "l");
car = car.replace(/მ/g, "m");
car = car.replace(/ნ/g, "n");
car = car.replace(/ო/g, "o");
car = car.replace(/პ/g, "p'");
car = car.replace(/ჟ/g, "j");
car = car.replace(/რ/g, "r");
car = car.replace(/ს/g, "s");
car = car.replace(/ტ/g, "t'");
car = car.replace(/უ/g, "u");
car = car.replace(/ფ/g, "p");
car = car.replace(/ქ/g, "k");
car = car.replace(/ღ/g, "ǧ");
car = car.replace(/ყ/g, "q");
car = car.replace(/შ/g, "ş");
car = car.replace(/ჩ/g, "ç");
car = car.replace(/ც/g, "з");
car = car.replace(/ძ/g, "z'");
car = car.replace(/წ/g, "з'");
car = car.replace(/ჭ/g, "ç'");
car = car.replace(/ხ/g, "x");
car = car.replace(/ჯ/g, "c");
car = car.replace(/ჰ/g, "h");
car = car.replace(/ჶ/g, "f");
car = car.replace(/ჲ/g, "y");

car = car.replace(/\u2018/g, "\u0027");
car = car.replace(/\u2019/g, "\u0027");
car = car.replace(/T'/g, "Ť");
car = car.replace(/T\u0306/g, "Ť");
car = car.replace(/K'/g, "Ǩ");
car = car.replace(/K\u0306/g, "Ǩ");
car = car.replace(/Ḱ/g, "Ǩ");
car = car.replace(/P'/g, "P̌");
car = car.replace(/P\u0306/g, "P̌");
car = car.replace(/Ṕ/g, "P̌");
car = car.replace(/Ç'/g, "Ç̌");
car = car.replace(/Ç\u030c/g, "Ç̌");
car = car.replace(/Ḉ/g, "Ç̌");
car = car.replace(/Z'/g, "Ž");
car = car.replace(/Z\u0306/g, "Ž");
car = car.replace(/З'/g, "Ǯ");
car = car.replace(/З/g, "Ʒ");
car = car.replace(/Ʒ\u0306/g, "Ǯ");
car = car.replace(/İ/g, "I");

car = car.replace(/t'/g, "t‌̌");
car = car.replace(/ť/g, "t‌̌");
car = car.replace(/t\u030c/g, "t‌̌");
car = car.replace(/t\u0306/g, "t‌̌");
car = car.replace(/k'/g, "ǩ");
car = car.replace(/k\u0306/g, "ǩ");
car = car.replace(/ḱ/g, "ǩ");
car = car.replace(/p'/g, "p̌");
car = car.replace(/p\u0306/g, "p̌");
car = car.replace(/ṕ/g, "p̌");
car = car.replace(/ç'/g, "ç̌");
car = car.replace(/ç\u030c/g, "ç̌");
car = car.replace(/ḉ/g, "ç̌");
car = car.replace(/z'/g, "ž");
car = car.replace(/z\u0306/g, "ž");
car = car.replace(/з'/g, "ǯ");
car = car.replace(/3'/g, "ǯ");
car = car.replace(/з/g, "ʒ");
car = car.replace(/ʒ\u0306/g, "ǯ");
car = car.replace(/ı/g, "i");
car = car.normalize('NFD');
car = car.replace(/\n(\p{Ll})/ug, newLineUppercase);
car = car.replace(/T‌̌/g, "Ť");
car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}