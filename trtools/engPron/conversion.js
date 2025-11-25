var car;

function cyrlat() {
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
	car = car.replace(/n(ɟ|\.ɟ|c|\.cc)/g, "ɲ$1");

	car = car.replace(/.mez/g, ".mæz");
	car = car.replace(/e(ɾ|l|m|n)/g, "æ$1");
	car = car.replace(/eː(ɾ|l|m|n)/g, "æː$1");

	car = car.replace(/æɲ(.)?(c|ɟ)/g, "eɲ$1$2");

	car = car.replace(/a/g, "ɑ");
	
	car = car.replace(/([ɑeæɯioœuy])h/g, '$1ː');
	car = car.replace(/([ɑeiuy])\.([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβjz])/g, '$1$2\.');
	car = car.replace(/ɟ\.([ɑɯoœuy])/g, "ɡ.j$1");
	car = car.replace(/c\.([ɑɯoœuy])/g, "k.j$1");
	car = car.replace(/l\.([ɑɯoœuy])/g, "ɫ.j$1");
	car = car.replace(/uj\.([ɑeæɯioœuy])/g, "uː\.j$1");
	car = car.replace(/[uy]j/g, "wiː");
	car = car.replace(/([ɑeæɯioœuy])β/g, '$1v');
	car = car.replace(/([bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])(yɾ|yːɾ)/g, '$1URE');
	car = car.replace(/(juɾ|juːɾ|jyɾ|jyːɾ)/g, 'YOOR');
	car = car.replace(/([bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])(y|yː)/g, '$1EW');
	car = car.replace(/(ju|juː|jy|jyː)/g, 'YOO');
	car = car.replace(/æɾ/g, 'ARR');
	car = car.replace(/æ/g, 'A');
	car = car.replace(/ɑːɾ/g, 'AR');
	car = car.replace(/ɑː/g, 'AH');
	car = car.replace(/e([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'E$1');
	car = car.replace(/(ej|eː|e)/g, 'AY');
	car = car.replace(/iɾ/g, 'IRR');
	car = car.replace(/i([bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'I$1');
	car = car.replace(/(iː|ij|ɯj|ɯː|i)/g, 'EE');
	car = car.replace(/ɯːɾ/g, 'EER');
	car = car.replace(/ɑjɾ/g, 'IRE');
	car = car.replace(/([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])ɑj([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1Y$2E');
	car = car.replace(/([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])ɑj/g, '$1Y');
	car = car.replace(/ɑj/g, 'EYE');
	car = car.replace(/[oœ]jɾ/g, 'OIR');
	car = car.replace(/[oœ]j/g, 'OY');
	car = car.replace(/œɾ/g, 'UR');
	car = car.replace(/oːɾ|oɾ/g, 'OR');
	car = car.replace(/oː|o|œː|œ/g, 'OH');
	car = car.replace(/ɑɾ/g, 'URR');
	car = car.replace(/ɑ([bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'U$1');
	car = car.replace(/[uy]ɾ/g, 'UURR');
	car = car.replace(/[uy]([bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'UU$1');
	car = car.replace(/(uː|u|yː|y)/g, 'OO');
	car = car.replace(/ɑ/g, 'UH');
	car = car.replace(/ɯ/g, 'Ə');
	car = car.replace(/ʤ/g, 'J');
	car = car.replace(/([AEIOUYaeuioy])ʧ/g, '$1TCH');
	car = car.replace(/ʧ/g, 'CH');
	car = car.replace(/[ɡɟ]([EIei])/g, 'GH$1');
	car = car.replace(/[ɡɟ]/g, 'G');
	car = car.replace(/ʒ/g, 'ZH');
	car = car.replace(/[lɫ]/g, 'L');
	car = car.replace(/(ŋk|ɲc)/g, 'NK');
	car = car.replace(/[kc]/g, 'K');
	car = car.replace(/[ŋɲ]/g, 'NG');
	car = car.replace(/ɾ/g, 'R');
	car = car.replace(/ʃ/g, 'SH');
	car = car.replace(/β/g, 'W');
	car = car.replace(/j/g, 'Y');
	car = car.replace(/\u002e/g, '\u002d');
	car = car.toLowerCase();
	document.transcription.text2.value = car;
}

function copy1() {
	textRange = document.transcription.text1.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}

function copy2() {
	textRange = document.transcription.text2.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}
