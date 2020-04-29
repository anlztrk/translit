var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/A\u0301/g, "Á");
car = car.replace(/E\u0301/g, "É");
car = car.replace(/I\u0301/g, "Í");
car = car.replace(/O\u0301/g, "Ó");
car = car.replace(/U\u0301/g, "Ú");
car = car.replace(/Y\u0301/g, "Ý");
car = car.replace(/a\u0301/g, "á");
car = car.replace(/e\u0301/g, "é");
car = car.replace(/i\u0301/g, "í");
car = car.replace(/o\u0301/g, "ó");
car = car.replace(/u\u0301/g, "ú");
car = car.replace(/y\u0301/g, "ý");
car = car.replace(/I\u0308/g, "Ï");
car = car.replace(/Y\u0308/g, "Ÿ");
car = car.replace(/i\u0308/g, "ï");
car = car.replace(/y\u0308/g, "ÿ");
car = car.replace(/í\u0308/g, "ḯ");
car = car.replace(/ý\u0308/g, "ÿ\u0301");
document.transcription.text2.value=car;
}
function latcyr () {
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}