//  copyright lexilogos.com
var car;
function geolat () {
car = document.transcription.text1.value;
car = car.replace(/\u0303/g, "n\u0325");
car = car.replace(/ã/g, "an\u0325");
car = car.replace(/Ã/g, "An\u0325");
car = car.replace(/ẽ/g, "en\u0325");
car = car.replace(/Ẽ/g, "En\u0325");
car = car.replace(/ĩ/g, "in\u0325");
car = car.replace(/Ĩ/g, "In\u0325");
car = car.replace(/õ/g, "on\u0325");
car = car.replace(/Õ/g, "On\u0325");
car = car.replace(/ũ/g, "un\u0325");
car = car.replace(/Ũ/g, "Un\u0325");
car = car.replace(/ỹ/g, "yn\u0325");
car = car.replace(/Ỹ/g, "Yn\u0325");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}