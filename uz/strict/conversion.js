var car;

function cyrlat () {
 car = document.transcription.text1.value;
 car = car.replace(/Щ/g, "Ш");
 car = car.replace(/щ/g, "ш");
 car = car.replace(/Ы/g, "И");
 car = car.replace(/ы/g, "и");
 
 car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)Е/g, "$1Э");
 car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)е/g, "$1э");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
 car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
 car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
 car = car.replace(/Я/g, "Йа");
 car = car.replace(/я/g, "йа");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
 car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
 car = car.replace(/Е(\p{Uppercase})/g, "ЙЭ$1");
 car = car.replace(/Е/g, "Йэ");
 car = car.replace(/е/g, "йэ");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
 car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
 car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
 car = car.replace(/Ё/g, "Йо");
 car = car.replace(/ё/g, "йо");
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
 
 car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
 car = car.replace(/Ч(\p{Uppercase})/ug, "CH$1");
 car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SH $1$2");
 car = car.replace(/Ш(\p{Uppercase})/ug, "SH$1");
 
 car = car.replace(/а/g, "a");
 car = car.replace(/б/g, "b");
 car = car.replace(/в/g, "v");
 car = car.replace(/г/g, "g");
 car = car.replace(/ғ/g, "g\u02bb");
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
 car = car.replace(/ў/g, "o\u02bb");
 car = car.replace(/ф/g, "f");
 car = car.replace(/х/g, "x");
 car = car.replace(/х/g, "x");
 car = car.replace(/ҳ/g, "h");
 car = car.replace(/ч/g, "ch");
 car = car.replace(/ш/g, "sh");
 car = car.replace(/ъ/g, "\u02bc");
 car = car.replace(/ь/g, "");
 car = car.replace(/э/g, "e");
 car = car.replace(/А/g, "A");
 car = car.replace(/Б/g, "B");
 car = car.replace(/В/g, "V");
 car = car.replace(/Г/g, "G");
 car = car.replace(/Ғ/g, "G\u02bb");
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
 car = car.replace(/Ў/g, "O\u02bb");
 car = car.replace(/Ф/g, "F");
 car = car.replace(/Х/g, "X");
 car = car.replace(/Х/g, "X");
 car = car.replace(/Ҳ/g, "H");
 car = car.replace(/Ч/g, "Ch");
 car = car.replace(/Ш/g, "Sh");
 car = car.replace(/Ъ/g, "\u02bc");
 car = car.replace(/Ь/g, "");
 car = car.replace(/Э/g, "E");
document.transcription.text2.value = car;
}

function latcyr () {
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
