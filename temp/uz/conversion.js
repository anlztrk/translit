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

translit = translit.replace(/oʻ/g, "ô");
translit = translit.replace(/Oʻ/g, "Ô");
translit = translit.replace(/gʻ/g, "ğ");
translit = translit.replace(/Gʻ/g, "Ğ");

translit = translit.replace(/ch/g, "ç");
translit = translit.replace(/Ch/g, "Ç");
translit = translit.replace(/CH/g, "Ç");

translit = translit.replace(/sh/g, "ş");
translit = translit.replace(/Sh/g, "Ş");
translit = translit.replace(/SH/g, "Ş");

translit = translit.replace(/sʼh/g, "sh");
translit = translit.replace(/Sʼh/g, "Sh");
translit = translit.replace(/SʼH/g, "SH");

translit = translit.replace(/lôbat/g, "lôʼbat");
translit = translit.replace(/môjaz/g, "môʼjaz");
translit = translit.replace(/môjiza/g, "môʼjiza");
translit = translit.replace(/môtabar/g, "môʼtabar");
translit = translit.replace(/môtad/g, "môʼtad");
translit = translit.replace(/môtazila/g, "môʼtazila");
translit = translit.replace(/môtariza/g, "môʼtariza");
translit = translit.replace(/Lôbat/g, "Lôʼbat");
translit = translit.replace(/Môjaz/g, "Môʼjaz");
translit = translit.replace(/Môjiza/g, "Môʼjiza");
translit = translit.replace(/Môtabar/g, "Môʼtabar");
translit = translit.replace(/Môtad/g, "Môʼtad");
translit = translit.replace(/Môtazila/g, "Môʼtazila");
translit = translit.replace(/Môtariza/g, "Môʼtariza");
translit = translit.replace(/LÔBAT/g, "LÔʼBAT");
translit = translit.replace(/MÔJAZ/g, "MÔʼJAZ");
translit = translit.replace(/MÔJIZA/g, "MÔʼJIZA");
translit = translit.replace(/MÔTABAR/g, "MÔʼTABAR");
translit = translit.replace(/MÔTAD/g, "MÔʼTAD");
translit = translit.replace(/MÔTAZILA/g, "MÔʼTAZILA");
translit = translit.replace(/MÔTARIZA/g, "MÔʼTARIZA");
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
translit = translit.replace(/ôc/g, "ôts");
translit = translit.replace(/uc/g, "uts");
translit = translit.replace(/Ac/g, "Ats");
translit = translit.replace(/Ec/g, "Ets");
translit = translit.replace(/Ic/g, "Its");
translit = translit.replace(/Oc/g, "Ots");
translit = translit.replace(/Ôc/g, "Ôts");
translit = translit.replace(/Uc/g, "Uts");
translit = translit.replace(/AC/g, "ATS");
translit = translit.replace(/EC/g, "ETS");
translit = translit.replace(/IC/g, "ITS");
translit = translit.replace(/OC/g, "OTS");
translit = translit.replace(/ÔC/g, "ÔTS");
translit = translit.replace(/UC/g, "UTS");

translit = translit.replace(/c/g, "s");
translit = translit.replace(/C/g, "S");

translit = translit.replace(/ç/g, "ch");
translit = translit.replace(/Ç/g, "Ch");

translit = translit.replace(/ô/g, "oʻ");
translit = translit.replace(/Ô/g, "Oʻ");
translit = translit.replace(/ğ/g, "gʻ");
translit = translit.replace(/Ğ/g, "Gʻ");

translit = translit.replace(/ʻʼ/g, "ʻ");
document.transcription.text1.value = translit;
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
