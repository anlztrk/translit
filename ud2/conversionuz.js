﻿//  zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;

translit = translit.replace(/бе/g, "be");
translit = translit.replace(/ве/g, "ve");
translit = translit.replace(/ге/g, "ge");
translit = translit.replace(/же/g, "že");
translit = translit.replace(/ӝе/g, "dže");
translit = translit.replace(/ӟе/g, "dźe");
translit = translit.replace(/ке/g, "ke");
translit = translit.replace(/ме/g, "me");
translit = translit.replace(/пе/g, "pe");
translit = translit.replace(/ре/g, "re");
translit = translit.replace(/фе/g, "fe");
translit = translit.replace(/хе/g, "he");
translit = translit.replace(/це/g, "ce");
translit = translit.replace(/че/g, "če");
translit = translit.replace(/ӵе/g, "će");
translit = translit.replace(/ше/g, "še");
translit = translit.replace(/ще/g, "šče");

translit = translit.replace(/Бе/g, "Be");
translit = translit.replace(/Ве/g, "Ve");
translit = translit.replace(/Ге/g, "Ge");
translit = translit.replace(/Же/g, "Že");
translit = translit.replace(/Ӝе/g, "Dže");
translit = translit.replace(/Ӟе/g, "Dźe");
translit = translit.replace(/Ке/g, "Ke");
translit = translit.replace(/Ме/g, "Me");
translit = translit.replace(/Пе/g, "Pe");
translit = translit.replace(/Ре/g, "Re");
translit = translit.replace(/Фе/g, "Fe");
translit = translit.replace(/Хе/g, "He");
translit = translit.replace(/Це/g, "Ce");
translit = translit.replace(/Че/g, "Če");
translit = translit.replace(/Ӵе/g, "Će");
translit = translit.replace(/Ше/g, "Še");
translit = translit.replace(/Ще/g, "Šče");

translit = translit.replace(/БЕ/g, "BE");
translit = translit.replace(/ВЕ/g, "VE");
translit = translit.replace(/ГЕ/g, "GE");
translit = translit.replace(/ЖЕ/g, "ŽE");
translit = translit.replace(/ӜЕ/g, "DŽE");
translit = translit.replace(/ӞЕ/g, "DŹE");
translit = translit.replace(/КЕ/g, "KE");
translit = translit.replace(/МЕ/g, "ME");
translit = translit.replace(/ПЕ/g, "PE");
translit = translit.replace(/РЕ/g, "RE");
translit = translit.replace(/ФЕ/g, "FE");
translit = translit.replace(/ХЕ/g, "HE");
translit = translit.replace(/ЦЕ/g, "CE");
translit = translit.replace(/ЧЕ/g, "ČE");
translit = translit.replace(/ӴЕ/g, "ĆE");
translit = translit.replace(/ШЕ/g, "ŠE");
translit = translit.replace(/ЩЕ/g, "ŠČE");

translit = translit.replace(/бйе/g, "bje");
translit = translit.replace(/вйе/g, "vje");
translit = translit.replace(/гйе/g, "gje");
translit = translit.replace(/жйе/g, "žje");
translit = translit.replace(/ӝйе/g, "džje");
translit = translit.replace(/ӟйе/g, "dźje");
translit = translit.replace(/кйе/g, "kje");
translit = translit.replace(/мйе/g, "mje");
translit = translit.replace(/пйе/g, "pje");
translit = translit.replace(/рйе/g, "rje");
translit = translit.replace(/фйе/g, "fje");
translit = translit.replace(/хйе/g, "hje");
translit = translit.replace(/цйе/g, "cje");
translit = translit.replace(/чйе/g, "čje");
translit = translit.replace(/ӵйе/g, "ćje");
translit = translit.replace(/шйе/g, "šje");
translit = translit.replace(/щйе/g, "ščje");

translit = translit.replace(/Бйе/g, "Bje");
translit = translit.replace(/Вйе/g, "Vje");
translit = translit.replace(/Гйе/g, "Gje");
translit = translit.replace(/Жйе/g, "Žje");
translit = translit.replace(/Ӝйе/g, "Džje");
translit = translit.replace(/Ӟйе/g, "Dźje");
translit = translit.replace(/Кйе/g, "Kje");
translit = translit.replace(/Мйе/g, "Mje");
translit = translit.replace(/Пйе/g, "Pje");
translit = translit.replace(/Рйе/g, "Rje");
translit = translit.replace(/Фйе/g, "Fje");
translit = translit.replace(/Хйе/g, "Hje");
translit = translit.replace(/Цйе/g, "Cje");
translit = translit.replace(/Чйе/g, "Čje");
translit = translit.replace(/Ӵйе/g, "Ćje");
translit = translit.replace(/Шйе/g, "Šje");
translit = translit.replace(/Щйе/g, "Ščje");

translit = translit.replace(/БЙЕ/g, "BJE");
translit = translit.replace(/ВЙЕ/g, "VJE");
translit = translit.replace(/ГЙЕ/g, "GJE");
translit = translit.replace(/ЖЙЕ/g, "ŽJE");
translit = translit.replace(/ӜЙЕ/g, "DŽJE");
translit = translit.replace(/ӞЙЕ/g, "DŹJE");
translit = translit.replace(/КЙЕ/g, "KJE");
translit = translit.replace(/МЙЕ/g, "MJE");
translit = translit.replace(/ПЙЕ/g, "PJE");
translit = translit.replace(/РЙЕ/g, "RJE");
translit = translit.replace(/ФЙЕ/g, "FJE");
translit = translit.replace(/ХЙЕ/g, "HJE");
translit = translit.replace(/ЦЙЕ/g, "CJE");
translit = translit.replace(/ЧЙЕ/g, "ČJE");
translit = translit.replace(/ӴЙЕ/g, "ĆJE");
translit = translit.replace(/ШЙЕ/g, "ŠJE");
translit = translit.replace(/ЩЙЕ/g, "ŠČJE");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "je");
translit = translit.replace(/ё/g, "jo");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/ӝ/g, "dž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/ӟ/g, "dź");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/ӥ/g, "ï");
translit = translit.replace(/й/g, "j");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "l");
translit = translit.replace(/м/g, "m");
translit = translit.replace(/н/g, "n");
translit = translit.replace(/о/g, "o");
translit = translit.replace(/ӧ/g, "ö");
translit = translit.replace(/п/g, "p");
translit = translit.replace(/р/g, "r");
translit = translit.replace(/с/g, "s");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ӵ/g, "ć");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "šč");
translit = translit.replace(/ъ/g, "ʺ");
translit = translit.replace(/ы/g, "y");
translit = translit.replace(/ь/g, "ʹ");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "ju");
translit = translit.replace(/я/g, "ja");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Je");
translit = translit.replace(/Ё/g, "Jo");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/Ӝ/g, "Dž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/Ӟ/g, "Dź");
translit = translit.replace(/И/g, "I");
translit = translit.replace(/Ӥ/g, "Ï");
translit = translit.replace(/Й/g, "J");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "L");
translit = translit.replace(/М/g, "M");
translit = translit.replace(/Н/g, "N");
translit = translit.replace(/О/g, "O");
translit = translit.replace(/Ӧ/g, "Ö");
translit = translit.replace(/П/g, "P");
translit = translit.replace(/Р/g, "R");
translit = translit.replace(/С/g, "S");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ӵ/g, "Ć");
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
