var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(Э|э)/g, "$1$2\u0300");
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)Е/g, "$1Э");
  car = car.replace(/(Б|В|Г|Д|Ж|З|К|Л|М|Н|П|Р|С|Т|Ф|Х|Ц|Ч|Ш|Щ|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)е/g, "$1э");

  car = car.replace(/Й(А|а)/g, "Й$1\u0300");
  car = car.replace(/йа/g, "йа\u0300");
  car = car.replace(/Й(Э|э)/g, "Й$1\u0300");
  car = car.replace(/йэ/g, "йе\u0300");
  car = car.replace(/Й(О|о)/g, "Й$1\u0300");
  car = car.replace(/йо/g, "йо\u0300");
  car = car.replace(/Й(У|у)/g, "Й$1\u0300");
  car = car.replace(/йу/g, "йу\u0300");
  
  car = car.replace(/(Ж|Ш|Щ|Ч|Ц)Я/g, "$1А");
  car = car.replace(/(Ж|Ш|Щ|Ч|Ц)Ё/g, "$1О");
  car = car.replace(/(Ж|Ш|Щ|Ч|Ц)Ю/g, "$1У");
  car = car.replace(/(Ж|Ш|Щ|Ч|Ц|ж|ш|щ|ч|ц)я/g, "$1а");
  car = car.replace(/(Ж|Ш|Щ|Ч|Ц|ж|ш|щ|ч|ц)ё/g, "$1о");
  car = car.replace(/(Ж|Ш|Щ|Ч|Ц|ж|ш|щ|ч|ц)ю/g, "$1у");

  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/я/g, "йа");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
  car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
  car = car.replace(/Е(\p{Uppercase})/ug, "ЙЭ$1");
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
  
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Ж/g, "Ž");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "I");
  car = car.replace(/Й/g, "J");
  car = car.replace(/К/g, "K");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/О/g, "O");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ц/g, "C");
  car = car.replace(/Ч/g, "Č");
  car = car.replace(/Ш/g, "Š");
  car = car.replace(/Щ/g, "Ś");
  car = car.replace(/Ы/g, "Y");
  car = car.replace(/Э/g, "E");
  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/д/g, "d");
  car = car.replace(/ж/g, "ž");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "j");
  car = car.replace(/к/g, "k");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/о/g, "o");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ц/g, "c");
  car = car.replace(/ч/g, "č");
  car = car.replace(/ш/g, "š");
  car = car.replace(/щ/g, "ś");
  car = car.replace(/(Ъ|ъ)/g, "\u0022");
  car = car.replace(/ы/g, "y");
  car = car.replace(/(Ь|ь)/g, "\u0027");
  car = car.replace(/э/g, "e");
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
