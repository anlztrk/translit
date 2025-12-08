var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/([0-9])Х/g, "$1X");
car = car.replace(/([0-9])х/g, "$1x");
car = car.replace(/Х([0-9])/g, "X$1");
car = car.replace(/х([0-9])/g, "x$1");

car = car.replace(/(\u0027|\u2019|\u02bc)/g, "ъ");

car = car.replace(/Й([Аа])/g, "Й$1\u0300");
car = car.replace(/йа/g, "йа\u0300");
car = car.replace(/Й([Ее])/g, "Й$1\u0300");
car = car.replace(/йе/g, "йе\u0300");
car = car.replace(/Й([Іі])/g, "Й$1\u0300");
car = car.replace(/йі/g, "йі\u0300");
car = car.replace(/Й([Уу])/g, "Й$1\u0300");
car = car.replace(/йу/g, "йу\u0300");
car = car.replace(/Й([Оо])/g, "Й$1\u0300");
car = car.replace(/йо/g, "йо\u0300");

car = car.replace(/([БбВвГгҐґДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ])И/g, "$1Ɩ");
car = car.replace(/([БбВвГгҐґДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ])и/g, "$1ɩ");
car = car.replace(/([БбВвГгҐґДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ])Ɩ([АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЮюЯя])/g, "$1И$2");
car = car.replace(/([БбВвГгҐґДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ])ɩ([АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЮюЯя])/g, "$1и$2");
car = car.replace(/([АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЮюЯя])([БбВвГгҐґДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ])Ɩ/g, "$1$2И");
car = car.replace(/([АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЮюЯя])([БбВвГгҐґДдЖжЗзЙйКкЛлМмНнПпРрСсТтФфХхЦцЧчШшЩщ])ɩ/g, "$1$2и");

car = car.replace(/ɩ/g, "і");
car = car.replace(/Ɩ/g, "І");

car = car.replace(/дж/g, "џ");
car = car.replace(/Д([Жж])/g, "Џ");

car = car.replace(/([СКЗ])Г/g, "$1\u2019Г");
car = car.replace(/([СКЗскз])г/g, "$1\u2019г");/*
car = car.replace(/Ш([Чч])/g, "Ш\u2019$1");
car = car.replace(/шч/g, "ш\u2019ч");
car = car.replace(/Т([Сс])/g, "Т\u2019$1");
car = car.replace(/тс/g, "т\u2019с");*/

car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЬА");
car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЬА $1$2");
car = car.replace(/Я(\p{Uppercase})/ug, "ЬА$1");
car = car.replace(/Я/g, "Ьа");
car = car.replace(/я/g, "ьа");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Є/ug, "$1$2 ЬЕ");
car = car.replace(/Є (\p{Uppercase})(\p{Uppercase})/ug, "ЬЕ $1$2");
car = car.replace(/Є(\p{Uppercase})/ug, "ЬЕ$1");
car = car.replace(/Є/g, "Ье");
car = car.replace(/є/g, "ье");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ї/ug, "$1$2 ЬІ");
car = car.replace(/Ї (\p{Uppercase})(\p{Uppercase})/ug, "ЬІ $1$2");
car = car.replace(/Ї(\p{Uppercase})/ug, "ЬІ$1");
car = car.replace(/Ї/g, "Ьі");
car = car.replace(/ї/g, "ьі");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЬУ");
car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЬУ $1$2");
car = car.replace(/Ю(\p{Uppercase})/ug, "ЬУ$1");
car = car.replace(/Ю/g, "Ьу");
car = car.replace(/ю/g, "ьу");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Щ/ug, "$1$2 ШЧ");
car = car.replace(/Щ (\p{Uppercase})(\p{Uppercase})/ug, "ШЧ $1$2");
car = car.replace(/Щ(\p{Uppercase})/ug, "ШЧ$1");
car = car.replace(/Щ/g, "Шч");
car = car.replace(/щ/g, "шч");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Х/ug, "$1$2 КГ");
car = car.replace(/Х (\p{Uppercase})(\p{Uppercase})/ug, "КГ $1$2");
car = car.replace(/Х(\p{Uppercase})/ug, "КГ$1");
car = car.replace(/Х/g, "Кг");
car = car.replace(/х/g, "кг");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ш/ug, "$1$2 СГ");
car = car.replace(/Ш (\p{Uppercase})(\p{Uppercase})/ug, "СГ $1$2");
car = car.replace(/Ш(\p{Uppercase})/ug, "СГ$1");
car = car.replace(/Ш/g, "Сг");
car = car.replace(/ш/g, "сг");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ж/ug, "$1$2 ЗГ");
car = car.replace(/Ж (\p{Uppercase})(\p{Uppercase})/ug, "ЗГ $1$2");
car = car.replace(/Ж(\p{Uppercase})/ug, "ЗГ$1");
car = car.replace(/Ж/g, "Зг");
car = car.replace(/ж/g, "зг");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ч/ug, "$1$2 \u0043Г");
car = car.replace(/Ч (\p{Uppercase})(\p{Uppercase})/ug, "\u0043Г $1$2");
car = car.replace(/Ч(\p{Uppercase})/ug, "\u0043Г$1");
car = car.replace(/Ч/g, "\u0043г");
car = car.replace(/ч/g, "\u0063г");
car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ц/ug, "$1$2 ТС");
car = car.replace(/Ц (\p{Uppercase})(\p{Uppercase})/ug, "ТС $1$2");
car = car.replace(/Ц(\p{Uppercase})/ug, "ТС$1");
car = car.replace(/Ц/g, "Тс");
car = car.replace(/ц/g, "тс");

car = car.replace(/([БВГҐДЏЗКЛМНПРСТФ])Ь([АЕІИОУ])/g, "$1І$2");
car = car.replace(/([БВГҐДЏЗКЛМНПРСТФбвгґдџзклмнпрстф])ь([аеіиоу])/g, "$1і$2");
car = car.replace(/Ь([АЕІИОУаеіиоу])/g, "Й$1");
car = car.replace(/ь([аеіиоу])/g, "й$1");
car = car.replace(/ЬЬ/g, "Й");
car = car.replace(/([Ьь])ь/g, "й");
  
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/ґ/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/џ/g, "j");
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

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Ґ/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Џ/g, "J");
car = car.replace(/Е/g, "E");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "Y");
car = car.replace(/І/g, "I");
car = car.replace(/Й/g, "Ẏ");
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

car = car.replace(/([ЬЪьъ])/g, "");

car = car.replace(/ẎY/g, "ẎI");
car = car.replace(/([Ẏẏ])y/g, "$1i");
car = car.replace(/Y([Ẏẏ])((?![AEIOUYẎ]))/g, "Y$2");
car = car.replace(/yẏ((?![aeiouyẏ]))/g, "y$1");
car = car.replace(/YẎ([AEIOUYẎ])/g, "IẎ$1");
car = car.replace(/Yẏ([aeiouyẏ])/g, "Iẏ$1");
car = car.replace(/yẏ([aeiouyẏ])/g, "iẏ$1");

car = car.replace(/([BCDFGHKLMNPRSTVZ])ẎI/g, "$1I");
car = car.replace(/([BCDFGHKLMNPRSTVZbcdfghklmnprstvz])ẏi/g, "$1i");

car = car.replace(/([AEOUYẎ])Ẏ((?![AEIOUYẎ]))/g, "$1I$2");
car = car.replace(/([AEOUYẎaeouyẏ])ẏ((?![aeiouyẏ]))/g, "$1i$2");
car = car.replace(/IẎ((?![AEIOUYẎ]))/g, "I$1");
car = car.replace(/([Ii])ẏ((?![aeiouyẏ]))/g, "$1$2");

car = car.replace(/Ẏ/g, "Y");
car = car.replace(/ẏ/g, "y");
  
car = car.replace(/«/g, "\u201e");
car = car.replace(/»/g, "\u201c");
car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
