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

translit = translit.replace(/oʻ/g, "ó");
translit = translit.replace(/Oʻ/g, "Ó");
translit = translit.replace(/gʻ/g, "ǵ");
translit = translit.replace(/Gʻ/g, "Ǵ");

translit = translit.replace(/ch/g, "ç");
translit = translit.replace(/Ch/g, "Ç");
translit = translit.replace(/CH/g, "Ç");

translit = translit.replace(/sh/g, "ş");
translit = translit.replace(/Sh/g, "Ş");
translit = translit.replace(/SH/g, "Ş");

translit = translit.replace(/sʼh/g, "sh");
translit = translit.replace(/Sʼh/g, "Sh");
translit = translit.replace(/SʼH/g, "SH");

translit = translit.replace(/lóbat/g, "lóʼbat");
translit = translit.replace(/mójaz/g, "móʼjaz");
translit = translit.replace(/mójiza/g, "móʼjiza");
translit = translit.replace(/mótabar/g, "móʼtabar");
translit = translit.replace(/mótad/g, "móʼtad");
translit = translit.replace(/mótazila/g, "móʼtazila");
translit = translit.replace(/mótariza/g, "móʼtariza");
translit = translit.replace(/Lóbat/g, "Lóʼbat");
translit = translit.replace(/Mójaz/g, "Móʼjaz");
translit = translit.replace(/Mójiza/g, "Móʼjiza");
translit = translit.replace(/Mótabar/g, "Móʼtabar");
translit = translit.replace(/Mótad/g, "Móʼtad");
translit = translit.replace(/Mótazila/g, "Móʼtazila");
translit = translit.replace(/Mótariza/g, "Móʼtariza");
translit = translit.replace(/LÓBAT/g, "LÓʼBAT");
translit = translit.replace(/MÓJAZ/g, "MÓʼJAZ");
translit = translit.replace(/MÓJIZA/g, "MÓʼJIZA");
translit = translit.replace(/MÓTABAR/g, "MÓʼTABAR");
translit = translit.replace(/MÓTAD/g, "MÓʼTAD");
translit = translit.replace(/MÓTAZILA/g, "MÓʼTAZILA");
translit = translit.replace(/MÓTARIZA/g, "MÓʼTARIZA");
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

translit = translit.replace(/ac/g, "ats");
translit = translit.replace(/ec/g, "ets");
translit = translit.replace(/ic/g, "its");
translit = translit.replace(/oc/g, "ots");
translit = translit.replace(/óc/g, "óts");
translit = translit.replace(/uc/g, "uts");
translit = translit.replace(/Ac/g, "Ats");
translit = translit.replace(/Ec/g, "Ets");
translit = translit.replace(/Ic/g, "Its");
translit = translit.replace(/Oc/g, "Ots");
translit = translit.replace(/Óc/g, "Óts");
translit = translit.replace(/Uc/g, "Uts");
translit = translit.replace(/AC/g, "ATS");
translit = translit.replace(/EC/g, "ETS");
translit = translit.replace(/IC/g, "ITS");
translit = translit.replace(/OC/g, "OTS");
translit = translit.replace(/ÓC/g, "ÓTS");
translit = translit.replace(/UC/g, "UTS");

translit = translit.replace(/c/g, "s");
translit = translit.replace(/C/g, "S");

translit = translit.replace(/ç/g, "ch");
translit = translit.replace(/Ç/g, "Ch");

translit = translit.replace(/ó/g, "oʻ");
translit = translit.replace(/Ó/g, "Oʻ");
translit = translit.replace(/ǵ/g, "gʻ");
translit = translit.replace(/Ǵ/g, "Gʻ");

translit = translit.replace(/ʻʼ/g, "ʻ");
document.transcription.text1.value = translit;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
