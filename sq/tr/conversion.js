var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/([A-ZÇË])Ë/g, "$1Î");
  car = car.replace(/Î([A-ZÇËa-zçë])/g, "Ë$1");
  car = car.replace(/([A-ZÇËa-zçë])ë/g, "$1î");
  car = car.replace(/î([a-zçë])/g, "ë$1");
  car = car.replace(/[Îî]/g, "");
  car = car.replace(/I/g, "İ");
  car = car.replace(/C/g, "Ts");
  car = car.replace(/Y/g, "Ü");
  car = car.replace(/X[Hh]/g, "C");
  car = car.replace(/G[Jj]/g, "C");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Z[Hh]/g, "J");
  car = car.replace(/S[Hh]/g, "Ş");  
  car = car.replace(/L[Ll]/g, "Ł");
  car = car.replace(/LA/g, "LÂ");
  car = car.replace(/La/g, "Lâ");
  car = car.replace(/LU/g, "LÛ");
  car = car.replace(/Lu/g, "Lû");
  car = car.replace(/LO/g, "LYO");
  car = car.replace(/Lo/g, "Lyo");
  car = car.replace(/c/g, "ts");
  car = car.replace(/gj/g, "c");
  car = car.replace(/xh/g, "c");
  car = car.replace(/zh/g, "j");
  car = car.replace(/sh/g, "ş");
  car = car.replace(/ll/g, "ł");
  car = car.replace(/la/g, "lâ");
  car = car.replace(/lu/g, "lû");
  car = car.replace(/lo/g, "lyo");
  car = car.replace(/ł/g, "l");
  car = car.replace(/q/g, "ç");
  car = car.replace(/x/g, "dz");
  car = car.replace(/ë/g, "ı");
  car = car.replace(/Ł/g, "L");
  car = car.replace(/Q/g, "Ç");
  car = car.replace(/X/g, "Dz");
  car = car.replace(/N[Gg]/g, "Ñ");
  car = car.replace(/ng/g, "ñ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
