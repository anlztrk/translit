var translit;
var car;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;

car = car.replace(/ă/g, "ӑ");
car = car.replace(/Ă/g, "Ӑ");
car = car.replace(/ĕ/g, "ӗ");
car = car.replace(/Ĕ/g, "Ӗ");
car = car.replace(/ǎ/g, "ӑ");
car = car.replace(/Ǎ/g, "Ӑ");
car = car.replace(/ě/g, "ӗ");
car = car.replace(/Ě/g, "Ӗ");
car = car.replace(/ç/g, "ҫ");
car = car.replace(/Ç/g, "Ҫ");
car = car.replace(/ÿ/g, "ӳ");
car = car.replace(/Ÿ/g, "Ӳ"); 
car = car.replace(/ў/g, "ӳ"); 
car = car.replace(/Ў/g, "Ӳ");
car = car.replace(/ү/g, "ӳ"); 
car = car.replace(/Ү/g, "Ӳ");  

translit = translit.replace(/ă/g, "ӑ");
translit = translit.replace(/Ă/g, "Ӑ");
translit = translit.replace(/ĕ/g, "ӗ");
translit = translit.replace(/Ĕ/g, "Ӗ");
translit = translit.replace(/ǎ/g, "ӑ");
translit = translit.replace(/Ǎ/g, "Ӑ");
translit = translit.replace(/ě/g, "ӗ");
translit = translit.replace(/Ě/g, "Ӗ");
translit = translit.replace(/ç/g, "ҫ");
translit = translit.replace(/Ç/g, "Ҫ");
translit = translit.replace(/ÿ/g, "ӳ");
translit = translit.replace(/Ÿ/g, "Ӳ"); 
translit = translit.replace(/ў/g, "ӳ");
translit = translit.replace(/Ў/g, "Ӳ"); 
translit = translit.replace(/ү/g, "ӳ");
translit = translit.replace(/Ү/g, "Ӳ");

translit = translit.replace(/\u0301/g, "\u0323");

translit = translit.replace(/ е/g, " yе");
translit = translit.replace(/\nе/g, "\nyе");
translit = translit.replace(/\rе/g, "\ryе");
translit = translit.replace(/^е/g, "yе");
translit = translit.replace(/\u003eе/g, "\u003eyе");

translit = translit.replace(/ Е/g, " Yе");
translit = translit.replace(/\nЕ/g, "\nYе");
translit = translit.replace(/\rЕ/g, "\rYе");
translit = translit.replace(/^Е/g, "Yе");
translit = translit.replace(/\u003eЕ/g, "\u003eYе");

translit = translit.replace(/ае/g, "аyе");
translit = translit.replace(/ӑе/g, "ӑyе");
translit = translit.replace(/ее/g, "еyе");
translit = translit.replace(/ёе/g, "ёyе");
translit = translit.replace(/ӗе/g, "ӗyе");
translit = translit.replace(/ие/g, "иyе");
translit = translit.replace(/ое/g, "оyе");
translit = translit.replace(/уе/g, "уyе");
translit = translit.replace(/ӳе/g, "ӳyе");
translit = translit.replace(/ъе/g, "ъyе");
translit = translit.replace(/ые/g, "ыyе");
translit = translit.replace(/ье/g, "ьyе");
translit = translit.replace(/эе/g, "эyе");
translit = translit.replace(/юе/g, "юyе");
translit = translit.replace(/яе/g, "яyе");

translit = translit.replace(/Ае/g, "Аyе");
translit = translit.replace(/Ӑе/g, "Ӑyе");
translit = translit.replace(/Ее/g, "Еyе");
translit = translit.replace(/Ёе/g, "Ёyе");
translit = translit.replace(/Ӗе/g, "Ӗyе");
translit = translit.replace(/Ие/g, "Иyе");
translit = translit.replace(/Ое/g, "Оyе");
translit = translit.replace(/Уе/g, "Уyе");
translit = translit.replace(/Ӳе/g, "Ӳyе");
translit = translit.replace(/Ъе/g, "Ъyе");
translit = translit.replace(/Ые/g, "Ыyе");
translit = translit.replace(/Ье/g, "Ьyе");
translit = translit.replace(/Эе/g, "Эyе");
translit = translit.replace(/Юе/g, "Юyе");
translit = translit.replace(/Яе/g, "Яyе");

translit = translit.replace(/АЕ/g, "АYЕ");
translit = translit.replace(/ӐЕ/g, "ӐYЕ");
translit = translit.replace(/ЕЕ/g, "ЕYЕ");
translit = translit.replace(/ЁЕ/g, "ЁYЕ");
translit = translit.replace(/ӖЕ/g, "ӖYЕ");
translit = translit.replace(/ИЕ/g, "ИYЕ");
translit = translit.replace(/ОЕ/g, "ОYЕ");
translit = translit.replace(/УЕ/g, "УYЕ");
translit = translit.replace(/ӲЕ/g, "ӲYЕ");
translit = translit.replace(/ЪЕ/g, "ЪYЕ");
translit = translit.replace(/ЫЕ/g, "ЫYЕ");
translit = translit.replace(/ЬЕ/g, "ЬYЕ");
translit = translit.replace(/ЭЕ/g, "ЭYЕ");
translit = translit.replace(/ЮЕ/g, "ЮYЕ");
translit = translit.replace(/ЯЕ/g, "ЯYЕ");

translit = translit.replace(/айе/g, "аyyе");
translit = translit.replace(/ӑйе/g, "ӑyyе");
translit = translit.replace(/ейе/g, "еyyе");
translit = translit.replace(/ёйе/g, "ёyyе");
translit = translit.replace(/ӗйе/g, "ӗyyе");
translit = translit.replace(/ийе/g, "иyyе");
translit = translit.replace(/ойе/g, "оyyе");
translit = translit.replace(/уйе/g, "уyyе");
translit = translit.replace(/ӳйе/g, "ӳyyе");
translit = translit.replace(/ыйе/g, "ыyyе");
translit = translit.replace(/эйе/g, "эyyе");
translit = translit.replace(/юйе/g, "юyyе");
translit = translit.replace(/яйе/g, "яyyе");

translit = translit.replace(/Айе/g, "Аyyе");
translit = translit.replace(/Ӑйе/g, "Ӑyyе");
translit = translit.replace(/Ейе/g, "Еyyе");
translit = translit.replace(/Ёйе/g, "Ёyyе");
translit = translit.replace(/Ӗйе/g, "Ӗyyе");
translit = translit.replace(/Ийе/g, "Иyyе");
translit = translit.replace(/Ойе/g, "Оyyе");
translit = translit.replace(/Уйе/g, "Уyyе");
translit = translit.replace(/Ӳйе/g, "Ӳyyе");
translit = translit.replace(/Ыйе/g, "Ыyyе");
translit = translit.replace(/Эйе/g, "Эyyе");
translit = translit.replace(/Юйе/g, "Юyyе");
translit = translit.replace(/Яйе/g, "Яyyе");

translit = translit.replace(/АЙЕ/g, "АYYЕ");
translit = translit.replace(/ӐЙЕ/g, "ӐYYЕ");
translit = translit.replace(/ЕЙЕ/g, "ЕYYЕ");
translit = translit.replace(/ЁЙЕ/g, "ЁYYЕ");
translit = translit.replace(/ӖЙЕ/g, "ӖYYЕ");
translit = translit.replace(/ИЙЕ/g, "ИYYЕ");
translit = translit.replace(/ОЙЕ/g, "ОYYЕ");
translit = translit.replace(/УЙЕ/g, "УYYЕ");
translit = translit.replace(/ӲЙЕ/g, "ӲYYЕ");
translit = translit.replace(/ЫЙЕ/g, "ЫYYЕ");
translit = translit.replace(/ЭЙЕ/g, "ЭYYЕ");
translit = translit.replace(/ЮЙЕ/g, "ЮYYЕ");
translit = translit.replace(/ЯЙЕ/g, "ЯYYЕ");

translit = translit.replace(/ ё/g, " yё");
translit = translit.replace(/\nё/g, "\nyё");
translit = translit.replace(/\rё/g, "\ryё");
translit = translit.replace(/^ё/g, "yё");
translit = translit.replace(/\u003eё/g, "\u003eyё");

translit = translit.replace(/ Ё/g, " Yё");
translit = translit.replace(/\nЁ/g, "\nYё");
translit = translit.replace(/\rЁ/g, "\rYё");
translit = translit.replace(/^Ё/g, "Yё");
translit = translit.replace(/\u003eЁ/g, "\u003eYё");

translit = translit.replace(/аё/g, "аyё");
translit = translit.replace(/ӑё/g, "ӑyё");
translit = translit.replace(/её/g, "еyё");
translit = translit.replace(/ёё/g, "ёyё");
translit = translit.replace(/ӗё/g, "ӗyё");
translit = translit.replace(/иё/g, "иyё");
translit = translit.replace(/оё/g, "оyё");
translit = translit.replace(/уё/g, "уyё");
translit = translit.replace(/ӳё/g, "ӳyё");
translit = translit.replace(/ъё/g, "ъyё");
translit = translit.replace(/ыё/g, "ыyё");
translit = translit.replace(/ьё/g, "ьyё");
translit = translit.replace(/эё/g, "эyё");
translit = translit.replace(/юё/g, "юyё");
translit = translit.replace(/яё/g, "яyё");

translit = translit.replace(/Аё/g, "Аyё");
translit = translit.replace(/Ӑё/g, "Ӑyё");
translit = translit.replace(/Её/g, "Еyё");
translit = translit.replace(/Ёё/g, "Ёyё");
translit = translit.replace(/Ӗё/g, "Ӗyё");
translit = translit.replace(/Иё/g, "Иyё");
translit = translit.replace(/Оё/g, "Оyё");
translit = translit.replace(/Уё/g, "Уyё");
translit = translit.replace(/Ӳё/g, "Ӳyё");
translit = translit.replace(/Ъё/g, "Ъyё");
translit = translit.replace(/Ыё/g, "Ыyё");
translit = translit.replace(/Ьё/g, "Ьyё");
translit = translit.replace(/Эё/g, "Эyё");
translit = translit.replace(/Юё/g, "Юyё");
translit = translit.replace(/Яё/g, "Яyё");

translit = translit.replace(/АЁ/g, "АYЁ");
translit = translit.replace(/ӐЁ/g, "ӐYЁ");
translit = translit.replace(/ЕЁ/g, "ЕYЁ");
translit = translit.replace(/ЁЁ/g, "ЁYЁ");
translit = translit.replace(/ӖЁ/g, "ӖYЁ");
translit = translit.replace(/ИЁ/g, "ИYЁ");
translit = translit.replace(/ОЁ/g, "ОYЁ");
translit = translit.replace(/УЁ/g, "УYЁ");
translit = translit.replace(/ӲЁ/g, "ӲYЁ");
translit = translit.replace(/ЪЁ/g, "ЪYЁ");
translit = translit.replace(/ЫЁ/g, "ЫYЁ");
translit = translit.replace(/ЬЁ/g, "ЬYЁ");
translit = translit.replace(/ЭЁ/g, "ЭYЁ");
translit = translit.replace(/ЮЁ/g, "ЮYЁ");
translit = translit.replace(/ЯЁ/g, "ЯYЁ");

translit = translit.replace(/айё/g, "аyyё");
translit = translit.replace(/ӑйё/g, "ӑyyё");
translit = translit.replace(/ейё/g, "еyyё");
translit = translit.replace(/ёйё/g, "ёyyё");
translit = translit.replace(/ӗйё/g, "ӗyyё");
translit = translit.replace(/ийё/g, "иyyё");
translit = translit.replace(/ойё/g, "оyyё");
translit = translit.replace(/уйё/g, "уyyё");
translit = translit.replace(/ӳйё/g, "ӳyyё");
translit = translit.replace(/ыйё/g, "ыyyё");
translit = translit.replace(/эйё/g, "эyyё");
translit = translit.replace(/юйё/g, "юyyё");
translit = translit.replace(/яйё/g, "яyyё");

translit = translit.replace(/Айё/g, "Аyyё");
translit = translit.replace(/Ӑйё/g, "Ӑyyё");
translit = translit.replace(/Ейё/g, "Еyyё");
translit = translit.replace(/Ёйё/g, "Ёyyё");
translit = translit.replace(/Ӗйё/g, "Ӗyyё");
translit = translit.replace(/Ийё/g, "Иyyё");
translit = translit.replace(/Ойё/g, "Оyyё");
translit = translit.replace(/Уйё/g, "Уyyё");
translit = translit.replace(/Ӳйё/g, "Ӳyyё");
translit = translit.replace(/Ыйё/g, "Ыyyё");
translit = translit.replace(/Эйё/g, "Эyyё");
translit = translit.replace(/Юйё/g, "Юyyё");
translit = translit.replace(/Яйё/g, "Яyyё");

translit = translit.replace(/АЙЁ/g, "АYYЁ");
translit = translit.replace(/ӐЙЁ/g, "ӐYYЁ");
translit = translit.replace(/ЕЙЁ/g, "ЕYYЁ");
translit = translit.replace(/ЁЙЁ/g, "ЁYYЁ");
translit = translit.replace(/ӖЙЁ/g, "ӖYYЁ");
translit = translit.replace(/ИЙЁ/g, "ИYYЁ");
translit = translit.replace(/ОЙЁ/g, "ОYYЁ");
translit = translit.replace(/УЙЁ/g, "УYYЁ");
translit = translit.replace(/ӲЙЁ/g, "ӲYYЁ");
translit = translit.replace(/ЫЙЁ/g, "ЫYYЁ");
translit = translit.replace(/ЭЙЁ/g, "ЭYYЁ");
translit = translit.replace(/ЮЙЁ/g, "ЮYYЁ");
translit = translit.replace(/ЯЙЁ/g, "ЯYYЁ");

translit = translit.replace(/ э/g, " е");
translit = translit.replace(/\nэ/g, "\nе");
translit = translit.replace(/\rэ/g, "\rе");
translit = translit.replace(/^э/g, "е");
translit = translit.replace(/\u003eэ/g, "\u003eе");

translit = translit.replace(/ Э/g, " Е");
translit = translit.replace(/\nЭ/g, "\nЕ");
translit = translit.replace(/\rЭ/g, "\rЕ");
translit = translit.replace(/^Э/g, "Е");
translit = translit.replace(/\u003eЭ/g, "\u003eЕ");

translit = translit.replace(/аэ/g, "ае");
translit = translit.replace(/ӑэ/g, "ӑе");
translit = translit.replace(/еэ/g, "ее");
translit = translit.replace(/ёэ/g, "ёе");
translit = translit.replace(/ӗэ/g, "ӗе");
translit = translit.replace(/иэ/g, "ие");
translit = translit.replace(/йэ/g, "йе");
translit = translit.replace(/оэ/g, "ое");
translit = translit.replace(/уэ/g, "уе");
translit = translit.replace(/ӳэ/g, "ӳе");
translit = translit.replace(/ъэ/g, "ъе");
translit = translit.replace(/ыэ/g, "ые");
translit = translit.replace(/ьэ/g, "ье");
translit = translit.replace(/ээ/g, "эе");
translit = translit.replace(/юэ/g, "юе");
translit = translit.replace(/яэ/g, "яе");

translit = translit.replace(/Аэ/g, "Ае");
translit = translit.replace(/Ӑэ/g, "Ӑе");
translit = translit.replace(/Еэ/g, "Ее");
translit = translit.replace(/Ёэ/g, "Ёе");
translit = translit.replace(/Ӗэ/g, "Ӗе");
translit = translit.replace(/Иэ/g, "Ие");
translit = translit.replace(/Йэ/g, "Йе");
translit = translit.replace(/Оэ/g, "Ое");
translit = translit.replace(/Уэ/g, "Уе");
translit = translit.replace(/Ӳэ/g, "Ӳе");
translit = translit.replace(/Ъэ/g, "Ъе");
translit = translit.replace(/Ыэ/g, "Ые");
translit = translit.replace(/Ьэ/g, "Ье");
translit = translit.replace(/Ээ/g, "Эе");
translit = translit.replace(/Юэ/g, "Юе");
translit = translit.replace(/Яэ/g, "Яе");

translit = translit.replace(/АЭ/g, "АЕ");
translit = translit.replace(/ӐЭ/g, "ӐЕ");
translit = translit.replace(/ЕЭ/g, "ЕЕ");
translit = translit.replace(/ЁЭ/g, "ЁЕ");
translit = translit.replace(/ӖЭ/g, "ӖЕ");
translit = translit.replace(/ИЭ/g, "ИЕ");
translit = translit.replace(/ЙЭ/g, "ЙЕ");
translit = translit.replace(/ОЭ/g, "ОЕ");
translit = translit.replace(/УЭ/g, "УЕ");
translit = translit.replace(/ӲЭ/g, "ӲЕ");
translit = translit.replace(/ЪЭ/g, "ЪЕ");
translit = translit.replace(/ЫЭ/g, "ЫЕ");
translit = translit.replace(/ЬЭ/g, "ЬЕ");
translit = translit.replace(/ЭЭ/g, "ЭЕ");
translit = translit.replace(/ЮЭ/g, "ЮЕ");
translit = translit.replace(/ЯЭ/g, "ЯЕ");

translit = translit.replace(/ль/g, "ļ");
translit = translit.replace(/нь/g, "ņ");
translit = translit.replace(/рь/g, "ŗ");
translit = translit.replace(/ть/g, "ț");
translit = translit.replace(/Ль/g, "Ļ");
translit = translit.replace(/Нь/g, "Ņ");
translit = translit.replace(/Рь/g, "Ŗ");
translit = translit.replace(/Ть/g, "Ț");
translit = translit.replace(/ЛЬ/g, "Ļ");
translit = translit.replace(/НЬ/g, "Ņ");
translit = translit.replace(/РЬ/g, "Ŗ");
translit = translit.replace(/ТЬ/g, "Ț");

translit = translit.replace(/дж/g, "џ");
translit = translit.replace(/Дж/g, "Џ");
translit = translit.replace(/ДЖ/g, "Џ");

translit = translit.replace(/а/g, "a");
translit = translit.replace(/ӑ/g, "o");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ё/g, "ë");
translit = translit.replace(/ӗ/g, "ö");
translit = translit.replace(/ж/g, "ž");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/й/g, "y");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "l");
translit = translit.replace(/м/g, "m");
translit = translit.replace(/н/g, "n");
translit = translit.replace(/о/g, "ò");
translit = translit.replace(/п/g, "p");
translit = translit.replace(/р/g, "r");
translit = translit.replace(/с/g, "s");
translit = translit.replace(/ҫ/g, "ś");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ӳ/g, "ü");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "h");
translit = translit.replace(/ц/g, "c");
translit = translit.replace(/ч/g, "č");
translit = translit.replace(/џ/g, "j");
translit = translit.replace(/ш/g, "š");
translit = translit.replace(/щ/g, "ŝ");
translit = translit.replace(/ъ/g, "ʼ");
translit = translit.replace(/ы/g, "ï");
translit = translit.replace(/ь/g, "");
translit = translit.replace(/э/g, "è");
translit = translit.replace(/ю/g, "yu");
translit = translit.replace(/я/g, "ya");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Ӑ/g, "O");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ё/g, "Ë");
translit = translit.replace(/Ӗ/g, "Ö");
translit = translit.replace(/Ж/g, "Ž");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "I");
translit = translit.replace(/Й/g, "Y");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "L");
translit = translit.replace(/М/g, "M");
translit = translit.replace(/Н/g, "N");
translit = translit.replace(/О/g, "Ò");
translit = translit.replace(/П/g, "P");
translit = translit.replace(/Р/g, "R");
translit = translit.replace(/С/g, "S");
translit = translit.replace(/Ҫ/g, "Ś");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ӳ/g, "Ü");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "H");
translit = translit.replace(/Ц/g, "C");
translit = translit.replace(/Ч/g, "Č");
translit = translit.replace(/Џ/g, "J");
translit = translit.replace(/Ш/g, "Š");
translit = translit.replace(/Щ/g, "Ŝ");
translit = translit.replace(/Ъ/g, "ʼ");
translit = translit.replace(/Ы/g, "Ï");
translit = translit.replace(/Ь/g, "");
translit = translit.replace(/Э/g, "È");
translit = translit.replace(/Ю/g, "Yu");
translit = translit.replace(/Я/g, "Ya");
translit = translit.replace(/«/g, "\u201c");
translit = translit.replace(/»/g, "\u201d");
document.transcription.text1.value = car;
document.transcription.text2.value = translit;
}

function latcyr () {
translit = document.transcription.text2.value;
translit = translit.replace(/w/g, "v");
translit = translit.replace(/W/g, "V");
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
