var car;


function cyrlat () {
car = document.transcription.text1.value;

car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)Е/g, "$1ЬЭ");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)е/g, "$1ьэ");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)Ё/g, "$1ЬО");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)ё/g, "$1ьо");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)И/g, "$1ЬӤ");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)и/g, "$1ьӥ");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)Ю/g, "$1ЬУ");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)ю/g, "$1ьу");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)Я/g, "$1ЬА");
car = car.replace(/(Д|Т|З|С|Л|Н|д|т|з|с|л|н)я/g, "$1ьа");

car = car.replace(/Е/g, "Йэ");  
car = car.replace(/Ё/g, "Йо");  
car = car.replace(/И/g, "Ӥ");  
car = car.replace(/Ю/g, "Йу");  
car = car.replace(/Я/g, "Йа");  
car = car.replace(/е/g, "йэ");  
car = car.replace(/ё/g, "йо");  
car = car.replace(/и/g, "ӥ");  
car = car.replace(/ю/g, "йу");  
car = car.replace(/я/g, "йа");
  
car = car.replace(/ддь/g, "ďď");
car = car.replace(/тть/g, "ťť");
car = car.replace(/ззь/g, "źź");
car = car.replace(/ссь/g, "śś");
car = car.replace(/лль/g, "ľľ");
car = car.replace(/ннь/g, "ńń");
car = car.replace(/Ддь/g, "Ďď");
car = car.replace(/Тть/g, "Ťť");
car = car.replace(/Ззь/g, "Źź");
car = car.replace(/Ссь/g, "Śś");
car = car.replace(/Лль/g, "Ľľ");
car = car.replace(/Ннь/g, "Ńń");
car = car.replace(/ДД(Ь|ь)/g, "ĎĎ");
car = car.replace(/ТТ(Ь|ь)/g, "ŤŤ");
car = car.replace(/ЗЗ(Ь|ь)/g, "ŹŹ");
car = car.replace(/СС(Ь|ь)/g, "ŚŚ");
car = car.replace(/ЛЛ(Ь|ь)/g, "ĽĽ");
car = car.replace(/НН(Ь|ь)/g, "ŃŃ");

car = car.replace(/дь/g, "ď");
car = car.replace(/ть/g, "ť");
car = car.replace(/зь/g, "ź");
car = car.replace(/сь/g, "ś");
car = car.replace(/ль/g, "ľ");
car = car.replace(/нь/g, "ń");
car = car.replace(/Д(Ь|ь)/g, "Ď");
car = car.replace(/Т(Ь|ь)/g, "Ť");
car = car.replace(/З(Ь|ь)/g, "Ź");
car = car.replace(/С(Ь|ь)/g, "Ś");
car = car.replace(/Л(Ь|ь)/g, "Ľ");
car = car.replace(/Н(Ь|ь)/g, "Ń");
car = car.replace(/дъ/g, "д");
car = car.replace(/тъ/g, "т");
car = car.replace(/зъ/g, "з");
car = car.replace(/съ/g, "с");
car = car.replace(/лъ/g, "л");
car = car.replace(/нъ/g, "н");
car = car.replace(/Д(Ъ|ъ)/g, "Д");
car = car.replace(/Т(Ъ|ъ)/g, "Т");
car = car.replace(/З(Ъ|ъ)/g, "З");
car = car.replace(/С(Ъ|ъ)/g, "С");
car = car.replace(/Л(Ъ|ъ)/g, "Л");
car = car.replace(/Н(Ъ|ъ)/g, "Н");

car = car.replace(/ӞӞ/g, "DDŹ");
car = car.replace(/ЧЧ/g, "TTŚ");
car = car.replace(/Ӟӟ/g, "Ddź");
car = car.replace(/Чч/g, "Ttś");
car = car.replace(/ӟӟ/g, "ddź");
car = car.replace(/чч/g, "ttś");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/ж/g, "ž");
car = car.replace(/ӝ/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/ӟ/g, "dź");
car = car.replace(/и/g, "i");
car = car.replace(/ӥ/g, "i");
car = car.replace(/й/g, "y");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/ӧ/g, "õ");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "tś");
car = car.replace(/ӵ/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "ś");
car = car.replace(/ъ/g, "ˮ");
car = car.replace(/ы/g, "ũ");
car = car.replace(/ь/g, "ʼ");
car = car.replace(/э/g, "e");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/Ӝ/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/Ӟ/g, "Dź");
car = car.replace(/И/g, "I");
car = car.replace(/Ӥ/g, "I");
car = car.replace(/Й/g, "Y");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/Ӧ/g, "Õ");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Tś");
car = car.replace(/Ӵ/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Ś");
car = car.replace(/Ъ/g, "ˮ");
car = car.replace(/Ы/g, "Ũ");
car = car.replace(/Ь/g, "ʼ");
car = car.replace(/Э/g, "E");
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
