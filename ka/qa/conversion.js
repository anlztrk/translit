var car;
function cyrlat () {
car = document.transcription.text1.value;

  
  car = car.replace(/ə/g, "ә");
  car = car.replace(/Ə/g, "Ә");

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
  
  //Ч, Ш, Щ
  car = car.replace(/Ч(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЦҺ$1");
  car = car.replace(/(Ш|Щ)(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "СҺ$2");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ч/g, "$1ЦҺ");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)(Ш|Щ)/g, "$1СҺ");
  car = car.replace(/ч/g, "цһ"); 
  car = car.replace(/(ш|щ)/g, "сһ");
  car = car.replace(/Ч/g, "Цһ");
  car = car.replace(/(Ш|Щ)/g, "Сһ");
  
  //И
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3$4Ӥ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3$4Ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3Ӥ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3Ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2Ӥ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2Ӹ");
  
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3$4");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3$4");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2");
  
  car = car.replace(/И(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1");
  car = car.replace(/И(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1");
  
  car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3$4");
  car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3$4");
  car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3");
  car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3");
  car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2");
  car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2");
  car = car.replace(/Ӹ(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1");
  car = car.replace(/Ӥ(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1");
  
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3$4ӥ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3$4ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3ӥ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2ӥ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2ӹ");
  
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3$4");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3$4");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2");
  
  car = car.replace(/и(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1");
  car = car.replace(/и(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1");
  
  car = car.replace(/ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3$4");
  car = car.replace(/ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3$4");
  car = car.replace(/ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3");
  car = car.replace(/ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3");
  car = car.replace(/ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2");
  car = car.replace(/ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2");
  car = car.replace(/ӹ(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1");
  car = car.replace(/ӥ(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1");
  
  //У
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3$4Ӱ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3$4Ӯ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3Ӱ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3Ӯ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2Ӱ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2Ӯ");
  
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1$2$3$4");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3$4");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1$2$3");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1$2");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2");
  
  car = car.replace(/У(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1");
  car = car.replace(/У(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1");
  
  car = car.replace(/Ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1$2$3$4");
  car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3$4");
  car = car.replace(/Ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1$2$3");
  car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3");
  car = car.replace(/Ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1$2");
  car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2");
  car = car.replace(/Ӯ(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӱ$1");
  car = car.replace(/Ӱ(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1");
  
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3$4ӱ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3$4ӯ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3ӱ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3ӯ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2ӱ");
  car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2ӯ");
  
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3$4");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2");
  
  car = car.replace(/у(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1");
  car = car.replace(/у(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1");
  
  car = car.replace(/ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
  car = car.replace(/ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3$4");
  car = car.replace(/ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3");
  car = car.replace(/ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3");
  car = car.replace(/ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2");
  car = car.replace(/ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2");
  car = car.replace(/ӯ(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1");
  car = car.replace(/ӱ(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1");
  
  
  //У+VOWEL DIPHTHONGS
  car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)(ӯ|ӱ|у)/g, "$1ў");
  car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)(Ӯ|Ӱ|У)/g, "$1Ў");
  
  
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(У|Ӯ)/g, "$1ҰЎ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)Ӱ/g, "$1ҮЎ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(у|ӯ)/g, "$1ұў");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)ӱ/g, "$1үў");
  
  car = car.replace(/(ӱ|ӯ)/g, "ў");
  car = car.replace(/(Ӱ|Ӯ)/g, "Ў");
  
  car = car.replace(/(И|Ӥ)(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ІЙ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)(Ӥ|И)/g, "$1ІЙ");
  car = car.replace(/(и|ӥ)/g, "ій");
  car = car.replace(/(И|Ӥ)/g, "Ій");
  
  car = car.replace(/Ӹ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ЫЙ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)Ӹ/g, "$1ЫЙ");
  car = car.replace(/ӹ/g, "ый");
  car = car.replace(/Ӹ/g, "Ый");

  car = car.replace(/(Ь|Ъ|ь|ъ)(е|и|о)/g, "$1й$2");
  car = car.replace(/(Ь|Ъ)(Е|И|О)/g, "$1Й$2");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "á");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ǵ");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "iy");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ń");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ó");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "uw");
  car = car.replace(/ў/g, "w");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ú");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ц/g, "с");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/щ/g, "sh");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/і/g, "i");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "e");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Á");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ǵ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "Iy");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ó");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "Uw");
  car = car.replace(/Ў/g, "W");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ú");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ц/g, "С");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/Щ/g, "Sh");  
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "Í");
  car = car.replace(/І/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "E");
  
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
