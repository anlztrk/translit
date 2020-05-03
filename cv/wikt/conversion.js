
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
car = car.replace(/ў/g, "ӳ"); 
car = car.replace(/Ў/g, "Ӳ");
car = car.replace(/ү/g, "ӳ"); 
car = car.replace(/Ү/g, "Ӳ");  

translit = translit.replace(/ă/g, "ӑ");
translit = translit.replace(/Ă/g, "Ӑ");
translit = translit.replace(/ĕ/g, "ӗ");
translit = translit.replace(/Ĕ/g, "Ӗ");
translit = translit.replace(/ç/g, "ҫ");
translit = translit.replace(/Ç/g, "Ҫ");
translit = translit.replace(/ÿ/g, "ӳ");
translit = translit.replace(/Ÿ/g, "Ӳ"); 
translit = translit.replace(/ў/g, "ӳ");
translit = translit.replace(/Ў/g, "Ӳ"); 
translit = translit.replace(/ү/g, "ӳ");
translit = translit.replace(/Ү/g, "Ӳ"); 

translit = translit.replace(/а/g, "a");
translit = translit.replace(/ӑ/g, "ă");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ё/g, "jo");
translit = translit.replace(/ӗ/g, "ĕ");
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
translit = translit.replace(/ҫ/g, "ś");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ӳ/g, "ü");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "ts");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "šč");
translit = translit.replace(/ъ/g, "ʺ");
translit = translit.replace(/ы/g, "y");
translit = translit.replace(/ь/g, "ʹ");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "ju");
translit = translit.replace(/я/g, "ja");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Ӑ/g, "Ă");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ё/g, "Jo");
translit = translit.replace(/Ӗ/g, "Ĕ");
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
translit = translit.replace(/Ҫ/g, "Ś");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ӳ/g, "Ü");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ц/g, "Ts");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/Щ/g, "Šč");
translit = translit.replace(/Ъ/g, "ʺ");
translit = translit.replace(/Ы/g, "Y");
translit = translit.replace(/Ь/g, "ʹ");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Ju");
translit = translit.replace(/Я/g, "Ja");
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

