var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/DZSZ/g, "DZ\u200bSZ");
  car = car.replace(/Dzsz/g, "Dz\u200bsz");
  car = car.replace(/dzsz/g, "dz\u200bsz");
  
  car = car.replace(/SZS/g, "SZ\u200bS");
  car = car.replace(/Szs/g, "Sz\u200bs");
  car = car.replace(/szs/g, "sz\u200bs");
   
  car = car.replace(/ZSZ/g, "Z\u200bSZ");
  car = car.replace(/Zsz/g, "Z\u200bsz");
  car = car.replace(/zsz/g, "z\u200bsz");
  
  car = car.replace(/CSZ/g, "CS\u200bZ");
  car = car.replace(/Csz/g, "Cs\u200bz");
  car = car.replace(/csz/g, "cs\u200bz");
  
  car = car.replace(/TTY/g, "ĆĆ");
  car = car.replace(/Tty/g, "Ćć");
  car = car.replace(/tty/g, "ćć");
  car = car.replace(/GGY/g, "ĐĐ");
  car = car.replace(/Ggy/g, "Đđ");
  car = car.replace(/ggy/g, "đđ");
  car = car.replace(/CCS/g, "ÇÇ");
  car = car.replace(/Ccs/g, "Çç");
  car = car.replace(/ccs/g, "çç");
  car = car.replace(/SSZ/g, "ṠṠ");
  car = car.replace(/Ssz/g, "Ṡṡ");
  car = car.replace(/ssz/g, "ṡṡ");
  car = car.replace(/ZZS/g, "ĴĴ");
  car = car.replace(/Zzs/g, "Ĵĵ");
  car = car.replace(/zzs/g, "ĵĵ");
  car = car.replace(/DDZS/g, "ĊĊ");
  car = car.replace(/Ddzs/g, "Ċċ");
  car = car.replace(/ddzs/g, "ċċ");
  car = car.replace(/NNY/g, "ŃŃ");
  car = car.replace(/Nny/g, "Ńń");
  car = car.replace(/nny/g, "ńń");
  car = car.replace(/LLY/g, "ĹĹ");
  car = car.replace(/Lly/g, "Ĺĺ");
  car = car.replace(/lly/g, "ĺĺ");
  car = car.replace(/DDZ/g, "ƵƵ");
  car = car.replace(/Ddz/g, "Ƶƶ");
  car = car.replace(/ddz/g, "ƶƶ"); 
  
  car = car.replace(/DZS/g, "Ċ");
  car = car.replace(/Dzs/g, "Ċ");
  car = car.replace(/Dzs/g, "ċ");
  car = car.replace(/ZS/g, "Ĵ");
  car = car.replace(/Zs/g, "Ĵ");
  car = car.replace(/zs/g, "ĵ");  
  car = car.replace(/SZ/g, "Ṡ");
  car = car.replace(/Sz/g, "Ṡ");
  car = car.replace(/sz/g, "ṡ");
  car = car.replace(/DZ/g, "Ƶ");
  car = car.replace(/Dz/g, "Ƶ");
  car = car.replace(/dz/g, "ƶ");
  car = car.replace(/CS/g, "Ç");
  car = car.replace(/Cs/g, "Ç");
  car = car.replace(/cs/g, "ç");  
  car = car.replace(/GY/g, "Đ");
  car = car.replace(/Gy/g, "Đ");
  car = car.replace(/gy/g, "đ");
  car = car.replace(/NY/g, "Ń");
  car = car.replace(/Ny/g, "Ń");
  car = car.replace(/ny/g, "ń");
  car = car.replace(/LY/g, "Ĺ");
  car = car.replace(/Ly/g, "Ĺ");
  car = car.replace(/ly/g, "ĺ");
  car = car.replace(/TY/g, "Ć");
  car = car.replace(/Ty/g, "Ć");
  car = car.replace(/ty/g, "ć");
  car = car.replace(/C/g, "Ţ");   
  car = car.replace(/c/g, "ţ");
  car = car.replace(/Ċ/g, "C");
  car = car.replace(/ċ/g, "c");  
  car = car.replace(/S/g, "Ş");
  car = car.replace(/s/g, "ş");
  car = car.replace(/Ṡ/g, "S");
  car = car.replace(/ṡ/g, "s");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "İ");
  car = car.replace(/y/g, "i");
  car = car.replace(/J/g, "Y");
  car = car.replace(/j/g, "y");
  car = car.replace(/Ĵ/g, "J");
  car = car.replace(/ĵ/g, "j");
  
  car = car.replace(/\u200b/g, "");
  
  car = car.replace(/P(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "B$1");
  car = car.replace(/T(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "D$1");
  car = car.replace(/Ţ(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "Ƶ$1");
  car = car.replace(/Ç(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "C$1");
  car = car.replace(/K(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "G$1");
  car = car.replace(/Ć(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "Đ$1");
  car = car.replace(/F(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "V$1");
  car = car.replace(/S(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "Z$1");
  car = car.replace(/Ş(B|D|Ƶ|C|G|Đ|Z|J|b|d|ƶ|c|g|đ|z|j)/g, "J$1");
  car = car.replace(/p(b|d|ƶ|c|g|đ|z|j)/g, "b$1");
  car = car.replace(/t(b|d|ƶ|c|g|đ|z|j)/g, "d$1");
  car = car.replace(/ţ(b|d|ƶ|c|g|đ|z|j)/g, "ƶ$1");
  car = car.replace(/ç(b|d|ƶ|c|g|đ|z|j)/g, "c$1");
  car = car.replace(/k(b|d|ƶ|c|g|đ|z|j)/g, "g$1");
  car = car.replace(/ć(b|d|ƶ|c|g|đ|z|j)/g, "đ$1");
  car = car.replace(/f(b|d|ƶ|c|g|đ|z|j)/g, "v$1");
  car = car.replace(/s(b|d|ƶ|c|g|đ|z|j)/g, "z$1");
  car = car.replace(/ş(b|d|ƶ|c|g|đ|z|j)/g, "j$1");

  car = car.replace(/B(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "P$1");
  car = car.replace(/D(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "T$1");
  car = car.replace(/Ƶ(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "Ţ$1");
  car = car.replace(/C(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "Ç$1");
  car = car.replace(/G(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "K$1");
  car = car.replace(/Đ(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "Ć$1");
  car = car.replace(/V(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "F$1");
  car = car.replace(/Z(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "S$1");
  car = car.replace(/J(P|T|Ţ|Ç|K|Ć|S|Ş|H|p|t|ţ|ç|k|ć|s|ş|h)/g, "Ş$1");
  car = car.replace(/b(p|t|ţ|ç|k|ć|s|ş|h)/g, "p$1");
  car = car.replace(/d(p|t|ţ|ç|k|ć|s|ş|h)/g, "t$1");
  car = car.replace(/ƶ(p|t|ţ|ç|k|ć|s|ş|h)/g, "ţ$1");
  car = car.replace(/c(p|t|ţ|ç|k|ć|s|ş|h)/g, "ç$1");
  car = car.replace(/g(p|t|ţ|ç|k|ć|s|ş|h)/g, "k$1");
  car = car.replace(/đ(p|t|ţ|ç|k|ć|s|ş|h)/g, "ć$1");
  car = car.replace(/v(p|t|ţ|ç|k|ć|s|ş|h)/g, "f$1");
  car = car.replace(/z(p|t|ţ|ç|k|ć|s|ş|h)/g, "s$1");
  car = car.replace(/j(p|t|ţ|ç|k|ć|s|ş|h)/g, "ş$1");
  
  car = car.replace(/DY/g, "ĐĐ");
  car = car.replace(/ĐY/g, "ĐĐ");
  car = car.replace(/LY/g, "ĹĹ");
  car = car.replace(/ĹY/g, "ĹĹ");
  car = car.replace(/NY/g, "ŃŃ");
  car = car.replace(/ŃY/g, "ŃŃ");
  car = car.replace(/TY/g, "ĆĆ");
  car = car.replace(/ĆY/g, "ĆĆ");
  car = car.replace(/Dy/g, "Đđ");
  car = car.replace(/Đy/g, "Đđ");
  car = car.replace(/Ly/g, "Ĺĺ");
  car = car.replace(/Ĺy/g, "Ĺĺ");
  car = car.replace(/Ny/g, "Ńń");
  car = car.replace(/Ńy/g, "Ńń");
  car = car.replace(/Ty/g, "Ćć");
  car = car.replace(/Ćy/g, "Ćć");
  car = car.replace(/dy/g, "đđ");
  car = car.replace(/đy/g, "đđ");
  car = car.replace(/ly/g, "ĺĺ");
  car = car.replace(/ĺy/g, "ĺĺ");
  car = car.replace(/ny/g, "ńń");
  car = car.replace(/ńy/g, "ńń");
  car = car.replace(/ty/g, "ćć");
  car = car.replace(/ćy/g, "ćć");
  
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
  
  car = car.replace(/Ĺ/g, "Y");
  car = car.replace(/ĺ/g, "y");

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
  
  car = car.replace(/(a|â|e|i|o|u|û|ö|ü)Ƶ/g, "$1Dz");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü)Ƶ/g, "$1DZ");
  car = car.replace(/(A|Â|E|İ|O|U|Û|Ö|Ü|a|â|e|i|o|u|û|ö|ü)ƶ/g, "$1ts");
  car = car.replace(/Ƶ/g, "Z");
  car = car.replace(/ƶ/g, "z");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
