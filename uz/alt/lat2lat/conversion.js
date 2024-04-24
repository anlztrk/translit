var car;

function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;

car = car.replace(/(\u2018|\u2019|\u02bb|\u02bc|\u0060|\u00b4)/g, "\u0027");
car = car.replace(/O\u0027/g, "Õ");
car = car.replace(/G\u0027/g, "Ğ");
car = car.replace(/S(H|h)/g, "Ş");
car = car.replace(/C(H|h)/g, "Ç");
car = car.replace(/N(G|g)/g, "Ñ");
car = car.replace(/O/g, "Â");
car = car.replace(/Õ/g, "O");
car = car.replace(/J/g, "C");
car = car.replace(/Ñ(A|Â|E|I|O|U)/g, "ÑG$1");
car = car.replace(/S\u0027(H|h)/g, "S$1");
car = car.replace(/(\u2018|\u2019|\u02bb|\u02bc|\u0060|\u00b4)/g, "\u0027");
car = car.replace(/o\u0027/g, "õ");
car = car.replace(/g\u0027/g, "ğ");
car = car.replace(/sh/g, "ş");
car = car.replace(/ch/g, "ç");
car = car.replace(/ng/g, "ñ");
car = car.replace(/o/g, "â");
car = car.replace(/õ/g, "o");
car = car.replace(/j/g, "c");
car = car.replace(/ñ(a|â|e|i|o|u)/g, "ñg$1");
car = car.replace(/s\u0027h/g, "sh");

car = car.replace(/LOBAT/g, "LO\u0027BAT");
car = car.replace(/MOCAZ/g, "MO\u0027CAZ");
car = car.replace(/MOCIZA/g, "MO\u0027CIZA");
car = car.replace(/MOTABAR/g, "MO\u0027TABAR");
car = car.replace(/MOTAD/g, "MO\u0027TAD");
car = car.replace(/MOTAZILA/g, "MO\u0027TAZILA");
car = car.replace(/MOTARIZA/g, "MO\u0027TARIZA");
car = car.replace(/(L|l)obat/g, "$1o\u0027bat");
car = car.replace(/(M|m)ocaz/g, "$1o\u0027caz");
car = car.replace(/(M|m)ociza/g, "$1o\u0027ciza");
car = car.replace(/(M|m)otabar/g, "$1o\u0027tabar");
car = car.replace(/(M|m)otad/g, "$1o\u0027tad");
car = car.replace(/(M|m)otazila/g, "$1o\u0027tazila");
car = car.replace(/(M|m)otariza/g, "$1o\u0027tariza");

car = car.replace(/i/g, "ı");

car = car.replace(/I(Ñ|ñ)/g, "İ$1");
car = car.replace(/ıñ/g, "iñ");

car = car.replace(/(G|H|K|L)A/g, "$1Ä");
car = car.replace(/(G|H|K|L)I/g, "$1İ");
car = car.replace(/(G|H|K|L)O/g, "$1Ö");
car = car.replace(/(G|H|K|L)U/g, "$1Ü");
car = car.replace(/(G|H|K|L|g|h|k|l)a/g, "$1ä");
car = car.replace(/(G|H|K|L|g|h|k|l)ı/g, "$1i");
car = car.replace(/(G|H|K|L|g|h|k|l)o/g, "$1ö");
car = car.replace(/(G|H|K|L|g|h|k|l)u/g, "$1ü");

car = car.replace(/A(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)?(Ä|İ|Ö|Ü)/g, "Ä$1$2$3");
car = car.replace(/A(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "Ä$1$2$3");
car = car.replace(/a(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "ä$1$2$3");
car = car.replace(/I(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)?(Ä|İ|Ö|Ü)/g, "İ$1$2$3");
car = car.replace(/I(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "İ$1$2$3");
car = car.replace(/ı(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "i$1$2$3");
car = car.replace(/O(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)?(Ä|İ|Ö|Ü)/g, "Ö$1$2$3");
car = car.replace(/O(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "Ö$1$2$3");
car = car.replace(/o(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "ö$1$2$3");
car = car.replace(/U(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)(B|C|Ç|D|F|G|H|K|L|M|N|Ñ|P|R|S|Ş|T|V|Y|Z)?(Ä|İ|Ö|Ü)/g, "Ü$1$2$3");
car = car.replace(/U(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "Ü$1$2$3");
car = car.replace(/u(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)(b|c|ç|d|f|g|h|k|l|m|n|ñ|p|r|s|ş|t|v|y|z)?(ä|i|ö|ü)/g, "ü$1$2$3");
document.transcription.text2.value = car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
