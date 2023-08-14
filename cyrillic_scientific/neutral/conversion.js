var car;

function cyrlat() {
	car = document.transcription.text1.value;
	var car_Orig = car;
	var iotatedE = true;
	var phonemicYeru = true;
	var phonemicYer = true;
	var shortUIsVowel = false;
	var phonemicShortU = false;
	var phonemicKha = false;
	var phonemicShcha = true;
	var phonemicTse = true;
	var phonemicZhe = false;

	if (/Ј|ј/.test(car_Orig) && /Й|й|Я|я|Ё|ё|Ю|ю/.test(car_Orig) == false) {
		iotatedE = false;
	}
	if (/Ц|ц/.test(car_Orig) == false) {
		phonemicTse = false;
	}
	if (/В|в/.test(car_Orig) && /Ў|ў/.test(car_Orig)) {
		phonemicShortU = true;
	}
  if (/Ы|ы/.test(car_Orig) == false) {
		phonemicYeru = false;
	}
	if (/Ҳ|ҳ|Һ|һ/.test(car_Orig)) {
		phonemicKha = true;
	}
	if (/Џ|Җ|Ҷ|Ҹ|Ӂ|џ|җ|ҷ|ҹ|ӂ/.test(car_Orig)) {
		phonemicZhe = true;
  }
	if (iotatedE == true) {
		car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)(Э|э)/g, "$1$2\u0300");
		car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)Е/g, "$1Э");
		car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)е/g, "$1э");
		car = car.replace(/(Э|э)\u0300(Э|э)/g, "$1$2");
	}
	if (shortUIsVowel == false) {
		car = car.replace(/Ў(Э|э)/g, "Ў\u0300$1");
		car = car.replace(/ўэ/g, "ў\u0300э");
		car = car.replace(/ЎЕ/g, "ЎЭ");
		car = car.replace(/(Ў|ў)е/g, "$1э");
	}
	if (phonemicShcha != true) {
		if (lang == "unknown" || lang == "Kazakh" ) {
			car = car.replace(/(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ|Я|Е|Ё|Ю)Щ(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ)/g, "$1ШШ$2");
			car = car.replace(/(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ|Я|Е|Ё|Ю|а|ӓ|ә|э|ы|и|о|ө|ӧ|у|ү|ӱ|ұ|я|е|ё|ю)щ(а|ӓ|ә|э|ы|и|о|ө|ӧ|у|ү|ӱ|ұ)/g, "$1шш$2");
				if (iotatedE == false){
				car = car.replace(/(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ|Я|Е|Ё|Ю)ЩЕ/g, "$1ШШЕ");
				car = car.replace(/(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ|Я|Е|Ё|Ю|а|ӓ|ә|э|ы|и|о|ө|ӧ|у|ү|ӱ|ұ|я|е|ё|ю)ще/g, "$1шше");
				}
			car = car.replace(/Щ/g, "Ш");
			car = car.replace(/щ/g, "ш");
		} else {
			car = car.replace(/Щ/g, "Ш");
			car = car.replace(/щ/g, "ш");
		}
	}
	if (phonemicTse == false) {
    {
			car = car.replace(/(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ|Я|Е|Ё|Ю)Ц/g, "$1ТС");
			car = car.replace(/(А|Ӓ|Ә|Э|Ы|И|О|Ө|Ӧ|У|Ү|Ӱ|Ұ|Я|Е|Ё|Ю|а|ӓ|ә|э|ы|и|о|ө|ӧ|у|ү|ӱ|ұ|я|е|ё|ю)ц/g, "$1тс");
			car = car.replace(/Ц/g, "С");
			car = car.replace(/ц/g, "с");
		}
	}
	car = car.replace(/Й(А|а)/g, "Й$1\u0300");
	car = car.replace(/йа/g, "йа\u0300");
	car = car.replace(/Й(Э|э)/g, "Й$1\u0300");
	car = car.replace(/йэ/g, "йе\u0300");
	car = car.replace(/Й(О|о)/g, "Й$1\u0300");
	car = car.replace(/йо/g, "йо\u0300");
	car = car.replace(/Й(У|у)/g, "Й$1\u0300");
	car = car.replace(/йу/g, "йу\u0300");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
	car = car.replace(/Я/g, "Йа");
	car = car.replace(/я/g, "йа");
	if (iotatedE == true) {
		car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
		car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
		car = car.replace(/Е(\p{Uppercase})/g, "ЙЭ$1");
		car = car.replace(/Е/g, "Йэ");
		car = car.replace(/е/g, "йэ");
	}
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
	car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
	car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
	car = car.replace(/Ё/g, "Йо");
	car = car.replace(/ё/g, "йо");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
	car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
	car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
	car = car.replace(/Ю/g, "Йу");
	car = car.replace(/ю/g, "йу");

	car = car.replace(/А/g, "A");
	car = car.replace(/(Ә|Ӓ)/g, "Ä");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/(Ғ|Ҕ)/g, "Ġ");
	car = car.replace(/Д/g, "D");
  if ( phonemicZhe ) {
  car = car.replace(/Ж/g, "Ž");
  car = car.replace(/ж/g, "ž");
  }
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/(Қ|Ҡ)/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/(Ң|Ҥ)/g, "Ṅ");
	car = car.replace(/О/g, "O");
	car = car.replace(/(Ө|Ӧ)/g, "Ö");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	if (phonemicShortU == true) {
		car = car.replace(/Ў/g, "W");
		car = car.replace(/ў/g, "w");
	}
	car = car.replace(/Ў/g, "V");
	car = car.replace(/(Ү|Ӱ)/g, "Ü");
	car = car.replace(/Ф/g, "F");
	if (phonemicKha == true) {
		car = car.replace(/Х/g, "Ḥ");
		car = car.replace(/х/g, "ḥ");
	} else {
		car = car.replace(/Х/g, "H");
		car = car.replace(/х/g, "h");
	}
	car = car.replace(/(Һ|Ҳ)/g, "H");
	if ( phonemicTse ) {
		car = car.replace(/Ч/g, "Č");
		car = car.replace(/ч/g, "č");
	}
	car = car.replace(/Ц/g, "C");
  car = car.replace(/Ч/g, "C");
	car = car.replace(/(Џ|Җ|Ҷ|Ҹ|Ӂ)/g, "J");
	car = car.replace(/Ш/g, "Š");
	car = car.replace(/Щ/g, "Ś");
	car = car.replace(/Ы/g, "Ï");
	car = car.replace(/Э/g, "E");
	car = car.replace(/а/g, "a");
	car = car.replace(/(ә|ӓ)/g, "ä");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/(ғ|ҕ)/g, "ġ");
	car = car.replace(/д/g, "d");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/(қ|ҡ)/g, "q");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/(ң|ҥ)/g, "ṅ");
	car = car.replace(/о/g, "o");
	car = car.replace(/(ө|ӧ)/g, "ö");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ў/g, "v");
	car = car.replace(/(ү|ӱ)/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/(һ|ҳ)/g, "h");
	car = car.replace(/ц/g, "c");
	car = car.replace(/ч/g, "c");
	car = car.replace(/(џ|җ|ҷ|ҹ|ӂ)/g, "j");
	car = car.replace(/ш/g, "š");
	car = car.replace(/щ/g, "ś");
	if (phonemicYer == false) {
		car = car.replace(/(Ъ|ъ)/g, "\u02bc");
		car = car.replace(/(Ь|ь)/g, "");
	}
	car = car.replace(/(Ъ|ъ)/g, "\u02ba");
	car = car.replace(/ы/g, "ï");
	car = car.replace(/(Ь|ь)/g, "\u02b9");
	car = car.replace(/э/g, "e");
	car = car.normalize('NFC');
	car = car.replace(/«/g, "\u201c");
	car = car.replace(/»/g, "\u201d");
	document.transcription.text2.value = car;
}

function latcyr() {
	car = document.transcription.text2.value;
	var car_Orig = car;
	var tsDistinct = true;
	var wDistinct = true;
	var xDistinct = true;
	var jDistinct = true;
	if (/V|v/.test(car_Orig) && /W|w/.test(car_Orig)) {
		wDistinct = true;
	}
	if (/Ḥ|ḥ/.test(car_Orig)) {
		xDistinct = true;
	}
	if (/Ž|ž/.test(car_Orig)) {
		jDistinct = true;
	}
	car = car.replace(/A/g, "А");
	car = car.replace(/À/g, "А\u0300");
	car = car.replace(/Ä/g, "Ә");
	car = car.replace(/B/g, "Б");
	car = car.replace(/V/g, "В");
	car = car.replace(/G/g, "Г");
	car = car.replace(/Ġ/g, "Ғ");
	car = car.replace(/D/g, "Д");
	car = car.replace(/Ž/g, "Ж");
	car = car.replace(/Z/g, "З");
	car = car.replace(/I/g, "И");
	car = car.replace(/Y/g, "Й");
	car = car.replace(/K/g, "К");
	car = car.replace(/Q/g, "Қ");
	car = car.replace(/L/g, "Л");
	car = car.replace(/M/g, "М");
	car = car.replace(/N/g, "Н");
	car = car.replace(/Ṅ/g, "Ң");
	car = car.replace(/O/g, "О");
	car = car.replace(/Ò/g, "О\u0300");
	car = car.replace(/Ö/g, "Ө");
	car = car.replace(/P/g, "П");
	car = car.replace(/R/g, "Р");
	car = car.replace(/S/g, "С");
	car = car.replace(/T/g, "Т");
	car = car.replace(/U/g, "У");
	car = car.replace(/Ù/g, "У\u0300");
	if (wDistinct == true) {
		car = car.replace(/W/g, "Ў");
		car = car.replace(/w/g, "ў");
	}
	car = car.replace(/W/g, "В");
	car = car.replace(/Ü/g, "Ү");
	car = car.replace(/F/g, "Ф");
	if (xDistinct == true) {
		car = car.replace(/H/g, "Һ");
		car = car.replace(/h/g, "һ");
	} else {
		car = car.replace(/H/g, "Х");
		car = car.replace(/h/g, "х");
	}
	car = car.replace(/Ḥ/g, "Х");
  if (tsDistinct == false) {
	car = car.replace(/C/g, "Ч");
        car = car.replace(/c/g, "ч");
	}
  car = car.replace(/C/g, "Ц");
  if (jDistinct == false) {
		car = car.replace(/J/g, "Ж");
		car = car.replace(/j/g, "ж");
	}
	car = car.replace(/J/g, "Җ");
	car = car.replace(/Č/g, "Ч");
	car = car.replace(/Š/g, "Ш");
	car = car.replace(/Ś/g, "Щ");
	car = car.replace(/Ï/g, "Ы");
	car = car.replace(/E/g, "Э");
	car = car.replace(/È/g, "Э\u0300");
	car = car.replace(/a/g, "а");
	car = car.replace(/à/g, "а\u0300");
	car = car.replace(/ä/g, "ә");
	car = car.replace(/b/g, "б");
	car = car.replace(/v/g, "в");
	car = car.replace(/g/g, "г");
	car = car.replace(/ġ/g, "ғ");
	car = car.replace(/d/g, "д");
	car = car.replace(/ž/g, "ж");
	car = car.replace(/z/g, "з");
	car = car.replace(/i/g, "и");
	car = car.replace(/y/g, "й");
	car = car.replace(/k/g, "к");
	car = car.replace(/q/g, "қ");
	car = car.replace(/l/g, "л");
	car = car.replace(/m/g, "м");
	car = car.replace(/n/g, "н");
	car = car.replace(/ṅ/g, "ң");
	car = car.replace(/o/g, "о");
	car = car.replace(/ò/g, "о\u0300");
	car = car.replace(/ö/g, "ө");
	car = car.replace(/p/g, "п");
	car = car.replace(/r/g, "р");
	car = car.replace(/s/g, "с");
	car = car.replace(/t/g, "т");
	car = car.replace(/u/g, "у");
	car = car.replace(/ù/g, "у\u0300");
	car = car.replace(/w/g, "в");
	car = car.replace(/ü/g, "ү");
	car = car.replace(/f/g, "ф");
	car = car.replace(/ḥ/g, "х");
	car = car.replace(/c/g, "ц");
	car = car.replace(/j/g, "җ");
	car = car.replace(/č/g, "ч");
	car = car.replace(/š/g, "ш");
	car = car.replace(/ś/g, "щ");
	car = car.replace(/ï/g, "ы");
	car = car.replace(/e/g, "э");
	car = car.replace(/è/g, "э\u0300");

	car = car.replace(/(\p{Uppercase})ъ/ug, "$1Ъ");
	car = car.replace(/(\p{Uppercase})ь/ug, "$1Ь");

	car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)Э/g, "$1Е");
	car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)э/g, "$1е");

	car = car.replace(/Й(А|а)\u0300/g, "Й\u2060$1");
	car = car.replace(/йа\u0300/g, "й\u2060а");
	car = car.replace(/Й(А|а)/g, "Я");
	car = car.replace(/йа/g, "я");
	car = car.replace(/Й(Э|э)\u0300/g, "Й\u2060$1");
	car = car.replace(/йэ\u0300/g, "й\u2060э");
	car = car.replace(/Й(Э|э)/g, "Е");
	car = car.replace(/йэ/g, "е");
	car = car.replace(/Й(О|о)\u0300/g, "Й\u2060$1");
	car = car.replace(/йо\u0300/g, "й\u2060о");
	car = car.replace(/Й(О|о)/g, "Ё");
	car = car.replace(/йо/g, "ё");
	car = car.replace(/Й(У|у)\u0300/g, "Й\u2060$1");
	car = car.replace(/йу\u0300/g, "й\u2060у");
	car = car.replace(/Й(У|у)/g, "Ю");
	car = car.replace(/йу/g, "ю");

	car = car.replace(/Е\u0300/g, "Э");
	car = car.replace(/е\u0300/g, "э");
	car = car.replace(/\u02ba/g, "ь");
	car = car.replace(/(\u02b9|\u02bc)/g, "ъ");
	car = car.replace(/(\p{M})ь/g, "$1Ь");
	car = car.replace(/(\p{M})ъ/g, "$1Ъ");
	car = car.replace(/(\u0300|\u2060)/g, "");
	car = car.normalize('NFC');
	car = car.replace(/\u201c/g, "«");
	car = car.replace(/\u201d/g, "»");
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
