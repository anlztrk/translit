var car;
function armlat () {
car = document.transcription.text1.value;
car = car.replace(/Ե(Ւ|ւ)/g, "Վ");
car = car.replace(/եւ/g, "վ");
car = car.replace(/(Տ|տ|Ճ|ճ|Պ|պ|Ծ|ծ|Կ|կ)(Հ|հ)/g ,"$1\u2019$2");
car = car.replace(/(Դ|դ)(Զ|զ)/g, "$1\u2019$2");
car = car.replace(/(Ր|ր)(Ր|ր)/g, "$1\u2019$2");  

car = car.replace(/ԵՎ/g, "EW");
car = car.replace(/Եվ/g, "Ew");
car = car.replace(/Ու/g, "U");
car = car.replace(/ՈՒ/g, "U");
car = car.replace(/ու/g, "u");
car = car.replace(/Ա/g, "A");
car = car.replace(/Բ/g, "B"); //b/
car = car.replace(/Գ/g, "G"); //g/
car = car.replace(/Դ/g, "D"); //d/
car = car.replace(/Ե/g, "E");
car = car.replace(/Զ/g, "Z");
car = car.replace(/Է/g, "Ê");
car = car.replace(/Ը/g, "Ĕ");
car = car.replace(/Թ/g, "Th"); //tʰ/
car = car.replace(/Ժ/g, "Ž");
car = car.replace(/Ի/g, "I");
car = car.replace(/Լ/g, "L");
car = car.replace(/Խ/g, "X");
car = car.replace(/Ծ/g, "C"); //ts/
car = car.replace(/Կ/g, "K"); //k/
car = car.replace(/Հ/g, "H");
car = car.replace(/Ձ/g, "Dz"); //dz/
car = car.replace(/Ղ/g, "Q");
car = car.replace(/Ճ/g, "Č"); //tʃ/
car = car.replace(/Մ/g, "M");
car = car.replace(/Յ/g, "Y");
car = car.replace(/Ն/g, "N");
car = car.replace(/Շ/g, "Š");
car = car.replace(/Ո/g, "O");
car = car.replace(/Չ/g, "Čh"); //tʃʰ/
car = car.replace(/Պ/g, "P"); //p/
car = car.replace(/Ջ/g, "J"); //dʒ/
car = car.replace(/Ռ/g, "Rr");
car = car.replace(/Ս/g, "S");
car = car.replace(/Վ/g, "V");
car = car.replace(/Տ/g, "T"); //t/
car = car.replace(/Ր/g, "R");
car = car.replace(/Ց/g, "Ch"); //tsʰ/
car = car.replace(/Ւ/g, "W");
car = car.replace(/Փ/g, "Ph"); //pʰ/
car = car.replace(/Ք/g, "Kh"); //kʰ/
car = car.replace(/Օ/g, "Ô");
car = car.replace(/Ֆ/g, "F");
car = car.replace(/ա/g, "a");
car = car.replace(/բ/g, "b"); //b/
car = car.replace(/գ/g, "g"); //g/
car = car.replace(/դ/g, "d"); //d/
car = car.replace(/ե/g, "e");
car = car.replace(/զ/g, "z");
car = car.replace(/է/g, "ê");
car = car.replace(/ը/g, "ĕ");
car = car.replace(/թ/g, "th"); //tʰ/
car = car.replace(/ժ/g, "ž");
car = car.replace(/ի/g, "i");
car = car.replace(/լ/g, "l");
car = car.replace(/խ/g, "x");
car = car.replace(/ծ/g, "c"); //ts/
car = car.replace(/կ/g, "k"); //k/
car = car.replace(/հ/g, "h");
car = car.replace(/ձ/g, "dz"); //dz/
car = car.replace(/ղ/g, "q");
car = car.replace(/ճ/g, "č"); //tʃ/
car = car.replace(/մ/g, "m");
car = car.replace(/յ/g, "y");
car = car.replace(/ն/g, "n");
car = car.replace(/շ/g, "š");
car = car.replace(/ո/g, "o");
car = car.replace(/չ/g, "čh"); //tʃʰ/
car = car.replace(/պ/g, "p"); //p/
car = car.replace(/ջ/g, "j"); //dʒ/
car = car.replace(/ռ/g, "rr");
car = car.replace(/ս/g, "s");
car = car.replace(/վ/g, "v");
car = car.replace(/տ/g, "t"); //t/
car = car.replace(/ր/g, "r");
car = car.replace(/ց/g, "ch"); //tsʰ/
car = car.replace(/ւ/g, "w");
car = car.replace(/փ/g, "ph"); //pʰ/
car = car.replace(/ք/g, "kh"); //kʰ/
car = car.replace(/և/g, "ew");
car = car.replace(/օ/g, "ô");
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
