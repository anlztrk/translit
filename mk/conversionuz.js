//  copyright lexilogos.com
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ý/g, "ú");

  car = car.replace(/а/g, "a");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/ѓ/g, "gj");
  car = car.replace(/д/g, "d");
  car = car.replace(/е/g, "e");
  car = car.replace(/ѐ/g, "è");
  car = car.replace(/ж/g, "ž");
  car = car.replace(/з/g, "z");
  car = car.replace(/ѕ/g, "dz"); 
  car = car.replace(/и/g, "i");
  car = car.replace(/ѝ/g, "ì");
  car = car.replace(/ј/g, "j");
  car = car.replace(/к/g, "k");
  car = car.replace(/л/g, "l");
  car = car.replace(/љ/g, "lj");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/њ/g, "nj");
  car = car.replace(/о/g, "o");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/ќ/g, "kj");
  car = car.replace(/у/g, "u");
  car = car.replace(/ф/g, "f");
  car = car.replace(/х/g, "h");
  car = car.replace(/ц/g, "c");
  car = car.replace(/ч/g, "č");
  car = car.replace(/џ/g, "dž");
  car = car.replace(/ш/g, "š");
  car = car.replace(/А/g, "A");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Ѓ/g, "Gj");
  car = car.replace(/Е/g, "E");
  car = car.replace(/Ѐ/g, "È");
  car = car.replace(/Ж/g, "Ž");
  car = car.replace(/З/g, "Z");
  car = car.replace(/Ѕ/g, "Dz");
  car = car.replace(/И/g, "I");
  car = car.replace(/Ѝ/g, "Ì");
  car = car.replace(/Ј/g, "J");
  car = car.replace(/К/g, "K");
  car = car.replace(/Л/g, "L");
  car = car.replace(/Љ/g, "Lj");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/Њ/g, "Nj");
  car = car.replace(/О/g, "O");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/Ќ/g, "Kj");
  car = car.replace(/У/g, "U");
  car = car.replace(/Ф/g, "F");
  car = car.replace(/Х/g, "H");
  car = car.replace(/Ц/g, "C");
  car = car.replace(/Ч/g, "Č");
  car = car.replace(/Џ/g, "Dž");
  car = car.replace(/Ш/g, "Š");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}