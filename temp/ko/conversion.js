﻿var translit;

function cyrlat () {
  translit = document.transcription.text1.value;
//getting the Latin letters out of the way

  translit = translit.replace(/A/g, "А");
  translit = translit.replace(/B/g, "Б");
  translit = translit.replace(/C/g, "Ц");
  translit = translit.replace(/D/g, "Д");
  translit = translit.replace(/E/g, "Е");
  translit = translit.replace(/F/g, "Ф");
  translit = translit.replace(/G/g, "Г");
  translit = translit.replace(/H/g, "Һ");
  translit = translit.replace(/I/g, "И");
  translit = translit.replace(/J/g, "Ж");
  translit = translit.replace(/K/g, "К");
  translit = translit.replace(/L/g, "Л");
  translit = translit.replace(/M/g, "М");
  translit = translit.replace(/N/g, "Н");
  translit = translit.replace(/O/g, "О");
  translit = translit.replace(/P/g, "П");
  translit = translit.replace(/Q/g, "Қ");
  translit = translit.replace(/R/g, "Р");
  translit = translit.replace(/S/g, "С");
  translit = translit.replace(/T/g, "Т");
  translit = translit.replace(/U/g, "У");
  translit = translit.replace(/V/g, "В");
  translit = translit.replace(/W/g, "Ў");
  translit = translit.replace(/X/g, "Х");
  translit = translit.replace(/Y/g, "Й");
  translit = translit.replace(/Z/g, "З");
  translit = translit.replace(/a/g, "а");
  translit = translit.replace(/b/g, "б");
  translit = translit.replace(/c/g, "ц");
  translit = translit.replace(/d/g, "д");
  translit = translit.replace(/e/g, "е");
  translit = translit.replace(/f/g, "ф");
  translit = translit.replace(/g/g, "г");
  translit = translit.replace(/h/g, "һ");
  translit = translit.replace(/i/g, "и");
  translit = translit.replace(/j/g, "ж");
  translit = translit.replace(/k/g, "к");
  translit = translit.replace(/l/g, "л");
  translit = translit.replace(/m/g, "м");
  translit = translit.replace(/n/g, "н");
  translit = translit.replace(/o/g, "о");
  translit = translit.replace(/p/g, "п");
  translit = translit.replace(/q/g, "қ");
  translit = translit.replace(/r/g, "р");
  translit = translit.replace(/s/g, "с");
  translit = translit.replace(/t/g, "т");
  translit = translit.replace(/u/g, "у");
  translit = translit.replace(/v/g, "в");
  translit = translit.replace(/w/g, "ў");
  translit = translit.replace(/x/g, "х");
  translit = translit.replace(/y/g, "й");
  translit = translit.replace(/z/g, "з");

  translit = translit.normalize('NFC');
  translit = translit.replace(/.{1}/g, "$&" + "·");
  translit = translit.normalize('NFD');

  translit = translit.replace(/(\u1100|\u11a8)/g, "g");
  translit = translit.replace(/(\u1102|\u11ab)/g, "n");
  translit = translit.replace(/(\u1103|\u11ae)/g, "d");
  translit = translit.replace(/(\u1105|\u11af)/g, "l");
  translit = translit.replace(/(\u1106|\u11b7)/g, "m");
  translit = translit.replace(/(\u1107|\u11b8)/g, "b");
  translit = translit.replace(/(\u1109|\u11ba)/g, "s");
  translit = translit.replace(/(\u110b|\u11bc)/g, "ŋ");
  translit = translit.replace(/(\u110c|\u11bd)/g, "j");
  translit = translit.replace(/(\u110e|\u11be)/g, "č");
  translit = translit.replace(/(\u110f|\u11bf)/g, "k");
  translit = translit.replace(/(\u1110|\u11c0)/g, "t");
  translit = translit.replace(/(\u1111|\u11c1)/g, "p");
  translit = translit.replace(/(\u1112|\u11c2)/g, "h");
  translit = translit.replace(/\u1161/g, "a");
  translit = translit.replace(/\u1163/g, "ya");
  translit = translit.replace(/\u1165/g, "õ");
  translit = translit.replace(/\u1167/g, "yõ");
  translit = translit.replace(/\u1169/g, "o");
  translit = translit.replace(/\u116d/g, "yo");
  translit = translit.replace(/\u116e/g, "u");
  translit = translit.replace(/\u1172/g, "yu");
  translit = translit.replace(/\u1173/g, "ũ");
  translit = translit.replace(/\u1175/g, "i");
  translit = translit.replace(/(\u1101|\u11a9)/g, "ḳ");
  translit = translit.replace(/\u11aa/g, "gs");
  translit = translit.replace(/(\u115c|\u11ac)/g, "nj");
  translit = translit.replace(/(\u115d|\u11ad)/g, "nh");
  translit = translit.replace(/(\u1104|\ud7cd)/g, "ṭ");
  translit = translit.replace(/(\ua964|\u11b0)/g, "lg");
  translit = translit.replace(/(\ua968|\u11b1)/g, "lm");
  translit = translit.replace(/(\ua969|\u11b2)/g, "lb");
  translit = translit.replace(/(\ua96c|\u11b3)/g, "ls");
  translit = translit.replace(/\u11b4/g, "lt");
  translit = translit.replace(/\u11b5/g, "lp");
  translit = translit.replace(/(\u111a|\u11b6)/g, "lh");
  translit = translit.replace(/(\u1108|\ud7e6)/g, "ṗ");
  translit = translit.replace(/(\u1121|\u11b9)/g, "bs");
  translit = translit.replace(/(\u110a|\u11bb)/g, "ṣ");
  translit = translit.replace(/(\u110d|\ud7f9)/g, "ĉ");
  translit = translit.replace(/\u1162/g, "è");
  translit = translit.replace(/\u1164/g, "yè");
  translit = translit.replace(/\u1166/g, "e");
  translit = translit.replace(/\u1168/g, "ye");
  translit = translit.replace(/\u116a/g, "wa");
  translit = translit.replace(/\u116b/g, "wè");
  translit = translit.replace(/\u116c/g, "œ");
  translit = translit.replace(/\u116f/g, "wõ");
  translit = translit.replace(/\u1170/g, "we");
  translit = translit.replace(/\u1171/g, "wi");
  translit = translit.replace(/\u1174/g, "ũi");
  translit = translit.normalize('NFC');  

  translit = translit.replace(/gs·ŋ/g, "g·s");
  translit = translit.replace(/nj·ŋ/g, "n·j");
  translit = translit.replace(/nj·l/g, "n·n");
  translit = translit.replace(/nj·h/g, "n·č");
  translit = translit.replace(/nh·(g|ḳ)/g, "n·k");
  translit = translit.replace(/nh·d/g, "n·t");
  translit = translit.replace(/nh·b/g, "n·p");
  translit = translit.replace(/nh·(j|ĉ)/g, "n·č");
  translit = translit.replace(/lg·(ŋ|g)/g, "l·g");
  translit = translit.replace(/lg·ḳ/g, "l·ḳ");
  translit = translit.replace(/lg·(k|h)/g, "l·k");
  translit = translit.replace(/lm·ŋ/g, "l·m");
  translit = translit.replace(/lb·ŋ/g, "l·b");
  translit = translit.replace(/lb·h/g, "l·ph");
  translit = translit.replace(/ls·ŋ/g, "l·s");
  translit = translit.replace(/ls·(n|l)/g, "l·n");
  translit = translit.replace(/lt·ŋ/g, "l·t");
  translit = translit.replace(/lp·ŋ/g, "l·p");
  translit = translit.replace(/lh·ŋ/g, "·l");
  translit = translit.replace(/lh·(g|ḳ)/g, "l·k");
  translit = translit.replace(/lh·(d|ṭ)/g, "l·t");
  translit = translit.replace(/lh·(b|ṗ)/g, "l·p");
  translit = translit.replace(/lh·(j|ĉ)/g, "l·č");
  translit = translit.replace(/bs·ŋ/g, "b·s");
  translit = translit.replace(/(gs·|lg·)/g, "g·");
  translit = translit.replace(/(nj·|nh·)/g, "n·");
  translit = translit.replace(/lm·/g, "m·");
  translit = translit.replace(/(lb·|ls·|lt·|lh·)/g, "l·");
  translit = translit.replace(/(lp·|bs·)/g, "b·");
  
  translit = translit.replace(/(g|ḳ|n|d|ṭ|l|m|b|ṗ|s|ṣ|j|ĉ|č|k|t|p)·ŋ/g, "·$1");
  translit = translit.replace(/h·ŋ/g, "·ŋ");
  
  translit = translit.replace(/(g|ḳ)·(g|ḳ|d|0|b|ṗ|s|ṣ|j|ĉ|č|k|t|p|h)/g, "k·$2");
  translit = translit.replace(/(g|ḳ|ŋ|k)·(n|l)/g, "ŋ·n");
  translit = translit.replace(/(g|ḳ|k)·m/g, "ŋ·m");
  translit = translit.replace(/n·l/g, "l·l");
  translit = translit.replace(/(d|s|ṣ|č)·(g|ḳ|d|ṭ|b|ṗ|s|ṣ|j|ĉ|č|k|t|p|h)/g, "t·$2");
  translit = translit.replace(/(d|s|ṣ|j|č|t|h)·(n|l)/g, "n·n");
  translit = translit.replace(/(d|s|ṣ|j|č|t|h)·m/g, "n·m");
  translit = translit.replace(/l·n/g, "l·l");
  translit = translit.replace(/(m|b|p)·(n|l)/g, "m·n");
  translit = translit.replace(/b·(g|ḳ|d|ṭ|b|ṗ|s|ṣ|j|ĉ|č|k|t|p|h)/g, "p·$1");
  translit = translit.replace(/b·m/g, "m·m");
  translit = translit.replace(/j·(g|ḳ|d|ṭ|b|ṗ|s|ṣ|j|ĉ|č|k|t|p)/g, "t·$1");
  translit = translit.replace(/j·h/g, "·č");
  translit = translit.replace(/p·m/g, "m·m");
  translit = translit.replace(/h·(g|ḳ)/g, "·k");
  translit = translit.replace(/h·(d|ṭ)/g, "·t");
  translit = translit.replace(/h·(b|ṗ)/g, "·p");
  translit = translit.replace(/h·(j|ĉ)/g, "·č");
  translit = translit.replace(/h·č/g, "t·č");
  translit = translit.replace(/h·(s|ṣ|k|t|p|h)/g, "·$1");
  
  translit = translit.replace(/(g|ḳ)·/g, "k·");
  translit = translit.replace(/(d|s|ṣ|j|č|h)·/g, "t·");
  translit = translit.replace(/b·/g, "p·");
  translit = translit.replace(/h·/g, "t·");
  
  translit = translit.replace(/ŋ(a|e|è|i|o|õ|œ|u|ũ|y|w)/g, "$1");

  translit = translit.replace(/·/g, "");
 
  translit = translit.replace(/l(a|e|è|i|o|õ|œ|u|ũ|y|w)/g, "r$1");
  translit = translit.replace(/lr/g, "ll");
  
  translit = translit.replace(/s(i|y|wi)/g, "š$1");
  translit = translit.replace(/ṣ(i|y|wi)/g, "š\u0323$1");

  translit = translit.replace(/sh/g, "s-h");
  translit = translit.replace(/ng/g, "n-g")
  translit = translit.replace(/š\u0323/g, "s\u0323h");
  translit = translit.replace(/š/g, "sh");
  translit = translit.replace(/ŋ(a|e|è|i|o|õ|u|ũ|y|w)/g, "ŋ-$1");
  translit = translit.replace(/ŋ/g, "ng");
  translit = translit.replace(/ĉ/g, "c\u0323h");
  translit = translit.replace(/č/g, "ch");
  translit = translit.replace(/œ/g, "we"); 
  
  translit = translit.replace(/ṗ/g, "p\u0301");
  translit = translit.replace(/ḳ/g, "k\u0301");
  translit = translit.replace(/c\u0323h/g, "ç\u0301");
  translit = translit.replace(/s\u0323h/g, "ş\u0301");
  translit = translit.replace(/ṣ/g, "s\u0301");
  translit = translit.replace(/ṭ/g, "t\u0301");


  translit = translit.replace(/ch/g, "ç");
  translit = translit.replace(/sh/g, "ş");
  translit = translit.replace(/ng/g, "nğ");
  translit = translit.replace(/j/g, "c");
  translit = translit.replace(/w/g, "v");
  translit = translit.replace(/è/g, "e");
  translit = translit.replace(/õ/g, "å");
  translit = translit.replace(/ũ/g, "ı");
  
  translit = translit.replace(/ıi/g, "ıy");
  
  translit = translit.replace(/(a|e|i|o|å|u|ı)(a|e|i|o|å|u|ı)/g, "$1ğ$2");
  translit = translit.replace(/(a|e|i|o|å|u|ı)(a|e|i|o|å|u|ı)/g, "$1ğ$2");
  translit = translit.replace(/(a|e|i|o|å|u|ı)(a|e|i|o|å|u|ı)/g, "$1ğ$2");
  translit = translit.replace(/(a|e|i|o|å|u|ı)(a|e|i|o|å|u|ı)/g, "$1ğ$2");
  
  translit = translit.replace(/n-g/g, "ng");
  translit = translit.replace(/s-h/g, "sh");
  translit = translit.replace(/nğ-/g, "nğ");
  
  
  
  translit = translit.replace(/ㄱ/g, "g");
  translit = translit.replace(/ㄴ/g, "n");
  translit = translit.replace(/ㄷ/g, "d");
  translit = translit.replace(/ㄹ/g, "l");
  translit = translit.replace(/ㅁ/g, "m");
  translit = translit.replace(/ㅂ/g, "b");
  translit = translit.replace(/ㅅ/g, "s");
  translit = translit.replace(/ㅇ/g, "ng");
  translit = translit.replace(/ㅈ/g, "j");
  translit = translit.replace(/ㅊ/g, "ch");
  translit = translit.replace(/ㅋ/g, "k");
  translit = translit.replace(/ㅌ/g, "t");
  translit = translit.replace(/ㅍ/g, "p");
  translit = translit.replace(/ㅎ/g, "h");
  translit = translit.replace(/ㅏ/g, "a");
  translit = translit.replace(/ㅑ/g, "ya");
  translit = translit.replace(/ㅓ/g, "õ");
  translit = translit.replace(/ㅕ/g, "yõ");
  translit = translit.replace(/ㅗ/g, "o");
  translit = translit.replace(/ㅛ/g, "yo");
  translit = translit.replace(/ㅜ/g, "u");
  translit = translit.replace(/ㅠ/g, "yu");
  translit = translit.replace(/ㅡ/g, "ũ");
  translit = translit.replace(/ㅣ/g, "i");
  translit = translit.replace(/ㄲ/g, "ḳ");
  translit = translit.replace(/ㄸ/g, "ṭ");
  translit = translit.replace(/ㅃ/g, "ṗ");
  translit = translit.replace(/ㅆ/g, "ṣ");
  translit = translit.replace(/ㅉ/g, "c\u0323h");
  translit = translit.replace(/ㄳ/g, "gs");
  translit = translit.replace(/ㄵ/g, "nj");
  translit = translit.replace(/ㄶ/g, "nh");
  translit = translit.replace(/ㄺ/g, "rg");
  translit = translit.replace(/ㄻ/g, "rm");
  translit = translit.replace(/ㄼ/g, "rb");
  translit = translit.replace(/ㄽ/g, "rs");
  translit = translit.replace(/ㄾ/g, "lt");
  translit = translit.replace(/ㄿ/g, "lp");
  translit = translit.replace(/ㅀ/g, "lh");
  translit = translit.replace(/ㅄ/g, "bs");
  translit = translit.replace(/ㅐ/g, "è");
  translit = translit.replace(/ㅒ/g, "yè");
  translit = translit.replace(/ㅔ/g, "e");
  translit = translit.replace(/ㅖ/g, "ye");
  translit = translit.replace(/ㅘ/g, "wa");
  translit = translit.replace(/ㅙ/g, "wè");
  translit = translit.replace(/ㅚ/g, "we");
  translit = translit.replace(/ㅝ/g, "wõ");
  translit = translit.replace(/ㅞ/g, "we");
  translit = translit.replace(/ㅟ/g, "wi");
  translit = translit.replace(/ㅢ/g, "ũi");

//re-adding Latin letters
  
  translit = translit.replace(/А/g, "A");
  translit = translit.replace(/Б/g, "B");
  translit = translit.replace(/Ц/g, "C");
  translit = translit.replace(/Д/g, "D");
  translit = translit.replace(/Е/g, "E");
  translit = translit.replace(/Ф/g, "F");
  translit = translit.replace(/Г/g, "G");
  translit = translit.replace(/Һ/g, "H");
  translit = translit.replace(/И/g, "I");
  translit = translit.replace(/Ж/g, "J");
  translit = translit.replace(/К/g, "K");
  translit = translit.replace(/Л/g, "L");
  translit = translit.replace(/М/g, "M");
  translit = translit.replace(/Н/g, "N");
  translit = translit.replace(/О/g, "O");
  translit = translit.replace(/П/g, "P");
  translit = translit.replace(/Қ/g, "Q");
  translit = translit.replace(/Р/g, "R");
  translit = translit.replace(/С/g, "S");
  translit = translit.replace(/Т/g, "T");
  translit = translit.replace(/У/g, "U");
  translit = translit.replace(/В/g, "V");
  translit = translit.replace(/Ў/g, "W");
  translit = translit.replace(/Х/g, "X");
  translit = translit.replace(/Й/g, "Y");
  translit = translit.replace(/З/g, "Z");
  translit = translit.replace(/а/g, "a");
  translit = translit.replace(/б/g, "b");
  translit = translit.replace(/ц/g, "c");
  translit = translit.replace(/д/g, "d");
  translit = translit.replace(/е/g, "e");
  translit = translit.replace(/ф/g, "f");
  translit = translit.replace(/г/g, "g");
  translit = translit.replace(/һ/g, "h");
  translit = translit.replace(/и/g, "i");
  translit = translit.replace(/ж/g, "j");
  translit = translit.replace(/к/g, "k");
  translit = translit.replace(/л/g, "l");
  translit = translit.replace(/м/g, "m");
  translit = translit.replace(/н/g, "n");
  translit = translit.replace(/о/g, "o");
  translit = translit.replace(/п/g, "p");
  translit = translit.replace(/қ/g, "q");
  translit = translit.replace(/р/g, "r");
  translit = translit.replace(/с/g, "s");
  translit = translit.replace(/т/g, "t");
  translit = translit.replace(/у/g, "u");
  translit = translit.replace(/в/g, "v");
  translit = translit.replace(/ў/g, "w");
  translit = translit.replace(/х/g, "x");
  translit = translit.replace(/й/g, "y");
  translit = translit.replace(/з/g, "z");
  
  translit = translit.normalize('NFC');
document.transcription.text2.value = translit;
}


function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
