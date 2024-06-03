
var car;
var translit;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
 car = car.replace(/(\u0361|ˈ|ˌ|\u002f|\u005b|\u005d|\u002e)/g, "");
 car = car.replace(/t\u032e/g, "d");
 car = car.replace(/ɚ/g, "əɹ");
 car = car.replace(/ɝ/g, "ɜɹ");
 car = car.replace(/ɑ˞/g, "ɑɹ");
 car = car.replace(/ɔ˞/g, "ɔɹ");
 car = car.replace(/u/g, "û");
 car = car.replace(/eɪ/g, "ej");
 car = car.replace(/oʊ/g, "ô");
 car = car.replace(/aɪ/g, "aj");
 car = car.replace(/ɔɪ/g, "oj");
 car = car.replace(/aʊ/g, "æu");
 car = car.replace(/i/g, "î");
 car = car.replace(/ɑ/g, "a");
 car = car.replace(/ɔ/g, "o");
 car = car.replace(/ɜ/g, "ö");
 car = car.replace(/ə/g, "ı"); 
 car = car.replace(/ɪ/g, "i");
 car = car.replace(/ɛ/g, "e");
 car = car.replace(/ʌ/g, "a");
 car = car.replace(/ʊ/g, "u");
 car = car.replace(/ç/g, "hj");
 car = car.replace(/ʍ/g, "hw");
 car = car.replace(/tʃ/g, "ç");
 car = car.replace(/dʒ/g, "c");
 car = car.replace(/ŋ/g, "ň");
 car = car.replace(/θ/g, "ŧ");
 car = car.replace(/ð/g, "đ");
 car = car.replace(/j/g, "y");
 car = car.replace(/ʃ/g, "ş");
 car = car.replace(/ʒ/g, "j");
 car = car.replace(/(ɹ|ɻ)/g, "r");
 car = car.replace(/ɡ/g, "g");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}