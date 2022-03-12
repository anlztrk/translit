//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
document.transcription.text2.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)Х/g, "$1X");
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)х/g, "$1x");
car = car.replace(/Х(0|1|2|3|4|5|6|7|8|9)/g, "X$1");
car = car.replace(/х(0|1|2|3|4|5|6|7|8|9)/g, "x$1");

car = car.replace(/дж/g, "џ");
car = car.replace(/Д(Ж|ж)/g, "Џ");

car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)И/g, "$1Ɩ");
car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)и/g, "$1ɩ");
car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ɩ(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)/g, "$1И$2");
car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ɩ(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)/g, "$1и$2");
car = car.replace(/(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ɩ/g, "$1$2И");
car = car.replace(/(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ɩ/g, "$1$2и");

car = car.replace(/ɩ/g, "і");
car = car.replace(/Ɩ/g, "І");

car = car.replace(/(С|с)(Г|г)/g, "$1\u2019$2");
car = car.replace(/(К|к)(Г|г)/g, "$1\u2019$2");
car = car.replace(/(Ш|ш)(Ч|ч)/g, "$1\u2019$2");

car = car.replace(/ИЙ|Ий/g, "Y");
car = car.replace(/ий/g, "y");
car = car.replace(/ІЙ|Ій/g, "Y");
car = car.replace(/ІЙ|Ій/g, "Y");
car = car.replace(/ій/g, "y");
car = car.replace(/ЙИ/g, "ĬI");
car = car.replace(/Йи/g, "Ĭi");
car = car.replace(/йи/g, "ĭi");
car = car.replace(/ИЕ/g, "IYE");
car = car.replace(/Ие/g, "Iye");
car = car.replace(/ие/g, "iye");
car = car.replace(/ИЇ/g, "IYI");
car = car.replace(/Иї/g, "Iyi");
car = car.replace(/иї/g, "iyi");

car = car.replace(/ʼ/g, "ъ");
car = car.replace(/’/g, "ъ");
car = car.replace(/'/g, "ъ");
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/џ/g, "j");
car = car.replace(/е/g, "e");
car = car.replace(/є/g, "ĭe");
car = car.replace(/ж/g, "jh");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "ĭ");
car = car.replace(/і/g, "i");
car = car.replace(/ї́/g, "yi");
car = car.replace(/ї/g, "yi");
car = car.replace(/й/g, "ĭ");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "kh");
car = car.replace(/ц/g, "ts");
car = car.replace(/ч/g, "ch");
car = car.replace(/ш/g, "sh");
car = car.replace(/щ/g, "shch");
car = car.replace(/ю/g, "ĭu");
car = car.replace(/я/g, "ĭa");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Ґ/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Џ/g, "J");
car = car.replace(/Е/g, "E");
car = car.replace(/Є/g, "Ĭe");
car = car.replace(/Ж/g, "Jh");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "Y");
car = car.replace(/І/g, "I");
car = car.replace(/Ї́/g, "Yi");
car = car.replace(/Ї/g, "Yi");
car = car.replace(/Й/g, "Ĭ");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "Kh");
car = car.replace(/Ц/g, "Ts");
car = car.replace(/Ч/g, "Ch");
car = car.replace(/Ш/g, "Sh");
car = car.replace(/Щ/g, "Shch");
car = car.replace(/Ю/g, "Ĭu");
car = car.replace(/Я/g, "Ĭa");

car = car.replace(/Ь|Ъ|ь|ъ/g, "");

car = car.replace(/(B|V|G|D|J|H|Z|K|L|M|N|P|R|S|T|F)Ĭ(A|E|O|U|a|e|o|u)/g, "$1I$2");
car = car.replace(/(B|V|G|D|J|H|Z|K|L|M|N|P|R|S|T|F|b|v|g|d|j|h|z|k|l|m|n|p|r|s|t|f)ĭ(a|e|o|u)/g, "$1i$2");
car = car.replace(/(A|E|I|O|U)Ĭ(A|E|I|O|U|a|e|i|o|u)/g, "$1Y$2");
car = car.replace(/(A|E|I|O|U|a|e|i|o|u)ĭ(a|e|i|o|u)/g, "$1y$2");
car = car.replace(/(A|E|O|U)Ĭ/g, "$1I");
car = car.replace(/(A|E|O|U|a|e|o|u)ĭ/g, "$1i");
car = car.replace(/Ĭ/g, "Y");
car = car.replace(/ĭ/g, "y");

car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
