var car;
function cyrlat () {
car = document.transcription.text1.value;
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
document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
