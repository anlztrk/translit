
var car;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
translit = translit.replace(/ı/g, "i");
translit = translit.replace(/İ/g, "Î");

car = car.replace(/c/g, "щ");
car = car.replace(/j/g, "ж");
car = car.replace(/C/g, "Щ");
car = car.replace(/J/g, "Ж");
car = car.replace(/ç/g, "c");
car = car.replace(/ê/g, "é");
car = car.replace(/ı/g, "i");
car = car.replace(/İ/g, "Í");
car = car.replace(/î/g, "í");
car = car.replace(/ş/g, "sh");
car = car.replace(/û/g, "ú");
car = car.replace(/Ç/g, "C");
car = car.replace(/Ê/g, "É");
car = car.replace(/Î/g, "Í");
car = car.replace(/Ş/g, "Sh");
car = car.replace(/Û/g, "Ú");
car = car.replace(/ж/g, "jh");
car = car.replace(/щ/g, "j");
car = car.replace(/Ж/g, "Jh");
car = car.replace(/Щ/g, "J");
document.transcription.text1.value = translit;
document.transcription.text2.value = car;
}

function latcyr () {
car = document.transcription.text2.value;

car = car.replace(/jh/g, "ж");
car = car.replace(/Jh/g, "Ж");
car = car.replace(/JH/g, "Ж");
car = car.replace(/j/g, "щ");
car = car.replace(/J/g, "Щ");
car = car.replace(/c/g, "ç");
car = car.replace(/é/g, "ê");
car = car.replace(/í/g, "î");
car = car.replace(/sh/g, "ş");
car = car.replace(/ú/g, "û");
car = car.replace(/C/g, "Ç");
car = car.replace(/É/g, "Ê");
car = car.replace(/Í/g, "Î");
car = car.replace(/Sh/g, "Ş");
car = car.replace(/SH/g, "Ş");
car = car.replace(/Ú/g, "Û");
car = car.replace(/щ/g, "c");
car = car.replace(/ж/g, "j");
car = car.replace(/Щ/g, "C");
car = car.replace(/Ж/g, "J");
document.transcription.text1.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}