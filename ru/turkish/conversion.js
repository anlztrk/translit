var car;
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
translit = translit.replace(/<</g, "«");
translit = translit.replace(/>>/g, "»");
translit = translit.replace(/<</g, "«");
translit = translit.replace(/>>/g, "»");

translit = translit.replace(/(Ж|Ц|Ш)И/g, "$1Ы");
translit = translit.replace(/(Ж|Ц|Ш|ж|ц|ш)и/g, "$1ы");
translit = translit.replace(/(Й|Ч|Щ)Ы/g, "$1И");
translit = translit.replace(/(Й|Ч|Щ|й|ч|щ)ы/g, "$1и");

translit = translit.replace(/Ы(А|Б|В|Г|Д|Е|Ё|Ж|З|И|Й|К|Л|М|Н|О|П|Р|С|Т|У|Ф|Х|Ц|Ч|Ш|Щ|Ъ|Ы|Ь|Э|Ю|Я|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "Ӹ$1");
translit = translit.replace(/ы(а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|ъ|ы|ь|э|ю|я)/g, "ӹ$1");
translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ы/ug, "$1$2 ЫЙ");
translit = translit.replace(/(\p{Uppercase})Ы/ug, "$1ЫЙ");
translit = translit.replace(/Ы (\p{Uppercase})(\p{Uppercase})/ug, "ЫЙ $1$2");
translit = translit.replace(/Ы(\p{Uppercase})/ug, "ЫЙ$1");
translit = translit.replace(/Ы/g, "Ый");
translit = translit.replace(/ы/g, "ый");
translit = translit.replace(/Ӹ/g, "Ы");
translit = translit.replace(/ӹ/g, "ы");

translit = translit.replace(/Ъ/g, "ъ");
translit = translit.replace(/Ь/g, "ь");



translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Е/g, "$1E");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)е/g, "$1e");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Э/g, "$1ъE");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)э/g, "$1ъe");

translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Я/g, "$1ьA");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я/g, "$1ьa");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ё/g, "$1ьO");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ё/g, "$1ьo");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Ю/g, "$1ьU");
translit = translit.replace(/(Б|В|Г|Д|Ж|З|Й|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|й|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ю/g, "$1ьu");

translit = translit.replace(/ьA(Бь|Вь|Гь|Дь|Зь|Й|Кь|Ль|Мь|Нь|Пь|Рь|Сь|Ть|Фь|Хь|Ч|Щ|бь|вь|гь|дь|зь|й|кь|ль|мь|нь|пь|рь|сь|ть|фь|хь|ч|щ)/g, "ьE$1");
translit = translit.replace(/ьa(бь|вь|гь|дь|зь|й|кь|ль|мь|нь|пь|рь|сь|ть|фь|хь|ч|щ)/g, "ьe$1");
translit = translit.replace(/ьO(Бь|Вь|Гь|Дь|Зь|Й|Кь|Ль|Мь|Нь|Пь|Рь|Сь|Ть|Фь|Хь|Ч|Щ|бь|вь|гь|дь|зь|й|кь|ль|мь|нь|пь|рь|сь|ть|фь|хь|ч|щ)/g, "ьÖ$1");
translit = translit.replace(/ьo(бь|вь|гь|дь|зь|й|кь|ль|мь|нь|пь|рь|сь|ть|фь|хь|ч|щ)/g, "ьö$1");
translit = translit.replace(/ьU(Бь|Вь|Гь|Дь|Зь|Й|Кь|Ль|Мь|Нь|Пь|Рь|Сь|Ть|Фь|Хь|Ч|Щ|бь|вь|гь|дь|зь|й|кь|ль|мь|нь|пь|рь|сь|ть|фь|хь|ч|щ)/g, "ьÜ$1");
translit = translit.replace(/ьu(бь|вь|гь|дь|зь|й|кь|ль|мь|нь|пь|рь|сь|ть|фь|хь|ч|щ)/g, "ьü$1");
  
translit = translit.replace(/ьa/g, "à");
translit = translit.replace(/ьA/g, "À");
translit = translit.replace(/ьu/g, "ù");
translit = translit.replace(/ьU/g, "Ù");

translit = translit.replace(/Д(Ж|ж)/g, "C");
translit = translit.replace(/дж/g, "c");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "ye");
translit = translit.replace(/ж/g, "j");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/й/g, "y");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "l");
translit = translit.replace(/м/g, "m");
translit = translit.replace(/н/g, "n");
translit = translit.replace(/о/g, "o");
translit = translit.replace(/п/g, "p");
translit = translit.replace(/р/g, "r");
translit = translit.replace(/с/g, "s");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ч/g, "ç");
translit = translit.replace(/ш/g, "ş");
translit = translit.replace(/ъ/g, "");
translit = translit.replace(/ы/g, "ı");
translit = translit.replace(/ь/g, "");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "yu");
translit = translit.replace(/ё/g, "yo");
translit = translit.replace(/я/g, "ya");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Ye");
translit = translit.replace(/Ж/g, "J");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "İ");
translit = translit.replace(/Й/g, "Y");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "L");
translit = translit.replace(/М/g, "M");
translit = translit.replace(/Н/g, "N");
translit = translit.replace(/О/g, "O");
translit = translit.replace(/П/g, "P");
translit = translit.replace(/Р/g, "R");
translit = translit.replace(/С/g, "S");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ч/g, "Ç");
translit = translit.replace(/Ш/g, "Ş");
translit = translit.replace(/Ы/g, "I");
translit = translit.replace(/Ь/g, "");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Yu");
translit = translit.replace(/Ё/g, "Yo");
translit = translit.replace(/Я/g, "Ya");

translit = translit.replace(/(A|À|E|I|İ|O|Ö|U|Ù|Ü|a|à|e|ı|i|o|ö|u|ù|ü)щ(A|À|E|I|İ|O|Ö|U|Ù|Ü|a|à|e|ı|i|o|ö|u|ù|ü)/g, "$1şş$2");
translit = translit.replace(/(A|À|E|I|İ|O|Ö|U|Ù|Ü)Щ(A|À|E|I|İ|O|Ö|U|Ù|Ü)/g, "$1ŞŞ$2");
translit = translit.replace(/(A|À|E|I|İ|O|Ö|U|Ù|Ü)Щ(a|à|e|ı|i|o|ö|u|ù|ü)/g, "$1Şş$2");
translit = translit.replace(/(a|à|e|ı|i|o|ö|u|ù|ü)Щ(A|À|E|I|İ|O|Ö|U|Ù|Ü)/g, "$1ŞŞ$2");
translit = translit.replace(/щ/g, "ş");
translit = translit.replace(/Щ/g, "Ş");
  
translit = translit.replace(/(A|À|E|I|İ|O|Ö|U|Ù|Ü|a|à|e|ı|i|o|ö|u|ù|ü)ц/g, "$1ts");
translit = translit.replace(/(A|À|E|I|İ|O|Ö|U|Ù|Ü)Ц/g, "$1TS");
translit = translit.replace(/ц/g, "s");
translit = translit.replace(/Ц/g, "S");

translit = translit.replace(/(G|g|K|k|L|l)à/g, "$1â");
translit = translit.replace(/(G|g|K|k|L|l)À/g, "$1Â");
translit = translit.replace(/(G|g|K|k|L|l)ù/g, "$1û");
translit = translit.replace(/(G|g|K|k|L|l)ù/g, "$1Û");
translit = translit.replace(/à/g, "a");
translit = translit.replace(/À/g, "A");
translit = translit.replace(/ù/g, "u");
translit = translit.replace(/Ù/g, "U");

document.transcription.text1.value = car;
document.transcription.text2.value = translit;
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
