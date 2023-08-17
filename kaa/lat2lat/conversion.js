var car;
function latcyr () {
car = document.transcription.text2.value;  
  car = car.replace(/Ch/g, "C\u2019h");
  car = car.replace(/CH/g, "C\u2019H");
  car = car.replace(/ch/g, "c\u2019h");
  car = car.replace(/Sh/g, "S\u2019h");
  car = car.replace(/SH/g, "S\u2019H");
  car = car.replace(/sh/g, "s\u2019h");
  car = car.replace(/ç/g, "ch");
  car = car.replace(/Ç/g, "Ch");
  car = car.replace(/ş/g, "sh");
  car = car.replace(/Ş/g, "Sh");
  car = car.replace(/ğ/g, "ǵ");
  car = car.replace(/Ğ/g, "Ǵ");
  car = car.replace(/ñ/g, "ń");
  car = car.replace(/Ñ/g, "Ń");
  car = car.replace(/I/g, "Í");
  car = car.replace(/İ/g, "I");
  car = car.replace(/ä/g, "á");
  car = car.replace(/Ä/g, "Á");
  car = car.replace(/ö/g, "ó");
  car = car.replace(/Ö/g, "Ó");
  car = car.replace(/ü/g, "ú");
  car = car.replace(/Ü/g, "Ú");
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ch/g, "Ç");
  car = car.replace(/CH/g, "Ç");
  car = car.replace(/ch/g, "ç");
  car = car.replace(/Sh/g, "Ş");
  car = car.replace(/SH/g, "Ş");
  car = car.replace(/sh/g, "ş");
  car = car.replace(/C\u2019h/g, "Ch");
  car = car.replace(/C\u2019H/g, "CH");
  car = car.replace(/c\u2019h/g, "ch");
  car = car.replace(/S\u2019h/g, "Sh");
  car = car.replace(/S\u2019H/g, "SH");
  car = car.replace(/s\u2019h/g, "sh");
  car = car.replace(/ǵ/g, "ğ");
  car = car.replace(/Ǵ/g, "Ğ");
  car = car.replace(/ń/g, "ñ");
  car = car.replace(/Ń/g, "Ñ");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Í/g, "I");
  car = car.replace(/á/g, "ä");
  car = car.replace(/Á/g, "Ä");
  car = car.replace(/ó/g, "ö");
  car = car.replace(/Ó/g, "Ö");
  car = car.replace(/ú/g, "ü");
  car = car.replace(/Ú/g, "Ü");  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
