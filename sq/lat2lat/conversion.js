var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/XH/g, "DŽ");
  car = car.replace(/Xh/g, "Dž");
  car = car.replace(/G(J|j)/g, "Đ");
  car = car.replace(/Z(H|h)/g, "Ž");
  car = car.replace(/S(H|h)/g, "Š");  
  car = car.replace(/L(L|l)/g, "Ł");
  car = car.replace(/R(R|r)/g, "Ř");
  car = car.replace(/gj/g, "đ");
  car = car.replace(/xh/g, "dž");
  car = car.replace(/zh/g, "ž");
  car = car.replace(/sh/g, "š");
  car = car.replace(/ll/g, "ł");
  car = car.replace(/rr/g, "ř");
  car = car.replace(/ç/g, "č");
  car = car.replace(/q/g, "ć");
  car = car.replace(/x/g, "dz");
  car = car.replace(/l/g, "lj");
  car = car.replace(/ł/g, "l");
  car = car.replace(/y/g, "ü");
  car = car.replace(/ë/g, "y");
  car = car.replace(/Ç/g, "Č");
  car = car.replace(/Q/g, "Ć");
  car = car.replace(/X/g, "Dz");
  car = car.replace(/L/g, "Lj");
  car = car.replace(/Ł/g, "L");
  car = car.replace(/Y/g, "Ü");
  car = car.replace(/Ë/g, "Y");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
