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
  
  car = car.replace(/D(Ž|Ź)/g, "Җ");
  car = car.replace(/D(ž|ź)/g, "Җ");
  car = car.replace(/d(ž|ź)/g, "җ");
  car = car.replace(/C/g, "Ц");
  car = car.replace(/c/g, "ц");
  car = car.replace(/Җ/g, "C");
  car = car.replace(/җ/g, "c");
  car = car.replace(/Ą/g, "O");
  car = car.replace(/ą/g, "o");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/y/g, "ı");
  car = car.replace(/J/g, "Y");
  car = car.replace(/j/g, "y");
  car = car.replace(/(Ć|Č)/g, "Ç");
  car = car.replace(/(ć|č)/g, "ç");
  car = car.replace(/Ę/g, "E");
  car = car.replace(/ę/g, "e");
  car = car.replace(/Ó/g, "U");
  car = car.replace(/ó/g, "u");
  car = car.replace(/(Ś|Š)/g, "Ş");
  car = car.replace(/(ś|š)/g, "ş");
  car = car.replace(/(Ž|Ź)/g, "J");
  car = car.replace(/(ž|ź)/g, "j");
  car = car.replace(/(W|Ł)/g, "V");
  car = car.replace(/(w|ł)/g, "v");
  
  car = car.replace(/Ń(A|E|İ|O|U|I)/g, "NY$1");
  car = car.replace(/Ń(a|e|i|o|u|ı)/g, "Ny$1");
  car = car.replace(/ń(a|e|i|o|u|ı)/g, "ny$1");
  car = car.replace(/Ń/g, "N");
  car = car.replace(/ń/g, "n");
  
  car = car.replace(/(A|E|İ|O|U|I|a|e|i|o|u|ı)ЦЦ/g, "$1TTS");
  car = car.replace(/(a|e|i|o|u|ı)Цц/g, "$1Tts");
  car = car.replace(/(a|e|i|o|u|ı)цЦ/g, "$1tTs");
  car = car.replace(/(a|e|i|o|u|ı)цц/g, "$1tts");
  car = car.replace(/(A|E|İ|O|U|I)Цц/g, "$1Tts");
  car = car.replace(/(A|E|İ|O|U|I)цЦ/g, "$1tTS");
  car = car.replace(/(A|E|İ|O|U|I)цц/g, "$1tts");
  
  car = car.replace(/(A|E|İ|O|U|I)Ц/g, "$1TS");
  car = car.replace(/(A|E|İ|O|U|I)ц/g, "$1ts");
  car = car.replace(/(a|e|i|o|u|ı)Ц/g, "$1Ts");
  car = car.replace(/(a|e|i|o|u|ı)ц/g, "$1ts");
  car = car.replace(/Ц/g, "S");
  car = car.replace(/ц/g, "s");
  
  car = car.replace(/(A|E|İ|O|U|I)Ѕ/g, "$1DZ");
  car = car.replace(/(A|E|İ|O|U|I)ѕ/g, "$1dz");
  car = car.replace(/(a|e|i|o|u|ı)Ѕ/g, "$1Dz");
  car = car.replace(/(a|e|i|o|u|ı)ѕ/g, "$1dz");
  car = car.replace(/Ѕ/g, "Z");
  car = car.replace(/ѕ/g, "z");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
