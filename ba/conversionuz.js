﻿var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
translit = translit.replace(/қ/g, "ҡ");
car = car.replace(/қ/g, "ҡ");
translit = translit.replace(/Қ/g, "Ҡ");
car = car.replace(/Қ/g, "Ҡ");

car = car.replace(/ау/g, "аw");
car = car.replace(/яу/g, "яw");
car = car.replace(/ыу/g, "ыw");
car = car.replace(/оу/g, "оw");
car = car.replace(/уу/g, "уw");
car = car.replace(/юу/g, "юw");
car = car.replace(/еу/g, "еw");
car = car.replace(/эу/g, "эw");
car = car.replace(/әу/g, "әw");
car = car.replace(/иу/g, "иw");
car = car.replace(/өу/g, "өw");
car = car.replace(/үу/g, "үw");
car = car.replace(/аү/g, "аw");
car = car.replace(/яү/g, "яw");
car = car.replace(/ыү/g, "ыw");
car = car.replace(/оү/g, "оw");
car = car.replace(/уү/g, "уw");
car = car.replace(/юү/g, "юw");
car = car.replace(/еү/g, "еw");
car = car.replace(/эү/g, "эw");
car = car.replace(/әү/g, "әw");
car = car.replace(/иү/g, "иw");
car = car.replace(/өү/g, "өw");
car = car.replace(/үү/g, "үw");

car = car.replace(/Ау/g, "Аw");
car = car.replace(/Яу/g, "Яw");
car = car.replace(/Ыу/g, "Ыw");
car = car.replace(/Оу/g, "Оw");
car = car.replace(/Уу/g, "Уw");
car = car.replace(/Юу/g, "Юw");
car = car.replace(/Еу/g, "Еw");
car = car.replace(/Эу/g, "Эw");
car = car.replace(/Әу/g, "Әw");
car = car.replace(/Иу/g, "Иw");
car = car.replace(/Өу/g, "Өw");
car = car.replace(/Үу/g, "Үw");
car = car.replace(/Аү/g, "Аw");
car = car.replace(/Яү/g, "Яw");
car = car.replace(/Ыү/g, "Ыw");
car = car.replace(/Оү/g, "Оw");
car = car.replace(/Уү/g, "Уw");
car = car.replace(/Юү/g, "Юw");
car = car.replace(/Еү/g, "Еw");
car = car.replace(/Эү/g, "Эw");
car = car.replace(/Әү/g, "Әw");
car = car.replace(/Иү/g, "Иw");
car = car.replace(/Өү/g, "Өw");
car = car.replace(/Үү/g, "Үw");

car = car.replace(/АУ/g, "АW");
car = car.replace(/ЯУ/g, "ЯW");
car = car.replace(/ЫУ/g, "ЫW");
car = car.replace(/ОУ/g, "ОW");
car = car.replace(/УУ/g, "УW");
car = car.replace(/ЮУ/g, "ЮW");
car = car.replace(/ЕУ/g, "ЕW");
car = car.replace(/ЭУ/g, "ЭW");
car = car.replace(/ӘУ/g, "ӘW");
car = car.replace(/ИУ/g, "ИW");
car = car.replace(/ӨУ/g, "ӨW");
car = car.replace(/ҮУ/g, "ҮW");
car = car.replace(/АҮ/g, "АW");
car = car.replace(/ЯҮ/g, "ЯW");
car = car.replace(/ЫҮ/g, "ЫW");
car = car.replace(/ОҮ/g, "ОW");
car = car.replace(/УҮ/g, "УW");
car = car.replace(/ЮҮ/g, "ЮW");
car = car.replace(/ЕҮ/g, "ЕW");
car = car.replace(/ЭҮ/g, "ЭW");
car = car.replace(/ӘҮ/g, "ӘW");
car = car.replace(/ИҮ/g, "ИW");
car = car.replace(/ӨҮ/g, "ӨW");
car = car.replace(/ҮҮ/g, "ҮW");

car = car.replace(/ е/g, " yi");
car = car.replace(/\nе/g, "\nyi");
car = car.replace(/\rе/g, "\ryi");
car = car.replace(/^е/g, "yi");

car = car.replace(/ае/g, "аyi");
car = car.replace(/әе/g, "eyi");
car = car.replace(/ие/g, "иyi");
car = car.replace(/ые/g, "ыyi");
car = car.replace(/ее/g, "еyi");
car = car.replace(/эе/g, "эyi");
car = car.replace(/уе/g, "уyi");
car = car.replace(/ое/g, "оyi");
car = car.replace(/өе/g, "өyi");
car = car.replace(/ёе/g, "ёyi");
car = car.replace(/үе/g, "үyi");
car = car.replace(/йе/g, "йyi");
car = car.replace(/юе/g, "юyi");
car = car.replace(/яе/g, "яyi");

car = car.replace(/ Е/g, " Yi");
car = car.replace(/\nЕ/g, "\nYi");
car = car.replace(/\rЕ/g, "\rYi");
car = car.replace(/^Е/g, "Yi");

car = car.replace(/Ае/g, "Аyi");
car = car.replace(/Әе/g, "Eyi");
car = car.replace(/Ие/g, "Иyi");
car = car.replace(/Ые/g, "Ыyi");
car = car.replace(/Ее/g, "Еyi");
car = car.replace(/Эе/g, "Эyi");
car = car.replace(/Уе/g, "Уyi");
car = car.replace(/Ое/g, "Оyi");
car = car.replace(/Өе/g, "Өyi");
car = car.replace(/Ёе/g, "Ёyi");
car = car.replace(/Үе/g, "Үyi");
car = car.replace(/Йе/g, "Йyi");
car = car.replace(/Юе/g, "Юyi");
car = car.replace(/Яе/g, "Яyi");

car = car.replace(/АЕ/g, "АYÍ");
car = car.replace(/ӘЕ/g, "EYÍ");
car = car.replace(/ИЕ/g, "ИYÍ");
car = car.replace(/ЫЕ/g, "ЫYÍ");
car = car.replace(/ЕЕ/g, "ЕYÍ");
car = car.replace(/ЭЕ/g, "ЭYÍ");
car = car.replace(/УЕ/g, "УYÍ");
car = car.replace(/ОЕ/g, "ОYÍ");
car = car.replace(/ӨЕ/g, "ӨYÍ");
car = car.replace(/ЁЕ/g, "ЁYÍ");
car = car.replace(/ҮЕ/g, "ҮYÍ");
car = car.replace(/ЙЕ/g, "ЙYÍ");
car = car.replace(/ЮЕ/g, "ЮYÍ");
car = car.replace(/ЯЕ/g, "ЯYÍ");

car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "w");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ğ");
  car = car.replace(/д/g, "d");
  car = car.replace(/ҙ/g, "ż");
  car = car.replace(/е/g, "i");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "î");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/ҡ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/ҫ/g, "ṡ");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/щ/g, "şç");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "i");
  car = car.replace(/ә/g, "e");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "W");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ğ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Ҙ/g, "Ż");
  car = car.replace(/Е/g, "Í");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "Î");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Ҡ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Ҫ/g, "Ṡ");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Щ/g, "Şç");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "Í");
  car = car.replace(/Ә/g, "E");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
  car = car.replace(/»/g, "\u201d");
  car = car.replace(/«/g, "\u201c");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}