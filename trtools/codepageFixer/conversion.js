var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ý/g, "ı")
           .replace(/þ/g, "ş")
           .replace(/ð/g, "ğ")
           .replace(/Ý/g, "İ")
           .replace(/Þ/g, "Ş")
           .replace(/Ð/g, "Ğ");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
