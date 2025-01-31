var car;
var translit;

function cyrlat() {
	translit = document.transcription.text1.value;
	car = document.transcription.text1.value;
	car = car.replace(/<</g, "«");
	car = car.replace(/>>/g, "»");
	translit = translit.replace(/<</g, "«");
	translit = translit.replace(/>>/g, "»");

	translit = translit.replace(/(\u2019|\u0027)/g, "\u02bc");

	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz)Ja/g, "$1IA");
	translit = translit.replace(/(b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)Ja/g, "$1iA");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz|b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)ja/g, "$1ia");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz)Ju/g, "$1IU");
	translit = translit.replace(/(b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)Ju/g, "$1iU");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz|b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)ju/g, "$1iu");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz)Je/g, "$1IE");
	translit = translit.replace(/(b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)Je/g, "$1iE");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz|b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)je/g, "$1ie");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz)Ji/g, "$1I");
	translit = translit.replace(/(b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)Ji/g, "$1I");
	translit = translit.replace(/(B|W|H|G|D|Ż|Z|J|K|Ł|M|N|P|R|S|T|F|Ch|C|Cz|Sz|Szcz|b|w|h|g|d|ż|z|j|k|ł|m|n|p|r|s|t|f|ch|c|cz|sz|szcz)ji/g, "$1i");

	translit = translit.replace(/\u02bc/g, "");

	translit = translit.replace(/l/g, "l");
	translit = translit.replace(/Ł(́|́)/g, "L");
	translit = translit.replace(/li/g, "li");
	translit = translit.replace(/Ł(I|i)/g, "L$1");

	translit = translit.replace(/́(A|E|Y|O|U|a|e|y|o|u)/g, "I$1");
	translit = translit.replace(/́(A|E|Y|O|U|a|e|y|o|u)/g, "i$1");
	translit = translit.replace(/(́|́)I/g, "I");
	translit = translit.replace(/i/g, "i");

	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ch/ug, "$1$2 CH");
	translit = translit.replace(/(\p{Uppercase})Ch/ug, "$1CH");
	translit = translit.replace(/Ch (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
	translit = translit.replace(/Ch(\p{Uppercase})/ug, "CH$1");
	translit = translit.replace(/Ch/g, "Ch");
	translit = translit.replace(/ch/g, "ch");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Cz/ug, "$1$2 CZ");
	translit = translit.replace(/(\p{Uppercase})Cz/ug, "$1CZ");
	translit = translit.replace(/Cz (\p{Uppercase})(\p{Uppercase})/ug, "CZ $1$2");
	translit = translit.replace(/Cz(\p{Uppercase})/ug, "CZ$1");
	translit = translit.replace(/Cz/g, "Cz");
	translit = translit.replace(/cz/g, "cz");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Sz/ug, "$1$2 SZ");
	translit = translit.replace(/(\p{Uppercase})Sz/ug, "$1SZ");
	translit = translit.replace(/Sz (\p{Uppercase})(\p{Uppercase})/ug, "SZ $1$2");
	translit = translit.replace(/Sz(\p{Uppercase})/ug, "SZ$1");
	translit = translit.replace(/Sz/g, "Sz");
	translit = translit.replace(/sz/g, "sz");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Szcz/ug, "$1$2 SZCZ");
	translit = translit.replace(/(\p{Uppercase})Szcz/ug, "$1SZCZ");
	translit = translit.replace(/Szcz (\p{Uppercase})(\p{Uppercase})/ug, "SZCZ $1$2");
	translit = translit.replace(/Szcz(\p{Uppercase})/ug, "SZCZ$1");
	translit = translit.replace(/Szcz/g, "Szcz");
	translit = translit.replace(/szcz/g, "szcz");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Je/ug, "$1$2 JE");
	translit = translit.replace(/(\p{Uppercase})Je/ug, "$1JE");
	translit = translit.replace(/Je (\p{Uppercase})(\p{Uppercase})/ug, "JE $1$2");
	translit = translit.replace(/Je(\p{Uppercase})/ug, "JE$1");
	translit = translit.replace(/Je/g, "Je");
	translit = translit.replace(/je/g, "je");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ji/ug, "$1$2 JI");
	translit = translit.replace(/(\p{Uppercase})Ji/ug, "$1JI");
	translit = translit.replace(/Ji (\p{Uppercase})(\p{Uppercase})/ug, "JI $1$2");
	translit = translit.replace(/Ji(\p{Uppercase})/ug, "JI$1");
	translit = translit.replace(/Ji/g, "Ji");
	translit = translit.replace(/ji/g, "ji");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ju/ug, "$1$2 JU");
	translit = translit.replace(/(\p{Uppercase})Ju/ug, "$1JU");
	translit = translit.replace(/Ju (\p{Uppercase})(\p{Uppercase})/ug, "JU $1$2");
	translit = translit.replace(/Ju(\p{Uppercase})/ug, "JU$1");
	translit = translit.replace(/Ju/g, "Ju");
	translit = translit.replace(/ju/g, "ju");
	translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ja/ug, "$1$2 JA");
	translit = translit.replace(/(\p{Uppercase})Ja/ug, "$1JA");
	translit = translit.replace(/Ja (\p{Uppercase})(\p{Uppercase})/ug, "JA $1$2");
	translit = translit.replace(/Ja(\p{Uppercase})/ug, "JA$1");
	translit = translit.replace(/Ja/g, "Ja");
	translit = translit.replace(/ja/g, "ja");

	translit = translit.replace(/a/g, "a");
	translit = translit.replace(/b/g, "b");
	translit = translit.replace(/w/g, "w");
	translit = translit.replace(/h/g, "h");
	translit = translit.replace(/g/g, "g");
	translit = translit.replace(/d/g, "d");
	translit = translit.replace(/e/g, "e");
	translit = translit.replace(/ż/g, "ż");
	translit = translit.replace(/z/g, "z");
	translit = translit.replace(/y/g, "y");
	translit = translit.replace(/i/g, "i");
	translit = translit.replace(/j/g, "j");
	translit = translit.replace(/k/g, "k");
	translit = translit.replace(/l/g, "l");
	translit = translit.replace(/ł/g, "ł");
	translit = translit.replace(/m/g, "m");
	translit = translit.replace(/n/g, "n");
	translit = translit.replace(/o/g, "o");
	translit = translit.replace(/p/g, "p");
	translit = translit.replace(/r/g, "r");
	translit = translit.replace(/s/g, "s");
	translit = translit.replace(/t/g, "t");
	translit = translit.replace(/u/g, "u");
	translit = translit.replace(/f/g, "f");
	translit = translit.replace(/c/g, "c");
	translit = translit.replace(/́/g, "\u0301");

	translit = translit.replace(/A/g, "A");
	translit = translit.replace(/B/g, "B");
	translit = translit.replace(/W/g, "W");
	translit = translit.replace(/H/g, "H");
	translit = translit.replace(/G/g, "G");
	translit = translit.replace(/D/g, "D");
	translit = translit.replace(/E/g, "E");
	translit = translit.replace(/Ż/g, "Ż");
	translit = translit.replace(/Z/g, "Z");
	translit = translit.replace(/Y/g, "Y");
	translit = translit.replace(/I/g, "I");
	translit = translit.replace(/J/g, "J");
	translit = translit.replace(/K/g, "K");
	translit = translit.replace(/L/g, "L");
	translit = translit.replace(/Ł/g, "Ł");
	translit = translit.replace(/M/g, "M");
	translit = translit.replace(/N/g, "N");
	translit = translit.replace(/O/g, "O");
	translit = translit.replace(/P/g, "P");
	translit = translit.replace(/R/g, "R");
	translit = translit.replace(/S/g, "S");
	translit = translit.replace(/T/g, "T");
	translit = translit.replace(/U/g, "U");
	translit = translit.replace(/F/g, "F");
	translit = translit.replace(/C/g, "C");
	translit = translit.replace(/́/g, "\u0301");

	translit = translit.replace(/d\u0301/g, "d\u0317");
	translit = translit.replace(/t\u0301/g, "t\u0317");

	translit = translit.replace(/\u2039/g, "\u2018");
	translit = translit.replace(/\u203a/g, "\u2019");
	translit = translit.replace(/\u00ab/g, "\u201c");
	translit = translit.replace(/\u00bb/g, "\u201d");

	translit = translit.normalize(NFC);
	document.transcription.text1.value = car;
	document.transcription.text2.value = translit;
}

function copy1() {
	textRange = document.transcription.text1.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}

function copy2() {
	textRange = document.transcription.text2.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}
