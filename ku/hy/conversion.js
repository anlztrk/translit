var car;

function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/A/g, 'Ա');
  car = car.replace(/B/g, 'Բ');
  car = car.replace(/C/g, 'Ջ');
  car = car.replace(/Ç/g, 'Չ');
  car = car.replace(/D/g, 'Դ');
  car = car.replace(/E/g, 'Ե');
  car = car.replace(/Ê/g, 'Է');
  car = car.replace(/F/g, 'Ֆ');
  car = car.replace(/G/g, 'Գ');
  car = car.replace(/H/g, 'Հ');
  car = car.replace(/I/g, 'Ը');
  car = car.replace(/Î/g, 'Ի');
  car = car.replace(/J/g, 'Ժ');
  car = car.replace(/K/g, 'Ք');
  car = car.replace(/L/g, 'Լ');
  car = car.replace(/M/g, 'Մ');
  car = car.replace(/N/g, 'Ն');
  car = car.replace(/O/g, 'Ո');
  car = car.replace(/P/g, 'Փ');
  car = car.replace(/Q/g, 'Կ');
  car = car.replace(/R/g, 'Ր');
  car = car.replace(/S/g, 'Ս');
  car = car.replace(/Ş/g, 'Շ');
  car = car.replace(/T/g, 'Թ');
  car = car.replace(/U/g, 'ՈՒ');
  car = car.replace(/Û/g, 'Օ');
  car = car.replace(/V/g, 'Վ');
  car = car.replace(/W/g, 'ՕՒ');
  car = car.replace(/X/g, 'Խ');
  car = car.replace(/Y/g, 'Յ');
  car = car.replace(/Z/g, 'Զ');
  car = car.replace(/a/g, 'ա');
  car = car.replace(/b/g, 'բ');
  car = car.replace(/c/g, 'ջ');
  car = car.replace(/ç/g, 'չ');
  car = car.replace(/d/g, 'դ');
  car = car.replace(/e/g, 'ե');
  car = car.replace(/ê/g, 'է');
  car = car.replace(/f/g, 'ֆ');
  car = car.replace(/g/g, 'գ');
  car = car.replace(/h/g, 'հ');
  car = car.replace(/i/g, 'ը');
  car = car.replace(/î/g, 'ի');
  car = car.replace(/j/g, 'ժ');
  car = car.replace(/k/g, 'ք');
  car = car.replace(/l/g, 'լ');
  car = car.replace(/m/g, 'մ');
  car = car.replace(/n/g, 'ն');
  car = car.replace(/o/g, 'ո');
  car = car.replace(/p/g, 'փ');
  car = car.replace(/q/g, 'կ');
  car = car.replace(/r/g, 'ր');
  car = car.replace(/s/g, 'ս');
  car = car.replace(/ş/g, 'շ');
  car = car.replace(/t/g, 'թ');
  car = car.replace(/u/g, 'ու');
  car = car.replace(/û/g, 'օ');
  car = car.replace(/v/g, 'վ');
  car = car.replace(/w/g, 'օւ');
  car = car.replace(/x/g, 'խ');
  car = car.replace(/y/g, 'յ');
  car = car.replace(/z/g, 'զ');
  
  car = car.replace(/Ւ( |)(ա|բ|ջ|չ|դ|ե|է|ֆ|գ|հ|ը|ի|ժ|ք|լ|մ|ն|ո|փ|կ|ր|ս|շ|թ|օ|վ|խ|յ|զ)/g, 'ւ$1$2');
  car = car.replace(/(ա|բ|ջ|չ|դ|ե|է|ֆ|գ|հ|ը|ի|ժ|ք|լ|մ|ն|ո|փ|կ|ր|ս|շ|թ|օ|վ|խ|յ|զ)( |)(Ո|Օ)Ւ/g, '$1$2$3ւ');
document.transcription.text2.value = car;
}

function latcyr () {
car = document.transcription.text2.value;
  car = car.replace(/Ո(Ւ|ւ)/g, 'U');
  car = car.replace(/Օ(Ւ|ւ)/g, 'W');
  car = car.replace(/ու/g, 'u');
  car = car.replace(/օւ/g, 'w');
  
  car = car.replace(/Ա/g, 'A');
  car = car.replace(/Բ/g, 'B');
  car = car.replace(/Ջ/g, 'C');
  car = car.replace(/Չ/g, 'Ç');
  car = car.replace(/Դ/g, 'D');
  car = car.replace(/Ե/g, 'E');
  car = car.replace(/Է/g, 'Ê');
  car = car.replace(/Ֆ/g, 'F');
  car = car.replace(/Գ/g, 'G');
  car = car.replace(/Հ/g, 'H');
  car = car.replace(/Ը/g, 'I');
  car = car.replace(/Ի/g, 'Î');
  car = car.replace(/Ժ/g, 'J');
  car = car.replace(/Ք/g, 'K');
  car = car.replace(/Լ/g, 'L');
  car = car.replace(/Մ/g, 'M');
  car = car.replace(/Ն/g, 'N');
  car = car.replace(/Ո/g, 'O');
  car = car.replace(/Փ/g, 'P');
  car = car.replace(/Կ/g, 'Q');
  car = car.replace(/Ր/g, 'R');
  car = car.replace(/Ս/g, 'S');
  car = car.replace(/Շ/g, 'Ş');
  car = car.replace(/Թ/g, 'T');
  car = car.replace(/Օ/g, 'Û');
  car = car.replace(/Վ/g, 'V');
  car = car.replace(/Խ/g, 'X');
  car = car.replace(/Յ/g, 'Y');
  car = car.replace(/Զ/g, 'Z');
  car = car.replace(/ա/g, 'a');
  car = car.replace(/բ/g, 'b');
  car = car.replace(/ջ/g, 'c');
  car = car.replace(/չ/g, 'ç');
  car = car.replace(/դ/g, 'd');
  car = car.replace(/ե/g, 'e');
  car = car.replace(/է/g, 'ê');
  car = car.replace(/ֆ/g, 'f');
  car = car.replace(/գ/g, 'g');
  car = car.replace(/հ/g, 'h');
  car = car.replace(/ը/g, 'i');
  car = car.replace(/ի/g, 'î');
  car = car.replace(/ժ/g, 'j');
  car = car.replace(/ք/g, 'k');
  car = car.replace(/լ/g, 'l');
  car = car.replace(/մ/g, 'm');
  car = car.replace(/ն/g, 'n');
  car = car.replace(/ո/g, 'o');
  car = car.replace(/փ/g, 'p');
  car = car.replace(/կ/g, 'q');
  car = car.replace(/ր/g, 'r');
  car = car.replace(/ս/g, 's');
  car = car.replace(/շ/g, 'ş');
  car = car.replace(/թ/g, 't');
  car = car.replace(/օ/g, 'û');
  car = car.replace(/վ/g, 'v');
  car = car.replace(/խ/g, 'x');
  car = car.replace(/յ/g, 'y');
  car = car.replace(/զ/g, 'z');
document.transcription.text1.value = car;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
