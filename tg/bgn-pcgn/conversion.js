﻿

var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ац/g, "атс");
  car = car.replace(/яц/g, "ятс");
  car = car.replace(/ец/g, "етс");
  car = car.replace(/иц/g, "итс");
  car = car.replace(/ӣц/g, "ӣтс");
  car = car.replace(/оц/g, "отс");
  car = car.replace(/ёц/g, "ётс");
  car = car.replace(/уц/g, "утс");
  car = car.replace(/юц/g, "ютс");
  car = car.replace(/ӯц/g, "ӯтс");
  car = car.replace(/Ац/g, "Атс");
  car = car.replace(/Яц/g, "Ятс");
  car = car.replace(/Ец/g, "Етс");
  car = car.replace(/Иц/g, "Итс");
  car = car.replace(/Ӣц/g, "Ӣтс");
  car = car.replace(/Оц/g, "Отс");
  car = car.replace(/Ёц/g, "Ётс");
  car = car.replace(/Уц/g, "Утс");
  car = car.replace(/Юц/g, "Ютс");
  car = car.replace(/Ӯц/g, "Ӯтс");
  car = car.replace(/АЦ/g, "АТС");
  car = car.replace(/ЯЦ/g, "ЯТС");
  car = car.replace(/ЕЦ/g, "ЕТС");
  car = car.replace(/ИЦ/g, "ИТС");
  car = car.replace(/ӢЦ/g, "ӢТС");
  car = car.replace(/ОЦ/g, "ОТС");
  car = car.replace(/ЁЦ/g, "ЁТС");
  car = car.replace(/УЦ/g, "УТС");
  car = car.replace(/ЮЦ/g, "ЮТС");
  car = car.replace(/ӮЦ/g, "ӮТС");

  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "gh");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "zh");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/ӣ/g, "í");
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
  car = car.replace(/ӯ/g, "ŭ");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "kh");
  car = car.replace(/ҳ/g, "h");
  car = car.replace(/ц/g, "s");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/ҷ/g, "j");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/щ/g, "sh");
  car = car.replace(/ъ/g, "’");
  car = car.replace(/ы/g, "i");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "ė");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Gh");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ж/g, "Zh");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "I");
  car = car.replace(/Ӣ/g, "Í");
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
  car = car.replace(/Ӯ/g, "Ŭ");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "Kh");
  car = car.replace(/Ҳ/g, "H");
  car = car.replace(/Ц/g, "S");
  car = car.replace(/Ч/g, "Ch");
  car = car.replace(/Ҷ/g, "J");
  car = car.replace(/Ш/g, "Sh");
  car = car.replace(/Щ/g, "Sh");
  car = car.replace(/Ъ/g, "’");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "Ė");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}