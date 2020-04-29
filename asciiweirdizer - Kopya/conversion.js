//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
car = car.replace(/u003C/g, "\u003C");
car = car.replace(/u003E/g, "\u003E");
car = car.replace(/u002C/g, "\u002C");
car = car.replace(/u003B/g, "\u003B");
car = car.replace(/u0022/g, "\u0022");
car = car.replace(/u002F/g, "\u002F");
car = car.replace(/u005C/g, "\u005C");
car = car.replace(/u0024/g, "\u0024");
car = car.replace(/u007B/g, "\u007B");
car = car.replace(/u007D/g, "\u007D");
car = car.replace(/u0023/g, "\u0023");
car = car.replace(/u002D/g, "\u002D");
car = car.replace(/u003F/g, "\u003F");
car = car.replace(/u003A/g, "\u003A");
car = car.replace(/u003D/g, "\u003D");
car = car.replace(/u0025/g, "\u0025");
car = car.replace(/u0028/g, "\u0028");
car = car.replace(/u0029/g, "\u0029");
car = car.replace(/u005B/g, "\u005B");
car = car.replace(/u005D/g, "\u005D");
car = car.replace(/u0060/g, "\u0060");
car = car.replace(/u00B6/g, "\u00B6");
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/\u003C/g, "u003C");
car = car.replace(/\u003E/g, "u003E");
car = car.replace(/\u002C/g, "u002C");
car = car.replace(/\u003B/g, "u003B");
car = car.replace(/\u0022/g, "u0022");
car = car.replace(/\u002F/g, "u002F");
car = car.replace(/\u005C/g, "u005C");
car = car.replace(/\u0024/g, "u0024");
car = car.replace(/\u007B/g, "u007B");
car = car.replace(/\u007D/g, "u007D");
car = car.replace(/\u0023/g, "u0023");
car = car.replace(/\u002D/g, "u002D");
car = car.replace(/\u003F/g, "u003F");
car = car.replace(/\u003A/g, "u003A");
car = car.replace(/\u003D/g, "u003D");
car = car.replace(/\u0025/g, "u0025");
car = car.replace(/\u0028/g, "u0028");
car = car.replace(/\u0029/g, "u0029");
car = car.replace(/\u005B/g, "u005B");
car = car.replace(/\u005D/g, "u005D");
car = car.replace(/\u0060/g, "u0060");
car = car.replace(/\u00B6/g, "u00B6");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}