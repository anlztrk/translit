﻿
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
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Я/g, "$1ЙА");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ё/g, "$1ЙО");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ю/g, "$1ЙУ");
  car = car.replace(/я/g, "йа");
  car = car.replace(/ё/g, "йо");
  car = car.replace(/ю/g, "йу");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/Ё/g, "Йо");
  car = car.replace(/Ю/g, "Йу");
  
  //Щ
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)щ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)/g, "$1шш$2");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)Щ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)/g, "$1ШШ$2");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)Щ(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)/g, "$1Шш$2");
  car = car.replace(/(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|щ|ъ|ы|і|ь|э)Щ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э)/g, "$1шШ$2");
  car = car.replace(/щ/g, "ш");
  car = car.replace(/Щ/g, "Ш");
  
  
  
  //
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3$4Ӱ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3$4Ў");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3Ӱ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2$3Ў");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2Ӱ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)У/g, "$1$2Ў");
  
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1$2$3$4");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1$2$3$4");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1$2$3");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1$2$3");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1$2");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1$2");
  
  car = car.replace(/У(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1");
  car = car.replace(/У(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1");
  
  car = car.replace(/Ў(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1$2$3$4");
  car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1$2$3$4");
  car = car.replace(/Ў(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1$2$3");
  car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1$2$3");
  car = car.replace(/Ў(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1$2");
  car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1$2");
  car = car.replace(/Ў(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӱ$1");
  car = car.replace(/Ӱ(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ў$1");
  
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3$4ӱ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3$4ў");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3ӱ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2$3ў");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2ӱ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)у/g, "$1$2ў");
  
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1$2$3$4");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1$2$3$4");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1$2$3");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1$2$3");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1$2");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1$2");
  
  car = car.replace(/у(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1");
  car = car.replace(/у(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1");
  
  car = car.replace(/ў(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1$2$3$4");
  car = car.replace(/ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1$2$3$4");
  car = car.replace(/ў(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1$2$3");
  car = car.replace(/ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1$2$3");
  car = car.replace(/ў(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1$2");
  car = car.replace(/ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1$2");
  car = car.replace(/ў(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӱ$1");
  car = car.replace(/ӱ(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ў$1");
  
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3$4Ӥ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3$4Ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3Ӥ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2$3Ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2Ӥ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)И/g, "$1$2Ӹ");
  
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1$2$3$4");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1$2$3$4");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1$2$3");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1$2$3");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1$2");
  car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1$2");
  
  car = car.replace(/И(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1");
  car = car.replace(/И(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1");
  
  car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1$2$3$4");
  car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1$2$3$4");
  car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1$2$3");
  car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1$2$3");
  car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1$2");
  car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1$2");
  car = car.replace(/Ӹ(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "Ӥ$1");
  car = car.replace(/Ӥ(А|Ы|О|Ұ|а|ы|о|ұ)/g, "Ӹ$1");
  
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3$4ӥ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3$4ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3ӥ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2$3ӹ");
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2ӥ");
  car = car.replace(/(А|Ы|О|Ұ|а|ы|о|ұ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)и/g, "$1$2ӹ");
  
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1$2$3$4");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1$2$3$4");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1$2$3");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1$2$3");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1$2");
  car = car.replace(/и(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1$2");
  
  car = car.replace(/и(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1");
  car = car.replace(/и(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1");
  
  car = car.replace(/ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1$2$3$4");
  car = car.replace(/ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1$2$3$4");
  car = car.replace(/ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1$2$3");
  car = car.replace(/ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1$2$3");
  car = car.replace(/ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1$2");
  car = car.replace(/ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ԝ|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ԝ|ф|х|һ|ц|ч|ш|ъ|ь)(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1$2");
  car = car.replace(/ӹ(Е|Э|Ә|І|Ө|Ү|е|э|ә|і|ө|ү)/g, "ӥ$1");
  car = car.replace(/ӥ(А|Ы|О|Ұ|а|ы|о|ұ)/g, "ӹ$1");
  
  
  //У+VOWEL DIPHTHONGS
  car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)(ў|ӱ|у)/g, "$1ԝ");
  car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)(Ў|Ӱ|У)/g, "$1Ԝ");
  
  
  car = car.replace(/Ў(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ҰԜ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)Ў/g, "$1ҰԜ");
  car = car.replace(/ў/g, "ұԝ");
  car = car.replace(/Ў/g, "Ұԝ");
  
  car = car.replace(/У(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ҰԜ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)У/g, "$1ҰԜ");
  car = car.replace(/у/g, "ұԝ");
  car = car.replace(/У/g, "Ұԝ");
  
  car = car.replace(/Ӱ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ҮԜ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)Ӱ/g, "$1ҮԜ");
  car = car.replace(/ӱ/g, "үԝ");
  car = car.replace(/Ӱ/g, "Үԝ");
  
  
  car = car.replace(/(И|Ӥ)(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ІЙ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)(Ӥ|И)/g, "$1ІЙ");
  car = car.replace(/(и|ӥ)/g, "ій");
  car = car.replace(/(И|Ӥ)/g, "Ій");
  
  car = car.replace(/Ӹ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ЫЙ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)Ӹ/g, "$1ЫЙ");
  car = car.replace(/ӹ/g, "ый");
  car = car.replace(/Ӹ/g, "Ый");
  
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
  car = car.replace(/ԝ/g, "w");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ч/g, "ç");
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
  car = car.replace(/Ԝ/g, "W");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ч/g, "Ç");
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