var car;
var translit;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/ş/g, "ș");
  translit = translit.replace(/Ş/g, "Ș");
  car = car.replace(/ş/g, "ș");
  car = car.replace(/Ş/g, "Ș");

  car = car.replace(/\u200b\u2060/g, "ъ");
  car = car.replace(/\u200b/g, "ь");

  car = car.replace(/ya/g, "я");
  car = car.replace(/yo/g, "ё");
  car = car.replace(/y(û|w)/g, "ю");
  car = car.replace(/Ya/g, "Я");
  car = car.replace(/Yo/g, "Ё");
  car = car.replace(/Y(û|w)/g, "Ю");
  car = car.replace(/YA/g, "Я");
  car = car.replace(/YO/g, "Ё");
  car = car.replace(/Y(Û|W)/g, "Ю");
  car = car.replace(/(Y|y)\u2060\u2060(A|a|O|o|Û|û|W|w)/g, "$1$2");
  car = car.replace(/(Y|y)\u2060(A|a|O|o|Û|û|W|w)/g, "$2");
  
  car = car.replace(/tș/g, "ч");
  car = car.replace(/T(Ș|ș)/g, "Ч");
  car = car.replace(/(T|t)\u2060(Ș|ș)/g, "$1$2");
  car = car.replace(/ș\u2060\u2060\u2060/g, "ч");
  car = car.replace(/Ș\u2060\u2060\u2060/g, "Ч");
   
  car = car.replace(/șș/g, "щ");
  car = car.replace(/Ș(Ș|ș)/g, "Щ");
  car = car.replace(/(Ș|ș)\u2060\u2060(Ș|ș)/g, "$1$2");
  car = car.replace(/ș\u2060/g, "щ");
  car = car.replace(/Ș\u2060/g, "Щ"); 
  
  car = car.replace(/ts/g, "ц");
  car = car.replace(/T(S|s)/g, "Ц");
  car = car.replace(/(T|t)\u2060(S|s)/g, "$1$2");
  car = car.replace(/s\u2060/g, "ц");
  car = car.replace(/S\u2060/g, "Ц");
  car = car.replace(/t\u2060s/g, "ц");
  
  car = car.replace(/î\u2060y/g, "ий");
  car = car.replace(/Î\u2060y/g, "Ий");
  car = car.replace(/Î\u2060Y/g, "ИЙ");
  
  car = car.replace(/îy/g, "и");
  car = car.replace(/Îy/g, "И");
  car = car.replace(/ÎY/g, "И");
  
  car = car.replace(/ûw/g, "у");
  car = car.replace(/Û(W|w)/g, "У");
  
  car = car.replace(/h\u2060/g, "һ");
  car = car.replace(/H\u2060/g, "Һ");
  
  car = car.replace(/e\u2060/g, "э");
  car = car.replace(/E\u2060/g, "Э");
  
  car = car.replace(/a/g, "а");
  car = car.replace(/ä/g, "ә");
  car = car.replace(/b/g, "б");
  car = car.replace(/v/g, "в");
  car = car.replace(/g/g, "г");
  car = car.replace(/ğ/g, "ғ");
  car = car.replace(/d/g, "д");
  car = car.replace(/e/g, "е");
  car = car.replace(/j/g, "ж");
  car = car.replace(/z/g, "з");
  car = car.replace(/î/g, "и");
  car = car.replace(/y/g, "й");
  car = car.replace(/k/g, "к");
  car = car.replace(/q/g, "қ");
  car = car.replace(/l/g, "л");
  car = car.replace(/m/g, "м");
  car = car.replace(/n/g, "н");
  car = car.replace(/ņ/g, "ң");
  car = car.replace(/o/g, "о");
  car = car.replace(/ö/g, "ө");
  car = car.replace(/p/g, "п");
  car = car.replace(/r/g, "р");
  car = car.replace(/s/g, "с");
  car = car.replace(/t/g, "т");
  car = car.replace(/(û|w)/g, "у");
  car = car.replace(/u/g, "ұ");
  car = car.replace(/ü/g, "ү");
  car = car.replace(/f/g, "ф");
  car = car.replace(/h/g, "х");
  car = car.replace(/ș/g, "ш");
  car = car.replace(/ı/g, "ы");
  car = car.replace(/i/g, "і");
  car = car.replace(/A/g, "А");
  car = car.replace(/Ä/g, "Ә");
  car = car.replace(/B/g, "Б");
  car = car.replace(/V/g, "В");
  car = car.replace(/G/g, "Г");
  car = car.replace(/Ğ/g, "Ғ");
  car = car.replace(/D/g, "Д");
  car = car.replace(/E/g, "Е");
  car = car.replace(/J/g, "Ж");
  car = car.replace(/Z/g, "З");
  car = car.replace(/Î/g, "И");
  car = car.replace(/Y/g, "Й");
  car = car.replace(/K/g, "К");
  car = car.replace(/Q/g, "Қ");
  car = car.replace(/L/g, "Л");
  car = car.replace(/M/g, "М");
  car = car.replace(/N/g, "Н");
  car = car.replace(/Ņ/g, "Ң");
  car = car.replace(/O/g, "О");
  car = car.replace(/Ö/g, "Ө");
  car = car.replace(/P/g, "П");
  car = car.replace(/R/g, "Р");
  car = car.replace(/S/g, "С");
  car = car.replace(/T/g, "Т");
  car = car.replace(/(Û|W)/g, "У");
  car = car.replace(/U/g, "Ұ");
  car = car.replace(/Ü/g, "Ү");
  car = car.replace(/F/g, "Ф");
  car = car.replace(/H/g, "Х");
  car = car.replace(/Ș/g, "Ш");
  car = car.replace(/I/g, "Ы");
  car = car.replace(/İ/g, "І");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ы|І|Э|Я|Ю)ь/g, "$1Ь");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ы|І|Э|Я|Ю)ъ/g, "$1Ъ");
  car = car.replace(/\u201c/g, "«");
  car = car.replace(/\u201d/g, "»");
   document.transcription.text1.value=car;
   document.transcription.text2.value=translit;
}
function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

  translit = translit.replace(/ə/g, "ә");
  translit = translit.replace(/Ə/g, "Ә");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/Ə/g, "Ä");
  
  car = car.replace(/(Й|й)(А|а|О|о|У|у)/g, "$1\u2060\u2060$2");
  car = car.replace(/ИЙ/g, "И\u2060Й");
  car = car.replace(/ий/g, "и\u2060й");
  car = car.replace(/И(Й|й)/g, "И\u2060$1");

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
  
  car = car.replace(/уу/g, "ӯӯ");
  car = car.replace(/Уу/g, "Ӯӯ");
  car = car.replace(/УУ/g, "ӮӮ");
  
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|У|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|у|ф|х|һ|ц|ч|ш|щ|ъ|ь|ю)у/g, "$1ӯ");
  car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|У|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|ң|п|р|с|т|у|ф|х|һ|ц|ч|ш|щ|ъ|ь|ю)У/g, "$1Ӯ");
  car = car.replace(/у(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ|ъ|ь|ю)/g, "ӯ$1");
  car = car.replace(/У(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|Ң|П|Р|С|Т|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ь|Ю|б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|ң|п|р|с|т|ф|х|һ|ц|ч|ш|щ|ъ|ь|ю)/g, "Ӯ$1");
  car = car.replace(/(А|Я|Е|Э|Ә|Ы|І|О|Ё|Ө|Ұ|Ү|а|я|е|э|ә|ы|і|о|ё|ө|ұ|ү)ӯ/g, "$1у");
  car = car.replace(/(А|Я|Е|Э|Ә|Ы|І|О|Ё|Ө|Ұ|Ү|а|я|е|э|ә|ы|і|о|ё|ө|ұ|ү)Ӯ/g, "$1У");
  
  car = car.replace(/Ӯ(А|Е|Э|Ә|Ы|І|И|О|Ё|Ө|Ұ|Ү)/g, "ӮУ$1");
  car = car.replace(/Ӯ(а|е|э|ә|ы|і|и|о|ё|ө|ұ|ү)/g, "Ӯу$1");
  car = car.replace(/ӯ(а|е|э|ә|ы|і|и|о|ё|ө|ұ|ү)/g, "ӯу$1");
  
  car = car.replace(/И(А|О|Ӯ)/g, "ИЙ\u2060$1");
  car = car.replace(/И(а|о|ӯ)/g, "Ий\u2060$1");
  car = car.replace(/и(а|о|ӯ)/g, "ий\u2060$1");
  
  car = car.replace(/И(Е|Э|Ә|Ы|І|Ё|Ө|Ұ|Ү)/g, "ИЙ$1");
  car = car.replace(/И(е|э|ә|ы|і|ё|ө|ұ|ү)/g, "Ий$1");
  car = car.replace(/и(е|э|ә|ы|і|ё|ө|ұ|ү)/g, "ий$1");
  
  car = car.replace(/(Ш|ш)(Ш|ш)/g, "$1\u2060\u2060\$2");  
  
  //Щ
  car = car.replace(/(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)щ(а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)/g, "$1шш$2");
  car = car.replace(/(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)Щ(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э)/g, "$1ШШ$2");
  car = car.replace(/щ/g, "ш\u2060");
  car = car.replace(/Щ/g, "Ш\u2060");
  
  car = car.replace(/(Т|т)(С|с)/g, "$1\u2060$2");
  
  car = car.replace(/(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)Ц/g, "$1ТС");
  car = car.replace(/(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)ц/g, "$1тс");
  car = car.replace(/Ц/g, "С\u2060");
  car = car.replace(/ц/g, "с\u2060");
  
  car = car.replace(/(Т|т)(Ш|ш)/g, "$1\u2060$2");
  
  car = car.replace(/(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)Ч/g, "$1ТШ");
  car = car.replace(/(А|Ә|Е|И|О|Ө|Ӯ|Ұ|Ү|Ы|І|Э|а|ә|е|и|о|ө|ӯ|ұ|ү|ы|і|э)ч/g, "$1тш");
  car = car.replace(/Ч/g, "Ш\u2060\u2060\u2060");
  car = car.replace(/ч/g, "ш\u2060\u2060\u2060");
  
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
  car = car.replace(/ң/g, "ņ");
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
  car = car.replace(/һ/g, "h\u2060");
  car = car.replace(/ш/g, "ș");
  car = car.replace(/ъ/g, "\u200b\u2060");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/і/g, "i");
  car = car.replace(/ь/g, "\u200b");
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
  car = car.replace(/Ң/g, "Ņ");
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
  car = car.replace(/Һ/g, "H\u2060");
  car = car.replace(/Ш/g, "Ș");
  car = car.replace(/Ъ/g, "\u200b\u2060");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/І/g, "İ");
  car = car.replace(/Ь/g, "\u200b");
  car = car.replace(/Э/g, "E");
  
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
  
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)h/g, "$1x");
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)H/g, "$1X");
  car = car.replace(/h(1|2|3|4|5|6|7|8|9|0)/g, "x$1");
  car = car.replace(/H(1|2|3|4|5|6|7|8|9|0)/g, "X$1");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}