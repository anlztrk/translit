var car;
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
car = car.replace(/<</g, "«");
car = car.replace(/>>/g, "»");
translit = translit.replace(/<</g, "«");
translit = translit.replace(/>>/g, "»");

translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Я/g, "$1ЬА");
translit = translit.replace(/([бвгджзклмнпрстфхцчшщъь])Я/g, "$1ьА");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬбвгджзклмнпрстфхцчшщъь])я/g, "$1ьа");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Е/g, "$1ЬЭ");
translit = translit.replace(/([бвгджзклмнпрстфхцчшщъь])Е/g, "$1ьЭ");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬбвгджзклмнпрстфхцчшщъь])е/g, "$1ьэ");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])И/g, "$1ЬЫ");
translit = translit.replace(/([бвгджзклмнпрстфхцчшщъь])И/g, "$1ьЫ");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬбвгджзклмнпрстфхцчшщъь])и/g, "$1ьы");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Ё/g, "$1ЬО");
translit = translit.replace(/([бвгджзклмнпрстфхцчшщъь])Ё/g, "$1ьО");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬбвгджзклмнпрстфхцчшщъь])ё/g, "$1ьо");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Ю/g, "$1ЬУ");
translit = translit.replace(/([бвгджзклмнпрстфхцчшщъь])Ю/g, "$1ьУ");
translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬбвгджзклмнпрстфхцчшщъь])ю/g, "$1ьу");

translit = translit.replace(/([АЭЫОУЯЕИЙЁЮЪЬ])Ь/g, "$1Й");
translit = translit.replace(/([АЭЫОУЯЕИЙЁЮЪЬаэыоуяеийёюъь])ь/g, "$1й");
translit = translit.replace(/[ьЬ]А/g, "Ä");
translit = translit.replace(/ьа/g, "ä");
translit = translit.replace(/[ьЬ]Э/g, "Ë");
translit = translit.replace(/ьэ/g, "ë");
translit = translit.replace(/[ьЬ]Ы/g, "I");
translit = translit.replace(/ьы/g, "i");
translit = translit.replace(/[ьЬ]О/g, "Ö");
translit = translit.replace(/ьо/g, "ö");
translit = translit.replace(/[ьЬ]У/g, "Ü");
translit = translit.replace(/ьу/g, "ü");

translit = translit.replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Э/g, "$1È");
translit = translit.replace(/([ЪЬбвгджзклмнпрстфхцчшщъь])э/g, "$1è");
translit = translit.replace(/Ë/g, "E");
translit = translit.replace(/ë/g, "e");
  
translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "je");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
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
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "ś");
translit = translit.replace(/ы/g, "y");
translit = translit.replace(/ь/g, "j");
translit = translit.replace(/ъ/g, "\u2019");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "ju");
translit = translit.replace(/ё/g, "jo");
translit = translit.replace(/я/g, "ja");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Je");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "I");
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
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/Щ/g, "Ś");
translit = translit.replace(/Ы/g, "Y");
translit = translit.replace(/Ь/g, "J");
translit = translit.replace(/Ъ/g, "\u2019");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Ju");
translit = translit.replace(/Ё/g, "Jo");
translit = translit.replace(/Я/g, "Ja");

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
