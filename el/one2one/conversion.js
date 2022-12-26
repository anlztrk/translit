var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');

car = car.replace(/Α/g, "A");
car = car.replace(/α/g, "a");
car = car.replace(/Β/g, "B");
car = car.replace(/β/g, "b");
car = car.replace(/Γ/g, "G");
car = car.replace(/γ/g, "g");
car = car.replace(/Δ/g, "D");
car = car.replace(/δ/g, "d");
car = car.replace(/Ε/g, "E");
car = car.replace(/ε/g, "e");
car = car.replace(/Ζ/g, "Z");
car = car.replace(/ζ/g, "z");
car = car.replace(/Η/g, "Ê");
car = car.replace(/η/g, "ê");
car = car.replace(/Θ/g, "Þ");
car = car.replace(/θ/g, "þ");
car = car.replace(/Ι/g, "I");
car = car.replace(/ι/g, "i");
car = car.replace(/Ϊ/g, "Ï");
car = car.replace(/ϊ/g, "ï");
car = car.replace(/Κ/g, "K");
car = car.replace(/κ/g, "k");
car = car.replace(/Λ/g, "L");
car = car.replace(/λ/g, "l");
car = car.replace(/Μ/g, "M");
car = car.replace(/μ/g, "m");
car = car.replace(/Ν/g, "N");
car = car.replace(/ν/g, "n");
car = car.replace(/Ξ/g, "X");
car = car.replace(/ξ/g, "x");
car = car.replace(/Ο/g, "O");
car = car.replace(/ο/g, "o");
car = car.replace(/Π/g, "P");
car = car.replace(/π/g, "p");
car = car.replace(/Ρ/g, "R");
car = car.replace(/ρ/g, "r");
car = car.replace(/Σ/g, "S");
car = car.replace(/σ/g, "s");
car = car.replace(/ς/g, "ś");
car = car.replace(/Τ/g, "T");
car = car.replace(/τ/g, "t");
car = car.replace(/Υ/g, "Y");
car = car.replace(/υ/g, "y");
car = car.replace(/Ϋ/g, "Ÿ");
car = car.replace(/ϋ/g, "ÿ");
car = car.replace(/Φ/g, "F");
car = car.replace(/φ/g, "f");
car = car.replace(/Χ/g, "H");
car = car.replace(/χ/g, "h");
car = car.replace(/Ψ/g, "Ṕ");
car = car.replace(/ψ/g, "ṕ");
car = car.replace(/Ω/g, "Ô");
car = car.replace(/ω/g, "ô");


document.transcription.text2.value=car;
}
function latcyr () {
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}