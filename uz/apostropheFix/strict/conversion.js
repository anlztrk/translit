//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/'/g, "ʼ");
  car = car.replace(/ˈ/g, "ʼ");
  car = car.replace(/’/g, "ʼ");
  car = car.replace(/ʼ/g, "ʼ");
  car = car.replace(/‘/g, "ʼ");
  car = car.replace(/ʻ/g, "ʼ");
  car = car.replace(/´/g, "ʼ");
  car = car.replace(/`/g, "ʼ");
  car = car.replace(/ʿ/g, "ʼ");
  car = car.replace(/ʹ/g, "ʼ");
  car = car.replace(/ˊ/g, "ʼ");
  car = car.replace(/׳/g, "ʼ");
  car = car.replace(/′/g, "ʼ");
  car = car.replace(/ʽ/g, "ʼ");
  car = car.replace(/ߵ/g, "ʼ");
  car = car.replace(/՚/g, "ʼ");
  car = car.replace(/ߴ/g, "ʼ");
  car = car.replace(/᾿/g, "ʼ");
  car = car.replace(/ՙ/g, "ʼ");
  car = car.replace(/῾/g, "ʼ");
  car = car.replace(/‛/g, "ʼ");
  car = car.replace(/ʾ/g, "ʼ");
  car = car.replace(/՛/g, "ʼ");
  car = car.replace(/ˋ/g, "ʼ");

  car = car.replace(/oʼ/g, "oʻ");
  car = car.replace(/Oʼ/g, "Oʻ");
  car = car.replace(/gʼ/g, "gʻ");
  car = car.replace(/Gʼ/g, "Gʻ");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}