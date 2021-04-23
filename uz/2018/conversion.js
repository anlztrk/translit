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

translit = translit.replace(/oʻ/g, "ŏ");
translit = translit.replace(/Oʻ/g, "Ŏ");
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

translit = translit.replace(/lŏbat/g, "lŏʼbat");
translit = translit.replace(/mŏjaz/g, "mŏʼjaz");
translit = translit.replace(/mŏjiza/g, "mŏʼjiza");
translit = translit.replace(/mŏtabar/g, "mŏʼtabar");
translit = translit.replace(/mŏtad/g, "mŏʼtad");
translit = translit.replace(/mŏtazila/g, "mŏʼtazila");
translit = translit.replace(/mŏtariza/g, "mŏʼtariza");
translit = translit.replace(/Lŏbat/g, "Lŏʼbat");
translit = translit.replace(/Mŏjaz/g, "Mŏʼjaz");
translit = translit.replace(/Mŏjiza/g, "Mŏʼjiza");
translit = translit.replace(/Mŏtabar/g, "Mŏʼtabar");
translit = translit.replace(/Mŏtad/g, "Mŏʼtad");
translit = translit.replace(/Mŏtazila/g, "Mŏʼtazila");
translit = translit.replace(/Mŏtariza/g, "Mŏʼtariza");
translit = translit.replace(/LŎBAT/g, "LŎʼBAT");
translit = translit.replace(/MŎJAZ/g, "MŎʼJAZ");
translit = translit.replace(/MŎJIZA/g, "MŎʼJIZA");
translit = translit.replace(/MŎTABAR/g, "MŎʼTABAR");
translit = translit.replace(/MŎTAD/g, "MŎʼTAD");
translit = translit.replace(/MŎTAZILA/g, "MŎʼTAZILA");
translit = translit.replace(/MŎTARIZA/g, "MŎʼTARIZA");
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

translit = translit.replace(/ŏ/g, "oʻ");
translit = translit.replace(/Ŏ/g, "Oʻ");
translit = translit.replace(/ğ/g, "gʻ");
translit = translit.replace(/Ğ/g, "Gʻ");

translit = translit.replace(/oʻʼ/g, "oʻ");
translit = translit.replace(/Oʻʼ/g, "Oʻ");
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
