﻿//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A\u002a/g, "Â");
  car = car.replace(/Â\u002a/g, "Ä");
  car = car.replace(/Ä\u002a/g, "A");
  car = car.replace(/C\u002a/g, "Ç");
  car = car.replace(/Ç\u002a/g, "C");
  car = car.replace(/E\u002a/g, "Ə");
  car = car.replace(/Ə\u002a/g, "Ë");
  car = car.replace(/Ë\u002a/g, "E");
  car = car.replace(/G\u002a/g, "Ğ");
  car = car.replace(/Ğ\u002a/g, "G");
  car = car.replace(/I\u002a/g, "İ");
  car = car.replace(/İ\u002a/g, "Î");
  car = car.replace(/Î\u002a/g, "Ï");
  car = car.replace(/Ï\u002a/g, "Í");
  car = car.replace(/Í\u002a/g, "I");
  car = car.replace(/N\u002a/g, "Ň");
  car = car.replace(/Ň\u002a/g, "Ñ");
  car = car.replace(/Ñ\u002a/g, "N");
  car = car.replace(/O\u002a/g, "Ö");
  car = car.replace(/Ö\u002a/g, "O");
  car = car.replace(/S\u002a/g, "Ş");
  car = car.replace(/Ş\u002a/g, "S");
  car = car.replace(/U\u002a/g, "Ü");
  car = car.replace(/Ü\u002a/g, "Û");
  car = car.replace(/Û\u002a/g, "U");
  car = car.replace(/Y\u002a/g, "Ý");
  car = car.replace(/Ý\u002a/g, "Y");
  car = car.replace(/Z\u002a/g, "Ž");
  car = car.replace(/Ž\u002a/g, "Z");
  car = car.replace(/a\u002a/g, "â");
  car = car.replace(/â\u002a/g, "ä");
  car = car.replace(/ä\u002a/g, "a");
  car = car.replace(/c\u002a/g, "ç");
  car = car.replace(/ç\u002a/g, "c");
  car = car.replace(/e\u002a/g, "ə");
  car = car.replace(/ə\u002a/g, "ë");
  car = car.replace(/ë\u002a/g, "e");
  car = car.replace(/g\u002a/g, "ğ");
  car = car.replace(/ğ\u002a/g, "g");
  car = car.replace(/i\u002a/g, "ı");
  car = car.replace(/ı\u002a/g, "î");
  car = car.replace(/î\u002a/g, "ï");
  car = car.replace(/ï\u002a/g, "í");
  car = car.replace(/í\u002a/g, "i");
  car = car.replace(/n\u002a/g, "ň");
  car = car.replace(/ň\u002a/g, "ñ");
  car = car.replace(/ñ\u002a/g, "n");
  car = car.replace(/o\u002a/g, "ö");
  car = car.replace(/ö\u002a/g, "o");
  car = car.replace(/s\u002a/g, "ş");
  car = car.replace(/ş\u002a/g, "s");
  car = car.replace(/u\u002a/g, "ü");
  car = car.replace(/ü\u002a/g, "û");
  car = car.replace(/û\u002a/g, "u");
  car = car.replace(/y\u002a/g, "ý");
  car = car.replace(/ý\u002a/g, "y");
  car = car.replace(/z\u002a/g, "ž");
  car = car.replace(/ž\u002a/g, "z");
  car = car.replace(/\u0027\u002a/g, "\u2018");
  car = car.replace(/\u2018\u002a/g, "\u2019");
  car = car.replace(/\u2019\u002a/g, "\u0027");
  
  car = car.replace(/A\u005b/g, "Â");
  car = car.replace(/Â\u005b/g, "Ä");
  car = car.replace(/Ä\u005b/g, "A");
  car = car.replace(/C\u005b/g, "Ç");
  car = car.replace(/Ç\u005b/g, "C");
  car = car.replace(/E\u005b/g, "Ə");
  car = car.replace(/Ə\u005b/g, "Ë");
  car = car.replace(/Ë\u005b/g, "E");
  car = car.replace(/G\u005b/g, "Ğ");
  car = car.replace(/Ğ\u005b/g, "G");
  car = car.replace(/I\u005b/g, "İ");
  car = car.replace(/İ\u005b/g, "Î");
  car = car.replace(/Î\u005b/g, "Ï");
  car = car.replace(/Ï\u005b/g, "Í");
  car = car.replace(/Í\u005b/g, "I");
  car = car.replace(/N\u005b/g, "Ň");
  car = car.replace(/Ň\u005b/g, "Ñ");
  car = car.replace(/Ñ\u005b/g, "N");
  car = car.replace(/O\u005b/g, "Ö");
  car = car.replace(/Ö\u005b/g, "O");
  car = car.replace(/S\u005b/g, "Ş");
  car = car.replace(/Ş\u005b/g, "S");
  car = car.replace(/U\u005b/g, "Ü");
  car = car.replace(/Ü\u005b/g, "Û");
  car = car.replace(/Û\u005b/g, "U");
  car = car.replace(/Y\u005b/g, "Ý");
  car = car.replace(/Ý\u005b/g, "Y");
  car = car.replace(/Z\u005b/g, "Ž");
  car = car.replace(/Ž\u005b/g, "Z");
  car = car.replace(/a\u005b/g, "â");
  car = car.replace(/â\u005b/g, "ä");
  car = car.replace(/ä\u005b/g, "a");
  car = car.replace(/c\u005b/g, "ç");
  car = car.replace(/ç\u005b/g, "c");
  car = car.replace(/e\u005b/g, "ə");
  car = car.replace(/ə\u005b/g, "ë");
  car = car.replace(/ë\u005b/g, "e");
  car = car.replace(/g\u005b/g, "ğ");
  car = car.replace(/ğ\u005b/g, "g");
  car = car.replace(/i\u005b/g, "ı");
  car = car.replace(/ı\u005b/g, "î");
  car = car.replace(/î\u005b/g, "ï");
  car = car.replace(/ï\u005b/g, "í");
  car = car.replace(/í\u005b/g, "i");
  car = car.replace(/n\u005b/g, "ň");
  car = car.replace(/ň\u005b/g, "ñ");
  car = car.replace(/ñ\u005b/g, "n");
  car = car.replace(/o\u005b/g, "ö");
  car = car.replace(/ö\u005b/g, "o");
  car = car.replace(/s\u005b/g, "ş");
  car = car.replace(/ş\u005b/g, "s");
  car = car.replace(/u\u005b/g, "ü");
  car = car.replace(/ü\u005b/g, "û");
  car = car.replace(/û\u005b/g, "u");
  car = car.replace(/y\u005b/g, "ý");
  car = car.replace(/ý\u005b/g, "y");
  car = car.replace(/z\u005b/g, "ž");
  car = car.replace(/ž\u005b/g, "z");
  car = car.replace(/\u0027\u005b/g, "\u2018");
  car = car.replace(/\u2018\u005b/g, "\u2019");
  car = car.replace(/\u2019\u005b/g, "\u0027");
  
  car = car.replace(/A\u005c/g, "Â");
  car = car.replace(/Â\u005c/g, "Ä");
  car = car.replace(/Ä\u005c/g, "A");
  car = car.replace(/C\u005c/g, "Ç");
  car = car.replace(/Ç\u005c/g, "C");
  car = car.replace(/E\u005c/g, "Ə");
  car = car.replace(/Ə\u005c/g, "Ë");
  car = car.replace(/Ë\u005c/g, "E");
  car = car.replace(/G\u005c/g, "Ğ");
  car = car.replace(/Ğ\u005c/g, "G");
  car = car.replace(/I\u005c/g, "İ");
  car = car.replace(/İ\u005c/g, "Î");
  car = car.replace(/Î\u005c/g, "Ï");
  car = car.replace(/Ï\u005c/g, "Í");
  car = car.replace(/Í\u005c/g, "I");
  car = car.replace(/N\u005c/g, "Ň");
  car = car.replace(/Ň\u005c/g, "Ñ");
  car = car.replace(/Ñ\u005c/g, "N");
  car = car.replace(/O\u005c/g, "Ö");
  car = car.replace(/Ö\u005c/g, "O");
  car = car.replace(/S\u005c/g, "Ş");
  car = car.replace(/Ş\u005c/g, "S");
  car = car.replace(/U\u005c/g, "Ü");
  car = car.replace(/Ü\u005c/g, "Û");
  car = car.replace(/Û\u005c/g, "U");
  car = car.replace(/Y\u005c/g, "Ý");
  car = car.replace(/Ý\u005c/g, "Y");
  car = car.replace(/Z\u005c/g, "Ž");
  car = car.replace(/Ž\u005c/g, "Z");
  car = car.replace(/a\u005c/g, "â");
  car = car.replace(/â\u005c/g, "ä");
  car = car.replace(/ä\u005c/g, "a");
  car = car.replace(/c\u005c/g, "ç");
  car = car.replace(/ç\u005c/g, "c");
  car = car.replace(/e\u005c/g, "ə");
  car = car.replace(/ə\u005c/g, "ë");
  car = car.replace(/ë\u005c/g, "e");
  car = car.replace(/g\u005c/g, "ğ");
  car = car.replace(/ğ\u005c/g, "g");
  car = car.replace(/i\u005c/g, "ı");
  car = car.replace(/ı\u005c/g, "î");
  car = car.replace(/î\u005c/g, "ï");
  car = car.replace(/ï\u005c/g, "í");
  car = car.replace(/í\u005c/g, "i");
  car = car.replace(/n\u005c/g, "ň");
  car = car.replace(/ň\u005c/g, "ñ");
  car = car.replace(/ñ\u005c/g, "n");
  car = car.replace(/o\u005c/g, "ö");
  car = car.replace(/ö\u005c/g, "o");
  car = car.replace(/s\u005c/g, "ş");
  car = car.replace(/ş\u005c/g, "s");
  car = car.replace(/u\u005c/g, "ü");
  car = car.replace(/ü\u005c/g, "û");
  car = car.replace(/û\u005c/g, "u");
  car = car.replace(/y\u005c/g, "ý");
  car = car.replace(/ý\u005c/g, "y");
  car = car.replace(/z\u005c/g, "ž");
  car = car.replace(/ž\u005c/g, "z");
  car = car.replace(/\u0027\u005c/g, "\u02bb");
  car = car.replace(/\u02bb\u005c/g, "\u02bc");
  car = car.replace(/\u02bc\u005c/g, "\u0027");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
