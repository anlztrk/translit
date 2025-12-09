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

		.replace(/(\p{Lu}|\p{Mn})Ψ/ug, "$1ΠΣ")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ψ/ug, "$1$2 ΠΣ")
		.replace(/Ψ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "ΠΣ $1$2")
		.replace(/Ψ(\p{Lu}|\p{Mn})/ug, "ΠΣ$1")
		.replace(/Ψ/g, "Πσ")
		.replace(/ψ/g, "πσ")

		.replace(/(\p{Lu}|\p{Mn})Ξ/ug, "$1ΚΣ")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ξ/ug, "$1$2 ΚΣ")
		.replace(/Ξ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "ΚΣ $1$2")
		.replace(/Ξ(\p{Lu}|\p{Mn})/ug, "ΚΣ$1")
		.replace(/Ξ/g, "Κσ")
		.replace(/ξ/g, "κσ")

		.replace(/Α(Ο|Ε|Υ)?Ι/g, "Ε")
		.replace(/Α(ο|ε|υ)?ι/g, "Ε")
		.replace(/α(ο|ε|υ)?ι/g, "ε")

		.replace(/(Ο|Ε|Υ)(Ο|Ε|Υ)?Ι/g, "Ι")
		.replace(/(Ο|Ε|Υ)(ο|ε|υ)?ι/g, "Ι")
		.replace(/(ο|ε|υ)(ο|ε|υ)?ι/g, "ι")

		.replace(/Γ(Ε|Ι|Η|Υ)(Α|Ο|Ω)/g, "Y$2")
		.replace(/Γ(ε|ι|η|υ)(α|ο|ω)/g, "Y$2")
		.replace(/γ(ε|ι|η|υ)(α|ο|ω)/g, "y$2")

		.replace(/Γ(Ε|Ι|Η|Υ|ε|ι|η|υ)/g, "Y$1")
		.replace(/γ(ε|ι|η|υ)/g, "y$1")

		.replace(/(Β|Б|Γ|Δ|Д|Ζ|Κ|Λ|Μ|Ν|Π|Ρ|Σ|Τ|Φ|Χ)(Β|Б|Γ|Δ|Д|Ζ|Κ|Λ|Μ|Ν|Π|Ρ|Σ|Τ|Φ|Χ)(Ι|Η|Υ)(Α|Ε|Ι|Η|Ο|Ω)/g, "$1$2$3Y$4")
		.replace(/(Β|Б|Γ|Δ|Д|Ζ|Κ|Λ|Μ|Ν|Π|Ρ|Σ|Τ|Φ|Χ|β|б|γ|δ|д|ζ|κ|λ|μ|ν|π|ρ|σ|τ|φ|χ)(β|б|γ|δ|д|ζ|κ|λ|μ|ν|π|ρ|σ|τ|φ|χ)(ι|η|υ)(α|ε|ι|η|ο|ω)/g, "$1$2$3y$4")
		.replace(/(Ι|Η|Υ)(Α|Ε|Ι|Η|Ο|Ω|α|ε|ι|η|ο|ω)/g, "Y$2")
		.replace(/(ι|η|υ)(α|ε|ι|η|ο|ω)/g, "y$2")

		.replace(/(Α|Ε|Ι|Η|Υ|Ο|Ω)(\u0301)?(Ι|Η|Υ)((?!\u0301))/g, "$1$2Y$4")
		.replace(/(Α|Ε|Ι|Η|Υ|Ο|Ω|α|ε|ι|ο|ω)(\u0301)?(ι|η|υ)((?!\u0301))/g, "$1$2y$4")

		.replace(/Ο(U|u)/g, "U")
		.replace(/οu/g, "u")

		.replace(/Τ(Σ|σ|ς)/g, "Ç")
		.replace(/τ(σ|ς)/g, "ç")

		.replace(/Τ(Ζ|ζ)/g, "C")
		.replace(/τζ/g, "c")

		.replace(/(\p{Lu}|\p{Mn})ΓΚ/ug, "$1ΝΓ")
		.replace(/(\p{Ll}|\p{Mn})γκ/ug, "$1νγ")
		.replace(/Γ(Κ|κ)/ug, "Γ")
		.replace(/γκ/ug, "γ")

		.replace(/Α/g, "A")
		.replace(/Β/g, "V")
		.replace(/Б/g, "B")
		.replace(/Γ/g, "G")
		.replace(/Δ/g, "D")
		.replace(/Д/g, "D")
		.replace(/Ε/g, "E")
		.replace(/Ζ/g, "Z")
		.replace(/Η/g, "İ")
		.replace(/Θ/g, "T")
		.replace(/Ι/g, "İ")
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
		.replace(/Υ/g, "İ")
		.replace(/Φ/g, "F")
		.replace(/Χ/g, "H")
		.replace(/Ω/g, "O")
		.replace(/α/g, "a")
		.replace(/β/g, "v")
		.replace(/б/g, "b")
		.replace(/γ/g, "g")
		.replace(/δ/g, "d")
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
		.replace(/(\u0301|\u0308)/g, "")
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