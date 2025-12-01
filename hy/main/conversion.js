var car;
function armlat () {
car = document.transcription.text1.value;
car = car.replace(/Ե([Ււ])/g, "Վ");
car = car.replace(/եւ/g, "վ");

car = car.replace(/(Ա|Ե|Է|Ը|Ի|Ո|ՈՒ|Ու|Օ)([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])/g, "$1$2$3Ը$4");
car = car.replace(/(Ա|Ե|Է|Ը|Ի|Ո|ՈՒ|Ու|Օ|ա|ե|է|ը|ի|ո|ու|օ)([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])/g, "$1$2$3ը$4");
car = car.replace(/([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])/g, "$1Ը$2$3");
car = car.replace(/([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])/g, "$1ը$2$3");


car = car.replace(/ԵՎ/g, "EW");
car = car.replace(/Եվ/g, "Ew");
car = car.replace(/Ու/g, "U");
car = car.replace(/ՈՒ/g, "U");
car = car.replace(/ու/g, "u");
car = car.replace(/Ա/g, "A");
car = car.replace(/Բ/g, "Ḅ"); //b/
car = car.replace(/Գ/g, "G\u0323"); //g/
car = car.replace(/Դ/g, "Ḍ"); //d/
car = car.replace(/Ե/g, "E");
car = car.replace(/Զ/g, "Z");
car = car.replace(/Է/g, "É");
car = car.replace(/Ը/g, "Ĕ");
car = car.replace(/Թ/g, "T"); //tʰ/
car = car.replace(/Ժ/g, "J");
car = car.replace(/Ի/g, "I");
car = car.replace(/Լ/g, "L");
car = car.replace(/Խ/g, "X");
car = car.replace(/Ծ/g, "Dz"); //ts/
car = car.replace(/Կ/g, "G"); //k/
car = car.replace(/Հ/g, "H");
car = car.replace(/Ձ/g, "Ḍz"); //dz/
car = car.replace(/Ղ/g, "Q");
car = car.replace(/Ճ/g, "Dj"); //tʃ/
car = car.replace(/Մ/g, "M");
car = car.replace(/Յ/g, "Y");
car = car.replace(/Ն/g, "N");
car = car.replace(/Շ/g, "Š");
car = car.replace(/Ո/g, "O");
car = car.replace(/Չ/g, "Č"); //tʃʰ/
car = car.replace(/Պ/g, "B"); //p/
car = car.replace(/Ջ/g, "Ḍj"); //dʒ/
car = car.replace(/Ռ/g, "Ř");
car = car.replace(/Ս/g, "S");
car = car.replace(/Վ/g, "V");
car = car.replace(/Տ/g, "D"); //t/
car = car.replace(/Ր/g, "R");
car = car.replace(/Ց/g, "C"); //tsʰ/
car = car.replace(/Ւ/g, "W");
car = car.replace(/Փ/g, "P"); //pʰ/
car = car.replace(/Ք/g, "K"); //kʰ/
car = car.replace(/Օ/g, "Ó");
car = car.replace(/Ֆ/g, "F");
car = car.replace(/ա/g, "a");
car = car.replace(/բ/g, "ḅ"); //b/
car = car.replace(/գ/g, "ġ"); //g/
car = car.replace(/դ/g, "ḍ"); //d/
car = car.replace(/ե/g, "e");
car = car.replace(/զ/g, "z");
car = car.replace(/է/g, "é");
car = car.replace(/ը/g, "ĕ");
car = car.replace(/թ/g, "t"); //tʰ/
car = car.replace(/ժ/g, "j");
car = car.replace(/ի/g, "i");
car = car.replace(/լ/g, "l");
car = car.replace(/խ/g, "x");
car = car.replace(/ծ/g, "dz"); //ts/
car = car.replace(/կ/g, "g"); //k/
car = car.replace(/հ/g, "h");
car = car.replace(/ձ/g, "ḍz"); //dz/
car = car.replace(/ղ/g, "q");
car = car.replace(/ճ/g, "dj"); //tʃ/
car = car.replace(/մ/g, "m");
car = car.replace(/յ/g, "y");
car = car.replace(/ն/g, "n");
car = car.replace(/շ/g, "š");
car = car.replace(/ո/g, "o");
car = car.replace(/չ/g, "č"); //tʃʰ/
car = car.replace(/պ/g, "b"); //p/
car = car.replace(/ջ/g, "ḍj"); //dʒ/
car = car.replace(/ռ/g, "ř");
car = car.replace(/ս/g, "s");
car = car.replace(/վ/g, "v");
car = car.replace(/տ/g, "d"); //t/
car = car.replace(/ր/g, "r");
car = car.replace(/ց/g, "c"); //tsʰ/
car = car.replace(/ւ/g, "w");
car = car.replace(/փ/g, "p"); //pʰ/
car = car.replace(/ք/g, "k"); //kʰ/
car = car.replace(/և/g, "ew");
car = car.replace(/օ/g, "ó");
car = car.replace(/ֆ/g, "f");
car = car.replace(/(\u055b|\u055c|\u055e)/g, "");
car = car.replace(/(\u055d|\u0060)/g, "\u003b");
car = car.replace(/(\u003a|\u0589)/g, "\u002e");
car = car.replace(/\u2024/g, "\u003a");
car = car.replace(/\u058a/g, "\u002d");
car = car.replace(/\u055a/g, "\u2019");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
