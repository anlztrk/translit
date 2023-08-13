var car;
function cyrlat () {
car = document.transcription.text1.value;  
  car = car.replace(/(\u0361|\u002e)/g, "");
  car = car.replace(/aʊər/g, "ɹ");
  car = car.replace(/ʊə/g, "ʊɹ");
  car = car.replace(/(ɛː|ɛə|e)ɹ/g, "ɛɹ");
  car = car.replace(/(i|ɪ|ɪː)ɹ/g, "ɪəɹ");
  car = car.replace(/(ɒ|ɔː)/g, "oɹ");
  car = car.replace(/(ɑː|ɒ|ɔ)/g, "ɑ");
  car = car.replace(/ʊə/g, "ʊɹ");
  car = car.replace(/əʊ/g, "oʊ");
  car = car.replace(/ɚ/g, "əɹ");
  car = car.replace(/ɜː/g, "ɜɹ");
  car = car.replace(/ɑː/g, "ɑ");
  car = car.replace(/uː/g, "u");
  car = car.replace(/iː/g, "i");
  car = car.replace(/a/g, "æ");


  car = car.replace(/æʊ/g, "äğv");
  car = car.replace(/oʊ/g, "oğv");
  car = car.replace(/ɪə/g, "ɪğı");
  car = car.replace(/eɪ/g, "ey");
  car = car.replace(/ɔɪ/g, "oy");
  car = car.replace(/i/g, "iy");
  car = car.replace(/u/g, "uv");
  car = car.replace(/ɑ/g, "ağ");
  car = car.replace(/ʌ/g, "a");
  car = car.replace(/æ/g, "ä");
  car = car.replace(/ɜ/g, "ö");
  car = car.replace(/ɛ/g, "e");
  car = car.replace(/ə/g, "ı");
  car = car.replace(/ɪ/g, "i");
  car = car.replace(/äğv(b|d|ð|f|h|ʒ|m|n|ŋ|p|ɹ|s|ʃ|t|θ|v|w|z)/g, "oğ$1");
  car = car.replace(/oğv(b|d|ð|f|h|ʒ|m|n|ŋ|p|ɹ|s|ʃ|t|θ|v|w|z)/g, "oğ$1");
  
  car = car.replace(/(b|d|ð|f|h|ʒ|m|n|ŋ|p|ɹ|s|ʃ|t|θ|v|w|z)juv/g, "$1ü");
  car = car.replace(/hw/g, "w");
  car = car.replace(/ɡ/g, "g");
  car = car.replace(/ɾ/g, "d");
  car = car.replace(/ʍ/g, "w");
  car = car.replace(/x/g, "k");
  car = car.replace(/(l|k|g)ja/g, "$1â");
  car = car.replace(/(l|k|g)ju/g, "$1û");
  car = car.replace(/j/g, "y");
  car = car.replace(/tʃ/g, "ç");
  car = car.replace(/dʒ/g, "c");
  car = car.replace(/ʃ/g, "ş");
  car = car.replace(/ʒ/g, "j");
  car = car.replace(/ŋ(g|k)/g, "n$1");
  car = car.replace(/ŋ/g, "nğ");
  car = car.replace(/w/g, "v");
  car = car.replace(/θ/g, "t");
  car = car.replace(/ð/g, "d");
  car = car.replace(/ɹ/g, "r");
  car = car.replace(/ˈ/g, "");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
