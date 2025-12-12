function latcyr () {
document.transcription.text1.value = document.transcription.text2.value  
  .replace(/Ch/g, "C\u2019h")
  .replace(/CH/g, "C\u2019H")
  .replace(/ch/g, "c\u2019h")
  .replace(/Sh/g, "S\u2019h")
  .replace(/SH/g, "S\u2019H")
  .replace(/sh/g, "s\u2019h")
  .replace(/ç/g, "ch")
  .replace(/Ç/g, "Ch")
  .replace(/ş/g, "sh")
  .replace(/Ş/g, "Sh")
  .replace(/ğ/g, "ǵ")
  .replace(/Ğ/g, "Ǵ")
  .replace(/ñ/g, "ń")
  .replace(/Ñ/g, "Ń")
  .replace(/I/g, "Í")
  .replace(/İ/g, "I")
  .replace(/ä/g, "á")
  .replace(/Ä/g, "Á")
  .replace(/ö/g, "ó")
  .replace(/Ö/g, "Ó")
  .replace(/ü/g, "ú")
  .replace(/Ü/g, "Ú");
}
function cyrlat () {
document.transcription.text2.value = document.transcription.text1.value
  .replace(/Ch/g, "Ç")
  .replace(/CH/g, "Ç")
  .replace(/ch/g, "ç")
  .replace(/Sh/g, "Ş")
  .replace(/SH/g, "Ş")
  .replace(/sh/g, "ş")
  .replace(/C\u2019h/g, "Ch")
  .replace(/C\u2019H/g, "CH")
  .replace(/c\u2019h/g, "ch")
  .replace(/S\u2019h/g, "Sh")
  .replace(/S\u2019H/g, "SH")
  .replace(/s\u2019h/g, "sh")
  .replace(/ǵ/g, "ğ")
  .replace(/Ǵ/g, "Ğ")
  .replace(/ń/g, "ñ")
  .replace(/Ń/g, "Ñ")
  .replace(/I/g, "İ")
  .replace(/Í/g, "I")
  .replace(/á/g, "ä")
  .replace(/Á/g, "Ä")
  .replace(/ó/g, "ö")
  .replace(/Ó/g, "Ö")
  .replace(/ú/g, "ü")
  .replace(/Ú/g, "Ü");
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
