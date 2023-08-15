var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)(I|İ)/g, "$1\u2019$2");
car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)(ı|i)/g, "$1\u2019$2");
car = car.replace(/İY/g, "İY\u2060");
car = car.replace(/(İ|i)y/g, "$1y\u2060");
car = car.replace(/Y(İ|i)/g, "Y\u2060$1");
car = car.replace(/yi/g, "y\u2060i");
car = car.replace(/Y/g, "İ");
car = car.replace(/y/g, "i");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)Iİ/g, "$1I");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ıi/g, "$1ı");
car = car.replace(/Iİ/g, "İY\u2060");
car = car.replace(/Ii/g, "İy\u2060");
car = car.replace(/ıi/g, "iy\u2060");
car = car.replace(/İI/g, "Y\u2060İ");
car = car.replace(/İı/g, "Y\u2060i");
car = car.replace(/iı/g, "y\u2060i");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Y\u2060|Z)I/g, "$1İ\u2060");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Y\u2060|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|y\u2060|z)ı/g, "$1i\u2060");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Y\u2060|Z)İ\u2060(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Y\u2060|Z)/g, "$1I$2");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Y\u2060|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|y\u2060|z)i\u2060(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|y\u2060|z)/g, "$1ı$2");
car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Y\u2060|Z)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Y\u2060|Z)İ\u2060/g, "$1$2I");
car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Y\u2060|Z|a|b|c|ç|d|e|ə|f|g|ğ|h|x|ı|i|j|k|q|l|m|n|o|ö|p|r|s|ş|t|u|ü|v|y|y\u2060|z)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|y\u2060|z)i\u2060/g, "$1$2ı");
car = car.replace(/(İ|i)\u2060/g, "$1");
car = car.replace(/İ(A|E|Ə|O|Ö|U|Ü|a|e|ə|o|ö|u|ü)/g, "Y$1");
car = car.replace(/i(a|e|ə|o|ö|u|ü)/g, "y$1");
car = car.replace(/I/g, "Y");
car = car.replace(/İ/g, "I");
car = car.replace(/ı/g, "y");
car = car.replace(/\u2060/g, "");

car = car.replace(/(B|D|Ğ|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
car = car.replace(/(B|D|Ğ|M|N|P|R|S|T|V|Y|Z|b|d|g|ğ|k|l|m|n|p|r|s|t|v|y|z)ə/g, "$1e");
car = car.replace(/Ə/g, "A");
car = car.replace(/ə/g, "a");
car = car.replace(/Ö/g, "O");
car = car.replace(/ö/g, "o");
car = car.replace(/Ü/g, "U");
car = car.replace(/ü/g, "u");
car = car.replace(/J/g, "Jh");
car = car.replace(/j/g, "jh");
car = car.replace(/C/g, "J");
car = car.replace(/c/g, "j");
car = car.replace(/Ç/g, "Ch");
car = car.replace(/ç/g, "ch");
car = car.replace(/Ş/g, "Sh");
car = car.replace(/ş/g, "sh");
car = car.replace(/Ğ/g, "Gh");
car = car.replace(/ğ/g, "gh");
car = car.replace(/X/g, "Kh");
car = car.replace(/x/g, "kh");
car = car.replace(/Q/g, "G");
car = car.replace(/q/g, "g");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
