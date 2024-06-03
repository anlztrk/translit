
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/'/g, "’");
  car = car.replace(/ˈ/g, "’");
  car = car.replace(/’/g, "’");
  car = car.replace(/ʼ/g, "’");
  car = car.replace(/‘/g, "’");
  car = car.replace(/ʻ/g, "’");
  car = car.replace(/´/g, "’");
  car = car.replace(/`/g, "’");
  car = car.replace(/ʿ/g, "’");
  car = car.replace(/ʹ/g, "’");
  car = car.replace(/ˊ/g, "’");
  car = car.replace(/׳/g, "’");
  car = car.replace(/′/g, "’");
  car = car.replace(/ʽ/g, "’");
  car = car.replace(/ߵ/g, "’");
  car = car.replace(/՚/g, "’");
  car = car.replace(/ߴ/g, "’");
  car = car.replace(/᾿/g, "’");
  car = car.replace(/ՙ/g, "’");
  car = car.replace(/῾/g, "’");
  car = car.replace(/‛/g, "’");
  car = car.replace(/ʾ/g, "’");
  car = car.replace(/՛/g, "’");
  car = car.replace(/ˋ/g, "’");

  car = car.replace(/o’/g, "o‘");
  car = car.replace(/O’/g, "O‘");
  car = car.replace(/g’/g, "g‘");
  car = car.replace(/G’/g, "G‘");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}