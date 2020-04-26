//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Á/g, "A\u0301");
  car = car.replace(/Ǵ/g, "G\u0301");
  car = car.replace(/Ń/g, "N\u0301");
  car = car.replace(/Ó/g, "O\u0301");
  car = car.replace(/Ú/g, "U\u0301");
  car = car.replace(/Ý/g, "Y\u0301");
  car = car.replace(/á/g, "a\u0301");
  car = car.replace(/ǵ/g, "g\u0301");
  car = car.replace(/ń/g, "n\u0301");
  car = car.replace(/ó/g, "o\u0301");
  car = car.replace(/ú/g, "u\u0301");
  car = car.replace(/ý/g, "y\u0301");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}