var car;

function cyrlat () {
 car = document.transcription.text1.value;
 car = car.replace(/А/g, "A");
 car = car.replace(/Б/g, "B");
 car = car.replace(/В/g, "V");
 car = car.replace(/Г/g, "G");
 car = car.replace(/Ғ/g, "G\u02bb");
 car = car.replace(/Д/g, "D"); 
 car = car.replace(/Ж/g, "J");
 car = car.replace(/З/g, "Z");
 car = car.replace(/И/g, "I");
 car = car.replace(/Й/g, "Y");
 car = car.replace(/К/g, "K");
 car = car.replace(/Қ/g, "Q");
 car = car.replace(/Л/g, "L");
 car = car.replace(/М/g, "M");
 car = car.replace(/Н/g, "N");
 car = car.replace(/О/g, "O");
 car = car.replace(/П/g, "P");
 car = car.replace(/Р/g, "R");
 car = car.replace(/С/g, "S");
 car = car.replace(/Т/g, "T");
 car = car.replace(/У/g, "U");
 car = car.replace(/Ў/g, "O\u02bb");
 car = car.replace(/Ф/g, "F");
 car = car.replace(/Х/g, "X");
 car = car.replace(/Х/g, "X");
 car = car.replace(/Ҳ/g, "H");
 car = car.replace(/Ч/g, "CH");
 car = car.replace(/Ш/g, "SH");
 car = car.replace(/Ъ/g, "\u02bc");
 car = car.replace(/Ь/g, "");
 car = car.replace(/Э/g, "E");
document.transcription.text2.value = car;
}

function latcyr () {
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
