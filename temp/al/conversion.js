//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/dh/g, "ð");
  car = car.replace(/Dh/g, "Ď"); 
  car = car.replace(/DH/g, "Ď");
  car = car.replace(/gj/g, "đ");
  car = car.replace(/Gj/g, "Đ"); 
  car = car.replace(/GJ/g, "Đ");
  car = car.replace(/sh/g, "š");
  car = car.replace(/Sh/g, "Š"); 
  car = car.replace(/SH/g, "Š");
  car = car.replace(/th/g, "þ");
  car = car.replace(/Th/g, "Þ"); 
  car = car.replace(/TH/g, "Þ");
  car = car.replace(/zh/g, "ž");
  car = car.replace(/Zh/g, "Ž"); 
  car = car.replace(/ZH/g, "Ž");
  car = car.replace(/xh/g, "dž");
  car = car.replace(/Xh/g, "Dž"); 
  car = car.replace(/XH/g, "DŽ");
  car = car.replace(/y/g, "ü");
  car = car.replace(/Y/g, "Ü");  
  car = car.replace(/ë/g, "o\u0326");
  car = car.replace(/Ë/g, "O\u0326");
  car = car.replace(/ç/g, "č");
  car = car.replace(/Ç/g, "Č");
  car = car.replace(/q/g, "ć");
  car = car.replace(/Q/g, "Ć");
  car = car.replace(/x/g, "dz");
  car = car.replace(/X/g, "Dz");
  car = car.replace(/l/g, "ĺ");
  car = car.replace(/L/g, "Ĺ");
  car = car.replace(/ĺĺ/g, "l");
  car = car.replace(/Ĺĺ/g, "L");
  car = car.replace(/ĹĹ/g, "L");
  car = car.replace(/ĺ/g, "lj");
  car = car.replace(/Ĺ/g, "Lj");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}