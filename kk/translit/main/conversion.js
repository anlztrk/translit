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
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
  car = car.replace(/(\p{Uppercase})Я/ug, "$1ЬА");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
  car = car.replace(/Я/g, "Ьа");
  car = car.replace(/я/g, "ьа");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЬО");
  car = car.replace(/(\p{Uppercase})Ё/ug, "$1ЬО");
  car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЬО $1$2");
  car = car.replace(/Ё(\p{Uppercase})/ug, "ЬО$1");
  car = car.replace(/Ё/g, "Ьо");
  car = car.replace(/ё/g, "ьо"); 
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ");
  car = car.replace(/(\p{Uppercase})Ю/ug, "$1ЬУ");
  car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2");
  car = car.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1");
  car = car.replace(/Ю/g, "Ьу");
  car = car.replace(/ю/g, "ьу");
  
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
  
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)ЬА/g, "$1Ә");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)(Ь|ь)а/g, "$1ә");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)ьа/g, "$1ә");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)ЬЫ/g, "$1І");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)(Ь|ь)ы/g, "$1і");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)ьы/g, "$1і");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)ЬО/g, "$1Ө");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)(Ь|ь)о/g, "$1ө");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)ьо/g, "$1ө");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)ЬУ/g, "$1Ү");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш)(Ь|ь)у/g, "$1ү");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)ьу/g, "$1ү");
  
  //У
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)У(А|О|Ұ|Ы)/g, "$1ҰЎ$2");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)УУ/g, "$1УЎУ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)У(Ә|Е|Ө|Ү|І)/g, "$1ҮЎ$2");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)УИ/g, "$1УЎИ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)у(а|о|ұ|ы)/g, "$1ұў$2");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)уу/g, "$1уўу");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)у(ә|е|ө|ү|і)/g, "$1үў$2");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)уи/g, "$1уўи");
  car = car.replace(/(А|О|У|Ұ|Ы|Ә|Е|И|Ө|У|Ү|І)У/g, "$1Ў");
  car = car.replace(/(А|О|У|Ұ|Ы|Ә|Е|И|Ө|У|Ү|І|а|о|у|ұ|ы|ә|е|и|ө|у|ү|і)у/g, "$1ў");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ)У/g, "$1Ұ\u0302");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|Ь|Ъ|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш|ь|ъ)у/g, "$1ұ\u0302");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Ш|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)/g, "Ұ\u0302$1");
  car = car.replace(/у(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|ш)/g, "ұ\u0302$1");  
  car = car.replace(/У/g, "Ў");
  car = car.replace(/у/g, "ў");
  
  car = car.replace(/Ь(А|Ә|Е|И|О|Ө|У|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)/g, "Й$1");
  car = car.replace(/ь(а|ә|е|и|о|ө|у|ұ|ү|ы|і|э)/g, "й$1");
  car = car.replace(/(Ь|ь)/g, "");
  
  car = car.replace(/И(А|О|Ұ|Ы)/g, "ЫЙ$1");
  car = car.replace(/И(а|о|ұ|ы)/g, "Ый$1");
  car = car.replace(/и(а|о|ұ|ы)/g, "ый$1");
  car = car.replace(/И(Ә|Е|Ө|Ү|І)/g, "ІЙ$1");
  car = car.replace(/И(ә|е|ө|ү|і)/g, "Ій$1");
  car = car.replace(/и(ә|е|ө|ү|і)/g, "ій$1");
  
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
  car = car.replace(/ў/g, "w");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/і/g, "i");
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
  car = car.replace(/Ў/g, "W");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/І/g, "İ");
  
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");

  car = car.normalize('NFC');
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
