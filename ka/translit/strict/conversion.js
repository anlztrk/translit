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

car = car.replace(/Ა/g, "ა");
car = car.replace(/Ბ/g, "ბ");
car = car.replace(/Გ/g, "გ");
car = car.replace(/Დ/g, "დ");
car = car.replace(/Ე/g, "ე");
car = car.replace(/Ვ/g, "ვ");
car = car.replace(/Ზ/g, "ზ");
car = car.replace(/Ჱ/g, "ჱ");
car = car.replace(/Თ/g, "თ");
car = car.replace(/Ი/g, "ი");
car = car.replace(/Კ/g, "კ");
car = car.replace(/Ლ/g, "ლ");
car = car.replace(/Მ/g, "მ");
car = car.replace(/Ნ/g, "ნ");
car = car.replace(/Ჲ/g, "ჲ");
car = car.replace(/Ო/g, "ო");
car = car.replace(/Პ/g, "პ");
car = car.replace(/Ჟ/g, "ჟ");
car = car.replace(/Რ/g, "რ");
car = car.replace(/Ს/g, "ს");
car = car.replace(/Ტ/g, "ტ");
car = car.replace(/Ჳ/g, "ჳ");
car = car.replace(/Უ/g, "უ");
car = car.replace(/Ჷ/g, "ჷ");
car = car.replace(/Ფ/g, "ფ");
car = car.replace(/Ქ/g, "ქ");
car = car.replace(/Ღ/g, "ღ");
car = car.replace(/Ყ/g, "ყ");
car = car.replace(/Ჸ/g, "ჸ");
car = car.replace(/Შ/g, "შ");
car = car.replace(/Ჩ/g, "ჩ");
car = car.replace(/Ც/g, "ც");
car = car.replace(/Ძ/g, "ძ");
car = car.replace(/Წ/g, "წ");
car = car.replace(/Ჭ/g, "ჭ");
car = car.replace(/Ხ/g, "ხ");
car = car.replace(/Ჴ/g, "ჴ");
car = car.replace(/Ჯ/g, "ჯ");
car = car.replace(/Ჰ/g, "ჰ");
car = car.replace(/Ჵ/g, "ჵ");
car = car.replace(/Ჶ/g, "ჶ");
car = car.replace(/Ჹ/g, "ჹ");
car = car.replace(/Ჺ/g, "ჺ");
car = car.replace(/Ჽ/g, "ჽ");
car = car.replace(/Ჾ/g, "ჾ");
car = car.replace(/Ჿ/g, "ჿ");
   
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

car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
    return first + second.toLowerCase();
});

   Object.keys(latinWords).forEach(key => {
     car = car.replace(key, latinWords[key]);
});
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
