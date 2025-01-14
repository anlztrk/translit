
var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)Х/g, "$1X");
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)х/g, "$1x");
car = car.replace(/Х(0|1|2|3|4|5|6|7|8|9)/g, "X$1");
car = car.replace(/х(0|1|2|3|4|5|6|7|8|9)/g, "x$1");

car = car.replace(/(\u0027|\u2019|\u02bc)/g, "ъ");

car = car.replace(/Й(А|а)/g, "Й$1\u0300");
car = car.replace(/йа/g, "йа\u0300");
car = car.replace(/Й(Е|е)/g, "Й$1\u0300");
car = car.replace(/йе/g, "йе\u0300");
car = car.replace(/Й(І|і)/g, "Й$1\u0300");
car = car.replace(/йі/g, "йі\u0300");
car = car.replace(/Й(У|у)/g, "Й$1\u0300");
car = car.replace(/йу/g, "йу\u0300");
car = car.replace(/Й(О|о)/g, "Й$1\u0300");
car = car.replace(/йо/g, "йо\u0300");

car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)И/g, "$1Ɩ");
car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)и/g, "$1ɩ");
car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ɩ(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)/g, "$1И$2");
car = car.replace(/(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ɩ(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)/g, "$1и$2");
car = car.replace(/(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ɩ/g, "$1$2И");
car = car.replace(/(А|а|Б|б|В|в|Г|г|Ґ|ґ|Д|д|Е|е|Є|є|Ж|ж|З|з|И|и|І|і|Ї|ї|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ю|ю|Я|я)(Б|б|В|в|Г|г|Ґ|ґ|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ɩ/g, "$1$2и");

car = car.replace(/ɩ/g, "і");
car = car.replace(/Ɩ/g, "І");

car = car.replace(/(С|К|З)Г/g, "$1\u2019Г");
car = car.replace(/(С|К|З|с|к|з)г/g, "$1\u2019г");/*
car = car.replace(/Ш(Ч|ч)/g, "Ш\u2019$1");
car = car.replace(/шч/g, "ш\u2019ч");
car = car.replace(/Т(С|с)/g, "Т\u2019$1");
car = car.replace(/тс/g, "т\u2019с");*/

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
car = car.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
car = car.replace(/Я/g, "Ьа");
car = car.replace(/я/g, "ьа");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 ЬЕ");
car = car.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "ЬЕ $1$2");
car = car.replace(/Є(\p{Uppercase})/g, "ЬЕ$1");
car = car.replace(/Є/g, "Ье");
car = car.replace(/є/g, "ье");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 ЬІ");
car = car.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "ЬІ $1$2");
car = car.replace(/Ї(\p{Uppercase})/ug, "ЬІ$1");
car = car.replace(/Ї/g, "Ьі");
car = car.replace(/ї/g, "ьі");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ");
car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2");
car = car.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1");
car = car.replace(/Ю/g, "Ьу");
car = car.replace(/ю/g, "ьу");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 ШЧ");
car = car.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "ШЧ $1$2");
car = car.replace(/Щ(\p{Uppercase})/ug, "ШЧ$1");
car = car.replace(/Щ/g, "Шч");
car = car.replace(/щ/g, "шч");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 КГ");
car = car.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "КГ $1$2");
car = car.replace(/Х(\p{Uppercase})/ug, "КГ$1");
car = car.replace(/Х/g, "Кг");
car = car.replace(/х/g, "кг");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 СГ");
car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "СГ $1$2");
car = car.replace(/Ш(\p{Uppercase})/ug, "СГ$1");
car = car.replace(/Ш/g, "Сг");
car = car.replace(/ш/g, "сг");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ж/ug, "$1$2 ЗГ");
car = car.replace(/Ж (\p{Uppercase})(\p{Uppercase})/ug, "ЗГ $1$2");
car = car.replace(/Ж(\p{Uppercase})/ug, "ЗГ$1");
car = car.replace(/Ж/g, "Зг");
car = car.replace(/ж/g, "зг");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 \u0043Г");
car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "\u0043Г $1$2");
car = car.replace(/Ч(\p{Uppercase})/ug, "\u0043Г$1");
car = car.replace(/Ч/g, "\u0043г");
car = car.replace(/ч/g, "\u0063г");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 ТС");
car = car.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "ТС $1$2");
car = car.replace(/Ц(\p{Uppercase})/ug, "ТС$1");
car = car.replace(/Ц/g, "Тс");
car = car.replace(/ц/g, "тс");

car = car.replace(/дж/g, "џ");
car = car.replace(/Д(Ж|ж)/g, "Џ");

car = car.replace(/(Б|В|Г|Ґ|Д|Џ|З|К|Л|М|Н|П|Р|С|Т|Ф)Ь(А|Е|І|И|О|У)/g, "$1І$2");
car = car.replace(/(Б|В|Г|Ґ|Д|Џ|З|К|Л|М|Н|П|Р|С|Т|Ф|б|в|г|ґ|д|џ|з|к|л|м|н|п|р|с|т|ф)ь(а|е|і|и|о|у)/g, "$1і$2");
car = car.replace(/Ь(А|Е|І|И|О|У|а|е|і|и|о|у)/g, "Й$1");
car = car.replace(/ь(а|е|і|и|о|у)/g, "й$1");
car = car.replace(/ЬЬ/g, "Й");
car = car.replace(/(Ь|ь)ь/g, "й");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/џ/g, "j");
car = car.replace(/е/g, "e");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "y");
car = car.replace(/і/g, "i");
car = car.replace(/й/g, "ẏ");
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

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Ґ/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Џ/g, "J");
car = car.replace(/Е/g, "E");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "Y");
car = car.replace(/І/g, "I");
car = car.replace(/Й/g, "Ẏ");
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

car = car.replace(/(Ь|Ъ|ь|ъ)/g, "");

car = car.replace(/ẎY/g, "ẎI");
car = car.replace(/(Ẏ|ẏ)y/g, "$1i");
car = car.replace(/Y(Ẏ|ẏ)/g, "Y");
car = car.replace(/yẏ/g, "y");

car = car.replace(/(B|C|D|F|G|H|K|L|M|N|P|R|S|T|V|Z)ẎI/g, "$1I");
car = car.replace(/(B|C|D|F|G|H|K|L|M|N|P|R|S|T|V|Z|b|c|d|f|g|h|k|l|m|n|p|r|s|t|v|z)ẏi/g, "$1i");

car = car.replace(/(A|E|O|U|Y|Ẏ)Ẏ((?!A|E|I|O|U|Y|Ẏ))/g, "$1I$2");
car = car.replace(/(A|E|O|U|Y|Ẏ|a|e|o|u|y|ẏ)ẏ((?!a|e|i|o|u|y|ẏ))/g, "$1i$2");
car = car.replace(/IẎ((?!A|E|I|O|U|Y|Ẏ))/g, "I$1");
car = car.replace(/(I|i)ẏ((?!a|e|i|o|u|y|ẏ))/g, "$1$2");

car = car.replace(/Ẏ/g, "Y");
car = car.replace(/ẏ/g, "y");
  
car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
