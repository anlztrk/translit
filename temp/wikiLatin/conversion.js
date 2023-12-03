var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/\u005bLatin alfabesi/g, "\u005bLatin harfleri\u007cLatin alfabesi");
car = car.replace(/\u005bLatin Alfabesi/g, "\u005bLatin harfleri\u007cLatin alfabesi");
car = car.replace(/Latin harfleri\u007cLatin alfabesi\u007c/g, "Latin harfleri\u007c");
car = car.replace(/\u005bLatin harfleri\u007cLatin harfleri\u005d/g, "\u005bLatin harfleri\u005d");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
