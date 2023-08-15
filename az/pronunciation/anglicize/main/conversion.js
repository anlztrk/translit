var car;
function cyrlat () {
car = document.transcription.text1.value;
	car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü)(I|İ)/g, "$1\u2019$2");
	car = car.replace(/(A|E|Ə|I|İ|O|Ö|U|Ü|a|e|ə|ı|i|o|ö|u|ü)(ı|i)/g, "$1\u2019$2");
	car = car.replace(/Y(İ|i)/g, "Ý$1");
	car = car.replace(/yi/g, "ýi");
	car = car.replace(/İY/g, "İÝ");
	car = car.replace(/(İ|i)y/g, "$1ý");
	car = car.replace(/Y/g, "İ");
	car = car.replace(/y/g, "i");
	
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z)Iİ/g, "$1I");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|z)ıi/g, "$1ı");
	car = car.replace(/Iİ/g, "İÝ");
	car = car.replace(/Ii/g, "İý");
	car = car.replace(/ıi/g, "iý");
	car = car.replace(/İI/g, "Ýİ");
	car = car.replace(/İı/g, "Ýi");
	car = car.replace(/iı/g, "ýi");

	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ý|Z)I/g, "$1И");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ý|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ý|z)ı/g, "$1и");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ý|Z)И(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ý|Z)/g, "$1I$2");
	car = car.replace(/(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ý|Z|b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ý|z)и(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ý|z)/g, "$1ı$2");
	car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Ý|Z)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ý|Z)И/g, "$1$2I");
	car = car.replace(/(A|B|C|Ç|D|E|Ə|F|G|Ğ|H|X|I|İ|J|K|Q|L|M|N|O|Ö|P|R|S|Ş|T|U|Ü|V|Y|Ý|Z|a|b|c|ç|d|e|ə|f|g|ğ|h|x|ı|i|j|k|q|l|m|n|o|ö|p|r|s|ş|t|u|ü|v|y|ý|z)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ý|z)и/g, "$1$2ı");

	car = car.replace(/и/g, "i");
	car = car.replace(/И/g, "İ");
	car = car.replace(/İ(A|E|Ə|O|Ö|U|Ü|a|e|ə|o|ö|u|ü)/g, "Y$1");
	car = car.replace(/i(a|e|ə|o|ö|u|ü)/g, "y$1");

	car = car.replace(/I/g, "Y");
	car = car.replace(/İ/g, "I");
	car = car.replace(/ı/g, "y");
	car = car.replace(/Ý/g, "Y");
	car = car.replace(/ý/g, "y");
	car = car.replace(/(C|Ç|F|H|X|J|Q|Ş)Ə/g, "$1A");
	car = car.replace(/(C|Ç|F|H|X|J|Q|Ş|c|ç|f|h|x|j|q|ş)ə/g, "$1a");
	car = car.replace(/(G|K|L)Ə/g, "$1IA");
	car = car.replace(/(G|K|L|g|k|l)ə/g, "$1ia");
	car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
	car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z|B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z)Ə/g, "$1E");
	car = car.replace(/(B|D|G|Ğ|K|L|M|N|P|R|S|T|V|Y|Z|b|d|g|ğ|k|l|m|n|p|r|s|t|v|y|z)ə/g, "$1e");
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
