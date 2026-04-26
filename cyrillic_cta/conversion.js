var car;

function cyrlat() {
	car = document.transcription.text1.value;
	var car_Orig = car;
	var lang = "unknown";
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
	if (/Ы|ы/.test(car_Orig) == false) {
		phonemicYeru = false;
	}
	if (/В|в/.test(car_Orig) && /Ў|ў/.test(car_Orig)) {
		phonemicShortU = true;
	}
	if (/Ҳ|ҳ|Һ|һ/.test(car_Orig)) {
		phonemicKha = true;
	}
	if (/Џ|Җ|Ҷ|Ҹ|Ӂ|џ|җ|ҷ|ҹ|ӂ/.test(car_Orig)) {
		phonemicZhe = true;
	}
	if (/Ҹ|ҹ|Ҝ|ҝ/.test(car_Orig) || (/Ә|ә|Ғ|ғ/.test(car_Orig) && /Ј|ј/.test(car_Orig))) {
		lang = "Azeri";
	} else if (/Ҕ|Ҡ|Ң|Ҥ|Һ|Џ|Җ|Ҷ|Ҹ|Ӂ|Ә|Ы|Ӣ|Ө|Ӧ|Ү|Ӱ|Ӯ|ҕ|ҡ|ң|ҥ|һ|џ|җ|ҷ|ҹ|ӂ|ә|ы|ӣ|ө|ӧ|ү|ӱ|ӯ/.test(car_Orig) == false && /Ў|ў|Қ|қ|Ғ|ғ|Ҳ|ҳ/.test(car_Orig)) {
		lang = "Uzbek";
	} else if (/Ұ|ұ/.test(car_Orig) || (/І|і/.test(car_Orig) && /Ә|ә|Ң|ң|Ө|ө|Ү|ү/.test(car_Orig))) {
		lang = "Kazakh";
	} else if (/Ҳ|ҳ/.test(car_Orig) && /Ә|ә|Ң|ң|Ө|ө|Ү|ү/.test(car_Orig)) {
		lang = "Karakalpak";
	}
	if (lang == "Uzbek") {
		iotatedE = true;
		phonemicYeru = false;
		phonemicYer = false;
		shortUIsVowel = true;
		phonemicShortU = true;
		phonemicKha = true;
		phonemicShcha = false;
		phonemicTse = false;
		phonemicZhe = false;
	}
	if (lang == "Kazakh") {
		iotatedE = false;
		phonemicYeru = true;
		phonemicYer = false
		shortUIsVowel = false;
		phonemicShortU = true;
		phonemicKha = true;
		phonemicShcha = false;
		phonemicTse = false;
		phonemicZhe = false;
	}
	if (lang == "Azeri") {
		iotatedE = false;
		phonemicYeru = true;
		phonemicYer = false;
		shortUIsVowel = false;
		phonemicShortU = false;
		phonemicKha = true;
		phonemicShcha = false;
		phonemicTse = false;
		phonemicZhe = true;
	}
	if (lang == "Karakalpak") {
		iotatedE = false;
		phonemicYeru = true;
		phonemicYer = false;
		shortUIsVowel = false;
		phonemicShortU = true;
		phonemicKha = true;
		phonemicShcha = false;
		phonemicTse = false;
		phonemicZhe = false;
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
		if (lang == "Azeri") {
			car = car.replace(/Ц/g, "С");
			car = car.replace(/ц/g, "с");
		} else {
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
	car = car.replace(/(\p{Lu})(\p{Lu}) Я/ug, "$1$2 ЙА");
	car = car.replace(/Я (\p{Lu})(\p{Lu})/ug, "ЙА $1$2");
	car = car.replace(/Я(\p{Lu})/ug, "ЙА$1");
	car = car.replace(/Я/g, "Йа");
	car = car.replace(/я/g, "йа");
	if (iotatedE == true) {
		car = car.replace(/(\p{Lu})(\p{Lu}) Е/ug, "$1$2 ЙЭ");
		car = car.replace(/Е (\p{Lu})(\p{Lu})/ug, "ЙЭ $1$2");
		car = car.replace(/Е(\p{Lu})/ug, "ЙЭ$1");
		car = car.replace(/Е/g, "Йэ");
		car = car.replace(/е/g, "йэ");
	}
	car = car.replace(/(\p{Lu})(\p{Lu}) Ё/ug, "$1$2 ЙО");
	car = car.replace(/Ё (\p{Lu})(\p{Lu})/ug, "ЙО $1$2");
	car = car.replace(/Ё(\p{Lu})/ug, "ЙО$1");
	car = car.replace(/Ё/g, "Йо");
	car = car.replace(/ё/g, "йо");
	car = car.replace(/(\p{Lu})(\p{Lu}) Ю/ug, "$1$2 ЙУ");
	car = car.replace(/Ю (\p{Lu})(\p{Lu})/ug, "ЙУ $1$2");
	car = car.replace(/Ю(\p{Lu})/ug, "ЙУ$1");
	car = car.replace(/Ю/g, "Йу");
	car = car.replace(/ю/g, "йу");

	if (lang == "Azeri") {
		car = car.replace(/Г/g, "Қ");
		car = car.replace(/г/g, "қ");
		car = car.replace(/Ҝ/g, "Г");
		car = car.replace(/ҝ/g, "г");
		car = car.replace(/Ј/g, "Й");
		car = car.replace(/ј/g, "й");
		car = car.replace(/е/g, "э");
		car = car.replace(/Е/g, "Э");
	}

	if (lang == "Kazakh") {
		car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?И/g, "$1$2$3$4Ӥ");
		car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?и/g, "$1$2$3$4ӥ");
		car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?И/g, "$1$2$3$4Ӹ");
		car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?и/g, "$1$2$3$4ӹ");
		car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӥ$1$2$3$4");
		car = car.replace(/И(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3$4");
		car = car.replace(/и(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3$4");
		car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӹ$1$2$3$4");
		car = car.replace(/И(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3$4");
		car = car.replace(/и(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3$4");
		car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӥ$1$2$3$4");
		car = car.replace(/Ӹ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3$4");
		car = car.replace(/ӹ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3$4");
		car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӹ$1$2$3$4");
		car = car.replace(/Ӥ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3$4");
		car = car.replace(/ӥ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3$4");

		car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?У/g, "$1$2$3$4Ӱ");
		car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?у/g, "$1$2$3$4ӱ");
		car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?У/g, "$1$2$3$4Ӯ");
		car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?у/g, "$1$2$3$4ӯ");
		car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӱ$1$2$3$4");
		car = car.replace(/У(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
		car = car.replace(/у(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
		car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӯ$1$2$3$4");
		car = car.replace(/У(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3$4");
		car = car.replace(/у(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3$4");
		car = car.replace(/Ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӱ$1$2$3$4");
		car = car.replace(/Ӯ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
		car = car.replace(/ӯ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
		car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӯ$1$2$3$4");
		car = car.replace(/Ӱ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3$4");
		car = car.replace(/ӱ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3$4");
		car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)(ӯ|ӱ|у)/g, "$1ў");
		car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү)(Ӯ|Ӱ|У)/g, "$1Ў");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(У|Ӯ)/g, "$1ҰЎ");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)Ӱ/g, "$1ҮЎ");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(у|ӯ)/g, "$1ұў");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)ӱ/g, "$1үў");
		car = car.replace(/(У|Ӯ|у|ӯ)(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш)/g, "ұў$2");
		car = car.replace(/(У|Ӯ)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш)/g, "ҰЎ$2");
		car = car.replace(/(Ӱ|ӱ)(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш)/g, "ұў$2");
		car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш)/g, "ҰЎ$1");
		car = car.replace(/(ӱ|ӯ)/g, "ў");
		car = car.replace(/(Ӱ|Ӯ)/g, "Ў");

		car = car.replace(/(И|Ӥ)(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ІЙ$2");
		car = car.replace(/(И|Ӥ)(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "Ій$2");
		car = car.replace(/(и|ӥ)(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "ій$2");
		car = car.replace(/Ӹ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ЫЙ$1");
		car = car.replace(/Ӹ(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "Ый$1");
		car = car.replace(/ӹ(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "ый$1");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Ӥ|И)/g, "$1ІЙ");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|ъ|ь)(ӥ|и)/g, "$1ій");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)Ӹ/g, "$1ЫЙ");
		car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|ъ|ь)ӹ/g, "$1ый");

		car = car.replace(/(і|ӥ|ӹ)/g, "и");
		car = car.replace(/(І|Ӥ|Ӹ)/g, "И");
		car = car.replace(/е/g, "э");
		car = car.replace(/Е/g, "Э");
		car = car.replace(/ұ/g, "у");
		car = car.replace(/Ұ/g, "У");
	}

	if (lang == "Uzbek") {
		car = car.replace(/НГ(А|Э|И|О|У|Ў)/g, "ÑG$1");
		car = car.replace(/нг(а|э|и|о|у|ў)/g, "ñg$1");
		car = car.replace(/НГГ/g, "Ñ\u2060G");
		car = car.replace(/нгг/g, "ñ\u2060g");
		car = car.replace(/НГ/g, "Ñ");
		car = car.replace(/нг/g, "ñ");
		car = car.replace(/А/g, "Ä");
		car = car.replace(/а/g, "ä");
		car = car.replace(/О/g, "A");
		car = car.replace(/о/g, "a");
		car = car.replace(/Ў/g, "O");
		car = car.replace(/ў/g, "o");
	}
	car = car.replace(/А/g, "A");
	car = car.replace(/(Ә|Ӓ)/g, "Ä");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/(Ғ|Ҕ)/g, "Ğ");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	if (phonemicYeru == false) {
		car = car.replace(/И/g, "I");
	}
	car = car.replace(/И/g, "İ");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/(Қ|Ҡ)/g, "Q");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/(Ң|Ҥ)/g, "Ñ");
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
		car = car.replace(/Х/g, "X");
		car = car.replace(/х/g, "x");
	} else {
		car = car.replace(/Х/g, "H");
		car = car.replace(/х/g, "h");
	}
	car = car.replace(/(Һ|Ҳ)/g, "H");
	if (phonemicZhe && phonemicTse) {
		car = car.replace(/Ц/g, "Ţ");
		car = car.replace(/ц/g, "ţ");
	}
	car = car.replace(/Ц/g, "C");
	car = car.replace(/Ч/g, "Ç");
	car = car.replace(/(Џ|Җ|Ҷ|Ҹ|Ӂ)/g, "C");
	car = car.replace(/Ш/g, "Ş");
	car = car.replace(/Щ/g, "Ś");
	car = car.replace(/Ы/g, "I");
	car = car.replace(/Э/g, "E");
	car = car.replace(/а/g, "a");
	car = car.replace(/(ә|ӓ)/g, "ä");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/(ғ|ҕ)/g, "ğ");
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
	car = car.replace(/(ң|ҥ)/g, "ñ");
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
	car = car.replace(/ч/g, "ç");
	car = car.replace(/(џ|җ|ҷ|ҹ|ӂ)/g, "c");
	car = car.replace(/ш/g, "ş");
	car = car.replace(/щ/g, "ś");
	if (phonemicYer == false) {
		car = car.replace(/(Ъ|ъ)/g, "\u02bc");
		car = car.replace(/(Ь|ь)/g, "");
	}
	car = car.replace(/(Ъ|ъ)/g, "\u02ba");
	car = car.replace(/ы/g, "ı");
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
	var iDotlessDistinct = true;
	var wDistinct = false;
	var xDistinct = false;
	var jDistinct = true;
	if (/V|v/.test(car_Orig) && /W|w/.test(car_Orig)) {
		wDistinct = true;
	}
	if (/X|x/.test(car_Orig)) {
		xDistinct = true;
	}
	if (/C|c/.test(car_Orig) && /J|j/.test(car_Orig)) {
		jDistinct = true;
	}
	car = car.replace(/A/g, "А");
	car = car.replace(/À/g, "А\u0300");
	car = car.replace(/Ä/g, "Ә");
	car = car.replace(/B/g, "Б");
	car = car.replace(/V/g, "В");
	car = car.replace(/G/g, "Г");
	car = car.replace(/Ğ/g, "Ғ");
	car = car.replace(/D/g, "Д");
	car = car.replace(/J/g, "Ж");
	car = car.replace(/Z/g, "З");
	car = car.replace(/İ/g, "И");
	car = car.replace(/Y/g, "Й");
	car = car.replace(/K/g, "К");
	car = car.replace(/Q/g, "Қ");
	car = car.replace(/L/g, "Л");
	car = car.replace(/M/g, "М");
	car = car.replace(/N/g, "Н");
	car = car.replace(/Ñ/g, "Ң");
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
	car = car.replace(/X/g, "Х");
	car = car.replace(/Ţ/g, "Ц");
	if (jDistinct == false) {
		car = car.replace(/C/g, "Ж");
		car = car.replace(/c/g, "ж");
	}
	car = car.replace(/C/g, "Җ");
	car = car.replace(/Ç/g, "Ч");
	car = car.replace(/Ş/g, "Ш");
	car = car.replace(/Ś/g, "Щ");
	if (iDotlessDistinct == false) {
		car = car.replace(/I/g, "И");
	}
	car = car.replace(/I/g, "Ы");
	car = car.replace(/E/g, "Э");
	car = car.replace(/È/g, "Э\u0300");
	car = car.replace(/a/g, "а");
	car = car.replace(/à/g, "а\u0300");
	car = car.replace(/ä/g, "ә");
	car = car.replace(/b/g, "б");
	car = car.replace(/v/g, "в");
	car = car.replace(/g/g, "г");
	car = car.replace(/ğ/g, "ғ");
	car = car.replace(/d/g, "д");
	car = car.replace(/j/g, "ж");
	car = car.replace(/z/g, "з");
	car = car.replace(/i/g, "и");
	car = car.replace(/y/g, "й");
	car = car.replace(/k/g, "к");
	car = car.replace(/q/g, "қ");
	car = car.replace(/l/g, "л");
	car = car.replace(/m/g, "м");
	car = car.replace(/n/g, "н");
	car = car.replace(/ñ/g, "ң");
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
	car = car.replace(/x/g, "х");
	car = car.replace(/ţ/g, "ц");
	car = car.replace(/c/g, "җ");
	car = car.replace(/ç/g, "ч");
	car = car.replace(/ş/g, "ш");
	car = car.replace(/ś/g, "щ");
	car = car.replace(/ı/g, "ы");
	car = car.replace(/e/g, "э");
	car = car.replace(/è/g, "э\u0300");

	car = car.replace(/(\p{Lu})ъ/ug, "$1Ъ");
	car = car.replace(/(\p{Lu})ь/ug, "$1Ь");

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
	car = car.replace(/\u02bc/g, "ъ");
	car = car.replace(/(\u0300|\u2060)/g, "");
	car = car.normalize('NFC');
	car = car.replace(/\u201c/g, "«");
	car = car.replace(/\u201d/g, "»");
	document.transcription.text1.value = car;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
