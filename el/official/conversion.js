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

 car = car.replace(/ΟΥ/g, "OU");
 car = car.replace(/Ου/g, "Ou");
 car = car.replace(/ου/g, "οu");
 
 car = car.replace(/Μ(Π|π)/g, "\u200cB");
 car = car.replace(/μπ/g, "\u200cb");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cB(\p{Lu}|\p{Mn})/ug, "$1MP$2");
 car = car.replace(/(\p{Lu}|\p{Mn})\u200cB(\p{L}|\p{Mn})/ug, "$1Mp$2");
 car = car.replace(/(\p{L}|\p{Mn})\u200cb(\p{L}|\p{Mn})/ug, "$1mp$2");
 car = car.replace(/\u200c/g, "");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Θ/ug, "$1TH");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Θ/ug, "$1$2 TH");
 car = car.replace(/Θ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2");
 car = car.replace(/Θ(\p{Lu}|\p{Mn})/ug, "TH$1");
 car = car.replace(/Θ/g, "Th");
 car = car.replace(/θ/g, "th");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Χ/ug, "$1CH");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Χ/ug, "$1$2 CH");
 car = car.replace(/Χ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "CH $1$2");
 car = car.replace(/Χ(\p{Lu}|\p{Mn})/ug, "CH$1");
 car = car.replace(/Χ/g, "Ch");
 car = car.replace(/χ/g, "ch");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1PS");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 PS");
 car = car.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2");
 car = car.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "PS$1");
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
 car = car.replace(/(\u003b|\u037e)/g, "\u003f");
 car = car.normalize('NFC');

 car = car.replace(/\u2060/g, "");
document.transcription.text2.value=car;
}
function latcyr () {
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
