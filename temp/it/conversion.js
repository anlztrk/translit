var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/(\u0300|\u0301)/g, "");

car = car.replace(/C(\u2019|\u02bc|\u0027)?(H|h)/g, "K$1$2");
car = car.replace(/c(\u2019|\u02bc|\u0027)?h/g, "k$1h");
car = car.replace(/SC(\u2019|\u02bc|\u0027)?I(A|O|U)/g, "Ŝ$1$2");
car = car.replace(/Sc(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "Ŝ$1$2");
car = car.replace(/sc(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "ŝ$1$2");
car = car.replace(/SC(\u2019|\u02bc|\u0027)?(E|I)/g, "Ŝ$1$2");
car = car.replace(/sc(\u2019|\u02bc|\u0027)?(e|i)/g, "ŝ$1$2");
car = car.replace(/C(\u2019|\u02bc|\u0027)?I(A|O|U)/g, "Ĉ$1$2");
car = car.replace(/C(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "Ĉ$1$2");
car = car.replace(/c(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "ĉ$1$2");
car = car.replace(/G(\u2019|\u02bc|\u0027)?I(A|O|U)/g, "Ĝ$1$2");
car = car.replace(/G(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "Ĝ$1$2");
car = car.replace(/g(\u2019|\u02bc|\u0027)?i(a|o|u)/g, "ĝ$1$2");
car = car.replace(/C(\u2019|\u02bc|\u0027)?(E|I|e|i)/g, "Ĉ$1$2");
car = car.replace(/c(\u2019|\u02bc|\u0027)?(e|i)/g, "ĉ$1$2");
car = car.replace(/G(\u2019|\u02bc|\u0027)?(E|I|e|i)/g, "Ĝ$1$2");
car = car.replace(/g(\u2019|\u02bc|\u0027)?(e|i)/g, "ĝ$1$2");
car = car.replace(/GL(\u2019|\u02bc|\u0027)?I(A|E|O|U)/g, "LJ$1$2");
car = car.replace(/Gl(\u2019|\u02bc|\u0027)?i(a|e|o|u)/g, "Lj$1$2");
car = car.replace(/gl(\u2019|\u02bc|\u0027)?i(a|e|o|u)/g, "lj$1$2");
car = car.replace(/GL(\u2019|\u02bc|\u0027)?I/g, "LJ$1I");
car = car.replace(/Gl(\u2019|\u02bc|\u0027)?i/g, "Lj$1i");
car = car.replace(/gl(\u2019|\u02bc|\u0027)?i/g, "lj$1i");
car = car.replace(/GN/g, "NJ");
car = car.replace(/Gn/g, "Nj");
car = car.replace(/gn/g, "nj");
car = car.replace(/H/g, "");
car = car.replace(/h/g, "");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z)(\u2019|\u02bc|\u0027)?I(A|E|I|O|U)/g, "$1$2J$3");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z|b|c|ĉ|d|f|g|ĝ|k|l|m|n|p|q|r|s|t|v|x|z)(\u2019|\u02bc|\u0027)?i(a|e|i|o|u)/g, "$1$2j$3");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z)(\u2019|\u02bc|\u0027)?U(A|E|I|O|U)/g, "$1$2Ŭ$3");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z|b|c|ĉ|d|f|g|ĝ|k|l|m|n|p|q|r|s|t|v|x|z)(\u2019|\u02bc|\u0027)?u(a|e|i|o|u)/g, "$1$2ŭ$3");
car = car.replace(/I(A|E|O|U|a|e|o|u)/g, "J$1");
car = car.replace(/i(a|e|o|u)/g, "j$1");
car = car.replace(/(A|E|O|U)I/g, "$1J");
car = car.replace(/(A|E|O|U|a|e|o|u)i/g, "$1j");
car = car.replace(/U(A|E|I|O|a|e|i|o)/g, "Ŭ$1");
car = car.replace(/u(a|e|i|o)/g, "ŭ$1");
car = car.replace(/(C|Q)/g, "K");
car = car.replace(/(c|q)/g, "k");
car = car.replace(/Z/g, "C");
car = car.replace(/z/g, "c");
car = car.replace(/(A|E|I|J|O|U)(\u2019|\u02bc|\u0027)?S(\u2019|\u02bc|\u0027)?(A|E|I|O|U)/g, "$1$2Z$3$4");
car = car.replace(/(A|E|I|J|O|U|a|e|i|j|o|u)(\u2019|\u02bc|\u0027)?s(\u2019|\u02bc|\u0027)?(a|e|i|o|u)/g, "$1$2z$3$4");
car = car.replace(/K(\u2019|\u02bc|\u0027)?Ĉ/g, "Ĉ$1Ĉ");
car = car.replace(/k(\u2019|\u02bc|\u0027)?ĉ/g, "ĉ$1ĉ");
car = car.replace(/G(\u2019|\u02bc|\u0027)?Ĝ/g, "Ĝ$1Ĝ");
car = car.replace(/g(\u2019|\u02bc|\u0027)?ĝ/g, "ĝ$1ĝ");

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
