var car;
function latgeo () {
car = document.transcription.text2.value;
  car = car.replace(/(\u2018|\u2019|\u02bc)/g, "\u0027");
  car = car.replace(/İ/g, "I");
  car = car.replace(/ı/g, "i");
  car = car.normalize('NFD');
  car = car.replace(/(3|Ʒ)(\u002a|\u003e|\u005c)/g, "ʒ");
  car = car.replace(/ʒ(\u002a|\u003e|\u005c)/g, "Ʒ");
  car = car.replace(/(C\u0327|c\u0327|K|k|P|p|T|Z|z|Ʒ|ʒ)\u0027/g, "$1\u030c");
  car = car.replace(/3\u0027/g, "ʒ\u030c");
  car = car.replace(/(C\u0327|c\u0327|K|k|P|p|Z|z)\u0301/g, "$1\u030c");
  car = car.replace(/t(\u0027|\u0306|\u030c)/g, "t\u200c\u030c");
  car = car.replace(/(G|g|T)\u0306/g, "$1\u030c");
  car = car.replace(/T(S|s)/g, "Ʒ");
  car = car.replace(/ts/g, "ʒ");
  car = car.replace(/D(Z|z)/g, "Z\u030c");
  car = car.replace(/dz/g, "z\u030c");
  
  car = car.replace(/Ӡ/g, "Ʒ");
  car = car.replace(/ӡ/g, "ʒ");
  car = car.replace(/З/g, "Ʒ");
  car = car.replace(/з/g, "ʒ");
  car = car.normalize('NFC');

  car = car.replace(/P̌/g, "Ô");
  car = car.replace(/Ǩ/g, "Ü");
  car = car.replace(/Ç̌/g, "Ö");
  car = car.replace(/Ť/g, "Û");
  car = car.replace(/A/g, "\u2060");
  car = car.replace(/Z/g, "A");
  car = car.replace(/\u2060/g, "Z");
  car = car.replace(/O/g, "\u2060");
  car = car.replace(/P/g, "O");
  car = car.replace(/\u2060/g, "P");
  car = car.replace(/Ž/g, "Â");
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/I/g, "İ");
  car = car.replace(/T/g, "\u2060");
  car = car.replace(/U/g, "T");
  car = car.replace(/\u2060/g, "U");
  car = car.replace(/Ʒ/g, "É");
  car = car.replace(/Ǯ/g, "W");
  car = car.replace(/p̌/g, "ô");
  car = car.replace(/ǩ/g, "ü");
  car = car.replace(/ç̌/g, "ö");
  car = car.replace(/t‌̌/g, "û");
  car = car.replace(/a/g, "\u2060");
  car = car.replace(/z/g, "a");
  car = car.replace(/\u2060/g, "z");
  car = car.replace(/o/g, "\u2060");
  car = car.replace(/p/g, "o");
  car = car.replace(/\u2060/g, "p");
  car = car.replace(/ž/g, "â");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/t/g, "\u2060");
  car = car.replace(/u/g, "t");
  car = car.replace(/\u2060/g, "u");
  car = car.replace(/ʒ/g, "é");
  car = car.replace(/ǯ/g, "w");
document.transcription.text1.value=car;
}
function geolat () {
car = document.transcription.text1.value;
  car = car.replace(/A/g, "\u2060");
  car = car.replace(/Z/g, "A");
  car = car.replace(/\u2060/g, "Z");
  car = car.replace(/O/g, "\u2060");
  car = car.replace(/P/g, "O");
  car = car.replace(/\u2060/g, "P");
  car = car.replace(/U/g, "\u2060");
  car = car.replace(/T/g, "U");
  car = car.replace(/\u2060/g, "T");
  car = car.replace(/Â/g, "Ž");
  car = car.replace(/Ğ/g, "Ǧ");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Ô/g, "P̌");
  car = car.replace(/Ö/g, "Ç̌");
  car = car.replace(/Û/g, "Ť");
  car = car.replace(/Ü/g, "Ǩ");
  car = car.replace(/É/g, "Ʒ");
  car = car.replace(/W/g, "Ǯ");
  car = car.replace(/a/g, "\u2060");
  car = car.replace(/z/g, "a");
  car = car.replace(/\u2060/g, "z");
  car = car.replace(/o/g, "\u2060");
  car = car.replace(/p/g, "o");
  car = car.replace(/\u2060/g, "p");
  car = car.replace(/u/g, "\u2060");
  car = car.replace(/t/g, "u");
  car = car.replace(/\u2060/g, "t");
  car = car.replace(/â/g, "ž");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/ı/g, "i");
  car = car.replace(/ô/g, "p̌");
  car = car.replace(/ö/g, "ç̌");
  car = car.replace(/û/g, "t‌̌");
  car = car.replace(/ü/g, "ǩ");
  car = car.replace(/é/g, "ʒ");
  car = car.replace(/w/g, "ǯ");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}