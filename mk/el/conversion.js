
var car;
function latcyr () {
}
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/ý/g, "ού");

  car = car.replace(/а/g, "α");
  car = car.replace(/б/g, "β");
  car = car.replace(/в/g, "βυ");
  car = car.replace(/г/g, "γ");
  car = car.replace(/ѓ/g, "γυ");
  car = car.replace(/д/g, "δ");
  car = car.replace(/е/g, "ε");
  car = car.replace(/ѐ/g, "ὲ");
  car = car.replace(/ж/g, "ζυ");
  car = car.replace(/з/g, "ζ");
  car = car.replace(/ѕ/g, "τζ"); 
  car = car.replace(/и/g, "ι");
  car = car.replace(/ѝ/g, "ὶ");
  car = car.replace(/ј/g, "ι");
  car = car.replace(/к/g, "κ");
  car = car.replace(/л/g, "λ");
  car = car.replace(/љ/g, "λυ");
  car = car.replace(/м/g, "μ");
  car = car.replace(/н/g, "ν");
  car = car.replace(/њ/g, "νυ");
  car = car.replace(/о/g, "ο");
  car = car.replace(/п/g, "π");
  car = car.replace(/р/g, "ρ");
  car = car.replace(/с/g, "ς");
  car = car.replace(/т/g, "τ");
  car = car.replace(/ќ/g, "κυ");
  car = car.replace(/у/g, "ου");
  car = car.replace(/ф/g, "φ");
  car = car.replace(/х/g, "χ");
  car = car.replace(/ц/g, "τς");
  car = car.replace(/ч/g, "τσυ");
  car = car.replace(/џ/g, "τζυ");
  car = car.replace(/ш/g, "συ");
  car = car.replace(/А/g, "Α");
  car = car.replace(/Б/g, "Β");
  car = car.replace(/В/g, "ΒΥ");
  car = car.replace(/Г/g, "Γ");
  car = car.replace(/Ѓ/g, "ΓΥ");
  car = car.replace(/Д/g, "Δ");
  car = car.replace(/Е/g, "Ε");
  car = car.replace(/Ѐ/g, "Ὲ");
  car = car.replace(/Ж/g, "ΖΥ");
  car = car.replace(/З/g, "Ζ");
  car = car.replace(/Ѕ/g, "Τζ"); 
  car = car.replace(/И/g, "Ι");
  car = car.replace(/Ѝ/g, "Ὶ");
  car = car.replace(/Ј/g, "Ι");
  car = car.replace(/К/g, "Κ");
  car = car.replace(/Л/g, "Λ");
  car = car.replace(/Љ/g, "Λυ");
  car = car.replace(/М/g, "Μ");
  car = car.replace(/Н/g, "Ν");
  car = car.replace(/Њ/g, "Νυ");
  car = car.replace(/О/g, "Ο");
  car = car.replace(/П/g, "Π");
  car = car.replace(/Р/g, "Ρ");
  car = car.replace(/С/g, "Σ");
  car = car.replace(/Т/g, "Τ");
  car = car.replace(/Ќ/g, "Κυ");
  car = car.replace(/У/g, "Ου");
  car = car.replace(/Ф/g, "Φ");
  car = car.replace(/Х/g, "Χ");
  car = car.replace(/Ц/g, "Τς");
  car = car.replace(/Ч/g, "Τσυ");
  car = car.replace(/Џ/g, "Τζυ");
  car = car.replace(/Ш/g, "Συ");
  
  car = car.replace(/ΟΥ([Ιι])/g, "ΟΥ\u200c$1");
  car = car.replace(/([Οο])υι/g, "$1υι");

  car = car.replace(/Υ[Ιι]/g, "Η");
  car = car.replace(/υι/g, "η");

  car = car.replace(/Π[Σςσ]/g, "Ψ");
  car = car.replace(/π[ςσ]/g, "ψ");

  car = car.replace(/Κ[Σςσ]/g, "Ξ");
  car = car.replace(/κ[ςσ]/g, "ξ");

  car = car.replace(/\u200c/g, "");

  car = car.replace(/ς([αβγδεζηθικλμνξοπρσςτυφχψω])/g, "σ$1");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
