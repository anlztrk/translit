﻿
var car;
var translit;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
  translit = translit.replace(/\u2018/g, "\u0027");
  translit = translit.replace(/\u2019/g, "\u0027");
  translit = translit.replace(/\u02bb/g, "\u0027");
  translit = translit.replace(/\u02bc/g, "\u0027");
  translit = translit.replace(/\u0060/g, "\u0027");
  translit = translit.replace(/\u00b4/g, "\u0027");
  translit = translit.replace(/o\u0027/g, "o\u02bb");
  translit = translit.replace(/g\u0027/g, "g\u02bb");
  translit = translit.replace(/O\u0027/g, "O\u02bb");
  translit = translit.replace(/G\u0027/g, "G\u02bb");
  translit = translit.replace(/\u0027/g, "\u02bc");
    car = car.replace(/ӯ/g, "ў");
  car = car.replace(/Ӯ/g, "Ў");
  car = car.replace(/ë/g, "ё");
  car = car.replace(/Ë/g, "Ё");
  car = car.replace(/<</g, "\u201e");
  car = car.replace(/>>/g, "\u201c");

  car = car.replace(/сентябр/g, "сентабр");
  car = car.replace(/Сентябр/g, "Сентабр");
  car = car.replace(/СЕНТЯБР/g, "СЕНТАБР");
  car = car.replace(/октябр/g, "октабр");
  car = car.replace(/Октябр/g, "Октабр");
  car = car.replace(/ОКТЯБР/g, "ОКТАБР");
  
  car = car.replace(/ы/g, "и");
  car = car.replace(/Ы/g, "И");
  
  car = car.replace(/ац/g, "атс");
  car = car.replace(/яц/g, "ятс");
  car = car.replace(/эц/g, "этс");
  car = car.replace(/ец/g, "етс");
  car = car.replace(/иц/g, "итс");
  car = car.replace(/оц/g, "отс");
  car = car.replace(/ёц/g, "ётс");
  car = car.replace(/уц/g, "утс");
  car = car.replace(/юц/g, "ютс");
  car = car.replace(/ўц/g, "ўтс");
  car = car.replace(/Ац/g, "Атс");
  car = car.replace(/Яц/g, "Ятс");
  car = car.replace(/Эц/g, "Этс");
  car = car.replace(/Ец/g, "Етс");
  car = car.replace(/Иц/g, "Итс");
  car = car.replace(/Оц/g, "Отс");
  car = car.replace(/Ёц/g, "Ётс");
  car = car.replace(/Уц/g, "Утс");
  car = car.replace(/Юц/g, "Ютс");
  car = car.replace(/Ўц/g, "Ўтс");
  car = car.replace(/АЦ/g, "АТС");
  car = car.replace(/ЯЦ/g, "ЯТС");
  car = car.replace(/ЭЦ/g, "ЭТС");
  car = car.replace(/ЕЦ/g, "ЕТС");
  car = car.replace(/ИЦ/g, "ИТС");
  car = car.replace(/ОЦ/g, "ОТС");
  car = car.replace(/ЁЦ/g, "ЁТС");
  car = car.replace(/УЦ/g, "УТС");
  car = car.replace(/ЮЦ/g, "ЮТС");
  car = car.replace(/ЎЦ/g, "ЎТС");
  car = car.replace(/ц/g, "с");
  car = car.replace(/Ц/g, "С");

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
  car = car.replace(/че/g, "чэ");
  car = car.replace(/ше/g, "шэ");
  car = car.replace(/ще/g, "щэ");

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
  car = car.replace(/Че/g, "Чэ");
  car = car.replace(/Ше/g, "Шэ");
  car = car.replace(/Ще/g, "Щэ");

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
  car = car.replace(/ЧЕ/g, "ЧЭ");
  car = car.replace(/ШЕ/g, "ШЭ");
  car = car.replace(/ЩЕ/g, "ЩЭ");

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
  car = car.replace(/чйе/g, "чйэ");
  car = car.replace(/шйе/g, "шйэ");
  car = car.replace(/щйе/g, "щйэ");

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
  car = car.replace(/Чйе/g, "Чйэ");
  car = car.replace(/Шйе/g, "Шйэ");
  car = car.replace(/Щйе/g, "Щйэ");

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
  car = car.replace(/ЧЙЕ/g, "ЧЙЭ");
  car = car.replace(/ШЙЕ/g, "ШЙЭ");
  car = car.replace(/ЩЙЕ/g, "ЩЙЭ");

  car = car.replace(/сҳ/g, "сʼҳ");
  car = car.replace(/Сҳ/g, "Сʼҳ");
  car = car.replace(/СҲ/g, "СʼҲ");

  car = car.replace(/Ю/g, "Йу");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/Е/g, "Йэ");
  car = car.replace(/Ё/g, "Йо");
  car = car.replace(/Щ/g, "Шч");
  car = car.replace(/Ш/g, "Сҳ");
  car = car.replace(/Ч/g, "Cҳ");
  
  car = car.replace(/уА/g, "УА");
  car = car.replace(/уБ/g, "УБ");
  car = car.replace(/уВ/g, "УВ");
  car = car.replace(/уГ/g, "УГ");
  car = car.replace(/уҒ/g, "УҒ");
  car = car.replace(/уД/g, "УД");
  car = car.replace(/уЖ/g, "УЖ");
  car = car.replace(/уЗ/g, "УЗ");
  car = car.replace(/уИ/g, "УИ");
  car = car.replace(/уЙ/g, "УЙ");
  car = car.replace(/уК/g, "УК");
  car = car.replace(/уҚ/g, "УҚ");
  car = car.replace(/уЛ/g, "УЛ");
  car = car.replace(/уМ/g, "УМ");
  car = car.replace(/уН/g, "УН");
  car = car.replace(/уО/g, "УО");
  car = car.replace(/уП/g, "УП");
  car = car.replace(/уР/g, "УР");
  car = car.replace(/уС/g, "УС");
  car = car.replace(/уТ/g, "УТ");
  car = car.replace(/уУ/g, "УУ");
  car = car.replace(/уЎ/g, "УЎ");
  car = car.replace(/уФ/g, "УФ");
  car = car.replace(/уХ/g, "УХ");
  car = car.replace(/уҲ/g, "УҲ");
  car = car.replace(/уЪ/g, "УЪ");
  car = car.replace(/уЬ/g, "УЬ");
  car = car.replace(/уЭ/g, "УЭ");

  car = car.replace(/оА/g, "ОА");
  car = car.replace(/оБ/g, "ОБ");
  car = car.replace(/оВ/g, "ОВ");
  car = car.replace(/оГ/g, "ОГ");
  car = car.replace(/оҒ/g, "ОҒ");
  car = car.replace(/оД/g, "ОД");
  car = car.replace(/оЖ/g, "ОЖ");
  car = car.replace(/оЗ/g, "ОЗ");
  car = car.replace(/оИ/g, "ОИ");
  car = car.replace(/оЙ/g, "ОЙ");
  car = car.replace(/оК/g, "ОК");
  car = car.replace(/оҚ/g, "ОҚ");
  car = car.replace(/оЛ/g, "ОЛ");
  car = car.replace(/оМ/g, "ОМ");
  car = car.replace(/оН/g, "ОН");
  car = car.replace(/оО/g, "ОО");
  car = car.replace(/оП/g, "ОП");
  car = car.replace(/оР/g, "ОР");
  car = car.replace(/оС/g, "ОС");
  car = car.replace(/оТ/g, "ОТ");
  car = car.replace(/оУ/g, "ОУ");
  car = car.replace(/оЎ/g, "ОЎ");
  car = car.replace(/оФ/g, "ОФ");
  car = car.replace(/оХ/g, "ОХ");
  car = car.replace(/оҲ/g, "ОҲ");
  car = car.replace(/оЪ/g, "ОЪ");
  car = car.replace(/оЬ/g, "ОЬ");
  car = car.replace(/оЭ/g, "ОЭ");

  car = car.replace(/аА/g, "АА");
  car = car.replace(/аБ/g, "АБ");
  car = car.replace(/аВ/g, "АВ");
  car = car.replace(/аГ/g, "АГ");
  car = car.replace(/аҒ/g, "АҒ");
  car = car.replace(/аД/g, "АД");
  car = car.replace(/аЖ/g, "АЖ");
  car = car.replace(/аЗ/g, "АЗ");
  car = car.replace(/аИ/g, "АИ");
  car = car.replace(/аЙ/g, "АЙ");
  car = car.replace(/аК/g, "АК");
  car = car.replace(/аҚ/g, "АҚ");
  car = car.replace(/аЛ/g, "АЛ");
  car = car.replace(/аМ/g, "АМ");
  car = car.replace(/аН/g, "АН");
  car = car.replace(/аО/g, "АО");
  car = car.replace(/аП/g, "АП");
  car = car.replace(/аР/g, "АР");
  car = car.replace(/аС/g, "АС");
  car = car.replace(/аТ/g, "АТ");
  car = car.replace(/аУ/g, "АУ");
  car = car.replace(/аЎ/g, "АЎ");
  car = car.replace(/аФ/g, "АФ");
  car = car.replace(/аХ/g, "АХ");
  car = car.replace(/аҲ/g, "АҲ");
  car = car.replace(/аЪ/g, "АЪ");
  car = car.replace(/аЬ/g, "АЬ");
  car = car.replace(/аЭ/g, "АЭ");

  car = car.replace(/эА/g, "ЭА");
  car = car.replace(/эБ/g, "ЭБ");
  car = car.replace(/эВ/g, "ЭВ");
  car = car.replace(/эГ/g, "ЭГ");
  car = car.replace(/эҒ/g, "ЭҒ");
  car = car.replace(/эД/g, "ЭД");
  car = car.replace(/эЖ/g, "ЭЖ");
  car = car.replace(/эЗ/g, "ЭЗ");
  car = car.replace(/эИ/g, "ЭИ");
  car = car.replace(/эЙ/g, "ЭЙ");
  car = car.replace(/эК/g, "ЭК");
  car = car.replace(/эҚ/g, "ЭҚ");
  car = car.replace(/эЛ/g, "ЭЛ");
  car = car.replace(/эМ/g, "ЭМ");
  car = car.replace(/эН/g, "ЭН");
  car = car.replace(/эО/g, "ЭО");
  car = car.replace(/эП/g, "ЭП");
  car = car.replace(/эР/g, "ЭР");
  car = car.replace(/эС/g, "ЭС");
  car = car.replace(/эТ/g, "ЭТ");
  car = car.replace(/эУ/g, "ЭУ");
  car = car.replace(/эЎ/g, "ЭЎ");
  car = car.replace(/эФ/g, "ЭФ");
  car = car.replace(/эХ/g, "ЭХ");
  car = car.replace(/эҲ/g, "ЭҲ");
  car = car.replace(/эЪ/g, "ЭЪ");
  car = car.replace(/эЬ/g, "ЭЬ");
  car = car.replace(/эЭ/g, "ЭЭ");

  car = car.replace(/ҳА/g, "ҲА");
  car = car.replace(/ҳБ/g, "ҲБ");
  car = car.replace(/ҳВ/g, "ҲВ");
  car = car.replace(/ҳГ/g, "ҲГ");
  car = car.replace(/ҳҒ/g, "ҲҒ");
  car = car.replace(/ҳД/g, "ҲД");
  car = car.replace(/ҳЖ/g, "ҲЖ");
  car = car.replace(/ҳЗ/g, "ҲЗ");
  car = car.replace(/ҳИ/g, "ҲИ");
  car = car.replace(/ҳЙ/g, "ҲЙ");
  car = car.replace(/ҳК/g, "ҲК");
  car = car.replace(/ҳҚ/g, "ҲҚ");
  car = car.replace(/ҳЛ/g, "ҲЛ");
  car = car.replace(/ҳМ/g, "ҲМ");
  car = car.replace(/ҳН/g, "ҲН");
  car = car.replace(/ҳО/g, "ҲО");
  car = car.replace(/ҳП/g, "ҲП");
  car = car.replace(/ҳР/g, "ҲР");
  car = car.replace(/ҳС/g, "ҲС");
  car = car.replace(/ҳТ/g, "ҲТ");
  car = car.replace(/ҳУ/g, "ҲУ");
  car = car.replace(/ҳЎ/g, "ҲЎ");
  car = car.replace(/ҳФ/g, "ҲФ");
  car = car.replace(/ҳХ/g, "ҲХ");
  car = car.replace(/ҳҲ/g, "ҲҲ");
  car = car.replace(/ҳЪ/g, "ҲЪ");
  car = car.replace(/ҳЬ/g, "ҲЬ");
  car = car.replace(/ҳЭ/g, "ҲЭ");

  car = car.replace(/СҳcҳА/g, "СҲCҲА");
  car = car.replace(/СҳcҳБ/g, "СҲCҲБ");
  car = car.replace(/СҳcҳВ/g, "СҲCҲВ");
  car = car.replace(/СҳcҳГ/g, "СҲCҲГ");
  car = car.replace(/СҳcҳҒ/g, "СҲCҲҒ");
  car = car.replace(/СҳcҳД/g, "СҲCҲД");
  car = car.replace(/СҳcҳЖ/g, "СҲCҲЖ");
  car = car.replace(/СҳcҳЗ/g, "СҲCҲЗ");
  car = car.replace(/СҳcҳИ/g, "СҲCҲИ");
  car = car.replace(/СҳcҳЙ/g, "СҲCҲЙ");
  car = car.replace(/СҳcҳК/g, "СҲCҲК");
  car = car.replace(/СҳcҳҚ/g, "СҲCҲҚ");
  car = car.replace(/СҳcҳЛ/g, "СҲCҲЛ");
  car = car.replace(/СҳcҳМ/g, "СҲCҲМ");
  car = car.replace(/СҳcҳН/g, "СҲCҲН");
  car = car.replace(/СҳcҳО/g, "СҲCҲО");
  car = car.replace(/СҳcҳП/g, "СҲCҲП");
  car = car.replace(/СҳcҳР/g, "СҲCҲР");
  car = car.replace(/СҳcҳС/g, "СҲCҲС");
  car = car.replace(/СҳcҳТ/g, "СҲCҲТ");
  car = car.replace(/СҳcҳУ/g, "СҲCҲУ");
  car = car.replace(/СҳcҳЎ/g, "СҲCҲЎ");
  car = car.replace(/СҳcҳФ/g, "СҲCҲФ");
  car = car.replace(/СҳcҳХ/g, "СҲCҲХ");
  car = car.replace(/СҳcҳҲ/g, "СҲCҲҲ");
  car = car.replace(/СҳcҳЪ/g, "СҲCҲЪ");
  car = car.replace(/СҳcҳЬ/g, "СҲCҲЬ");
  car = car.replace(/СҳcҳЭ/g, "СҲCҲЭ");
  
  car = car.replace(/АЙу/g, "АЙУ");
  car = car.replace(/БЙу/g, "БЙУ");
  car = car.replace(/ВЙу/g, "ВЙУ");
  car = car.replace(/ГЙу/g, "ГЙУ");
  car = car.replace(/ҒЙу/g, "ҒЙУ");
  car = car.replace(/ДЙу/g, "ДЙУ");
  car = car.replace(/ЖЙу/g, "ЖЙУ");
  car = car.replace(/ЗЙу/g, "ЗЙУ");
  car = car.replace(/ИЙу/g, "ИЙУ");
  car = car.replace(/ЙЙу/g, "ЙЙУ");
  car = car.replace(/КЙу/g, "КЙУ");
  car = car.replace(/ҚЙу/g, "ҚЙУ");
  car = car.replace(/ЛЙу/g, "ЛЙУ");
  car = car.replace(/МЙу/g, "МЙУ");
  car = car.replace(/НЙу/g, "НЙУ");
  car = car.replace(/ОЙу/g, "ОЙУ");
  car = car.replace(/ПЙу/g, "ПЙУ");
  car = car.replace(/РЙу/g, "РЙУ");
  car = car.replace(/СЙу/g, "СЙУ");
  car = car.replace(/ТЙу/g, "ТЙУ");
  car = car.replace(/УЙу/g, "УЙУ");
  car = car.replace(/ЎЙу/g, "ЎЙУ");
  car = car.replace(/ФЙу/g, "ФЙУ");
  car = car.replace(/ХЙу/g, "ХЙУ");
  car = car.replace(/ҲЙу/g, "ҲЙУ");
  car = car.replace(/ЪЙу/g, "ЪЙУ");
  car = car.replace(/ЬЙу/g, "ЬЙУ");
  car = car.replace(/ЭЙу/g, "ЭЙУ");
  car = car.replace(/АЙа/g, "АЙА");
  car = car.replace(/БЙа/g, "БЙА");
  car = car.replace(/ВЙа/g, "ВЙА");
  car = car.replace(/ГЙа/g, "ГЙА");
  car = car.replace(/ҒЙа/g, "ҒЙА");
  car = car.replace(/ДЙа/g, "ДЙА");
  car = car.replace(/ЖЙа/g, "ЖЙА");
  car = car.replace(/ЗЙа/g, "ЗЙА");
  car = car.replace(/ИЙа/g, "ИЙА");
  car = car.replace(/ЙЙа/g, "ЙЙА");
  car = car.replace(/КЙа/g, "КЙА");
  car = car.replace(/ҚЙа/g, "ҚЙА");
  car = car.replace(/ЛЙа/g, "ЛЙА");
  car = car.replace(/МЙа/g, "МЙА");
  car = car.replace(/НЙа/g, "НЙА");
  car = car.replace(/ОЙа/g, "ОЙА");
  car = car.replace(/ПЙа/g, "ПЙА");
  car = car.replace(/РЙа/g, "РЙА");
  car = car.replace(/СЙа/g, "СЙА");
  car = car.replace(/ТЙа/g, "ТЙА");
  car = car.replace(/УЙа/g, "УЙА");
  car = car.replace(/ЎЙа/g, "ЎЙА");
  car = car.replace(/ФЙа/g, "ФЙА");
  car = car.replace(/ХЙа/g, "ХЙА");
  car = car.replace(/ҲЙа/g, "ҲЙА");
  car = car.replace(/ЪЙа/g, "ЪЙА");
  car = car.replace(/ЬЙа/g, "ЬЙА");
  car = car.replace(/ЭЙа/g, "ЭЙА");
  car = car.replace(/АЙо/g, "АЙО");
  car = car.replace(/БЙо/g, "БЙО");
  car = car.replace(/ВЙо/g, "ВЙО");
  car = car.replace(/ГЙо/g, "ГЙО");
  car = car.replace(/ҒЙо/g, "ҒЙО");
  car = car.replace(/ДЙо/g, "ДЙО");
  car = car.replace(/ЖЙо/g, "ЖЙО");
  car = car.replace(/ЗЙо/g, "ЗЙО");
  car = car.replace(/ИЙо/g, "ИЙО");
  car = car.replace(/ЙЙо/g, "ЙЙО");
  car = car.replace(/КЙо/g, "КЙО");
  car = car.replace(/ҚЙо/g, "ҚЙО");
  car = car.replace(/ЛЙо/g, "ЛЙО");
  car = car.replace(/МЙо/g, "МЙО");
  car = car.replace(/НЙо/g, "НЙО");
  car = car.replace(/ОЙо/g, "ОЙО");
  car = car.replace(/ПЙо/g, "ПЙО");
  car = car.replace(/РЙо/g, "РЙО");
  car = car.replace(/СЙо/g, "СЙО");
  car = car.replace(/ТЙо/g, "ТЙО");
  car = car.replace(/УЙо/g, "УЙО");
  car = car.replace(/ЎЙо/g, "ЎЙО");
  car = car.replace(/ФЙо/g, "ФЙО");
  car = car.replace(/ХЙо/g, "ХЙО");
  car = car.replace(/ҲЙо/g, "ҲЙО");
  car = car.replace(/ЪЙо/g, "ЪЙО");
  car = car.replace(/ЬЙо/g, "ЬЙО");
  car = car.replace(/ЭЙо/g, "ЭЙО");
  car = car.replace(/АЙэ/g, "АЙЭ");
  car = car.replace(/БЙэ/g, "БЙЭ");
  car = car.replace(/ВЙэ/g, "ВЙЭ");
  car = car.replace(/ГЙэ/g, "ГЙЭ");
  car = car.replace(/ҒЙэ/g, "ҒЙЭ");
  car = car.replace(/ДЙэ/g, "ДЙЭ");
  car = car.replace(/ЖЙэ/g, "ЖЙЭ");
  car = car.replace(/ЗЙэ/g, "ЗЙЭ");
  car = car.replace(/ИЙэ/g, "ИЙЭ");
  car = car.replace(/ЙЙэ/g, "ЙЙЭ");
  car = car.replace(/КЙэ/g, "КЙЭ");
  car = car.replace(/ҚЙэ/g, "ҚЙЭ");
  car = car.replace(/ЛЙэ/g, "ЛЙЭ");
  car = car.replace(/МЙэ/g, "МЙЭ");
  car = car.replace(/НЙэ/g, "НЙЭ");
  car = car.replace(/ОЙэ/g, "ОЙЭ");
  car = car.replace(/ПЙэ/g, "ПЙЭ");
  car = car.replace(/РЙэ/g, "РЙЭ");
  car = car.replace(/СЙэ/g, "СЙЭ");
  car = car.replace(/ТЙэ/g, "ТЙЭ");
  car = car.replace(/УЙэ/g, "УЙЭ");
  car = car.replace(/ЎЙэ/g, "ЎЙЭ");
  car = car.replace(/ФЙэ/g, "ФЙЭ");
  car = car.replace(/ХЙэ/g, "ХЙЭ");
  car = car.replace(/ҲЙэ/g, "ҲЙЭ");
  car = car.replace(/ЪЙэ/g, "ЪЙЭ");
  car = car.replace(/ЬЙэ/g, "ЬЙЭ");
  car = car.replace(/ЭЙэ/g, "ЭЙЭ");
  car = car.replace(/АСҳcҳ/g, "АСҲCҲ");
  car = car.replace(/БСҳcҳ/g, "БСҲCҲ");
  car = car.replace(/ВСҳcҳ/g, "ВСҲCҲ");
  car = car.replace(/ГСҳcҳ/g, "ГСҲCҲ");
  car = car.replace(/ҒСҳcҳ/g, "ҒСҲCҲ");
  car = car.replace(/ДСҳcҳ/g, "ДСҲCҲ");
  car = car.replace(/ЖСҳcҳ/g, "ЖСҲCҲ");
  car = car.replace(/ЗСҳcҳ/g, "ЗСҲCҲ");
  car = car.replace(/ИСҳcҳ/g, "ИСҲCҲ");
  car = car.replace(/ЙСҳcҳ/g, "ЙСҲCҲ");
  car = car.replace(/КСҳcҳ/g, "КСҲCҲ");
  car = car.replace(/ҚСҳcҳ/g, "ҚСҲCҲ");
  car = car.replace(/ЛСҳcҳ/g, "ЛСҲCҲ");
  car = car.replace(/МСҳcҳ/g, "МСҲCҲ");
  car = car.replace(/НСҳcҳ/g, "НСҲCҲ");
  car = car.replace(/ОСҳcҳ/g, "ОСҲCҲ");
  car = car.replace(/ПСҳcҳ/g, "ПСҲCҲ");
  car = car.replace(/РСҳcҳ/g, "РСҲCҲ");
  car = car.replace(/ССҳcҳ/g, "ССҲCҲ");
  car = car.replace(/ТСҳcҳ/g, "ТСҲCҲ");
  car = car.replace(/УСҳcҳ/g, "УСҲCҲ");
  car = car.replace(/ЎСҳcҳ/g, "ЎСҲCҲ");
  car = car.replace(/ФСҳcҳ/g, "ФСҲCҲ");
  car = car.replace(/ХСҳcҳ/g, "ХСҲCҲ");
  car = car.replace(/ҲСҳcҳ/g, "ҲСҲCҲ");
  car = car.replace(/ЪСҳcҳ/g, "ЪСҲCҲ");
  car = car.replace(/ЬСҳcҳ/g, "ЬСҲCҲ");
  car = car.replace(/ЭСҳcҳ/g, "ЭСҲCҲ");
  car = car.replace(/АСҳ/g, "АСҲ");
  car = car.replace(/БСҳ/g, "БСҲ");
  car = car.replace(/ВСҳ/g, "ВСҲ");
  car = car.replace(/ГСҳ/g, "ГСҲ");
  car = car.replace(/ҒСҳ/g, "ҒСҲ");
  car = car.replace(/ДСҳ/g, "ДСҲ");
  car = car.replace(/ЖСҳ/g, "ЖСҲ");
  car = car.replace(/ЗСҳ/g, "ЗСҲ");
  car = car.replace(/ИСҳ/g, "ИСҲ");
  car = car.replace(/ЙСҳ/g, "ЙСҲ");
  car = car.replace(/КСҳ/g, "КСҲ");
  car = car.replace(/ҚСҳ/g, "ҚСҲ");
  car = car.replace(/ЛСҳ/g, "ЛСҲ");
  car = car.replace(/МСҳ/g, "МСҲ");
  car = car.replace(/НСҳ/g, "НСҲ");
  car = car.replace(/ОСҳ/g, "ОСҲ");
  car = car.replace(/ПСҳ/g, "ПСҲ");
  car = car.replace(/РСҳ/g, "РСҲ");
  car = car.replace(/ССҳ/g, "ССҲ");
  car = car.replace(/ТСҳ/g, "ТСҲ");
  car = car.replace(/УСҳ/g, "УСҲ");
  car = car.replace(/ЎСҳ/g, "ЎСҲ");
  car = car.replace(/ФСҳ/g, "ФСҲ");
  car = car.replace(/ХСҳ/g, "ХСҲ");
  car = car.replace(/ҲСҳ/g, "ҲСҲ");
  car = car.replace(/ЪСҳ/g, "ЪСҲ");
  car = car.replace(/ЬСҳ/g, "ЬСҲ");
  car = car.replace(/ЭСҳ/g, "ЭСҲ");
  car = car.replace(/АCҳ/g, "АCҲ");
  car = car.replace(/БCҳ/g, "БCҲ");
  car = car.replace(/ВCҳ/g, "ВCҲ");
  car = car.replace(/ГCҳ/g, "ГCҲ");
  car = car.replace(/ҒCҳ/g, "ҒCҲ");
  car = car.replace(/ДCҳ/g, "ДCҲ");
  car = car.replace(/ЖCҳ/g, "ЖCҲ");
  car = car.replace(/ЗCҳ/g, "ЗCҲ");
  car = car.replace(/ИCҳ/g, "ИCҲ");
  car = car.replace(/ЙCҳ/g, "ЙCҲ");
  car = car.replace(/КCҳ/g, "КCҲ");
  car = car.replace(/ҚCҳ/g, "ҚCҲ");
  car = car.replace(/ЛCҳ/g, "ЛCҲ");
  car = car.replace(/МCҳ/g, "МCҲ");
  car = car.replace(/НCҳ/g, "НCҲ");
  car = car.replace(/ОCҳ/g, "ОCҲ");
  car = car.replace(/ПCҳ/g, "ПCҲ");
  car = car.replace(/РCҳ/g, "РCҲ");
  car = car.replace(/СCҳ/g, "СCҲ");
  car = car.replace(/ТCҳ/g, "ТCҲ");
  car = car.replace(/УCҳ/g, "УCҲ");
  car = car.replace(/ЎCҳ/g, "ЎCҲ");
  car = car.replace(/ФCҳ/g, "ФCҲ");
  car = car.replace(/ХCҳ/g, "ХCҲ");
  car = car.replace(/ҲCҳ/g, "ҲCҲ");
  car = car.replace(/ЪCҳ/g, "ЪCҲ");
  car = car.replace(/ЬCҳ/g, "ЬCҲ");
  car = car.replace(/ЭCҳ/g, "ЭCҲ");

  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ғ/g, "gʻ");
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
  car = car.replace(/ў/g, "oʻ");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "x");
  car = car.replace(/ҳ/g, "h");
  car = car.replace(/ч/g, "ch");
  car = car.replace(/ш/g, "sh");
  car = car.replace(/щ/g, "shch");
  car = car.replace(/ь/g, "");
  car = car.replace(/ъ/g, "ʼ");
  car = car.replace(/э/g, "e");
  car = car.replace(/ю/g, "yu");
  car = car.replace(/я/g, "ya");

  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Ғ/g, "Gʻ");
  car = car.replace(/Д/g, "D");
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
  car = car.replace(/Ў/g, "Oʻ");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Ҳ/g, "H");
  car = car.replace(/Ь/g, "");
  car = car.replace(/Ъ/g, "ʼ");
  car = car.replace(/Э/g, "E");
  car = car.replace(/ʻʼ/g, "ʻ");
  car = car.replace(/«/g, "\u201e");
  car = car.replace(/»/g, "\u201c");

  car = car.replace(/'/g, "❧");
  car = car.replace(/ˈ/g, "❧");
  car = car.replace(/’/g, "❧");
  car = car.replace(/ʼ/g, "❧");
  car = car.replace(/‘/g, "❧");
  car = car.replace(/ʻ/g, "❧");
  car = car.replace(/´/g, "❧");
  car = car.replace(/`/g, "❧");
  car = car.replace(/ʿ/g, "❧");
  car = car.replace(/ʹ/g, "❧");
  car = car.replace(/ˊ/g, "❧");
  car = car.replace(/׳/g, "❧");
  car = car.replace(/′/g, "❧");
  car = car.replace(/ʽ/g, "❧");
  car = car.replace(/ߵ/g, "❧");
  car = car.replace(/՚/g, "❧");
  car = car.replace(/ߴ/g, "❧");
  car = car.replace(/᾿/g, "❧");
  car = car.replace(/ՙ/g, "❧");
  car = car.replace(/῾/g, "❧");
  car = car.replace(/‛/g, "❧");
  car = car.replace(/ʾ/g, "❧");
  car = car.replace(/՛/g, "❧");
  car = car.replace(/ˋ/g, "❧");
  
  car = car.replace(/pb/g, "pp");
  car = car.replace(/td/g, "tt");
  car = car.replace(/chj/g, "chch");
  car = car.replace(/kg/g, "kk");
  car = car.replace(/fv/g, "ff");
  car = car.replace(/sz/g, "ss");
  car = car.replace(/xg❧/g, "xx");
  car = car.replace(/Pb/g, "Pp");
  car = car.replace(/Td/g, "Tt");
  car = car.replace(/Chj/g, "Chch");
  car = car.replace(/Kg/g, "Kk");
  car = car.replace(/Fv/g, "Ff");
  car = car.replace(/Sz/g, "Ss");
  car = car.replace(/Xg❧/g, "Xx");
  car = car.replace(/PB/g, "PP");
  car = car.replace(/TD/g, "TT");
  car = car.replace(/CHJ/g, "CHCH");
  car = car.replace(/KG/g, "KK");
  car = car.replace(/FV/g, "FF");
  car = car.replace(/SZ/g, "SS");
  car = car.replace(/XG❧/g, "XX");
  
  car = car.replace(/o/g, "å");
  car = car.replace(/O/g, "Å");
  car = car.replace(/å❧/g, "o");
  car = car.replace(/Å❧/g, "O");
  car = car.replace(/ơ/g, "o");
  car = car.replace(/Ơ/g, "O");
  car = car.replace(/g❧/g, "ğ");
  car = car.replace(/G❧/g, "Ğ");
  car = car.replace(/sh/g, "ş");
  car = car.replace(/Sh/g, "Ş");
  car = car.replace(/SH/g, "Ş");
  car = car.replace(/ch/g, "ç");
  car = car.replace(/Ch/g, "Ç");
  car = car.replace(/CH/g, "Ç");
  car = car.replace(/ng/g, "ñ");
  car = car.replace(/NG/g, "Ñ");
  
  car = car.replace(/ña/g, "ñga");
  car = car.replace(/ñå/g, "ñgå");
  car = car.replace(/ñe/g, "ñge");
  car = car.replace(/ñi/g, "ñgi");
  car = car.replace(/ño/g, "ñgo");
  car = car.replace(/ñu/g, "ñgu");
  car = car.replace(/Ña/g, "Ñga");
  car = car.replace(/Ñå/g, "Ñgå");
  car = car.replace(/Ñe/g, "Ñge");
  car = car.replace(/Ñi/g, "Ñgi");
  car = car.replace(/Ño/g, "Ñgo");
  car = car.replace(/Ñu/g, "Ñgu");
  car = car.replace(/ÑA/g, "ÑGA");
  car = car.replace(/ÑÅ/g, "ÑGÅ");
  car = car.replace(/ÑE/g, "ÑGE");
  car = car.replace(/ÑI/g, "ÑGI");
  car = car.replace(/ÑO/g, "ÑGO");
  car = car.replace(/ÑU/g, "ÑGU");
  
  car = car.replace(/s❧h/g, "sh");
  car = car.replace(/S❧h/g, "Sh");
  car = car.replace(/S❧H/g, "SH");
  car = car.replace(/a/g, "ȧ");
  car = car.replace(/A/g, "Ȧ");
  car = car.replace(/i/g, "ɨ");
  car = car.replace(/I/g, "Ɨ");
  car = car.replace(/o/g, "ȯ");
  car = car.replace(/O/g, "Ȯ");
  car = car.replace(/u/g, "u̇");
  car = car.replace(/U/g, "U̇");
  car = car.replace(/j/g, "c");
  car = car.replace(/J/g, "C");
  car = car.replace(/x/g, "h");
  car = car.replace(/X/g, "H");  
  car = car.replace(/❧/g, "ʼ");
  
  car = car.replace(/lȯbȧt/g, "lȯʼbȧt");
  car = car.replace(/mȯcȧz/g, "mȯʼcȧz");
  car = car.replace(/mȯcɨzȧ/g, "mȯʼcɨzȧ");
  car = car.replace(/mȯtȧbȧr/g, "mȯʼtȧbȧr");
  car = car.replace(/mȯtȧd/g, "mȯʼtȧd");
  car = car.replace(/mȯtȧzɨlȧ/g, "mȯʼtȧzɨlȧ");
  car = car.replace(/mȯtȧrɨzȧ/g, "mȯʼtȧrɨzȧ");
  car = car.replace(/Lȯbȧt/g, "Lȯʼbȧt");
  car = car.replace(/Mȯcȧz/g, "Mȯʼcȧz");
  car = car.replace(/Mȯcɨzȧ/g, "Mȯʼcɨzȧ");
  car = car.replace(/Mȯtȧbȧr/g, "Mȯʼtȧbȧr");
  car = car.replace(/Mȯtȧd/g, "Mȯʼtȧd");
  car = car.replace(/Mȯtȧzɨlȧ/g, "Mȯʼtȧzɨlȧ");
  car = car.replace(/Mȯtȧrɨzȧ/g, "Mȯʼtȧrɨzȧ");
  car = car.replace(/LȮBȦT/g, "LȮʼBȦT");
  car = car.replace(/MȮCȦZ/g, "MȮʼCȦZ");
  car = car.replace(/MȮCƗZȦ/g, "MȮʼCƗZȦ");
  car = car.replace(/MȮTȦBȦR/g, "MȮʼTȦBȦR");
  car = car.replace(/MȮTȦD/g, "MȮʼTȦD");
  car = car.replace(/MȮTȦZƗLȦ/g, "MȮʼTȦZƗLȦ");
  car = car.replace(/MȮTȦRƗZȦ/g, "MȮʼTȦRƗZȦ");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}