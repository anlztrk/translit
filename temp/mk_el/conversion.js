
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ќ/g, "қ");
  car = car.replace(/ѓ/g, "ғ");
  car = car.replace(/Ќ/g, "Қ");
  car = car.replace(/Ѓ/g, "Ғ");
  car = car.normalize('NFD'); 
  car = car.replace(/а/g, "α");
  car = car.replace(/б/g, "β");
  car = car.replace(/в/g, "˚φ");
  car = car.replace(/г/g, "γ");
  car = car.replace(/д/g, "δ");
  car = car.replace(/ғ/g, "ˈγ");
  car = car.replace(/е/g, "ε");
  car = car.replace(/ж/g, "˟ς");
  car = car.replace(/з/g, "˚ς");
  car = car.replace(/ѕ/g, "ζ"); 
  car = car.replace(/и/g, "ι");
  car = car.replace(/ј/g, "η");
  car = car.replace(/к/g, "κ");
  car = car.replace(/л/g, "λ");
  car = car.replace(/љ/g, "ˈλ");
  car = car.replace(/м/g, "μ");
  car = car.replace(/н/g, "ν");
  car = car.replace(/њ/g, "ˈν");
  car = car.replace(/о/g, "ο");
  car = car.replace(/п/g, "π");
  car = car.replace(/р/g, "ρ");
  car = car.replace(/с/g, "ς");
  car = car.replace(/т/g, "τ");
  car = car.replace(/қ/g, "ˈκ");
  car = car.replace(/у/g, "υ");
  car = car.replace(/ф/g, "φ");
  car = car.replace(/х/g, "χ");
  car = car.replace(/ц/g, "˚ζ");
  car = car.replace(/ч/g, "˟ζ");
  car = car.replace(/џ/g, "ˈζ");
  car = car.replace(/ш/g, "ˈς");
  car = car.replace(/А/g, "Α");
  car = car.replace(/Б/g, "Β");
  car = car.replace(/В/g, "˚Φ");
  car = car.replace(/Г/g, "Γ");
  car = car.replace(/Д/g, "Δ");
  car = car.replace(/Ғ/g, "ˈΓ");
  car = car.replace(/Е/g, "Ε");
  car = car.replace(/Ж/g, "˟Σ");
  car = car.replace(/З/g, "˚Σ");
  car = car.replace(/Ѕ/g, "Ζ"); 
  car = car.replace(/И/g, "Ι");
  car = car.replace(/Ј/g, "Η");
  car = car.replace(/К/g, "Κ");
  car = car.replace(/Л/g, "Λ");
  car = car.replace(/Љ/g, "ˈΛ");
  car = car.replace(/М/g, "Μ");
  car = car.replace(/Н/g, "Ν");
  car = car.replace(/Њ/g, "ˈΝ");
  car = car.replace(/О/g, "Ο");
  car = car.replace(/П/g, "Π");
  car = car.replace(/Р/g, "Ρ");
  car = car.replace(/С/g, "Σ");
  car = car.replace(/Т/g, "Τ");
  car = car.replace(/Қ/g, "ˈΚ");
  car = car.replace(/У/g, "Υ");
  car = car.replace(/Ф/g, "Φ");
  car = car.replace(/Х/g, "Χ");
  car = car.replace(/Ц/g, "˚Ζ");
  car = car.replace(/Ч/g, "˟Ζ");
  car = car.replace(/Џ/g, "ˈΖ");
  car = car.replace(/Ш/g, "ˈΣ");

  car = car.replace(/ς(\p{Lowercase})/ug, "σ$1");

  car = car.replace(/Κ[Σσς]/g, "Ξ");
  car = car.replace(/κ[σς]/g, "ξ");
  car = car.replace(/Π[Σσς]/g, "Ψ");
  car = car.replace(/π[σς]/g, "ψ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
