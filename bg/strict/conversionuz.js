﻿//  copyright lexilogos.com
var car;
var translit;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
translit = translit.replace(/Ă/g, "Ǎ");
translit = translit.replace(/ă/g, "ǎ");
translit = translit.replace(/Ã/g, "Ǎ");
translit = translit.replace(/ã/g, "ǎ");
translit = translit.replace(/Ŭ/g, "Ǔ");
translit = translit.replace(/ŭ/g, "ǔ");
translit = translit.replace(/Ũ/g, "Ǔ");
translit = translit.replace(/ũ/g, "ǔ");
translit = translit.replace(/~U/g, "Ǔ");
translit = translit.replace(/~u/g, "ǔ");
translit = translit.replace(/BǍLGAR/g, "BǓLGAR");
translit = translit.replace(/Bǎlgar/g, "Bǔlgar");
translit = translit.replace(/bǎlgar/g, "bǔlgar");
car = car.replace(/Ă/g, "Ǎ");
car = car.replace(/ă/g, "ǎ");
car = car.replace(/Ã/g, "Ǎ");
car = car.replace(/ã/g, "ǎ");
car = car.replace(/Ŭ/g, "Ǔ");
car = car.replace(/ŭ/g, "ǔ");
car = car.replace(/Ũ/g, "Ǔ");
car = car.replace(/ũ/g, "ǔ");
car = car.replace(/~U/g, "Ǔ");
car = car.replace(/~u/g, "ǔ");
car = car.replace(/BǍLGAR/g, "BǓLGAR");
car = car.replace(/Bǎlgar/g, "Bǔlgar");
car = car.replace(/bǎlgar/g, "bǔlgar");

car = car.replace(/ǔ/g, "ǎ");
car = car.replace(/Ǔ/g, "Ǎ");

car = car.replace(/ja/g, "я");
car = car.replace(/ju/g, "ю");
car = car.replace(/št/g, "щ");
car = car.replace(/Ja/g, "Я");
car = car.replace(/Ju/g, "Ю");
car = car.replace(/Št/g, "Щ");
car = car.replace(/JA/g, "Я");
car = car.replace(/JU/g, "Ю");
car = car.replace(/ŠT/g, "Щ");

car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ž/g, "ж");
car = car.replace(/z/g, "з");
car = car.replace(/i/g, "и");
car = car.replace(/ì/g, "ѝ");
car = car.replace(/j/g, "й");
car = car.replace(/k/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/f/g, "ф");
car = car.replace(/h/g, "х");
car = car.replace(/c/g, "ц");
car = car.replace(/č/g, "ч");
car = car.replace(/š/g, "ш");
car = car.replace(/ǎ/g, "ъ");
car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/Z/g, "З");
car = car.replace(/I/g, "И");
car = car.replace(/Ì/g, "Ѝ");
car = car.replace(/J/g, "Й");
car = car.replace(/K/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/F/g, "Ф");
car = car.replace(/H/g, "Х");
car = car.replace(/C/g, "Ц");
car = car.replace(/Č/g, "Ч");
car = car.replace(/Š/g, "Ш");
car = car.replace(/Ǎ/g, "Ъ");

car = car.replace(/бйо/g, "бьо");
car = car.replace(/вйо/g, "вьо");
car = car.replace(/гйо/g, "гьо");
car = car.replace(/дйо/g, "дьо");
car = car.replace(/жйо/g, "жьо");
car = car.replace(/зйо/g, "зьо");
car = car.replace(/кйо/g, "кьо");
car = car.replace(/лйо/g, "льо");
car = car.replace(/мйо/g, "мьо");
car = car.replace(/нйо/g, "ньо");
car = car.replace(/пйо/g, "пьо");
car = car.replace(/рйо/g, "рьо");
car = car.replace(/сйо/g, "сьо");
car = car.replace(/тйо/g, "тьо");
car = car.replace(/фйо/g, "фьо");
car = car.replace(/хйо/g, "хьо");
car = car.replace(/цйо/g, "цьо");
car = car.replace(/чйо/g, "чьо");
car = car.replace(/шйо/g, "шьо");
car = car.replace(/щйо/g, "щьо");
car = car.replace(/Бйо/g, "Бьо");
car = car.replace(/Вйо/g, "Вьо");
car = car.replace(/Гйо/g, "Гьо");
car = car.replace(/Дйо/g, "Дьо");
car = car.replace(/Жйо/g, "Жьо");
car = car.replace(/Зйо/g, "Зьо");
car = car.replace(/Кйо/g, "Кьо");
car = car.replace(/Лйо/g, "Льо");
car = car.replace(/Мйо/g, "Мьо");
car = car.replace(/Нйо/g, "Ньо");
car = car.replace(/Пйо/g, "Пьо");
car = car.replace(/Рйо/g, "Рьо");
car = car.replace(/Сйо/g, "Сьо");
car = car.replace(/Тйо/g, "Тьо");
car = car.replace(/Фйо/g, "Фьо");
car = car.replace(/Хйо/g, "Хьо");
car = car.replace(/Цйо/g, "Цьо");
car = car.replace(/Чйо/g, "Чьо");
car = car.replace(/Шйо/g, "Шьо");
car = car.replace(/Щйо/g, "Щьо");
car = car.replace(/БЙО/g, "БЬО");
car = car.replace(/ВЙО/g, "ВЬО");
car = car.replace(/ГЙО/g, "ГЬО");
car = car.replace(/ДЙО/g, "ДЬО");
car = car.replace(/ЖЙО/g, "ЖЬО");
car = car.replace(/ЗЙО/g, "ЗЬО");
car = car.replace(/КЙО/g, "КЬО");
car = car.replace(/ЛЙО/g, "ЛЬО");
car = car.replace(/МЙО/g, "МЬО");
car = car.replace(/НЙО/g, "НЬО");
car = car.replace(/ПЙО/g, "ПЬО");
car = car.replace(/РЙО/g, "РЬО");
car = car.replace(/СЙО/g, "СЬО");
car = car.replace(/ТЙО/g, "ТЬО");
car = car.replace(/ФЙО/g, "ФЬО");
car = car.replace(/ХЙО/g, "ХЬО");
car = car.replace(/ЦЙО/g, "ЦЬО");
car = car.replace(/ЧЙО/g, "ЧЬО");
car = car.replace(/ШЙО/g, "ШЬО");
car = car.replace(/ЩЙО/g, "ЩЬО");

car = car.replace(/бйе/g, "бье");
car = car.replace(/вйе/g, "вье");
car = car.replace(/гйе/g, "гье");
car = car.replace(/дйе/g, "дье");
car = car.replace(/жйе/g, "жье");
car = car.replace(/зйе/g, "зье");
car = car.replace(/кйе/g, "кье");
car = car.replace(/лйе/g, "лье");
car = car.replace(/мйе/g, "мье");
car = car.replace(/нйе/g, "нье");
car = car.replace(/пйе/g, "пье");
car = car.replace(/рйе/g, "рье");
car = car.replace(/сйе/g, "сье");
car = car.replace(/тйе/g, "тье");
car = car.replace(/фйе/g, "фье");
car = car.replace(/хйе/g, "хье");
car = car.replace(/цйе/g, "цье");
car = car.replace(/чйе/g, "чье");
car = car.replace(/шйе/g, "шье");
car = car.replace(/щйе/g, "щье");
car = car.replace(/Бйе/g, "Бье");
car = car.replace(/Вйе/g, "Вье");
car = car.replace(/Гйе/g, "Гье");
car = car.replace(/Дйе/g, "Дье");
car = car.replace(/Жйе/g, "Жье");
car = car.replace(/Зйе/g, "Зье");
car = car.replace(/Кйе/g, "Кье");
car = car.replace(/Лйе/g, "Лье");
car = car.replace(/Мйе/g, "Мье");
car = car.replace(/Нйе/g, "Нье");
car = car.replace(/Пйе/g, "Пье");
car = car.replace(/Рйе/g, "Рье");
car = car.replace(/Сйе/g, "Сье");
car = car.replace(/Тйе/g, "Тье");
car = car.replace(/Фйе/g, "Фье");
car = car.replace(/Хйе/g, "Хье");
car = car.replace(/Цйе/g, "Цье");
car = car.replace(/Чйе/g, "Чье");
car = car.replace(/Шйе/g, "Шье");
car = car.replace(/Щйе/g, "Щье");
car = car.replace(/БЙЕ/g, "БЬЕ");
car = car.replace(/ВЙЕ/g, "ВЬЕ");
car = car.replace(/ГЙЕ/g, "ГЬЕ");
car = car.replace(/ДЙЕ/g, "ДЬЕ");
car = car.replace(/ЖЙЕ/g, "ЖЬЕ");
car = car.replace(/ЗЙЕ/g, "ЗЬЕ");
car = car.replace(/КЙЕ/g, "КЬЕ");
car = car.replace(/ЛЙЕ/g, "ЛЬЕ");
car = car.replace(/МЙЕ/g, "МЬЕ");
car = car.replace(/НЙЕ/g, "НЬЕ");
car = car.replace(/ПЙЕ/g, "ПЬЕ");
car = car.replace(/РЙЕ/g, "РЬЕ");
car = car.replace(/СЙЕ/g, "СЬЕ");
car = car.replace(/ТЙЕ/g, "ТЬЕ");
car = car.replace(/ФЙЕ/g, "ФЬЕ");
car = car.replace(/ХЙЕ/g, "ХЬЕ");
car = car.replace(/ЦЙЕ/g, "ЦЬЕ");
car = car.replace(/ЧЙЕ/g, "ЧЬЕ");
car = car.replace(/ШЙЕ/g, "ШЬЕ");
car = car.replace(/ЩЙЕ/g, "ЩЬЕ");
document.transcription.text2.value=translit;
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
translit = translit.replace(/Ы/g, "Ъ");
car = car.replace(/Ы/g, "Ъ");
translit = translit.replace(/ы/g, "ъ");
car = car.replace(/ы/g, "ъ");

car = car.replace(/\u0028х1/g, "\u0028x1");
car = car.replace(/\u0028х2/g, "\u0028x2");
car = car.replace(/\u0028х3/g, "\u0028x3");
car = car.replace(/\u0028х4/g, "\u0028x4");
car = car.replace(/\u0028х5/g, "\u0028x5");
car = car.replace(/\u0028х6/g, "\u0028x6");
car = car.replace(/\u0028х7/g, "\u0028x7");
car = car.replace(/\u0028х8/g, "\u0028x8");
car = car.replace(/\u0028х9/g, "\u0028x9");
car = car.replace(/\u0028х0/g, "\u0028x0");
 
car = car.replace(/1х\u0029/g, "1x\u0029");
car = car.replace(/2х\u0029/g, "2x\u0029");
car = car.replace(/3х\u0029/g, "3x\u0029");
car = car.replace(/4х\u0029/g, "4x\u0029");
car = car.replace(/5х\u0029/g, "5x\u0029");
car = car.replace(/6х\u0029/g, "6x\u0029");
car = car.replace(/7х\u0029/g, "7x\u0029");
car = car.replace(/8х\u0029/g, "8x\u0029");
car = car.replace(/9х\u0029/g, "9x\u0029");
car = car.replace(/0х\u0029/g, "0x\u0029");

car = car.replace(/ъ̀/g, "ъ");
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/ѝ/g, "ì");
car = car.replace(/й/g, "j");
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
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "št");
car = car.replace(/ъ/g, "ǎ");
car = car.replace(/ь/g, "j");
car = car.replace(/ю/g, "ju");
car = car.replace(/я/g, "ja");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/Ѝ/g, "Ì");
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
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Št");
car = car.replace(/Ъ/g, "Ǎ");
car = car.replace(/Ь/g, "J");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");
car = car.replace(/BǍLGAR/g, "BǓLGAR");
car = car.replace(/Bǎlgar/g, "Bǔlgar");
car = car.replace(/bǎlgar/g, "bǔlgar");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}