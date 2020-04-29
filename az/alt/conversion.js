//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/e/g, "é");
  car = car.replace(/E/g, "É");
  car = car.replace(/ə/g, "e");
  car = car.replace(/Ə/g, "E");
  car = car.replace(/x/g, "ḥ");
  car = car.replace(/X/g, "Ḥ");
  
  car = car.replace(/ga/g, "gâ");
  car = car.replace(/gı/g, "gî");
  car = car.replace(/go/g, "gô");
  car = car.replace(/gu/g, "gû");
  car = car.replace(/Ga/g, "Gâ");
  car = car.replace(/Gı/g, "Gî");
  car = car.replace(/Go/g, "Gô");
  car = car.replace(/Gu/g, "Gû");
  car = car.replace(/GA/g, "GÂ");
  car = car.replace(/GI/g, "GÎ");
  car = car.replace(/GO/g, "GÔ");
  car = car.replace(/GU/g, "GÛ");  
  
  car = car.replace(/EQ/g, "EĠ");
  car = car.replace(/ƏQ/g, "ƏĠ");
  car = car.replace(/İQ/g, "İĠ");
  car = car.replace(/ÖQ/g, "ÖĠ");
  car = car.replace(/ÜQ/g, "ÜĠ");
  car = car.replace(/QE/g, "ĠE");
  car = car.replace(/QƏ/g, "ĠƏ");
  car = car.replace(/Qİ/g, "Ġİ");
  car = car.replace(/QÖ/g, "ĠÖ");
  car = car.replace(/QÜ/g, "ĠÜ");
  
  car = car.replace(/Eq/g, "Eġ");
  car = car.replace(/Əq/g, "Əġ");
  car = car.replace(/İq/g, "İġ");
  car = car.replace(/Öq/g, "Öġ");
  car = car.replace(/Üq/g, "Üġ");
  car = car.replace(/Qe/g, "Ġe");
  car = car.replace(/Qə/g, "Ġə");
  car = car.replace(/Qi/g, "Ġi");
  car = car.replace(/Qö/g, "Ġö");
  car = car.replace(/Qü/g, "Ġü");
  
  car = car.replace(/eq/g, "eġ");
  car = car.replace(/əq/g, "əġ");
  car = car.replace(/İq/g, "İġ");
  car = car.replace(/öq/g, "öġ");
  car = car.replace(/üq/g, "üġ");
  car = car.replace(/qe/g, "ġe");
  car = car.replace(/qə/g, "ġə");
  car = car.replace(/qi/g, "ġi");
  car = car.replace(/qö/g, "ġö");
  car = car.replace(/qü/g, "ġü");
  
  car = car.replace(/(ġ)(a|ı|o|u)/g, "g$2");
  car = car.replace(/(Ġ)(A|I|O|U|a|ı|o|u)/g, "G$2");
  
  car = car.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)q/g, "$1$2ġ");
  car = car.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)Q/g, "$1$2Ġ");
  
  car = car.replace(/q/g, "g");
  car = car.replace(/Q/g, "G");
document.transcription.text2.value=car;
}
function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/e/g, "ə");
  car = car.replace(/E/g, "Ə");
  car = car.replace(/é/g, "e");
  car = car.replace(/É/g, "E");
  car = car.replace(/ġ/g, "q");
  car = car.replace(/Ġ/g, "Q");
  car = car.replace(/ḥ/g, "x");
  car = car.replace(/Ḥ/g, "X");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}