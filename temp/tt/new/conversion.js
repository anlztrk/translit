var car;
function cyrlat () {
car = document.transcription.text1.value;  
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/Ý/g, "Y");
  car = car.replace(/J/g, "C");
  car = car.replace(/Ž/g, "J");  
  car = car.replace(/Ň/g, "Ñ");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/y/g, "ı");
  car = car.replace(/ý/g, "y");
  car = car.replace(/j/g, "c");
  car = car.replace(/ž/g, "j");  
  car = car.replace(/ň/g, "ñ");
  
  car = car.replace(/Ŷ/g, "Iy");
  car = car.replace(/ŷ/g, "ıy");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}