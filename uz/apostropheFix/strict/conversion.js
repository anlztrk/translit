
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/['ˈ’ʼ‘ʻ´`ʿʹˊ׳′ʽߵ՚ߴ᾿ՙ῾‛ʾ՛ˋ]/g, "ʼ");
  car = car.replace(/([OoGg])ʼ/g, "$1ʻ");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
