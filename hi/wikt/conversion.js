﻿var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/(ं|ँ)(क|ख|ग|घ|ह)/, "\u0303ṅ$2");
car = car.replace(/(ं|ँ)(त|थ|द|ध|ल|स)/, "\u0303n$2");
car = car.replace(/(ं|ँ)(प|फ|ब|भ|व)/, "\u0303m$2");
car = car.replace(/(ं|ँ)/, "\u0303");
car = car.replace(/क़/, "q\u200c");
car = car.replace(/ख़/, "x\u200c");
car = car.replace(/ग़/, "ġ\u200c");
car = car.replace(/ज़/, "z\u200c");
car = car.replace(/झ़/, "ź\u200c");
car = car.replace(/फ़/, "f\u200c");
car = car.replace(/ड़/, "ṛ\u200c");
car = car.replace(/ढ़/, "ṛh\u200c");
car = car.replace(/क/, "k\u200c");
car = car.replace(/ख/, "kh\u200c");
car = car.replace(/ग/, "g\u200c");
car = car.replace(/घ/, "gh\u200c");
car = car.replace(/ङ/, "ṅ\u200c");
car = car.replace(/ह/, "h\u200c");
car = car.replace(/च/, "c\u200c");
car = car.replace(/छ/, "ch\u200c");
car = car.replace(/ज/, "j\u200c");
car = car.replace(/झ/, "jh\u200c");
car = car.replace(/ञ/, "ñ\u200c");
car = car.replace(/य/, "y\u200c");
car = car.replace(/श/, "ś\u200c");
car = car.replace(/ट/, "ṭ\u200c");
car = car.replace(/ठ/, "ṭh\u200c");
car = car.replace(/ड/, "ḍ\u200c");
car = car.replace(/ढ/, "ḍh\u200c");
car = car.replace(/ण/, "ṇ\u200c");
car = car.replace(/र/, "r\u200c");
car = car.replace(/ष/, "ṣ\u200c");
car = car.replace(/त/, "t\u200c");
car = car.replace(/थ/, "th\u200c");
car = car.replace(/द/, "d\u200c");
car = car.replace(/ध/, "dh\u200c");
car = car.replace(/न/, "n\u200c");
car = car.replace(/ल/, "l\u200c");
car = car.replace(/स/, "s\u200c");
car = car.replace(/प/, "p\u200c");
car = car.replace(/फ/, "ph\u200c");
car = car.replace(/ब/, "b\u200c");
car = car.replace(/भ/, "bh\u200c");
car = car.replace(/म/, "m\u200c");
car = car.replace(/व/, "v\u200c");
car = car.replace(/ळ/, "ḷ\u200c");
car = car.replace(/व़/, "w\u200c");
car = car.replace(/\u200c(ि|ु|ृ|े|ो|ा|ी|ू|ै|ौ)/, "$1");
car = car.replace(/\u200c्/, "");
car = car.replace(/\u200c/, "a");
car = car.replace(/अ/, "a");
car = car.replace(/इ/, "i");
car = car.replace(/ि/, "i");
car = car.replace(/उ/, "u");
car = car.replace(/ु/, "u");
car = car.replace(/ऋ/, "ŕ");
car = car.replace(/ृ/, "ŕ");
car = car.replace(/ए/, "e");
car = car.replace(/े/, "e");
car = car.replace(/ओ/, "o");
car = car.replace(/ो/, "o");
car = car.replace(/आ/, "ā");
car = car.replace(/ा/, "ā");
car = car.replace(/ई/, "ī");
car = car.replace(/ी/, "ī");
car = car.replace(/ऊ/, "ū");
car = car.replace(/ू/, "ū");
car = car.replace(/ऐ/, "ai");
car = car.replace(/ै/, "ai");
car = car.replace(/औ/, "au");
car = car.replace(/ौ/, "au");
car = car.replace(/ः/, "ḥ");
car = car.normalize('NFC');
document.transcription.text2.value = car;
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
