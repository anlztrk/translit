var car;
function geolat () {
car = document.transcription.text1.value;
let latinWords = {};
   let index = 0;
   car = car.replace(/\p{sc=Latin}+/ug, function(match) {
     let key = `__placeholder${index}__`;
     latinWords[key] = match;
     index++;
     return key;
  });
  
car = car.replace(/ქქ/g, "ქ-ქ");
car = car.replace(/ფფ/g, "ფ-ფ");
car = car.replace(/თთ/g, "თ-თ");
car = car.replace(/ცც/g, "ც-ც");
car = car.replace(/ჩჩ/g, "ჩ-ჩ");
  
car = car.replace(/ა/g, "A");
car = car.replace(/ბ/g, "B");
car = car.replace(/გ/g, "G");
car = car.replace(/დ/g, "D");
car = car.replace(/ე/g, "E");
car = car.replace(/ვ/g, "V");
car = car.replace(/ზ/g, "Z");
car = car.replace(/თ/g, "T");
car = car.replace(/ი/g, "I");
car = car.replace(/კ/g, "KK");
car = car.replace(/ლ/g, "L");
car = car.replace(/მ/g, "M");
car = car.replace(/ნ/g, "N");
car = car.replace(/ო/g, "O");
car = car.replace(/პ/g, "PP");
car = car.replace(/ჟ/g, "Ž");
car = car.replace(/რ/g, "R");
car = car.replace(/ს/g, "S");
car = car.replace(/ტ/g, "TT");
car = car.replace(/უ/g, "U");
car = car.replace(/ფ/g, "P");
car = car.replace(/ქ/g, "K");
car = car.replace(/ღ/g, "Ġ");
car = car.replace(/ყ/g, "Q");
car = car.replace(/შ/g, "Š");
car = car.replace(/ჩ/g, "Č");
car = car.replace(/ც/g, "C");
car = car.replace(/ძ/g, "Ż");
car = car.replace(/წ/g, "CC");
car = car.replace(/ჭ/g, "ČČ");
car = car.replace(/ხ/g, "X");
car = car.replace(/ჯ/g, "J");
car = car.replace(/ჰ/g, "H");

car = car.replace(/([\n]?\p{L}|__placeholder\d+__)([\p{L}\p{N}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
    return first + second.toLowerCase();
});

   Object.keys(latinWords).forEach(key => {
     car = car.replace(key, latinWords[key]);
});
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
