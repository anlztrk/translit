var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ä/g, "ə");
  car = car.replace(/Ä/g, "Ə");
  car = car.replace(/x/g, "ḥ");
  car = car.replace(/X/g, "Ḥ");
  
  car = car.replace(/(G|g)(a|o|u)/g, "$1$2\u0302");
  car = car.replace(/G(A|O|U)/g, "G$1\u0302");
  car = car.replace(/(K|k)(a|o|u)/g, "$1$2\u0302");
  car = car.replace(/K(A|O|U)/g, "K$1\u0302");
  
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)Q(B|C|D|G|Ğ|J|L|M|N|R|V|Y|Z|b|c|d|g|ğ|j|l|m|n|r|v|y|z)/g, "$1Ğ$2");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)q(b|c|d|g|ğ|j|l|m|n|r|v|y|z)/g, "$1ğ$2");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)Q(^Q)/g, "$1X$3");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)q(^q)/g, "$1x$3");
  car = car.replace(/X(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "Q$1");
  car = car.replace(/x(a|e|ə|ı|i|o|ö|u|ü)/g, "q$1");

  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)K(B|C|D|G|Ğ|J|Q|L|M|N|R|V|Y|Z|b|c|d|g|ğ|j|q|l|m|n|r|v|y|z)/g, "$1Ẏ$2");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)K(b|c|d|g|ğ|j|q|l|m|n|r|v|y|z)/g, "$1ẏ$2");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)K/g, "$1Ẏ");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)k/g, "$1ẏ");
  car = car.replace(/Ẏ(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "K$1");
  car = car.replace(/ẏ(a|e|ə|ı|i|o|ö|u|ü)/g, "k$1");

  car = car.replace(/(E|Ə|İ|Ö|Ü)Q/g, "$1Ġ");
  car = car.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)q/g, "$1ġ");
  car = car.replace(/Q(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)/g, "Ġ$1");
  car = car.replace(/q(e|ə|i|ö|ü)/g, "ġ$1");
  
  car = car.replace(/(ġ)(a|o|u)/g, "g$2");
  car = car.replace(/(Ġ)(A|O|U|a|o|u)/g, "G$2");

  car = car.replace(/(E|Ə|İ|Ö|Ü)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ẏ|Z)Q/g, "$1$2Ġ");  
  car = car.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ẏ|z)q/g, "$1$2ġ");
  
  car = car.replace(/q/g, "g");
  car = car.replace(/Q/g, "G");
  car = car.replace(/e/g, "é");
  car = car.replace(/E/g, "É");
  car = car.replace(/ə/g, "e");
  car = car.replace(/Ə/g, "E");
  car = car.replace(/x/g, "ḥ");
  car = car.replace(/X/g, "Ḥ");
  car = car.normalize('NFC');
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
