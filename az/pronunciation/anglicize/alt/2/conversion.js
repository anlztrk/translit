var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/I(Y|y)/g, "İ$1");
car = car.replace(/ıy/g, "iy");
car = car.replace(/(Y|y)ı/g, "$1i");
car = car.replace(/YI/g, "Yİ");

car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z|b|d|g|ğ|k|l|m|n|p|r|s|t|v|y|z)ə/g, "$1e");

car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)I/g, "$1\u200b");
car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|\u200b|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Z)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)\u200b/g, "$1$2I");
car = car.replace(/\u200b(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Z)/g, "I$1");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ı/g, "$1\u200c");
car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|\u200b|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Z|a|b|c|ç|d|e|ə|f|g|ğ|h|x|ı|\u200b|i|j|k|q|l|m|n|o|ö|p|r|s|ş|t|u|ü|v|y|z)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)\u200c/g, "$1$2ı");
car = car.replace(/\u200c(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|z)/g, "ı$1");
car = car.replace(/\u200b/g, "İ");
car = car.replace(/\u200c/g, "i");

car = car.replace(/(G|K)I/g, "$1İ");
car = car.replace(/(G|K|g|k)ı/g, "$1i");

car = car.replace(/G(A|O|U)/g, "GY$1");
car = car.replace(/(G|g)(a|o|u)/g, "$1y$2");

car = car.replace(/Y(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)/g, "\u200cY$1");
car = car.replace(/y(a|e|ə|ı|i|o|ö|u|ü)/g, "\u200cy$1");
car = car.replace(/(A|O|Ö|U|Ü)Y/g, "$1İ");
car = car.replace(/(A|O|Ö|U|Ü|a|o|ö|u|ü)y/g, "$1i");
car = car.replace(/E(Y|y)/g, "A$1");
car = car.replace(/ey/g, "ay");
car = car.replace(/\u200c/g, "");

car = car.replace(/Ə/g, "A");
car = car.replace(/J/g, "Zh");
car = car.replace(/C/g, "J");
car = car.replace(/Ç/g, "Ch");
car = car.replace(/Ğ/g, "GH");
car = car.replace(/X/g, "Kh");
car = car.replace(/I/g, "Y");
car = car.replace(/İ/g, "I");
car = car.replace(/Ş/g, "Sh");
car = car.replace(/Q/g, "G");
car = car.replace(/Ö/g, "O");
car = car.replace(/Ü/g, "U");
car = car.replace(/ə/g, "a");
car = car.replace(/j/g, "zh");
car = car.replace(/c/g, "j");
car = car.replace(/ç/g, "ch");
car = car.replace(/ğ/g, "gh");
car = car.replace(/x/g, "kh");
car = car.replace(/ı/g, "y");
car = car.replace(/ş/g, "sh");
car = car.replace(/q/g, "g");
car = car.replace(/ö/g, "o");
car = car.replace(/ü/g, "u");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
