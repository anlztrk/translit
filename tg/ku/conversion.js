var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/(А|Е|Ё|И|Ӣ|О|У|Ӯ|Ы|Э|Ю|Я)Ц/g, "$1ТС");
car = car.replace(/(А|Е|Ё|И|Ӣ|О|У|Ӯ|Ы|Э|Ю|Я|а|е|ё|и|ӣ|о|у|ӯ|ы|э|ю|я)ц/g, "$1тс");
car = car.replace(/Ц/g, "С");
car = car.replace(/ц/g, "с");
car = car.replace(/Щ/g, "Ш");
car = car.replace(/щ/g, "ш");
car = car.replace(/Ы/g, "И");
car = car.replace(/ы/g, "и");

car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|Й|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ч|Ҷ|Ш)(Э|э)/g, "$1$2\u0300");
car = car.replace(/(б|в|г|ғ|д|ж|з|й|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ч|ҷ|ш)э/g, "$1э\u0300");
car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ч|Ҷ|Ш)Е/g, "$1Э");
car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ч|Ҷ|Ш|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ч|ҷ|ш)е/g, "$1э");
car = car.replace(/(Э|э)\u0300(Э|э)/g, "$1$2");
car = car.replace(/(Ь|ь)/g, "");

car = car.replace(/Й(А|а)/g, "Й$1\u0300");
car = car.replace(/йа/g, "йа\u0300");
car = car.replace(/ЙЕ/g, "Й\u0300Э");
car = car.replace(/Йе/g, "Й\u0300э");
car = car.replace(/йе/g, "й\u0300э");
car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ч|Ҷ|Ш)(Й|й)\u0300/g, "$1$2");
car = car.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ч|Ҷ|Ш|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ч|ҷ|ш)й\u0300/g, "$1й");
car = car.replace(/Й(О|о)/g, "Й$1\u0300");
car = car.replace(/йо/g, "йо\u0300");
car = car.replace(/Й(У|у)/g, "Й$1\u0300");
car = car.replace(/йу/g, "йу\u0300");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
car = car.replace(/Я/g, "Йа");
car = car.replace(/я/g, "йа");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
car = car.replace(/Е(\p{Uppercase})/g, "ЙЭ$1");
car = car.replace(/Е/g, "Йэ");
car = car.replace(/е/g, "йэ");
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

car = car.replace(/(А|Э|И|Ӣ|О|У|Ӯ|а|э|и|ӣ|о|у|ӯ)й(и|ӣ)/g, "$1йй$2");
car = car.replace(/(А|Э|И|Ӣ|О|У|Ӯ)Й(И|Ӣ)/g, "$1ЙЙ$2");
car = car.replace(/(А|Э|И|Ӣ|О|У|Ӯ|а|э|и|ӣ|о|у|ӯ)(и|ӣ)/g, "$1й$2");
car = car.replace(/(А|Э|И|Ӣ|О|У|Ӯ)(И|Ӣ)/g, "$1Й$2");

car = car.replace(/А/g, "E");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Ғ/g, "Ẍ");
car = car.replace(/Д/g, "D");
car = car.replace(/Ж/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/Ӣ/g, "Î");
car = car.replace(/Й/g, "Y");
car = car.replace(/К/g, "K");
car = car.replace(/Қ/g, "Q");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ӯ/g, "Û");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "X");
car = car.replace(/Ҳ/g, "H");
car = car.replace(/Ч/g, "Ç");
car = car.replace(/Ҷ/g, "C");
car = car.replace(/Ш/g, "Ş");
car = car.replace(/(Ъ|ъ)/g, "\u2019");
car = car.replace(/Э/g, "Ê");
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/ғ/g, "ẍ");
car = car.replace(/д/g, "d");
car = car.replace(/ж/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/ӣ/g, "î");
car = car.replace(/й/g, "y");
car = car.replace(/к/g, "k");
car = car.replace(/қ/g, "q");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ӯ/g, "û");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "x");
car = car.replace(/ҳ/g, "h");
car = car.replace(/ч/g, "ç");
car = car.replace(/ҷ/g, "c");
car = car.replace(/ш/g, "ş");
car = car.replace(/э/g, "ê");
car = car.normalize('NFC');
document.transcription.text2.value = car;
}

function latcyr () {/*
car = document.transcription.text2.value;

car = car.replace(/(A|E|I|Ī|O|U|Ū|Y)Y(I|Ī)/g, "$1$2");
car = car.replace(/(A|E|I|Ī|O|U|Ū|Y|a|e|i|ī|o|u|ū|y)y(i|ī)/g, "$1$2");

car = car.replace(/Y(A|a)/g, "Я");
car = car.replace(/ya/g, "я");
car = car.replace(/Y(E|e)/g, "Е");
car = car.replace(/ye/g, "е");
car = car.replace(/(B|J|Ç|D|F|G|H|Ž|K|L|M|N|P|Q|R|S|Š|T|V|Y|X|Ǧ|Y|Z)(Е|е)/g, "$1ЙЕ");
car = car.replace(/(B|J|Ç|D|F|G|H|Ž|K|L|M|N|P|Q|R|S|Š|T|V|Y|X|Ǧ|Y|Z|b|c|ç|d|f|g|h|ž|k|l|m|n|p|q|r|s|š|t|v|y|x|ǧ|y|z)е/g, "$1йе");
car = car.replace(/(B|J|Ç|D|F|G|H|Ž|K|L|M|N|P|Q|R|S|Š|T|V|Y|X|Ǧ|Y|Z)(E|e)/g, "$1Е");
car = car.replace(/(B|J|Ç|D|F|G|H|Ž|K|L|M|N|P|Q|R|S|Š|T|V|Y|X|Ǧ|Y|Z|b|c|ç|d|f|g|h|ž|k|l|m|n|p|q|r|s|š|t|v|y|x|ǧ|y|z)e/g, "$1е");
car = car.replace(/Y(O|o)/g, "Ё");
car = car.replace(/yo/g, "ё");
car = car.replace(/Y(U|u)/g, "Ю");
car = car.replace(/yu/g, "ю");

car = car.replace(/Ǧ/g, "Ғ");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/Ī/g, "Ӣ");
car = car.replace(/Ū/g, "Ӯ");
car = car.replace(/Š/g, "Ш");
car = car.replace(/ǧ/g, "ғ");
car = car.replace(/ž/g, "ж");
car = car.replace(/ī/g, "ӣ");
car = car.replace(/ū/g, "ӯ");
car = car.replace(/š/g, "ш");

car = car.normalize('NFD');
car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/D/g, "Д");
car = car.replace(/Z/g, "З");
car = car.replace(/I/g, "И");
car = car.replace(/Y/g, "Й");
car = car.replace(/K/g, "К");
car = car.replace(/Q/g, "Қ");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/C/g, "Ч");
car = car.replace(/J/g, "Ҷ");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/H/g, "Ҳ");
car = car.replace(/E/g, "Э");
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/d/g, "д");
car = car.replace(/z/g, "з");
car = car.replace(/i/g, "и");
car = car.replace(/y/g, "й");
car = car.replace(/k/g, "к");
car = car.replace(/q/g, "қ");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/c/g, "ч");
car = car.replace(/j/g, "ҷ");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/h/g, "ҳ");
car = car.replace(/e/g, "э");

car = car.replace(/\u2019/g, "ъ");
car = car.replace(/(\p{Uppercase})ъ/ug, "$1Ъ");
car = car.replace(/Ъ(\p{Lowercase})/ug, "ъ$1");

car = car.replace(/Й\u0300Э/g, "ЙЕ");
car = car.replace(/(Й|й)\u0300э/g, "$1е");
car = car.replace(/\u0300/g, "");
car = car.normalize('NFC');
document.transcription.text1.value=car;*/
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
