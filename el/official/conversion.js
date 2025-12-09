function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/(\p{L}|\p{Mn})\u0308/ug, "\u2060$1\u0308")

		.replace(/(Α|Ε|Η)Υ(\u0301)?(Α|Ε|Ι|Η|Ο|Ω|Υ|Β|Γ|Δ|Ζ|Λ|Μ|Ν|Ρ)/g, "$1Β$2$3")
		.replace(/(Α|Ε|Η|α|ε|η)υ(\u0301)?(α|ε|ι|η|ο|ω|υ|β|γ|δ|ζ|λ|μ|ν|ρ)/g, "$1β$2$3")
		.replace(/(Α|Ε|Η)(\u0301)?Υ/g, "$1$2Φ")
		.replace(/(Α|Ε|Η|α|ε|η)(\u0301)?υ/g, "$1$2φ")

		.replace(/(Β|β|Φ|φ)\u0301/g, "\u0301$1")

		.replace(/Γ(Γ|Ξ|Χ|γ|ξ|χ)/g, "Ν$1")
		.replace(/γ(γ|ξ|χ)/g, "ν$1")

		.replace(/ΟΥ/g, "OU")
		.replace(/Ου/g, "Ou")
		.replace(/ου/g, "οu")

		.replace(/Μ(Π|π)/g, "\u200cB")
		.replace(/μπ/g, "\u200cb")
		.replace(/(\p{Lu}|\p{Mn})\u200cB(\p{Lu}|\p{Mn})/ug, "$1MP$2")
		.replace(/(\p{Lu}|\p{Mn})\u200cB(\p{L}|\p{Mn})/ug, "$1Mp$2")
		.replace(/(\p{L}|\p{Mn})\u200cb(\p{L}|\p{Mn})/ug, "$1mp$2")
		.replace(/\u200c/g, "")

		.replace(/(\p{Lu}|\p{Mn})Θ/ug, "$1TH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Θ/ug, "$1$2 TH")
		.replace(/Θ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2")
		.replace(/Θ(\p{Lu}|\p{Mn})/ug, "TH$1")
		.replace(/Θ/g, "Th")
		.replace(/θ/g, "th")

		.replace(/(\p{Lu}|\p{Mn})Χ/ug, "$1CH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Χ/ug, "$1$2 CH")
		.replace(/Χ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "CH $1$2")
		.replace(/Χ(\p{Lu}|\p{Mn})/ug, "CH$1")
		.replace(/Χ/g, "Ch")
		.replace(/χ/g, "ch")

		.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1PS")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 PS")
		.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2")
		.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "PS$1")
		.replace(/Ψ/g, "Ps")
		.replace(/ψ/g, "ps")

		.replace(/Α/g, "A")
		.replace(/Β/g, "V")
		.replace(/Γ/g, "G")
		.replace(/Δ/g, "D")
		.replace(/Ε/g, "E")
		.replace(/Ζ/g, "Z")
		.replace(/Η/g, "I")
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
		.replace(/Υ/g, "Y")
		.replace(/Φ/g, "F")
		.replace(/Ω/g, "O")
		.replace(/α/g, "a")
		.replace(/β/g, "v")
		.replace(/γ/g, "g")
		.replace(/δ/g, "d")
		.replace(/ε/g, "e")
		.replace(/ζ/g, "z")
		.replace(/η/g, "i")
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
		.replace(/υ/g, "y")
		.replace(/φ/g, "f")
		.replace(/ω/g, "o")
		.replace(/(\u003b|\u037e)/g, "\u003f")
		.normalize('NFC')

		.replace(/\u2060/g, "");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}