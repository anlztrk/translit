
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/C/g, "Ţ");   
  car = car.replace(/c/g, "ţ");
  car = car.replace(/ŢS/g, "Ç");
  car = car.replace(/Ţs/g, "Ç");
  car = car.replace(/ţs/g, "ç");
  car = car.replace(/GY/g, "Ǵ");
  car = car.replace(/Gy/g, "Ǵ");
  car = car.replace(/gy/g, "ǵ");
  car = car.replace(/LY/g, "Ĺ");
  car = car.replace(/Ly/g, "Ĺ");
  car = car.replace(/ly/g, "ĺ");
  car = car.replace(/NY/g, "Ń");
  car = car.replace(/Ny/g, "Ń");
  car = car.replace(/ny/g, "ń");
  car = car.replace(/TY/g, "Ḱ");
  car = car.replace(/Ty/g, "Ḱ");
  car = car.replace(/ty/g, "ḱ");
  car = car.replace(/S/g, "Ş");
  car = car.replace(/s/g, "ş");
  car = car.replace(/ŞZ/g, "S");
  car = car.replace(/Şz/g, "S");
  car = car.replace(/şz/g, "s");
  car = car.replace(/ZŞ/g, "Ĵ");
  car = car.replace(/Zş/g, "Ĵ");
  car = car.replace(/zş/g, "ĵ");
  
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "İ");
  car = car.replace(/y/g, "i");
  car = car.replace(/J/g, "Y");
  car = car.replace(/j/g, "y");
  car = car.replace(/Ĵ/g, "J");
  car = car.replace(/ĵ/g, "j");
  
  car = car.replace(/TḰ/g, "ḰḰ");
  car = car.replace(/Tḱ/g, "Ḱḱ");
  car = car.replace(/tḱ/g, "ḱḱ");
  car = car.replace(/ŢÇ/g, "ÇÇ");
  car = car.replace(/Ţç/g, "Çç");
  car = car.replace(/ţç/g, "çç");
  car = car.replace(/ŞS/g, "SS");
  car = car.replace(/Şs/g, "Ss");
  car = car.replace(/şs/g, "ss");
  car = car.replace(/ZJ/g, "JJ");
  car = car.replace(/ZJ/g, "Jj");
  car = car.replace(/zj/g, "jj");
  car = car.replace(/DJ/g, "C");
  car = car.replace(/Dj/g, "C");
  car = car.replace(/dj/g, "c");
  car = car.replace(/DC/g, "CC");
  car = car.replace(/Dc/g, "Cc");
  car = car.replace(/dc/g, "cc");
  
  car = car.replace(/Á/g, "A");
  car = car.replace(/É/g, "E");
  car = car.replace(/Í/g, "İ");
  car = car.replace(/Ó/g, "O");
  car = car.replace(/Ő/g, "Ö");
  car = car.replace(/Ú/g, "U");
  car = car.replace(/Ű/g, "Ü");
  car = car.replace(/á/g, "a");
  car = car.replace(/é/g, "e");
  car = car.replace(/í/g, "i");
  car = car.replace(/ó/g, "o");
  car = car.replace(/ő/g, "ö");
  car = car.replace(/ú/g, "u");
  car = car.replace(/ű/g, "ü");

  car = car.replace(/(Ǵ|ǵ|Ḱ|ḱ|Ĺ|ĺ)(A|a|U|u)/g, "$1$2\u0302");
  car = car.normalize('NFD');
  car = car.replace(/\u0301/g, "");
  car = car.normalize('NFC');

  car = car.replace(/(a|e|i|o|u|ö|ü)Ţ/g, "$1Ts");
  car = car.replace(/(A|E|İ|O|U|Ö|Ü)Ţ/g, "$1TS");
  car = car.replace(/(A|E|İ|O|U|Ö|Ü|a|e|i|o|u|ö|ü)ţ/g, "$1ts");
  car = car.replace(/Ţ/g, "S");
  car = car.replace(/ţ/g, "s");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
