var car;
function cyrlat () {
car = document.transcription.text1.value;
 car = car.normalize('NFD');
 car = car.replace(/(\p{L}|\p{Mn})\u0308/ug, "\u2060$1\u0308");
 
 car = car.replace(/(Α|Ε|Η)Υ(\u0301)?(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/g, "$1Β$2$3");
 car = car.replace(/(Α|Ε|Η|α|ε|η)υ(\u0301)?(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/g, "$1β$2$3");
 car = car.replace(/(Α|Ε|Η)(\u0301)?Υ/g, "$1$2Φ");
 car = car.replace(/(Α|Ε|Η|α|ε|η)(\u0301)?υ/g, "$1$2φ");
 
 car = car.replace(/(Β|β|Φ|φ)\u0301/g, "\u0301$1");
 
 car = car.replace(/Γ(Γ|Ξ|Χ|γ|ξ|χ)/g, "Ν$1");
 car = car.replace(/γ(γ|ξ|χ)/g, "ν$1");

 car = car.replace(/Ο(Υ|υ)/g, "U");
 car = car.replace(/ου/g, "u");
 
 car = car.replace(/Μ(Π|π)/g, "\u200cB");
 car = car.replace(/μπ/g, "\u200cb");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cB(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/ug, "$1MB$2");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cB(\p{Lu}|\p{Mn})/ug, "$1MP$2");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cB(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ|α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1Mb$2");  
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cB(\p{L}|\p{Mn})/ug, "$1Mp$2");
 car = car.replace(/(\p{L}|\p{Mn})\u200cb(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1mb$2");
 car = car.replace(/(\p{L}|\p{Mn})\u200cb(\p{L}|\p{Mn})/ug, "$1mp$2");
 car = car.replace(/\u200c/g, "");
 
 car = car.replace(/Ν(Τ|τ)/g, "\u200cD");
 car = car.replace(/ντ/g, "\u200cd");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cD(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/ug, "$1ND$2");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cD(\p{Lu}|\p{Mn})/ug, "$1NT$2");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cD(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ|α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1Nd$2");  
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cD(\p{L}|\p{Mn})/ug, "$1Nt$2");
 car = car.replace(/(\p{L}|\p{Mn})\u200cd(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1nd$2");
 car = car.replace(/(\p{L}|\p{Mn})\u200cd(\p{L}|\p{Mn})/ug, "$1nt$2");
 car = car.replace(/\u200c/g, "");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Θ/ug, "$1TH");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Θ/ug, "$1$2 TH");
 car = car.replace(/Θ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2");
 car = car.replace(/Θ(\p{Lu}|\p{Mn})/ug, "TH$1");
 car = car.replace(/Θ/g, "Th");
 car = car.replace(/θ/g, "th");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Δ/ug, "$1DH");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Δ/ug, "$1$2 DH");
 car = car.replace(/Δ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "DH $1$2");
 car = car.replace(/Δ(\p{Lu}|\p{Mn})/ug, "DH$1");
 car = car.replace(/Δ/g, "Dh");
 car = car.replace(/δ/g, "dh");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1PS");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 PS");
 car = car.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2");
 car = car.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "PS$1");
 car = car.replace(/Ψ/g, "Ps");
 car = car.replace(/ψ/g, "ps");
 
 car = car.replace(/Α(\u0301)?(Ι|ι)/g, "E$1");
 car = car.replace(/α(\u0301)?ι/g, "e$1");

 car = car.replace(/(Ε|Η|Ο|Υ|E)(\u0301)?(Ι|ι)/g, "$3$2");
 car = car.replace(/(ε|η|ο|υ|e)(\u0301)?ι/g, "ι$2");
 
 car = car.replace(/Α(\u0301)?(Ι|ι)/g, "E$1");
 car = car.replace(/α(\u0301)?ι/g, "e$1");
 
 car = car.replace(/(Ε|Η|Ο|Υ|E)(\u0301)?(Ι|ι)/g, "$3$2");
 car = car.replace(/(ε|η|ο|υ|e)(\u0301)?ι/g, "ι$2");
 
 car = car.replace(/Γ(Ε|Η|Ι|Υ|E|I)(Α|Ο|Ω|U)/g, "Y$2");
 car = car.replace(/Γ(ε|η|ι|υ|e|i)(α|ο|ω|u)/g, "Y$2");
 car = car.replace(/γ(ε|η|ι|υ|e|i)(α|ο|ω|u)/g, "y$2");
 car = car.replace(/Γ(Ε|Η|Ι|Υ|E|I|ε|η|ι|υ|e|i)/g, "Y$1");
 car = car.replace(/γ(ε|η|ι|υ|e|i)/g, "y$1");

 car = car.replace(/Γ(Κ|κ)/g, "G");
 car = car.replace(/γκ/g, "g");

 car = car.replace(/Α/g, "A");
 car = car.replace(/Β/g, "V");
 car = car.replace(/Γ/g, "G");
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
 car = car.replace(/Υ/g, "I");
 car = car.replace(/Φ/g, "F");
 car = car.replace(/Χ/g, "H");
 car = car.replace(/Ω/g, "O");
 car = car.replace(/α/g, "a");
 car = car.replace(/β/g, "v");
 car = car.replace(/γ/g, "g");
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
 car = car.replace(/υ/g, "i");
 car = car.replace(/φ/g, "f");
 car = car.replace(/χ/g, "h");
 car = car.replace(/ω/g, "o");
 car = car.replace(/(\u003b|\u037e)/g, "\u003f");
 car = car.normalize('NFC');

 car = car.replace(/\u2060/g, "");
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
