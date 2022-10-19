var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(З|Л|Н)Е/g, "$1ЬЭ");
car = car.replace(/(з|л|н)Е/g, "$1ьЭ");
car = car.replace(/(З|Л|Н|з|л|н)е/g, "$1ьэ");

car = car.replace(/(З|Л|Н)Ё/g, "$1ЬО");
car = car.replace(/(з|л|н)Ё/g, "$1ьО");
car = car.replace(/(З|Л|Н|з|л|н)ё/g, "$1ьо");
  
car = car.replace(/(З|Л|Н)Я/g, "$1ЬА");
car = car.replace(/(з|л|н)Я/g, "$1ьА");
car = car.replace(/(З|Л|Н|з|л|н)я/g, "$1ьа"); 

car = car.replace(/(З|Л|Н)Ю/g, "$1ЬУ");
car = car.replace(/(з|л|н)Ю/g, "$1ьУ");
car = car.replace(/(З|Л|Н|з|л|н)ю/g, "$1ьу"); 

car = car.replace(/(З|Л|Н)И/g, "$1ЬИ");
car = car.replace(/(з|л|н)И/g, "$1ьИ");
car = car.replace(/(З|Л|Н|з|л|н)и/g, "$1ьи"); 
  
car = car.replace(/ДЕ/g, " ГЬЭ");
car = car.replace(/Де/g, " Гьэ");
car = car.replace(/де/g, " гьэ");

car = car.replace(/ДЁ/g, "ГЬО");
car = car.replace(/Дё/g, "Гьо");
car = car.replace(/дё/g, "гьо");
  
car = car.replace(/ДЯ/g, "ГЬА");
car = car.replace(/Дя/g, "Гьа");
car = car.replace(/дя/g, "гьа");

car = car.replace(/ДЮ/g, "ГЬУ");
car = car.replace(/Дю/g, "Гьу");
car = car.replace(/дю/g, "гьу");

car = car.replace(/ДИ/g, "ГЬИ");
car = car.replace(/Ди/g, "Гьи");
car = car.replace(/ди/g, "гьи");

car = car.replace(/Д(Ь|ь)/g, "Г$1");
car = car.replace(/дь/g, "гь");

car = car.replace(/СЕ/g, " ЩЭ");
car = car.replace(/Се/g, " Щэ");
car = car.replace(/се/g, " щэ");

car = car.replace(/СЁ/g, "ЩО");
car = car.replace(/Сё/g, "Що");
car = car.replace(/сё/g, "що");
  
car = car.replace(/СЯ/g, "ЩА");
car = car.replace(/Ся/g, "Ща");
car = car.replace(/ся/g, "ща");

car = car.replace(/СЮ/g, "ЩУ");
car = car.replace(/Сю/g, "Щу");
car = car.replace(/сю/g, "щу");

car = car.replace(/С(И|и)/g, "Щ$1");
car = car.replace(/си/g, "щи");

car = car.replace(/С(Ь|ь)/g, "Щ");
car = car.replace(/сь/g, "щ");  

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
car = car.replace(/ӧ/g, "õ");
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
car = car.replace(/ы/g, "ũ");
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
car = car.replace(/Ӧ/g, "Õ");
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
car = car.replace(/Ъ/g, "");
car = car.replace(/Ы/g, "Ũ");
car = car.replace(/Ь/g, "Y");
car = car.replace(/Э/g, "E");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");
car = car.replace(/«/g, "\u201c");
car = car.replace(/»/g, "\u201d");
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
