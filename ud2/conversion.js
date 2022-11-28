var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(Б|В|Г|Ж|Ӝ|Ӟ|К|М|П|Р|Ф|Х|Ц|Ч|Ӵ|Ш|Щ|б|в|г|ж|ӝ|ӟ|к|м|п|р|ф|х|ц|ч|ӵ|ш|щ)Е/g, "$1Э");
car = car.replace(/(Б|В|Г|Ж|Ӝ|Ӟ|К|М|П|Р|Ф|Х|Ц|Ч|Ӵ|Ш|Щ|б|в|г|ж|ӝ|ӟ|к|м|п|р|ф|х|ц|ч|ӵ|ш|щ)е/g, "$1э");
car = car.replace(/(Д|С|З|Л|Н|Т)Е/g, "$1ЬЭ");
car = car.replace(/(д|с|з|л|н|т)Е/g, "$1ьЭ");
car = car.replace(/(Д|С|З|Л|Н|Т|д|с|з|л|н|т)е/g, "$1ьэ");
car = car.replace(/(Д|С|З|Л|Н|Т)Ё/g, "$1ЬО");
car = car.replace(/(д|с|з|л|н|т)Ё/g, "$1ьО");
car = car.replace(/(Д|С|З|Л|Н|Т|д|с|з|л|н|т)ё/g, "$1ьо");
car = car.replace(/(Д|С|З|Л|Н|Т)Я/g, "$1ЬА");
car = car.replace(/(д|с|з|л|н|т)Я/g, "$1ьА");
car = car.replace(/(Д|С|З|Л|Н|Т|д|с|з|л|н|т)я/g, "$1ьа");
car = car.replace(/(Д|С|З|Л|Н|Т)Ю/g, "$1ЬУ");
car = car.replace(/(д|с|з|л|н|т)Ю/g, "$1ьУ");
car = car.replace(/(Д|С|З|Л|Н|Т|д|с|з|л|н|т)ю/g, "$1ьу");
car = car.replace(/(Д|С|З|Л|Н|Т)И/g, "$1ЬӤ");
car = car.replace(/(д|с|з|л|н|т)И/g, "$1ьӤ");
car = car.replace(/(Д|С|З|Л|Н|Т|д|с|з|л|н|т)и/g, "$1ьӥ");
  
car = car.replace(/ДЬ/g, "ГЬ");
car = car.replace(/Дь/g, "Гь");
car = car.replace(/дь/g, "гь");
  
car = car.replace(/СЬ/g, "Щ");
car = car.replace(/Сь/g, "Щ");
car = car.replace(/сь/g, "щ");
  
car = car.replace(/Ь(Д|С|З|Л|Н|Т)Ь/g, "$1Ь");
car = car.replace(/Ь(д|с|з|л|н|т)Ь/g, "$1ь");
car = car.replace(/ь(д|с|з|л|н|т)Ь/g, "$1ь");

car = car.replace(/ЖЖ/g, "ZZS");
car = car.replace(/ӜӜ/g, "DDZS");
car = car.replace(/ӞӞ/g, "DDZY");
car = car.replace(/СС/g, "SSZ");
car = car.replace(/ЧЧ/g, "CCY");
car = car.replace(/ӴӴ/g, "CCS");
car = car.replace(/ЩЩ/g, "SSY");
  
car = car.replace(/Жж/g, "Zzs");
car = car.replace(/Ӝӝ/g, "Ddzs");
car = car.replace(/Ӟӟ/g, "Ddzy");
car = car.replace(/Сс/g, "Ssz");
car = car.replace(/Чч/g, "Ccy");
car = car.replace(/Ӵӵ/g, "Ccs");
car = car.replace(/Щщ/g, "Ssy");

car = car.replace(/жж/g, "zzs");
car = car.replace(/ӝӝ/g, "ddzs");
car = car.replace(/ӟӟ/g, "ddzy");
car = car.replace(/сс/g, "ssz");
car = car.replace(/чч/g, "ccy");
car = car.replace(/ӵӵ/g, "ccs");
car = car.replace(/щщ/g, "ssy");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "je");
car = car.replace(/ё/g, "jo");
car = car.replace(/ж/g, "zs");
car = car.replace(/ӝ/g, "dzs");
car = car.replace(/з/g, "z");
car = car.replace(/ӟ/g, "dzy");
car = car.replace(/и/g, "i");
car = car.replace(/ӥ/g, "i");
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/ӧ/g, "ö");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "sz");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "cy");
car = car.replace(/ӵ/g, "cs");
car = car.replace(/ш/g, "s");
car = car.replace(/щ/g, "sy");
car = car.replace(/ъ/g, "");
car = car.replace(/ы/g, "ï");
car = car.replace(/ь/g, "y");
car = car.replace(/э/g, "e");
car = car.replace(/ю/g, "ju");
car = car.replace(/я/g, "ja");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "Je");
car = car.replace(/Ё/g, "Jo");
car = car.replace(/Ж/g, "Zs");
car = car.replace(/Ӝ/g, "Dzs");
car = car.replace(/З/g, "Z");
car = car.replace(/Ӟ/g, "Dzy");
car = car.replace(/И/g, "I");
car = car.replace(/Ӥ/g, "I");
car = car.replace(/Й/g, "J");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/Ӧ/g, "Ö");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "Sz");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Cy");
car = car.replace(/Ӵ/g, "Cs");
car = car.replace(/Ш/g, "S");
car = car.replace(/Щ/g, "Sy");
car = car.replace(/Ы/g, "Ï");
car = car.replace(/Ь/g, "Y");
car = car.replace(/Э/g, "E");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");
car = car.replace(/«/g, "\u201c");
car = car.replace(/»/g, "\u201d");

car = car.replace(/G(Y|y)(Ъ|ъ)/g, "D");
car = car.replace(/gy(Ъ|ъ)/g, "d");
car = car.replace(/(Y|y)(Ъ|ъ)/g, "");
car = car.replace(/Ъ/g, "");
car = car.replace(/ъ/g, "");
document.transcription.text2.value = car;
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
