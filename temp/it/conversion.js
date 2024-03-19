var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/(\u0300|\u0301|\u2019|\u02bc|\u0027)/g, "");

car = car.replace(/C(H|h)/g, "K$1");
car = car.replace(/ch/g, "kh");
car = car.replace(/SCI(A|O|U)/g, "ŜJ$1");
car = car.replace(/Sci(a|o|u)/g, "Ŝj$1");
car = car.replace(/sci(a|o|u)/g, "ŝj$1");
car = car.replace(/SC(E|I)/g, "Ŝ$1");
car = car.replace(/sc(e|i)/g, "ŝ$1");
car = car.replace(/CI(A|O|U)/g, "ĈJ$1");
car = car.replace(/Ci(a|o|u)/g, "Ĉj$1");
car = car.replace(/ci(a|o|u)/g, "ĉj$1");
car = car.replace(/GI(A|O|U)/g, "ĜJ$1");
car = car.replace(/Gi(a|o|u)/g, "Ĝj$1");
car = car.replace(/gi(a|o|u)/g, "ĝj$1");
car = car.replace(/C(E|I|e|i)/g, "Ĉ$1");
car = car.replace(/c(e|i)/g, "ĉ$1");
car = car.replace(/G(E|I|e|i)/g, "Ĝ$1");
car = car.replace(/g(e|i)/g, "ĝ$1");
car = car.replace(/GLI(A|E|O|U)/g, "LJ$1");
car = car.replace(/Gli(a|e|o|u)/g, "Lj$1");
car = car.replace(/gli(a|e|o|u)/g, "lj$1");
car = car.replace(/GLI/g, "LJI");
car = car.replace(/Gli/g, "Lji");
car = car.replace(/gli/g, "lji");
car = car.replace(/GN/g, "NJ");
car = car.replace(/Gn/g, "Nj");
car = car.replace(/gn/g, "nj");
car = car.replace(/H/g, "");
car = car.replace(/h/g, "");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z)I(A|E|I|O|U)/g, "$1J$2");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z|b|c|ĉ|d|f|g|ĝ|k|l|m|n|p|q|r|s|t|v|x|z)i(a|e|i|o|u)/g, "$1j$2");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z)U(A|E|I|O|U)/g, "$1Ŭ$2");
car = car.replace(/(B|C|Ĉ|D|F|G|Ĝ|K|L|M|N|P|Q|R|S|T|V|X|Z|b|c|ĉ|d|f|g|ĝ|k|l|m|n|p|q|r|s|t|v|x|z)u(a|e|i|o|u)/g, "$1ŭ$2");
car = car.replace(/I(A|E|O|U|a|e|o|u)/g, "J$1");
car = car.replace(/i(a|e|o|u)/g, "j$1");
car = car.replace/(A|E|O|U)I/g, "$1J");
car = car.replace/(A|E|O|U|a|e|o|u)i/g, "$1j");
car = car.replace(/U(A|E|I|O|a|e|i|o)/g, "Ŭ$1");
car = car.replace(/u(a|e|i|o)/g, "ŭ$1");
car = car.replace(/(C|Q)/g, "K");
car = car.replace(/(c|q)/g, "k");
car = car.replace(/Z/g, "C");
car = car.replace(/z/g, "c");
car = car.replace(/(A|E|I|J|O|U)S(A|E|I|O|U)/g, "$1Z$2");
car = car.replace(/(A|E|I|J|O|U|a|e|i|j|o|u)s(a|e|i|o|u)/g, "$1z$2");
car = car.replace(/KĈ/g, "ĈĈ");
car = car.replace(/kĉ/g, "ĉĉ");
car = car.replace(/GĜ/g, "ĜĜ");
car = car.replace(/gĝ/g, "ĝĝ");

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
