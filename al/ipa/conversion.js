var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value; 
  car = car.replace(/A/g, "a");
  car = car.replace(/B/g, "b");
  car = car.replace(/C/g, "c");
  car = car.replace(/Ç/g, "ç");
  car = car.replace(/D/g, "d");
  car = car.replace(/E/g, "e");
  car = car.replace(/Ë/g, "ë");
  car = car.replace(/F/g, "f");
  car = car.replace(/G/g, "g");
  car = car.replace(/H/g, "h");
  car = car.replace(/I/g, "i");
  car = car.replace(/J/g, "j");
  car = car.replace(/K/g, "k");
  car = car.replace(/L/g, "l");
  car = car.replace(/M/g, "m");
  car = car.replace(/N/g, "n");
  car = car.replace(/O/g, "o");
  car = car.replace(/P/g, "p");
  car = car.replace(/Q/g, "q");
  car = car.replace(/R/g, "r");
  car = car.replace(/S/g, "s");
  car = car.replace(/T/g, "t");
  car = car.replace(/U/g, "u");
  car = car.replace(/V/g, "v");
  car = car.replace(/X/g, "x");
  car = car.replace(/Y/g, "y");
  car = car.replace(/Z/g, "z");
  
  car = car.replace(/r/g, "р");
  
  car = car.replace(/dh/g, "ð");
  car = car.replace(/gj/g, "ɟʝ");
  car = car.replace(/ll/g, "ɫ");
  car = car.replace(/nj/g, "ɲ");
  car = car.replace(/ng/g, "ŋ");
  car = car.replace(/sh/g, "ʃ");
  car = car.replace(/th/g, "θ");
  car = car.replace(/xh/g, "dʒ");
  car = car.replace(/zh/g, "ʒ");
  car = car.replace(/рр/g, "r");
  
  car = car.replace(/a/g, "ᴀ");
  car = car.replace(/c/g, "ts");
  car = car.replace(/ç/g, "tʃ");
  car = car.replace(/e/g, "ɛ");
  car = car.replace(/ë/g, "ə");
  car = car.replace(/o/g, "ɔ");
  car = car.replace(/q/g, "cç");
  car = car.replace(/x/g, "dz");
  car = car.replace(/р/g, "ɾ");
  car = car.replace(/g/g, "ɡ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}