var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(C|c)h/g, "$1-h")
           .replace(/(E|e)u/g, "$1-u")
           .replace(/(O|o)e/g, "$1-e")
           .replace(/(S|s)h/g, "$1-h")
           .replace(/(U|u)e/g, "$1-e")
           .replace(/(I|ı)e/g, "$1-e")
           .replace(/(Ö|ö)u/g, "$1-u")
           .replace(/(Ü|ü)u/g, "$1-u")
           .replace(/CH/g, "C-H")
           .replace(/EU/g, "E-U")
           .replace(/OE/g, "O-E")
           .replace(/SH/g, "S-H")
           .replace(/UE/g, "U-E")
           .replace(/IE/g, "I-E")
           .replace(/ÖU/g, "Ö-U")
           .replace(/ÜU/g, "Ü-U")
           .replace(/j/g, "jh")
           .replace(/c/g, "j")
           .replace(/ç/g, "ch")
           .replace(/ğ/g, "q")
           .replace(/ı/g, "eu")
           .replace(/ö/g, "oe")
           .replace(/ş/g, "sh")
           .replace(/ü/g, "ue")
           .replace(/J/g, "Jh")
           .replace(/C/g, "J")
           .replace(/Ç/g, "Ch")
           .replace(/Ğ/g, "Q")
           .replace(/I/g, "Eu")
           .replace(/İ/g, "I")
           .replace(/Ö/g, "Oe")
           .replace(/Ş/g, "Sh")
           .replace(/Ü/g, "Ue");
   document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
