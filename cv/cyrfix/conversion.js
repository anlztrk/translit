
var translit;

function cyrlat () {
car = document.transcription.text1.value;
translit = document.transcription.text1.value;
car = car.replace(/ã/g, "ă");
car = car.replace(/Ã/g, "Ă");
car = car.replace(/~а/g, "ă");
car = car.replace(/~А/g, "Ă");
car = car.replace(/ə/g, "ĕ");
car = car.replace(/Ə/g, "Ĕ");
car = car.replace(/ә/g, "ĕ");
car = car.replace(/Ә/g, "Ĕ");
car = car.replace(/ẽ/g, "ĕ");
car = car.replace(/Ẽ/g, "Ĕ");
car = car.replace(/~e/g, "ĕ");
car = car.replace(/~E/g, "Ĕ");

translit = translit.replace(/ã/g, "ӑ");
translit = translit.replace(/Ã/g, "Ӑ");
translit = translit.replace(/~а/g, "ӑ");
translit = translit.replace(/~А/g, "Ӑ");
translit = translit.replace(/ə/g, "ӗ");
translit = translit.replace(/Ə/g, "Ӗ");
translit = translit.replace(/ә/g, "ӗ");
translit = translit.replace(/Ә/g, "Ӗ");
translit = translit.replace(/ẽ/g, "ӗ");
translit = translit.replace(/Ẽ/g, "Ӗ");
translit = translit.replace(/~e/g, "ӗ");
translit = translit.replace(/~E/g, "Ӗ");

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
document.transcription.text1.value = car;
document.transcription.text2.value = translit;
}

function latcyr () {
translit = document.transcription.text2.value;
translit = translit.replace(/Ӑ/g, "Ă");
translit = translit.replace(/ӑ/g, "ă");
translit = translit.replace(/Ӗ/g, "Ĕ");
translit = translit.replace(/ӗ/g, "ĕ");
translit = translit.replace(/Ҫ/g, "Ç");
translit = translit.replace(/ҫ/g, "ç");
translit = translit.replace(/Ӳ/g, "Ÿ");
translit = translit.replace(/ӳ/g, "ÿ"); 
document.transcription.text1.value = translit;
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

