var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/Є/g, "Ө");
car = car.replace(/є/g, "ө");
car = car.replace(/Ї/g, "Ү");
car = car.replace(/ї/g, "ү");

car = car.replace(/Е(Ө|ө)/g, "Й$1$1");
car = car.replace(/еө/g, "йөө");

car = car.replace(/Е/g, "Йэ");
car = car.replace(/Ё/g, "Йо");
car = car.replace(/Ю/g, "Йу");
car = car.replace(/Я/g, "Йа");
car = car.replace(/е/g, "йэ");
car = car.replace(/ё/g, "йо");
car = car.replace(/ю/g, "йу");
car = car.replace(/я/g, "йа");

car = car.replace(/(А|И|О|Ө|У|Ү|Ы|Э|а|и|о|ө|у|ү|ы|э)(И|и)/g, "$1\u02bc$2");
car = car.replace(/(И|и)(А|И|О|Ө|У|Ү|Ы|Э|а|и|о|ө|у|ү|ы|э)/g, "$1\u02bc$2");
car = car.replace(/(А|Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|а|б|в|г|д|ж|з|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э)й/g, "$1и");
car = car.replace(/(А|Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|а|б|в|г|д|ж|з|й|к|л|м|н|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э)Й/g, "$1И");
car = car.replace(/и(А|И|О|Ө|У|Ү|Ы|Э|а|и|о|ө|у|ү|ы|э)/g, "й$1");
car = car.replace(/И(А|И|О|Ө|У|Ү|Ы|Э|а|и|о|ө|у|ү|ы|э)/g, "Й$1");

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
car = car.replace(/ө/g, "ö");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ү/g, "ü");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "ś");
car = car.replace(/ъ/g, "\u02bc");
car = car.replace(/ы/g, "ï");
car = car.replace(/ь/g, "ÿ");
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
car = car.replace(/Ө/g, "Ö");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ү/g, "Ü");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
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
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
