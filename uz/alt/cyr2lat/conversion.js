var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.replace(/Щ/g, "Ш");
	car = car.replace(/щ/g, "ш");
	car = car.replace(/Ы/g, "И");
	car = car.replace(/ы/g, "и");

	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)Е/g, "$1Э");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)е/g, "$1э");
	car = car.replace(/(\p{Uppercase})Я/ug, "$1ЙА");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
	car = car.replace(/Я/g, "Йа");
	car = car.replace(/я/g, "йа");
	car = car.replace(/(\p{Uppercase})Е/ug, "$1ЙЭ");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
	car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
	car = car.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1");
	car = car.replace(/Е/g, "Йэ");
	car = car.replace(/е/g, "йэ");
	car = car.replace(/(\p{Uppercase})Ё/ug, "$1ЙО");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
	car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
	car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
	car = car.replace(/Ё/g, "Йо");
	car = car.replace(/ё/g, "йо");
	car = car.replace(/(\p{Uppercase})Ю/ug, "$1ЙУ");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
	car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
	car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
	car = car.replace(/Ю/g, "Йу");
	car = car.replace(/ю/g, "йу");

	car = car.replace(/(А|Э|И|О|У|Ў)Ц(Ъ|Ь)?(А|Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|О|П|Р|С|Т|У|Ў|Ф|Х|Ҳ|Ц|Ч|Ш|Э)/g, "$1ТС$2$3");
	car = car.replace(/(А|Э|И|О|У|Ў|а|э|и|о|у|ў)ц(ъ|ь)?(а|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|о|п|р|с|т|у|ў|ф|х|ҳ|ц|ч|ш|э)/g, "$1тс$2$3");
	car = car.replace(/Ц/g, "С");
	car = car.replace(/ц/g, "с");

	car = car.replace(/СҲ/g, "СЪҲ");
	car = car.replace(/(С|с)ҳ/g, "$1ъҳ");

	car = car.replace(/Ў(Ъ|ъ)/g, "Ў");
	car = car.replace(/ўъ/g, "ў");

	car = car.replace(/(\p{Uppercase})Ч/ug, "$1CH");
	car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
	car = car.replace(/Ч(\p{Uppercase})/ug, "CH$1");
	car = car.replace(/(\p{Uppercase})Ш/ug, "$1SH");
	car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SH $1$2");
	car = car.replace(/Ш(\p{Uppercase})/ug, "SH$1");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/ғ/g, "g\u02bb");
	car = car.replace(/д/g, "d");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/қ/g, "q");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/о/g, "o");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ў/g, "o\u02bb");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/х/g, "x");
	car = car.replace(/ҳ/g, "h");
	car = car.replace(/ч/g, "ch");
	car = car.replace(/ш/g, "sh");
	car = car.replace(/ъ/g, "\u02bc");
	car = car.replace(/ь/g, "");
	car = car.replace(/э/g, "e");
	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Ғ/g, "G\u02bb");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Қ/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/О/g, "O");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ў/g, "O\u02bb");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Ҳ/g, "H");
	car = car.replace(/Ч/g, "Ch");
	car = car.replace(/Ш/g, "Sh");
	car = car.replace(/Ъ/g, "\u02bc");
	car = car.replace(/Ь/g, "");
	car = car.replace(/Э/g, "E");
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

	car = car.replace(/I(Ñ|Y|ñ|y)/g, "İ$1");
	car = car.replace(/ı(ñ|y)/g, "i$1");

	car = car.replace(/Ä(Ğ|X|Q|ğ|x|q)/g, "A$1");
	car = car.replace(/İ(Ğ|X|Q|ğ|x|q)/g, "I$1");
	car = car.replace(/Ö(Ğ|X|Q|ğ|x|q)/g, "O$1");
	car = car.replace(/Ü(Ğ|X|Q|ğ|x|q)/g, "U$1");
	car = car.replace(/ä(ğ|x|q)/g, "a$1");
	car = car.replace(/i(ğ|x|q)/g, "ı$1");
	car = car.replace(/ö(ğ|x|q)/g, "o$1");
	car = car.replace(/ü(ğ|x|q)/g, "u$1");

	car = car.replace(/A(G|H|K|g|h|k)/g, "Ä$1");
	car = car.replace(/I(G|H|K|g|h|k)/g, "İ$1");
	car = car.replace(/O(G|H|K|g|h|k)/g, "Ö$1");
	car = car.replace(/U(G|H|K|g|h|k)/g, "Ü$1");
	car = car.replace(/a(g|h|k)/g, "ä$1");
	car = car.replace(/ı(g|h|k)/g, "i$1");
	car = car.replace(/o(g|h|k)/g, "ö$1");
	car = car.replace(/u(g|h|k)/g, "ü$1");

	car = car.replace(/(Ğ|X|Q)Ä/g, "$1A");
	car = car.replace(/(Ğ|X|Q)İ/g, "$1I");
	car = car.replace(/(Ğ|X|Q)Ö/g, "$1O");
	car = car.replace(/(Ğ|X|Q)Ü/g, "$1U");
	car = car.replace(/(Ğ|X|Q|ğ|x|q)ä/g, "$1a");
	car = car.replace(/(Ğ|X|Q|ğ|x|q)i/g, "$1ı");
	car = car.replace(/(Ğ|X|Q|ğ|x|q)ö/g, "$1o");
	car = car.replace(/(Ğ|X|Q|ğ|x|q)ü/g, "$1u");

	car = car.replace(/(G|H|K)A/g, "$1Ä");
	car = car.replace(/(G|H|K)I/g, "$1İ");
	car = car.replace(/(G|H|K)O/g, "$1Ö");
	car = car.replace(/(G|H|K)U/g, "$1Ü");
	car = car.replace(/(G|H|K|g|h|k)a/g, "$1ä");
	car = car.replace(/(G|H|K|g|h|k)ı/g, "$1i");
	car = car.replace(/(G|H|K|g|h|k)o/g, "$1ö");
	car = car.replace(/(G|H|K|g|h|k)u/g, "$1ü");

	car = car.replace(/(L|l)ı((?![bcçdfgğhklmnñpqrsştvxyz]))/g, "$1i$2");
	car = car.replace(/LI((?![BCÇDFGĞHKLMNÑPQRSŞTVXYZ]))/g, "$1Lİ$2");

	car = car.replace(/((?<![BCÇDFGĞHKLMNÑPQRSŞTVXYZ]))I/g, "$1İ");
	car = car.replace(/((?<![BCÇDFGĞHKLMNÑPQRSŞTVXYZbcçdfgğhklmnñpqrsştvxyz]))ı/g, "$1i");

	car = car.replace(/Ä/g, "Ȧ");
	car = car.replace(/ä/g, "ȧ");
	car = car.replace(/Ö/g, "Ȯ");
	car = car.replace(/ö/g, "ȯ");
	car = car.replace(/Ü/g, "U̇");
	car = car.replace(/ü/g, "u̇");
	car = car.replace(/X/g, "H");
	car = car.replace(/x/g, "h");
	document.transcription.text1.value = car;
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
