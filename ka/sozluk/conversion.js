
//  copyright lexilogos.com
var car;
function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

  translit = translit.replace(/ə/g, "ә");
  translit = translit.replace(/Ə/g, "Ә");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/Ə/g, "Ä");

  //Я, Ё, Ю 
  car = car.replace(/Я(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙА$1");
  car = car.replace(/Ё(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙО$1");
  car = car.replace(/Ю(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙУ$1");
  car = car.replace(/Ч(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ТШ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Я/g, "$1ЙА");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ё/g, "$1ЙО");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ю/g, "$1ЙУ");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ч/g, "$1ТШ");
  car = car.replace(/я/g, "йа");
  car = car.replace(/ё/g, "йо");
  car = car.replace(/ю/g, "йу");
  car = car.replace(/ч/g, "тш");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/Ё/g, "Йо");
  car = car.replace(/Ю/g, "Йу");
  car = car.replace(/Ч/g, "Тш");
  
  //Щ
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)щ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)/g, "$1шш$2");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)Щ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)/g, "$1ШШ$2");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)Щ(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)/g, "$1Шш$2");
  car = car.replace(/(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)Щ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)/g, "$1шШ$2");
  car = car.replace(/щ/g, "ш");
  car = car.replace(/Щ/g, "Ш");
  
  
  car = car.replace(/уу/g, "ӯӯ");
  car = car.replace(/Уу/g, "Ӯӯ");
  car = car.replace(/УУ/g, "ӮӮ");
  
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|У|Ф|Х|Һ|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|у|ф|х|һ|ч|ш|щ|ъ|ь|ю)у/g, "$1ӯ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|У|Ф|Х|Һ|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|у|ф|х|һ|ч|ш|щ|ъ|ь|ю)У/g, "$1Ӯ");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ч|ш|щ|ъ|ь|ю)/g, "ӯ$1");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ч|ш|щ|ъ|ь|ю)/g, "Ӯ$1");
  car = car.replace(/(А|Я|Е|Э|Ә|Ы|І|О|Ё|Ө|Ұ|Ү|а|я|е|э|ә|ы|і|о|ё|ө|ұ|ү)ӯ/g, "$1у");
  car = car.replace(/(А|Я|Е|Э|Ә|Ы|І|О|Ё|Ө|Ұ|Ү|а|я|е|э|ә|ы|і|о|ё|ө|ұ|ү)Ӯ/g, "$1У");
  
  car = car.replace(/Ӯ(А|Ы|О|Ұ)/g, "ҰУ$1");
  car = car.replace(/Ӯ(а|ы|о|ұ)/g, "Ұу$1");
  car = car.replace(/ӯ(а|ы|о|ұ)/g, "ұу$1");
  car = car.replace(/Ӯ(Е|Э|Ә|І|Ө|Ү)/g, "ҮУ$1");
  car = car.replace(/Ӯ(е|э|ә|і|ө|ү)/g, "Үу$1");
  car = car.replace(/ӯ(е|э|ә|і|ө|ү)/g, "үу$1");
 
  car = car.replace(/И(А|Ы|О|Ұ)/g, "ЫЙ$1");
  car = car.replace(/И(а|ы|о|ұ)/g, "Ый$1");
  car = car.replace(/и(а|ы|о|ұ)/g, "ый$1");
  car = car.replace(/И(Е|Э|Ә|І|Ө|Ү)/g, "ІЙ$1");
  car = car.replace(/И(е|э|ә|і|ө|ү)/g, "Ій$1");
  car = car.replace(/и(е|э|ә|і|ө|ү)/g, "ій$1");
  
  car = car.replace(/Ӯ(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү)/g, "ӮУ$1");
  car = car.replace(/(Ӯ|ӯ)(а|е|э|ә|ы|і|о|ө|ұ|ү)/g, "$1у$2");
  
  car = car.replace(/И(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү)/g, "ИЙ$1");
  car = car.replace(/(И|и)(а|е|э|ә|ы|і|о|ө|ұ|ү)/g, "$1й$2");
  
  car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)Ц/g, "$1ТС");
  car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)ц/g, "$1тс");
  car = car.replace(/Ц/g, "С");
  car = car.replace(/ц/g, "с");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "ä");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ğ");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "î");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/ӯ/g, "û");
  car = car.replace(/у/g, "w");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/і/g, "i");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "e");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ğ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "Î");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/Ӯ/g, "Û");
  car = car.replace(/У/g, "W");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/І/g, "İ");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "E");
  
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}