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
 
 car = car.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1ΠΣ");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 ΠΣ");
 car = car.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "ΠΣ $1$2");
 car = car.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "ΠΣ$1");
 car = car.replace(/Ψ/g, "Πσ");
 car = car.replace(/ψ/g, "πσ");
 
 car = car.replace(/(\p{Lu}|\p{Mn})Ξ/ug, "$1ΚΣ");
 car = car.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ξ/ug, "$1$2 ΚΣ");
 car = car.replace(/Ξ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "ΚΣ $1$2");
 car = car.replace(/Ξ(\p{Lu}|\p{Mn})/ug, "ΚΣ$1");
 car = car.replace(/Ξ/g, "Κσ");
 car = car.replace(/ξ/g, "κσ");
 
 car = car.replace(/Α(Ο|Ε|Υ)?Ι/g, "Ε");
 car = car.replace(/Α(ο|ε|υ)?ι/g, "Ε");
 car = car.replace(/α(ο|ε|υ)?ι/g, "ε");
 
 car = car.replace(/(Ο|Ε|Υ)(Ο|Ε|Υ)?Ι/g, "Ι");
 car = car.replace(/(Ο|Ε|Υ)(ο|ε|υ)?ι/g, "Ι");
 car = car.replace(/(ο|ε|υ)(ο|ε|υ)?ι/g, "ι");
 
 car = car.replace(/Γ(Ε|Ι|Η|Υ)(Α|Ο|Ω)/g, "Y$2");
 car = car.replace(/Γ(ε|ι|η|υ)(α|ο|ω)/g, "Y$2");
 car = car.replace(/γ(ε|ι|η|υ)(α|ο|ω)/g, "y$2");
 
 car = car.replace(/Γ(Ε|Ι|Η|Υ|ε|ι|η|υ)/g, "Y$1");
 car = car.replace(/γ(ε|ι|η|υ)/g, "y$1");

 car = car.replace(/(Β|Б|Γ|Δ|Д|Ζ|Κ|Λ|Μ|Ν|Π|Ρ|Σ|Τ|Φ|Χ)(Β|Б|Γ|Δ|Д|Ζ|Κ|Λ|Μ|Ν|Π|Ρ|Σ|Τ|Φ|Χ)(Ι|Η|Υ)(Α|Ε|Ι|Η|Ο|Ω)/g, "$1$2$3Y$4");
 car = car.replace(/(Β|Б|Γ|Δ|Д|Ζ|Κ|Λ|Μ|Ν|Π|Ρ|Σ|Τ|Φ|Χ|β|б|γ|δ|д|ζ|κ|λ|μ|ν|π|ρ|σ|τ|φ|χ)(β|б|γ|δ|д|ζ|κ|λ|μ|ν|π|ρ|σ|τ|φ|χ)(ι|η|υ)(α|ε|ι|η|ο|ω)/g, "$1$2$3y$4");
 car = car.replace(/(Ι|Η|Υ)(Α|Ε|Ι|Η|Ο|Ω|α|ε|ι|η|ο|ω)/g, "Y$2");
 car = car.replace(/(ι|η|υ)(α|ε|ι|η|ο|ω)/g, "y$2");

 car = car.replace(/(Α|Ε|Ι|Η|Υ|Ο|Ω)(\u0301)?(Ι|Η|Υ)((?!\u0301))/g, "$1$2Y$4");
 car = car.replace(/(Α|Ε|Ι|Η|Υ|Ο|Ω|α|ε|ι|ο|ω)(\u0301)?(ι|η|υ)((?!\u0301))/g, "$1$2y$4");
 
 car = car.replace(/Ο(U|u)/g, "U");
 car = car.replace(/οu/g, "u");
 
 car = car.replace(/Τ(Σ|σ|ς)/g, "Ç");
 car = car.replace(/τ(σ|ς)/g, "ç");
 
 car = car.replace(/Τ(Ζ|ζ)/g, "C");
 car = car.replace(/τζ/g, "c");
 
 car = car.replace(/(\p{Lu}|\p{Mn})ΓΚ/ug, "$1ΝΓ");
 car = car.replace(/(\p{Ll}|\p{Mn})γκ/ug, "$1νγ");
 car = car.replace(/Γ(Κ|κ)/ug, "Γ");
 car = car.replace(/γκ/ug, "γ");

 car = car.replace(/Α/g, "A");
 car = car.replace(/Β/g, "V");
 car = car.replace(/Б/g, "B");
 car = car.replace(/Γ/g, "G");
 car = car.replace(/Δ/g, "D");
 car = car.replace(/Д/g, "D");
 car = car.replace(/Ε/g, "E");
 car = car.replace(/Ζ/g, "Z");
 car = car.replace(/Η/g, "İ");
 car = car.replace(/Θ/g, "T");
 car = car.replace(/Ι/g, "İ");
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
 car = car.replace(/Υ/g, "İ");
 car = car.replace(/Φ/g, "F");
 car = car.replace(/Χ/g, "H");
 car = car.replace(/Ω/g, "O");
 car = car.replace(/α/g, "a");
 car = car.replace(/β/g, "v");
 car = car.replace(/б/g, "b");
 car = car.replace(/γ/g, "g");
 car = car.replace(/δ/g, "d");
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
 car = car.replace(/(\u0301|\u0308)/g, "");
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
