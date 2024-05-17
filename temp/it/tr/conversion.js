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
car = car.replace(/(A|E|I|J|O|U)(\u2019|\u02bc|\u0027)?S(\u2019|\u02bc|\u0027)?(A|E|I|O|U)/g, "$1$2Z$3$4");
car = car.replace(/(A|E|I|J|O|U|a|e|i|j|o|u)(\u2019|\u02bc|\u0027)?s(\u2019|\u02bc|\u0027)?(a|e|i|o|u)/g, "$1$2z$3$4");
car = car.replace(/(A|E|I|Y|O|U)(\u2019|\u02bc|\u0027)?C(\u2019|\u02bc|\u0027)?(A|E|I|O|U)/g, "$1$2Ʒ$3$4");
car = car.replace(/(A|E|I|Y|O|U|a|e|i|y|o|u)(\u2019|\u02bc|\u0027)?c(\u2019|\u02bc|\u0027)?(a|e|i|o|u)/g, "$1$2ʒ$3$4");
car = car.replace(/(A|E|I|O|U)(\u2019|\u02bc|\u0027)?CC/g, "$1$2TTS");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)(\u2019|\u02bc|\u0027)?cc/g, "$1$2tts");
car = car.replace(/(A|E|I|O|U)(\u2019|\u02bc|\u0027)?C/g, "$1$2TS");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)(\u2019|\u02bc|\u0027)?c/g, "$1$2ts");
car = car.replace(/(A|E|I|O|U)(\u2019|\u02bc|\u0027)?ƷƷ/g, "$$21DDZ");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)(\u2019|\u02bc|\u0027)?ʒʒ/g, "$1$2ddz");
car = car.replace(/(A|E|I|O|U)(\u2019|\u02bc|\u0027)?Ʒ/g, "$1$2DZ");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)(\u2019|\u02bc|\u0027)?ʒ/g, "$1$2dz");
car = car.replace(/C/g, "S");
car = car.replace(/c/g, "s");
car = car.replace(/Ʒ/g, "Z");
car = car.replace(/ʒ/g, "z");


car = car.replace(/K(\u2019|\u02bc|\u0027)?Ç/g, "Ç$1Ç");
car = car.replace(/k(\u2019|\u02bc|\u0027)?ç/g, "ç$1ç");
car = car.replace(/G(\u2019|\u02bc|\u0027)?Ĝ/g, "Ĝ$1Ĝ");
car = car.replace(/g(\u2019|\u02bc|\u0027)?ĝ/g, "ĝ$1ĝ");

car = car.replace(/(A|E|I|Y|O|U)(\u2019|\u02bc|\u0027)?X(\u2019|\u02bc|\u0027)?(A|E|I|O|U)/g, "$1$2GZ$3$4");
car = car.replace(/(A|E|I|Y|O|U|a|e|i|y|o|u)(\u2019|\u02bc|\u0027)?x(\u2019|\u02bc|\u0027)?(a|e|i|o|u)/g, "$1$2gz$3$4");
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
