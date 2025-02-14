
var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)Х/g, "$1X");
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)х/g, "$1x");
car = car.replace(/Х(0|1|2|3|4|5|6|7|8|9)/g, "X$1");
car = car.replace(/х(0|1|2|3|4|5|6|7|8|9)/g, "x$1");

car = car.replace(/Й(А|а)/g, "Й$1\u0300");
car = car.replace(/йа/g, "йа\u0300");
car = car.replace(/Й(Э|э)/g, "Й$1\u0300");
car = car.replace(/йэ/g, "йэ\u0300");
car = car.replace(/Й(У|у)/g, "Й$1\u0300");
car = car.replace(/йу/g, "йу\u0300");
car = car.replace(/Й(О|о)/g, "Й$1\u0300");
car = car.replace(/йо/g, "йо\u0300");

car = car.replace(/(Б|б|В|в|Г|г|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ы/g, "$1Ɩ");
car = car.replace(/(Б|б|В|в|Г|г|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ы/g, "$1ɩ");
car = car.replace(/(Б|б|В|в|Г|г|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ɩ(А|а|Б|б|В|в|Г|г|Д|д|Е|е|Ё|ё|Ж|ж|З|з|И|и|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ы|ы|Ь|ь|Э|э|Ю|ю|Я|я)/g, "$1Ы$2");
car = car.replace(/(Б|б|В|в|Г|г|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ɩ(А|а|Б|б|В|в|Г|г|Д|д|Е|е|Ё|ё|Ж|ж|З|з|И|и|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ы|ы|Ь|ь|Э|э|Ю|ю|Я|я)/g, "$1ы$2");
car = car.replace(/(А|а|Б|б|В|в|Г|г|Д|д|Е|е|Ё|ё|Ж|ж|З|з|И|и|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ы|ы|Ь|ь|Э|э|Ю|ю|Я|я)(Б|б|В|в|Г|г|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)Ɩ/g, "$1$2Ы");
car = car.replace(/(А|а|Б|б|В|в|Г|г|Д|д|Е|е|Ё|ё|Ж|ж|З|з|И|и|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ы|ы|Ь|ь|Э|э|Ю|ю|Я|я)(Б|б|В|в|Г|г|Д|д|Ж|ж|З|з|Й|й|К|к|Л|л|М|м|Н|н|П|п|Р|р|С|с|Т|т|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ)ɩ/g, "$1$2ы");

car = car.replace(/ɩ/g, "и");
car = car.replace(/Ɩ/g, "И");

/*car = car.replace(/Т(С|с)/g, "Т\u2019$1");
car = car.replace(/тс/g, "т\u2019с");*/

car = car.replace(/дж/g, "џ");
car = car.replace(/Д(Ж|ж)/g, "Џ");

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
car = car.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
car = car.replace(/Я/g, "Ьа");
car = car.replace(/я/g, "ьа");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЬЭ");
car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЬЭ $1$2");
car = car.replace(/Е(\p{Uppercase})/g, "ЬЭ$1");
car = car.replace(/Е/g, "Ьэ");
car = car.replace(/е/g, "ьэ");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЬО");
car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЬО $1$2");
car = car.replace(/Ё(\p{Uppercase})/g, "ЬО$1");
car = car.replace(/Ё/g, "Ьо");
car = car.replace(/ё/g, "ьо");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ");
car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2");
car = car.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1");
car = car.replace(/Ю/g, "Ьу");
car = car.replace(/ю/g, "ьу");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 ШХ");
car = car.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "ШХ $1$2");
car = car.replace(/Щ(\p{Uppercase})/ug, "ШХ$1");
car = car.replace(/Щ/g, "Шх");
car = car.replace(/щ/g, "шх");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 СХ");
car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "СХ $1$2");
car = car.replace(/Ш(\p{Uppercase})/ug, "СХ$1");
car = car.replace(/Ш/g, "Сх");
car = car.replace(/ш/g, "сх");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ж/ug, "$1$2 ЗХ");
car = car.replace(/Ж (\p{Uppercase})(\p{Uppercase})/ug, "ЗХ $1$2");
car = car.replace(/Ж(\p{Uppercase})/ug, "ЗХ$1");
car = car.replace(/Ж/g, "Зх");
car = car.replace(/ж/g, "зх");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 \u0043Х");
car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "\u0043Х $1$2");
car = car.replace(/Ч(\p{Uppercase})/ug, "\u0043Х$1");
car = car.replace(/Ч/g, "\u0043х");
car = car.replace(/ч/g, "\u0063х");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 ТС");
car = car.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "ТС $1$2");
car = car.replace(/Ц(\p{Uppercase})/ug, "ТС$1");
car = car.replace(/Ц/g, "Тс");
car = car.replace(/ц/g, "тс");

car = car.replace(/(Б|В|Г|Д|Џ|З|К|Л|М|Н|П|Р|С|Т|Ф|Х)Ь(А|И|Ы|О|У)/g, "$1И$2");
car = car.replace(/(Б|В|Г|Д|Џ|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|б|в|г|д|џ|з|к|л|м|н|п|р|с|т|ф|х)ь(а|и|ы|о|у)/g, "$1и$2");
car = car.replace(/(Б|В|Г|Д|Џ|З|К|Л|М|Н|П|Р|С|Т|Ф|Х)ЬЭ/g, "$1Э");
car = car.replace(/(Б|В|Г|Д|Џ|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|б|в|г|д|џ|з|к|л|м|н|п|р|с|т|ф|х)ьэ/g, "$1э");
car = car.replace(/Ь(А|Э|И|Ы|О|У|а|э|и|ы|о|у)/g, "Й$1");
car = car.replace(/ь(а|э|и|ы|о|у)/g, "й$1");
car = car.replace(/ЬЬ/g, "Й");
car = car.replace(/(Ь|ь)ь/g, "й");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/џ/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
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
car = car.replace(/х/g, "h");
car = car.replace(/ы/g, "y");
car = car.replace(/э/g, "e");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Џ/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
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
car = car.replace(/Х/g, "H");
car = car.replace(/Ы/g, "Y");
car = car.replace(/Э/g, "E");

car = car.replace(/(Ь|Ъ|ь|ъ)/g, "");

car = car.replace(/ẎY/g, "ẎI");
car = car.replace(/(Ẏ|ẏ)y/g, "$1i");
car = car.replace(/Y(Ẏ|ẏ)((?!A|E|I|O|U|Y|Ẏ))/g, "Y$2");
car = car.replace(/yẏ((?!a|e|i|o|u|y|ẏ))/g, "y$1");
car = car.replace(/YẎ(A|E|I|O|U|Y|Ẏ)/g, "IẎ$1");
car = car.replace(/Yẏ(a|e|i|o|u|y|ẏ)/g, "Iẏ$1");
car = car.replace(/yẏ(a|e|i|o|u|y|ẏ)/g, "iẏ$1");

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
