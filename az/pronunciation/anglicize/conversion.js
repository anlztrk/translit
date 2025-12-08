function cyrlat () {
var car;
var translit;
car = document.transcription.text1.value;
car = car.replace(/Ä/g, "Ə");
car = car.replace(/ä/g, "ə");
translit = car;
car = car.replace(/Ə(\p{L})/ug, "A$1");
car = car.replace(/ə(\p{L})/ug, "a$1");
car = car.replace(/Ə/g, "EH");
car = car.replace(/J/g, "Zh");
car = car.replace(/C/g, "J");
car = car.replace(/Ç/g, "Ch");
car = car.replace(/Ğ/g, "GH");
car = car.replace(/X/g, "Kh");
car = car.replace(/İ/g, "I");
car = car.replace(/Ş/g, "Sh");
car = car.replace(/Q/g, "G");
car = car.replace(/Ö/g, "O");
car = car.replace(/Ü/g, "U");
car = car.replace(/ə/g, "eh");
car = car.replace(/j/g, "zh");
car = car.replace(/c/g, "j");
car = car.replace(/ç/g, "ch");
car = car.replace(/ğ/g, "gh");
car = car.replace(/x/g, "kh");
car = car.replace(/ı/g, "i");
car = car.replace(/ş/g, "sh");
car = car.replace(/q/g, "g");
car = car.replace(/ö/g, "o");
car = car.replace(/ü/g, "u");
document.transcription.text1.value=translit;
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
