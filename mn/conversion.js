function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/(є|ѳ)/g, "ө")
		.replace(/ї/g, "ү")
		.replace(/(Є|Ѳ)/g, "Ө")
		.replace(/Ї/g, "Ү");

	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFC')

		.replace(/Ъ(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "\u2019$1")
		.replace(/ъ(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "\u2019$1")

		.replace(/еө/g, "ьөө")
		.replace(/Еө/g, "Ьөө")
		.replace(/ЕӨ/g, "ЬӨӨ")

		.replace(/юү/g, "ьүү̇")
		.replace(/Юү/g, "Ьүү̇")
		.replace(/ЮҮ/g, "ЬҮҮ̇")

		.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА")
		.replace(/(\p{Uppercase})Я/ug, "$1ЬА")
		.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2")
		.replace(/Я(\p{Uppercase})/ug, "ЬА$1")
		.replace(/Я/g, "Ьа")
		.replace(/я/g, "ьа")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЬЭ")
		.replace(/(\p{Uppercase})Е/ug, "$1ЬЭ")
		.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЬЭ $1$2")
		.replace(/Е(\p{Uppercase})/ug, "ЬЭ$1")
		.replace(/Е/g, "Ьэ")
		.replace(/е/g, "ьэ")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЬО")
		.replace(/(\p{Uppercase})Ё/ug, "$1ЬО")
		.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЬО $1$2")
		.replace(/Ё(\p{Uppercase})/ug, "ЬО$1")
		.replace(/Ё/g, "Ьо")
		.replace(/ё/g, "ьо")
		.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ")
		.replace(/(\p{Uppercase})Ю/ug, "$1ЬУ")
		.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2")
		.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1")
		.replace(/Ю/g, "Ьу")
		.replace(/ю/g, "ьу")

		.replace(/ьь(а|э|ы|и|о|ө|у|ү)/g, "йи$1")
		.replace(/Ьь(а|э|ы|и|о|ө|у|ү)/g, "Йи$1")
		.replace(/ЬЬ(А|Э|Ы|И|О|Ө|У|Ү)/g, "ЙИ$1")

		.replace(/(Ъ|ъ)ь(а|э|ы|и|о|ө|у|ү)/g, "и$2")
		.replace(/ЪЬ(А|Э|Ы|И|О|Ө|У|Ү)/g, "И$1")

		.replace(/(?<!(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ))Ь(А|Э|Ы|И|О|Ө|У|Ү|а|э|ы|и|о|ө|у|ү)/g, "Й$2")
		.replace(/(?<!(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ))ь(а|э|ы|и|о|ө|у|ү)/g, "й$2")

		.replace(/(А|Э|Ы|И|О|Ө|У|Ү)Й(?!(А|Э|Ы|И|О|Ө|У|Ү|а|э|ы|и|о|ө|у|ү))/g, "$1И$2")
		.replace(/(А|Э|Ы|И|О|Ө|У|Ү|а|э|ы|и|о|ө|у|ү)й(?!(а|э|ы|и|о|ө|у|ү))/g, "$1и$2")

		.replace(/а/g, "a")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/д/g, "d")
		.replace(/ж/g, "j")
		.replace(/з/g, "z")
		.replace(/и/g, "i")
		.replace(/й/g, "y")
		.replace(/к/g, "k")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/о/g, "o")
		.replace(/ө/g, "ọ")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "u")
		.replace(/ү/g, "ụ")
		.replace(/ф/g, "f")
		.replace(/х/g, "h")
		.replace(/ц/g, "c")
		.replace(/ч/g, "č")
		.replace(/ш/g, "š")
		.replace(/щ/g, "ś")
		.replace(/ы/g, "ị")
		.replace(/ь/g, "y")
		.replace(/э/g, "e")

		.replace(/А/g, "A")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Д/g, "D")
		.replace(/Ж/g, "J")
		.replace(/З/g, "Z")
		.replace(/И/g, "I")
		.replace(/Й/g, "Y")
		.replace(/К/g, "K")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/О/g, "O")
		.replace(/Ө/g, "Ọ")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "U")
		.replace(/Ү/g, "Ụ")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "H")
		.replace(/Ц/g, "C")
		.replace(/Ч/g, "Č")
		.replace(/Ш/g, "Š")
		.replace(/Щ/g, "Ś")
		.replace(/Ы/g, "Ị")
		.replace(/Ь/g, "Y")
		.replace(/Э/g, "E")
		.replace(/(Ъ|ъ)/g, "")

		.replace(/\u2039/g, "\u2018")
		.replace(/\u203a/g, "\u2019")
		.replace(/\u00ab/g, "\u201c")
		.replace(/\u00bb/g, "\u201d")

		.normalize('NFC');
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}