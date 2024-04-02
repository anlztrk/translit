var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/(\u0300|\u0301)/g, "");

car = car.replace(/C(H|h)/g, "K$1");
car = car.replace(/ch/g, "kh");
car = car.replace(/SC(\u2019|\u02bc|\u0027)?I(A|O|U)/g, "Ş$1$2");
car = car.replace(/Sc(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "Ş$1$2");
car = car.replace(/sc(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "ş$1$2");
car = car.replace(/SC(\u2019|\u02bc|\u0027)?(E|I)/g, "Ş$1$2");
car = car.replace(/sc(\u2019|\u02bc|\u0027)?(e|i)/g, "ş$1$2");
car = car.replace(/C(\u2019|\u02bc|\u0027)?I(A|O|U)/g, "Ç$1$2");
car = car.replace(/C(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "Ç$1$2");
car = car.replace(/c(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "ç$1$2");
car = car.replace(/G(\u2019|\u02bc|\u0027)?I(A|O|U)/g, "Ĝ$1$2");
car = car.replace(/G(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "Ĝ$1$2");
car = car.replace(/g(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "ĝ$1$2");
car = car.replace(/C(\u2019|\u02bc|\u0027)?(E|I|e|i)/g, "Ç$1$2");
car = car.replace(/c(\u2019|\u02bc|\u0027)?(e|i)/g, "ç$1$2");
car = car.replace(/G(\u2019|\u02bc|\u0027)?(E|I|e|i)/g, "Ĝ$1$2");
car = car.replace(/g(\u2019|\u02bc|\u0027)?(e|i)/g, "ĝ$1$2");
car = car.replace(/GL(\u2019|\u02bc|\u0027)?I(A|E|O|U)/g, "LY$1$2");
car = car.replace(/Gl(\u2019|\u02bc|\u0027)?i(a|e|o|u)/g, "Ly$1$2");
car = car.replace(/gl(\u2019|\u02bc|\u0027)?i(a|e|o|u)/g, "ly$1$2");
car = car.replace(/GL(\u2019|\u02bc|\u0027)?I/g, "LY$1I");
car = car.replace(/Gl(\u2019|\u02bc|\u0027)?i/g, "Ly$1i");
car = car.replace(/gl(\u2019|\u02bc|\u0027)?i/g, "ly$1i");
car = car.replace(/GN/g, "NY");
car = car.replace(/Gn/g, "Ny");
car = car.replace(/gn/g, "ny");
car = car.replace(/H/g, "");
car = car.replace(/h/g, "");
car = car.replace(/(B|C|Ç|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|Ş|T|V|X|Z)I(A|E|I|O|U)/g, "$1Y$2");
car = car.replace(/(B|C|Ç|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|Ş|T|V|X|Z|b|c|ç|d|f|g|ĝ|k|l|m|n|p|q|r|s|ş|t|v|x|z)i(a|e|i|o|u)/g, "$1y$2");
car = car.replace(/I(A|E|O|U|a|e|o|u)/g, "Y$1");
car = car.replace(/i(a|e|o|u)/g, "y$1");
car = car.replace(/(A|E|O|U)I/g, "$1Y");
car = car.replace(/(A|E|O|U|a|e|o|u)i/g, "$1y");
car = car.replace(/(C|Q)/g, "K");
car = car.replace(/(c|q)/g, "k");
car = car.replace(/Z/g, "C");
car = car.replace(/z/g, "c");
car = car.replace(/(A|E|I|Y|O|U)S(A|E|I|O|U)/g, "$1Z$2");
car = car.replace(/(A|E|I|Y|O|U|a|e|i|y|o|u)s(a|e|i|o|u)/g, "$1z$2");
car = car.replace(/(A|E|I|Y|O|U)C(A|E|I|O|U)/g, "$1Ʒ$2");
car = car.replace(/(A|E|I|Y|O|U|a|e|i|y|o|u)c(a|e|i|o|u)/g, "$1ʒ$2");
car = car.replace(/(A|E|I|O|U)CC/g, "$1TTS");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)cc/g, "$1tts");
car = car.replace(/(A|E|I|O|U)C/g, "$1TS");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)c/g, "$1ts");
car = car.replace(/(A|E|I|O|U)ƷƷ/g, "$1DDZ");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)ʒʒ/g, "$1ddz");
car = car.replace(/(A|E|I|O|U)Ʒ/g, "$1DZ");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)ʒ/g, "$1dz");
car = car.replace(/C/g, "S");
car = car.replace(/c/g, "s");
car = car.replace(/Ʒ/g, "Z");
car = car.replace(/ʒ/g, "z");

car = car.replace(/KÇ/g, "ÇÇ");
car = car.replace(/kç/g, "çç");
car = car.replace(/GĜ/g, "ĜĜ");
car = car.replace(/gĝ/g, "ĝĝ");

car = car.replace(/(A|E|I|Y|O|U)X(A|E|I|O|U)/g, "$1GZ$2");
car = car.replace(/(A|E|I|Y|O|U|a|e|i|y|o|u)x(a|e|i|o|u)/g, "$1gz$2");
car = car.replace(/X/g, "KS");
car = car.replace(/x/g, "ks");

car = car.replace(/Ĝ/g, "C");
car = car.replace(/ĝ/g, "c");

car = car.replace(/I/g, "İ");

car = car.normalize('NFC');
document.transcription.text2.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
