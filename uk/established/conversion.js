var car;
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
car = car.replace(/<</g, "«");
car = car.replace(/>>/g, "»");
translit = translit.replace(/<</g, "«");
translit = translit.replace(/>>/g, "»");

translit = translit.replace(/(\u2019|\u0027|\u02bc)/g, "\u0022");

translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
translit = translit.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
translit = translit.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
translit = translit.replace(/Я/g, "Ьа");
translit = translit.replace(/я/g, "ьа");
translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 ЬЕ");
translit = translit.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "ЬЕ $1$2");
translit = translit.replace(/Є(\p{Uppercase})/g, "ЬЕ$1");
translit = translit.replace(/Є/g, "Ье");
translit = translit.replace(/є/g, "ье");
translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 ЬІ");
translit = translit.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "ЬІ $1$2");
translit = translit.replace(/Ї(\p{Uppercase})/ug, "ЬІ$1");
translit = translit.replace(/Ї/g, "Ьі");
translit = translit.replace(/ї/g, "ьі");
translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ");
translit = translit.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2");
translit = translit.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1");
translit = translit.replace(/Ю/g, "Ьу");
translit = translit.replace(/ю/g, "ьу");
translit = translit.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 ШЧ");
translit = translit.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "ШЧ $1$2");
translit = translit.replace(/Щ(\p{Uppercase})/ug, "ШЧ$1");
translit = translit.replace(/Щ/g, "Шч");
translit = translit.replace(/щ/g, "шч");

translit = translit.replace(/(А|Е|І|И|О|У)Ь/g, "$1Й");
translit = translit.replace(/(А|Е|І|И|О|У|а|е|і|и|о|у)ь/g, "$1й");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "h"); 
translit = translit.replace(/ґ/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "y");
translit = translit.replace(/і/g, "i");
translit = translit.replace(/й/g, "j");
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
translit = translit.replace(/х/g, "x");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "H");
translit = translit.replace(/Ґ/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "Y");
translit = translit.replace(/І/g, "I");
translit = translit.replace(/Й/g, "J");
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
translit = translit.replace(/Х/g, "X");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/(Ь|ь)/g, "\u0027");

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
