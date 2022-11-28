var car;
function cyrlat () {
car = document.transcription.text1.value;

  car = car.replace(/DJ/g, "GGY");
  car = car.replace(/Dj/g, "Ggy");
  car = car.replace(/dj/g, "ggy");
  car = car.replace(/LJ/g, "LLY");
  car = car.replace(/Lj/g, "Lly");
  car = car.replace(/lj/g, "lly");
  car = car.replace(/NJ/g, "NNY");
  car = car.replace(/Nj/g, "Nny");
  car = car.replace(/nj/g, "nny");
  car = car.replace(/TJ/g, "TTY");
  car = car.replace(/Tj/g, "Tty");
  car = car.replace(/tj/g, "tty");
  
  car = car.replace(/DGY/g, "GGY");
  car = car.replace(/Dgy/g, "Ggy");
  car = car.replace(/dgy/g, "ggy");
  car = car.replace(/TGY/g, "GGY");
  car = car.replace(/Tgy/g, "Ggy");
  car = car.replace(/tgy/g, "ggy");
  car = car.replace(/DTY/g, "TTY");
  car = car.replace(/Dty/g, "Tty");
  car = car.replace(/dty/g, "tty");
  car = car.replace(/GYJ/g, "GGY");
  car = car.replace(/Gyj/g, "Ggy");
  car = car.replace(/gyj/g, "ggy");
  car = car.replace(/TYJ/g, "TTY");
  car = car.replace(/Tyj/g, "Tty");
  car = car.replace(/tyj/g, "tty");
  car = car.replace(/NYJ/g, "NNY");
  car = car.replace(/Nyj/g, "Nny");
  car = car.replace(/nyj/g, "nny");

  car = car.replace(/LLY/g, "JJ");
  car = car.replace(/LLy/g, "JJ");
  car = car.replace(/Lly/g, "Jj");
  car = car.replace(/lly/g, "jj");
  car = car.replace(/LY/g, "J");
  car = car.replace(/Ly/g, "J");
  car = car.replace(/ly/g, "j");
  car = car.replace(/C/g, "Ţ");   
  car = car.replace(/c/g, "ţ");
  car = car.replace(/ŢS/g, "Ç");
  car = car.replace(/Ţs/g, "Ç");
  car = car.replace(/ţs/g, "ç");
  car = car.replace(/GY/g, "Đ");
  car = car.replace(/Gy/g, "Đ");
  car = car.replace(/gy/g, "đ");
  car = car.replace(/NY/g, "Ń");
  car = car.replace(/Ny/g, "Ń");
  car = car.replace(/ny/g, "ń");
  car = car.replace(/TY/g, "Ć");
  car = car.replace(/Ty/g, "Ć");
  car = car.replace(/ty/g, "ć");
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
  
  car = car.replace(/TĆ/g, "ĆĆ");
  car = car.replace(/Tć/g, "Ćć");
  car = car.replace(/tć/g, "ćć");
  car = car.replace(/GĐ/g, "ĐĐ");
  car = car.replace(/Gđ/g, "Đđ");
  car = car.replace(/gđ/g, "đđ");
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
  car = car.replace(/NŃ/g, "ŃŃ");
  car = car.replace(/Nń/g, "Ńń");
  car = car.replace(/nń/g, "ńń");
  
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
  
  car = car.replace(/(E|e|İ|i|Ö|ö|Ü|ü)Đ/g, "$1Ǵ");
  car = car.replace(/(E|e|İ|i|Ö|ö|Ü|ü)đ/g, "$1ǵ");
  car = car.replace(/(E|e|İ|i|Ö|ö|Ü|ü)Ć/g, "$1Ḱ");
  car = car.replace(/(E|e|İ|i|Ö|ö|Ü|ü)ć/g, "$1ḱ");
  
  car = car.replace(/ĐĐ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ǴǴ$1");
  car = car.replace(/Đđ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "Ǵǵ$1");
  car = car.replace(/đđ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ǵǵ$1");
  car = car.replace(/ĆĆ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ḰḰ$1");
  car = car.replace(/Ćć(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "Ḱḱ$1");
  car = car.replace(/ćć(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ḱḱ$1");
  car = car.replace(/đ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ǵ$1");
  car = car.replace(/Ć(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "Ḱ$1");
  car = car.replace(/ć(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ḱ$1");
  
  car = car.replace(/Đ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "Ǵ$1");
  car = car.replace(/đ(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ǵ$1");
  car = car.replace(/Ć(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "Ḱ$1");
  car = car.replace(/ć(A|a|E|e|İ|i|Ö|ö|U|u|Ü|ü| A| a| U| u| E| e| İ| i| Ö| ö| Ü| ü)/g, "ḱ$1");
  car = car.replace(/Đ/g, "C");
  car = car.replace(/đ/g, "c");
  car = car.replace(/Ć/g, "Ç");
  car = car.replace(/ć/g, "ç");

  car = car.replace(/(Ǵ|ǵ|Ḱ|ḱ)(A|a|U|u)/g, "$1$2\u0302");
  car = car.normalize('NFD');
  car = car.replace(/\u0301/g, "");
  car = car.normalize('NFC');

  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü|a|â|e|i|o|u|û|ö|ü)ŢŢ/g, "$1TTS");
  car = car.replace(/(a|â|e|i|o|u|û|ö|ü)Ţţ/g, "$1Tts");
  car = car.replace(/(a|â|e|i|o|u|û|ö|ü)ţŢ/g, "$1tTs");
  car = car.replace(/(a|â|e|i|o|u|û|ö|ü)ţţ/g, "$1tts");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü)Ţţ/g, "$1Tts");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü)ţŢ/g, "$1tTS");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü)ţţ/g, "$1tts");
  
  car = car.replace(/(a|â|e|i|o|u|û|ö|ü)Ţ/g, "$1Ts");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü)Ţ/g, "$1TS");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü|a|â|e|i|o|u|û|ö|ü)ţ/g, "$1ts");
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
