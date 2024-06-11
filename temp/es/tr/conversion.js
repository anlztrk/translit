var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/C(H|h)/g, "Ç");
car = car.replace(/ch/g, "ç");

car = car.replace(/Ha/g, "A");
car = car.replace(/He/g, "E");
car = car.replace(/Hi/g, "I");
car = car.replace(/Ho/g, "O");
car = car.replace(/Hu/g, "U");
car = car.replace(/H/g, "");
car = car.replace(/h/g, "");

car = car.replace(/J/g, "H");
car = car.replace(/j/g, "h");
car = car.replace(/Z/g, "Ṡ");
car = car.replace(/z/g, "ṡ");
car = car.replace(/C(E|I|e|i)/g, "Ṡ$1");
car = car.replace(/c(e|i)/g, "ṡ$1");
car = car.replace(/G(E|I|e|i)/g, "H$1");
car = car.replace(/g(e|i)/g, "h$1");
car = car.replace(/C/g, "K");
car = car.replace(/c/g, "k");
car = car.replace(/QU(E|I)/g, "K$1");
car = car.replace(/Qu(e|i)/g, "K$1");
car = car.replace(/qu(e|i)/g, "k$1");
car = car.replace(/U\u0308/g, "Ü");
car = car.replace(/u\u0308/g, "ü");
car = car.replace(/GU(E|I)/g, "G$1");
car = car.replace(/Gu(e|i)/g, "G$1");
car = car.replace(/gu(e|i)/g, "g$1");
car = car.replace(/Ü/g, "U");
car = car.replace(/ü/g, "u");

car = car.replace(/N\u0303(A|E|I|O|U)/g, "NY$1");
car = car.replace(/N\u0303(a|e|i|o|u)/g, "Ny$1");
car = car.replace(/n\u0303(a|e|i|o|u)/g, "ny$1");
car = car.replace(/n\u0303/g, "n");

car = car.replace(/L(L|l)/g, "Y");
car = car.replace(/ll/g, "y");

car = car.replace(/Y(\p{L})/ug, "Ẏ$1");
car = car.replace(/(\p{L})Y/ug, "$1Ẏ");
car = car.replace(/y(\p{L})/ug, "ẏ$1");
car = car.replace(/(\p{L})y/ug, "$1ẏ");

car = car.replace(/Y/g, "İ");
car = car.replace(/y/g, "i");
car = car.replace(/Ẏ/g, "Y");
car = car.replace(/ẏ/g, "y");
  
car = car.replace(/V/g, "B");
car = car.replace(/v/g, "b");
car = car.replace(/(A|E|I|O|U)(\u0301)?( )?B( )?(A|E|I|O|U)/g, "$1$2$3V$4$5");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)(\u0301)?( )?b( )?(a|e|i|o|u)/g, "$1$2$3v$4$5");

car = car.replace(/(A|E|I|O|U)(\u0301)?( )?B( )?(A|E|I|O|U)/g, "$1$2$3V$4$5");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)(\u0301)?( )?b( )?(a|e|i|o|u)/g, "$1$2$3v$4$5");

car = car.replace(/I/g, "İ");

car = car.replace(/\u0301/g, "");

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
