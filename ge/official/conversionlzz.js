//  copyright lexilogos.com
var car;
function geolat () {
car = document.transcription.text1.value;
car = car.replace(/ა/g, "a");
car = car.replace(/ბ/g, "b");
car = car.replace(/გ/g, "g");
car = car.replace(/დ/g, "d");
car = car.replace(/ე/g, "e");
car = car.replace(/ვ/g, "v");
car = car.replace(/ზ/g, "z");
car = car.replace(/ჱ/g, "ey");
car = car.replace(/თ/g, "t");
car = car.replace(/ი/g, "i");
car = car.replace(/კ/g, "kʼ");
car = car.replace(/ლ/g, "l");
car = car.replace(/მ/g, "m");
car = car.replace(/ნ/g, "n");
car = car.replace(/ჲ/g, "y");
car = car.replace(/ო/g, "o");
car = car.replace(/პ/g, "pʼ");
car = car.replace(/ჟ/g, "zh");
car = car.replace(/რ/g, "r");
car = car.replace(/ს/g, "s");
car = car.replace(/ტ/g, "tʼ");
car = car.replace(/ჳ/g, "w");
car = car.replace(/უ/g, "u");
car = car.replace(/ფ/g, "p");
car = car.replace(/ქ/g, "k");
car = car.replace(/ღ/g, "gh");
car = car.replace(/ყ/g, "qʼ");
car = car.replace(/შ/g, "sh");
car = car.replace(/ჩ/g, "ch");
car = car.replace(/ც/g, "ts");
car = car.replace(/ძ/g, "dz");
car = car.replace(/წ/g, "tsʼ");
car = car.replace(/ჭ/g, "chʼ");
car = car.replace(/ხ/g, "kh");
car = car.replace(/ჴ/g, "q");
car = car.replace(/ჯ/g, "j");
car = car.replace(/ჰ/g, "h");
car = car.replace(/ჵ/g, "oo");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}