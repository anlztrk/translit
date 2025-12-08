var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/Ę(A|Ą|B|C|Ć|D|E|Ę|F|G|H|I|J|K|M|N|Ń|O|Ó|P|Q|R|S|Ś|T|U|V|W|X|Y|Z|Ź|Ż|a|ą|b|c|ć|d|e|ę|f|g|h|i|j|k|m|n|ń|o|ó|p|q|r|s|ś|t|u|v|w|x|y|z|ź|ż)/g, "Ẽ$1");
  car = car.replace(/ę(A|Ą|B|C|Ć|D|E|Ę|F|G|H|I|J|K|M|N|Ń|O|Ó|P|Q|R|S|Ś|T|U|V|W|X|Y|Z|Ź|Ż|a|ą|b|c|ć|d|e|ę|f|g|h|i|j|k|m|n|ń|o|ó|p|q|r|s|ś|t|u|v|w|x|y|z|ź|ż)/g, "ẽ$1");
  car = car.replace(/Ę/g, "E");
  car = car.replace(/ę/g, "e");
  car = car.replace(/Ẽ/g, "Ę");
  car = car.replace(/ẽ/g, "ę");

  car = car.replace(/Ą(L|l|Ł|ł)/g, "O$1");
  car = car.replace(/ą(L|l|Ł|ł)/g, "o$1");
    
  car = car.replace(/C(H|h)/g, "H");
  car = car.replace(/ch/g, "h");
  car = car.replace(/C(Z|z)/g, "Č");
  car = car.replace(/cz/g, "č");
  car = car.replace(/R(Z|z)/g, "Ž");
  car = car.replace(/rz/g, "ž");
  car = car.replace(/S(Z|z)/g, "Š");
  car = car.replace(/sz/g, "š");  
  
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
  
  car = car.replace(/Ż/g, "Ž");
  car = car.replace(/ż/g, "ž");
  
  car = car.replace(/Ą(B|C|Ć|Č|D|G|K|P|T)/g, "ON$1");
  car = car.replace(/Ą(b|c|ć|č|d|g|k|p|t)/g, "On$1");
  car = car.replace(/ą(b|c|ć|č|d|g|k|p|t)/g, "on$1");
  car = car.replace(/Ę(B|C|Ć|Č|D|G|K|P|T)/g, "EN$1");
  car = car.replace(/Ę(b|c|ć|č|d|g|k|p|t)/g, "En$1");
  car = car.replace(/ę(b|c|ć|č|d|g|k|p|t)/g, "en$1");
  
  car = car.replace(/D(Z|z)/g, "Ѕ");
  car = car.replace(/dz/g, "ѕ");
  
  car = car.replace(/Ą/g, "O");
  car = car.replace(/ą/g, "o");
  car = car.replace(/Ę/g, "E");
  car = car.replace(/ę/g, "e");
  car = car.replace(/Ó/g, "U");
  car = car.replace(/ó/g, "u");
  car = car.replace(/W/g, "V");
  car = car.replace(/w/g, "v");
  car = car.replace(/Ł/g, "W");
  car = car.replace(/ł/g, "w");
 
  car = car.replace(/Ń/g, "Nj");
  car = car.replace(/ń/g, "nj");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
