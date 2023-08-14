var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/Ă/g, "Ӑ");
car = car.replace(/ă/g, "ӑ");
car = car.replace(/Ĕ/g, "Ӗ");
car = car.replace(/ĕ/g, "ӗ");
car = car.replace(/Ç/g, "Ҫ");
car = car.replace(/ç/g, "ҫ");
car = car.replace(/Ÿ/g, "Ӳ");
car = car.replace(/ÿ/g, "ӳ"); 
document.transcription.text1.value = car;
}

function latcyr () {
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
