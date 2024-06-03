
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A/g, "𝔄");
  car = car.replace(/B/g, "𝔅");
  car = car.replace(/C/g, "ℭ");
  car = car.replace(/D/g, "𝔇");
  car = car.replace(/E/g, "𝔈");
  car = car.replace(/F/g, "𝔉");
  car = car.replace(/G/g, "𝔊");
  car = car.replace(/H/g, "ℌ");
  car = car.replace(/I/g, "ℑ");
  car = car.replace(/J/g, "𝔍");
  car = car.replace(/K/g, "𝔎");
  car = car.replace(/L/g, "𝔏");
  car = car.replace(/M/g, "𝔐");
  car = car.replace(/N/g, "𝔑");
  car = car.replace(/O/g, "𝔒");
  car = car.replace(/P/g, "𝔓");
  car = car.replace(/Q/g, "𝔔");
  car = car.replace(/R/g, "ℜ");
  car = car.replace(/S/g, "𝔖");
  car = car.replace(/T/g, "𝔗");
  car = car.replace(/U/g, "𝔘");
  car = car.replace(/V/g, "𝔙");
  car = car.replace(/W/g, "𝔚");
  car = car.replace(/X/g, "𝔛");
  car = car.replace(/Y/g, "𝔜");
  car = car.replace(/Z/g, "ℨ");
  car = car.replace(/a/g, "𝔞");
  car = car.replace(/b/g, "𝔟");
  car = car.replace(/c/g, "𝔠");
  car = car.replace(/d/g, "𝔡");
  car = car.replace(/e/g, "𝔢");
  car = car.replace(/f/g, "𝔣");
  car = car.replace(/g/g, "𝔤");
  car = car.replace(/h/g, "𝔥");
  car = car.replace(/i/g, "𝔦");
  car = car.replace(/j/g, "𝔧");
  car = car.replace(/k/g, "𝔨");
  car = car.replace(/l/g, "𝔩");
  car = car.replace(/m/g, "𝔪");
  car = car.replace(/n/g, "𝔫");
  car = car.replace(/o/g, "𝔬");
  car = car.replace(/p/g, "𝔭");
  car = car.replace(/q/g, "𝔮");
  car = car.replace(/r/g, "𝔯");
  car = car.replace(/s/g, "𝔰");
  car = car.replace(/t/g, "𝔱");
  car = car.replace(/u/g, "𝔲");
  car = car.replace(/v/g, "𝔳");
  car = car.replace(/w/g, "𝔴");
  car = car.replace(/x/g, "𝔵");
  car = car.replace(/y/g, "𝔶");
  car = car.replace(/z/g, "𝔷");
  
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}