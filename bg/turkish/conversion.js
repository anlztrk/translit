
var car;

function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
translit = translit.replace(/Ы/g, "Ъ");
car = car.replace(/Ы/g, "Ъ");
translit = translit.replace(/ы/g, "ъ");
car = car.replace(/ы/g, "ъ");
car = car.replace(/ъ̀/g, "ъ");
car = car.replace(/дж/g, "џ");
car = car.replace(/Дж/g, "Џ");
car = car.replace(/ДЖ/g, "Џ");
car = car.replace(/тс/g, "т-с");
car = car.replace(/Тс/g, "Т-с");
car = car.replace(/ТС/g, "Т-С");

car = car.replace(/кя/g, "кâ");
car = car.replace(/кю/g, "кû");
car = car.replace(/гя/g, "гâ");
car = car.replace(/гю/g, "гû");
car = car.replace(/ля/g, "лâ");
car = car.replace(/лю/g, "лû");
car = car.replace(/Кя/g, "Кâ");
car = car.replace(/Кю/g, "Кû");
car = car.replace(/Гя/g, "Гâ");
car = car.replace(/Гю/g, "Гû");
car = car.replace(/Ля/g, "Лâ");
car = car.replace(/Лю/g, "Лû");
car = car.replace(/КЯ/g, "КÂ");
car = car.replace(/КЮ/g, "КÛ");
car = car.replace(/ГЯ/g, "ГÂ");
car = car.replace(/ГЮ/g, "ГÛ");
car = car.replace(/ЛЯ/g, "ЛÂ");
car = car.replace(/ЛЮ/g, "ЛÛ");

car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/ж/g, "j");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/ѝ/g, "ì");
car = car.replace(/й/g, "y");
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
car = car.replace(/ц/g, "ѕ");
car = car.replace(/џ/g, "c");
car = car.replace(/ч/g, "ç");
car = car.replace(/ш/g, "ş");
car = car.replace(/щ/g, "şt");
car = car.replace(/ъ/g, "ı");
car = car.replace(/ь/g, "y");
car = car.replace(/ю/g, "yu");
car = car.replace(/я/g, "ya");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Ж/g, "J");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "İ");
car = car.replace(/Ѝ/g, "Ì");
car = car.replace(/Й/g, "Y");
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
car = car.replace(/Ц/g, "Ѕ");
car = car.replace(/Ч/g, "Ç");
car = car.replace(/Џ/g, "C");
car = car.replace(/Ш/g, "Ş");
car = car.replace(/Щ/g, "Şt");
car = car.replace(/Ъ/g, "I");
car = car.replace(/Ь/g, "Y");
car = car.replace(/Ю/g, "Yu");
car = car.replace(/Я/g, "Ya");

car = car.replace(/aѕ/g, "ats");
car = car.replace(/eѕ/g, "ets");
car = car.replace(/ıѕ/g, "ıts");
car = car.replace(/iѕ/g, "its");
car = car.replace(/oѕ/g, "ots");
car = car.replace(/uѕ/g, "uts");
car = car.replace(/Aѕ/g, "Ats");
car = car.replace(/Eѕ/g, "Ets");
car = car.replace(/Iѕ/g, "Its");
car = car.replace(/İѕ/g, "İts");
car = car.replace(/Oѕ/g, "Ots");
car = car.replace(/Uѕ/g, "Uts");
car = car.replace(/AЅ/g, "ATS");
car = car.replace(/EЅ/g, "ETS");
car = car.replace(/IЅ/g, "ITS");
car = car.replace(/İЅ/g, "İTS");
car = car.replace(/OЅ/g, "OTS");
car = car.replace(/UЅ/g, "UTS");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}