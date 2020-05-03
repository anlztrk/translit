
var car;

function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
translit = translit.replace(/ı/g, "i");
translit = translit.replace(/İ/g, "Î");
car = car.replace(/ı/g, "i");
car = car.replace(/İ/g, "Î");

car = car.replace(/j/g, "ž");
car = car.replace(/c/g, "j");
car = car.replace(/ç/g, "c");
car = car.replace(/ş/g, "š");
car = car.replace(/a/g, "ā");
car = car.replace(/e/g, "a");
car = car.replace(/ê/g, "e");
car = car.replace(/î/g, "ī");
car = car.replace(/û/g, "ū");
car = car.replace(/J/g, "Ž");
car = car.replace(/C/g, "J");
car = car.replace(/Ç/g, "C");
car = car.replace(/Ş/g, "Š");
car = car.replace(/A/g, "Ā");
car = car.replace(/E/g, "A");
car = car.replace(/Ê/g, "E");
car = car.replace(/Î/g, "Ī");
car = car.replace(/Û/g, "Ū");
document.transcription.text1.value = translit;
document.transcription.text2.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}