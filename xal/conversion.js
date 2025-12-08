var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Җ|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|җ|ш|щ)(Э|э)/g, "$1$2\u0300");
car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Җ|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|җ|ш|щ)Е/g, "$1Э");
car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Җ|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|җ|ш|щ)е/g, "$1э");
car = car.replace(/(Э|э)\u0300(Э|э)/g, "$1$2");

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
car = car.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1");
car = car.replace(/(Е|е|Э|э)Е/g, "$1Э");
car = car.replace(/(Е|е|Э|э)е/g, "$1э");
car = car.replace(/Е/g, "Йэ");
car = car.replace(/е/g, "йэ");

car = car.replace(/Ё/g, "Йо");
car = car.replace(/Ю/g, "Йу");
car = car.replace(/Я/g, "Йа");
car = car.replace(/ё/g, "йо");
car = car.replace(/ю/g, "йу");
car = car.replace(/я/g, "йа");

car = car.replace(/(А|Ә|И|О|Ө|У|Ү|Э|а|ә|и|о|ө|у|ү|э)(И|и)/g, "$1\u02bc$2");
car = car.replace(/(И|и)(А|Ә|И|О|Ө|У|Ү|Э|а|ә|и|о|ө|у|ү|э)/g, "$1\u02bc$2");

car = car.replace(/(А|Ә|И|О|Ө|У|Ү|Ы|Э|а|ә|и|о|ө|у|ү|ы|э)й(А|Ә|И|О|Ө|У|Ү|Ы|Э|а|ә|и|о|ө|у|ү|ы|э)/g, "$1ӣ$2");
car = car.replace(/(А|Ә|И|О|Ө|У|Ү|Ы|Э|а|ә|и|о|ө|у|ү|ы|э)Й(А|Ә|И|О|Ө|У|Ү|Ы|Э|а|ә|и|о|ө|у|ү|ы|э)/g, "$1Ӣ$2");
car = car.replace(/(А|Ә|Б|В|Г|Д|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|Э|а|ә|б|в|г|д|ж|җ|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|һ|ц|ч|ш|щ|ъ|ь|э)й/g, "$1и");
car = car.replace(/(А|Ә|Б|В|Г|Д|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|Э|а|ә|б|в|г|д|ж|җ|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|һ|ц|ч|ш|щ|ъ|ь|э)Й/g, "$1И");
car = car.replace(/ӣ/g, "й");
car = car.replace(/Ӣ/g, "Й");

car = car.replace(/а/g, "a");
car = car.replace(/ә/g, "ä");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/ж/g, "ž");
car = car.replace(/җ/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/й/g, "y");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/ң/g, "ṅ");
car = car.replace(/о/g, "o");
car = car.replace(/ө/g, "ö");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ү/g, "ü");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "ḥ");
car = car.replace(/һ/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "ś");
car = car.replace(/ъ/g, "\u02bc");
car = car.replace(/ы/g, "ï");
car = car.replace(/ь/g, "ÿ");
car = car.replace(/э/g, "e");
car = car.replace(/А/g, "A");
car = car.replace(/Ә/g, "Ä");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/Җ/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/Й/g, "Y");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/Ң/g, "Ṅ");
car = car.replace(/О/g, "O");
car = car.replace(/Ө/g, "Ö");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ү/g, "Ü");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "Ḥ");
car = car.replace(/Һ/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Ś");
car = car.replace(/Ъ/g, "\u02bc");
car = car.replace(/Ы/g, "Ï");
car = car.replace(/Ь/g, "Ÿ");
car = car.replace(/Э/g, "E");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
