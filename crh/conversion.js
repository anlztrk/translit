var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ь|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ|ь)(Э|э)/g, "$1\u2060$2");
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ь|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ|ь)Е/g, "$1Э");
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ь|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ|ь)е/g, "$1э");
  
  car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я)Ц/g, "$1ТС");
  car = car.replace(/(а|е|ё|и|о|у|ы|ю|я)Ц/g, "$1Тс");
  car = car.replace(/(а|е|ё|и|о|у|ы|ю|я)ц/g, "$1тс");
  car = car.replace(/Ц/g, "С");
  car = car.replace(/ц/g, "с");
  
  car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я)Щ(А|Е|Ё|И|О|У|Ы|Ю|Я)/g, "$1ШЧ$2");
  car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я)щ(а|е|ё|и|о|у|ы|ю|я)/g, "$1Шч$2");
  car = car.replace(/(а|е|ё|и|о|у|ы|ю|я)щ(а|е|ё|и|о|у|ы|ю|я)/g, "$1шч$2");
  car = car.replace(/щ/g, "ш");
  car = car.replace(/Щ/g, "Ш");

  car = car.replace(/Й(А|а|Э|э|Ы|ы|О|о|У|у)/g, "Й$1\u2060");
  car = car.replace(/й(а|э|ы|о|у)/g, "й$1\u2060");
  
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)(Я|Ё|Ю)/g, "$1\u2060$2");
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)(я|ё|ю)/g, "$1\u2060$2");

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
  car = car.replace(/\u2060Й(А|а)/g, "Я");
  car = car.replace(/\u2060йа/g, "я");
  car = car.replace(/\u2060Й(О|о)/g, "Ё");
  car = car.replace(/\u2060йо/g, "ё");
  car = car.replace(/\u2060Й(У|у)/g, "Ю");
  car = car.replace(/\u2060йу/g, "ю");

  car = car.replace(/ЙО(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(И|Э|Ь|Ё|Ю)/g, "ЙЁ$1$2$3$4");
  car = car.replace(/(Й|й)о(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(и|э|ь|ё|ю)/g, "$1ё$2$3$4$5");
  car = car.replace(/ЙУ(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(И|Э|Ь|Ё|Ю)/g, "ЙЮ$1$2$3$4");
  car = car.replace(/(Й|й)у(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(и|э|ь|ё|ю)/g, "$1ю$2$3$4$5");
  /*
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)(О|У|о|у)/g, "$1$2\u2060");
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)(о|у)/g, "$1$2\u2060");
  */
  car = car.replace(/О(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(И|Э|Ь|Ё|Ю)/g, "Ё$1$2$3$4");
  car = car.replace(/О(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(и|э|ь|ё|ю)/g, "Ё$1$2$3$4"); 
  car = car.replace(/о(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(и|э|ь|ё|ю)/g, "ё$1$2$3$4");
  car = car.replace(/У(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)?(И|Э|Ь|Ё|Ю)/g, "Ю$1$2$3$4");
  car = car.replace(/У(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(и|э|ь|ё|ю)/g, "Ю$1$2$3$4");
  car = car.replace(/у(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)?(и|э|ь|ё|ю)/g, "ю$1$2$3$4");
  
  car = car.replace(/Д(Ж|ж)/g, "Җ");  
  car = car.replace(/дж/g, "җ");  
  car = car.replace(/К(Ъ|ъ)/g, "Қ");  
  car = car.replace(/къ/g, "қ");  
  car = car.replace(/Г(Ъ|ъ)/g, "Ғ");  
  car = car.replace(/гъ/g, "ғ");
  car = car.replace(/Н(Ъ|ъ)/g, "Ң");  
  car = car.replace(/нъ/g, "ң");  

  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ)Ь(А|Ы|Э|О|У)/g, "$1Й$2");  
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|Ъ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ|ъ)ь(а|ы|э|о|у)/g, "$1й$2");  
  
  car = car.replace(/А/g, "A");
  car = car.replace(/Я/g, "Â");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ğ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/Җ/g, "C");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "İ");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ё/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ю/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Э/g, "E");
  car = car.replace(/а/g, "a");
  car = car.replace(/я/g, "â");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ğ");
  car = car.replace(/д/g, "d");
  car = car.replace(/ж/g, "j");
  car = car.replace(/җ/g, "c");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ё/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ю/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/э/g, "e");
  car = car.replace(/(Ъ|ъ|Ь|ь|\u2060)/g, "");  
  car = car.normalize('NFC');
  car = car.replace(/\u00bb/g, "\u201d");
  car = car.replace(/\u00ab/g, "\u201c");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
