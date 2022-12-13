var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.normalize('NFD');
  car = car.replace(/(\u0300|\u0301|\u0304|\u030c)/g, "");
  car = car.normalize('NFC');
  car = car.replace(/Ĉ/g, "Ch");
  car = car.replace(/Ŋ/g, "Ng");
  car = car.replace(/Ŝ/g, "Sh");
  car = car.replace(/Ẑ/g, "Zh");
  car = car.replace(/ĉ/g, "ch");
  car = car.replace(/ŋ/g, "ng");
  car = car.replace(/ŝ/g, "sh");
  car = car.replace(/ẑ/g, "zh");

  car = car.replace(/(B|P|M|F)O/g, "$1UO");
  car = car.replace(/(B|P|M|F|b|p|m|f)o/g, "$1uo");
  car = car.replace(/(Z|C|S|ZH|CH|SH|R)I/g, "$1I");
  car = car.replace(/(Z|C|S|Zh|Ch|Sh|R|z|c|s|zh|ch|sh|r)i/g, "$1і");

  car = car.replace(/WENG/g, "ЎӘҢ");
  car = car.replace(/WEN/g, "'UN");
  car = car.replace(/WEI/g, "'UI");
  car = car.replace(/YOU/g, "'IU");
  car = car.replace(/Y(U|Ü)/g, "'Ü");
  car = car.replace(/JU/g, "JÜ");
  car = car.replace(/QU/g, "QÜ");
  car = car.replace(/XU/g, "XÜ");
  car = car.replace(/YI/g, "'I");
  car = car.replace(/WU/g, "'U");
  car = car.replace(/Weng/g, "Ўәң");
  car = car.replace(/Wen/g, "'Un");
  car = car.replace(/Wei/g, "'Ui");
  car = car.replace(/You/g, "'Iu");
  car = car.replace(/Y(u|ü)/g, "'Ü");
  car = car.replace(/Ju/g, "Jü");
  car = car.replace(/Qu/g, "Qü");
  car = car.replace(/Xu/g, "Xü");
  car = car.replace(/Yi/g, "'I");
  car = car.replace(/Wu/g, "'U");
  car = car.replace(/weng/g, "ўәң");
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
  car = car.replace(/Y/g, "'I");
  car = car.replace(/W/g, "'U");

  car = car.replace(/ER(A|E|I|O|U|Ü)/g, "E'R$1");
  car = car.replace(/Er(a|e|i|o|u|ü)/g, "E'r$1");
  car = car.replace(/er(a|e|i|o|u|ü)/g, "e'r$1");


  car = car.replace(/IANG/g, "ЙАҢ");
  car = car.replace(/IONG/g, "ЙҰҢ");
  car = car.replace(/UANG/g, "ЎАҢ");
  car = car.replace(/ANG/g, "АҢ");
  car = car.replace(/ENG/g, "ӘҢ");
  car = car.replace(/ONG/g, "ҰҢ");
  car = car.replace(/IAO/g, "ЙАУ\u032f");
  car = car.replace(/IAN/g, "ЙЭН");
  car = car.replace(/ING/g, "ИҢ");
  car = car.replace(/UAI/g, "ЎАИ\u032f");
  car = car.replace(/UAN/g, "ЎАН");
  car = car.replace(/ÜAN/g, "ӮЭН");
  car = car.replace(/AI/g, "АИ\u032f");
  car = car.replace(/EI/g, "ЕИ\u032f");
  car = car.replace(/AO/g, "АУ\u032f");
  car = car.replace(/OU/g, "ОУ\u032f");
  car = car.replace(/EN/g, "ӘН");
  car = car.replace(/IA/g, "ЙА");
  car = car.replace(/IE/g, "ЙЕ");
  car = car.replace(/IU/g, "ЙОУ\u032f");
  car = car.replace(/UA/g, "ЎА");
  car = car.replace(/UO/g, "ЎО");
  car = car.replace(/UI/g, "ЎЕИ\u032f");
  car = car.replace(/UN/g, "ЎӘН");
  car = car.replace(/ÜE/g, "ӮЕ");
  car = car.replace(/ÜN/g, "ҮН");
  car = car.replace(/IO/g, "ЙӦ");
  car = car.replace(/ER/g, "АҖ\u032f");
  
  car = car.replace(/Iang/g, "Йаң");
  car = car.replace(/Iong/g, "Йұң");
  car = car.replace(/Uang/g, "Ўаң");
  car = car.replace(/Ang/g, "Аң");
  car = car.replace(/Eng/g, "Әң");
  car = car.replace(/Ong/g, "Ұң");
  car = car.replace(/Iao/g, "Йау\u032f");
  car = car.replace(/Ian/g, "Йэн");
  car = car.replace(/Ing/g, "Иң");
  car = car.replace(/Uai/g, "Ўаи\u032f");
  car = car.replace(/Uan/g, "Ўан");
  car = car.replace(/Üan/g, "Ӯэн");
  car = car.replace(/Ai/g, "Аи\u032f");
  car = car.replace(/Ei/g, "Еи\u032f");
  car = car.replace(/Ao/g, "Ау\u032f");
  car = car.replace(/Ou/g, "Оу\u032f");
  car = car.replace(/En/g, "Ән");
  car = car.replace(/Ia/g, "Йа");
  car = car.replace(/Ie/g, "Йе");
  car = car.replace(/Iu/g, "Йоу\u032f");
  car = car.replace(/Ua/g, "Ўа");
  car = car.replace(/Uo/g, "Ўо");
  car = car.replace(/Ui/g, "Ўеи\u032f");
  car = car.replace(/Un/g, "Ўән");
  car = car.replace(/Üe/g, "Ӯе");
  car = car.replace(/Ün/g, "Үн");
  car = car.replace(/Io/g, "Йӧ");
  car = car.replace(/Er/g, "Аҗ\u032f");
  car = car.replace(/I/g, "И");
  car = car.replace(/E/g, "Ы");
  car = car.replace(/Ü/g, "Ү");
  car = car.replace(/Ê/g, "Э");
  car = car.replace(/O/g, "Ӧ");
  
  car = car.replace(/iang/g, "йаң");
  car = car.replace(/iong/g, "йұң");
  car = car.replace(/uang/g, "ўаң");
  car = car.replace(/ang/g, "аң");
  car = car.replace(/eng/g, "әң");
  car = car.replace(/ong/g, "ұң");
  car = car.replace(/iao/g, "йау\u032f");
  car = car.replace(/ian/g, "йэн");
  car = car.replace(/ing/g, "иң");
  car = car.replace(/uai/g, "ўаи\u032f");
  car = car.replace(/uan/g, "ўан");
  car = car.replace(/üan/g, "ӯэн");
  car = car.replace(/ai/g, "аи\u032f");
  car = car.replace(/ei/g, "еи\u032f");
  car = car.replace(/ao/g, "ау\u032f");
  car = car.replace(/ou/g, "оу\u032f");
  car = car.replace(/en/g, "ән");
  car = car.replace(/ia/g, "йа");
  car = car.replace(/ie/g, "йе");
  car = car.replace(/iu/g, "йоу\u032f");
  car = car.replace(/ua/g, "ўа");
  car = car.replace(/uo/g, "ўо");
  car = car.replace(/ui/g, "ўеи\u032f");
  car = car.replace(/un/g, "ўән");
  car = car.replace(/üe/g, "ӯе");
  car = car.replace(/ün/g, "үн");
  car = car.replace(/io/g, "йӧ");
  car = car.replace(/er/g, "аҗ\u032f");
  car = car.replace(/i/g, "и");
  car = car.replace(/e/g, "ы");
  car = car.replace(/ü/g, "ү");
  car = car.replace(/ê/g, "э");
  car = car.replace(/o/g, "ӧ");
  
  car = car.replace(/ZH/g, "Џ");
  car = car.replace(/CH/g, "Ч");
  car = car.replace(/SH/g, "Ш");
  car = car.replace(/Zh/g, "Џ");
  car = car.replace(/Ch/g, "Ч");
  car = car.replace(/Sh/g, "Ш");
  car = car.replace(/zh/g, "џ");
  car = car.replace(/ch/g, "ч");
  car = car.replace(/sh/g, "ш");
  
  car = car.replace(/P/g, "П");
  car = car.replace(/B/g, "Б");
  car = car.replace(/T/g, "Т");
  car = car.replace(/D/g, "Д");
  car = car.replace(/Z/g, "З");
  car = car.replace(/C/g, "Ц");
  car = car.replace(/R/g, "Ж");
  car = car.replace(/J/g, "Ђ");
  car = car.replace(/Q/g, "Ћ");
  car = car.replace(/X/g, "Щ");
  car = car.replace(/K/g, "К");
  car = car.replace(/G/g, "Г");
  car = car.replace(/H/g, "Х");
  car = car.replace(/Ĵ/g, "Й");
  
  
  car = car.replace(/p/g, "п");
  car = car.replace(/b/g, "б");
  car = car.replace(/t/g, "т");
  car = car.replace(/d/g, "д");
  car = car.replace(/z/g, "з");
  car = car.replace(/c/g, "ц");
  car = car.replace(/r/g, "ж");
  car = car.replace(/j/g, "ђ");
  car = car.replace(/q/g, "ћ");
  car = car.replace(/x/g, "щ");
  car = car.replace(/k/g, "к");
  car = car.replace(/g/g, "г");
  car = car.replace(/h/g, "х");
  car = car.replace(/ĵ/g, "й");
  
  car = car.replace(/'/g, "");
  
  car = car.replace(/Ә(Ң|ң)/g, "О$1");
  car = car.replace(/әң/g, "о$1");
  
  car = car.replace(/У\u032f/g, "Ğ");
  car = car.replace(/у\u032f/g, "ğ");
  car = car.replace(/(І|Ы|Ә)/g, "I");
  car = car.replace(/Ү/g, "Ü");
  car = car.replace(/(Й|И\u032f)/g, "Y");
  car = car.replace(/И/g, "İ");
  car = car.replace(/Ң/g, "NĞ");
  car = car.replace(/Ұ/g, "U");
  car = car.replace(/У/g, "U");
  car = car.replace(/(Э|Е)/g, "E");
  car = car.replace(/(Ў|Ӯ)/g, "V");
  car = car.replace(/(О|Ӧ)/g, "O");
  car = car.replace(/А/g, "A");
  
  car = car.replace(/(і|ы|ә)/g, "ı");
  car = car.replace(/ү/g, "ü");
  car = car.replace(/(й|и\u032f)/g, "y");
  car = car.replace(/и/g, "i");
  car = car.replace(/ң/g, "nğ");
  car = car.replace(/ұ/g, "u");
  car = car.replace(/у/g, "u");
  car = car.replace(/(э|е)/g, "e");
  car = car.replace(/(ў|ӯ)/g, "v");
  car = car.replace(/(о|ӧ)/g, "o");
  car = car.replace(/а/g, "a");
  
  car = car.replace(/(Ч|Ћ)/g, "Ç");
  car = car.replace(/(Ђ|Џ)/g, "C");
  car = car.replace(/Ц/g, "Ć");
  car = car.replace(/З/g, "Ź");
  car = car.replace(/(Ш|Щ)/g, "Ş");
  car = car.replace(/Б/g, "B");
  car = car.replace(/П/g, "P");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Т/g, "T");
  car = car.replace(/Г/g, "G");
  car = car.replace(/К/g, "K");
  car = car.replace(/Х/g, "H");
  car = car.replace(/(Ж|Җ\u032f)/g, "R");
  car = car.replace(/Н/g, "N");
  
  car = car.replace(/(ч|ћ)/g, "ç");
  car = car.replace(/(ђ|џ)/g, "c");
  car = car.replace(/ц/g, "ć");
  car = car.replace(/з/g, "ź");
  car = car.replace(/(ш|щ)/g, "ş");
  car = car.replace(/б/g, "b");
  car = car.replace(/п/g, "p");
  car = car.replace(/д/g, "d");
  car = car.replace(/т/g, "t");
  car = car.replace(/г/g, "g");
  car = car.replace(/к/g, "k");
  car = car.replace(/х/g, "h");
  car = car.replace(/(ж|җ\u032f)/g, "r");
  car = car.replace(/н/g, "n");  
  
  car = car.replace(/(A|E|İ|I|O|U|Ü)Ź/g, "$1DZ");
  car = car.replace(/(A|E|İ|I|O|U|Ü)Ć/g, "$1TS");

  car = car.replace(/(A|E|İ|I|O|U|Ü)ź/g, "$1dz");
  car = car.replace(/(A|E|İ|I|O|U|Ü)ć/g, "$1ts");
  
  car = car.replace(/(a|e|ı|i|o|u|ü)ź/g, "$1dz");
  car = car.replace(/(a|e|ı|i|o|u|ü)ć/g, "$1ts");
  
  car = car.replace(/Ź/g, "Z");
  car = car.replace(/Ć/g, "S");
  
  car = car.replace(/ź/g, "z");
  car = car.replace(/ć/g, "s");
  
  car = car.replace(/(A|E|İ|I|O|U|Ü)(A|E|İ|I|O|U|Ü)/g, "$1Ğ$2");
  car = car.replace(/(A|E|İ|I|O|U|Ü)(a|e|ı|i|o|u|ü)/g, "$1ğ$2");
  car = car.replace(/(a|e|ı|i|o|u|ü)(a|e|ı|i|o|u|ü)/g, "$1ğ$2");
  
  car = car.replace(/\u032f/g, "");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
