var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/´¨(ı|i)/g, "ΐ");
  car = car.replace(/´¨(u|y)/g, "ΰ");
  car = car.replace(/¨´(ı|i)/g, "ΐ");
  car = car.replace(/¨´(u|y)/g, "ΰ");
  car = car.replace(/(´ü|ű)/g, "ΰ");

  car = car.replace(/q/g, "ψ");
  car = car.replace(/w/g, "ω");
  car = car.replace(/e/g, "ε");
  car = car.replace(/r/g, "ρ");
  car = car.replace(/t/g, "τ");
  car = car.replace(/y/g, "υ");
  car = car.replace(/u/g, "υ");
  car = car.replace(/ı/g, "ι");
  car = car.replace(/o/g, "ο");
  car = car.replace(/p/g, "π");
  car = car.replace(/ğ/g, "γ");
  car = car.replace(/ü/g, "ϋ");
  car = car.replace(/a/g, "α");
  car = car.replace(/s/g, "σ");
  car = car.replace(/d/g, "δ");
  car = car.replace(/f/g, "φ");
  car = car.replace(/g/g, "γ");
  car = car.replace(/h/g, "χ");
  car = car.replace(/j/g, "θ");
  car = car.replace(/k/g, "κ");
  car = car.replace(/l/g, "λ");
  car = car.replace(/ş/g, "σ");
  car = car.replace(/i/g, "η");
  car = car.replace(/z/g, "ζ");
  car = car.replace(/x/g, "ξ");
  car = car.replace(/c/g, "ς");
  car = car.replace(/v/g, "β");
  car = car.replace(/b/g, "β");
  car = car.replace(/n/g, "ν");
  car = car.replace(/m/g, "μ");
  car = car.replace(/ö/g, "ο");
  car = car.replace(/ç/g, "ς");
  car = car.replace(/Q/g, "Ψ");
  car = car.replace(/W/g, "Ω");
  car = car.replace(/E/g, "Ε");
  car = car.replace(/R/g, "Ρ");
  car = car.replace(/T/g, "Τ");
  car = car.replace(/Y/g, "Υ");
  car = car.replace(/U/g, "Υ");
  car = car.replace(/I/g, "Ι");
  car = car.replace(/O/g, "Ο");
  car = car.replace(/P/g, "Π");
  car = car.replace(/Ğ/g, "Γ");
  car = car.replace(/Ü/g, "Ϋ");
  car = car.replace(/A/g, "Α");
  car = car.replace(/S/g, "Σ");
  car = car.replace(/D/g, "Δ");
  car = car.replace(/F/g, "Φ");
  car = car.replace(/G/g, "Γ");
  car = car.replace(/H/g, "Χ");
  car = car.replace(/J/g, "Θ");
  car = car.replace(/K/g, "Κ");
  car = car.replace(/L/g, "Λ");
  car = car.replace(/Ş/g, "Σ");
  car = car.replace(/İ/g, "Η");
  car = car.replace(/Z/g, "Ζ");
  car = car.replace(/X/g, "Ξ");
  car = car.replace(/C/g, "Σ");
  car = car.replace(/V/g, "Β");
  car = car.replace(/B/g, "Β");
  car = car.replace(/N/g, "Ν");
  car = car.replace(/M/g, "Μ");
  car = car.replace(/Ö/g, "Ο");
  car = car.replace(/Ç/g, "Σ");
  
  car = car.replace(/(á|α´)/g, "ά");
  car = car.replace(/(é|ε´)/g, "έ");
  car = car.replace(/(í|ι´)/g, "ί");
  car = car.replace(/η´/g, "ή");
  car = car.replace(/(ó|ο´)/g, "ό");
  car = car.replace(/(ú|ý|υ´)/g, "ύ");
  car = car.replace(/(ẃ|ω´)/g, "ώ");
  car = car.replace(/(Á|Α´)/g, "Ά");
  car = car.replace(/(É|Ε´)/g, "Έ");
  car = car.replace(/(Í|Ι´)/g, "Ί");
  car = car.replace(/Η´/g, "Ή");
  car = car.replace(/(Ó|Ο´)/g, "Ό");
  car = car.replace(/(Ú|Ý|Υ´)/g, "Ύ");
  car = car.replace(/(Ẃ|Ω´)/g, "Ώ");
  
  car = car.replace(/(ï|ι¨)/g, "ϊ");
  car = car.replace(/(Ï|Ι¨)/g, "Ϊ");
  car = car.replace(/(ÿ|υ¨)/g, "ϋ");
  car = car.replace(/(Ÿ|Υ¨)/g, "Ϋ");
  
  car = car.replace(/ϊ´/g, "ΐ");
  car = car.replace(/ϋ´/g, "ΰ");
  
  car = car.replace(/ί(\u002a|\u005c)/g, "ή");
  car = car.replace(/Ί(\u002a|\u005c)/g, "Ή");
  car = car.replace(/ή(\u002a|\u005c)/g, "ί");
  car = car.replace(/Ή(\u002a|\u005c)/g, "Ί");
  
  car = car.replace(/τ(\u002a|\u005c)/g, "θ");
  car = car.replace(/Τ(\u002a|\u005c)/g, "Θ");
  car = car.replace(/θ(\u002a|\u005c)/g, "τ");
  car = car.replace(/Θ(\u002a|\u005c)/g, "Τ");
  
  car = car.replace(/σ(\u002a|\u005c)/g, "ς");
  car = car.replace(/ς(\u002a|\u005c)/g, "σ");
  
  car = car.replace(/π(\u002a|\u005c)/g, "ψ");
  car = car.replace(/Π(\u002a|\u005c)/g, "Ψ");
  car = car.replace(/ψ(\u002a|\u005c)/g, "π");
  car = car.replace(/Ψ(\u002a|\u005c)/g, "Π");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
