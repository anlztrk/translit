//  zaciatocne e musi byt ye
var translit;
var car;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

car = car.replace(/ă/g, "ӑ");
car = car.replace(/Ă/g, "Ӑ");
car = car.replace(/ĕ/g, "ӗ");
car = car.replace(/Ĕ/g, "Ӗ");
car = car.replace(/ç/g, "ҫ");
car = car.replace(/Ç/g, "Ҫ");
car = car.replace(/ÿ/g, "ӳ");
car = car.replace(/Ÿ/g, "Ӳ"); 

translit = translit.replace(/ă/g, "ӑ");
translit = translit.replace(/Ă/g, "Ӑ");
translit = translit.replace(/ĕ/g, "ӗ");
translit = translit.replace(/Ĕ/g, "Ӗ");
translit = translit.replace(/ç/g, "ҫ");
translit = translit.replace(/Ç/g, "Ҫ");
translit = translit.replace(/ÿ/g, "ӳ");
translit = translit.replace(/Ÿ/g, "Ӳ"); 

translit = translit.replace(/а/g, "a");
translit = translit.replace(/ӑ/g, "ĭ");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ё/g, "yo");
translit = translit.replace(/ӗ/g, "í");
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
translit = translit.replace(/ҫ/g, "ś");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ӳ/g, "ü");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "ts");
translit = translit.replace(/ч/g, "ç");
translit = translit.replace(/ш/g, "ş");
translit = translit.replace(/щ/g, "şç");
translit = translit.replace(/ъ/g, "ʼ");
translit = translit.replace(/ы/g, "ı");
translit = translit.replace(/ь/g, "");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "yu");
translit = translit.replace(/я/g, "ya");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Ӑ/g, "Ĭ");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ё/g, "Yo");
translit = translit.replace(/Ӗ/g, "Í");
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
translit = translit.replace(/Ҫ/g, "Ś");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ӳ/g, "Ü");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ц/g, "Ts");
translit = translit.replace(/Ч/g, "Ç");
translit = translit.replace(/Ш/g, "Ş");
translit = translit.replace(/Щ/g, "Şç");
translit = translit.replace(/Ъ/g, "ʼ");
translit = translit.replace(/Ы/g, "I");
translit = translit.replace(/Ь/g, "");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Yu");
translit = translit.replace(/Я/g, "Ya");
translit = translit.replace(/«/g, "\u201c");
translit = translit.replace(/»/g, "\u201d");
document.transcription.text1.value = car;
document.transcription.text2.value = translit;
}

function latcyr () {
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
