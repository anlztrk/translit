﻿
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A\u002a/g, "Ā");
  car = car.replace(/a\u002a/g, "ā");
  car = car.replace(/Â\u002a/g, "A");
  car = car.replace(/â\u002a/g, "a");
  car = car.replace(/D\u002a/g, "Ḍ");
  car = car.replace(/d\u002a/g, "ḍ");
  car = car.replace(/E\u002a/g, "Ē");
  car = car.replace(/e\u002a/g, "ē");
  car = car.replace(/G\u002a/g, "Ġ");
  car = car.replace(/g\u002a/g, "ġ");
  car = car.replace(/I\u002a/g, "Ī");
  car = car.replace(/ı\u002a/g, "ī");
  car = car.replace(/İ\u002a/g, "İ̄");
  car = car.replace(/i\u002a/g, "i̇̄");
  car = car.replace(/Î\u002a/g, "İ");
  car = car.replace(/î\u002a/g, "i");
  car = car.replace(/K\u002a/g, "Ḳ");
  car = car.replace(/k\u002a/g, "ḳ");
  car = car.replace(/L\u002a/g, "Ḷ");
  car = car.replace(/l\u002a/g, "ḷ");
  car = car.replace(/O\u002a/g, "Ō");
  car = car.replace(/o\u002a/g, "ō");
  car = car.replace(/Ö\u002a/g, "Ȫ");
  car = car.replace(/ö\u002a/g, "ȫ");
  car = car.replace(/R\u002a/g, "Ṛ");
  car = car.replace(/r\u002a/g, "ṛ");
  car = car.replace(/T\u002a/g, "Ṭ");
  car = car.replace(/t\u002a/g, "ṭ");
  car = car.replace(/U\u002a/g, "Ū");
  car = car.replace(/u\u002a/g, "ū");
  car = car.replace(/Ü\u002a/g, "Ǖ");
  car = car.replace(/ü\u002a/g, "ǖ");
  car = car.replace(/Û\u002a/g, "U");
  car = car.replace(/û\u002a/g, "u");
  
  car = car.replace(/Ā\u002a/g, "A");
  car = car.replace(/ā\u002a/g, "a");
  car = car.replace(/Ḍ\u002a/g, "D");
  car = car.replace(/ḍ\u002a/g, "d");
  car = car.replace(/Ē\u002a/g, "E");
  car = car.replace(/ē\u002a/g, "e");
  car = car.replace(/Ġ\u002a/g, "G");
  car = car.replace(/ġ\u002a/g, "g");
  car = car.replace(/Ī\u002a/g, "I");
  car = car.replace(/ī\u002a/g, "ı");
  car = car.replace(/İ̄\u002a/g, "İ");
  car = car.replace(/i̇̄\u002a/g, "i");
  car = car.replace(/Ḳ\u002a/g, "K");
  car = car.replace(/ḳ\u002a/g, "k");
  car = car.replace(/Ḷ\u002a/g, "L");
  car = car.replace(/ḷ\u002a/g, "l");
  car = car.replace(/Ō\u002a/g, "O");
  car = car.replace(/ō\u002a/g, "o");
  car = car.replace(/Ȫ\u002a/g, "Ö");
  car = car.replace(/ȫ\u002a/g, "ö");
  car = car.replace(/Ṛ\u002a/g, "R");
  car = car.replace(/ṛ\u002a/g, "r");
  car = car.replace(/Ṭ\u002a/g, "T");
  car = car.replace(/ṭ\u002a/g, "t");
  car = car.replace(/Ū\u002a/g, "U");
  car = car.replace(/ū\u002a/g, "u");
  car = car.replace(/Ǖ\u002a/g, "Ü");
  car = car.replace(/ǖ\u002a/g, "ü");
  
  car = car.replace(/A\u005b/g, "Ā");
  car = car.replace(/a\u005b/g, "ā");
  car = car.replace(/Â\u005b/g, "A");
  car = car.replace(/â\u005b/g, "a");
  car = car.replace(/D\u005b/g, "Ḍ");
  car = car.replace(/d\u005b/g, "ḍ");
  car = car.replace(/E\u005b/g, "Ē");
  car = car.replace(/e\u005b/g, "ē");
  car = car.replace(/G\u005b/g, "Ġ");
  car = car.replace(/g\u005b/g, "ġ");
  car = car.replace(/I\u005b/g, "Ī");
  car = car.replace(/ı\u005b/g, "ī");
  car = car.replace(/İ\u005b/g, "İ̄");
  car = car.replace(/i\u005b/g, "i̇̄");
  car = car.replace(/Î\u005b/g, "İ");
  car = car.replace(/î\u005b/g, "i");
  car = car.replace(/K\u005b/g, "Ḳ");
  car = car.replace(/k\u005b/g, "ḳ");
  car = car.replace(/L\u005b/g, "Ḷ");
  car = car.replace(/l\u005b/g, "ḷ");
  car = car.replace(/O\u005b/g, "Ō");
  car = car.replace(/o\u005b/g, "ō");
  car = car.replace(/Ö\u005b/g, "Ȫ");
  car = car.replace(/ö\u005b/g, "ȫ");
  car = car.replace(/R\u005b/g, "Ṛ");
  car = car.replace(/r\u005b/g, "ṛ");
  car = car.replace(/T\u005b/g, "Ṭ");
  car = car.replace(/t\u005b/g, "ṭ");
  car = car.replace(/U\u005b/g, "Ū");
  car = car.replace(/u\u005b/g, "ū");
  car = car.replace(/Ü\u005b/g, "Ǖ");
  car = car.replace(/ü\u005b/g, "ǖ");
  car = car.replace(/Û\u005b/g, "U");
  car = car.replace(/û\u005b/g, "u");
  
  car = car.replace(/Ā\u005b/g, "A");
  car = car.replace(/ā\u005b/g, "a");
  car = car.replace(/Ḍ\u005b/g, "D");
  car = car.replace(/ḍ\u005b/g, "d");
  car = car.replace(/Ē\u005b/g, "E");
  car = car.replace(/ē\u005b/g, "e");
  car = car.replace(/Ġ\u005b/g, "G");
  car = car.replace(/ġ\u005b/g, "g");
  car = car.replace(/Ī\u005b/g, "I");
  car = car.replace(/ī\u005b/g, "ı");
  car = car.replace(/İ̄\u005b/g, "İ");
  car = car.replace(/i̇̄\u005b/g, "i");
  car = car.replace(/Ḳ\u005b/g, "K");
  car = car.replace(/ḳ\u005b/g, "k");
  car = car.replace(/Ḷ\u005b/g, "L");
  car = car.replace(/ḷ\u005b/g, "l");
  car = car.replace(/Ō\u005b/g, "O");
  car = car.replace(/ō\u005b/g, "o");
  car = car.replace(/Ȫ\u005b/g, "Ö");
  car = car.replace(/ȫ\u005b/g, "ö");
  car = car.replace(/Ṛ\u005b/g, "R");
  car = car.replace(/ṛ\u005b/g, "r");
  car = car.replace(/Ṭ\u005b/g, "T");
  car = car.replace(/ṭ\u005b/g, "t");
  car = car.replace(/Ū\u005b/g, "U");
  car = car.replace(/ū\u005b/g, "u");
  car = car.replace(/Ǖ\u005b/g, "Ü");
  car = car.replace(/ǖ\u005b/g, "ü");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}