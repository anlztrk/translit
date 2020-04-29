//  copyright lexilogos.com
var car;
function geolat () {
car = document.transcription.text1.value;
car = car.replace(/c/g, "ts");
car = car.replace(/š/g, "sh");
car = car.replace(/ž/g, "zh");
car = car.replace(/č/g, "ch");
car = car.replace(/ō/g, "oo");
car = car.replace(/ē/g, "ey");
car = car.replace(/C/g, "Ts");
car = car.replace(/Š/g, "Sh");
car = car.replace(/Ž/g, "Zh");
car = car.replace(/Č/g, "Ch");
car = car.replace(/Ē/g, "Ey");

document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}