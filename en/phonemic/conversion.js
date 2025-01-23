var car;
function cyrlat () {
car = document.transcription.text1.value;  
car = car.replace(/(\u02c8|\u02cc|\u002e|\u02d0|\u02d1)/g, "");
car = car.replace(/ᵊ/g, 'ə');
car = car.replace(/ɹ/g, 'r');
car = car.replace(/ɫ̩/g, 'ĕl');
car = car.replace(/m̩/g, 'ĕm');
car = car.replace(/n̩/g, 'ĕn');
car = car.replace(/hw/g, 'w');
car = car.replace(/(aʊ|æʊ)/g, 'aw');
car = car.replace(/(oʊ|əʊ)/g, 'o');
car = car.replace(/(u|uː)/g, 'uw');
car = car.replace(/(ɑ|ɑː)/g, 'ā');
car = car.replace(/(ɔ|ɔː)/g, 'ō');
car = car.replace(/(i|iː)/g, 'iy');
car = car.replace(/ɪə(r)?/g, 'ir');
car = car.replace(/ʊə(r)?/g, 'ur');
car = car.replace(/(ʌ|ə)/g, 'ĕ');
car = car.replace(/æ/g, 'a');
car = car.replace(/ʊ/g, 'u');
car = car.replace(/(ɜː|ɜ)/g, 'ö');
car = car.replace(/(ɝ|ɜɹ)/g, 'ör');
car = car.replace(/ɛː/g, 'er');
car = car.replace(/ɪ/g, 'i');
car = car.replace(/ɛ/g, 'e');
car = car.replace(/ɒ/g, 'å');
car = car.replace(/ɚ/g, 'ĕr');
car = car.replace(/ŋ/g, 'ń');
car = car.replace(/tʃ/g, 'ć');
car = car.replace(/dʒ/g, 'j');
car = car.replace(/θ/g, 'þ');
car = car.replace(/ʃ/g, 'ś');
car = car.replace(/ð/g, 'ð');
car = car.replace(/ʒ/g, 'ź');
car = car.replace(/j/g, 'y');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
