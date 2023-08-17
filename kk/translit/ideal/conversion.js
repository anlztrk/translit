var car;
function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

  translit = translit.replace(/ə/g, "ә");
  translit = translit.replace(/Ə/g, "Ә");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/Ə/g, "Ä");

  car = car.replace(/Х(0|1|2|3|4|5|6|7|8|9)/g, "X$1");
  car = car.replace(/х(0|1|2|3|4|5|6|7|8|9)/g, "x$1");
  car = car.replace(/(0|1|2|3|4|5|6|7|8|9)Х/g, "$1X");
  car = car.replace(/(0|1|2|3|4|5|6|7|8|9)х/g, "$1x");

  //Я, Ё, Ю 
  car = car.replace(/Я(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙА$1");
  car = car.replace(/Ё(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙО$1");
  car = car.replace(/Ю(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙУ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Я/g, "$1ЙА");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ё/g, "$1ЙО");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ю/g, "$1ЙУ");
  car = car.replace(/я/g, "йа");
  car = car.replace(/ё/g, "йо");
  car = car.replace(/ю/g, "йу");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/Ё/g, "Йо");
  car = car.replace(/Ю/g, "Йу");  
  
  //Ц
  car = car.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)Ц/g, "$1ТС");
  car = car.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)ц/g, "$1тс");
  car = car.replace(/Ц/g, "С");
  car = car.replace(/ц/g, "с");
  
  //Ч
  car = car.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)Ч/g, "$1ТШ");
  car = car.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)ч/g, "$1тш");
  car = car.replace(/Ч/g, "Ш");
  car = car.replace(/ч/g, "ш");
  
  //Щ
  car = car.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)щ(а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)/g, "$1шш$2");
  car = car.replace(/(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)Щ(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э)/g, "$1ШШ$2");
  car = car.replace(/щ/g, "ш");
  car = car.replace(/Щ/g, "Ш");
  
  car = car.replace(/Э/g, "Е");
  car = car.replace(/э/g, "е");
  
  car = car.replace(/Һ/g, "Х");
  car = car.replace(/һ/g, "х");
  
  car = car.replace(/(Ь|ь)/g, "");
  
  //И
  car = car.replace(/И(А|О|Ұ|Ы)/g, "ЫЙ$1");
  car = car.replace(/И(а|о|ұ|ы)/g, "Ый$1");
  car = car.replace(/и(а|о|ұ|ы)/g, "ый$1");
  car = car.replace(/И(Ә|Е|Ө|Ү|І)/g, "ІЙ$1");
  car = car.replace(/И(ә|е|ө|ү|і)/g, "Ій$1");
  car = car.replace(/и(ә|е|ө|ү|і)/g, "ій$1");             
  
  //У
  
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)У(А|О|Ұ|Ы|Ә|Е|Ө|Ү|І|И)/g, "$1ӰЎ$2");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)У(а|о|ұ|ы|ә|е|ө|ү|і|и)/g, "$1Ӱў$2");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)у(А|О|Ұ|Ы|Ә|Е|Ө|Ү|І|И|а|о|ұ|ы|ә|е|ө|ү|і|и)/g, "$1ӱў$2");
  car = car.replace(/(А|О|Ұ|Ы|Ә|Е|Ө|Ү|І|И|а|о|ұ|ы|ә|е|ө|ү|і|и)У/g, "$1Ў");
  car = car.replace(/(А|О|Ұ|Ы|Ә|Е|Ө|Ү|І|И|а|о|ұ|ы|ә|е|ө|ү|і|и)у/g, "$1ў");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)/g, "Ӯ$1");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)/g, "ӯ$1");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)У/g, "$1Ӯ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)у/g, "$1ӯ");
  car = car.replace(/У(А|О|Ұ|Ы|Ә|Е|Ө|Ү|І|И|а|о|ұ|ы|ә|е|ө|ү|і|и)/g, "Ў$1");
  car = car.replace(/у(А|О|Ұ|Ы|Ә|Е|Ө|Ү|І|И|а|о|ұ|ы|ә|е|ө|ү|і|и)/g, "ў$1");
  
  car = car.replace(/Ӯ/g, "У");
  car = car.replace(/ӯ/g, "у");  
  
  car = car.replace(/Ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(А|О|Ұ|Ы|а|о|ұ|ы)/g, "Ұ$1$2$3$4")
  car = car.replace(/ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(А|О|Ұ|Ы|а|о|ұ|ы)/g, "ұ$1$2$3$4")
  car = car.replace(/Ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)(А|О|Ұ|Ы|а|о|ұ|ы)/g, "Ұ$1$2$3")
  car = car.replace(/ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)(А|О|Ұ|Ы|а|о|ұ|ы)/g, "ұ$1$2$3")
  car = car.replace(/Ӱ(Ў|ў)(А|О|Ұ|Ы|а|о|ұ|ы)/g, "Ұ$1$2")
  car = car.replace(/ӱ(Ў|ў)(А|О|Ұ|Ы|а|о|ұ|ы)/g, "ұ$1$2")
  
  car = car.replace(/Ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)/g, "Ү$1$2$3$4")
  car = car.replace(/ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)/g, "ү$1$2$3$4")
  car = car.replace(/Ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)/g, "Ү$1$2$3")
  car = car.replace(/ӱ(Ў|ў)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)/g, "ү$1$2$3")
  car = car.replace(/Ӱ(Ў|ў)(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)/g, "Ү$1$2")
  car = car.replace(/ӱ(Ў|ў)(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)/g, "ү$1$2")
                    
  car = car.replace(/(А|О|Ұ|Ы|а|о|ұ|ы)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)Ӱ/g, "$1$2Ұ");
  car = car.replace(/(А|О|Ұ|Ы|а|о|ұ|ы)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)ӱ/g, "$1$2ұ");
  car = car.replace(/(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)Ӱ/g, "$1$2Ү");
  car = car.replace(/(Ә|Е|Ө|Ү|І|ә|е|ө|ү|і)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)ӱ/g, "$1$2ү");
  car = car.replace(/ӰЎ/g, "ҰЎ");
  car = car.replace(/Ӱў/g, "Ұў");
  car = car.replace(/ӱў/g, "ұў");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "ä");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ǧ");
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
  car = car.replace(/ң/g, "ň");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "û");
  car = car.replace(/ў/g, "w");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ш/g, "c");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/і/g, "i");
  car = car.replace(/э/g, "e");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ǧ");
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
  car = car.replace(/Ң/g, "Ň");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "Û");
  car = car.replace(/Ў/g, "W");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ш/g, "C");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/І/g, "İ");
  
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
