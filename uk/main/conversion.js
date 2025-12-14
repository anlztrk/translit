function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/<</g, "«")
		.replace(/>>/g, "»");

	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(\u2019|\u0027)/g, "\u02bc")

		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(ь|Ь)О/g, "$1Ö")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(ь|Ь)о/g, "$1ö")

		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1Ä")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ä")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1Ü")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ü")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Є/g, "$1Ë")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)є/g, "$1ë")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ї/g, "$1Ï")
		.replace(/(Б|В|Г|Ґ|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|ґ|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ї/g, "$1ï")

		.replace(/Ь(А|Е|І|У|а|е|і|у)/g, "Ь\u2019$1")
		.replace(/ь(а|е|і|у)/g, "ь\u2019$1")
		.replace(/ЬЯ/g, "ЬA")
		.replace(/ЬЄ/g, "ЬE")
		.replace(/ЬЇ/g, "ЬI")
		.replace(/ЬЮ/g, "ЬU")
		.replace(/(Ь|ь)я/g, "$1a")
		.replace(/(Ь|ь)є/g, "$1e")
		.replace(/(Ь|ь)ї/g, "$1i")
		.replace(/(Ь|ь)ю/g, "$1u")

		.replace(/\u02bc/g, "")

		.replace(/а/g, "a")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "h")
		.replace(/ґ/g, "g")
		.replace(/д/g, "d")
		.replace(/е/g, "e")
		.replace(/ж/g, "ž")
		.replace(/з/g, "z")
		.replace(/и/g, "y")
		.replace(/і/g, "i")
		.replace(/й/g, "j")
		.replace(/к/g, "k")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/о/g, "o")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "u")
		.replace(/ф/g, "f")
		.replace(/х/g, "x")
		.replace(/ц/g, "c")
		.replace(/ч/g, "č")
		.replace(/ш/g, "š")
		.replace(/щ/g, "šč")
		.replace(/ь/g, "j")
		.replace(/є/g, "je")
		.replace(/ї/g, "ji")
		.replace(/ю/g, "ju")
		.replace(/я/g, "ja")

		.replace(/А/g, "A")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "H")
		.replace(/Ґ/g, "G")
		.replace(/Д/g, "D")
		.replace(/Е/g, "E")
		.replace(/Ж/g, "Ž")
		.replace(/З/g, "Z")
		.replace(/И/g, "Y")
		.replace(/І/g, "I")
		.replace(/Й/g, "J")
		.replace(/К/g, "K")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/О/g, "O")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "U")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "X")
		.replace(/Ц/g, "C")
		.replace(/Ч/g, "Č")
		.replace(/Ш/g, "Š")
		.replace(/Щ/g, "Šč")
		.replace(/Ь/g, "J")
		.replace(/Є/g, "Je")
		.replace(/Ї/g, "Ji")
		.replace(/Ю/g, "Ju")
		.replace(/Я/g, "Ja");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}