//  zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
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
  translit = translit.replace(/(\ua964|\u11b0)/g, "rg");
  translit = translit.replace(/(\ua968|\u11b1)/g, "rm");
  translit = translit.replace(/(\ua969|\u11b2)/g, "rb");
  translit = translit.replace(/(\ua96c|\u11b3)/g, "rs");
  translit = translit.replace(/\u11b4/g, "lt");
  translit = translit.replace(/\u11b5/g, "lp");
  translit = translit.replace(/(\u111a|\u11b6)/g, "lh");
  translit = translit.replace(/(\u1108|\ud7e6)/g, "ṗ");
  translit = translit.replace(/(\u1121|\u11b9)/g, "bs");
  translit = translit.replace(/(\u110a|\u11bb)/g, "ṣ");
  translit = translit.replace(/(\u110d|\ud7f9)/g, "č\u0323");
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
  
  translit = translit.replace(/ŋ(a|e|è|i|o|õ|u|ũ|y|w)/g, "$1");
  
  translit = translit.replace(/l(a|e|è|i|o|õ|u|ũ|y|w)/g, "r$1");

  translit = translit.replace(/l·r/g, "l·l");

  translit = translit.replace(/ḳ/g, "gg");
  translit = translit.replace(/ṭ/g, "dd");
  translit = translit.replace(/ṗ/g, "bb");
  translit = translit.replace(/ṣ/g, "ss");
  translit = translit.replace(/ŋ/g, "ng");
  translit = translit.replace(/č\u0323/g, "jj");
  translit = translit.replace(/č/g, "ch");
  translit = translit.replace(/è/g, "ae")
  translit = translit.replace(/õ/g, "eo")
  translit = translit.replace(/wa/g, "oa");
  translit = translit.replace(/wae/g, "oae");
  translit = translit.replace(/œ/g, "oi");
  translit = translit.replace(/wõ/g, "ueo");
  translit = translit.replace(/we/g, "ue");
  translit = translit.replace(/wi/g, "ui");
  translit = translit.replace(/ũ/g, "eu");
  
  
  translit = translit.replace(/·/g, "");
  
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
