var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ|ъ|ь)(Э|э)/g, "$1\u2060$2");
  car = car.replace(/(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ|ъ|ь)Е/g, "$1Э");
  car = car.replace(/(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ|ъ|ь)е/g, "$1э");
  
  car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я|Ә|Ө|Ү)Ц/g, "$1ТС");
  car = car.replace(/(а|е|ё|и|о|у|ы|ю|я|ә|ө|ү)Ц/g, "$1Тс");
  car = car.replace(/(а|е|ё|и|о|у|ы|ю|я|ә|ө|ү)ц/g, "$1тс");
  car = car.replace(/Ц/g, "С");
  car = car.replace(/ц/g, "с");
  
  car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я|Ә|Ө|Ү)Щ(А|Е|Ё|И|О|У|Ы|Ю|Я|Ә|Ө|Ү)/g, "$1ЧЧ$2");
  car = car.replace(/(А|Е|Ё|И|О|У|Ы|Ю|Я|Ә|Ө|Ү)щ(а|е|ё|и|о|у|ы|ю|я|ә|ө|ү)/g, "$1чч$2");
  car = car.replace(/(а|е|ё|и|о|у|ы|ю|я|ә|ө|ү)щ(а|е|ё|и|о|у|ы|ю|я|ә|ө|ү)/g, "$1чч$2");
  car = car.replace(/щ/g, "ч");
  car = car.replace(/Щ/g, "Ч");

  car = car.replace(/Й(А|а|Ә|ә|Э|э|Ы|ы|О|о|Ө|ө|У|у|Ү|ү)/g, "Й$1\u2060");
  car = car.replace(/й(а|ә|э|ы|о|ө|у|ү)/g, "й$1\u2060");

  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/я/g, "йа");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЫ");
  car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЫ $1$2");
  car = car.replace(/Е(\p{Uppercase})/g, "ЙЫ$1");
  car = car.replace(/Е/g, "Йы");
  car = car.replace(/е/g, "йы");
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

  car = car.replace(/(И|Э|Ә|Ө|Ү)(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?ЙА/g, "$1$2$3ЙӘ");
  car = car.replace(/(И|Э|Ә|Ө|Ү|и|э|ә|ө|ү)(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?йа/g, "$1$2$3йә");
  car = car.replace(/(И|Э|Ә|Ө)(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?ЙЫ/g, "$1$2$3ЙЭ");
  car = car.replace(/(И|Э|Ә|Ө|и|э|ә|ө)(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?йы/g, "$1$2$3йэ");
  car = car.replace(/(И|Э|Ә|Ө|Ү)(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?ЙО/g, "$1$2$3ЙӨ");
  car = car.replace(/(И|Э|Ә|Ө|Ү|и|э|ә|ө|ү)(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?йо/g, "$1$2$3йө");
  car = car.replace(/(И|Э|Ә|Ө|Ү)(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?ЙУ/g, "$1$2$3ЙҮ");
  car = car.replace(/(И|Э|Ә|Ө|Ү|и|э|ә|ө|ү)(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?йу/g, "$1$2$3йү");
  car = car.replace(/ҮЙЫ/g, "ҮВЭ");
  car = car.replace(/Үйы/g, "Үвэ");
  car = car.replace(/үйы/g, "үвэ");
  
  car = car.replace(/ЙА(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "ЙӘ$1$2$3$4");
  car = car.replace(/(Й|й)а(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1ә$2$3$4$5");
  car = car.replace(/ЙО(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "ЙӨ$1$2$3$4");
  car = car.replace(/(Й|й)о(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1ө$2$3$4$5");
  car = car.replace(/ЙУ(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "ЙҮ$1$2$3$4");
  car = car.replace(/(Й|й)у(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1ү$2$3$4$5");
   car = car.replace(/ЙЫЙ(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "ЙИ$1$2$3$4");
  car = car.replace(/(Й|й)ый(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1и$2$3$4$5"); 
  car = car.replace(/ЙЫ(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "ЙЭ$1$2$3$4");
  car = car.replace(/(Й|й)ы(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1э$2$3$4$5");
 
  car = car.replace(/(А|Ы|ЫЙ|О|У)Г/g, "$1Ғ");
  car = car.replace(/(А|Ы|ЫЙ|О|У|а|ы|ый|о|у)г/g, "$1ғ");
  car = car.replace(/Г(А|Ы|О|У|а|ы|о|у)/g, "Ғ$1");
  car = car.replace(/г(а|ы|о|у)/g, "ғ$1");
  car = car.replace(/(А|Ы|ЫЙ|О|У)К/g, "$1Қ");
  car = car.replace(/(А|Ы|ЫЙ|О|У|а|ы|ый|о|у)к/g, "$1қ");
  car = car.replace(/К(А|Ы|О|У|а|ы|о|у)/g, "Қ$1");
  car = car.replace(/к(а|ы|о|у)/g, "қ$1");
  car = car.replace(/Ғ(И|Э|Ә|Ө|Ү|и|э|ә|ө|ү)/g, "Г$1");
  car = car.replace(/ғ(и|э|ә|ө|ү)/g, "г$1");
  car = car.replace(/Қ(И|Э|Ә|Ө|Ү|и|э|ә|ө|ү)/g, "К$1");
  car = car.replace(/қ(и|э|ә|ө|ү)/g, "к$1");
  
  car = car.replace(/(Ғ|Қ)А(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "$1Ә$2$3$4$5");
  car = car.replace(/(Ғ|Қ|ғ|қ)а(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1ә$2$3$4$5");
  car = car.replace(/(Ғ|Қ)ЫЙ(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "$1И$2$3$4$5");
  car = car.replace(/(Ғ|Қ|ғ|қ)ый(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1и$2$3$4$5");  
  car = car.replace(/(Ғ|Қ)Ы(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "$1Э$2$3$4$5");
  car = car.replace(/(Ғ|Қ|ғ|қ)ы(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1э$2$3$4$5");
  car = car.replace(/(Ғ|Қ)О(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "$1Ө$2$3$4$5");
  car = car.replace(/(Ғ|Қ|ғ|қ)о(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1ө$2$3$4$5"); 
  car = car.replace(/(Ғ|Қ)У(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(Б|В|Г|Ғ|Д|Ж|Җ|З|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)?(И|Э|Ә|Ө|Ү|Ь)/g, "$1Ү$2$3$4$5");
  car = car.replace(/(Ғ|Қ|ғ|қ)у(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(б|в|г|ғ|д|ж|җ|з|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)?(и|э|ә|ө|ү|ь)/g, "$1ү$2$3$4$5");
  
  car = car.replace(/(А|Ы|О)У/g, "$1В");
  car = car.replace(/(А|Ы|О|а|ы|о)у/g, "$1в");
  car = car.replace(/(И|Э|Ә|Ө)Ү/g, "$1В");
  car = car.replace(/(И|Э|Ә|Ө|и|э|ә|ө)ү/g, "$1в");
  car = car.replace(/У(А|Ы|О)/g, "УВ$1");
  car = car.replace(/(У|у)(а|ы|о)/g, "$1в$2");
  car = car.replace(/Ү(И|Э|Ә|Ө)/g, "ҮВ$1");
  car = car.replace(/(Ү|ү)(и|э|ә|ө)/g, "$1в$2");  

  car = car.replace(/К(Ъ|ъ)/g, "Қ");  
  car = car.replace(/къ/g, "қ");  
  car = car.replace(/Г(Ъ|ъ)/g, "Ғ");  
  car = car.replace(/гъ/g, "ғ");  
  car = car.replace(/Қ(Ь|ь)/g, "К");  
  car = car.replace(/қь/g, "к");  
  car = car.replace(/Ғ(Ь|ь)/g, "Г");  
  car = car.replace(/ғь/g, "г");  

  car = car.replace(/(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ)Ь(А|Ы|Э|О|У)/g, "$1Й$2");  
  car = car.replace(/(Б|В|Г|Д|Ж|Җ|З|К|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ|б|в|г|д|ж|җ|з|к|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ)ь(а|ы|э|о|у)/g, "$1й$2");  
  
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Ə");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "W");
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
  car = car.replace(/Ң/g, "Ꞑ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ɵ");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Э/g, "E");
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "ə");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "w");
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
  car = car.replace(/ң/g, "ꞑ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ɵ");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
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
