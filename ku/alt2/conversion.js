
var car;

function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
translit = translit.replace(/ı/g, "i");
translit = translit.replace(/İ/g, "Î");
car = car.replace(/ı/g, "i");
car = car.replace(/İ/g, "Î");

car = car.replace(/j/g, "ĵ");
car = car.replace(/c/g, "j");
car = car.replace(/ç/g, "c");
car = car.replace(/ş/g, "ŝ");
car = car.replace(/ê/g, "é");
car = car.replace(/î/g, "í");
car = car.replace(/û/g, "ú");
car = car.replace(/J/g, "Ĵ");
car = car.replace(/Ç/g, "C");
car = car.replace(/Ş/g, "Ŝ");
car = car.replace(/Ê/g, "É");
car = car.replace(/Î/g, "Í");
car = car.replace(/Û/g, "Ú");
document.transcription.text1.value = translit;
document.transcription.text2.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}