var translit;

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
  translit = translit.replace(/· ·/g, " ");
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
  
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)j·ŋ/g, "$1·j");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)h·ŋ/g, "·$1");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)s·ŋ/g, "$1·s");
  translit = translit.replace(/l(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)·ŋ/g, "l·$1");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)(a|e|è|i|o|õ|œ|u|ũ|y(a|è|õ|e|o|u)|w(a|è|õ|e|i))lb/g, "$1$2l");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)(a|e|è|i|o|õ|œ|u|ũ|y(a|è|õ|e|o|u)|w(a|è|õ|e|i))lt/g, "$1$2l");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)j·/g, "$1·");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)h·/g, "$1ɦ·");
  translit = translit.replace(/(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)s·/g, "$1·");
  translit = translit.replace(/l(b|č|d|g|h|j|k|l|m|n|ŋ|p|s|t)·/g, "$1·");
  
  translit = translit.replace(/ŋ(a|e|è|i|o|õ|œ|u|ũ|y|w)/g, "$1");
  
  translit = translit.replace(/(a|e|è|i|o|õ|œ|u|ũ)d·i/g, "$1j·i");
  translit = translit.replace(/(a|e|è|i|o|õ|œ|u|ũ)t·i/g, "$1č·i");
  
  translit = translit.replace(/(a|e|è|i|o|õ|œ|u|ũ)h·(a|e|è|i|o|õ|œ|u|ũ|y|w)/g, "$1·$2");
  
  translit = translit.replace(/·/g, "");
  
  translit = translit.replace(/t/g, "T");
  translit = translit.replace(/g(l|n|m)/g, "ŋ$1");
  translit = translit.replace(/nl/g, "ll");
  translit = translit.replace(/d(n|m)/g, "n$1");
  translit = translit.replace(/d(g|d|b|s|j|č|k|t|p|h)/g, "t$1");
  translit = translit.replace(/dl/g, "nn");
  translit = translit.replace(/ln/g, "ll");
  translit = translit.replace(/ml/g, "mn");
  translit = translit.replace(/b(g|d|b|s|j|č|k|t|p|h)/g, "p$1");
  translit = translit.replace(/b(n|l)/g, "mn");
  translit = translit.replace(/bm/g, "mm");
  translit = translit.replace(/(s|j|č)(g|d|b|s|j|č|k|t|p|h)/g, "t$2");
  translit = translit.replace(/ŋl/g, "ŋn");
  translit = translit.replace(/g(g|d|b|s|j|č|k|t|p|h)/g, "k$1");
  translit = translit.replace(/(h|ɦ)g/g, "k");
  translit = translit.replace(/(h|ɦ)d/g, "t");
  translit = translit.replace(/(h|ɦ)b/g, "p");
  translit = translit.replace(/(h|ɦ)j/g, "č");
  translit = translit.replace(/(h|ɦ)(č|k|p)/g, "t$2");
  translit = translit.replace(/(h|ɦ)t/g, "ṭ");  
  translit = translit.replace(/(d|s|ṣ|j|č|h)(b|č|d|g|h|j|k|m|n|ŋ|p|r|s|t|ĉ|ḳ|ṭ|ṣ|ṗ|([^bčdghjkmnŋprstḳṭśṗaeèioõœuũwy]|$))/g, "t$2");
  translit = translit.replace(/Th/g, "t");
  translit = translit.replace(/(s|j|č|t|T|h|ɦ)(n|l)/g, "nn");
  translit = translit.replace(/(s|j|č|t|T|h|ɦ)m/g, "nm");
  translit = translit.replace(/ɦ/g, "");
  translit = translit.replace(/T/g, "t");
  
  translit = translit.replace(/(p|t|č|k)h(y|w)/g, "$1$2");
  
  translit = translit.replace(/b(b|č|d|g|h|j|k|m|n|ŋ|p|r|s|t|ĉ|ḳ|ṭ|ṣ|ṗ|([^bčdghjkmnŋprstḳṭṣṗaeèioõœuũwy]|$))/g, "p$1");
  translit = translit.replace(/d(b|č|d|g|h|j|k|m|n|ŋ|p|r|s|t|ĉ|ḳ|ṭ|ṣ|ṗ|([^bčdghjkmnŋprstḳṭṣṗaeèioõœuũwy]|$))/g, "t$1");
  translit = translit.replace(/j(b|č|d|g|h|j|k|m|n|ŋ|p|r|s|t|ĉ|ḳ|ṭ|ṣ|ṗ|([^bčdghjkmnŋprstḳṭṣṗaeèioõœuũwy]|$))/g, "č$1");
  translit = translit.replace(/g(b|č|d|g|h|j|k|m|n|ŋ|p|r|s|t|ĉ|ḳ|ṭ|ṣ|ṗ|([^bčdghjkmnŋprstḳṭṣṗaeèioõœuũwy]|$))/g, "k$1");
 
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
