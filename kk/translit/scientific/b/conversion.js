﻿var car;
function latcyr () {
car = document.transcription.text2.value;
translit = document.transcription.text2.value;
  translit = translit.replace(/´/g, "ʹ");
  translit = translit.replace(/´´/g, "ʺ");
  translit = translit.replace(/ʹ´/g, "ʺ");
  translit = translit.replace(/`/g, "ʹ");
  translit = translit.replace(/``/g, "ʺ");
  translit = translit.replace(/ʹ`/g, "ʺ");
  translit = translit.replace(/ʹʹ/g, "ʺ"); 
  translit = translit.replace(/ğ/g, "ǧ"); 
  translit = translit.replace(/Ğ/g, "Ǧ");
  translit = translit.replace(/î/g, "ī");
  translit = translit.replace(/Î/g, "Ī");
  car = car.replace(/´/g, "ʹ");
  car = car.replace(/´´/g, "ʺ");
  car = car.replace(/ʹ´/g, "ʺ");
  car = car.replace(/`/g, "ʹ");
  car = car.replace(/``/g, "ʺ");
  car = car.replace(/ʹ`/g, "ʺ");
  car = car.replace(/ʹʹ/g, "ʺ");
  car = car.replace(/ja/g, "я");
  car = car.replace(/jo/g, "ё");
  car = car.replace(/jū/g, "ю"); 
  car = car.replace(/jw/g, "ю");
  car = car.replace(/ś/g, "щ");
  car = car.replace(/Ja/g, "Я");
  car = car.replace(/Jo/g, "Ё");
  car = car.replace(/Jū/g, "ю"); 
  car = car.replace(/Jw/g, "Ю");
  car = car.replace(/JA/g, "Я");
  car = car.replace(/JO/g, "Ё");
  car = car.replace(/JŪ/g, "Ю"); 
  car = car.replace(/JW/g, "Ю");
  car = car.replace(/Ś/g, "Щ");
  car = car.replace(/a/g, "а");
  car = car.replace(/ä/g, "ә");
  car = car.replace(/b/g, "б");
  car = car.replace(/v/g, "в");
  car = car.replace(/g/g, "г");
  car = car.replace(/ǧ/g, "ғ");
  car = car.replace(/d/g, "д");
  car = car.replace(/e/g, "е");
  car = car.replace(/ž/g, "ж");
  car = car.replace(/z/g, "з");
  car = car.replace(/ī/g, "и");
  car = car.replace(/j/g, "й");
  car = car.replace(/ĵ/g, "й");
  car = car.replace(/k/g, "к");
  car = car.replace(/q/g, "қ");
  car = car.replace(/l/g, "л");
  car = car.replace(/m/g, "м");
  car = car.replace(/n/g, "н");
  car = car.replace(/ň/g, "ң");
  car = car.replace(/o/g, "о");
  car = car.replace(/ö/g, "ө");
  car = car.replace(/p/g, "п");
  car = car.replace(/r/g, "р");
  car = car.replace(/s/g, "с");
  car = car.replace(/t/g, "т");
  car = car.replace(/ū/g, "у"); 
  car = car.replace(/w/g, "у");
  car = car.replace(/u/g, "ұ");
  car = car.replace(/ü/g, "ү");
  car = car.replace(/f/g, "ф");
  car = car.replace(/ħ/g, "х");
  car = car.replace(/h/g, "һ");
  car = car.replace(/c/g, "ц");
  car = car.replace(/č/g, "ч");
  car = car.replace(/š/g, "ш");
  car = car.replace(/ʺ/g, "ъ");
  car = car.replace(/y/g, "ы");
  car = car.replace(/i/g, "і");
  car = car.replace(/ʹ/g, "ь");
  car = car.replace(/é/g, "э");
  car = car.replace(/A/g, "А");
  car = car.replace(/Ä/g, "Ә");
  car = car.replace(/B/g, "Б");
  car = car.replace(/V/g, "В");
  car = car.replace(/G/g, "Г");
  car = car.replace(/Ǧ/g, "Ғ");
  car = car.replace(/D/g, "Д");
  car = car.replace(/E/g, "Е");
  car = car.replace(/Ž/g, "Ж");
  car = car.replace(/Z/g, "З");
  car = car.replace(/Ī/g, "И");
  car = car.replace(/J/g, "Й");
  car = car.replace(/Ĵ/g, "Й");
  car = car.replace(/K/g, "К");
  car = car.replace(/Q/g, "Қ");
  car = car.replace(/L/g, "Л");
  car = car.replace(/M/g, "М");
  car = car.replace(/N/g, "Н");
  car = car.replace(/Ň/g, "Ң");
  car = car.replace(/O/g, "О");
  car = car.replace(/Ö/g, "Ө");
  car = car.replace(/P/g, "П");
  car = car.replace(/R/g, "Р");
  car = car.replace(/S/g, "С");
  car = car.replace(/T/g, "Т");
  car = car.replace(/Ū/g, "У");  
  car = car.replace(/W/g, "У");
  car = car.replace(/U/g, "Ұ");
  car = car.replace(/Ü/g, "Ү");
  car = car.replace(/F/g, "Ф");
  car = car.replace(/Ħ/g, "Х");
  car = car.replace(/H/g, "Һ");
  car = car.replace(/C/g, "Ц");
  car = car.replace(/Č/g, "Ч");
  car = car.replace(/Š/g, "Ш");
  car = car.replace(/Y/g, "Ы");
  car = car.replace(/I/g, "І");
  car = car.replace(/É/g, "Э");
  car = car.replace(/\u201c/g, "«");
  car = car.replace(/\u201d/g, "»");
   document.transcription.text2.value=translit;
   document.transcription.text1.value=car;
}
function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

  translit = translit.replace(/ə/g, "ә");
  translit = translit.replace(/Ə/g, "Ә");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/Ə/g, "Ä");
  
  car = car.replace(/Я(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙА$1");
  car = car.replace(/Ё(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙО$1");
  car = car.replace(/Ю(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)/g, "ЙУ$1");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Я/g, "$1ЙА");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ё/g, "$1ЙО");
  car = car.replace(/(А|Ә|Б|В|Г|Ғ|Д|Е|Ё|Ж|З|И|Й|К|Қ|Л|М|Н|Ң|О|Ө|П|Р|С|Т|У|Ұ|Ү|Ф|Х|Һ|Ц|Ч|Ш|Щ|Ъ|Ы|І|Ь|Э|Я|Ю)Ю/g, "$1ЙУ");
  car = car.replace(/я/g, "йа");
  car = car.replace(/ё/g, "йо");
  car = car.replace(/ю/g, "йу");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/Ё/g, "Йо");
  car = car.replace(/Ю/g, "Йу");
  
  car = car.replace(/бу/g, "бў");
  car = car.replace(/ву/g, "вў");
  car = car.replace(/гу/g, "гў");
  car = car.replace(/ғу/g, "ғў");
  car = car.replace(/ду/g, "дў");
  car = car.replace(/жу/g, "жў");
  car = car.replace(/зу/g, "зў");
  car = car.replace(/иу/g, "иў");
  car = car.replace(/йу/g, "йў");
  car = car.replace(/ку/g, "кў");
  car = car.replace(/қу/g, "қў");
  car = car.replace(/лу/g, "лў");
  car = car.replace(/му/g, "мў");
  car = car.replace(/ну/g, "нў");
  car = car.replace(/ңу/g, "ңў");
  car = car.replace(/пу/g, "пў");
  car = car.replace(/ру/g, "рў");
  car = car.replace(/су/g, "сў");
  car = car.replace(/ту/g, "тў");
  car = car.replace(/уу/g, "уў");
  car = car.replace(/фу/g, "фў");
  car = car.replace(/ху/g, "хў");
  car = car.replace(/һу/g, "һў");
  car = car.replace(/чу/g, "чў");
  car = car.replace(/шу/g, "шў");
  car = car.replace(/щу/g, "щў");
  car = car.replace(/ъу/g, "ъў");
  car = car.replace(/ьу/g, "ьў");
  car = car.replace(/юу/g, "юў");
  car = car.replace(/Бу/g, "Бў");
  car = car.replace(/Ву/g, "Вў");
  car = car.replace(/Гу/g, "Гў");
  car = car.replace(/Ғу/g, "Ғў");
  car = car.replace(/Ду/g, "Дў");
  car = car.replace(/Жу/g, "Жў");
  car = car.replace(/Зу/g, "Зў");
  car = car.replace(/Иу/g, "Иў");
  car = car.replace(/Йу/g, "Йў");
  car = car.replace(/Ку/g, "Кў");
  car = car.replace(/Қу/g, "Қў");
  car = car.replace(/Лу/g, "Лў");
  car = car.replace(/Му/g, "Мў");
  car = car.replace(/Ну/g, "Нў");
  car = car.replace(/Ңу/g, "Ңў");
  car = car.replace(/Пу/g, "Пў");
  car = car.replace(/Ру/g, "Рў");
  car = car.replace(/Су/g, "Сў");
  car = car.replace(/Ту/g, "Тў");
  car = car.replace(/Уу/g, "Уў");
  car = car.replace(/Фу/g, "Фў");
  car = car.replace(/Ху/g, "Хў");
  car = car.replace(/Һу/g, "Һў");
  car = car.replace(/Чу/g, "Чў");
  car = car.replace(/Шу/g, "Шў");
  car = car.replace(/Щу/g, "Щў");
  car = car.replace(/Ъу/g, "Ъў");
  car = car.replace(/Ьу/g, "Ьў");
  car = car.replace(/БУ/g, "БЎ");
  car = car.replace(/ВУ/g, "ВЎ");
  car = car.replace(/ГУ/g, "ГЎ");
  car = car.replace(/ҒУ/g, "ҒЎ");
  car = car.replace(/ДУ/g, "ДЎ");
  car = car.replace(/ЖУ/g, "ЖЎ");
  car = car.replace(/ЗУ/g, "ЗЎ");
  car = car.replace(/ИУ/g, "ИЎ");
  car = car.replace(/ЙУ/g, "ЙЎ");
  car = car.replace(/КУ/g, "КЎ");
  car = car.replace(/ҚУ/g, "ҚЎ");
  car = car.replace(/ЛУ/g, "ЛЎ");
  car = car.replace(/МУ/g, "МЎ");
  car = car.replace(/НУ/g, "НЎ");
  car = car.replace(/ҢУ/g, "ҢЎ");
  car = car.replace(/ПУ/g, "ПЎ");
  car = car.replace(/РУ/g, "РЎ");
  car = car.replace(/СУ/g, "СЎ");
  car = car.replace(/ТУ/g, "ТЎ");
  car = car.replace(/УУ/g, "УЎ");
  car = car.replace(/ФУ/g, "ФЎ");
  car = car.replace(/ХУ/g, "ХЎ");
  car = car.replace(/ҺУ/g, "ҺЎ");
  car = car.replace(/ЧУ/g, "ЧЎ");
  car = car.replace(/ШУ/g, "ШЎ");
  car = car.replace(/ЩУ/g, "ЩЎ");
  car = car.replace(/ЪУ/g, "ЪЎ");
  car = car.replace(/ЬУ/g, "ЬЎ");
  car = car.replace(/уб/g, "ўб");
  car = car.replace(/ув/g, "ўв");
  car = car.replace(/уг/g, "ўг");
  car = car.replace(/уғ/g, "ўғ");
  car = car.replace(/уд/g, "ўд");
  car = car.replace(/уж/g, "ўж");
  car = car.replace(/уз/g, "ўз");
  car = car.replace(/уй/g, "ўй");
  car = car.replace(/ук/g, "ўк");
  car = car.replace(/уқ/g, "ўқ");
  car = car.replace(/ул/g, "ўл");
  car = car.replace(/ум/g, "ўм");
  car = car.replace(/ун/g, "ўн");
  car = car.replace(/уң/g, "ўң");
  car = car.replace(/уп/g, "ўп");
  car = car.replace(/ур/g, "ўр");
  car = car.replace(/ус/g, "ўс");
  car = car.replace(/ут/g, "ўт");
  car = car.replace(/уф/g, "ўф");
  car = car.replace(/ух/g, "ўх");
  car = car.replace(/уһ/g, "ўһ");
  car = car.replace(/уч/g, "ўч");
  car = car.replace(/уш/g, "ўш");
  car = car.replace(/ущ/g, "ўщ");
  car = car.replace(/ую/g, "ўю");
  car = car.replace(/Уб/g, "Ўб");
  car = car.replace(/Ув/g, "Ўв");
  car = car.replace(/Уг/g, "Ўг");
  car = car.replace(/Уғ/g, "Ўғ");
  car = car.replace(/Уд/g, "Ўд");
  car = car.replace(/Уж/g, "Ўж");
  car = car.replace(/Уз/g, "Ўз");
  car = car.replace(/Уй/g, "Ўй");
  car = car.replace(/Ук/g, "Ўк");
  car = car.replace(/Уқ/g, "Ўқ");
  car = car.replace(/Ул/g, "Ўл");
  car = car.replace(/Ум/g, "Ўм");
  car = car.replace(/Ун/g, "Ўн");
  car = car.replace(/Уң/g, "Ўң");
  car = car.replace(/Уп/g, "Ўп");
  car = car.replace(/Ур/g, "Ўр");
  car = car.replace(/Ус/g, "Ўс");
  car = car.replace(/Ут/g, "Ўт");
  car = car.replace(/Уф/g, "Ўф");
  car = car.replace(/Ух/g, "Ўх");
  car = car.replace(/Уһ/g, "Ўһ");
  car = car.replace(/Уч/g, "Ўч");
  car = car.replace(/Уш/g, "Ўш");
  car = car.replace(/Ущ/g, "Ўщ");
  car = car.replace(/УБ/g, "ЎБ");
  car = car.replace(/УВ/g, "ЎВ");
  car = car.replace(/УГ/g, "ЎГ");
  car = car.replace(/УҒ/g, "ЎҒ");
  car = car.replace(/УД/g, "ЎД");
  car = car.replace(/УЖ/g, "ЎЖ");
  car = car.replace(/УЗ/g, "ЎЗ");
  car = car.replace(/УЙ/g, "ЎЙ");
  car = car.replace(/УК/g, "ЎК");
  car = car.replace(/УҚ/g, "ЎҚ");
  car = car.replace(/УЛ/g, "ЎЛ");
  car = car.replace(/УМ/g, "ЎМ");
  car = car.replace(/УН/g, "ЎН");
  car = car.replace(/УҢ/g, "ЎҢ");
  car = car.replace(/УП/g, "ЎП");
  car = car.replace(/УР/g, "ЎР");
  car = car.replace(/УС/g, "ЎС");
  car = car.replace(/УТ/g, "ЎТ");
  car = car.replace(/УФ/g, "ЎФ");
  car = car.replace(/УХ/g, "ЎХ");
  car = car.replace(/УҺ/g, "ЎҺ");
  car = car.replace(/УЧ/g, "ЎЧ");
  car = car.replace(/УШ/g, "ЎШ");
  car = car.replace(/УЩ/g, "ЎЩ");
  car = car.replace(/аў/g, "ау");
  car = car.replace(/яў/g, "яу");
  car = car.replace(/еў/g, "еу");
  car = car.replace(/эў/g, "эу");
  car = car.replace(/әў/g, "әу");
  car = car.replace(/ыў/g, "ыу");
  car = car.replace(/іў/g, "иу");
  car = car.replace(/оў/g, "оу");
  car = car.replace(/ёў/g, "ёу");
  car = car.replace(/өў/g, "өу");
  car = car.replace(/ұў/g, "ұу");
  car = car.replace(/үў/g, "үу");
  car = car.replace(/Аў/g, "Ау");
  car = car.replace(/Яў/g, "Яу");
  car = car.replace(/Еў/g, "Еу");
  car = car.replace(/Эў/g, "Эу");
  car = car.replace(/Әў/g, "Әу");
  car = car.replace(/Ыў/g, "Ыу");
  car = car.replace(/Іў/g, "Иу");
  car = car.replace(/Оў/g, "Оу");
  car = car.replace(/Ёў/g, "Ёу");
  car = car.replace(/Өў/g, "Өу");
  car = car.replace(/Ұў/g, "Ұу");
  car = car.replace(/Үў/g, "Үу");
  car = car.replace(/АЎ/g, "АУ");
  car = car.replace(/ЯЎ/g, "ЯУ");
  car = car.replace(/ЕЎ/g, "ЕУ");
  car = car.replace(/ЭЎ/g, "ЭУ");
  car = car.replace(/ӘЎ/g, "ӘУ");
  car = car.replace(/ЫЎ/g, "ЫУ");
  car = car.replace(/ІЎ/g, "ИУ");
  car = car.replace(/ОЎ/g, "ОУ");
  car = car.replace(/ЁЎ/g, "ЁУ");
  car = car.replace(/ӨЎ/g, "ӨУ");
  car = car.replace(/ҰЎ/g, "ҰУ");
  car = car.replace(/ҮЎ/g, "ҮУ");
  car = car.replace(/АЎ/g, "АУ");
  car = car.replace(/ЯЎ/g, "ЯУ");
  car = car.replace(/ЕЎ/g, "ЕУ");
  car = car.replace(/ЭЎ/g, "ЭУ");
  car = car.replace(/ӘЎ/g, "ӘУ");
  car = car.replace(/ЫЎ/g, "ЫУ");
  car = car.replace(/ІЎ/g, "ИУ");
  car = car.replace(/ОЎ/g, "ОУ");
  car = car.replace(/ЁЎ/g, "ЁУ");
  car = car.replace(/ӨЎ/g, "ӨУ");
  car = car.replace(/ҰЎ/g, "ҰУ");
  car = car.replace(/ҮЎ/g, "ҮУ");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/ә/g, "ä");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "ǧ");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ж/g, "ž");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "ī");
  car = car.replace(/й/g, "j");
  car = car.replace(/к/g, "k");
  car = car.replace(/қ/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ň");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/ў/g, "ū");
  car = car.replace(/у/g, "w");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/ц/g, "c");
  car = car.replace(/ч/g, "ć");
  car = car.replace(/ш/g, "š");
  car = car.replace(/щ/g, "ś");
  car = car.replace(/ъ/g, "");
  car = car.replace(/ы/g, "y");
  car = car.replace(/і/g, "i");
  car = car.replace(/ь/g, "");
  car = car.replace(/э/g, "é");
  car = car.replace(/А/g, "A");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Ǧ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ж/g, "Ž");
  car = car.replace(/З/g, "Z");
  car = car.replace(/И/g, "Ī");
  car = car.replace(/Й/g, "J");
  car = car.replace(/К/g, "K");
  car = car.replace(/Қ/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ň");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/Ў/g, "Ū");
  car = car.replace(/У/g, "W");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/Ц/g, "C");
  car = car.replace(/Ч/g, "Ć");
  car = car.replace(/Ш/g, "Š");
  car = car.replace(/Щ/g, "Ś");
  car = car.replace(/Ъ/g, "");
  car = car.replace(/Ы/g, "Y");
  car = car.replace(/І/g, "I");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Э/g, "É");
  
  car = car.replace(/«/g, "\u201c");
  car = car.replace(/»/g, "\u201d");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
