//  copyright lexilogos.com
var car;
function geolat () {
car = document.transcription.text1.value;
car = car.replace(/\u2018/g, "\u0027");
car = car.replace(/\u2019/g, "\u0027");
car = car.replace(/T'/g, "Ť");
car = car.replace(/T\u0306/g, "Ť");
car = car.replace(/K'/g, "Ǩ");
car = car.replace(/K\u0306/g, "Ǩ");
car = car.replace(/Ḱ/g, "Ǩ");
car = car.replace(/P'/g, "P\u030c");
car = car.replace(/P\u0306/g, "P\u030c");
car = car.replace(/Ṕ/g, "P\u030c");
car = car.replace(/Ǧ/g, "Ğ");
car = car.replace(/Ç'/g, "Č\u0327");
car = car.replace(/Ç\u030c/g, "Č\u0327");
car = car.replace(/Ḉ/g, "Č\u0327");
car = car.replace(/Z'/g, "Ž");
car = car.replace(/Z\u0306/g, "Ž");
car = car.replace(/З'/g, "Ǯ");
car = car.replace(/З/g, "Ʒ");
car = car.replace(/Ʒ\u0306/g, "Ǯ");
car = car.replace(/İ/g, "I");

car = car.replace(/t'/g, "t\u0306");
car = car.replace(/ť/g, "t\u0306");
car = car.replace(/t\u030c/g, "t\u0306");
car = car.replace(/k'/g, "ǩ");
car = car.replace(/k\u0306/g, "ǩ");
car = car.replace(/ḱ/g, "ǩ");
car = car.replace(/p'/g, "p\u030c");
car = car.replace(/p\u0306/g, "p\u030c");
car = car.replace(/ṕ/g, "p\u030c");
car = car.replace(/ǧ/g, "ğ");
car = car.replace(/ç'/g, "č\u0327");
car = car.replace(/ç\u030c/g, "č\u0327");
car = car.replace(/ḉ/g, "č\u0327");
car = car.replace(/z'/g, "ž");
car = car.replace(/z\u0306/g, "ž");
car = car.replace(/з'/g, "ǯ");
car = car.replace(/3'/g, "ǯ");
car = car.replace(/з/g, "ʒ");
car = car.replace(/ʒ\u0306/g, "ǯ");
car = car.replace(/ı/g, "i");

document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}