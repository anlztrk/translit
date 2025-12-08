var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.normalize('NFC');

	car = car.replace(/(є|ѳ)/g, "ө");
	car = car.replace(/ї/g, "ү");
	car = car.replace(/(Є|Ѳ)/g, "Ө");
	car = car.replace(/Ї/g, "Ү");

	car = car.replace(/Ъ(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "\u2019$1");
	car = car.replace(/ъ(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "\u2019$1");

	car = car.replace(/еө/g, "ьөө");
	car = car.replace(/Еө/g, "Ьөө");
	car = car.replace(/ЕӨ/g, "ЬӨӨ");

	car = car.replace(/юү/g, "ьүү̇");
	car = car.replace(/Юү/g, "Ьүү̇");
	car = car.replace(/ЮҮ/g, "ЬҮҮ̇");

	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
	car = car.replace(/(\p{Uppercase})Я/ug, "$1ЬА");
	car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
	car = car.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
	car = car.replace(/Я/g, "Ьа");
	car = car.replace(/я/g, "ьа");
	car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЬЭ");
	car = car.replace(/(\p{Uppercase})Е/ug, "$1ЬЭ");
	car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЬЭ $1$2");
	car = car.replace(/Е(\p{Uppercase})/ug, "ЬЭ$1");
	car = car.replace(/Е/g, "Ьэ");
	car = car.replace(/е/g, "ьэ");
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

	car = car.replace(/ьь(а|э|ы|и|о|ө|у|ү)/g, "йи$1");
	car = car.replace(/Ьь(а|э|ы|и|о|ө|у|ү)/g, "Йи$1");
	car = car.replace(/ЬЬ(А|Э|Ы|И|О|Ө|У|Ү)/g, "ЙИ$1");

	car = car.replace(/(Ъ|ъ)ь(а|э|ы|и|о|ө|у|ү)/g, "и$2");
	car = car.replace(/ЪЬ(А|Э|Ы|И|О|Ө|У|Ү)/g, "И$1");

	car = car.replace(/(?<!(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ))Ь(А|Э|Ы|И|О|Ө|У|Ү|а|э|ы|и|о|ө|у|ү)/g, "Й$2");
	car = car.replace(/(?<!(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ))ь(а|э|ы|и|о|ө|у|ү)/g, "й$2");

	car = car.replace(/(А|Э|Ы|И|О|Ө|У|Ү)Й(?!(А|Э|Ы|И|О|Ө|У|Ү|а|э|ы|и|о|ө|у|ү))/g, "$1И$2");
	car = car.replace(/(А|Э|Ы|И|О|Ө|У|Ү|а|э|ы|и|о|ө|у|ү)й(?!(а|э|ы|и|о|ө|у|ү))/g, "$1и$2");

	car = car.replace(/а/g, "a");
	car = car.replace(/б/g, "b");
	car = car.replace(/в/g, "v");
	car = car.replace(/г/g, "g");
	car = car.replace(/д/g, "d");
	car = car.replace(/ж/g, "j");
	car = car.replace(/з/g, "z");
	car = car.replace(/и/g, "i");
	car = car.replace(/й/g, "y");
	car = car.replace(/к/g, "k");
	car = car.replace(/л/g, "l");
	car = car.replace(/м/g, "m");
	car = car.replace(/н/g, "n");
	car = car.replace(/о/g, "o");
	car = car.replace(/ө/g, "ọ");
	car = car.replace(/п/g, "p");
	car = car.replace(/р/g, "r");
	car = car.replace(/с/g, "s");
	car = car.replace(/т/g, "t");
	car = car.replace(/у/g, "u");
	car = car.replace(/ү/g, "ụ");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "h");
	car = car.replace(/ц/g, "c");
	car = car.replace(/ч/g, "č");
	car = car.replace(/ш/g, "š");
	car = car.replace(/щ/g, "ś");
	car = car.replace(/ы/g, "ị");
	car = car.replace(/ь/g, "y");
	car = car.replace(/э/g, "e");

	car = car.replace(/А/g, "A");
	car = car.replace(/Б/g, "B");
	car = car.replace(/В/g, "V");
	car = car.replace(/Г/g, "G");
	car = car.replace(/Д/g, "D");
	car = car.replace(/Ж/g, "J");
	car = car.replace(/З/g, "Z");
	car = car.replace(/И/g, "I");
	car = car.replace(/Й/g, "Y");
	car = car.replace(/К/g, "K");
	car = car.replace(/Л/g, "L");
	car = car.replace(/М/g, "M");
	car = car.replace(/Н/g, "N");
	car = car.replace(/О/g, "O");
	car = car.replace(/Ө/g, "Ọ");
	car = car.replace(/П/g, "P");
	car = car.replace(/Р/g, "R");
	car = car.replace(/С/g, "S");
	car = car.replace(/Т/g, "T");
	car = car.replace(/У/g, "U");
	car = car.replace(/Ү/g, "Ụ");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "H");
	car = car.replace(/Ц/g, "C");
	car = car.replace(/Ч/g, "Č");
	car = car.replace(/Ш/g, "Š");
	car = car.replace(/Щ/g, "Ś");
	car = car.replace(/Ы/g, "Ị");
	car = car.replace(/Ь/g, "Y");
	car = car.replace(/Э/g, "E");
	car = car.replace(/(Ъ|ъ)/g, "");

	car = car.replace(/\u2039/g, "\u2018");
	car = car.replace(/\u203a/g, "\u2019");
	car = car.replace(/\u00ab/g, "\u201c");
	car = car.replace(/\u00bb/g, "\u201d");

	car = car.normalize('NFC');
	document.transcription.text2.value = car;
}

function latcyr() {}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
