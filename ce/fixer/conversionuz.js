var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/ʼ/g, "");
car = car.replace(/ʾ/g, "ˋ");
car = car.replace(/ʿ/g, "ˊ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}