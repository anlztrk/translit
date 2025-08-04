var car;

function cyrlat() {
	translit = document.transcription.text1.value;
	car = document.transcription.text1.value;

	translit = translit.replace(/ə/g, "ә");
	translit = translit.replace(/Ə/g, "Ә");
	car = car.replace(/ə/g, "ä");
	car = car.replace(/Ə/g, "Ä");

	car = car.replace(/Х([0-9])/g, "X$1");
	car = car.replace(/х([0-9])/g, "x$1");
	car = car.replace(/([0-9])Х/g, "$1X");
	car = car.replace(/([0-9])х/g, "$1x");

	//Я, Ё, Ю 
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
	car = car.replace(/(\p{Uppercase})Я/ug, "$1ЬА");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
	car = car.replace(/Я/g, "Ьа");
	car = car.replace(/я/g, "ьа");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЬО");
	car = car.replace(/(\p{Uppercase})Ё/ug, "$1ЬО");
	car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЬО $1$2");
	car = car.replace(/Ё(\p{Uppercase})/ug, "ЬО$1");
	car = car.replace(/Ё/g, "Ьо");
	car = car.replace(/ё/g, "ьо");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ");
	car = car.replace(/(\p{Uppercase})Ю/ug, "$1ЬУ");
	car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2");
	car = car.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1");
	car = car.replace(/Ю/g, "Ьу");
	car = car.replace(/ю/g, "ьу");

	//Ц
	car = car.replace(/([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])Ц/g, "$1ТС");
	car = car.replace(/([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])ц/g, "$1тс");
	car = car.replace(/Ц/g, "С");
	car = car.replace(/ц/g, "с");

	//Ч
	car = car.replace(/([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])Ч/g, "$1ТШ");
	car = car.replace(/([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])ч/g, "$1тш");
	car = car.replace(/Ч/g, "Ш");
	car = car.replace(/ч/g, "ш");

	//Щ
	car = car.replace(/([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])щ([аәеиоөуұүыіэ])/g, "$1шш$2");
	car = car.replace(/([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])Щ([АӘЕИОӨУҰҮЫІЭ])/g, "$1ШШ$2");
	car = car.replace(/щ/g, "ш");
	car = car.replace(/Щ/g, "Ш");

	car = car.replace(/Э/g, "Е");
	car = car.replace(/э/g, "е");

	car = car.replace(/Һ/g, "Х");
	car = car.replace(/һ/g, "х");

	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])ЬА/g, "$1Ә");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])([Ьь])а/g, "$1ә");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШбвгғджзйкқлмнңпрстфхш])ьа/g, "$1ә");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])ЬЫ/g, "$1І");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])([Ьь])ы/g, "$1і");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШбвгғджзйкқлмнңпрстфхш])ьы/g, "$1і");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])ЬО/g, "$1Ө");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])([Ьь])о/g, "$1ө");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШбвгғджзйкқлмнңпрстфхш])ьо/g, "$1ө");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])ЬУ/g, "$1Ү");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])([Ьь])у/g, "$1ү");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШбвгғджзйкқлмнңпрстфхш])ьу/g, "$1ү");

	//У
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪ])У([АОҰЫ])/g, "$1ҰЎ$2");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪ])УУ/g, "$1УЎУ");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪ])У([ӘЕӨҮІ])/g, "$1ҮЎ$2");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪ])УИ/g, "$1УЎИ");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪбвгғджзйкқлмнңпрстфхшьъ])у([аоұы])/g, "$1ұў$2");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪбвгғджзйкқлмнңпрстфхшьъ])уу/g, "$1уўу");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪбвгғджзйкқлмнңпрстфхшьъ])у([әеөүі])/g, "$1үў$2");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪбвгғджзйкқлмнңпрстфхшьъ])уи/g, "$1уўи");
	car = car.replace(/([АОУҰЫӘЕИӨУҮІ])У/g, "$1Ў");
	car = car.replace(/([АОУҰЫӘЕИӨУҮІаоуұыәеиөуүі])у/g, "$1ў");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪ])У([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ])/g, "$1Ұ$2");
	car = car.replace(/([БВГҒДЖЗЙКҚЛМНҢПРСТФХШЬЪбвгғджзйкқлмнңпрстфхшьъ])у([бвгғджзйкқлмнңпрстфхш])/g, "$1ұ$2");
	car = car.replace(/У([БВГҒДЖЗЙКҚЛМНҢПРСТФХШбвгғджзйкқлмнңпрстфхш])/g, "Ұ$1");
	car = car.replace(/у([бвгғджзйкқлмнңпрстфхш])/g, "ұ$1");
	car = car.replace(/([АЫ])([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ]){1,3}У/g, "$1$2ЫЎ");
	car = car.replace(/([ОҰ])([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ]){1,3}У/g, "$1$2ҰЎ");
	car = car.replace(/([АЫаы])([бвгғджзйкқлмнңпрстфхш]){1,3}у/g, "$1$2ыў");
	car = car.replace(/([ОҰоұ])([бвгғджзйкқлмнңпрстфхш]){1,3}у/g, "$1$2ұў");
	car = car.replace(/([ӘЕІ])([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ]){1,3}У/g, "$1$2ІЎ");
	car = car.replace(/([ӨҮ])([БВГҒДЖЗЙКҚЛМНҢПРСТФХШ]){1,3}У/g, "$1$2ҮЎ");
	car = car.replace(/([ӘЕІәеі])([бвгғджзйкқлмнңпрстфхш]){1,3}у/g, "$1$2іў");
	car = car.replace(/([ӨҮөү])([бвгғджзйкқлмнңпрстфхш]){1,3}у/g, "$1$2үў");
	car = car.replace(/У/g, "Ў");
	car = car.replace(/у/g, "ў");

	car = car.replace(/Ь([АӘЕИОӨУҰҮЫІЭаәеиоөуұүыіэ])/g, "Й$1");
	car = car.replace(/ь([аәеиоөуұүыіэ])/g, "й$1");
	car = car.replace(/([Ьь])/g, "");

	car = car.replace(/И([АОҰЫ])/g, "ЫЙ$1");
	car = car.replace(/И([аоұы])/g, "Ый$1");
	car = car.replace(/и([аоұы])/g, "ый$1");
	car = car.replace(/И([ӘЕИӨҮІЭ])/g, "ІЙ$1");
	car = car.replace(/И([әеиөүіэ])/g, "Ій$1");
	car = car.replace(/и([әеиөүіэ])/g, "ій$1");

	car = car.replace(/а/g, "a");
	car = car.replace(/ә/g, "ä");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/ғ/g, "ğ");
	car = car.replace(/д/g, "d");
	car = car.replace(/е/g, "e");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/қ/g, "q");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/ң/g, "ń");
	car = car.replace(/о/g, "o");
	car = car.replace(/ө/g, "ö");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/ў/g, "w");
	car = car.replace(/ұ/g, "u");
	car = car.replace(/ү/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "h");
	car = car.replace(/ш/g, "c");
	car = car.replace(/ъ/g, "");
	car = car.replace(/ы/g, "ı");
	car = car.replace(/і/g, "i");
	car = car.replace(/э/g, "e");
	car = car.replace(/А/g, "A");
	car = car.replace(/Ә/g, "Ä");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Ғ/g, "Ğ");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Е/g, "E");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "İ");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Қ/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/Ң/g, "Ń");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ө/g, "Ö");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/Ў/g, "W");
	car = car.replace(/Ұ/g, "U");
	car = car.replace(/Ү/g, "Ü");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "H");
	car = car.replace(/Ш/g, "C");
	car = car.replace(/Ъ/g, "");
	car = car.replace(/Ы/g, "I");
	car = car.replace(/І/g, "İ");

	car = car.replace(/«/g, "\u201c");
	car = car.replace(/»/g, "\u201d");

	car = car.normalize('NFC');
	document.transcription.text1.value = translit;
	document.transcription.text2.value = car;
}

function latcyr() {
	car = document.transcription.text2.value;

	car = car.replace(/[Iİ]Y([AEIİÎOÖUÛÜ])/g, "Î$1");
	car = car.replace(/[Iİ]y([aeıiîoöuûü])/g, "Î$1");
	car = car.replace(/[ıi]y([aeıiîoöuûü])/g, "î$1");

	car = car.replace(/[UÜ]W([AEIİÎOÖUÛÜ])/g, "Û$1");
	car = car.replace(/[UÜ]w([aeıiîoöuûü])/g, "Û$1");
	car = car.replace(/[uü]w([aeıiîoöuûü])/g, "û$1");

	car = car.replace(/Y[Aa]/g, "Я");
	car = car.replace(/ya/g, "я");
	car = car.replace(/Y[Ûû]/g, "Ю");
	car = car.replace(/yû/g, "ю");

	car = car.replace(/a/g, "а");
	car = car.replace(/ä/g, "ә");
	car = car.replace(/b/g, "б");
	car = car.replace(/d/g, "д");
	car = car.replace(/e/g, "е");
	car = car.replace(/f/g, "ф");
	car = car.replace(/g/g, "г");
	car = car.replace(/ğ/g, "ғ");
	car = car.replace(/h/g, "х");
	car = car.replace(/ı/g, "ы");
	car = car.replace(/i/g, "і");
	car = car.replace(/î/g, "и");
	car = car.replace(/j/g, "ж");
	car = car.replace(/k/g, "к");
	car = car.replace(/l/g, "л");
	car = car.replace(/m/g, "м");
	car = car.replace(/n/g, "н");
	car = car.replace(/ñ/g, "ң");
	car = car.replace(/o/g, "о");
	car = car.replace(/ö/g, "ө");
	car = car.replace(/p/g, "п");
	car = car.replace(/q/g, "қ");
	car = car.replace(/r/g, "р");
	car = car.replace(/s/g, "с");
	car = car.replace(/ş/g, "ш");
	car = car.replace(/t/g, "т");
	car = car.replace(/u/g, "ұ");
	car = car.replace(/û/g, "у");
	car = car.replace(/ü/g, "ү");
	car = car.replace(/v/g, "в");
	car = car.replace(/w/g, "у");
	car = car.replace(/y/g, "й");
	car = car.replace(/z/g, "з");
	car = car.replace(/A/g, "А");
	car = car.replace(/Ä/g, "Ә");
	car = car.replace(/B/g, "Б");
	car = car.replace(/D/g, "Д");
	car = car.replace(/E/g, "Е");
	car = car.replace(/F/g, "Ф");
	car = car.replace(/G/g, "Г");
	car = car.replace(/Ğ/g, "Ғ");
	car = car.replace(/H/g, "Х");
	car = car.replace(/I/g, "Ы");
	car = car.replace(/İ/g, "І");
	car = car.replace(/Î/g, "И");
	car = car.replace(/J/g, "Ж");
	car = car.replace(/K/g, "К");
	car = car.replace(/L/g, "Л");
	car = car.replace(/M/g, "М");
	car = car.replace(/N/g, "Н");
	car = car.replace(/Ñ/g, "Ң");
	car = car.replace(/O/g, "О");
	car = car.replace(/Ö/g, "Ө");
	car = car.replace(/P/g, "П");
	car = car.replace(/Q/g, "Қ");
	car = car.replace(/R/g, "Р");
	car = car.replace(/S/g, "С");
	car = car.replace(/Ş/g, "Ш");
	car = car.replace(/T/g, "Т");
	car = car.replace(/U/g, "Ұ");
	car = car.replace(/Û/g, "У");
	car = car.replace(/Ü/g, "Ү");
	car = car.replace(/V/g, "В");
	car = car.replace(/W/g, "У");
	car = car.replace(/Y/g, "Й");
	car = car.replace(/Z/g, "З");
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
