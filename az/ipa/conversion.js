
var car;
var translit;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value; 
 car = car.replace(/A/g, "a");
 car = car.replace(/B/g, "b");
 car = car.replace(/C/g, "c");
 car = car.replace(/Ç/g, "ç");
 car = car.replace(/D/g, "d");
 car = car.replace(/E/g, "e");
 car = car.replace(/Ə/g, "ə");
 car = car.replace(/F/g, "f");
 car = car.replace(/G/g, "ɡ");
 car = car.replace(/Ğ/g, "ğ");
 car = car.replace(/H/g, "h");
 car = car.replace(/X/g, "x");
 car = car.replace(/I/g, "ı");
 car = car.replace(/İ/g, "i");
 car = car.replace(/J/g, "j");
 car = car.replace(/K/g, "k");
 car = car.replace(/Q/g, "q");
 car = car.replace(/L/g, "l");
 car = car.replace(/M/g, "m");
 car = car.replace(/N/g, "n");
 car = car.replace(/O/g, "o");
 car = car.replace(/Ö/g, "ö");
 car = car.replace(/P/g, "p");
 car = car.replace(/R/g, "r");
 car = car.replace(/S/g, "s");
 car = car.replace(/Ş/g, "ş");
 car = car.replace(/T/g, "t");
 car = car.replace(/U/g, "u");
 car = car.replace(/Ü/g, "ü");
 car = car.replace(/V/g, "v");
 car = car.replace(/Y/g, "y");
 car = car.replace(/Z/g, "z");
 
 car = car.replace(/c/g, "dʒ");
 car = car.replace(/ç/g, "tʃ");
 car = car.replace(/g/g, "ɟ");
 car = car.replace(/ğ/g, "ɣ");
 car = car.replace(/j/g, "ʒ");
 car = car.replace(/k/g, "c");
 car = car.replace(/q/g, "ɡ");
 car = car.replace(/r/g, "ɾ");
 car = car.replace(/ş/g, "ʃ");
 car = car.replace(/y/g, "j");
 
 car = car.replace(/a/g, "ɑ");
 car = car.replace(/ə/g, "æ");
 car = car.replace(/ı/g, "ɯ");
 car = car.replace(/ö/g, "œ");
 car = car.replace(/ü/g, "y");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}