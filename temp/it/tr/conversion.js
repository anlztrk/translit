var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/(\u0300|\u0301|\u2019|\u02bc|\u0027)/g, "");

car = car.replace(/C(H|h)/g, "K$1");
car = car.replace(/ch/g, "kh");
car = car.replace(/SCI(A|O|U)/g, "Ş$1");
car = car.replace(/Sci(a|o|u)/g, "Ş$1");
car = car.replace(/sci(a|o|u)/g, "ş$1");
car = car.replace(/SC(E|I)/g, "Ş$1");
car = car.replace(/sc(e|i)/g, "ş$1");
car = car.replace(/CI(A|O|U)/g, "Ç$1");
car = car.replace(/Ci(a|o|u)/g, "Ç$1");
car = car.replace(/ci(a|o|u)/g, "ç$1");
car = car.replace(/GI(A|O|U)/g, "Ĝ$1");
car = car.replace(/Gi(a|o|u)/g, "Ĝ$1");
car = car.replace(/gi(a|o|u)/g, "ĝ$1");
car = car.replace(/C(E|I|e|i)/g, "Ç$1");
car = car.replace(/c(e|i)/g, "ç$1");
car = car.replace(/G(E|I|e|i)/g, "Ĝ$1");
car = car.replace(/g(e|i)/g, "ĝ$1");
car = car.replace(/GLI(A|E|O|U)/g, "LY$1");
car = car.replace(/Gli(a|e|o|u)/g, "Ly$1");
car = car.replace(/gli(a|e|o|u)/g, "ly$1");
car = car.replace(/GLI/g, "LYI");
car = car.replace(/Gli/g, "Lyi");
car = car.replace(/gli/g, "lyi");
car = car.replace(/GN/g, "NY");
car = car.replace(/Gn/g, "Ny");
car = car.replace(/gn/g, "ny");
car = car.replace(/H/g, "");
car = car.replace(/h/g, "");
car = car.replace(/(B|C|Ç|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|Ş|T|V|X|Z)I(A|E|I|O|U)/g, "$1Y$2");
car = car.replace(/(B|C|Ç|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|Ş|T|V|X|Z|b|c|ç|d|f|g|ĝ|k|l|m|n|p|q|r|s|ş|t|v|x|z)i(a|e|i|o|u)/g, "$1y$2");
car = car.replace(/(B|C|Ç|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|Ş|T|V|X|Z)U(A|E|I|O|U)/g, "$1UV$2");
car = car.replace(/(B|C|Ç|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|Ş|T|V|X|Z|b|c|ç|d|f|g|ĝ|k|l|m|n|p|q|r|s|ş|t|v|x|z)u(a|e|i|o|u)/g, "$1uv$2");
car = car.replace(/I(A|E|O|U|a|e|o|u)/g, "Y$1");
car = car.replace(/i(a|e|o|u)/g, "y$1");
car = car.replace(/(A|E|O|U)I/g, "$1Y");
car = car.replace(/(A|E|O|U|a|e|o|u)i/g, "$1y");
car = car.replace(/U(A|E|I|O)/g, "UV$1");
car = car.replace(/(U|u)(a|e|i|o)/g, "$1v$2");
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

car = car.replace(/Ĝ/g, "C");
car = car.replace(/ĝ/g, "c");

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
