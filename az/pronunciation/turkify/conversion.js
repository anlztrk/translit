var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ä/g, "ə");
  car = car.replace(/Ä/g, "Ə");
  car = car.replace(/x/g, "ḥ");
  car = car.replace(/X/g, "Ḥ");
  
  car = car.replace(/(B|C|D|G|Q|b|c|d|g|q)/g, "\u2060$1");
  car = car.replace(/B/g, "P");
  car = car.replace(/C/g, "Ç");
  car = car.replace(/D/g, "T");
  car = car.replace(/G/g, "K");
  car = car.replace(/Q/g, "X");
  car = car.replace(/b/g, "p");
  car = car.replace(/c/g, "ç");
  car = car.replace(/d/g, "t");
  car = car.replace(/g/g, "k");
  car = car.replace(/q/g, "x");
  
  car = car.replace(/(K|k)(a|o|u)/g, "$1$2\u0302");
  car = car.replace(/K(A|O|U)/g, "K$1\u0302");

  car = car.replace(/(F|P|S|T|K|Ç|X|Ş|H|f|p|s|t|k|ç|x|ş|h)\u2060(p|ç|t|k|x)/g, "$1$2");
  car = car.replace(/(F|P|S|T|K|Ç|X|Ş|H)\u2060(P|Ç|T|K|X)/g, "$1$2");
  car = car.replace(/\u2060(P|Ç|T|K|X|p|ç|t|k|x)(f|p|s|t|k|ç|x|ş|h)/g, "$1$2");
  car = car.replace(/\u2060(P|Ç|T|K|X)(F|P|S|T|K|Ç|X|Ş|H)/g, "$1$2");
  
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)X\u2060/g, "$1Ġ\u2060");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)x\u2060/g, "$1ġ\u2060");
  car = car.replace(/Ġ(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060X$1");
  car = car.replace(/ġ(a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060x$1");
  car = car.replace(/Ġ/g, "Ğ");
  car = car.replace(/ġ/g, "ğ");
  
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)K\u2060/g, "$1Ẏ\u2060");
  car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)k\u2060/g, "$1ẏ\u2060");
  car = car.replace(/Ẏ(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060K$1");
  car = car.replace(/ẏ(a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060k$1");

  car = car.replace(/\u2060(P|Ç|T|K|X)(A|E|Ə|I|İ|O|Ö|U|Ü)/g, "\u2060\u2060$1$2");
  car = car.replace(/\u2060(P|Ç|T|K|X|p|ç|t|k|x)(a|e|ə|ı|i|o|ö|u|ü)/g, "\u2060\u2060$1$2");
  car = car.replace(/(A|Ç|E|Ə|F|Ğ|H|I|İ|J|K|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Z|a|ç|e|ə|f|ğ|h|i|İ|j|k|l|m|n|o|ö|p|r|s|ş|t|u|ü|v|y|z)\u2060/g, "$1");
  car = car.replace(/\u2060P/g, "B");
  car = car.replace(/\u2060Ç/g, "C");
  car = car.replace(/\u2060T/g, "D");
  car = car.replace(/\u2060K/g, "G");
  car = car.replace(/\u2060X/g, "Q");
  car = car.replace(/\u2060p/g, "b");
  car = car.replace(/\u2060ç/g, "c");
  car = car.replace(/\u2060t/g, "d");
  car = car.replace(/\u2060k/g, "g");
  car = car.replace(/\u2060x/g, "q");
  car = car.replace(/\u2060/g, "");

  car = car.replace(/(E|Ə|İ|Ö|Ü)Q/g, "$1Ġ");
  car = car.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)q/g, "$1ġ");
  car = car.replace(/Q(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)/g, "Ġ$1");
  car = car.replace(/q(e|ə|i|ö|ü)/g, "ġ$1");
  
  car = car.replace(/(ġ)(a|o|u)/g, "g$2");
  car = car.replace(/(Ġ)(A|O|U|a|o|u)/g, "G$2");

  car = car.replace(/(E|Ə|İ|Ö|Ü)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ẏ|Z)Q/g, "$1$2Ġ");  
  car = car.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ẏ|z)q/g, "$1$2ġ");
  
  car = car.replace(/(Ġ|ġ)q/g, "$1ġ");
  car = car.replace(/ĠQ/g, "ĠĠ");  
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
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
