
var translit;
var car;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
car = car.replace(/в/g, "b");
car = car.replace(/ʙ/g, "b");
car = car.replace(/Ğ/g, "Ǧ");
car = car.replace(/ğ/g, "ǧ");
car = car.replace(/Ġ/g, "Ǧ");
car = car.replace(/ġ/g, "ǧ");
car = car.replace(/Ƣ/g, "Ǧ");
car = car.replace(/ƣ/g, "ǧ");
car = car.replace(/Ƶ/g, "Ž");
car = car.replace(/ƶ/g, "ž");
car = car.replace(/Î/g, "Í");
car = car.replace(/î/g, "í");
car = car.replace(/Ī/g, "Í");
car = car.replace(/ī/g, "í");
car = car.replace(/Û/g, "Ú");
car = car.replace(/û/g, "ú");
car = car.replace(/Ü/g, "Ú");
car = car.replace(/ü/g, "ú");
car = car.replace(/Ū/g, "Ú");
car = car.replace(/ū/g, "ú");
car = car.replace(/Ç/g, "J");
car = car.replace(/ç/g, "j");
car = car.replace(/Ş/g, "Š");
car = car.replace(/ş/g, "š");

translit = translit.replace(/b/g, "ʙ");
translit = translit.replace(/Ğ/g, "Ƣ");
translit = translit.replace(/ğ/g, "ƣ");
translit = translit.replace(/Ġ/g, "Ƣ");
translit = translit.replace(/ġ/g, "ƣ");
translit = translit.replace(/Ǧ/g, "Ƣ");
translit = translit.replace(/ǧ/g, "ƣ");
translit = translit.replace(/Ž/g, "Ƶ");
translit = translit.replace(/ž/g, "ƶ");
translit = translit.replace(/Î/g, "Ī");
translit = translit.replace(/î/g, "ī");
translit = translit.replace(/Í/g, "Ī");
translit = translit.replace(/í/g, "ī");
translit = translit.replace(/Û/g, "Ū");
translit = translit.replace(/û/g, "ū");
translit = translit.replace(/Ü/g, "Ū");
translit = translit.replace(/ü/g, "ū");
translit = translit.replace(/Ú/g, "Ū");
translit = translit.replace(/ú/g, "ū");
translit = translit.replace(/J/g, "Ç");
translit = translit.replace(/j/g, "ç");
translit = translit.replace(/Y/g, "J");
translit = translit.replace(/y/g, "j");
translit = translit.replace(/Š/g, "Ş");
translit = translit.replace(/š/g, "ş");
document.transcription.text1.value = car;
document.transcription.text2.value = translit;
}

function latcyr () {
translit = document.transcription.text2.value;
car = document.transcription.text2.value;
car = car.replace(/в/g, "ʙ");
car = car.replace(/b/g, "ʙ");
car = car.replace(/Ğ/g, "Ƣ");
car = car.replace(/ğ/g, "ƣ");
car = car.replace(/Ġ/g, "Ƣ");
car = car.replace(/ġ/g, "ƣ");
car = car.replace(/Ǧ/g, "Ƣ");
car = car.replace(/ǧ/g, "ƣ");
car = car.replace(/Ž/g, "Ƶ");
car = car.replace(/ž/g, "ƶ");
car = car.replace(/Î/g, "Ī");
car = car.replace(/î/g, "ī");
car = car.replace(/Í/g, "Ī");
car = car.replace(/í/g, "ī");
car = car.replace(/Û/g, "Ū");
car = car.replace(/û/g, "ū");
car = car.replace(/Ü/g, "Ū");
car = car.replace(/ü/g, "ū");
car = car.replace(/Ú/g, "Ū");
car = car.replace(/ú/g, "ū");
car = car.replace(/Y/g, "J");
car = car.replace(/y/g, "j");
car = car.replace(/Š/g, "Ş");
car = car.replace(/š/g, "ş");


translit = translit.replace(/в/g, "b");
translit = translit.replace(/ʙ/g, "b");
translit = translit.replace(/Ğ/g, "Ǧ");
translit = translit.replace(/ğ/g, "ǧ");
translit = translit.replace(/Ġ/g, "Ǧ");
translit = translit.replace(/ġ/g, "ǧ");
translit = translit.replace(/Ƣ/g, "Ǧ");
translit = translit.replace(/ƣ/g, "ǧ");
translit = translit.replace(/Ƶ/g, "Ž");
translit = translit.replace(/ƶ/g, "ž");
translit = translit.replace(/Î/g, "Í");
translit = translit.replace(/î/g, "í");
translit = translit.replace(/Ī/g, "Í");
translit = translit.replace(/ī/g, "í");
translit = translit.replace(/Û/g, "Ú");
translit = translit.replace(/û/g, "ú");
translit = translit.replace(/Ü/g, "Ú");
translit = translit.replace(/ü/g, "ú");
translit = translit.replace(/Ū/g, "Ú");
translit = translit.replace(/ū/g, "ú");
translit = translit.replace(/J/g, "Y");
translit = translit.replace(/j/g, "y");
translit = translit.replace(/Ç/g, "J");
translit = translit.replace(/ç/g, "j");
translit = translit.replace(/Ş/g, "Š");
translit = translit.replace(/ş/g, "š");
document.transcription.text2.value=car;
document.transcription.text1.value=translit;
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
