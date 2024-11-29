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

  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ẎA");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ẎA $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ẎA$1");
  car = car.replace(/Я/g, "Ẏa");
  car = car.replace(/я/g, "ẏa");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 ẎE");
  car = car.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "ẎE $1$2");
  car = car.replace(/Є(\p{Uppercase})/g, "ẎE$1");
  car = car.replace(/Є/g, "Ẏе");
  car = car.replace(/є/g, "ẏе");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 ẎI");
  car = car.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "ẎI $1$2");
  car = car.replace(/Ї(\p{Uppercase})/ug, "ẎI$1");
  car = car.replace(/Ї/g, "ẎI");
  car = car.replace(/ї/g, "ẏi");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ẎU");
  car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ẎU $1$2");
  car = car.replace(/Ю(\p{Uppercase})/ug, "ẎU$1");
  car = car.replace(/Ю/g, "Ẏu");
  car = car.replace(/ю/g, "ẏu");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 SHCH");
  car = car.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "SHCH $1$2");
  car = car.replace(/Щ(\p{Uppercase})/ug, "SHCH$1");
  car = car.replace(/Щ/g, "Shch");
  car = car.replace(/щ/g, "shch");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 KH");
  car = car.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "KH $1$2");
  car = car.replace(/Х(\p{Uppercase})/ug, "KH$1");
  car = car.replace(/Х/g, "Kh");
  car = car.replace(/х/g, "kh");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 SH");
  car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SH $1$2");
  car = car.replace(/Ш(\p{Uppercase})/ug, "SH$1");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ж/ug, "$1$2 ZH");
  car = car.replace(/Ж (\p{Uppercase})(\p{Uppercase})/ug, "ZH $1$2");
  car = car.replace(/Ж(\p{Uppercase})/ug, "ZH$1");
  car = car.replace(/Ж/g, "Zh");
  car = car.replace(/ж/g, "zh");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 CH");
  car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
  car = car.replace(/Ч(\p{Uppercase})/ug, "CH$1");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 TS");
  car = car.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "TS $1$2");
  car = car.replace(/Ц(\p{Uppercase})/ug, "TS$1");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/ц/g, "ts");
  
  car = car.replace(/ЗГ/g, "ZGH");
  car = car.replace(/(З|з)г/g, "$1gh");
  
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "H");
  car = car.replace(/Ґ/g, "G");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
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
  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "h");
  car = car.replace(/ґ/g, "g");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "y");
  car = car.replace(/і/g, "i");
  car = car.replace(/й/g, "ẏ");
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
  car = car.replace(/(\u0027|\u2019|\u02bc)/g, "\u0022");
  car = car.replace(/(Ь|ь)/g, "\u0027");
  
  car = car.replace(/(B|C|D|F|G|H|K|L|M|N|P|R|S|T|V|Z)Ẏ/g, "$1I");
  car = car.replace(/(B|C|D|F|G|H|K|L|M|N|P|R|S|T|V|Z|b|c|d|f|g|h|k|l|m|n|p|r|s|t|v|z)ẏ/g, "$1i");
  car = car.replace(/Ẏ/g, "Y");
  car = car.replace(/ẏ/g, "y");
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
