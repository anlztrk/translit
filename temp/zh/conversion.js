
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/Ā/g, "A");
translit = translit.replace(/Á/g, "A");
translit = translit.replace(/Ǎ/g, "A");
translit = translit.replace(/Ă/g, "A");
translit = translit.replace(/À/g, "A");
translit = translit.replace(/Ē/g, "E");
translit = translit.replace(/É/g, "E");
translit = translit.replace(/Ě/g, "E");
translit = translit.replace(/Ĕ/g, "E");
translit = translit.replace(/È/g, "E");
translit = translit.replace(/Ê̄/g, "Ê");
translit = translit.replace(/Ế/g, "Ê");
translit = translit.replace(/Ê̌/g, "Ê");
translit = translit.replace(/Ê̆/g, "Ê");
translit = translit.replace(/Ề/g, "Ê");
translit = translit.replace(/Ī/g, "I");
translit = translit.replace(/Í/g, "I");
translit = translit.replace(/Ǐ/g, "I");
translit = translit.replace(/Ĭ/g, "I");
translit = translit.replace(/Ì/g, "I");
translit = translit.replace(/Ō/g, "O");
translit = translit.replace(/Ó/g, "O");
translit = translit.replace(/Ǒ/g, "O");
translit = translit.replace(/Ŏ/g, "O");
translit = translit.replace(/Ò/g, "O");
translit = translit.replace(/Ū/g, "U");
translit = translit.replace(/Ú/g, "U");
translit = translit.replace(/Ǔ/g, "U");
translit = translit.replace(/Ŭ/g, "U");
translit = translit.replace(/Ù/g, "U");
translit = translit.replace(/Ǖ/g, "Ü");
translit = translit.replace(/Ǘ/g, "Ü");
translit = translit.replace(/Ǚ/g, "Ü");
translit = translit.replace(/Ǜ/g, "Ü");
translit = translit.replace(/Ĉ/g, "Ch");
translit = translit.replace(/Ŋ/g, "Ng");
translit = translit.replace(/Ŝ/g, "Sh");
translit = translit.replace(/Ẑ/g, "Zh");
translit = translit.replace(/ā/g, "a");
translit = translit.replace(/ɑ̄/g, "a");
translit = translit.replace(/á/g, "a");
translit = translit.replace(/ɑ́/g, "a");
translit = translit.replace(/ǎ/g, "a");
translit = translit.replace(/ă/g, "a");
translit = translit.replace(/ɑ̌/g, "a");
translit = translit.replace(/à/g, "a");
translit = translit.replace(/ē/g, "e");
translit = translit.replace(/é/g, "e");
translit = translit.replace(/ě/g, "e");
translit = translit.replace(/ĕ/g, "e");
translit = translit.replace(/è/g, "e");
translit = translit.replace(/ê̄/g, "ê");
translit = translit.replace(/ế/g, "ê");
translit = translit.replace(/ê̌/g, "ê");
translit = translit.replace(/ê̆/g, "ê");
translit = translit.replace(/ề/g, "ê");
translit = translit.replace(/ī/g, "i");
translit = translit.replace(/í/g, "i");
translit = translit.replace(/ǐ/g, "i");
translit = translit.replace(/ĭ/g, "i");
translit = translit.replace(/ì/g, "i");
translit = translit.replace(/ō/g, "o");
translit = translit.replace(/ó/g, "o");
translit = translit.replace(/ǒ/g, "o");
translit = translit.replace(/ŏ/g, "o");
translit = translit.replace(/ò/g, "o");
translit = translit.replace(/ū/g, "u");
translit = translit.replace(/ú/g, "u");
translit = translit.replace(/ǔ/g, "u");
translit = translit.replace(/ŭ/g, "u");
translit = translit.replace(/ù/g, "u");
translit = translit.replace(/ǖ/g, "ü");
translit = translit.replace(/ǘ/g, "ü");
translit = translit.replace(/ǚ/g, "ü");
translit = translit.replace(/ǜ/g, "ü");
translit = translit.replace(/ĉ/g, "ch");
translit = translit.replace(/ŋ/g, "ng");
translit = translit.replace(/ŝ/g, "sh");
translit = translit.replace(/ẑ/g, "zh");

translit = translit.replace(/CH/g, "Q");
translit = translit.replace(/SH/g, "X");
translit = translit.replace(/ZH/g, "J");
translit = translit.replace(/Ch/g, "Q");
translit = translit.replace(/Sh/g, "X");
translit = translit.replace(/Zh/g, "J");
translit = translit.replace(/ch/g, "q");
translit = translit.replace(/sh/g, "x");
translit = translit.replace(/zh/g, "j");
translit = translit.replace(/C/g, "Ts");
translit = translit.replace(/c/g, "ts");
translit = translit.replace(/Q/g, "Ç");
translit = translit.replace(/X/g, "Ş");
translit = translit.replace(/J/g, "C");
translit = translit.replace(/W/g, "V");
translit = translit.replace(/I/g, "İ");
translit = translit.replace(/Z/g, "Ź");
translit = translit.replace(/q/g, "ç");
translit = translit.replace(/x/g, "ş");
translit = translit.replace(/j/g, "c");
translit = translit.replace(/w/g, "v");
translit = translit.replace(/z/g, "ź");

translit = translit.replace(/AŹ/g, "ADZ");
translit = translit.replace(/EŹ/g, "EDZ");
translit = translit.replace(/İŹ/g, "İDZ");
translit = translit.replace(/OŹ/g, "ODZ");
translit = translit.replace(/UŹ/g, "UDZ");
translit = translit.replace(/ÜŹ/g, "ÜDZ");
translit = translit.replace(/Aź/g, "Adz");
translit = translit.replace(/Eź/g, "Edz");
translit = translit.replace(/İź/g, "İdz");
translit = translit.replace(/Oź/g, "Odz");
translit = translit.replace(/Uź/g, "Udz");
translit = translit.replace(/Üź/g, "Üdz");
translit = translit.replace(/aź/g, "adz");
translit = translit.replace(/eź/g, "edz");
translit = translit.replace(/iź/g, "idz");
translit = translit.replace(/oź/g, "odz");
translit = translit.replace(/uź/g, "udz");
translit = translit.replace(/üź/g, "üdz");
translit = translit.replace(/Ź/g, "Z");
translit = translit.replace(/ź/g, "z");
document.transcription.text2.value = translit;
}

function latcyr () {
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
