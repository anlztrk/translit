function topleft() {
	let latinWords = {};
	let index = 0;

	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__Latn${index}__`;
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
		.replace(/([AEÎ])(\u0301)?Y(\u0301)?([AEIÎOÔYBGDZLMNR])/g, "$1$2V$3$4")
		.replace(/([AEÎaeî])(\u0301)?y(\u0301)?([aeiîoôybgdzlmnr])/g, "$1$2v$3$4")
		.replace(/([AEÎ])Y/g, "$1F")
		.replace(/([AEÎaeî])y/g, "$1f")
		.replace(/Ÿ/g, "Y\u0308")
		.replace(/ÿ/g, "y\u0308")

		.replace(/([VvFf])\u0301/g, "\u0301$1")

		.replace(/G([GXHgxh])/g, "N$1")
		.replace(/g([gxh])/g, "n$1")

		.replace(/M([Pp])/g, "B")
		.replace(/mp/g, "b")
		.replace(/([ABVGDEZÎÞIKLMNXOPRSTYFHⱣÔ])([\u0301\u0308])?B([ABVGDEZÎÞIKLMNXOPRSTYFHⱣÔ])/g, "$1$2MP$3")
		.replace(/([ABVGDEZÎÞIKLMNXOPRSTYFHⱣÔabvgdezîþiklmnxoprsſtyfhᵽô])([\u0301\u0308])?b([abvgdezîþiklmnxoprsſtyfhᵽô])/g, "$1$2mp$3")

		.replace(/(\p{Lu}|\p{Mn})H/ug, "$1CḢ")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) H/ug, "$1$2 CḢ")
		.replace(/H (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "CḢ $1$2")
		.replace(/H(\p{Lu}|\p{Mn})/ug, "CḢ$1")
		.replace(/H/g, "Cḣ")
		.replace(/h/g, "cḣ")
		.replace(/Ḣ/g, "H")
		.replace(/ḣ/g, "h")

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

		.normalize('NFC');

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value
			.replace(key, latinWords[key])
			.normalize('NFC');
	});
}

function topright() {
	let latinWords = {};
	let index = 0;

	document.transcription.text3.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__Latn${index}__`;
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
		.replace(/Δ/g, "Ð")
		.replace(/δ/g, "ð")
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

		.replace(/([AEIÎOÔYaeiîoôy])\u0308/g, "\u2060$1")

		.replace(/([AEÎ])(\u0301)?Y(\u0301)?([AEIÎOÔYBVGDÐZLMNR])/g, "$1$2V$3$4")
		.replace(/([AEÎaeî])(\u0301)?y(\u0301)?([aeiîoôybvgdðzlmnr])/g, "$1$2v$3$4")
		.replace(/([AEÎ])Y/g, "$1F")
		.replace(/([AEÎaeî])y/g, "$1f")

		.replace(/([VvFf])\u0301/g, "\u0301$1")

		.replace(/G([GXHgxh])/g, "N$1")
		.replace(/g([gxh])/g, "n$1")

		.replace(/M([Pp])/g, "B")
		.replace(/mp/g, "b")
		.replace(/([ABVGDÐEZÎÞIKLMNXOPRSTYFHⱣÔ])([\u0301\u0308])?B([AEIÎOÔYBVGDÐZLMNR])/g, "$1$2MB$3")
		.replace(/([ABVGDÐEZÎÞIKLMNXOPRSTYFHⱣÔ])([\u0301\u0308])?B([ÞKXPSTFHⱣ])/g, "$1$2MP$3")
		.replace(/([ABVGDÐEZÎÞIKLMNXOPRSTYFHⱣÔabvgðezîþiklmnxoprsſtyfhᵽô])([\u0301\u0308])?b([aeiîoôybvgdðzlmnr])/g, "$1$2mb$3")
		.replace(/([ABVGDÐEZÎÞIKLMNXOPRSTYFHⱣÔabvgðezîþiklmnxoprsſtyfhᵽô])([\u0301\u0308])?b([þkxpsſtfhᵽ])/g, "$1$2mp$3")

		.replace(/N([Tt])/g, "D")
		.replace(/nt/g, "d")
		.replace(/([ABVGÐEZÎÞIKLMNXOPRSTYFHⱣÔ])([\u0301\u0308])?D([AEIÎOÔYBGÐZLMNR])/g, "$1$2ND$3")
		.replace(/([ABVGÐEZÎÞIKLMNXOPRSTYFHⱣÔ])([\u0301\u0308])?D([ÞKXPSTFHⱣ])/g, "$1$2NT$3")
		.replace(/([ABVGÐEZÎÞIKLMNXOPRSTYFHⱣÔabvgðezîþiklmnxoprsſtyfhᵽô])([\u0301\u0308])?d([aeiîoôybgðzlmnr])/g, "$1$2nd$3")
		.replace(/([ABVGÐEZÎÞIKLMNXOPRSTYFHⱣÔabvgðezîþiklmnxoprsſtyfhᵽô])([\u0301\u0308])?d([þkxpsſtfhᵽ])/g, "$1$2nt$3")

		.replace(/(\p{Lu}|\p{Mn})H/ug, "$1KḢ")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) H/ug, "$1$2 KḢ")
		.replace(/H (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "KḢ $1$2")
		.replace(/H(\p{Lu}|\p{Mn})/ug, "KḢ$1")
		.replace(/H/g, "Kḣ")
		.replace(/Ḣ/g, "H")
		.replace(/h/g, "kḣ")
		.replace(/ḣ/g, "h")

		.replace(/(\p{Lu}|\p{Mn})Þ/ug, "$1TH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Þ/ug, "$1$2 TH")
		.replace(/Þ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "TH $1$2")
		.replace(/Þ(\p{Lu}|\p{Mn})/ug, "TH$1")
		.replace(/Þ/g, "Th")
		.replace(/þ/g, "th")

		.replace(/(\p{Lu}|\p{Mn})Ð/ug, "$1DH")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ð/ug, "$1$2 DH")
		.replace(/Ð (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "DH $1$2")
		.replace(/Ð(\p{Lu}|\p{Mn})/ug, "DH$1")
		.replace(/Ð/g, "Dh")
		.replace(/ð/g, "dh")

		.replace(/(\p{Lu}|\p{Mn})Ᵽ/ug, "$1PS")
		.replace(/(\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn}) Ᵽ/ug, "$1$2 PS")
		.replace(/Ᵽ (\p{Lu}|\p{Mn})(\p{Lu}|\p{Mn})/ug, "PS $1$2")
		.replace(/Ᵽ(\p{Lu}|\p{Mn})/ug, "PS$1")
		.replace(/Ᵽ/g, "Ps")
		.replace(/ᵽ/g, "ps")

		.replace(/A[OEY]?I/g, "E")
		.replace(/A[oey]?i/g, "E")
		.replace(/a[oey]?i/g, "e")

		.replace(/[OEY][OEY]?I/g, "I")
		.replace(/[OEY][oey]?i/g, "I")
		.replace(/[oey][oey]?i/g, "i")

		.replace(/OY/g, "U")
		.replace(/Oy/g, "U")
		.replace(/oy/g, "u")

		.replace(/Y/g, "I")
		.replace(/y/g, "i")

		.replace(/G([EIÎeiî])/g, "Y$1")
		.replace(/g([eiî])/g, "y$1")

		.replace(/YY/g, "YI")
		.replace(/Yy/g, "Yi")
		.replace(/yy/g, "yi")

		.replace(/(\p{Lu}|\p{Mn})GK/ug, "$1NG")
		.replace(/(\p{Ll}|\p{Mn})γκ/ug, "$1ng")
		.replace(/G[Kk]/ug, "G")
		.replace(/gk/ug, "g")

		.replace(/Î/g, "I")
		.replace(/î/g, "i")
		.replace(/Ô/g, "O")
		.replace(/ô/g, "o")

		.replace(/ſ/g, "s")

		.replace(/(\u003b|\u037e)/g, "\u003f")

		.replace(/\u2060/g, "")

		.normalize('NFC');

	Object.keys(latinWords).forEach(key => {
		document.transcription.text3.value = document.transcription.text3.value
			.replace(key, latinWords[key])
			.normalize('NFC');
	});
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
