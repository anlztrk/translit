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
  
  car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?И/g, "$1$2$3$4Ӥ");
	car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?и/g, "$1$2$3$4ӥ");
	car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?И/g, "$1$2$3$4Ӹ");
	car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?и/g, "$1$2$3$4ӹ");
	car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӥ$1$2$3$4");
	car = car.replace(/И(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3$4");
	car = car.replace(/и(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3$4");
	car = car.replace(/И(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӹ$1$2$3$4");
	car = car.replace(/И(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3$4");
	car = car.replace(/и(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3$4");
	car = car.replace(/Ӹ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӥ$1$2$3$4");
	car = car.replace(/Ӹ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "Ӥ$1$2$3$4");
	car = car.replace(/ӹ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӥ$1$2$3$4");
	car = car.replace(/Ӥ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӹ$1$2$3$4");
	car = car.replace(/Ӥ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӹ$1$2$3$4");
	car = car.replace(/ӥ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӹ$1$2$3$4");

	car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?У/g, "$1$2$3$4Ӱ");
	car = car.replace(/(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ|е|э|ә|і|ө|ү|ӱ|ӥ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?у/g, "$1$2$3$4ӱ");
	car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?У/g, "$1$2$3$4Ӯ");
	car = car.replace(/(А|Ы|Ӹ|О|Ұ|Ӯ|а|ы|ӹ|о|ұ|ӯ)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?у/g, "$1$2$3$4ӯ");
	car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӱ$1$2$3$4");
	car = car.replace(/У(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
	car = car.replace(/у(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
	car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӯ$1$2$3$4");
	car = car.replace(/У(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3$4");
	car = car.replace(/у(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3$4");
	car = car.replace(/Ӯ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Е|Э|Ә|І|Ө|Ү|Ӱ|Ӥ)/g, "Ӱ$1$2$3$4");
	car = car.replace(/Ӯ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
	car = car.replace(/ӯ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(е|э|ә|і|ө|ү|ӱ|ӥ)/g, "ӱ$1$2$3$4");
	car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)?(А|Ы|Ӹ|О|Ұ|Ӯ)/g, "Ӯ$1$2$3$4");
	car = car.replace(/Ӱ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "Ӯ$1$2$3$4");
	car = car.replace(/ӱ(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)?(а|ы|ӹ|о|ұ|ӯ)/g, "ӯ$1$2$3$4");
	car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү|а|е|э|ә|ы|і|о|ө|ұ|ү)(ӯ|ӱ|у)/g, "$1ў");
	car = car.replace(/(А|Е|Э|Ә|Ы|І|О|Ө|Ұ|Ү)(Ӯ|Ӱ|У)/g, "$1Ў");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(У|Ӯ)/g, "$1ЫЎ");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)Ӱ/g, "$1ІЎ");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)(у|ӯ)/g, "$1ыў");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш|ъ|ь)ӱ/g, "$1іў");
	car = car.replace(/(У|Ӯ|у|ӯ)(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш)/g, "ұў$2");
	car = car.replace(/(У|Ӯ)(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш)/g, "ҰЎ$2");
	car = car.replace(/(Ӱ|ӱ)(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ў|ф|х|һ|ц|ч|ш)/g, "үў$2");
	car = car.replace(/Ӱ(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ў|Ф|Х|Һ|Ц|Ч|Ш)/g, "ҮЎ$1");
	car = car.replace(/(ӱ|ӯ)/g, "ў");
	car = car.replace(/(Ӱ|Ӯ)/g, "Ў");

	car = car.replace(/(И|Ӥ)(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ІЙ$2");
	car = car.replace(/(И|Ӥ)(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "Ій$2");
	car = car.replace(/(и|ӥ)(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "ій$2");
	car = car.replace(/Ӹ(А|Ә|Б|В|Г|Ғ|Д|Е|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ы|І|Ь|Э)/g, "ЫЙ$1");
	car = car.replace(/Ӹ(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "Ый$1");
	car = car.replace(/ӹ(а|ә|б|в|г|ғ|д|е|ж|з|и|й|к|қ|л|м|н|ң|о|ө|п|р|с|т|у|ұ|ү|ф|х|һ|ц|ч|ш|ъ|ы|і|ь|э)/g, "ый$1");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)(Ӥ|И)/g, "$1ІЙ");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|ъ|ь)(ӥ|и)/g, "$1ій");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь)Ӹ/g, "$1ЫЙ");
	car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Ъ|Ь|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|ъ|ь)ӹ/g, "$1ый");
  
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
	car = car.replace(/и/g, "iy");
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
	car = car.replace(/у/g, "u");
	car = car.replace(/ў/g, "w");
	car = car.replace(/ұ/g, "u");
	car = car.replace(/ү/g, "ü");
	car = car.replace(/ф/g, "f");
	car = car.replace(/х/g, "x");
	car = car.replace(/һ/g, "h");
	car = car.replace(/ч/g, "c");
	car = car.replace(/ш/g, "c");
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
	car = car.replace(/И/g, "İy");
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
	car = car.replace(/У/g, "U");
	car = car.replace(/Ў/g, "W");
	car = car.replace(/Ұ/g, "U");
	car = car.replace(/Ү/g, "Ü");
	car = car.replace(/Ф/g, "F");
	car = car.replace(/Х/g, "X");
	car = car.replace(/Һ/g, "H");
	car = car.replace(/Ч/g, "C");
	car = car.replace(/Ш/g, "C");
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
