//zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;

translit = translit.replace(/'/g, "ʼ");
translit = translit.replace(/ˈ/g, "ʼ");
translit = translit.replace(/’/g, "ʼ");
translit = translit.replace(/ʼ/g, "ʼ");
translit = translit.replace(/‘/g, "ʼ");
translit = translit.replace(/ʻ/g, "ʼ");
translit = translit.replace(/´/g, "ʼ");
translit = translit.replace(/`/g, "ʼ");
translit = translit.replace(/ʿ/g, "ʼ");
translit = translit.replace(/ʹ/g, "ʼ");
translit = translit.replace(/ˊ/g, "ʼ");
translit = translit.replace(/׳/g, "ʼ");
translit = translit.replace(/′/g, "ʼ");
translit = translit.replace(/ʽ/g, "ʼ");
translit = translit.replace(/ߵ/g, "ʼ");
translit = translit.replace(/՚/g, "ʼ");
translit = translit.replace(/ߴ/g, "ʼ");
translit = translit.replace(/᾿/g, "ʼ");
translit = translit.replace(/ՙ/g, "ʼ");
translit = translit.replace(/῾/g, "ʼ");
translit = translit.replace(/‛/g, "ʼ");
translit = translit.replace(/ʾ/g, "ʼ");
translit = translit.replace(/՛/g, "ʼ");
translit = translit.replace(/ˋ/g, "ʼ");

translit = translit.replace(/oʼ/g, "oʻ");
translit = translit.replace(/Oʼ/g, "Oʻ");
translit = translit.replace(/gʼ/g, "gʻ");
translit = translit.replace(/Gʼ/g, "Gʻ");

translit = translit.replace(/oʻ/g, "ō");
translit = translit.replace(/Oʻ/g, "Ō");
translit = translit.replace(/gʻ/g, "ḡ");
translit = translit.replace(/Gʻ/g, "Ḡ");

translit = translit.replace(/ch/g, "ç");
translit = translit.replace(/Ch/g, "Ç");
translit = translit.replace(/CH/g, "Ç");

translit = translit.replace(/sh/g, "ş");
translit = translit.replace(/Sh/g, "Ş");
translit = translit.replace(/SH/g, "Ş");

translit = translit.replace(/sʼh/g, "sh");
translit = translit.replace(/Sʼh/g, "Sh");
translit = translit.replace(/SʼH/g, "SH");

translit = translit.replace(/lōbat/g, "lōʼbat");
translit = translit.replace(/mōjaz/g, "mōʼjaz");
translit = translit.replace(/mōjiza/g, "mōʼjiza");
translit = translit.replace(/mōtabar/g, "mōʼtabar");
translit = translit.replace(/mōtad/g, "mōʼtad");
translit = translit.replace(/mōtazila/g, "mōʼtazila");
translit = translit.replace(/mōtariza/g, "mōʼtariza");
translit = translit.replace(/Lōbat/g, "Lōʼbat");
translit = translit.replace(/Mōjaz/g, "Mōʼjaz");
translit = translit.replace(/Mōjiza/g, "Mōʼjiza");
translit = translit.replace(/Mōtabar/g, "Mōʼtabar");
translit = translit.replace(/Mōtad/g, "Mōʼtad");
translit = translit.replace(/Mōtazila/g, "Mōʼtazila");
translit = translit.replace(/Mōtariza/g, "Mōʼtariza");
translit = translit.replace(/LŌBAT/g, "LŌʼBAT");
translit = translit.replace(/MŌJAZ/g, "MŌʼJAZ");
translit = translit.replace(/MŌJIZA/g, "MŌʼJIZA");
translit = translit.replace(/MŌTABAR/g, "MŌʼTABAR");
translit = translit.replace(/MŌTAD/g, "MŌʼTAD");
translit = translit.replace(/MŌTAZILA/g, "MŌʼTAZILA");
translit = translit.replace(/MŌTARIZA/g, "MŌʼTARIZA");
document.transcription.text2.value = translit;
}

function latcyr () {
translit = document.transcription.text2.value;
translit = translit.replace(/'/g, "ʼ");
translit = translit.replace(/ˈ/g, "ʼ");
translit = translit.replace(/’/g, "ʼ");
translit = translit.replace(/ʼ/g, "ʼ");
translit = translit.replace(/‘/g, "ʼ");
translit = translit.replace(/ʻ/g, "ʼ");
translit = translit.replace(/´/g, "ʼ");
translit = translit.replace(/`/g, "ʼ");
translit = translit.replace(/ʿ/g, "ʼ");
translit = translit.replace(/ʹ/g, "ʼ");
translit = translit.replace(/ˊ/g, "ʼ");
translit = translit.replace(/׳/g, "ʼ");
translit = translit.replace(/′/g, "ʼ");
translit = translit.replace(/ʽ/g, "ʼ");
translit = translit.replace(/ߵ/g, "ʼ");
translit = translit.replace(/՚/g, "ʼ");
translit = translit.replace(/ߴ/g, "ʼ");
translit = translit.replace(/᾿/g, "ʼ");
translit = translit.replace(/ՙ/g, "ʼ");
translit = translit.replace(/῾/g, "ʼ");
translit = translit.replace(/‛/g, "ʼ");
translit = translit.replace(/ʾ/g, "ʼ");
translit = translit.replace(/՛/g, "ʼ");
translit = translit.replace(/ˋ/g, "ʼ");

translit = translit.replace(/sh/g, "sʼh");
translit = translit.replace(/Sh/g, "Sʼh");
translit = translit.replace(/SH/g, "SʼH");

translit = translit.replace(/ş/g, "sh");
translit = translit.replace(/Ş/g, "Sh");

translit = translit.replace(/ç/g, "ch");
translit = translit.replace(/Ç/g, "Ch");

translit = translit.replace(/ō/g, "oʻ");
translit = translit.replace(/Ō/g, "Oʻ");
translit = translit.replace(/ḡ/g, "gʻ");
translit = translit.replace(/Ḡ/g, "Gʻ");

translit = translit.replace(/oʻʼ/g, "oʻ");
translit = translit.replace(/Oʻʼ/g, "Oʻ");
document.transcription.text1.value = translit;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
