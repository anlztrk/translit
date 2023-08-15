var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)IY/g, "$1Ý");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ıy/g, "$1ý");
	car = car.replace(/I(Y|y)/g, "İ$1");
	car = car.replace(/ıy/g, "iy");
	car = car.replace(/YI/g, "Yİ");
	car = car.replace(/(Y|y)ı/g, "$1i");

	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)I/g, "$1И");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ı/g, "$1и");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)И(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Z)/g, "$1I$2");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|z)и(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|z)/g, "$1ı$2");
	car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Z)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)И/g, "$1$2I");
	car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Z|a|b|c|ç|d|e|ə|f|g|ğ|h|x|ı|i|j|k|q|l|m|n|o|ö|p|r|s|ş|t|u|ü|v|y|z)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)и/g, "$1$2ı");

	car = car.replace(/и/g, "i");
	car = car.replace(/И/g, "İ");

	car = car.replace(/I/g, "Y");
	car = car.replace(/İ/g, "I");
	car = car.replace(/ı/g, "y");
	car = car.replace(/(G|K)(A|O)/g, "$1I$2");
	car = car.replace(/(G|K|g|k)(a|o)/g, "$1i$2");
	car = car.replace(/(C|Ç|F|H|X|J|Q|Ş)Ə/g, "$1A");
	car = car.replace(/(C|Ç|F|H|X|J|Q|Ş|c|ç|f|h|x|j|q|ş)ä/g, "$1a");
	car = car.replace(/(G|K|L)Ə/g, "$1IA");
	car = car.replace(/(G|K|L|g|k|l)ə/g, "$1ia");
  car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
	car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z|B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
  car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z|b|d|g|ğ|k|l|m|n|p|r|s|t|v|y|z)ə/g, "$1e");
	car = car.replace(/Ə/g, "A");
	car = car.replace(/ə/g, "a");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)Ö/g, "$1IO");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ö/g, "$1io");
	car = car.replace(/Ö/g, "O");
	car = car.replace(/ö/g, "o");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)Ü/g, "$1IU");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ü/g, "$1iu");
	car = car.replace(/Ü/g, "U");
	car = car.replace(/ü/g, "u");
	car = car.replace(/J/g, "Jh");
	car = car.replace(/j/g, "jh");
	car = car.replace(/C/g, "J");
	car = car.replace(/c/g, "j");
	car = car.replace(/Ç/g, "Ch");
	car = car.replace(/ç/g, "ch");
	car = car.replace(/Ğ/g, "Gh");
	car = car.replace(/ğ/g, "gh");
	car = car.replace(/X/g, "Kh");
	car = car.replace(/x/g, "kh");
	car = car.replace(/Q/g, "G");
	car = car.replace(/q/g, "g");
  car = car.replace(/ö/g, "o");
  car = car.replace(/Ö/g, "O");
  car = car.replace(/ü/g, "u");
  car = car.replace(/Ü/g, "U");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
