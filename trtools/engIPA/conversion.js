var car;
function cyrlat () {
car = document.transcription.text1.value;  
  car = car.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)Ğ/g, "$1G");
  car = car.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)ğ/g, "$1g");
  
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2");
  car = car.replace(/(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2");

  car = car.replace(/A/g, "a");
  car = car.replace(/B/g, "b");
  car = car.replace(/C|c/g, "dʒ");
  car = car.replace(/Ç|ç/g, "tʃ");
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

  car = car.replace(/Â|â/g, "ʲa");
  car = car.replace(/Û|û/g, "ʲu");

  car = car.replace(/eɰ/g, "eĵ");
  car = car.replace(/ĵ(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)/g, "ː$1");
  car = car.replace(/ĵ/g, "j");
  car = car.replace(/(a|i|o|u|y|œ|ɯ)ɰ/g, "$1ː");
  car = car.replace(/ɰ/g, "");

  car = car.replace(/(o|u|y|œ)v/g, "$1β");
  car = car.replace(/v(o|u|y|œ)/g, "β$1");

  car = car.replace(/(e|i|œ|y)ɡ/g, "$1ɟ");
  car = car.replace(/(e|i|œ|y)k/g, "$1c");
  car = car.replace(/(e|i|œ|y)ɫ/g, "$1l");
  car = car.replace(/(e|i|œ|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɡ/g, "$1$2ɟ");
  car = car.replace(/(e|i|œ|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)k/g, "$1$2c");
  car = car.replace(/(e|i|œ|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɫ/g, "$1$2l");
  car = car.replace(/ɡ(e|i|œ|y|ʲ)/g, "ɟ$1");
  car = car.replace(/k(e|i|œ|y|ʲ)/g, "c$1");
  car = car.replace(/ɫ(e|i|œ|y|ʲ)/g, "l$1");
  car = car.replace(/(ɟ|c|l)ʲ/g, "$1");

  car = car.replace(/ʲ(a|u)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)/g, "$1$2");
  car = car.replace(/ʲ(a|u)/g, "$1ː");

  car = car.replace(/n(ɡ|\.ɡ|k|\.k)/g, "ŋ$1");
  car = car.replace(/n(ɟ|\.ɟ|c|\.c)/g, "ɲ$1");

  car = car.replace(/.mez/g, ".mæz");
  car = car.replace(/e(ɾ|l|m|n)/g, "æ$1");
  car = car.replace(/eː(ɾ|l|m|n)/g, "æː$1");

  car = car.replace(/(a|e|ɯ|i|o|œ|u|y)h/g, "$1ː");
  car = car.replace(/(o|œ|u|y)β/g, "$1v");

  car = car.replace(/(p|b|c|ɟ|m|f|v|β|h)yː/g, "$1ju\u2060ː");
  car = car.replace(/βj/g, "vj");

  car = car.replace(/oɾ/g, "ɔːɾ");
  car = car.replace(/(œ|œː)ɾ/g, "ɜːɾ");
  car = car.replace(/(u|y)ːɾ/g, "ʊəɾ");
  car = car.replace(/ajɾ/g, "a\u2060ɪəɾ");
  car = car.replace(/ejɾ/g, "ɛəɾ");
  car = car.replace(/(ɯj|ij|ɯː|iː)ɾ/g, "ɪəɾ");
  car = car.replace(/(oj|œj)ɾ/g, "ɔɪəɾ");
  car = car.replace(/(uj|yj)ɾ/g, "wɪəɾ");

  car = car.replace(/aj/g, "a\u2060ɪ");
  car = car.replace(/ej/g, "e\u2060ɪ");
  car = car.replace(/oj|œj/g, "ɔɪ");
  car = car.replace(/ij/g, "i\u2060ː");
  car = car.replace(/uj/g, "wi\u2060ː");

  car = car.replace(/aː/g, "ɑː");
  car = car.replace(/eː/g, "ɛ");
  car = car.replace(/ɯː|iː/g, "i\u2060ː");
  car = car.replace(/oː|œː/g, "ɔː");
  car = car.replace(/uː|yː/g, "u\u2060ː");

  car = car.replace(/a/g, "ʌ");
  car = car.replace(/e/g, "ɛ");
  car = car.replace(/ɯ/g, "ə");
  car = car.replace(/i/g, "ɪ");
  car = car.replace(/o|œ/g, "oʊ");
  car = car.replace(/c(u|y)/g, "kjʊ");
  car = car.replace(/ɟ(u|y)/g, "ɡjʊ");
  car = car.replace(/u|y/g, "ʊ");

  car = car.replace(/ʌ\u2060/g, "a");
  car = car.replace(/ɛ\u2060/g, "e");
  car = car.replace(/ɪ\u2060/g, "i");
  car = car.replace(/ʊ\u2060/g, "u");

  car = car.replace(/c/g, "k");
  car = car.replace(/ɟ/g, "ɡ");
  car = car.replace(/ɫ/g, "l");
  car = car.replace(/ɲ/g, "ŋ");
  car = car.replace(/β/g, "w");
  car = car.replace(/ɾ/g, "ɹ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}