﻿//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/'/g, "ъ");
  car = car.replace(/ˈ/g, "ъ");
  car = car.replace(/’/g, "ъ");
  car = car.replace(/ʼ/g, "ъ");
  car = car.replace(/‘/g, "ъ");
  car = car.replace(/ʻ/g, "ъ");
  car = car.replace(/´/g, "ъ");
  car = car.replace(/`/g, "ъ");
  car = car.replace(/ʿ/g, "ъ");
  car = car.replace(/ʹ/g, "ъ");
  car = car.replace(/ˊ/g, "ъ");
  car = car.replace(/׳/g, "ъ");
  car = car.replace(/′/g, "ъ");
  car = car.replace(/ʽ/g, "ъ");
  car = car.replace(/ߵ/g, "ъ");
  car = car.replace(/՚/g, "ъ");
  car = car.replace(/ߴ/g, "ъ");
  car = car.replace(/᾿/g, "ъ");
  car = car.replace(/ՙ/g, "ъ");
  car = car.replace(/῾/g, "ъ");
  car = car.replace(/‛/g, "ъ");
  car = car.replace(/ʾ/g, "ъ");
  car = car.replace(/՛/g, "ъ");
  car = car.replace(/ˋ/g, "ъ");

  car = car.replace(/é/g, "ye");
  car = car.replace(/É/g, "Ye");
  car = car.replace(/á/g, "я");
  car = car.replace(/Á/g, "Я");
  car = car.replace(/ë/g, "ё");
  car = car.replace(/Ë/g, "Ё");
  car = car.replace(/ú/g, "ю");
  car = car.replace(/Ú/g, "Ю");
  car = car.replace(/ç/g, "ч");
  car = car.replace(/ğ/g, "ғ");
  car = car.replace(/ı/g, "и");
  car = car.replace(/ň/g, "нг");
  car = car.replace(/ñ/g, "нг");
  car = car.replace(/w/g, "ў");
  car = car.replace(/ö/g, "ў");
  car = car.replace(/ơ/g, "ў");
  car = car.replace(/ü/g, "u");
  car = car.replace(/ş/g, "ш");
  car = car.replace(/Ç/g, "Ч");
  car = car.replace(/Ğ/g, "Ғ");
  car = car.replace(/İ/g, "И");
  car = car.replace(/Ň/g, "НГ");
  car = car.replace(/Ñ/g, "НГ");
  car = car.replace(/W/g, "Ў");
  car = car.replace(/Ö/g, "Ў");
  car = car.replace(/Ơ/g, "Ў");
  car = car.replace(/Ü/g, "U");
  car = car.replace(/Ş/g, "Ш");
  
  car = car.replace(/бе/g, "бэ");
  car = car.replace(/ве/g, "вэ");
  car = car.replace(/ге/g, "гэ");
  car = car.replace(/ғе/g, "ғэ");
  car = car.replace(/де/g, "дэ");
  car = car.replace(/же/g, "жэ");
  car = car.replace(/зе/g, "зэ");
  car = car.replace(/ке/g, "кэ");
  car = car.replace(/қе/g, "қэ");
  car = car.replace(/ле/g, "лэ");
  car = car.replace(/ме/g, "мэ");
  car = car.replace(/не/g, "нэ");
  car = car.replace(/пе/g, "пэ");
  car = car.replace(/ре/g, "рэ");
  car = car.replace(/се/g, "сэ");
  car = car.replace(/те/g, "тэ");
  car = car.replace(/фе/g, "фэ");
  car = car.replace(/хе/g, "хэ");
  car = car.replace(/ҳе/g, "ҳэ");
  car = car.replace(/це/g, "цэ");
  car = car.replace(/че/g, "чэ");
  car = car.replace(/ше/g, "шэ");
  car = car.replace(/ще/g, "щэ");
  car = car.replace(/ъе/g, "ъэ");

  car = car.replace(/Бе/g, "Бэ");
  car = car.replace(/Ве/g, "Вэ");
  car = car.replace(/Ге/g, "Гэ");
  car = car.replace(/Ғе/g, "Ғэ");
  car = car.replace(/Де/g, "Дэ");
  car = car.replace(/Же/g, "Жэ");
  car = car.replace(/Зе/g, "Зэ");
  car = car.replace(/Ке/g, "Кэ");
  car = car.replace(/Қе/g, "Қэ");
  car = car.replace(/Ле/g, "Лэ");
  car = car.replace(/Ме/g, "Мэ");
  car = car.replace(/Не/g, "Нэ");
  car = car.replace(/Пе/g, "Пэ");
  car = car.replace(/Ре/g, "Рэ");
  car = car.replace(/Се/g, "Сэ");
  car = car.replace(/Те/g, "Тэ");
  car = car.replace(/Фе/g, "Фэ");
  car = car.replace(/Хе/g, "Хэ");
  car = car.replace(/Ҳе/g, "Ҳэ");
  car = car.replace(/Це/g, "Цэ");
  car = car.replace(/Че/g, "Чэ");
  car = car.replace(/Ше/g, "Шэ");
  car = car.replace(/Ще/g, "Щэ");
  car = car.replace(/Ъе/g, "Ъэ");

  car = car.replace(/БЕ/g, "БЭ");
  car = car.replace(/ВЕ/g, "ВЭ");
  car = car.replace(/ГЕ/g, "ГЭ");
  car = car.replace(/ҒЕ/g, "ҒЭ");
  car = car.replace(/ДЕ/g, "ДЭ");
  car = car.replace(/ЖЕ/g, "ЖЭ");
  car = car.replace(/ЗЕ/g, "ЗЭ");
  car = car.replace(/КЕ/g, "КЭ");
  car = car.replace(/ҚЕ/g, "ҚЭ");
  car = car.replace(/ЛЕ/g, "ЛЭ");
  car = car.replace(/МЕ/g, "МЭ");
  car = car.replace(/НЕ/g, "НЭ");
  car = car.replace(/ПЕ/g, "ПЭ");
  car = car.replace(/РЕ/g, "РЭ");
  car = car.replace(/СЕ/g, "СЭ");
  car = car.replace(/ТЕ/g, "ТЭ");
  car = car.replace(/ФЕ/g, "ФЭ");
  car = car.replace(/ХЕ/g, "ХЭ");
  car = car.replace(/ҲЕ/g, "ҲЭ");
  car = car.replace(/ЦЕ/g, "ЦЭ");
  car = car.replace(/ЧЕ/g, "ЧЭ");
  car = car.replace(/ШЕ/g, "ШЭ");
  car = car.replace(/ЩЕ/g, "ЩЭ");
  car = car.replace(/ЪЕ/g, "ЪЭ");

  car = car.replace(/бйе/g, "бйэ");
  car = car.replace(/вйе/g, "вйэ");
  car = car.replace(/гйе/g, "гйэ");
  car = car.replace(/ғйе/g, "ғйэ");
  car = car.replace(/дйе/g, "дйэ");
  car = car.replace(/жйе/g, "жйэ");
  car = car.replace(/зйе/g, "зйэ");
  car = car.replace(/кйе/g, "кйэ");
  car = car.replace(/қйе/g, "қйэ");
  car = car.replace(/лйе/g, "лйэ");
  car = car.replace(/мйе/g, "мйэ");
  car = car.replace(/нйе/g, "нйэ");
  car = car.replace(/пйе/g, "пйэ");
  car = car.replace(/рйе/g, "рйэ");
  car = car.replace(/сйе/g, "сйэ");
  car = car.replace(/тйе/g, "тйэ");
  car = car.replace(/фйе/g, "фйэ");
  car = car.replace(/хйе/g, "хйэ");
  car = car.replace(/ҳйе/g, "ҳйэ");
  car = car.replace(/цйе/g, "цйэ");
  car = car.replace(/чйе/g, "чйэ");
  car = car.replace(/шйе/g, "шйэ");
  car = car.replace(/щйе/g, "щйэ");
  car = car.replace(/ъйе/g, "ъйэ");

  car = car.replace(/Бйе/g, "Бйэ");
  car = car.replace(/Вйе/g, "Вйэ");
  car = car.replace(/Гйе/g, "Гйэ");
  car = car.replace(/Ғйе/g, "Ғйэ");
  car = car.replace(/Дйе/g, "Дйэ");
  car = car.replace(/Жйе/g, "Жйэ");
  car = car.replace(/Зйе/g, "Зйэ");
  car = car.replace(/Кйе/g, "Кйэ");
  car = car.replace(/Қйе/g, "Қйэ");
  car = car.replace(/Лйе/g, "Лйэ");
  car = car.replace(/Мйе/g, "Мйэ");
  car = car.replace(/Нйе/g, "Нйэ");
  car = car.replace(/Пйе/g, "Пйэ");
  car = car.replace(/Рйе/g, "Рйэ");
  car = car.replace(/Сйе/g, "Сйэ");
  car = car.replace(/Тйе/g, "Тйэ");
  car = car.replace(/Фйе/g, "Фйэ");
  car = car.replace(/Хйе/g, "Хйэ");
  car = car.replace(/Ҳйе/g, "Ҳйэ");
  car = car.replace(/Цйе/g, "Цйэ");
  car = car.replace(/Чйе/g, "Чйэ");
  car = car.replace(/Шйе/g, "Шйэ");
  car = car.replace(/Щйе/g, "Щйэ");
  car = car.replace(/Ъйе/g, "Ъйэ");

  car = car.replace(/БЙЕ/g, "БЙЭ");
  car = car.replace(/ВЙЕ/g, "ВЙЭ");
  car = car.replace(/ГЙЕ/g, "ГЙЭ");
  car = car.replace(/ҒЙЕ/g, "ҒЙЭ");
  car = car.replace(/ДЙЕ/g, "ДЙЭ");
  car = car.replace(/ЖЙЕ/g, "ЖЙЭ");
  car = car.replace(/ЗЙЕ/g, "ЗЙЭ");
  car = car.replace(/КЙЕ/g, "КЙЭ");
  car = car.replace(/ҚЙЕ/g, "ҚЙЭ");
  car = car.replace(/ЛЙЕ/g, "ЛЙЭ");
  car = car.replace(/МЙЕ/g, "МЙЭ");
  car = car.replace(/НЙЕ/g, "НЙЭ");
  car = car.replace(/ПЙЕ/g, "ПЙЭ");
  car = car.replace(/РЙЕ/g, "РЙЭ");
  car = car.replace(/СЙЕ/g, "СЙЭ");
  car = car.replace(/ТЙЕ/g, "ТЙЭ");
  car = car.replace(/ФЙЕ/g, "ФЙЭ");
  car = car.replace(/ХЙЕ/g, "ХЙЭ");
  car = car.replace(/ҲЙЕ/g, "ҲЙЭ");
  car = car.replace(/ЦЙЕ/g, "ЦЙЭ");
  car = car.replace(/ЧЙЕ/g, "ЧЙЭ");
  car = car.replace(/ШЙЕ/g, "ШЙЭ");
  car = car.replace(/ЩЙЕ/g, "ЩЙЭ");
  car = car.replace(/ЪЙЕ/g, "ЪЙЭ");

  car = car.replace(/сҳ/g, "s’h");
  car = car.replace(/Сҳ/g, "S’h");
  car = car.replace(/СҲ/g, "S’H");

  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "g‘");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "ye");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/о/g, "o");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ў/g, "o‘");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/ҳ/g, "h");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/щ/g, "shch");
  car = car.replace(/ь/g, "");
  car = car.replace(/ъ/g, "’");
  car = car.replace(/э/g, "e");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");

  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "G‘");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "Ye");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "I");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/О/g, "O");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ў/g, "O‘");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Ҳ/g, "H");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/Щ/g, "Shch");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Ъ/g, "’");
  car = car.replace(/Э/g, "E");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
  car = car.replace(/‘’/g, "‘");
  car = car.replace(/g’/g, "g‘");
  car = car.replace(/G’/g, "G‘");
  car = car.replace(/o’/g, "o‘");
  car = car.replace(/O’/g, "O‘");  
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}