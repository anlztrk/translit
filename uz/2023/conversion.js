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

translit = translit.replace(/oʻ/g, "õ");
translit = translit.replace(/Oʻ/g, "Õ");
translit = translit.replace(/gʻ/g, "ğ");
translit = translit.replace(/Gʻ/g, "Ğ");

translit = translit.replace(/ch/g, "c");
translit = translit.replace(/Ch/g, "C");
translit = translit.replace(/CH/g, "C");

translit = translit.replace(/sh/g, "ş");
translit = translit.replace(/Sh/g, "Ş");
translit = translit.replace(/SH/g, "Ş");

translit = translit.replace(/sʼh/g, "sh");
translit = translit.replace(/Sʼh/g, "Sh");
translit = translit.replace(/SʼH/g, "SH");

translit = translit.replace(/lõbat/g, "lõʼbat");
translit = translit.replace(/mõjaz/g, "mõʼjaz");
translit = translit.replace(/mõjiza/g, "mõʼjiza");
translit = translit.replace(/mõtabar/g, "mõʼtabar");
translit = translit.replace(/mõtad/g, "mõʼtad");
translit = translit.replace(/mõtazila/g, "mõʼtazila");
translit = translit.replace(/mõtariza/g, "mõʼtariza");
translit = translit.replace(/Lõbat/g, "Lõʼbat");
translit = translit.replace(/Mõjaz/g, "Mõʼjaz");
translit = translit.replace(/Mõjiza/g, "Mõʼjiza");
translit = translit.replace(/Mõtabar/g, "Mõʼtabar");
translit = translit.replace(/Mõtad/g, "Mõʼtad");
translit = translit.replace(/Mõtazila/g, "Mõʼtazila");
translit = translit.replace(/Mõtariza/g, "Mõʼtariza");
translit = translit.replace(/LÕBAT/g, "LÕʼBAT");
translit = translit.replace(/MÕJAZ/g, "MÕʼJAZ");
translit = translit.replace(/MÕJIZA/g, "MÕʼJIZA");
translit = translit.replace(/MÕTABAR/g, "MÕʼTABAR");
translit = translit.replace(/MÕTAD/g, "MÕʼTAD");
translit = translit.replace(/MÕTAZILA/g, "MÕʼTAZILA");
translit = translit.replace(/MÕTARIZA/g, "MÕʼTARIZA");
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

translit = translit.replace(/c/g, "ch");
translit = translit.replace(/C/g, "Ch");

translit = translit.replace(/õ/g, "oʻ");
translit = translit.replace(/Õ/g, "Oʻ");
translit = translit.replace(/ğ/g, "gʻ");
translit = translit.replace(/Ğ/g, "Gʻ");

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
