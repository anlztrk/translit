﻿//  copyright lexilogos.com
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ е/g, " y\u005Bе\u007Cы\u005D");
  car = car.replace(/^е/g, "y\u005Bе\u007Cы\u005D");
  car = car.replace(/-е/g, "-y\u005Bе\u007Cы\u005D");
  car = car.replace(/–е/g, "–y\u005Bе\u007Cы\u005D");
  car = car.replace(/\nе/g, "\ny\u005Bе\u007Cы\u005D");
  car = car.replace(/ Е/g, " Y\u005Bе\u007Cы\u005D");
  car = car.replace(/^Е/g, "Y\u005Bе\u007Cы\u005D");
  car = car.replace(/-Е/g, "-Y\u005Bе\u007Cы\u005D");
  car = car.replace(/–Е/g, "–Y\u005Bе\u007Cы\u005D");
  car = car.replace(/\nЕ/g, "\nY\u005Bе\u007Cы\u005D");
  
  car = car.replace(/АЕ/g, "AYЫ");
  car = car.replace(/ЯЕ/g, "Y\u005BÄYЕ\u007CAYЫ\u005D");
  car = car.replace(/ОЕ/g, "OYЫ");
  car = car.replace(/УЕ/g, "UYЫ");
  car = car.replace(/ЮЕ/g, "Y\u005BÜWЕ\u007CUYЫ\u005D");
  car = car.replace(/ЕЕ/g, "Y\u005BEYЕ\u007CIYЫ\u005D");
  car = car.replace(/ӘЕ/g, "ÄYЕ");
  car = car.replace(/ЭЕ/g, "EYЕ");
  car = car.replace(/ИЕ/g, "İYЕ");
  car = car.replace(/ӨЕ/g, "ÖYЕ");
  car = car.replace(/ҮЕ/g, "ÜWЕ");
  
  car = car.replace(/Ае/g, "Ayы");
  car = car.replace(/Яе/g, "Y\u005Bäyе\u007Cayы\u005D");
  car = car.replace(/Ое/g, "Oyы");
  car = car.replace(/Уе/g, "Uyы");
  car = car.replace(/Юе/g, "Y\u005Büwе\u007Cuyы\u005D");
  car = car.replace(/Ее/g, "Y\u005Beyе\u007Cıyы\u005D");
  car = car.replace(/Әе/g, "Äyе");
  car = car.replace(/Эе/g, "Eyе");
  car = car.replace(/Ие/g, "İyе");
  car = car.replace(/Өе/g, "Öyе");
  car = car.replace(/Үе/g, "Üwе");
  
  car = car.replace(/ае/g, "ayы");
  car = car.replace(/яе/g, "y\u005Bäyе\u007Cayы\u005D");
  car = car.replace(/ое/g, "oyы");
  car = car.replace(/уе/g, "uyы");
  car = car.replace(/юе/g, "y\u005Büwе\u007Cuyы\u005D");
  car = car.replace(/ее/g, "y\u005Beyе\u007Cıyы\u005D");
  car = car.replace(/әе/g, "äyе");
  car = car.replace(/эе/g, "eyе");
  car = car.replace(/ие/g, "iyе");
  car = car.replace(/өе/g, "öyе");
  car = car.replace(/үе/g, "üwе");
  
  car = car.replace(/е/g, "э");
  car = car.replace(/Е/g, "Э");
  
  car = car.replace(/ау/g, "ав");
  car = car.replace(/Ау/g, "Ав");
  car = car.replace(/АУ/g, "АВ");
  car = car.replace(/әү/g, "әв");
  car = car.replace(/Әү/g, "Әв");
  car = car.replace(/ӘҮ/g, "ӘВ");
  car = car.replace(/яу/g, "яв");
  car = car.replace(/Яу/g, "Яв");
  car = car.replace(/ЯУ/g, "ЯВ");
  car = car.replace(/яү/g, "яв");
  car = car.replace(/Яү/g, "Яв");
  car = car.replace(/ЯҮ/g, "ЯВ");
  car = car.replace(/уа/g, "ува");
  car = car.replace(/уэ/g, "увэ");
  car = car.replace(/уы/g, "увы");
  car = car.replace(/уи/g, "уви");
  car = car.replace(/уо/g, "уво");
  car = car.replace(/уө/g, "увө");
  car = car.replace(/уу/g, "уву");
  car = car.replace(/уү/g, "увү");
  car = car.replace(/уа/g, "ува");
  car = car.replace(/уэ/g, "увэ");
  car = car.replace(/уы/g, "увы");
  car = car.replace(/уи/g, "уви");
  car = car.replace(/уо/g, "уво");
  car = car.replace(/уө/g, "увө");
  car = car.replace(/уу/g, "уву");
  car = car.replace(/уү/g, "увү");
  car = car.replace(/Уа/g, "Ува");
  car = car.replace(/Уэ/g, "Увэ");
  car = car.replace(/Уы/g, "Увы");
  car = car.replace(/Уи/g, "Уви");
  car = car.replace(/Уо/g, "Уво");
  car = car.replace(/Уө/g, "Увө");
  car = car.replace(/Уу/g, "Уву");
  car = car.replace(/Уү/g, "Увү");
  car = car.replace(/УА/g, "УВА");
  car = car.replace(/УЭ/g, "УВЭ");
  car = car.replace(/УЫ/g, "УВЫ");
  car = car.replace(/УИ/g, "УВИ");
  car = car.replace(/УО/g, "УВО");
  car = car.replace(/УӨ/g, "УВӨ");
  car = car.replace(/УУ/g, "УВУ");
  car = car.replace(/УҮ/g, "УВҮ");
  car = car.replace(/үа/g, "үва");
  car = car.replace(/үэ/g, "үвэ");
  car = car.replace(/үы/g, "үвы");
  car = car.replace(/үи/g, "үви");
  car = car.replace(/үо/g, "үво");
  car = car.replace(/үө/g, "үвө");
  car = car.replace(/үу/g, "үву");
  car = car.replace(/үү/g, "үвү");
  car = car.replace(/Үа/g, "Үва");
  car = car.replace(/Үэ/g, "Үвэ");
  car = car.replace(/Үы/g, "Үвы");
  car = car.replace(/Үи/g, "Үви");
  car = car.replace(/Үо/g, "Үво");
  car = car.replace(/Үө/g, "Үвө");
  car = car.replace(/Үу/g, "Үву");
  car = car.replace(/Үү/g, "Үвү");
  car = car.replace(/ҮА/g, "ҮВА");
  car = car.replace(/ҮЭ/g, "ҮВЭ");
  car = car.replace(/ҮЫ/g, "ҮВЫ");
  car = car.replace(/ҮИ/g, "ҮВИ");
  car = car.replace(/ҮО/g, "ҮВО");
  car = car.replace(/ҮӨ/g, "ҮВӨ");
  car = car.replace(/ҮУ/g, "ҮВУ");
  car = car.replace(/ҮҮ/g, "ҮВҮ");
  
  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/д/g, "d");
  car = car.replace(/э/g, "e");
  car = car.replace(/ә/g, "ä");
  car = car.replace(/ф/g, "f");
  car = car.replace(/г/g, "g");
  car = car.replace(/х/g, "x");
  car = car.replace(/һ/g, "h");
  car = car.replace(/и/g, "i");
  car = car.replace(/җ/g, "c");
  car = car.replace(/ж/g, "j");
  car = car.replace(/к/g, "k");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/ң/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/ө/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/в/g, "w");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/й/g, "y");
  car = car.replace(/з/g, "z");
  car = car.replace(/ь/g, "Ь");
  car = car.replace(/ъ/g, "Ъ");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Э/g, "E");
  car = car.replace(/Ә/g, "Ä");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Х/g, "X");
  car = car.replace(/Һ/g, "H");
  car = car.replace(/И/g, "İ");
  car = car.replace(/Җ/g, "C");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/К/g, "K");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Ң/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/Ө/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/В/g, "W");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/З/g, "Z");
  car = car.replace(/ц/g, "ts");
  car = car.replace(/ю/g, "y\u005Bü\u007Cu\u005D");
  car = car.replace(/ё/g, "yo");
  car = car.replace(/я/g, "y\u005Bä\u007Ca\u005D");
  car = car.replace(/Ц/g, "Ts");
  car = car.replace(/Ю/g, "Y\u005Bü\u007Cu\u005D");
  car = car.replace(/Ё/g, "Yo");
  car = car.replace(/Я/g, "Y\u005Bä\u007Ca\u005D");
  car = car.replace(/Ь/g, "\u0028Ь\u0029");
  car = car.replace(/Ъ/g, "\u0028Ъ\u0029");
  
  car = car.replace(/ag/g, "ağ");
  car = car.replace(/a\u005Dg/g, "a\u005Dğ");
  car = car.replace(/ıg/g, "ığ");
  car = car.replace(/og/g, "oğ");
  car = car.replace(/ug/g, "uğ");
  car = car.replace(/u\u005Dg/g, "u\u005Dğ");
  
  car = car.replace(/ga/g, "ğa");
  car = car.replace(/gı/g, "ğı");
  car = car.replace(/go/g, "ğo");
  car = car.replace(/gu/g, "ğu");
  
  car = car.replace(/Ag/g, "Ağ");
  car = car.replace(/A\u005Dg/g, "A\u005Dğ");
  car = car.replace(/Ig/g, "Iğ");
  car = car.replace(/Og/g, "Oğ");
  car = car.replace(/Ug/g, "Uğ");
  car = car.replace(/U\u005Dg/g, "U\u005Dğ");
  
  car = car.replace(/Ga/g, "Ğa");
  car = car.replace(/Gı/g, "Ğı");
  car = car.replace(/Go/g, "Ğo");
  car = car.replace(/Gu/g, "Ğu");
  
  car = car.replace(/AG/g, "AĞ");
  car = car.replace(/A\u005DG/g, "A\u005DĞ");
  car = car.replace(/IG/g, "IĞ");
  car = car.replace(/OG/g, "OĞ");
  car = car.replace(/UG/g, "UĞ");
  car = car.replace(/U\u005DĞ/g, "U\u005DĞ");
  
  car = car.replace(/GA/g, "ĞA");
  car = car.replace(/GI/g, "ĞI");
  car = car.replace(/GO/g, "ĞO");
  car = car.replace(/GU/g, "ĞU");
  
  car = car.replace(/ak/g, "aq");
  car = car.replace(/a\u005Dk/g, "a\u005Dq");
  car = car.replace(/ık/g, "ıq");
  car = car.replace(/ok/g, "oq");
  car = car.replace(/uk/g, "uq");
  car = car.replace(/u\u005Dk/g, "u\u005Dq");
  
  car = car.replace(/ka/g, "qa");
  car = car.replace(/kı/g, "qı");
  car = car.replace(/ko/g, "qo");
  car = car.replace(/ku/g, "qu");
  
  car = car.replace(/Ak/g, "Aq");
  car = car.replace(/A\u005Dk/g, "A\u005Dq");
  car = car.replace(/Ik/g, "Iq");
  car = car.replace(/Ok/g, "Oq");
  car = car.replace(/Uk/g, "Uq");
  car = car.replace(/U\u005Dk/g, "U\u005Dq");
  
  car = car.replace(/Ka/g, "Qa");
  car = car.replace(/Kı/g, "Qı");
  car = car.replace(/Ko/g, "Qo");
  car = car.replace(/Ku/g, "Qu");
  
  car = car.replace(/AK/g, "AQ");
  car = car.replace(/A\u005DK/g, "A\u005DQ");
  car = car.replace(/IK/g, "IQ");
  car = car.replace(/OK/g, "OQ");
  car = car.replace(/UK/g, "UQ");
  car = car.replace(/U\u005DK/g, "U\u005DQ");
  
  car = car.replace(/KA/g, "QA");
  car = car.replace(/KI/g, "QI");
  car = car.replace(/KO/g, "QO");
  car = car.replace(/KU/g, "QU");
  
  car = car.replace(/ğä/g, "gä");
  car = car.replace(/ğe/g, "ge");
  car = car.replace(/ği/g, "gi");
  car = car.replace(/ğö/g, "gö");
  car = car.replace(/ğü/g, "gü");
  
  car = car.replace(/Ğä/g, "Gä");
  car = car.replace(/Ğe/g, "Ge");
  car = car.replace(/Ği/g, "Gi");
  car = car.replace(/Ğö/g, "Gö");
  car = car.replace(/Ğü/g, "Gü");
  
  car = car.replace(/ĞÄ/g, "GÄ");
  car = car.replace(/ĞE/g, "GE");
  car = car.replace(/Ğİ/g, "Gİ");
  car = car.replace(/ĞÖ/g, "GÖ");
  car = car.replace(/ĞÜ/g, "GÜ");
  
  car = car.replace(/qä/g, "kä");
  car = car.replace(/qe/g, "ke");
  car = car.replace(/qi/g, "ki");
  car = car.replace(/qö/g, "kö");
  car = car.replace(/qü/g, "kü");
  
  car = car.replace(/Qä/g, "Kä");
  car = car.replace(/Qe/g, "Ke");
  car = car.replace(/Qi/g, "Ki");
  car = car.replace(/Qö/g, "Kö");
  car = car.replace(/Qü/g, "Kü");
  
  car = car.replace(/QÄ/g, "KÄ");
  car = car.replace(/QE/g, "KE");
  car = car.replace(/Qİ/g, "Kİ");
  car = car.replace(/QÖ/g, "KÖ");
  car = car.replace(/QÜ/g, "KÜ");  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}