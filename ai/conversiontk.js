//  copyright lexilogos.com
var car;
var translit;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;

translit = translit.replace(/ö/g, "ӧ");
translit = translit.replace(/Ö/g, "Ӧ");
translit = translit.replace(/ÿ/g, "ӱ");
translit = translit.replace(/Ÿ/g, "Ӱ");
translit = translit.replace(/j/g, "ј");
translit = translit.replace(/J/g, "Ј");

car = car.replace(/ö/g, "ӧ");
car = car.replace(/Ö/g, "Ӧ");
car = car.replace(/ÿ/g, "ӱ");
car = car.replace(/Ÿ/g, "Ӱ");
car = car.replace(/j/g, "ј");
car = car.replace(/J/g, "Ј");

car = car.replace(/ е/g, " ye");
car = car.replace(/\nе/g, "\nye");
car = car.replace(/\rе/g, "\rye");
car = car.replace(/^е/g, "ye");

car = car.replace(/ае/g, "аye");
car = car.replace(/ие/g, "иye");
car = car.replace(/ые/g, "ыye");
car = car.replace(/ее/g, "еye");
car = car.replace(/эе/g, "эye");
car = car.replace(/уе/g, "уye");
car = car.replace(/ое/g, "оye");
car = car.replace(/ӧе/g, "ӧye");
car = car.replace(/ёе/g, "ёye");
car = car.replace(/ӱе/g, "ӱye");
car = car.replace(/йе/g, "йye");
car = car.replace(/юе/g, "юye");
car = car.replace(/яе/g, "яye");
car = car.replace(/ье/g, "ye");

car = car.replace(/ Е/g, " Ye");
car = car.replace(/\nЕ/g, "\nYe");
car = car.replace(/\rЕ/g, "\rYe");
car = car.replace(/^Е/g, "Ye");

car = car.replace(/Ае/g, "Аye");
car = car.replace(/Ие/g, "Иye");
car = car.replace(/Ые/g, "Ыye");
car = car.replace(/Ее/g, "Еye");
car = car.replace(/Эе/g, "Эye");
car = car.replace(/Уе/g, "Уye");
car = car.replace(/Ое/g, "Оye");
car = car.replace(/Ӧе/g, "Ӧye");
car = car.replace(/Ёе/g, "Ёye");
car = car.replace(/Ӱе/g, "Ӱye");
car = car.replace(/Йе/g, "Йye");
car = car.replace(/Юе/g, "Юye");
car = car.replace(/Яе/g, "Яye");
car = car.replace(/Ье/g, "Ye");

car = car.replace(/АЕ/g, "АYE");
car = car.replace(/ИЕ/g, "ИYE");
car = car.replace(/ЫЕ/g, "ЫYE");
car = car.replace(/ЕЕ/g, "ЕYE");
car = car.replace(/ЭЕ/g, "ЭYE");
car = car.replace(/УЕ/g, "УYE");
car = car.replace(/ОЕ/g, "ОYE");
car = car.replace(/ӦЕ/g, "ӦYE");
car = car.replace(/ЁЕ/g, "ЁYE");
car = car.replace(/ӰЕ/g, "ӰYE");
car = car.replace(/ЙЕ/g, "ЙYE");
car = car.replace(/ЮЕ/g, "ЮYE");
car = car.replace(/ЯЕ/g, "ЯYE");
car = car.replace(/ЬЕ/g, "YE");

car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/ж/g, "j");
  car = car.replace(/ј/g, "c");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ҥ/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ӧ/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ӱ/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/щ/g, "şç");
  car = car.replace(/ъ/g, "ʼ");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "e");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/Ј/g, "C");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "İ");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ҥ/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ӧ/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ӱ/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Щ/g, "Şç");
  car = car.replace(/Ъ/g, "ʼ");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "E");
  car = car.replace(/Ю/g, "Yu");
  car = car.replace(/Я/g, "Ya");
  document.transcription.text1.value=translit;
  document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}