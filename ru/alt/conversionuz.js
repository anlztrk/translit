//  zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/Ъ/g, "ъ");
translit = translit.replace(/Ь/g, "ь");

translit = translit.replace(/бе/g, "be");
translit = translit.replace(/ве/g, "ve");
translit = translit.replace(/ге/g, "ge");
translit = translit.replace(/де/g, "de");
translit = translit.replace(/же/g, "je");
translit = translit.replace(/зе/g, "ze");
translit = translit.replace(/йе/g, "yè");
translit = translit.replace(/ке/g, "ke");
translit = translit.replace(/ле/g, "le");
translit = translit.replace(/ме/g, "me");
translit = translit.replace(/не/g, "ne");
translit = translit.replace(/пе/g, "pe");
translit = translit.replace(/ре/g, "re");
translit = translit.replace(/се/g, "se");
translit = translit.replace(/те/g, "te");
translit = translit.replace(/фе/g, "fe");
translit = translit.replace(/хе/g, "he");
translit = translit.replace(/це/g, "ce");
translit = translit.replace(/че/g, "če");
translit = translit.replace(/ше/g, "še");
translit = translit.replace(/ще/g, "śe");

translit = translit.replace(/Бе/g, "Be");
translit = translit.replace(/Ве/g, "Ve");
translit = translit.replace(/Ге/g, "Ge");
translit = translit.replace(/Де/g, "De");
translit = translit.replace(/Же/g, "Je");
translit = translit.replace(/Зе/g, "Ze");
translit = translit.replace(/Йе/g, "Yè");
translit = translit.replace(/Ке/g, "Ke");
translit = translit.replace(/Ле/g, "Le");
translit = translit.replace(/Ме/g, "Me");
translit = translit.replace(/Не/g, "Ne");
translit = translit.replace(/Пе/g, "Pe");
translit = translit.replace(/Ре/g, "Re");
translit = translit.replace(/Се/g, "Se");
translit = translit.replace(/Те/g, "Te");
translit = translit.replace(/Фе/g, "Fe");
translit = translit.replace(/Хе/g, "He");
translit = translit.replace(/Це/g, "Ce");
translit = translit.replace(/Че/g, "Če");
translit = translit.replace(/Ше/g, "Še");
translit = translit.replace(/Ще/g, "Śe");

translit = translit.replace(/БЕ/g, "BE");
translit = translit.replace(/ВЕ/g, "VE");
translit = translit.replace(/ГЕ/g, "GE");
translit = translit.replace(/ДЕ/g, "DE");
translit = translit.replace(/ЖЕ/g, "JE");
translit = translit.replace(/ЗЕ/g, "ZE");
translit = translit.replace(/ЙЕ/g, "YÈ");
translit = translit.replace(/КЕ/g, "KE");
translit = translit.replace(/ЛЕ/g, "LE");
translit = translit.replace(/МЕ/g, "ME");
translit = translit.replace(/НЕ/g, "NE");
translit = translit.replace(/ПЕ/g, "PE");
translit = translit.replace(/РЕ/g, "RE");
translit = translit.replace(/СЕ/g, "SE");
translit = translit.replace(/ТЕ/g, "TE");
translit = translit.replace(/ФЕ/g, "FE");
translit = translit.replace(/ХЕ/g, "HE");
translit = translit.replace(/ЦЕ/g, "CE");
translit = translit.replace(/ЧЕ/g, "ČE");
translit = translit.replace(/ШЕ/g, "ŠE");
translit = translit.replace(/ЩЕ/g, "ŚE");

translit = translit.replace(/жё/g, "jo");
translit = translit.replace(/чё/g, "čo");
translit = translit.replace(/шё/g, "šo");
translit = translit.replace(/щё/g, "śo");
translit = translit.replace(/Жё/g, "Jo");
translit = translit.replace(/Чё/g, "Čo");
translit = translit.replace(/Шё/g, "Šo");
translit = translit.replace(/Щё/g, "Śo");
translit = translit.replace(/ЖЁ/g, "JO");
translit = translit.replace(/ЧЁ/g, "ČO");
translit = translit.replace(/ШЁ/g, "ŠO");
translit = translit.replace(/ЩЁ/g, "ŚO");

translit = translit.replace(/жю/g, "ju");
translit = translit.replace(/шю/g, "šu");
translit = translit.replace(/Жю/g, "Ju");
translit = translit.replace(/Шю/g, "Šu");
translit = translit.replace(/ЖЮ/g, "JU");
translit = translit.replace(/ШЮ/g, "ŠU");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "ye");
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
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "ś");
translit = translit.replace(/ъ/g, "’");
translit = translit.replace(/ы/g, "ɪ");
translit = translit.replace(/ь/g, "\u0323");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "yu");
translit = translit.replace(/ё/g, "yo");
translit = translit.replace(/я/g, "ya");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Ye");
translit = translit.replace(/Ж/g, "J");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "I");
translit = translit.replace(/Й/g, "Y");
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
translit = translit.replace(/Ы/g, "Ɨ");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Yu");
translit = translit.replace(/Ё/g, "Yo");
translit = translit.replace(/Я/g, "Ya");
translit = translit.replace(/«/g, "\u201e");
translit = translit.replace(/»/g, "\u201c");

translit = translit.replace(/g\u0323/g, "g\u0307");
translit = translit.replace(/p\u0323/g, "p\u0307");
translit = translit.replace(/j\u0323/g, "j\u0308");

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
