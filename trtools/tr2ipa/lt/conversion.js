var car;
function cyrlat () {
car = document.transcription.text1.value;  
  car = car.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)Ğ/g, "$1G");
  car = car.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)ğ/g, "$1g");
  
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2");

  car = car.replace(/A/g, "a");
  car = car.replace(/B/g, "b");
  car = car.replace(/C|c/g, "ʤ");
  car = car.replace(/Ç|ç/g, "ʧ");
  car = car.replace(/D/g, "d");
  car = car.replace(/E/g, "e");
  car = car.replace(/Ê|ê/g, "eː");
  car = car.replace(/F/g, "f");
  car = car.replace(/G|g/g, "ɡ");
  car = car.replace(/Ğ|ğ/g, "ɰ");
  car = car.replace(/H/g, "h");
  car = car.replace(/I|ı/g, "ɯ");
  car = car.replace(/İ/g, "i");
  car = car.replace(/Î|î/g, "iː");
  car = car.replace(/J|j/g, "ʒ");
  car = car.replace(/K/g, "k");
  car = car.replace(/L|l/g, "ɫ");
  car = car.replace(/M/g, "m");
  car = car.replace(/N/g, "n");
  car = car.replace(/O/g, "o");
  car = car.replace(/Ö|ö/g, "œ");
  car = car.replace(/P/g, "p");
  car = car.replace(/R|r/g, "ɾ");
  car = car.replace(/S/g, "s");
  car = car.replace(/Ş|ş/g, "ʃ");
  car = car.replace(/T/g, "t");
  car = car.replace(/U/g, "u");
  car = car.replace(/Y|y/g, "j");
  car = car.replace(/Ü|ü/g, "y");
  car = car.replace(/V/g, "v");
  car = car.replace(/Z/g, "z");

  car = car.replace(/(b|ʤ|ʧ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)(b|ʤ|ʧ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)(a|â|o|u|û|ɯ|e|ê|i|î|y|œ)/g, "$1ɯ\.$2$3");
  
  car = car.replace(/Â|â/g, "ʲa");
  car = car.replace(/Û|û/g, "ʲu");

  car = car.replace(/eɰ/g, "eĵ");
  car = car.replace(/ĵ(b|ʤ|ʧ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)/g, "ː$1");
  car = car.replace(/ĵ/g, "j");
  car = car.replace(/(a|i|o|u|y|œ|ɯ)ɰ/g, "$1ː");
  car = car.replace(/a\.i/g, "aː.i");
	car = car.replace(/a\.ɰɯ/g, "a.ɰa");
	car = car.replace(/ɰ/g, "");

  car = car.replace(/(o|u|y|œ)v/g, "$1β");
  car = car.replace(/v(o|u|y|œ)/g, "β$1");

  car = car.replace(/(e|i|œ|y)ɡ/g, "$1ɟ");
  car = car.replace(/(e|i|œ|y)k/g, "$1c");
  car = car.replace(/(e|i|œ|y)ɫ/g, "$1l");
  car = car.replace(/(e|i|œ|y)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɡ/g, "$1$2ɟ");
  car = car.replace(/(e|i|œ|y)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)k/g, "$1$2c");
  car = car.replace(/(e|i|œ|y)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɫ/g, "$1$2l");
  car = car.replace(/ɡ(e|i|œ|y|ʲ)/g, "ɟ$1");
  car = car.replace(/k(e|i|œ|y|ʲ)/g, "c$1");
  car = car.replace(/ɫ(e|i|œ|y|ʲ)/g, "l$1");
  car = car.replace(/(ɟ|c|l)ʲ/g, "$1");

  car = car.replace(/ʲ(a|u)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)/g, "$1$2");
  car = car.replace(/ʲ(a|u)/g, "$1ː");

  car = car.replace(/n(ɡ|\.ɡ|k|\.k)/g, "ŋ$1");
  car = car.replace(/n(ɟ|\.ɟ|c|\.c)/g, "ɲ$1");

  car = car.replace(/.mez/g, ".mæz");
  car = car.replace(/e(ɾ|l|m|n)/g, "æ$1");
  car = car.replace(/eː(ɾ|l|m|n)/g, "æː$1");
  
  car = car.replace(/(Ĺ|ĺ)/g, "l");

  car = car.replace(/f\.f/g, "fː");
  car = car.replace(/v\.v/g, "vː");
  car = car.replace(/β\.β/g, "βː");
  car = car.replace(/s\.s/g, "sː");
  car = car.replace(/z\.z/g, "zː");
  car = car.replace(/t\.t/g, "tː");
  car = car.replace(/d\.d/g, "dː");
  car = car.replace(/k\.k/g, "kː");
  car = car.replace(/c\.c/g, "cː");
  car = car.replace(/ɡ\.ɡ/g, "ɡː");
  car = car.replace(/ɟ\.ɟ/g, "cː");
  car = car.replace(/ʧ\.ʧ/g, "ʧː");
  car = car.replace(/ʤ\.ʤ/g, "ʤː");
  car = car.replace(/ʃ\.ʃ/g, "ʃː");
  car = car.replace(/ʒ\.ʒ/g, "ʒː");
  car = car.replace(/h\.h/g, "hː");
  car = car.replace(/p\.p/g, "pː");
  car = car.replace(/b\.b/g, "bː");
  car = car.replace(/m\.m/g, "mː");
  car = car.replace(/n\.n/g, "nː");
  car = car.replace(/l\.l/g, "lː");
  car = car.replace(/ɫ\.ɫ/g, "ɫː");
  car = car.replace(/j\.j/g, "jː");
  car = car.replace(/ʤ/g, "d͡ʒ");
  car = car.replace(/ʧ/g, "t͡ʃ");
  car = car.replace(/a/g, "ɑ");
  car = car.replace(/æ/g, "ɛ");
  car = car.replace(/ɟ/g, "ɡʲ");
  car = car.replace(/c/g, "kʲ");
  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
