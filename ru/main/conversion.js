
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/Ъ/g, "ъ");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "\u0301e");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "\u0301i");
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
translit = translit.replace(/ъ/g, "\u2bc");
translit = translit.replace(/ы/g, "i");
translit = translit.replace(/ь/g, "\u0301");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "\u0301u");
translit = translit.replace(/ё/g, "\u0301o");
translit = translit.replace(/я/g, "\u0301a");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "\u0301\u200cE");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "\u0301\u200cI");
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
translit = translit.replace(/Ы/g, "I");
translit = translit.replace(/Ь/g, "\u0301");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "\u0301\u200cU");
translit = translit.replace(/Ё/g, "\u0301\u200cO");
translit = translit.replace(/Я/g, "\u0301\u200cA");

translit = translit.replace(/(A|E|I|O|U)\u0301(A|E|I|O|U)/g, "$1J$2")
translit = translit.replace(/(A|E|I|O|U|a|e|i|o|u)\u0301(a|e|i|o|u)/g, "$1j$2")
translit = translit.replace(/^(\p{L})\u0301(\p{Uppercase})/ug, "$1J$2");
translit = translit.replace(/^(\p{L})\u0301 (\p{Uppercase})(\p{Uppercase})/ug, "$1J$2$3");
translit = translit.replace(/^(\p{L})\u0301/ug, "$1j");
translit = translit.normalize('NFC');
translit = translit.replace(/(\p{Uppercase})(\p{Uppercase})\u0301/ug, "$1$2Í");
translit = translit.replace(/(\p{Uppercase})\u0301(\p{Uppercase})/ug, "$1Í$2");
translit = translit.replace(/\u0301/g, "í");

translit = translit.replace(/«/g, "\u201e");
translit = translit.replace(/»/g, "\u201c");
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
