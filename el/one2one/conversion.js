function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFD')

		.replace(/Α/g, "A")
		.replace(/α/g, "a")
		.replace(/Β/g, "B")
		.replace(/β/g, "b")
		.replace(/Γ/g, "G")
		.replace(/γ/g, "g")
		.replace(/Δ/g, "D")
		.replace(/δ/g, "d")
		.replace(/Ε/g, "E")
		.replace(/ε/g, "e")
		.replace(/Ζ/g, "Z")
		.replace(/ζ/g, "z")
		.replace(/Η/g, "Ê")
		.replace(/η/g, "ê")
		.replace(/Θ/g, "Þ")
		.replace(/θ/g, "þ")
		.replace(/Ι/g, "I")
		.replace(/ι/g, "i")
		.replace(/Ϊ/g, "Ï")
		.replace(/ϊ/g, "ï")
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
		.replace(/σ/g, "s")
		.replace(/ς/g, "ś")
		.replace(/Τ/g, "T")
		.replace(/τ/g, "t")
		.replace(/Υ/g, "Y")
		.replace(/υ/g, "y")
		.replace(/Ϋ/g, "Ÿ")
		.replace(/ϋ/g, "ÿ")
		.replace(/Φ/g, "F")
		.replace(/φ/g, "f")
		.replace(/Χ/g, "H")
		.replace(/χ/g, "h")
		.replace(/Ψ/g, "Ṕ")
		.replace(/ψ/g, "ṕ")
		.replace(/Ω/g, "Ô")
		.replace(/ω/g, "ô")
		.replace(/(\u003b|\u037e)/g, "\u003f");
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}