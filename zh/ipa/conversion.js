var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ā/g, "A");
  car = car.replace(/Á/g, "A");
  car = car.replace(/Ǎ/g, "A");
  car = car.replace(/Ă/g, "A");
  car = car.replace(/À/g, "A");
  car = car.replace(/Ē/g, "E");
  car = car.replace(/É/g, "E");
  car = car.replace(/Ě/g, "E");
  car = car.replace(/Ĕ/g, "E");
  car = car.replace(/È/g, "E");
  car = car.replace(/Ê̄/g, "E");
  car = car.replace(/Ế/g, "E");
  car = car.replace(/Ê̌/g, "E");
  car = car.replace(/Ê̆/g, "E");
  car = car.replace(/Ề/g, "E");
  car = car.replace(/Ê/g, "E");
  car = car.replace(/Ī/g, "I");
  car = car.replace(/Í/g, "I");
  car = car.replace(/Ǐ/g, "I");
  car = car.replace(/Ĭ/g, "I");
  car = car.replace(/Ì/g, "I");
  car = car.replace(/Ō/g, "O");
  car = car.replace(/Ó/g, "O");
  car = car.replace(/Ǒ/g, "O");
  car = car.replace(/Ŏ/g, "O");
  car = car.replace(/Ò/g, "O");
  car = car.replace(/Ū/g, "U");
  car = car.replace(/Ú/g, "U");
  car = car.replace(/Ǔ/g, "U");
  car = car.replace(/Ŭ/g, "U");
  car = car.replace(/Ù/g, "U");
  car = car.replace(/Ǖ/g, "Ü");
  car = car.replace(/Ǘ/g, "Ü");
  car = car.replace(/Ǚ/g, "Ü");
  car = car.replace(/Ǜ/g, "Ü");
  car = car.replace(/Ü/g, "Ü");
  car = car.replace(/Ĉ/g, "Ch");
  car = car.replace(/Ŋ/g, "Ng");
  car = car.replace(/Ŝ/g, "Sh");
  car = car.replace(/Ẑ/g, "Zh");
  car = car.replace(/ā/g, "a");
  car = car.replace(/ɑ̄/g, "a");
  car = car.replace(/á/g, "a");
  car = car.replace(/ɑ́/g, "a");
  car = car.replace(/ǎ/g, "a");
  car = car.replace(/ă/g, "a");
  car = car.replace(/ɑ̌/g, "a");
  car = car.replace(/à/g, "a");
  car = car.replace(/ē/g, "e");
  car = car.replace(/é/g, "e");
  car = car.replace(/ě/g, "e");
  car = car.replace(/ĕ/g, "e");
  car = car.replace(/è/g, "e");
  car = car.replace(/ê̄/g, "e");
  car = car.replace(/ế/g, "e");
  car = car.replace(/ê̌/g, "e");
  car = car.replace(/ê̆/g, "e");
  car = car.replace(/ề/g, "e");
  car = car.replace(/ê/g, "e");
  car = car.replace(/ī/g, "i");
  car = car.replace(/í/g, "i");
  car = car.replace(/ǐ/g, "i");
  car = car.replace(/ĭ/g, "i");
  car = car.replace(/ì/g, "i");
  car = car.replace(/ō/g, "o");
  car = car.replace(/ó/g, "o");
  car = car.replace(/ǒ/g, "o");
  car = car.replace(/ŏ/g, "o");
  car = car.replace(/ò/g, "o");
  car = car.replace(/ū/g, "u");
  car = car.replace(/ú/g, "u");
  car = car.replace(/ǔ/g, "u");
  car = car.replace(/ŭ/g, "u");
  car = car.replace(/ù/g, "u");
  car = car.replace(/ǖ/g, "ü");
  car = car.replace(/ǘ/g, "ü");
  car = car.replace(/ǚ/g, "ü");
  car = car.replace(/ǜ/g, "ü");
  car = car.replace(/ü/g, "ü");
  car = car.replace(/ĉ/g, "ch");
  car = car.replace(/ŋ/g, "ng");
  car = car.replace(/ŝ/g, "sh");
  car = car.replace(/ẑ/g, "zh");
  
  car = car.replace(/A/g, "a");
  car = car.replace(/B/g, "b");
  car = car.replace(/C/g, "c");
  car = car.replace(/D/g, "d");
  car = car.replace(/E/g, "e");
  car = car.replace(/F/g, "f");
  car = car.replace(/G/g, "g");
  car = car.replace(/H/g, "h");
  car = car.replace(/I/g, "i");
  car = car.replace(/J/g, "j");
  car = car.replace(/K/g, "k");
  car = car.replace(/L/g, "l");
  car = car.replace(/M/g, "m");
  car = car.replace(/N/g, "n");
  car = car.replace(/O/g, "o");
  car = car.replace(/P/g, "p");
  car = car.replace(/Q/g, "q");
  car = car.replace(/R/g, "r");
  car = car.replace(/S/g, "s");
  car = car.replace(/T/g, "t");
  car = car.replace(/U/g, "u");
  car = car.replace(/W/g, "w");
  car = car.replace(/X/g, "x");
  car = car.replace(/Y/g, "y");
  car = car.replace(/Z/g, "z");
  car = car.replace(/Ü/g, "ü");

  car = car.replace(/(b|p|m|f)o/g, "$1uo");
  car = car.replace(/(z|c|s|zh|ch|sh|r)i/g, "$1ɨ");

  car = car.replace(/weng/g, "ẃəŋ");
  car = car.replace(/wen/g, "'un");
  car = car.replace(/wei/g, "'ui");
  car = car.replace(/you/g, "'iu");
  car = car.replace(/y(u|ü)/g, "'ü");
  car = car.replace(/ju/g, "jü");
  car = car.replace(/qu/g, "qü");
  car = car.replace(/xu/g, "xü");
  car = car.replace(/yi/g, "'i");
  car = car.replace(/y/g, "'i");
  car = car.replace(/wu/g, "'u");
  car = car.replace(/w/g, "'u");
  car = car.replace(/ẃ/g, "w");

  car = car.replace(/er(a|e|i|o|u|ü)/g, "e'r$1");

  car = car.replace(/iang/g, "ĵaŋ");
  car = car.replace(/iong/g, "ĵʊŋ");
  car = car.replace(/uang/g, "waŋ");
  car = car.replace(/ang/g, "aŋ");
  car = car.replace(/eng/g, "əŋ");
  car = car.replace(/ong/g, "ʊŋ");
  car = car.replace(/iao/g, "ĵau̯");
  car = car.replace(/ian/g, "ĵɛn");
  car = car.replace(/ing/g, "iŋ");
  car = car.replace(/uai/g, "wai̯");
  car = car.replace(/uan/g, "wan");
  car = car.replace(/üan/g, "ɥɛn");
  car = car.replace(/ai/g, "ai̯");
  car = car.replace(/ei/g, "ěi̯");
  car = car.replace(/ao/g, "au̯");
  car = car.replace(/ou/g, "ôu̯");
  car = car.replace(/en/g, "ən");
  car = car.replace(/er/g, "aɚ̯");
  car = car.replace(/ia/g, "ĵa");
  car = car.replace(/ie/g, "ĵě");
  car = car.replace(/iu/g, "ĵôu̯");
  car = car.replace(/ua/g, "wa");
  car = car.replace(/uo/g, "wô");
  car = car.replace(/ui/g, "wěi̯");
  car = car.replace(/un/g, "wən");
  car = car.replace(/üe/g, "ɥě");
  car = car.replace(/ün/g, "yn");
  car = car.replace(/io/g, "ĵɔ");
  car = car.replace(/e/g, "ɤ");
  car = car.replace(/ü/g, "y");
  car = car.replace(/ê/g, "ɛ");
  car = car.replace(/o/g, "ɔ");
  car = car.replace(/ě/g, "e");
  car = car.replace(/ô/g, "o");

  car = car.replace(/zh/g, "ʈʂ");
  car = car.replace(/ch/g, "ʈʂʰ");
  car = car.replace(/sh/g, "ʂ");
  car = car.replace(/p/g, "pʰ");
  car = car.replace(/b/g, "p");
  car = car.replace(/t/g, "tʰ");
  car = car.replace(/d/g, "t");
  car = car.replace(/z/g, "ts");
  car = car.replace(/c/g, "tsʰ");
  car = car.replace(/r/g, "ʐ");
  car = car.replace(/j/g, "tɕ");
  car = car.replace(/q/g, "tɕʰ");
  car = car.replace(/x/g, "ɕ");
  car = car.replace(/k/g, "kʰ");
  car = car.replace(/g/g, "k");
  car = car.replace(/h/g, "x");
  car = car.replace(/ĵ/g, "j");
  
  car = car.replace(/'/g, "");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
