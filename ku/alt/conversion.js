
var car;

function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
translit = translit.replace(/ı/g, "i");
translit = translit.replace(/İ/g, "Î");
car = car.replace(/ı/g, "i");
car = car.replace(/İ/g, "Î");

car = car.replace(/c/g, "ĝ");
car = car.replace(/ç/g, "c");
car = car.replace(/ş/g, "ŝ");
car = car.replace(/C/g, "Ĝ");
car = car.replace(/Ç/g, "C");
car = car.replace(/Ş/g, "Ŝ");
document.transcription.text1.value = translit;
document.transcription.text2.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
