var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/Ə/g, "Ä");
car = car.replace(/Ğ/g, "G");
car = car.replace(/İ/g, "I");
car = car.replace(/Ğ/g, "G");
car = car.replace(/Ş/g, "S");
car = car.replace(/ə/g, "ä");
car = car.replace(/ğ/g, "g");
car = car.replace(/ı/g, "i");
car = car.replace(/ğ/g, "g");
car = car.replace(/ş/g, "s");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
