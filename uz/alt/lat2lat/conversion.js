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
car = car.replace(/a/g, "ä");
car = car.replace(/A/g, "Ä");

car = car.replace(/(Ğ|X|Q)Ä/g, "$1A");
car = car.replace(/(G|H|K)I/g, "$1İ");
car = car.replace(/(G|H|K)O/g, "$1Ö");
car = car.replace(/(G|H|K)U/g, "$1Ü");
car = car.replace(/(Ğ|X|Q|ğ|x|q)ä/g, "$1a");  
car = car.replace(/(G|H|K|g|h|k)ı/g, "$1i");  
car = car.replace(/(G|H|K|g|h|k)o/g, "$1ö");  
car = car.replace(/(G|H|K|g|h|k)u/g, "$1ü");  

car = car.replace(/Ä(Ğ|X|Q|ğ|x|q)/g, "A$1");
car = car.replace(/I(G|H|K|g|h|k)/g, "İ$1");
car = car.replace(/O(G|H|K|g|h|k)/g, "Ö$1");
car = car.replace(/U(G|H|K|g|h|k)/g, "Ü$1");
car = car.replace(/ä(ğ|x|q)/g, "a$1");
car = car.replace(/ı(g|h|k)/g, "i$1");
car = car.replace(/o(g|h|k)/g, "ö$1");
car = car.replace(/u(g|h|k)/g, "ü$1");

car = car.replace(/(G|H|K|g|h|k)a/g, "$1ä");
car = car.replace(/(Ğ|X|Q)İ/g, "$1I");
car = car.replace(/(Ğ|X|Q)Ö/g, "$1O");
car = car.replace(/(Ğ|X|Q)Ü/g, "$1U");
car = car.replace(/(G|H|K|g|h|k)a/g, "$1ä");
car = car.replace(/(Ğ|X|Q|ğ|x|q)i/g, "$1ı");
car = car.replace(/(Ğ|X|Q|ğ|x|q)ö/g, "$1o");
car = car.replace(/(Ğ|X|Q|ğ|x|q)ü/g, "$1u");

car = car.replace(/I(Ñ|ñ)/g, "İ$1");
car = car.replace(/ıñ/g, "iñ");

car = car.replace(/Ä/g, "Ȧ");
car = car.replace(/ä/g, "ȧ");
car = car.replace(/Ö/g, "Ȯ");
car = car.replace(/ö/g, "ȯ");
car = car.replace(/Ü/g, "U̇");
car = car.replace(/ü/g, "u̇");
car = car.replace(/X/g, "H");
car = car.replace(/x/g, "h");
document.transcription.text2.value = car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
