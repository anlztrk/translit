var car;

function cyrlat () {
 car = document.transcription.text1.value;
 car = car.replace(/Щ/g, "Ш");
 car = car.replace(/щ/g, "ш");
 car = car.replace(/Ы/g, "И");
 car = car.replace(/ы/g, "и");
 
 car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)Е/g, "$1Э");
 car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)е/g, "$1э");
 car = car.replace(/(\p{Uppercase})Я/ug, "$1ЙА");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
 car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
 car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
 car = car.replace(/Я/g, "Йа");
 car = car.replace(/я/g, "йа");
 car = car.replace(/(\p{Uppercase})Е/ug, "$1ЙЭ");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
 car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
 car = car.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1");
 car = car.replace(/Е/g, "Йэ");
 car = car.replace(/е/g, "йэ");
 car = car.replace(/(\p{Uppercase})Ё/ug, "$1ЙО");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
 car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
 car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
 car = car.replace(/Ё/g, "Йо");
 car = car.replace(/ё/g, "йо");
 car = car.replace(/(\p{Uppercase})Ю/ug, "$1ЙУ");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
 car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
 car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
 car = car.replace(/Ю/g, "Йу");
 car = car.replace(/ю/g, "йу");
 
 car = car.replace(/(А|Э|И|О|У|Ў)Ц(Ъ|Ь)?(А|Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|О|П|Р|С|Т|У|Ў|Ф|Х|Ҳ|Ц|Ч|Ш|Э)/g, "$1ТС$2$3");
 car = car.replace(/(А|Э|И|О|У|Ў|а|э|и|о|у|ў)ц(ъ|ь)?(а|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|о|п|р|с|т|у|ў|ф|х|ҳ|ц|ч|ш|э)/g, "$1тс$2$3");
 car = car.replace(/Ц/g, "С");
 car = car.replace(/ц/g, "с");
 
 car = car.replace(/СҲ/g, "СЪҲ");
 car = car.replace(/(С|с)ҳ/g, "$1ъҳ");
 
 car = car.replace(/Ў(Ъ|ъ)/g, "Ў");
 car = car.replace(/ўъ/g, "ў");

 car = car.replace(/(\p{Uppercase})Ч/ug, "$1CH");
 car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
 car = car.replace(/Ч(\p{Uppercase})/ug, "CH$1");
 car = car.replace(/(\p{Uppercase})Ш/ug, "$1SH");
 car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SH $1$2");
 car = car.replace(/Ш(\p{Uppercase})/ug, "SH$1");
 
 car = car.replace(/а/g, "a");
 car = car.replace(/б/g, "b");
 car = car.replace(/в/g, "v");
 car = car.replace(/г/g, "g");
 car = car.replace(/ғ/g, "g\u2018");
 car = car.replace(/д/g, "d"); 
 car = car.replace(/ж/g, "j");
 car = car.replace(/з/g, "z");
 car = car.replace(/и/g, "i");
 car = car.replace(/й/g, "y");
 car = car.replace(/к/g, "k");
 car = car.replace(/қ/g, "q");
 car = car.replace(/л/g, "l");
 car = car.replace(/м/g, "m");
 car = car.replace(/н/g, "n");
 car = car.replace(/о/g, "o");
 car = car.replace(/п/g, "p");
 car = car.replace(/р/g, "r");
 car = car.replace(/с/g, "s");
 car = car.replace(/т/g, "t");
 car = car.replace(/у/g, "u");
 car = car.replace(/ў/g, "o\u2018");
 car = car.replace(/ф/g, "f");
 car = car.replace(/х/g, "x");
 car = car.replace(/х/g, "x");
 car = car.replace(/ҳ/g, "h");
 car = car.replace(/ч/g, "ch");
 car = car.replace(/ш/g, "sh");
 car = car.replace(/ъ/g, "\u2019");
 car = car.replace(/ь/g, "");
 car = car.replace(/э/g, "e");
 car = car.replace(/А/g, "A");
 car = car.replace(/Б/g, "B");
 car = car.replace(/В/g, "V");
 car = car.replace(/Г/g, "G");
 car = car.replace(/Ғ/g, "G\u2018");
 car = car.replace(/Д/g, "D"); 
 car = car.replace(/Ж/g, "J");
 car = car.replace(/З/g, "Z");
 car = car.replace(/И/g, "I");
 car = car.replace(/Й/g, "Y");
 car = car.replace(/К/g, "K");
 car = car.replace(/Қ/g, "Q");
 car = car.replace(/Л/g, "L");
 car = car.replace(/М/g, "M");
 car = car.replace(/Н/g, "N");
 car = car.replace(/О/g, "O");
 car = car.replace(/П/g, "P");
 car = car.replace(/Р/g, "R");
 car = car.replace(/С/g, "S");
 car = car.replace(/Т/g, "T");
 car = car.replace(/У/g, "U");
 car = car.replace(/Ў/g, "O\u2018");
 car = car.replace(/Ф/g, "F");
 car = car.replace(/Х/g, "X");
 car = car.replace(/Х/g, "X");
 car = car.replace(/Ҳ/g, "H");
 car = car.replace(/Ч/g, "Ch");
 car = car.replace(/Ш/g, "Sh");
 car = car.replace(/Ъ/g, "\u2019");
 car = car.replace(/Ь/g, "");
 car = car.replace(/Э/g, "E");
document.transcription.text2.value = car;
}

function latcyr () {
car = document.transcription.text2.value;
 car = car.replace(/(\u0027|\u2018|\u2019|\u02bb|\u02bc|\u00b4|\u0060)/g, "ъ");
 car = car.replace(/a/g, "а");
 car = car.replace(/b/g, "б");
 car = car.replace(/c/g, "ц");
 car = car.replace(/d/g, "д");
 car = car.replace(/e/g, "э");
 car = car.replace(/f/g, "ф");
 car = car.replace(/g/g, "г");
 car = car.replace(/h/g, "ҳ");
 car = car.replace(/i/g, "и");
 car = car.replace(/j/g, "ж");
 car = car.replace(/k/g, "к");
 car = car.replace(/l/g, "л");
 car = car.replace(/m/g, "м");
 car = car.replace(/n/g, "н");
 car = car.replace(/o/g, "о");
 car = car.replace(/p/g, "п");
 car = car.replace(/q/g, "қ");
 car = car.replace(/r/g, "р");
 car = car.replace(/s/g, "с");
 car = car.replace(/t/g, "т");
 car = car.replace(/u/g, "у");
 car = car.replace(/v/g, "в");
 car = car.replace(/x/g, "х");
 car = car.replace(/y/g, "й");
 car = car.replace(/z/g, "з");
 car = car.replace(/A/g, "А");
 car = car.replace(/B/g, "Б");
 car = car.replace(/C/g, "Ц");
 car = car.replace(/D/g, "Д");
 car = car.replace(/E/g, "Э");
 car = car.replace(/F/g, "Ф");
 car = car.replace(/G/g, "Г");
 car = car.replace(/H/g, "Ҳ");
 car = car.replace(/I/g, "И");
 car = car.replace(/J/g, "Ж");
 car = car.replace(/K/g, "К");
 car = car.replace(/L/g, "Л");
 car = car.replace(/M/g, "М");
 car = car.replace(/N/g, "Н");
 car = car.replace(/O/g, "О");
 car = car.replace(/P/g, "П");
 car = car.replace(/Q/g, "Қ");
 car = car.replace(/R/g, "Р");
 car = car.replace(/S/g, "С");
 car = car.replace(/T/g, "Т");
 car = car.replace(/U/g, "У");
 car = car.replace(/V/g, "В");
 car = car.replace(/X/g, "Х");
 car = car.replace(/Y/g, "Й");
 car = car.replace(/Z/g, "З");
 
 car = car.replace(/цҳ/g, "ч");
 car = car.replace(/сҳ/g, "ш");
 car = car.replace(/Ц(Ҳ|ҳ)/g, "Ч");
 car = car.replace(/С(Ҳ|ҳ)/g, "Ш");
 car = car.replace(/С(Ҳ|ҳ)/g, "Ш");
 car = car.replace(/съҳ/g, "сҳ");
 car = car.replace(/Съ(Ҳ|ҳ)/g, "С$1");
 car = car.replace(/гъ/g, "ғ");
 car = car.replace(/Гъ/g, "Ғ");
 car = car.replace(/оъ/g, "ў");
 car = car.replace(/Оъ/g, "Ў");
 
 car = car.replace(/йа/g, "я");
 car = car.replace(/йо/g, "ё");
 car = car.replace(/йу/g, "ю");
 car = car.replace(/Й(А|а)/g, "Я");
 car = car.replace(/Й(О|о)/g, "Ё");
 car = car.replace(/Й(У|у)/g, "Ю");
 
 car = car.replace(/ййэ/g, "ййе");
 car = car.replace(/ЙЙЭ/g, "ЙЙЕ");
 
 car = car.replace(/(Б|Ц|Ч|Д|Ф|Г|Ғ|Х|Ҳ|Ж|К|Қ|Л|М|Н|П|Р|С|Ш|Т|В|З|б|ц|ч|д|ф|г|ғ|х|ҳ|ж|к|қ|л|м|н|п|р|с|ш|т|в|з)йэ/g, "$1ье");
 car = car.replace(/(Б|Ц|Ч|Д|Ф|Г|Ғ|Х|Ҳ|Ж|К|Қ|Л|М|Н|П|Р|С|Ш|Т|В|З)ЙЭ/g, "$1ЬЕ");
 car = car.replace(/(Б|Ц|Ч|Д|Ф|Г|Ғ|Х|Ҳ|Ж|К|Қ|Л|М|Н|П|Р|С|Ш|Т|В|З|б|ц|ч|д|ф|г|ғ|х|ҳ|ж|к|қ|л|м|н|п|р|с|ш|т|в|з)э/g, "$1е");
 car = car.replace(/(Б|Ц|Ч|Д|Ф|Г|Ғ|Х|Ҳ|Ж|К|Қ|Л|М|Н|П|Р|С|Ш|Т|В|З)Э/g, "$1Е");
 
 car = car.replace(/йэ/g, "е");
 car = car.replace(/Й(Э|э)/g, "Е");
 
 car = car.replace(/лўбат/g, "лўъбат");
 car = car.replace(/мўжаз/g, "мўъжаз");
 car = car.replace(/мўжиза/g, "мўъжиза");
 car = car.replace(/мўтабар/g, "мўътабар");
 car = car.replace(/мўтад/g, "мўътад");
 car = car.replace(/мўтазила/g, "мўътазила");
 car = car.replace(/мўтариза/g, "мўътариза");
 car = car.replace(/Лўбат/g, "Лўъбат");
 car = car.replace(/Мўжаз/g, "Мўъжаз");
 car = car.replace(/Мўжиза/g, "Мўъжиза");
 car = car.replace(/Мўтабар/g, "Мўътабар");
 car = car.replace(/Мўтад/g, "Мўътад");
 car = car.replace(/Мўтазила/g, "Мўътазила");
 car = car.replace(/Мўтариза/g, "Мўътариза");
 car = car.replace(/ЛЎБАТ/g, "ЛЎЪБАТ");
 car = car.replace(/МЎЖАЗ/g, "МЎЪЖАЗ");
 car = car.replace(/МЎЖИЗА/g, "МЎЪЖИЗА");
 car = car.replace(/МЎТАБАР/g, "МЎЪТАБАР");
 car = car.replace(/МЎТАД/g, "МЎЪТАД");
 car = car.replace(/МЎТАЗИЛА/g, "МЎЪТАЗИЛА");
 car = car.replace(/МЎТАРИЗА/g, "МЎЪТАРИЗА");
 
 car = car.replace(/(\p{Uppercase})ъ/ug, "$1Ъ");

 car = car.replace(/\u201e/g, "\u00ab");
 car = car.replace(/\u201c/g, "\u00bb");
document.transcription.text1.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
