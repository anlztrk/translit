//  copyright lexilogos.com
var car;
function geolat () {
car = document.transcription.text1.value;
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)/g, "$1\u0311");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)\u0311(A|a)/g, "$1");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)\u0311(E|e)/g, "$1\u0301");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)\u0311(I|i)/g, "$1\u0300");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)\u0311(O|o)/g, "$1\u0306");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)\u0311(U|u)/g, "$1\u0304");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)\u0311(Y|y)/g, "$1\u0308");
  
  car = car.replace(/(B|b)/g, "ბ");
  car = car.replace(/(C|c)/g, "ც");
  car = car.replace(/(D|d)/g, "დ");
  car = car.replace(/(G|g)/g, "გ");
  car = car.replace(/(H|h)/g, "ხ");
  car = car.replace(/(J|j)/g, "ჲ");
  car = car.replace(/(K|k)/g, "კ");
  car = car.replace(/(L|l)/g, "ლ");
  car = car.replace(/(M|m)/g, "მ");
  car = car.replace(/(P|p)/g, "ფ");
  car = car.replace(/(R|r)/g, "რ");
  car = car.replace(/(S|s)/g, "ს");
  car = car.replace(/(T|t)/g, "თ");
  car = car.replace(/(W|w)/g, "ვ");
  car = car.replace(/(Z|z)/g, "ზ");

  car = car.replace(/(A|a)/g, "ჿ");
  car = car.replace(/(E|e)/g, "ჿ\u0301");
  car = car.replace(/(I|i)/g, "ჿ\u0300");
  car = car.replace(/(O|o)/g, "ჿ\u0306");
  car = car.replace(/(U|u)/g, "ჿ\u0304");
  car = car.replace(/(Y|y)/g, "ჿ\u0308");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}