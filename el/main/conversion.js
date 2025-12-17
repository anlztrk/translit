function topleft() {
	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})
		
		.replace(/Α/g, "A")
		.replace(/α/g, "a")
		.replace(/Β/g, "V")
		.replace(/β/g, "v")
		.replace(/Γ/g, "G")
		.replace(/γ/g, "g")
		.replace(/Δ/g, "D")
		.replace(/δ/g, "d")
		.replace(/Ε/g, "E")
		.replace(/ε/g, "e")
		.replace(/Ζ/g, "Z")
		.replace(/ζ/g, "z")
		.replace(/Η/g, "Î")
		.replace(/η/g, "î")
		.replace(/Θ/g, "Þ")
		.replace(/θ/g, "þ")
		.replace(/Ι/g, "I")
		.replace(/ι/g, "i")
		.replace(/Κ/g, "K")
		.replace(/κ/g, "k")
		.replace(/Λ/g, "L")
		.replace(/λ/g, "l")
		.replace(/Μ/g, "M")
		.replace(/μ/g, "m")
		.replace(/Ν/g, "N")
		.replace(/ν/g, "n")
		.replace(/Ξ/g, "X")
		.replace(/ξ/g, "x")
		.replace(/Ο/g, "O")
		.replace(/ο/g, "o")
		.replace(/Π/g, "P")
		.replace(/π/g, "p")
		.replace(/Ρ/g, "R")
		.replace(/ρ/g, "r")
		.replace(/Σ/g, "S")
		.replace(/σ/g, "ſ")
		.replace(/ς/g, "s")
		.replace(/Τ/g, "T")
		.replace(/τ/g, "t")
		.replace(/Υ/g, "Y")
		.replace(/υ/g, "y")
		.replace(/Φ/g, "F")
		.replace(/φ/g, "f")
		.replace(/Χ/g, "H")
		.replace(/χ/g, "h")
		.replace(/Ψ/g, "Ᵽ")
		.replace(/ψ/g, "ᵽ")
		.replace(/Ω/g, "Ô")
		.replace(/ω/g, "ô")
		
		.replace(/([AEÎ])Y\u0308/g, "$1Ÿ")
		.replace(/([AEÎaeî])y\u0308/g, "$1ÿ")
		.replace(/([AEÎ])(\u0301)?Y(\u0301)?([AEIÎOÔYBGDZLMNR])/g, "$1V$2$3")
		.replace(/([AEÎaeî])(\u0301)?y(\u0301)?(aeiîoôybgdzlmnr)/g, "$1v$2$3")
		.replace(/([AEÎ])Y/g, "$1F")
		.replace(/([AEÎaeî])y/g, "$1f")
		.replace(/Ÿ/g, "Y\u0308")
		.replace(/ÿ/g, "y\u0308")

		.replace(/([VvFf])\u0301/g, "\u0301$1")

		.replace(/G([GXHgxh])/g, "N$1")
		.replace(/g([gxh])/g, "n$1")

		.replace(/M([Pp])/g, "B")
		.replace(/μπ/g, "b")
		.replace(/([ABVGDEZÎÞIKLMNXOPRSTYFHⱣÔ])([\u0301\u0308])?B([ABVGDEZÎÞIKLMNXOPRSTYFHⱣÔ])/g, "$1$2MP$3")
		.replace(/([ABVGDEZÎÞIKLMNXOPRSTYFHⱣÔabvgdezîþiklmnxoprsſtyfhᵽô])([\u0301\u0308])?b([abvgdezîþiklmnxoprsſtyfhᵽô])/g, "$1$2mp$3")

		.replace(/(\p{Lu}|\p{Mn})H/ug, "$1CH\u200c")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) H/ug, "$1$2 CH\u200c")
		.replace(/H (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "CH\u200c $1$2")
		.replace(/H(\p{Lu}|\p{Mn})/ug, "CH\u200c$1")
		.replace(/H/g, "Ch\u200c")
		.replace(/h/g, "ch")
		.replace(/\u200c/g, "")

		.replace(/(\p{Lu}|\p{Mn})Þ/ug, "$1TH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Þ/ug, "$1$2 TH")
		.replace(/Þ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2")
		.replace(/Þ(\p{Lu}|\p{Mn})/ug, "TH$1")
		.replace(/Þ/g, "Th")
		.replace(/þ/g, "th")

		.replace(/(\p{Lu}|\p{Mn})Ᵽ/ug, "$1PS")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ᵽ/ug, "$1$2 PS")
		.replace(/Ᵽ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2")
		.replace(/Ᵽ(\p{Lu}|\p{Mn})/ug, "PS$1")
		.replace(/Ᵽ/g, "Ps")
		.replace(/ᵽ/g, "ps")

		.replace(/OY/g, "OU")
		.replace(/Oy/g, "Ou")
		.replace(/oy/g, "ou")

		.replace(/Î/g, "I")
		.replace(/î/g, "i")
		.replace(/Ô/g, "O")
		.replace(/ô/g, "o")		

		.replace(/ſ/g, "s")
		
		.replace(/(\u003b|\u037e)/g, "\u003f")

		.normalize('NFC')
	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value
			.replace(key, latinWords[key])
			.normalize('NFC');
	});
}

function topright() {
	document.transcription.text3.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/(\p{L}|\p{Mn})\u0308/ug, "\u2060$1\u0308")

		.replace(/(Α|Ε|Η)Υ(\u0301)?(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/g, "$1Β$2$3")
		.replace(/(Α|Ε|Η|α|ε|η)υ(\u0301)?(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/g, "$1β$2$3")
		.replace(/(Α|Ε|Η)(\u0301)?Υ/g, "$1$2Φ")
		.replace(/(Α|Ε|Η|α|ε|η)(\u0301)?υ/g, "$1$2φ")

		.replace(/(Β|β|Φ|φ)\u0301/g, "\u0301$1")

		.replace(/Γ(Γ|Ξ|Χ|γ|ξ|χ)/g, "Ν$1")
		.replace(/γ(γ|ξ|χ)/g, "ν$1")

		.replace(/ΟΥ/g, "ΟU")
		.replace(/Ου/g, "Οu")
		.replace(/ου/g, "οu")

		.replace(/Μ(Π|π)/g, "\u200cБ")
		.replace(/μπ/g, "\u200cб")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/ug, "$1$2ΜБ$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(\p{Lu}|\p{Mn})/ug, "$1$2ΜΠ$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ|α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2Μб$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cБ(\p{L}|\p{Mn})/ug, "$1$2Μπ$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?\u200cб(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2μб$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)\u200cб(\p{L}|\p{Mn})/ug, "$1$2μπ$3")
		.replace(/\u200c/g, "")

		.replace(/Ν(Τ|τ)/g, "\u200cД")
		.replace(/ντ/g, "\u200cд")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/ug, "$1$2ΝД$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(\p{Lu}|\p{Mn})/ug, "$1$2ΝΤ$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ|α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2Νд$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?\u200cД(\p{L}|\p{Mn})/ug, "$1$2Ντ$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?\u200cд(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/ug, "$1$2νд$3")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?\u200cд(\p{L}|\p{Mn})/ug, "$1$2ντ$3")
		.replace(/\u200c/g, "")

		.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1PS")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 PS")
		.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2")
		.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "PS$1")
		.replace(/Ψ/g, "Ps")
		.replace(/ψ/g, "ps")

		.replace(/(\p{Lu}|\p{Mn})Δ/ug, "$1DH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Δ/ug, "$1$2 DH")
		.replace(/Δ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "DH $1$2")
		.replace(/Δ(\p{Lu}|\p{Mn})/ug, "DH$1")
		.replace(/Δ/g, "Dh")
		.replace(/δ/g, "dh")

		.replace(/(\p{Lu}|\p{Mn})Θ/ug, "$1TH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Θ/ug, "$1$2 TH")
		.replace(/Θ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2")
		.replace(/Θ(\p{Lu}|\p{Mn})/ug, "TH$1")
		.replace(/Θ/g, "Th")
		.replace(/θ/g, "th")

		.replace(/Α(Ο|Ε|Υ)?Ι/g, "Ε")
		.replace(/Α(ο|ε|υ)?ι/g, "Ε")
		.replace(/α(ο|ε|υ)?ι/g, "ε")

		.replace(/(Ο|Ε|Υ)(Ο|Ε|Υ)?Ι/g, "Ι")
		.replace(/(Ο|Ε|Υ)(ο|ε|υ)?ι/g, "Ι")
		.replace(/(ο|ε|υ)(ο|ε|υ)?ι/g, "ι")

		.replace(/Γ(Ε|Ι|Η|Υ|ε|ι|η|υ)/g, "Y$1")
		.replace(/γ(ε|ι|η|υ)/g, "y$1")

		.replace(/(\p{Lu}|\p{Mn})ΓΚ/ug, "$1ΝΓ")
		.replace(/(\p{Ll}|\p{Mn})γκ/ug, "$1νγ")
		.replace(/Γ(Κ|κ)/ug, "Γ")
		.replace(/γκ/ug, "γ")

		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ)(\p{Mn})?Χ/ug, "$1$2ΚΧ\u200c")
		.replace(/(Α|Ε|Ι|Η|Ο|Ω|Υ|α|ε|ι|η|ο|ω|υ)(\p{Mn})?χ/ug, "$1$2κχ\u200c")
		.replace(/ΚΧ\u200c(Α|Ε|Ι|Η|Ο|Ω|Υ)/g, "Χ$1")
		.replace(/κχ\u200c(α|ε|ι|η|ο|ω|υ)/g, "χ$1")
		.replace(/\u200c/g, "")

		.replace(/Ο(U|u)/g, "U")
		.replace(/οu/g, "u")

		.replace(/Α/g, "A")
		.replace(/Β/g, "V")
		.replace(/Б/g, "B")
		.replace(/Γ/g, "G")
		.replace(/Д/g, "D")
		.replace(/Ε/g, "E")
		.replace(/Ζ/g, "Z")
		.replace(/Η/g, "I")
		.replace(/Θ/g, "T")
		.replace(/Ι/g, "I")
		.replace(/Κ/g, "K")
		.replace(/Λ/g, "L")
		.replace(/Μ/g, "M")
		.replace(/Ν/g, "N")
		.replace(/Ξ/g, "X")
		.replace(/Ο/g, "O")
		.replace(/Π/g, "P")
		.replace(/Ρ/g, "R")
		.replace(/Σ/g, "S")
		.replace(/Τ/g, "T")
		.replace(/Υ/g, "I")
		.replace(/Φ/g, "F")
		.replace(/Χ/g, "H")
		.replace(/Ω/g, "O")
		.replace(/α/g, "a")
		.replace(/β/g, "v")
		.replace(/б/g, "b")
		.replace(/γ/g, "g")
		.replace(/д/g, "d")
		.replace(/ε/g, "e")
		.replace(/ζ/g, "z")
		.replace(/η/g, "i")
		.replace(/θ/g, "t")
		.replace(/ι/g, "i")
		.replace(/κ/g, "k")
		.replace(/λ/g, "l")
		.replace(/μ/g, "m")
		.replace(/ν/g, "n")
		.replace(/ξ/g, "x")
		.replace(/ο/g, "o")
		.replace(/π/g, "p")
		.replace(/ρ/g, "r")
		.replace(/σ/g, "s")
		.replace(/ς/g, "s")
		.replace(/τ/g, "t")
		.replace(/υ/g, "i")
		.replace(/φ/g, "f")
		.replace(/χ/g, "h")
		.replace(/ω/g, "o")
		.replace(/(\u003b|\u037e)/g, "\u003f")
		.normalize('NFC')
		.replace(/\u2060/g, "");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}

function copy3() {
	navigator.clipboard.writeText(document.transcription.text3.value);
}
