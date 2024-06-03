
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;

car = car.replace(/(А|И|Ы|Е|Э|У|О|Ө|Ё|Ү|Ю|Я|а|и|ы|е|э|у|о|ө|ё|ү|ю|я)ц/g, "$1тс");
car = car.replace(/(А|И|Ы|Е|Э|У|О|Ө|Ё|Ү|Ю|Я)Ц/g, "$1ТС");
car = car.replace(/(а|и|ы|е|э|у|о|ө|ё|ү|ю|я)Ц/g, "$1Тс");
car = car.replace(/Ц/g, "С");
car = car.replace(/ц/g, "с");

car = car.replace(/(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)Щ(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я)/g, "$1ШШ$2");
car = car.replace(/(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)Щ(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "$1Шш$2");
car = car.replace(/(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)щ(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ү|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|ң|о|ө|п|р|с|т|у|ү|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "$1шш$2");
car = car.replace(/Щ/g, "Ш");
car = car.replace(/щ/g, "ш");

car = car.replace(/ е/g, " ýe");
car = car.replace(/\nе/g, "\nýe");
car = car.replace(/\rе/g, "\rýe");
car = car.replace(/^е/g, "ýe");

car = car.replace(/ае/g, "аýe");
car = car.replace(/ие/g, "иýe");
car = car.replace(/ые/g, "ыýe");
car = car.replace(/ее/g, "еýe");
car = car.replace(/эе/g, "эýe");
car = car.replace(/уе/g, "уýe");
car = car.replace(/ое/g, "оýe");
car = car.replace(/өе/g, "өýe");
car = car.replace(/ёе/g, "ёýe");
car = car.replace(/үе/g, "үýe");
car = car.replace(/йе/g, "йýe");
car = car.replace(/юе/g, "юýe");
car = car.replace(/яе/g, "яýe");
car = car.replace(/ье/g, "ýe");
car = car.replace(/ъе/g, "ýe");

car = car.replace(/ Е/g, " Ýe");
car = car.replace(/\nЕ/g, "\nÝe");
car = car.replace(/\rЕ/g, "\rÝe");
car = car.replace(/^Е/g, "Ýe");

car = car.replace(/Ае/g, "Аýe");
car = car.replace(/Ие/g, "Иýe");
car = car.replace(/Ые/g, "Ыýe");
car = car.replace(/Ее/g, "Еýe");
car = car.replace(/Эе/g, "Эýe");
car = car.replace(/Уе/g, "Уýe");
car = car.replace(/Ое/g, "Оýe");
car = car.replace(/Өе/g, "Өýe");
car = car.replace(/Ёе/g, "Ёýe");
car = car.replace(/Үе/g, "Үýe");
car = car.replace(/Йе/g, "Йýe");
car = car.replace(/Юе/g, "Юýe");
car = car.replace(/Яе/g, "Яýe");

car = car.replace(/АЕ/g, "АÝE");
car = car.replace(/ИЕ/g, "ИÝE");
car = car.replace(/ЫЕ/g, "ЫÝE");
car = car.replace(/ЕЕ/g, "ЕÝE");
car = car.replace(/ЭЕ/g, "ЭÝE");
car = car.replace(/УЕ/g, "УÝE");
car = car.replace(/ОЕ/g, "ОÝE");
car = car.replace(/ӨЕ/g, "ӨÝE");
car = car.replace(/ЁЕ/g, "ЁÝE");
car = car.replace(/ҮЕ/g, "ҮÝE");
car = car.replace(/ЙЕ/g, "ЙÝE");
car = car.replace(/ЮЕ/g, "ЮÝE");
car = car.replace(/ЯЕ/g, "ЯÝE");
car = car.replace(/ЬЕ/g, "ÝE");
car = car.replace(/ЪЕ/g, "ÝE");

car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "w");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/ё/g, "ýo");
car = car.replace(/ж/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/й/g, "ý");
car = car.replace(/к/g, "k");
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
car = car.replace(/у/g, "u");
car = car.replace(/ү/g, "ü");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ч/g, "ç");
car = car.replace(/ш/g, "ş");
car = car.replace(/ъ/g, "");
car = car.replace(/ы/g, "y");
car = car.replace(/ь/g, "");
car = car.replace(/э/g, "e");
car = car.replace(/ю/g, "ýu");
car = car.replace(/я/g, "ýa");
car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "W");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Ё/g, "Ýo");
car = car.replace(/Ж/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/Й/g, "Ý");
car = car.replace(/К/g, "K");
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
car = car.replace(/У/g, "U");
car = car.replace(/Ү/g, "Ü");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ч/g, "Ç");
car = car.replace(/Ш/g, "Ş");
car = car.replace(/Ъ/g, "");
car = car.replace(/Ы/g, "Y");
car = car.replace(/Ь/g, "");
car = car.replace(/Э/g, "E");
car = car.replace(/Ю/g, "Ýu");
car = car.replace(/Я/g, "Ýa");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}