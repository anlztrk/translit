var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A/g, "А");
  car = car.replace(/B/g, "В");
  car = car.replace(/C/g, "С");
  car = car.replace(/Ç/g, "Ҫ");
  car = car.replace(/E/g, "Е");
  car = car.replace(/F/g, "Ғ");
  car = car.replace(/H/g, "Н");
  car = car.replace(/I/g, "І");
  car = car.replace(/İ/g, "ĺ");
  car = car.replace(/J/g, "Ј");
  car = car.replace(/K/g, "К");
  car = car.replace(/L/g, "Ꮮ");
  car = car.replace(/M/g, "М");
  car = car.replace(/N/g, "Ν");
  car = car.replace(/O/g, "О");
  car = car.replace(/Ö/g, "Ӧ");
  car = car.replace(/P/g, "Р");
  car = car.replace(/Q/g, "Ԛ");
  car = car.replace(/S/g, "Ѕ");
  car = car.replace(/T/g, "Т");
  car = car.replace(/U/g, "Ս");
  car = car.replace(/V/g, "Ѵ");
  car = car.replace(/W/g, "Ԝ");
  car = car.replace(/X/g, "Х");
  car = car.replace(/Y/g, "Ү");
  car = car.replace(/Z/g, "Ζ");
  car = car.replace(/a/g, "а");
  car = car.replace(/b/g, "ƅ");
  car = car.replace(/c/g, "с");
  car = car.replace(/ç/g, "ҫ");
  car = car.replace(/d/g, "ԁ");
  car = car.replace(/e/g, "е");
  car = car.replace(/f/g, "ꬵ");
  car = car.replace(/g/g, "ɡ");
  car = car.replace(/h/g, "һ");
  car = car.replace(/ı/g, "ι");
  car = car.replace(/i/g, "і");
  car = car.replace(/j/g, "ј");
  car = car.replace(/k/g, "ⱪ");
  car = car.replace(/l/g, "ӏ");
  car = car.replace(/m/g, "м");
  car = car.replace(/n/g, "ո");
  car = car.replace(/o/g, "о");
  car = car.replace(/ö/g, "ӧ");
  car = car.replace(/p/g, "р");
  car = car.replace(/q/g, "ԛ");
  car = car.replace(/r/g, "ɾ");
  car = car.replace(/s/g, "ѕ");
  car = car.replace(/ş/g, "ʂ"); 
  car = car.replace(/t/g, "ʈ");
  car = car.replace(/u/g, "ս");
  car = car.replace(/ü/g, "υ\u0308");
  car = car.replace(/v/g, "ν");
  car = car.replace(/y/g, "у");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
