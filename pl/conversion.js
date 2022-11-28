var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/W/g, "V");
  car = car.replace(/w/g, "v");
  car = car.replace(/Ł/g, "Ŭ");
  car = car.replace(/ł/g, "ŭ");
    
  car = car.replace(/C(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ć$2");
  car = car.replace(/Ci(a|ą|e|ę|o|ó|u|y)/g, "Ć$1");
  car = car.replace(/ci(a|ą|e|ę|o|ó|u|y)/g, "ć$1");
  car = car.replace(/C(I|i)/g, "Ć$1");
  car = car.replace(/ci/g, "ći");
  car = car.replace(/S(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ś$2");
  car = car.replace(/Si(a|ą|e|ę|o|ó|u|y)/g, "Ś$1");
  car = car.replace(/si(a|ą|e|ę|o|ó|u|y)/g, "ś$1");
  car = car.replace(/S(I|i)/g, "Ś$1");
  car = car.replace(/si/g, "śi");
  car = car.replace(/Z(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ź$2");
  car = car.replace(/Zi(a|ą|e|ę|o|ó|u|y)/g, "Ź$1");
  car = car.replace(/zi(a|ą|e|ę|o|ó|u|y)/g, "ź$1");
  car = car.replace(/Z(I|i)/g, "Ź$1");
  car = car.replace(/zi/g, "źi");  
  car = car.replace(/N(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ń$2");
  car = car.replace(/Ni(a|ą|e|ę|o|ó|u|y)/g, "Ń$1");
  car = car.replace(/ni(a|ą|e|ę|o|ó|u|y)/g, "ń$1");  
  car = car.replace(/NII/g, "ŃJI");
  car = car.replace(/Nii/g, "Ńji");
  car = car.replace(/nii/g, "ńji");
  car = car.replace(/N(I|i)/g, "Ń$1");
  car = car.replace(/ni/g, "ńi");
  
  car = car.replace(/I(A|Ą|E|Ę|O|Ó|U|Y|I|a|ą|e|ę|o|ó|u|y|i)/g, "J$1");
  car = car.replace(/i(a|ą|e|ę|o|ó|u|y|i)/g, "j$1");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
