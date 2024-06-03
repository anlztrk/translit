
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/E/g, "Е");
  car = car.replace(/Ë/g, "Ё");
  car = car.replace(/P/g, "Р");
  car = car.replace(/T/g, "Т");
  car = car.replace(/O/g, "О");
  car = car.replace(/Y/g, "Ү");
  car = car.replace(/A/g, "А");
  car = car.replace(/C/g, "С");
  car = car.replace(/K/g, "К");
  car = car.replace(/X/g, "Х");
  car = car.replace(/B/g, "В");
  car = car.replace(/H/g, "Н");
  car = car.replace(/M/g, "М");
  car = car.replace(/J/g, "Ј");
  car = car.replace(/S/g, "Ѕ");
  car = car.replace(/I/g, "І");
  car = car.replace(/Ï/g, "Ї");
  car = car.replace(/Ç/g, "Ҫ");
  car = car.replace(/Ă/g, "Ӑ");
  car = car.replace(/Ĕ/g, "Ӗ");
  car = car.replace(/Ə/g, "Ә");
  car = car.replace(/W/g, "Ԝ");
  car = car.replace(/Ḱ/g, "Ќ");
  car = car.replace(/e/g, "е");
  car = car.replace(/ë/g, "ё");
  car = car.replace(/p/g, "р");
  car = car.replace(/y/g, "у");
  car = car.replace(/o/g, "о");
  car = car.replace(/a/g, "а");
  car = car.replace(/c/g, "с");
  car = car.replace(/x/g, "х");
  car = car.replace(/j/g, "ј");
  car = car.replace(/s/g, "ѕ");
  car = car.replace(/h/g, "һ");
  car = car.replace(/i/g, "і");
  car = car.replace(/ï/g, "ї");
  car = car.replace(/ç/g, "ҫ");
  car = car.replace(/ă/g, "ӑ");
  car = car.replace(/ĕ/g, "ӗ");
  car = car.replace(/ə/g, "ә");
  car = car.replace(/w/g, "ԝ");
  car = car.replace(/l/g, "ӏ");
  car = car.replace(/ʙ/g, "в");
  car = car.replace(/ʜ/g, "н");
  car = car.replace(/ᴋ/g, "к");
  car = car.replace(/ᴍ/g, "м");
  car = car.replace(/ᴛ/g, "т");
  car = car.replace(/ʏ/g, "ү");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}