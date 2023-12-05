
var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/ЬЯ/g, "ИА");
car = car.replace(/Ья/g, "Иa");
car = car.replace(/ья/g, "иa");
car = car.replace(/ИЯ/g, "ИА");
car = car.replace(/(И|и)я/g, "$1a");
car = car.replace(/(А|Е|Ё|О|У|Ы|Э|Ю|Я)Я/g, "$1ИА");
car = car.replace(/(А|Е|Ё|О|У|Ы|Э|Ю|Я|а|е|ё|о|у|ы|э|ю|я)я/g, "$1иа");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЕА");
car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЕА $1$2");
car = car.replace(/Я(\p{Uppercase})/ug, "ЕА$1");
car = car.replace(/Я/g, "Еа");
car = car.replace(/я/g, "еа");
  
car = car.replace(/ЬЁ/g, "ИО");
car = car.replace(/Ьё/g, "Ио");
car = car.replace(/ьё/g, "ио");
car = car.replace(/ИЁ/g, "ИО");
car = car.replace(/(И|и)ё/g, "$1о");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ИО");
car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ИО $1$2");
car = car.replace(/Ё(\p{Uppercase})/ug, "ИО$1");
car = car.replace(/Ё/g, "Ио");
car = car.replace(/ё/g, "ио");

car = car.replace(/ЬЮ/g, "ИУ");
car = car.replace(/Ью/g, "Иу");
car = car.replace(/ью/g, "иу");
car = car.replace(/ИЮ/g, "ИУ");
car = car.replace(/(И|и)ю/g, "$1у");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ИУ");
car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ИУ $1$2");
car = car.replace(/Ю(\p{Uppercase})/ug, "ИУ$1");
car = car.replace(/Ю/g, "Иу");
car = car.replace(/ю/g, "иу");

car = car.replace(/(Ь|ь)(А|а|Б|б|В|в|Г|г|Д|д|Е|е|Ё|ё|Ж|ж|Ӂ|ӂ|З|з|И|и|Й|й|К|к|Л|л|М|м|Н|н|О|о|П|п|Р|р|С|с|Т|т|У|у|Ф|ф|Х|х|Ц|ц|Ч|ч|Ш|ш|Щ|щ|Ъ|ъ|Ы|ы|Ь|ь|Э|э|Ю|ю|Я|я)/g, "$2");

car = car.replace(/Й/g, "И");
car = car.replace(/й/g, "и");

car = car.replace(/Г(Е|И)/g, "ГХ$1");
car = car.replace(/(Г|г)(е|и)/g, "$1х$2");

car = car.replace(/К(Е|И)/g, "КХ$1");
car = car.replace(/(К|к)(е|и)/g, "$1х$2");

car = car.replace(/ӁА/g, "ГЕА");
car = car.replace(/Ӂа/g, "Геа");
car = car.replace(/ӂа/g, "геа");
car = car.replace(/Ӂ(Е|И|е|и)/g, "Г$1");
car = car.replace(/ӂ(е|и)/g, "г$1");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ӂ/ug, "$1$2 ГИ");
car = car.replace(/Ӂ (\p{Uppercase})(\p{Uppercase})/ug, "ГИ $1$2");
car = car.replace(/Ӂ(\p{Uppercase})/ug, "ГИ$1");
car = car.replace(/Ӂ/g, "Ги");
car = car.replace(/ӂ/g, "ги");

car = car.replace(/ЧА/g, "КЕА");
car = car.replace(/Ча/g, "Кеа");
car = car.replace(/ча/g, "кеа");
car = car.replace(/Ч(Е|И|е|и)/g, "К$1");
car = car.replace(/ч(е|и)/g, "к$1");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 КИ");
car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "КИ $1$2");
car = car.replace(/Ч(\p{Uppercase})/ug, "КИ$1");
car = car.replace(/Ч/g, "Ки");
car = car.replace(/ч/g, "ки");

car = car.replace(/(И|и)(Ь|ь)/g, "$1");
  
car = car.replace(/Ь/g, "И");
car = car.replace(/ь/g, "и");

car = car.replace(/А/g, "A");
car = car.replace(/а/g, "a");
car = car.replace(/Б/g, "B");
car = car.replace(/б/g, "b");
car = car.replace(/В/g, "V");
car = car.replace(/в/g, "v");
car = car.replace(/Г/g, "G");
car = car.replace(/г/g, "g");
car = car.replace(/Д/g, "D");
car = car.replace(/д/g, "d");
car = car.replace(/Е/g, "E");
car = car.replace(/е/g, "e");
car = car.replace(/Ж/g, "J");
car = car.replace(/ж/g, "j");
car = car.replace(/З/g, "Z");
car = car.replace(/з/g, "z");
car = car.replace(/И/g, "I");
car = car.replace(/и/g, "i");
car = car.replace(/К/g, "C");
car = car.replace(/к/g, "c");
car = car.replace(/Л/g, "L");
car = car.replace(/л/g, "l");
car = car.replace(/М/g, "M");
car = car.replace(/м/g, "m");
car = car.replace(/Н/g, "N");
car = car.replace(/н/g, "n");
car = car.replace(/О/g, "O");
car = car.replace(/о/g, "o");
car = car.replace(/П/g, "P");
car = car.replace(/п/g, "p");
car = car.replace(/Р/g, "R");
car = car.replace(/р/g, "r");
car = car.replace(/С/g, "S");
car = car.replace(/с/g, "s");
car = car.replace(/Т/g, "T");
car = car.replace(/т/g, "t");
car = car.replace(/У/g, "U");
car = car.replace(/у/g, "u");
car = car.replace(/Ф/g, "F");
car = car.replace(/ф/g, "f");
car = car.replace(/Х/g, "H");
car = car.replace(/х/g, "h");
car = car.replace(/Ц/g, "Ț");
car = car.replace(/ц/g, "ț");
car = car.replace(/Ш/g, "Ș");
car = car.replace(/ш/g, "ș");
car = car.replace(/Щ/g, "Ș");
car = car.replace(/щ/g, "ș");
car = car.replace(/Ъ/g, "");
car = car.replace(/ъ/g, "");
car = car.replace(/Ы/g, "Î");
car = car.replace(/ы/g, "î");
car = car.replace(/Э/g, "Ă");
car = car.replace(/э/g, "ă");

car = car.replace(/(A|Â|Ă|B|C|D|E|F|G|H|I|Î|J|K|L|M|N|O|P|R|S|Ș|T|Ț|U|V|X|Z)Î(A|Â|Ă|B|C|D|E|F|G|H|I|Î|J|K|L|M|N|O|P|R|S|Ș|T|Ț|U|V|X|Z)/g, "$1Â$2");
car = car.replace(/(A|Â|Ă|B|C|D|E|F|G|H|I|Î|J|K|L|M|N|O|P|R|S|Ș|T|Ț|U|V|X|Z|a|â|ă|b|c|d|e|f|g|h|i|î|j|k|l|m|n|o|p|r|s|ș|t|ț|u|v|x|z)î(a|â|ă|b|c|d|e|f|g|h|i|î|j|k|l|m|n|o|p|r|s|ș|t|ț|u|v|x|z)/g, "$1â$2");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
