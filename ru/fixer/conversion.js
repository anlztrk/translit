//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ș/g, "Ś");
  car = car.replace(/ș/g, "ś");
  car = car.replace(/Á/g, "Ä");
  car = car.replace(/á/g, "ä");
  car = car.replace(/Ó/g, "Ö");
  car = car.replace(/ó/g, "ö");
  car = car.replace(/Ú/g, "Ü");
  car = car.replace(/ú/g, "ü");
  document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
