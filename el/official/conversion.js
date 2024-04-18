var car;
function cyrlat () {
car = document.transcription.text1.value;
 car = car.normalize('NFD');
 car = car.replace(/(Α|Ε|Η)Υ(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/g, "$1Φ$2");
 car = car.replace(/(Α|Ε|Η|α|ε|η)υ(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/g, "$1φ$2");
 car = car.replace(/(Α|Ε|Η)Υ/g, "$1Β");
 car = car.replace(/(Α|Ε|Η|α|ε|η)υ/g, "$1β");
 
 car = car.replace(/(Β|β|Φ|φ)\u0301/g, "\u0301$1");
 
 car = car.replace(/Γ(Γ|Κ|Ξ|γ|κ|ξ)/g, "Ν$1");
 car = car.replace(/γ(γ|κ|ξ)/g, "ν$1");
 car = car.replace(/ου/g, "οu");
 car = car.replace(/Μ(Π|π)/g, "B");
 car = car.replace(/μπ/g, "b");
 car = car.replace(/(\p{Lu})B(\p{Lu})/ug, "$1MP$2");
 car = car.replace(/(\p{Lu})B(\p{L})/ug, "$1Mp$2");
 car = car.replace(/(\p{L})b(\p{L})/ug, "$1mp$2");
 
 car = car.replace(/(\p{Uppercase})Θ/ug, "$1TH");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Θ/ug, "$1$2 TH");
 car = car.replace(/Θ (\p{Uppercase})(\p{Uppercase})/ug, "TH $1$2");
 car = car.replace(/Θ(\p{Uppercase})/ug, "TH$1");
 car = car.replace(/Θ/g, "Th");
 car = car.replace(/θ/g, "th");
 
 car = car.replace(/(\p{Uppercase})Χ/ug, "$1CH");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Χ/ug, "$1$2 CH");
 car = car.replace(/Χ (\p{Uppercase})(\p{Uppercase})/ug, "CH $1$2");
 car = car.replace(/Χ(\p{Uppercase})/ug, "CH$1");
 car = car.replace(/Χ/g, "Ch");
 car = car.replace(/χ/g, "ch");
 
 car = car.replace(/(\p{Uppercase})Ψ/ug, "$PS");
 car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ψ/ug, "$1$2 PS");
 car = car.replace(/Ψ (\p{Uppercase})(\p{Uppercase})/ug, "PS $1$2");
 car = car.replace(/Ψ(\p{Uppercase})/ug, "PS$1");
 car = car.replace(/Ψ/g, "Ps");
 car = car.replace(/ψ/g, "ps");

 car = car.replace(/Α/g, "A");
 car = car.replace(/Β/g, "V");
 car = car.replace(/Γ/g, "G");
 car = car.replace(/Δ/g, "D");
 car = car.replace(/Ε/g, "E");
 car = car.replace(/Ζ/g, "Z");
 car = car.replace(/Η/g, "I");
 car = car.replace(/Ι/g, "I");
 car = car.replace(/Κ/g, "K");
 car = car.replace(/Λ/g, "L");
 car = car.replace(/Μ/g, "M");
 car = car.replace(/Ν/g, "N");
 car = car.replace(/Ξ/g, "X");
 car = car.replace(/Ο/g, "O");
 car = car.replace(/Π/g, "P");
 car = car.replace(/Ρ/g, "R");
 car = car.replace(/Σ/g, "S");
 car = car.replace(/Τ/g, "T");
 car = car.replace(/Υ/g, "Y");
 car = car.replace(/Φ/g, "F");
 car = car.replace(/Ω/g, "O");
 car = car.replace(/α/g, "a");
 car = car.replace(/β/g, "v");
 car = car.replace(/γ/g, "g");
 car = car.replace(/δ/g, "d");
 car = car.replace(/ε/g, "e");
 car = car.replace(/ζ/g, "z");
 car = car.replace(/η/g, "i");
 car = car.replace(/ι/g, "i");
 car = car.replace(/κ/g, "k");
 car = car.replace(/λ/g, "l");
 car = car.replace(/μ/g, "m");
 car = car.replace(/ν/g, "n");
 car = car.replace(/ξ/g, "x");
 car = car.replace(/ο/g, "o");
 car = car.replace(/π/g, "p");
 car = car.replace(/ρ/g, "r");
 car = car.replace(/σ/g, "s");
 car = car.replace(/ς/g, "s");
 car = car.replace(/τ/g, "t");
 car = car.replace(/υ/g, "y");
 car = car.replace(/φ/g, "f");
 car = car.replace(/ω/g, "o");
 car = car.replace(/\u037e/g, "\u003f");
 car = car.normalize('NFC');
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
