var car;
function cyrlat () {
car = document.transcription.text1.value;  
car = car.replace(/(\u002f|\u0361|\u002e)/g, "");
car = car.replace(/aɪ/g, "ay");
car = car.replace(/aʊ/g, "æğʊ");
car = car.replace(/ɔɪ/g, "oy");
car = car.replace(/dʒ/g, "c");
car = car.replace(/eɪ/g, "ey");
car = car.replace(/hw/g, "v");
car = car.replace(/l̩/g, "ıl");
car = car.replace(/ɫ̩/g, "ıl");
car = car.replace(/m̩/g, "ım");
car = car.replace(/n̩/g, "ın");
car = car.replace(/oʊ/g, "oğ");
car = car.replace(/tʃ/g, "ç");
car = car.replace(/ɑ/g, "â");
car = car.replace(/æ/g, "ä");
car = car.replace(/ɔ/g, "ô");
car = car.replace(/ð/g, "d");
car = car.replace(/ə/g, "ı");
car = car.replace(/ɚ/g, "ır");
car = car.replace(/ɛ/g, "e");
car = car.replace(/ɜ/g, "ö");
car = car.replace(/i/g, "î");
car = car.replace(/ɪ/g, "i");
car = car.replace(/j/g, "y");
car = car.replace(/ŋ/g, "nğ");
car = car.replace(/ɹ/g, "r");
car = car.replace(/ɾ/g, "d");
car = car.replace(/ʃ/g, "ş");
car = car.replace(/u/g, "û");
car = car.replace(/ʊ/g, "u");
car = car.replace(/ʌ/g, "a");
car = car.replace(/w/g, "v");
car = car.replace(/ʍ/g, "v");
car = car.replace(/ʒ/g, "j");
car = car.replace(/θ/g, "t");
car = car.replace(/ɡ/g, "g");
car = car.replace(/(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|p|r|s|ş|t|v|y|z)yû/g, "$1üğu");
car = car.replace(/(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|p|r|s|ş|t|v|y|z)yu/g, "$1ü");
car = car.replace(/(\u02c8|\u02cc)/g, "");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
