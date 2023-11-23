var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/I(Y|y)/g, "İ$1");
car = car.replace(/ıy/g, "iy");
car = car.replace(/(Y|y)ı/g, "$1i");
car = car.replace(/YI/g, "Yİ");

car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z|b|d|g|ğ|k|l|m|n|p|r|s|t|v|y|z)ə/g, "$1e");

car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)I/g, "$1Ь");
car = car.replace(/Ь(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Z)/g, "I$1");
car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ı/g, "$1ь");
car = car.replace(/ь(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|z)/g, "ı$1");
car = car.replace(/Ь/g, "İ");
car = car.replace(/ь/g, "i");

car = car.replace(/(G|K)I/g, "$1İ");
car = car.replace(/(G|K|g|k)ı/g, "$1i");

car = car.replace(/(G|K)(A|O|U)/g, "$1Y$2");
car = car.replace(/(G|K|g|k)(a|o|u)/g, "$1y$2");

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
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
