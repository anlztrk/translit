var car;
function cyrlat () {
car = document.transcription.text1.value;  
  car = car.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)Ğ/g, "$1G");
  car = car.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)ğ/g, "$1g");
  
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2");
  car = car.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2");

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

  car = car.replace(/\.mez/g, "\.mæz");
  car = car.replace(/e(ɾ|l|m|n)/g, "æ$1");
  car = car.replace(/eː(ɾ|l|m|n)/g, "æː$1");

  car = car.replace(/(a|e|ɯ|i|o|œ|u|y)h/g, "$1ː");
  car = car.replace(/(o|œ|u|y)β/g, "$1v");

  car = car.replace(/(p|b|c|ɟ|m|f|v|β|h)yː/g, "$1jyː");
  car = car.replace(/βj/g, "vj");

  car = car.replace(/oɾ/g, "ɔːɾ");
  car = car.replace(/(œ|œː)ɾ/g, "ɜːɾ");
  car = car.replace(/(u|y)ːɾ/g, "ʊəɾ");
  car = car.replace(/ajɾ/g, "áɪəɾ");
  car = car.replace(/ejɾ/g, "ɛəɾ");
  car = car.replace(/(ɯj|ij|ɯː|iː)ɾ/g, "ɪəɾ");
  car = car.replace(/(oj|œj)ɾ/g, "ɔɪəɾ");
  car = car.replace(/(uj|yj)ɾ/g, "wɪəɾ");

  car = car.replace(/aj/g, "áɪ");
  car = car.replace(/ej/g, "éɪ");
  car = car.replace(/oj|œj/g, "ɔɪ");
  car = car.replace(/ij/g, "íː");
  car = car.replace(/m(uj|yj)/g, "mʊ\.íː");
  car = car.replace(/n(uj|yj)/g, "nʊ\.íː");
  car = car.replace(/dʒ(uj|yj)/g, "dʒʊ\.íː");
  car = car.replace(/z(uj|yj)/g, "zʊ\.íː");
  car = car.replace(/ʒ(uj|yj)/g, "ʒʊ\.íː");
  car = car.replace(/l(uj|yj)/g, "lʊ\.íː");
  car = car.replace(/ɾ(uj|yj)/g, "ɾʊ\.íː");
  car = car.replace(/j(uj|yj)/g, "jʊ\.íː");
  car = car.replace(/β(uj|yj)/g, "βʊ\.íː");
  car = car.replace(/(uj|yj)/g, "wíː");

  car = car.replace(/aː/g, "ɑː");
  car = car.replace(/eː/g, "ɛ");
  car = car.replace(/ɯː|iː/g, "íː");
  car = car.replace(/oː|œː/g, "óʊ");
  car = car.replace(/uː|yː/g, "úː");
  
  car = car.replace(/c(u|y)/g, "kj$1");
  car = car.replace(/ɟ(u|y)/g, "ɡj$1");
  
  car = car.replace(/a\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʌ$1\.");
  car = car.replace(/e\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɛ$1\.");
  car = car.replace(/i\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɪ$1\.");
  car = car.replace(/(u|y)\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʊ$2\.");
  
  car = car.replace(/a(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʌ$1");
  car = car.replace(/e(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɛ$1");
  car = car.replace(/i(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɪ$1");
  car = car.replace(/(u|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʊ$2");

  car = car.replace(/a/g, "ɑː");
  car = car.replace(/e/g, "eɪ");
  car = car.replace(/ɯ/g, "ə");
  car = car.replace(/i/g, "iː");
  car = car.replace(/o|œ/g, "oʊ");
  car = car.replace(/u|y/g, "uː");

  car = car.replace(/á/g, "a");
  car = car.replace(/é/g, "e");
  car = car.replace(/ó/g, "o");
  car = car.replace(/í/g, "i");
  car = car.replace(/ú/g, "u");

  car = car.replace(/c/g, "k");
  car = car.replace(/ɟ/g, "ɡ");
  car = car.replace(/ɫ/g, "l");
  car = car.replace(/ɲ/g, "ŋ");
  car = car.replace(/β/g, "w");
  car = car.replace(/ɾ/g, "ɹ");
  car = car.replace(/\u2060/g, "");
    
  car = car.replace(/(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|j|z)jʊəɹ/g, "$1EWR");
  car = car.replace(/jʊəɹ/g, "YOOR");
  car = car.replace(/(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|j|z)aɪ(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|j|z)/g, "$1Y$2E");
  car = car.replace(/ɔɪəɹ/g, "OIR");
  car = car.replace(/(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|j|z)juː/g, "$1EW");
  car = car.replace(/aʊəɹ/g, "OWR");
  car = car.replace(/uː|u/g, "OO");
  car = car.replace(/iː|i/g, "EE");  
  car = car.replace(/ɛəɹ/g, "AIR");
  car = car.replace(/ɑːɹ/g, "AR");
  car = car.replace(/ɛ/g, "EH");
  car = car.replace(/EH(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|z)/g, "E$1");
  car = car.replace(/juː/g, "YOO");
  car = car.replace(/(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|z)aɪ/g, "$1Y");
  car = car.replace(/aɪ/g, "EYE");
  car = car.replace(/eɪ/g, "AY");
  car = car.replace(/ɔɪ/g, "OY");
  car = car.replace(/ɪ/g, "IH");
  car = car.replace(/IH(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|z)/g, "I$1");
  car = car.replace(/ʊəɹ/g, "OOR");
  car = car.replace(/ʊɹ(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|z)/g, "UUR$1");
  car = car.replace(/ɪəɹ/g, "EER");
  car = car.replace(/ɔːɹ/g, "OR");
  car = car.replace(/ʌɹ/g, "URR");
  car = car.replace(/ʌ/g, "UH");  
  car = car.replace(/UH(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|l|m|n|ŋ|p|ɹ|s|ʃ|t|v|w|z)/g, "U$1");
  car = car.replace(/ɜːɹ/g, "UR");
  car = car.replace(/oʊ/g, "OH");  
  car = car.replace(/ɑː/g, "AH");  
  car = car.replace(/æɹ/g, "ARR");
  car = car.replace(/ɔː/g, "AW");
  car = car.replace(/ɪɹ/g, "IRR");
  car = car.replace(/ɒɹ/g, "ORR");
  car = car.replace(/aʊ/g, "OW");
  car = car.replace(/ʊɹ/g, "UURR");
  car = car.replace(/əɹ/g, "ƏR");
  car = car.replace(/æ/g, "A");  
  car = car.replace(/ɒ/g, "O");  
  car = car.replace(/ʊ/g, "UU");
  car = car.replace(/ə/g, "Ə");
  
  car = car.replace(/(A|AH|AIR|AR|ARR|AW|AY|E|EH|EE|EW|EWR|EYE|I|IH|IRE|IRR|O|OH|OIR|OO|OOR|OR|ORR|OW|OWR|OU|U|UH|UR|URR|UU|UUR|UURR|Y|Ə|ƏR|m|n|ŋ|b|d|dʒ|ɡ|v|ð|z|ʒ)s/g, "$1SS");
  car = car.replace(/ɡ(E|I)/g, "GH$1");
  car = car.replace(/(A|AH|AIR|AR|ARR|AW|AY|E|EH|EE|EW|EWR|EYE|I|IH|IRE|IRR|O|OH|OIR|OO|OOR|OR|ORR|OW|OWR|OU|U|UH|UR|URR|UU|UUR|UURR|Y|Ə|ƏR)tʃ/g, "$1TCH");
  car = car.replace(/tʃ/g, "CH");
  car = car.replace(/dʒ/g, "J");
  car = car.replace(/ŋk/g, "NK");
  car = car.replace(/ŋɡ/g, "NG");
  car = car.replace(/hw/g, "WH");
  car = car.replace(/b/g, "B");
  car = car.replace(/d/g, "D");
  car = car.replace(/ð/g, "DH");
  car = car.replace(/f/g, "F");
  car = car.replace(/ɡ/g, "G");
  car = car.replace(/h/g, "H");
  car = car.replace(/k/g, "K");
  car = car.replace(/l/g, "L");
  car = car.replace(/m/g, "M");
  car = car.replace(/n/g, "N");
  car = car.replace(/ŋ/g, "NG");
  car = car.replace(/p/g, "P");
  car = car.replace(/ɹ/g, "R");
  car = car.replace(/s/g, "S");
  car = car.replace(/ʃ/g, "SH");
  car = car.replace(/t/g, "T");
  car = car.replace(/θ/g, "TH");
  car = car.replace(/v/g, "V");
  car = car.replace(/w/g, "W");
  car = car.replace(/j/g, "Y");
  car = car.replace(/z/g, "Z");
  car = car.replace(/ʒ/g, "ZH");
  car = car.replace(/\./g, "-");
  
  car = car.replace(/A/g, "a");
  car = car.replace(/B/g, "b");
  car = car.replace(/C/g, "c");
  car = car.replace(/D/g, "d");
  car = car.replace(/E/g, "e");
  car = car.replace(/Ə/g, "ə");
  car = car.replace(/F/g, "f");
  car = car.replace(/G/g, "g");
  car = car.replace(/H/g, "h");
  car = car.replace(/I/g, "i");
  car = car.replace(/J/g, "j");
  car = car.replace(/K/g, "k");
  car = car.replace(/L/g, "l");
  car = car.replace(/M/g, "m");
  car = car.replace(/N/g, "n");
  car = car.replace(/O/g, "o");
  car = car.replace(/P/g, "p");
  car = car.replace(/Q/g, "q");
  car = car.replace(/R/g, "r");
  car = car.replace(/S/g, "s");
  car = car.replace(/T/g, "t");
  car = car.replace(/U/g, "u");
  car = car.replace(/V/g, "v");
  car = car.replace(/W/g, "w");
  car = car.replace(/X/g, "x");
  car = car.replace(/Y/g, "y");
  car = car.replace(/Z/g, "z");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
