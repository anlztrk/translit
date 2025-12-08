var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/([AEËIOUY])([B|C|Ç|D|DH|F|G|GJ|H|J|K|L|M|N|NG|NJ|P|R|S|SH|T|TH|V|X|XH|Z|ZH]{1,2})Ë/g, "$1$2Ê");
  car = car.replace(/([AEËIOUYaeëiouy])([b|c|ç|d|dh|f|g|gj|h|j|k|l|m|n|ng|nj|p|r|s|sh|t|th|v|x|xh|z|zh]{1,2})ë/g, "$1$2ê");
  car = car.replace(/Ê([A-ZÇËa-zçë])/g, "Ë$1");
  car = car.replace(/ê([a-zçë])/g, "ë$1");
  car = car.replace(/[Êê]/g, "");
  car = car.replace(/I/g, "İ");
  car = car.replace(/C/g, "Ts");
  car = car.replace(/Y/g, "Ü");
  car = car.replace(/D[Hh]/g, "D");
  car = car.replace(/R[Rr]/g, "R");
  car = car.replace(/T[Hh]/g, "T");
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
  car = car.replace(/rr/g, "r");
  car = car.replace(/gj/g, "c");
  car = car.replace(/dh/g, "d");
  car = car.replace(/th/g, "t");
  car = car.replace(/xh/g, "c");
  car = car.replace(/y/g, "ü");
  car = car.replace(/j/g, "y");
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
  car = car.replace(/NG([GK])/g, "Ń$1");
  car = car.replace(/Ng([gk])/g, "Ń$1");
  car = car.replace(/ng([gk])/g, "ń$1");
  car = car.replace(/NG/g, "NĞ")
  car = car.replace(/([Nn])g/g, "$1ğ");
  car = car.replace(/Ń/g, "N");
  car = car.replace(/ń/g, "n");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);

}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);

}
