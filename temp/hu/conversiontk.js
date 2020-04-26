
//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;   
  car = car.replace(/CS/g, "Č");
  car = car.replace(/Cs/g, "Č");
  car = car.replace(/cs/g, "č");
  car = car.replace(/GY/g, "GJ");
  car = car.replace(/Gy/g, "Gj");
  car = car.replace(/gy/g, "gj");
  car = car.replace(/LY/g, "LJ");
  car = car.replace(/Ly/g, "Lj");
  car = car.replace(/ly/g, "lj");
  car = car.replace(/NY/g, "NJ");
  car = car.replace(/Ny/g, "Nj");
  car = car.replace(/ny/g, "nj");
  car = car.replace(/S/g, "Š");
  car = car.replace(/s/g, "š");
  car = car.replace(/ŠZ/g, "S");
  car = car.replace(/Šz/g, "S");
  car = car.replace(/šz/g, "s");
  car = car.replace(/ZŠ/g, "Ž");
  car = car.replace(/Zš/g, "Ž");
  car = car.replace(/zš/g, "ž");
  car = car.replace(/TY/g, "KJ");
  car = car.replace(/Ty/g, "Kj");
  car = car.replace(/ty/g, "kj");
  car = car.replace(/Y/g, "I");
  car = car.replace(/y/g, "i");
  
  car = car.replace(/TKJ/g, "KKJ");
  car = car.replace(/TKj/g, "KKj");
  car = car.replace(/Tkj/g, "Kkj");
  car = car.replace(/tkj/g, "kkj");
  car = car.replace(/CČ/g, "ČČ");
  car = car.replace(/Cč/g, "Čč");
  car = car.replace(/cč/g, "čč");
  car = car.replace(/ŠS/g, "SS");
  car = car.replace(/Šs/g, "Ss");
  car = car.replace(/šs/g, "ss");
  car = car.replace(/ZŽ/g, "ŽŽ");
  car = car.replace(/ZŽ/g, "Žž");
  car = car.replace(/zž/g, "žž");
  
  car = car.replace(/Á/g, "Aa");
  car = car.replace(/É/g, "Ee");
  car = car.replace(/Í/g, "Ii");
  car = car.replace(/Ó/g, "Oo");
  car = car.replace(/Ő/g, "Öö");
  car = car.replace(/Ú/g, "Uu");
  car = car.replace(/Ü/g, "Y");
  car = car.replace(/Ű/g, "Yy");
  car = car.replace(/á/g, "aa");
  car = car.replace(/é/g, "ee");
  car = car.replace(/í/g, "ii");
  car = car.replace(/ó/g, "oo");
  car = car.replace(/ő/g, "öö");
  car = car.replace(/ú/g, "uu");
  car = car.replace(/ü/g, "y");
  car = car.replace(/ű/g, "yy");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}