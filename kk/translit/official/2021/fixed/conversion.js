function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ə/g, "ә")
		.replace(/Ə/g, "Ә");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/Х(0|1|2|3|4|5|6|7|8|9)/g, "X$1")
		.replace(/х(0|1|2|3|4|5|6|7|8|9)/g, "x$1")
		.replace(/(0|1|2|3|4|5|6|7|8|9)Х/g, "$1X")
		.replace(/(0|1|2|3|4|5|6|7|8|9)х/g, "$1x")

		//Я, Ё, Ю 
		.replace(/Я(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙА$1")
		.replace(/Ё(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙО$1")
		.replace(/Ю(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙУ$1")
		.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Я/g, "$1ЙА")
		.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ё/g, "$1ЙО")
		.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ю/g, "$1ЙУ")
		.replace(/я/g, "йа")
		.replace(/ё/g, "йо")
		.replace(/ю/g, "йу")
		.replace(/Я/g, "Йа")
		.replace(/Ё/g, "Йо")
		.replace(/Ю/g, "Йу")

		//Ц
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)Ц/g, "$1ТС")
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)ц/g, "$1тс")
		.replace(/Ц/g, "С")
		.replace(/ц/g, "с")

		//Ч
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)Ч/g, "$1ТШ")
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)ч/g, "$1тш")
		.replace(/Ч/g, "Ш")
		.replace(/ч/g, "ш")

		//Щ
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)щ(а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)/g, "$1шш$2")
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)Щ(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э)/g, "$1ШШ$2")
		.replace(/щ/g, "ш")
		.replace(/Щ/g, "Ш")

		.replace(/Э/g, "Е")
		.replace(/э/g, "е")

		.replace(/Һ/g, "Х")
		.replace(/һ/g, "х")

		.replace(/(Ь|ь)/g, "")

		//У
		.replace(/У(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ъ)/g, "Ӯ$1")
		.replace(/у(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ъ)/g, "ӯ$1")

		.replace(/Ӯ(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)/g, "У$1")
		.replace(/ӯ(а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)/g, "у$1")

		.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ъ)У/g, "$1Ӯ")
		.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ъ)у/g, "$1ӯ")

		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э)Ӯ/g, "$1У")
		.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)ӯ/g, "$1у")

		.replace(/а/g, "a")
		.replace(/ә/g, "ä")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/ғ/g, "ğ")
		.replace(/д/g, "d")
		.replace(/е/g, "e")
		.replace(/ж/g, "j")
		.replace(/з/g, "z")
		.replace(/и/g, "ī")
		.replace(/й/g, "y")
		.replace(/к/g, "k")
		.replace(/қ/g, "q")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/ң/g, "ñ")
		.replace(/о/g, "o")
		.replace(/ө/g, "ö")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "w")
		.replace(/ӯ/g, "ū")
		.replace(/ұ/g, "u")
		.replace(/ү/g, "ü")
		.replace(/ф/g, "f")
		.replace(/х/g, "h")
		.replace(/ш/g, "ş")
		.replace(/ъ/g, "")
		.replace(/ы/g, "ı")
		.replace(/і/g, "i")
		.replace(/э/g, "e")
		.replace(/А/g, "A")
		.replace(/Ә/g, "Ä")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Ғ/g, "Ğ")
		.replace(/Д/g, "D")
		.replace(/Е/g, "E")
		.replace(/Ж/g, "J")
		.replace(/З/g, "Z")
		.replace(/И/g, "Ī")
		.replace(/Й/g, "Y")
		.replace(/К/g, "K")
		.replace(/Қ/g, "Q")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/Ң/g, "Ñ")
		.replace(/О/g, "O")
		.replace(/Ө/g, "Ö")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "W")
		.replace(/Ӯ/g, "Ū")
		.replace(/Ұ/g, "U")
		.replace(/Ү/g, "Ü")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "H")
		.replace(/Ш/g, "Ş")
		.replace(/Ъ/g, "")
		.replace(/Ы/g, "I")
		.replace(/І/g, "İ")

		.replace(/«/g, "\u201c")
		.replace(/»/g, "\u201d");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
