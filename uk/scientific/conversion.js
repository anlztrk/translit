var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Й(А|а)/g, "Й$1\u0300");
  car = car.replace(/йа/g, "йа\u0300");
  car = car.replace(/Й(Е|е)/g, "Й$1\u0300");
  car = car.replace(/йе/g, "йе\u0300");
  car = car.replace(/Й(І|і)/g, "Й$1\u0300");
  car = car.replace(/йі/g, "йі\u0300");
  car = car.replace(/Й(У|у)/g, "Й$1\u0300");
  car = car.replace(/йу/g, "йу\u0300");

  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/я/g, "йа");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 ЙЕ");
  car = car.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "ЙЕ $1$2");
  car = car.replace(/Є(\p{Uppercase})/g, "ЙЕ$1");
  car = car.replace(/Є/g, "Йе");
  car = car.replace(/є/g, "йе");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 ЙІ");
  car = car.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "ЙІ $1$2");
  car = car.replace(/Ї(\p{Uppercase})/ug, "ЙІ$1");
  car = car.replace(/Ї/g, "ЙІ");
  car = car.replace(/ї/g, "йі");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
  car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
  car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
  car = car.replace(/Ю/g, "Йу");
  car = car.replace(/ю/g, "йу");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 ШЧ");
  car = car.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "ШЧ $1$2");
  car = car.replace(/Щ(\p{Uppercase})/ug, "ШЧ$1");
  car = car.replace(/Щ/g, "Шч");
  car = car.replace(/щ/g, "шч");
  
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "Ǧ");
  car = car.replace(/Ґ/g, "G");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ж/g, "Ž");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "Y");
  car = car.replace(/І/g, "I");
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
  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "ǧ");
  car = car.replace(/ґ/g, "g");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ж/g, "ž");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "y");
  car = car.replace(/і/g, "i");
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
  car = car.replace(/(\u0027|\u2019|\u02bc)/g, "\u0022");
  car = car.replace(/(Ь|ь)/g, "\u0027");
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
