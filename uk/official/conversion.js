
var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)Х/g, "$1X");
car = car.replace(/(0|1|2|3|4|5|6|7|8|9)х/g, "$1x");
car = car.replace(/Х(0|1|2|3|4|5|6|7|8|9)/g, "X$1");
car = car.replace(/х(0|1|2|3|4|5|6|7|8|9)/g, "x$1");

car = car.replace(/(\p{Uppercase})(\u0027|\u2019|\u02bc)/ug, "$1Ъ");
car = car.replace(/(\u0027|\u2019|\u02bc)/g, "ъ");

car = car.replace(/ЗГ/g, "$1ҐГ");
car = car.replace(/(З|з)г/g, "$1ґг");

car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я|а|б|в|г|ґ|д|е|є|ж|з|и|і|ї|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ю|я)є/g, "$1іе");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я|а|б|в|г|ґ|д|е|є|ж|з|и|і|ї|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ю|я)ї/g, "$1і");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я|а|б|в|г|ґ|д|е|є|ж|з|и|і|ї|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ю|я)ю/g, "$1іу");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я|а|б|в|г|ґ|д|е|є|ж|з|и|і|ї|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ю|я)я/g, "$1іа");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я)Є/g, "$1ІЕ");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я)Ї/g, "$1І");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я)Ю/g, "$1ІУ");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я)Я/g, "$1ІА");
car = car.replace(/Є(\p{Uppercase})/ug, "ЙЕ$1");
car = car.replace(/Ї(\p{Uppercase})/ug, "ЙІ$1");
car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
car = car.replace(/Є/g, "$1Йе");
car = car.replace(/Ї/g, "$1Йі");
car = car.replace(/Ю/g, "$1Йу");
car = car.replace(/Я/g, "$1Йа");

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

car = car.replace(/(Б|В|Г|Ґ|Д|З|К|Л|М|Н|П|Р|С|Т|Ф)Ь(А|Е|І|И|О|У)/g, "$1І$2");
car = car.replace(/(Б|В|Г|Ґ|Д|З|К|Л|М|Н|П|Р|С|Т|Ф|б|в|г|ґ|д|џ|з|к|л|м|н|п|р|с|т|ф)ь(а|е|і|и|о|у)/g, "$1і$2");
car = car.replace(/Ь(А|Е|І|И|О|У|а|е|і|и|о|у)/g, "Й$1");
car = car.replace(/ь(а|е|і|и|о|у)/g, "й$1");
car = car.replace(/ЬЬ/g, "Й");
car = car.replace(/(Ь|ь)ь/g, "й");

car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я)Й/g, "$І");
car = car.replace(/(А|Б|В|Г|Ґ|Д|Е|Є|Ж|З|И|І|Ї|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ь|Ъ|Ю|Я|а|б|в|г|ґ|д|е|є|ж|з|и|і|ї|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ь|ъ|ю|я)й/g, "$1і");
  
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
car = car.replace(/й/g, "y");
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
car = car.replace(/Й/g, "Y");
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
