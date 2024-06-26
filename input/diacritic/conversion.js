var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/\u0023grave\u0023/g, "\u0300");
car = car.replace(/\u0023(acute|accent)\u0023/g, "\u0301");
car = car.replace(/\u0023(circumflex|caret)\u0023/g, "\u0302");
car = car.replace(/\u0023tilde\u0023/g, "\u0303");
car = car.replace(/\u0023macron\u0023/g, "\u0304");	
car = car.replace(/\u0023breve\u0023/g, "\u0306");
car = car.replace(/\u0023dot(above)?\u0023/g, "\u0307");
car = car.replace(/\u0023(diaeresis|umlaut|trema)\u0023/g, "\u0308");
car = car.replace(/\u0023hook(above)?\u0023/g, "\u0309");
car = car.replace(/\u0023ring(above)?\u0023/g, "\u030a");
car = car.replace(/\u0023doubleacute\u0023/g, "\u030b");
car = car.replace(/\u0023(caron|hacek|hachek)\u0023/g, "\u030c");
car = car.replace(/\u0023horn\u0023/g, "\u031b");
car = car.replace(/\u0023dotbelow\u0023/g, "\u0323");
car = car.replace(/\u0023comma(below)?\u0023/g, "\u0326");
car = car.replace(/\u0023cedilla\u0023/g, "\u0327");
car = car.replace(/\u0023ogonek\u0023/g, "\u0328");
car = car.replace(/\u0023(vertical)?line(below)?\u0023/g, "\u0329");
car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
