var car;
function geolat () {
car = document.transcription.text1.value;
car = car.replace(/ქქ/g, "ქ-ქ");
car = car.replace(/ფფ/g, "ფ-ფ");
car = car.replace(/თთ/g, "თ-თ");
car = car.replace(/ცც/g, "ც-ც");
car = car.replace(/ჩჩ/g, "ჩ-ჩ");
  
car = car.replace(/ა/g, "a");
car = car.replace(/ბ/g, "b");
car = car.replace(/გ/g, "g");
car = car.replace(/დ/g, "d");
car = car.replace(/ე/g, "e");
car = car.replace(/ვ/g, "v");
car = car.replace(/ზ/g, "z");
car = car.replace(/თ/g, "t");
car = car.replace(/ი/g, "i");
car = car.replace(/კ/g, "kk");
car = car.replace(/ლ/g, "l");
car = car.replace(/მ/g, "m");
car = car.replace(/ნ/g, "n");
car = car.replace(/ო/g, "o");
car = car.replace(/პ/g, "pp");
car = car.replace(/ჟ/g, "ž");
car = car.replace(/რ/g, "r");
car = car.replace(/ს/g, "s");
car = car.replace(/ტ/g, "tt");
car = car.replace(/უ/g, "u");
car = car.replace(/ფ/g, "p");
car = car.replace(/ქ/g, "k");
car = car.replace(/ღ/g, "ġ");
car = car.replace(/ყ/g, "q");
car = car.replace(/შ/g, "š");
car = car.replace(/ჩ/g, "č");
car = car.replace(/ც/g, "c");
car = car.replace(/ძ/g, "ż");
car = car.replace(/წ/g, "cc");
car = car.replace(/ჭ/g, "čč");
car = car.replace(/ხ/g, "x");
car = car.replace(/ჯ/g, "j");
car = car.replace(/ჰ/g, "h");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
