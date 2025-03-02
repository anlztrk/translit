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

 car = car.replace(/ΟΥ/g, "ΟU");
 car = car.replace(/Ου/g, "Οu");
 car = car.replace(/ου/g, "οu");
 
 car = car.replace(/Μ(Π|π)/g, "\u200cБ");
 car = car.replace(/μπ/g, "\u200cб");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/ug, "$1$2ΜБ$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(\p{Lu}|\p{Mn})/ug, "$1$2ΜΠ$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ|α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2Μб$3");  
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(\p{L}|\p{Mn})/ug, "$1$2Μπ$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?\u200cб(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2μб$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)\u200cб(\p{L}|\p{Mn})/ug, "$1$2μπ$3");
 car = car.replace(/\u200c/g, "");
 
 car = car.replace(/Ν(Τ|τ)/g, "\u200cД");
 car = car.replace(/ντ/g, "\u200cд");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/ug, "$1$2ΝД$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(\p{Lu}|\p{Mn})/ug, "$1$2ΝΤ$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ|α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2Νд$3");  
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(\p{L}|\p{Mn})/ug, "$1$2Ντ$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?\u200cд(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2νд$3");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?\u200cд(\p{L}|\p{Mn})/ug, "$1$2ντ$3");
 car = car.replace(/\u200c/g, "");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1PS");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 PS");
 car = car.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2");
 car = car.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "PS$1");
 car = car.replace(/Ψ/g, "Ps");
 car = car.replace(/ψ/g, "ps");

 car = car.replace(/(\p{Lu}|\p{Mn})Δ/ug, "$1DH");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Δ/ug, "$1$2 DH");
 car = car.replace(/Δ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "DH $1$2");
 car = car.replace(/Δ(\p{Lu}|\p{Mn})/ug, "DH$1");
 car = car.replace(/Δ/g, "Dh");
 car = car.replace(/δ/g, "dh");

 car = car.replace(/(\p{Lu}|\p{Mn})Θ/ug, "$1TH");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Θ/ug, "$1$2 TH");
 car = car.replace(/Θ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2");
 car = car.replace(/Θ(\p{Lu}|\p{Mn})/ug, "TH$1");
 car = car.replace(/Θ/g, "Th");
 car = car.replace(/θ/g, "th");
 
 car = car.replace(/Α(Ο|Ε|Υ)?Ι/g, "Ε");
 car = car.replace(/Α(ο|ε|υ)?ι/g, "Ε");
 car = car.replace(/α(ο|ε|υ)?ι/g, "ε");
 
 car = car.replace(/(Ο|Ε|Υ)(Ο|Ε|Υ)?Ι/g, "Ι");
 car = car.replace(/(Ο|Ε|Υ)(ο|ε|υ)?ι/g, "Ι");
 car = car.replace(/(ο|ε|υ)(ο|ε|υ)?ι/g, "ι");
 
 car = car.replace(/Γ(Ε|Ι|Η|Υ|ε|ι|η|υ)/g, "Y$1");
 car = car.replace(/γ(ε|ι|η|υ)/g, "y$1");
  
 car = car.replace(/(\p{Lu}|\p{Mn})ΓΚ/ug, "$1ΝΓ");
 car = car.replace(/(\p{Ll}|\p{Mn})γκ/ug, "$1νγ");
 car = car.replace(/Γ(Κ|κ)/ug, "Γ");
 car = car.replace(/γκ/ug, "γ");

 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?Χ/ug, "$1$2ΚΧ\u200c");
 car = car.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?χ/ug, "$1$2κχ\u200c");
 car = car.replace(/ΚΧ\u200c(Α|Ε|Ι|Η|Ο|Ω|Υ)/g, "Χ$1");
 car = car.replace(/κχ\u200c(α|ε|ι|η|ο|ω|υ)/g, "χ$1");
 car = car.replace(/\u200c/g, "");
 
 car = car.replace(/Ο(U|u)/g, "U");
 car = car.replace(/οu/g, "u");
                   
 car = car.replace(/Α/g, "A");
 car = car.replace(/Β/g, "V");
 car = car.replace(/Б/g, "B");
 car = car.replace(/Γ/g, "G");
 car = car.replace(/Д/g, "D");
 car = car.replace(/Ε/g, "E");
 car = car.replace(/Ζ/g, "Z");
 car = car.replace(/Η/g, "I");
 car = car.replace(/Θ/g, "T");
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
 car = car.replace(/б/g, "b");
 car = car.replace(/γ/g, "g");
 car = car.replace(/д/g, "d");
 car = car.replace(/ε/g, "e");
 car = car.replace(/ζ/g, "z");
 car = car.replace(/η/g, "i");
 car = car.replace(/θ/g, "t");
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
