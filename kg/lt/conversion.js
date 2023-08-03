var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;

car = car.replace(/ е/g, " ye");
car = car.replace(/\nе/g, "\nye");
car = car.replace(/\rе/g, "\rye");
car = car.replace(/^е/g, "ye");

car = car.replace(/ае/g, "аye");
car = car.replace(/ие/g, "иye");
car = car.replace(/ые/g, "ыye");
car = car.replace(/ее/g, "еye");
car = car.replace(/эе/g, "эye");
car = car.replace(/уе/g, "уye");
car = car.replace(/ое/g, "оye");
car = car.replace(/өе/g, "өye");
car = car.replace(/ёе/g, "ёye");
car = car.replace(/үе/g, "үye");
car = car.replace(/йе/g, "йye");
car = car.replace(/юе/g, "юye");
car = car.replace(/яе/g, "яye");
car = car.replace(/ье/g, "ye");
car = car.replace(/ъе/g, "ye");

car = car.replace(/ Е/g, " Ye");
car = car.replace(/\nЕ/g, "\nYe");
car = car.replace(/\rЕ/g, "\rYe");
car = car.replace(/^Е/g, "Ye");

car = car.replace(/Ае/g, "Аye");
car = car.replace(/Ие/g, "Иye");
car = car.replace(/Ые/g, "Ыye");
car = car.replace(/Ее/g, "Еye");
car = car.replace(/Эе/g, "Эye");
car = car.replace(/Уе/g, "Уye");
car = car.replace(/Ое/g, "Оye");
car = car.replace(/Өе/g, "Өye");
car = car.replace(/Ёе/g, "Ёye");
car = car.replace(/Үе/g, "Үye");
car = car.replace(/Йе/g, "Йye");
car = car.replace(/Юе/g, "Юye");
car = car.replace(/Яе/g, "Яye");

car = car.replace(/АЕ/g, "АYE");
car = car.replace(/ИЕ/g, "ИYE");
car = car.replace(/ЫЕ/g, "ЫYE");
car = car.replace(/ЕЕ/g, "ЕYE");
car = car.replace(/ЭЕ/g, "ЭYE");
car = car.replace(/УЕ/g, "УYE");
car = car.replace(/ОЕ/g, "ОYE");
car = car.replace(/ӨЕ/g, "ӨYE");
car = car.replace(/ЁЕ/g, "ЁYE");
car = car.replace(/ҮЕ/g, "ҮYE");
car = car.replace(/ЙЕ/g, "ЙYE");
car = car.replace(/ЮЕ/g, "ЮYE");
car = car.replace(/ЯЕ/g, "ЯYE");
car = car.replace(/ЬЕ/g, "YE");
car = car.replace(/ЪЕ/g, "YE");

car = car.replace(/(А|Ы|О|У|Э|И|Ө|Ү|Я|Ё|Ю)Ц/g, "$1ТС");
car = car.replace(/(а|ы|о|у|э|и|ө|ү|я|ё|ю)Ц/g, "$1Тс");
car = car.replace(/(А|Ы|О|У|Э|И|Ө|Ү|Я|Ё|Ю|а|ы|о|у|э|и|ө|ү|я|ё|ю)ц/g, "$1тс");
car = car.replace(/Ц/g, "С");
car = car.replace(/ц/g, "с");

  car = car.replace(/(А|Б|В|Г|Д|Е|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|а|б|в|г|д|е|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э)щ(А|Е|И|О|Ө|У|Ү|Ы|Э|а|е|о|ө|у|ү|ы|э)/g, "$1шш$2");
  car = car.replace(/(А|Б|В|Г|Д|Е|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э)Щ(А|Е|И|О|Ө|У|Ү|Ы|Э)/g, "$1ШШ$2");
  car = car.replace(/(А|Б|В|Г|Д|Е|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э)Щ(а|е|и|о|ө|у|ү|ы|э)/g, "$1Шш$2");
  car = car.replace(/(а|б|в|г|д|е|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э)Щ(А|Е|И|О|Ө|У|Ү|Ы|Э)/g, "$1шШ$2");
  car = car.replace(/щ/g, "ш");
  car = car.replace(/Щ/g, "Ш");

car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
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
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "e");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "İ");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
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
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "E");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
