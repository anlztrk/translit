﻿
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/бй/g, "bj");
translit = translit.replace(/вй/g, "vj");
translit = translit.replace(/гй/g, "hj");
translit = translit.replace(/ґй/g, "gj");
translit = translit.replace(/дй/g, "dj");
translit = translit.replace(/жй/g, "žj");
translit = translit.replace(/зй/g, "zj");
translit = translit.replace(/йй/g, "jj");
translit = translit.replace(/кй/g, "kj");
translit = translit.replace(/лй/g, "lj");
translit = translit.replace(/мй/g, "mj");
translit = translit.replace(/нй/g, "nj");
translit = translit.replace(/пй/g, "pj");
translit = translit.replace(/рй/g, "rj");
translit = translit.replace(/сй/g, "sj");
translit = translit.replace(/тй/g, "tj");
translit = translit.replace(/фй/g, "fj");
translit = translit.replace(/хй/g, "chj");
translit = translit.replace(/цй/g, "cj");
translit = translit.replace(/чй/g, "čj");
translit = translit.replace(/шй/g, "šj");
translit = translit.replace(/ўй/g, "ўj");
translit = translit.replace(/ьй/g, "ьj");
translit = translit.replace(/Бй/g, "Bj");
translit = translit.replace(/Вй/g, "Vj");
translit = translit.replace(/Гй/g, "Hj");
translit = translit.replace(/Ґй/g, "Gj");
translit = translit.replace(/Дй/g, "Dj");
translit = translit.replace(/Жй/g, "Žj");
translit = translit.replace(/Зй/g, "Zj");
translit = translit.replace(/Йй/g, "Jj");
translit = translit.replace(/Кй/g, "Kj");
translit = translit.replace(/Лй/g, "Lj");
translit = translit.replace(/Мй/g, "Mj");
translit = translit.replace(/Нй/g, "Nj");
translit = translit.replace(/Пй/g, "Pj");
translit = translit.replace(/Рй/g, "Rj");
translit = translit.replace(/Сй/g, "Sj");
translit = translit.replace(/Тй/g, "Tj");
translit = translit.replace(/Фй/g, "Fj");
translit = translit.replace(/Хй/g, "Chj");
translit = translit.replace(/Цй/g, "Cj");
translit = translit.replace(/Чй/g, "Čj");
translit = translit.replace(/Шй/g, "Šj");
translit = translit.replace(/Ўй/g, "Ўj");
translit = translit.replace(/Ьй/g, "Ьj");
translit = translit.replace(/БЙ/g, "BJ");
translit = translit.replace(/ВЙ/g, "VJ");
translit = translit.replace(/ГЙ/g, "HJ");
translit = translit.replace(/ҐЙ/g, "GJ");
translit = translit.replace(/ДЙ/g, "DJ");
translit = translit.replace(/ЖЙ/g, "ŽJ");
translit = translit.replace(/ЗЙ/g, "ZJ");
translit = translit.replace(/ЙЙ/g, "JJ");
translit = translit.replace(/КЙ/g, "KJ");
translit = translit.replace(/ЛЙ/g, "LJ");
translit = translit.replace(/МЙ/g, "MJ");
translit = translit.replace(/НЙ/g, "NJ");
translit = translit.replace(/ПЙ/g, "PJ");
translit = translit.replace(/РЙ/g, "RJ");
translit = translit.replace(/СЙ/g, "SJ");
translit = translit.replace(/ТЙ/g, "TJ");
translit = translit.replace(/ФЙ/g, "FJ");
translit = translit.replace(/ХЙ/g, "CHJ");
translit = translit.replace(/ЦЙ/g, "CJ");
translit = translit.replace(/ЧЙ/g, "ČJ");
translit = translit.replace(/ШЙ/g, "ŠJ");
translit = translit.replace(/ЎЙ/g, "ЎJ");
translit = translit.replace(/ЬЙ/g, "ЬJ");

translit = translit.replace(/бе/g, "bie");
translit = translit.replace(/ве/g, "vie");
translit = translit.replace(/ге/g, "hie");
translit = translit.replace(/ґе/g, "gie");
translit = translit.replace(/де/g, "die");
translit = translit.replace(/же/g, "žie");
translit = translit.replace(/зе/g, "zie");
translit = translit.replace(/йе/g, "jie");
translit = translit.replace(/ке/g, "kie");
translit = translit.replace(/ле/g, "le");
translit = translit.replace(/ме/g, "mie");
translit = translit.replace(/не/g, "nie");
translit = translit.replace(/пе/g, "pie");
translit = translit.replace(/ре/g, "rie");
translit = translit.replace(/се/g, "sie");
translit = translit.replace(/те/g, "tie");
translit = translit.replace(/фе/g, "fie");
translit = translit.replace(/хе/g, "chie");
translit = translit.replace(/це/g, "cie");
translit = translit.replace(/че/g, "čie");
translit = translit.replace(/ше/g, "šie");
translit = translit.replace(/ўе/g, "ўie");
translit = translit.replace(/ье/g, "ьie");
translit = translit.replace(/Бе/g, "Bie");
translit = translit.replace(/Ве/g, "Vie");
translit = translit.replace(/Ге/g, "Hie");
translit = translit.replace(/Ґе/g, "Gie");
translit = translit.replace(/Де/g, "Die");
translit = translit.replace(/Же/g, "Žie");
translit = translit.replace(/Зе/g, "Zie");
translit = translit.replace(/Йе/g, "Jie");
translit = translit.replace(/Ке/g, "Kie");
translit = translit.replace(/Ле/g, "Le");
translit = translit.replace(/Ме/g, "Mie");
translit = translit.replace(/Не/g, "Nie");
translit = translit.replace(/Пе/g, "Pie");
translit = translit.replace(/Ре/g, "Rie");
translit = translit.replace(/Се/g, "Sie");
translit = translit.replace(/Те/g, "Tie");
translit = translit.replace(/Фе/g, "Fie");
translit = translit.replace(/Хе/g, "Chie");
translit = translit.replace(/Це/g, "Cie");
translit = translit.replace(/Че/g, "Čie");
translit = translit.replace(/Ше/g, "Šie");
translit = translit.replace(/Ўе/g, "Ўie");
translit = translit.replace(/Ье/g, "Ьie");
translit = translit.replace(/БЕ/g, "BIE");
translit = translit.replace(/ВЕ/g, "VIE");
translit = translit.replace(/ГЕ/g, "HIE");
translit = translit.replace(/ҐЕ/g, "GIE");
translit = translit.replace(/ДЕ/g, "DIE");
translit = translit.replace(/ЖЕ/g, "ŽIE");
translit = translit.replace(/ЗЕ/g, "ZIE");
translit = translit.replace(/ЙЕ/g, "JIE");
translit = translit.replace(/КЕ/g, "KIE");
translit = translit.replace(/ЛЕ/g, "LE");
translit = translit.replace(/МЕ/g, "MIE");
translit = translit.replace(/НЕ/g, "NIE");
translit = translit.replace(/ПЕ/g, "PIE");
translit = translit.replace(/РЕ/g, "RIE");
translit = translit.replace(/СЕ/g, "SIE");
translit = translit.replace(/ТЕ/g, "TIE");
translit = translit.replace(/ФЕ/g, "FIE");
translit = translit.replace(/ХЕ/g, "CHIE");
translit = translit.replace(/ЦЕ/g, "CIE");
translit = translit.replace(/ЧЕ/g, "ČIE");
translit = translit.replace(/ШЕ/g, "ŠIE");
translit = translit.replace(/ЎЕ/g, "ЎIE");
translit = translit.replace(/ЬЕ/g, "ЬIE");
translit = translit.replace(/бя/g, "bia");
translit = translit.replace(/вя/g, "via");
translit = translit.replace(/гя/g, "hia");
translit = translit.replace(/ґя/g, "gia");
translit = translit.replace(/дя/g, "dia");
translit = translit.replace(/жя/g, "žia");
translit = translit.replace(/зя/g, "zia");
translit = translit.replace(/йя/g, "jia");
translit = translit.replace(/кя/g, "kia");
translit = translit.replace(/ля/g, "la");
translit = translit.replace(/мя/g, "mia");
translit = translit.replace(/ня/g, "nia");
translit = translit.replace(/пя/g, "pia");
translit = translit.replace(/ря/g, "ria");
translit = translit.replace(/ся/g, "sia");
translit = translit.replace(/тя/g, "tia");
translit = translit.replace(/фя/g, "fia");
translit = translit.replace(/хя/g, "chia");
translit = translit.replace(/ця/g, "cia");
translit = translit.replace(/чя/g, "čia");
translit = translit.replace(/шя/g, "šia");
translit = translit.replace(/ўя/g, "ўia");
translit = translit.replace(/ья/g, "ьia");
translit = translit.replace(/Бя/g, "Bia");
translit = translit.replace(/Вя/g, "Via");
translit = translit.replace(/Гя/g, "Hia");
translit = translit.replace(/Ґя/g, "Gia");
translit = translit.replace(/Дя/g, "Dia");
translit = translit.replace(/Жя/g, "Žia");
translit = translit.replace(/Зя/g, "Zia");
translit = translit.replace(/Йя/g, "Jia");
translit = translit.replace(/Кя/g, "Kia");
translit = translit.replace(/Ля/g, "La");
translit = translit.replace(/Мя/g, "Mia");
translit = translit.replace(/Ня/g, "Nia");
translit = translit.replace(/Пя/g, "Pia");
translit = translit.replace(/Ря/g, "Ria");
translit = translit.replace(/Ся/g, "Sia");
translit = translit.replace(/Тя/g, "Tia");
translit = translit.replace(/Фя/g, "Fia");
translit = translit.replace(/Хя/g, "Chia");
translit = translit.replace(/Ця/g, "Cia");
translit = translit.replace(/Чя/g, "Čia");
translit = translit.replace(/Шя/g, "Šia");
translit = translit.replace(/Ўя/g, "Ўia");
translit = translit.replace(/Ья/g, "Ьia");
translit = translit.replace(/БЯ/g, "BIA");
translit = translit.replace(/ВЯ/g, "VIA");
translit = translit.replace(/ГЯ/g, "HIA");
translit = translit.replace(/ҐЯ/g, "GIA");
translit = translit.replace(/ДЯ/g, "DIA");
translit = translit.replace(/ЖЯ/g, "ŽIA");
translit = translit.replace(/ЗЯ/g, "ZIA");
translit = translit.replace(/ЙЯ/g, "JIA");
translit = translit.replace(/КЯ/g, "KIA");
translit = translit.replace(/ЛЯ/g, "LA");
translit = translit.replace(/МЯ/g, "MIA");
translit = translit.replace(/НЯ/g, "NIA");
translit = translit.replace(/ПЯ/g, "PIA");
translit = translit.replace(/РЯ/g, "RIA");
translit = translit.replace(/СЯ/g, "SIA");
translit = translit.replace(/ТЯ/g, "TIA");
translit = translit.replace(/ФЯ/g, "FIA");
translit = translit.replace(/ХЯ/g, "CHIA");
translit = translit.replace(/ЦЯ/g, "CIA");
translit = translit.replace(/ЧЯ/g, "ČIA");
translit = translit.replace(/ШЯ/g, "ŠIA");
translit = translit.replace(/ЎЯ/g, "ЎIA");
translit = translit.replace(/ЬЯ/g, "ЬIA");
translit = translit.replace(/бё/g, "bio");
translit = translit.replace(/вё/g, "vio");
translit = translit.replace(/гё/g, "hio");
translit = translit.replace(/ґё/g, "gio");
translit = translit.replace(/дё/g, "dio");
translit = translit.replace(/жё/g, "žio");
translit = translit.replace(/зё/g, "zio");
translit = translit.replace(/йё/g, "jio");
translit = translit.replace(/кё/g, "kio");
translit = translit.replace(/лё/g, "lo");
translit = translit.replace(/мё/g, "mio");
translit = translit.replace(/нё/g, "nio");
translit = translit.replace(/пё/g, "pio");
translit = translit.replace(/рё/g, "rio");
translit = translit.replace(/сё/g, "sio");
translit = translit.replace(/тё/g, "tio");
translit = translit.replace(/фё/g, "fio");
translit = translit.replace(/хё/g, "chio");
translit = translit.replace(/цё/g, "cio");
translit = translit.replace(/чё/g, "čio");
translit = translit.replace(/шё/g, "šio");
translit = translit.replace(/ўё/g, "ўio");
translit = translit.replace(/ьё/g, "ьio");
translit = translit.replace(/Бё/g, "Bio");
translit = translit.replace(/Вё/g, "Vio");
translit = translit.replace(/Гё/g, "Hio");
translit = translit.replace(/Ґё/g, "Gio");
translit = translit.replace(/Дё/g, "Dio");
translit = translit.replace(/Жё/g, "Žio");
translit = translit.replace(/Зё/g, "Zio");
translit = translit.replace(/Йё/g, "Jio");
translit = translit.replace(/Кё/g, "Kio");
translit = translit.replace(/Лё/g, "Lo");
translit = translit.replace(/Мё/g, "Mio");
translit = translit.replace(/Нё/g, "Nio");
translit = translit.replace(/Пё/g, "Pio");
translit = translit.replace(/Рё/g, "Rio");
translit = translit.replace(/Сё/g, "Sio");
translit = translit.replace(/Тё/g, "Tio");
translit = translit.replace(/Фё/g, "Fio");
translit = translit.replace(/Хё/g, "Chio");
translit = translit.replace(/Цё/g, "Cio");
translit = translit.replace(/Чё/g, "Čio");
translit = translit.replace(/Шё/g, "Šio");
translit = translit.replace(/Ўё/g, "Ўio");
translit = translit.replace(/Ьё/g, "Ьio");
translit = translit.replace(/БЁ/g, "BIO");
translit = translit.replace(/ВЁ/g, "VIO");
translit = translit.replace(/ГЁ/g, "HIO");
translit = translit.replace(/ҐЁ/g, "GIO");
translit = translit.replace(/ДЁ/g, "DIO");
translit = translit.replace(/ЖЁ/g, "ŽIO");
translit = translit.replace(/ЗЁ/g, "ZIO");
translit = translit.replace(/ЙЁ/g, "JIO");
translit = translit.replace(/КЁ/g, "KIO");
translit = translit.replace(/ЛЁ/g, "LO");
translit = translit.replace(/МЁ/g, "MIO");
translit = translit.replace(/НЁ/g, "NIO");
translit = translit.replace(/ПЁ/g, "PIO");
translit = translit.replace(/РЁ/g, "RIO");
translit = translit.replace(/СЁ/g, "SIO");
translit = translit.replace(/ТЁ/g, "TIO");
translit = translit.replace(/ФЁ/g, "FIO");
translit = translit.replace(/ХЁ/g, "CHIO");
translit = translit.replace(/ЦЁ/g, "CIO");
translit = translit.replace(/ЧЁ/g, "ČIO");
translit = translit.replace(/ШЁ/g, "ŠIO");
translit = translit.replace(/ЎЁ/g, "ЎIO");
translit = translit.replace(/ЬЁ/g, "ЬIO");
translit = translit.replace(/бю/g, "biu");
translit = translit.replace(/вю/g, "viu");
translit = translit.replace(/гю/g, "hiu");
translit = translit.replace(/ґю/g, "giu");
translit = translit.replace(/дю/g, "diu");
translit = translit.replace(/жю/g, "žiu");
translit = translit.replace(/зю/g, "ziu");
translit = translit.replace(/йю/g, "jiu");
translit = translit.replace(/кю/g, "kiu");
translit = translit.replace(/лю/g, "lu");
translit = translit.replace(/мю/g, "miu");
translit = translit.replace(/ню/g, "niu");
translit = translit.replace(/пю/g, "piu");
translit = translit.replace(/рю/g, "riu");
translit = translit.replace(/сю/g, "siu");
translit = translit.replace(/тю/g, "tiu");
translit = translit.replace(/фю/g, "fiu");
translit = translit.replace(/хю/g, "chiu");
translit = translit.replace(/цю/g, "ciu");
translit = translit.replace(/чю/g, "čiu");
translit = translit.replace(/шю/g, "šiu");
translit = translit.replace(/ўю/g, "ўiu");
translit = translit.replace(/ью/g, "ьiu");
translit = translit.replace(/Бю/g, "Biu");
translit = translit.replace(/Вю/g, "Viu");
translit = translit.replace(/Гю/g, "Hiu");
translit = translit.replace(/Ґю/g, "Giu");
translit = translit.replace(/Дю/g, "Diu");
translit = translit.replace(/Жю/g, "Žiu");
translit = translit.replace(/Зю/g, "Ziu");
translit = translit.replace(/Йю/g, "Jiu");
translit = translit.replace(/Кю/g, "Kiu");
translit = translit.replace(/Лю/g, "Lu");
translit = translit.replace(/Мю/g, "Miu");
translit = translit.replace(/Ню/g, "Niu");
translit = translit.replace(/Пю/g, "Piu");
translit = translit.replace(/Рю/g, "Riu");
translit = translit.replace(/Сю/g, "Siu");
translit = translit.replace(/Тю/g, "Tiu");
translit = translit.replace(/Фю/g, "Fiu");
translit = translit.replace(/Хю/g, "Chiu");
translit = translit.replace(/Цю/g, "Ciu");
translit = translit.replace(/Чю/g, "Čiu");
translit = translit.replace(/Шю/g, "Šiu");
translit = translit.replace(/Ўю/g, "Ўiu");
translit = translit.replace(/Ью/g, "Ьiu");
translit = translit.replace(/БЮ/g, "BIU");
translit = translit.replace(/ВЮ/g, "VIU");
translit = translit.replace(/ГЮ/g, "HIU");
translit = translit.replace(/ҐЮ/g, "GIU");
translit = translit.replace(/ДЮ/g, "DIU");
translit = translit.replace(/ЖЮ/g, "ŽIU");
translit = translit.replace(/ЗЮ/g, "ZIU");
translit = translit.replace(/ЙЮ/g, "JIU");
translit = translit.replace(/КЮ/g, "KIU");
translit = translit.replace(/ЛЮ/g, "LU");
translit = translit.replace(/МЮ/g, "MIU");
translit = translit.replace(/НЮ/g, "NIU");
translit = translit.replace(/ПЮ/g, "PIU");
translit = translit.replace(/РЮ/g, "RIU");
translit = translit.replace(/СЮ/g, "SIU");
translit = translit.replace(/ТЮ/g, "TIU");
translit = translit.replace(/ФЮ/g, "FIU");
translit = translit.replace(/ХЮ/g, "CHIU");
translit = translit.replace(/ЦЮ/g, "CIU");
translit = translit.replace(/ЧЮ/g, "ČIU");
translit = translit.replace(/ШЮ/g, "ŠIU");
translit = translit.replace(/ЎЮ/g, "ЎIU");
translit = translit.replace(/ЬЮ/g, "ЬIU");


translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "h");
translit = translit.replace(/ґ/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "je");
translit = translit.replace(/ё/g, "jo");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/і/g, "i");
translit = translit.replace(/й/g, "ji");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "ł");
translit = translit.replace(/м/g, "m");
translit = translit.replace(/н/g, "n");
translit = translit.replace(/о/g, "o");
translit = translit.replace(/п/g, "p");
translit = translit.replace(/р/g, "r");
translit = translit.replace(/с/g, "s");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ў/g, "ŭ");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "ch");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/’/g, "");
translit = translit.replace(/ы/g, "y");
translit = translit.replace(/ь/g, "\u0301");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "ju");
translit = translit.replace(/я/g, "ja");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "H");
translit = translit.replace(/Ґ/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "Je");
translit = translit.replace(/Ё/g, "Jo");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/І/g, "I");
translit = translit.replace(/Й/g, "Ji");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "Ł");
translit = translit.replace(/М/g, "M");
translit = translit.replace(/Н/g, "N");
translit = translit.replace(/О/g, "O");
translit = translit.replace(/П/g, "P");
translit = translit.replace(/Р/g, "R");
translit = translit.replace(/С/g, "S");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ў/g, "Ŭ");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "Ch");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/Ы/g, "Y");
translit = translit.replace(/Ь/g, "\u0301");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Ju");
translit = translit.replace(/Я/g, "Ja");
translit = translit.replace(/ł\u0301/g, "l");
translit = translit.replace(/Ł\u0301/g, "L");
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
