function latcyr() {}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ý/g, "ού")

		.replace(/а/g, "α")
		.replace(/б/g, "β")
		.replace(/в/g, "βυ")
		.replace(/г/g, "γ")
		.replace(/ѓ/g, "γυ")
		.replace(/д/g, "δ")
		.replace(/е/g, "ε")
		.replace(/ѐ/g, "ὲ")
		.replace(/ж/g, "ζυ")
		.replace(/з/g, "ζ")
		.replace(/ѕ/g, "τζ")
		.replace(/и/g, "ι")
		.replace(/ѝ/g, "ὶ")
		.replace(/ј/g, "ι")
		.replace(/к/g, "κ")
		.replace(/л/g, "λ")
		.replace(/љ/g, "λυ")
		.replace(/м/g, "μ")
		.replace(/н/g, "ν")
		.replace(/њ/g, "νυ")
		.replace(/о/g, "ο")
		.replace(/п/g, "π")
		.replace(/р/g, "ρ")
		.replace(/с/g, "ς")
		.replace(/т/g, "τ")
		.replace(/ќ/g, "κυ")
		.replace(/у/g, "ου")
		.replace(/ф/g, "φ")
		.replace(/х/g, "χ")
		.replace(/ц/g, "τς")
		.replace(/ч/g, "τσυ")
		.replace(/џ/g, "τζυ")
		.replace(/ш/g, "συ")
		.replace(/А/g, "Α")
		.replace(/Б/g, "Β")
		.replace(/В/g, "ΒΥ")
		.replace(/Г/g, "Γ")
		.replace(/Ѓ/g, "ΓΥ")
		.replace(/Д/g, "Δ")
		.replace(/Е/g, "Ε")
		.replace(/Ѐ/g, "Ὲ")
		.replace(/Ж/g, "ΖΥ")
		.replace(/З/g, "Ζ")
		.replace(/Ѕ/g, "Τζ")
		.replace(/И/g, "Ι")
		.replace(/Ѝ/g, "Ὶ")
		.replace(/Ј/g, "Ι")
		.replace(/К/g, "Κ")
		.replace(/Л/g, "Λ")
		.replace(/Љ/g, "Λυ")
		.replace(/М/g, "Μ")
		.replace(/Н/g, "Ν")
		.replace(/Њ/g, "Νυ")
		.replace(/О/g, "Ο")
		.replace(/П/g, "Π")
		.replace(/Р/g, "Ρ")
		.replace(/С/g, "Σ")
		.replace(/Т/g, "Τ")
		.replace(/Ќ/g, "Κυ")
		.replace(/У/g, "Ου")
		.replace(/Ф/g, "Φ")
		.replace(/Х/g, "Χ")
		.replace(/Ц/g, "Τς")
		.replace(/Ч/g, "Τσυ")
		.replace(/Џ/g, "Τζυ")
		.replace(/Ш/g, "Συ")

		.replace(/ΟΥ([Ιι])/g, "ΟΥ\u200c$1")
		.replace(/([Οο])υι/g, "$1υι")

		.replace(/Υ[Ιι]/g, "Η")
		.replace(/υι/g, "η")

		.replace(/Π[Σςσ]/g, "Ψ")
		.replace(/π[ςσ]/g, "ψ")

		.replace(/Κ[Σςσ]/g, "Ξ")
		.replace(/κ[ςσ]/g, "ξ")

		.replace(/\u200c/g, "")

		.replace(/ς([αβγδεζηθικλμνξοπρσςτυφχψω])/g, "σ$1");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}