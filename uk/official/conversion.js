var car;

function cyrlat () {
car = document.transcription.text1.value;
document.transcription.text1.value = document.transcription.text1.value.replace(/<</g, "«");
document.transcription.text1.value = document.transcription.text1.value.replace(/>>/g, "»");
car = car.replace(/<</g, "«");
car = car.replace(/>>/g, "»");

car = car.replace(/(\u2019|\u0027|\u02bc)/g, "\u02ba");

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
car = car.replace(/Я/g, "Йа");
car = car.replace(/я/g, "йа");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 ЙЕ");
car = car.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "ЙЕ $1$2");
car = car.replace(/Є(\p{Uppercase})/ug, "ЙЕ$1");
car = car.replace(/Є/g, "Йе");
car = car.replace(/є/g, "йе");
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

car = car.replace(/([АБВГҐДЕЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬʺ])([ЙЇ])/g, "$1І");
car = car.replace(/([АБВГҐДЕЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬабвгґдежзиіїйклмнопрстуфхцчшщьʺ])([йї])/g, "$1і");

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 ЙІ");
car = car.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "ЙІ $1$2");
car = car.replace(/Ї(\p{Uppercase})/ug, "ЙІ$1");
car = car.replace(/Ї/g, "Йі");
car = car.replace(/ї/g, "йі");

car = car.replace(/ЗГ/g, "ЗҐГ");
car = car.replace(/([Зз])г/g, "$1ґг");

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ж/ug, "$1$2 ZH");
car = car.replace(/Ж (\p{Uppercase})(\p{Uppercase})/ug, "ZH $1$2");
car = car.replace(/Ж(\p{Uppercase})/ug, "ZH$1");
car = car.replace(/Ж/g, "Zh");
car = car.replace(/ж/g, "zh");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 KH");
car = car.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "KH $1$2");
car = car.replace(/Х(\p{Uppercase})/ug, "KH$1");
car = car.replace(/Х/g, "Kh");
car = car.replace(/х/g, "kh");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 TS");
car = car.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "TS $1$2");
car = car.replace(/Ц(\p{Uppercase})/ug, "TS$1");
car = car.replace(/Ц/g, "Ts");
car = car.replace(/ц/g, "ts");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 CH");
car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
car = car.replace(/Ч(\p{Uppercase})/ug, "CH$1");
car = car.replace(/Ч/g, "Ch");
car = car.replace(/ч/g, "ch");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 SH");
car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "SH $1$2");
car = car.replace(/Ш(\p{Uppercase})/ug, "SH$1");
car = car.replace(/Ш/g, "Sh");
car = car.replace(/ш/g, "sh");

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
car = car.replace(/й/g, "y");
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
car = car.replace(/Й/g, "Y");
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
car = car.replace(/([Ььʺ])/g, "");
document.transcription.text2.value = car;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
