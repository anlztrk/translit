function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
	.replace(/<</g, "«")
	.replace(/>>/g, "»")
	.replace(/(\p{Script=Cyrl})A/ug, "$1А")
	.replace(/(\p{Script=Cyrl})C/ug, "$1С")
	.replace(/(\p{Script=Cyrl})E/ug, "$1Е")
	.replace(/(\p{Script=Cyrl})Ë/ug, "$1Ё")
	.replace(/(\p{Script=Cyrl})O/ug, "$1О")
	.replace(/(\p{Script=Cyrl})P/ug, "$1Р")
	.replace(/(\p{Script=Cyrl})X/ug, "$1Х")
	.replace(/(\p{Script=Cyrl})a/ug, "$1а")
	.replace(/(\p{Script=Cyrl})c/ug, "$1с")
	.replace(/(\p{Script=Cyrl})e/ug, "$1е")
	.replace(/(\p{Script=Cyrl})ë/ug, "$1ё")
	.replace(/(\p{Script=Cyrl})o/ug, "$1о")
	.replace(/(\p{Script=Cyrl})p/ug, "$1р")
	.replace(/(\p{Script=Cyrl})x/ug, "$1х")
	.replace(/A(\p{Script=Cyrl})/ug, "А$1")
	.replace(/C(\p{Script=Cyrl})/ug, "С$1")
	.replace(/E(\p{Script=Cyrl})/ug, "Е$1")
	.replace(/Ë(\p{Script=Cyrl})/ug, "Ё$1")
	.replace(/O(\p{Script=Cyrl})/ug, "О$1")
	.replace(/P(\p{Script=Cyrl})/ug, "Р$1")
	.replace(/X(\p{Script=Cyrl})/ug, "Х$1")
	.replace(/a(\p{Script=Cyrl})/ug, "а$1")
	.replace(/c(\p{Script=Cyrl})/ug, "с$1")
	.replace(/e(\p{Script=Cyrl})/ug, "е$1")
	.replace(/ë(\p{Script=Cyrl})/ug, "ё$1")
	.replace(/o(\p{Script=Cyrl})/ug, "о$1")
	.replace(/p(\p{Script=Cyrl})/ug, "р$1")
	.replace(/x(\p{Script=Cyrl})/ug, "х$1");
	
	document.transcription.text2.value = document.transcription.text1.value
	.replace(/([ЪЬ])([АОУ])/g, "$1\u2019$2")
	.replace(/([ЪЬъь])([аоу])/g, "$1\u2019$2")
	.replace(/ЪЕ/g, "ЙÉ")
	.replace(/([Ъъ])е/g, "йé")
	.replace(/([ЬЪ])Э/g, "$1\u2019Э")
	.replace(/([ЬЪьъ])э/g, "$1\u2019э")

	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Я/g, "$1Ä")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])я/g, "$1ä")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Э/g, "$1É")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])э/g, "$1é")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Е/g, "$1E")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])е/g, "$1e")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ё/g, "$1Ö")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ё/g, "$1ö")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ю/g, "$1Ü")
	.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ю/g, "$1ü")

	.replace(/(\p{Uppercase})Я/ug, "$1ЙА")
	.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА")
	.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2")
	.replace(/Я(\p{Uppercase})/ug, "ЙА$1")
	.replace(/Я/g, "Йа")
	.replace(/я/g, "йа")
	.replace(/(\p{Uppercase})Е/ug, "$1ЙЭ")
	.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ")
	.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2")
	.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1")
	.replace(/Е/g, "Йэ")
	.replace(/е/g, "йэ")
	.replace(/(\p{Uppercase})Ё/ug, "$1ЙО")
	.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО")
	.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2")
	.replace(/Ё(\p{Uppercase})/ug, "ЙО$1")
	.replace(/Ё/g, "Йо")
	.replace(/ё/g, "йо")
	.replace(/(\p{Uppercase})Ю/ug, "$1ЙУ")
	.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ")
	.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2")
	.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1")
	.replace(/Ю/g, "Йу")
	.replace(/ю/g, "йу")

	.replace(/а/g, "a")
	.replace(/б/g, "b")
	.replace(/в/g, "v")
	.replace(/г/g, "g")
	.replace(/д/g, "d")
	.replace(/е/g, "je")
	.replace(/ж/g, "ž")
	.replace(/з/g, "z")
	.replace(/и/g, "i")
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
	.replace(/х/g, "h")
	.replace(/ц/g, "c")
	.replace(/ч/g, "č")
	.replace(/ш/g, "š")
	.replace(/щ/g, "ś")
	.replace(/ы/g, "y")
	.replace(/ь/g, "j")
	.replace(/ъ/g, "")
	.replace(/э/g, "e")
	.replace(/ю/g, "ju")
	.replace(/ё/g, "jo")
	.replace(/я/g, "ja")

	.replace(/А/g, "A")
	.replace(/Б/g, "B")
	.replace(/В/g, "V")
	.replace(/Г/g, "G")
	.replace(/Д/g, "D")
	.replace(/Е/g, "Je")
	.replace(/Ж/g, "Ž")
	.replace(/З/g, "Z")
	.replace(/И/g, "I")
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
	.replace(/Х/g, "H")
	.replace(/Ц/g, "C")
	.replace(/Ч/g, "Č")
	.replace(/Ш/g, "Š")
	.replace(/Щ/g, "Ś")
	.replace(/Ы/g, "Y")
	.replace(/Ь/g, "J")
	.replace(/Ъ/g, "")
	.replace(/Э/g, "E")
	.replace(/Ю/g, "Ju")
	.replace(/Ё/g, "Jo")
	.replace(/Я/g, "Ja");
}
/*
function latcyr() {
	car = document.transcription.text2.value;
	car = car.replace(/je/g, "е");
	car = car.replace(/jo/g, "ё");
	car = car.replace(/ju/g, "ю");
	car = car.replace(/ja/g, "я");
	car = car.replace(/J[Ee]/g, "Е");
	car = car.replace(/J[Oo]/g, "Ё");
	car = car.replace(/J[Uu]/g, "Ю");
	car = car.replace(/J[Aa]/g, "Я");
	car = car.replace(/a/g, "а");
	car = car.replace(/b/g, "б");
	car = car.replace(/v/g, "в");
	car = car.replace(/g/g, "г");
	car = car.replace(/d/g, "д");
	car = car.replace(/ž/g, "ж");
	car = car.replace(/z/g, "з");
	car = car.replace(/i/g, "и");
	car = car.replace(/k/g, "к");
	car = car.replace(/l/g, "л");
	car = car.replace(/m/g, "м");
	car = car.replace(/n/g, "н");
	car = car.replace(/o/g, "о");
	car = car.replace(/p/g, "п");
	car = car.replace(/r/g, "р");
	car = car.replace(/s/g, "с");
	car = car.replace(/t/g, "т");
	car = car.replace(/u/g, "у");
	car = car.replace(/f/g, "ф");
	car = car.replace(/h/g, "х");
	car = car.replace(/c/g, "ц");
	car = car.replace(/č/g, "ч");
	car = car.replace(/š/g, "ш");
	car = car.replace(/ś/g, "щ");
	car = car.replace(/y/g, "ы");
	car = car.replace(/j/g, "ь");
	car = car.replace(/e/g, "э");
	car = car.replace(/A/g, "А");
	car = car.replace(/B/g, "Б");
	car = car.replace(/V/g, "В");
	car = car.replace(/G/g, "Г");
	car = car.replace(/D/g, "Д");
	car = car.replace(/Ž/g, "Ж");
	car = car.replace(/Z/g, "З");
	car = car.replace(/I/g, "И");
	car = car.replace(/K/g, "К");
	car = car.replace(/L/g, "Л");
	car = car.replace(/M/g, "М");
	car = car.replace(/N/g, "Н");
	car = car.replace(/O/g, "О");
	car = car.replace(/P/g, "П");
	car = car.replace(/R/g, "Р");
	car = car.replace(/S/g, "С");
	car = car.replace(/T/g, "Т");
	car = car.replace(/U/g, "У");
	car = car.replace(/F/g, "Ф");
	car = car.replace(/H/g, "Х");
	car = car.replace(/C/g, "Ц");
	car = car.replace(/Č/g, "Ч");
	car = car.replace(/Š/g, "Ш");
	car = car.replace(/Ś/g, "Щ");
	car = car.replace(/Y/g, "Ы");
	car = car.replace(/J/g, "Ь");
	car = car.replace(/E/g, "Э");
	
    car = car.replace(/([АЕИЙОУЫЭ])Ь/g, "$1Й");
	car = car.replace(/([АЕИЙОУЫЭаеийоуыэ])ь/g, "$1й");

	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ü/g, "$1ю");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ü/g, "$1Ю");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ö/g, "$1ё");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ö/g, "$1Ё");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])e/g, "$1е");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])E/g, "$1Е");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])è/g, "$1э");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])È/g, "$1Э");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ä/g, "$1я");
	car = car.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ä/g, "$1Я");

	car = car.replace(/([ЬЪьъ])\u2019э/g, "$1э");
	car = car.replace(/([ЬЪ])\u2019Э/g, "$1Э");
	car = car.replace(/йè/g, "ъе");
	car = car.replace(/Йè/g, "Ъе");
	car = car.replace(/ЙÈ/g, "ЪЕ");
	car = car.replace(/([ЪЬъь])\u2019([аоу])/g, "$1$2");
	car = car.replace(/([ЪЬ])\u2019([АОУ])/g, "$1$2");
	document.transcription.text1.value = car;
}
*/
function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
