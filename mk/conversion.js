function latcyr() {}

function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ý/g, "ú")

		.replace(/а/g, "a")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/ѓ/g, "đ")
		.replace(/д/g, "d")
		.replace(/е/g, "e")
		.replace(/ѐ/g, "è")
		.replace(/ж/g, "ž")
		.replace(/з/g, "z")
		.replace(/ѕ/g, "dz")
		.replace(/и/g, "i")
		.replace(/ѝ/g, "ì")
		.replace(/ј/g, "j")
		.replace(/к/g, "k")
		.replace(/л/g, "l")
		.replace(/љ/g, "lj")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/њ/g, "nj")
		.replace(/о/g, "o")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/ќ/g, "ć")
		.replace(/у/g, "u")
		.replace(/ф/g, "f")
		.replace(/х/g, "h")
		.replace(/ц/g, "c")
		.replace(/ч/g, "č")
		.replace(/џ/g, "dž")
		.replace(/ш/g, "š")
		.replace(/А/g, "A")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Д/g, "D")
		.replace(/Ѓ/g, "Đ")
		.replace(/Е/g, "E")
		.replace(/Ѐ/g, "È")
		.replace(/Ж/g, "Ž")
		.replace(/З/g, "Z")
		.replace(/Ѕ/g, "Dz")
		.replace(/И/g, "I")
		.replace(/Ѝ/g, "Ì")
		.replace(/Ј/g, "J")
		.replace(/К/g, "K")
		.replace(/Л/g, "L")
		.replace(/Љ/g, "Lj")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/Њ/g, "Nj")
		.replace(/О/g, "O")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/Ќ/g, "Ć")
		.replace(/У/g, "U")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "H")
		.replace(/Ц/g, "C")
		.replace(/Ч/g, "Č")
		.replace(/Џ/g, "Dž")
		.replace(/Ш/g, "Š")

		.replace(/Ć(A|E|I|O|U)/g, "KJ$1")
		.replace(/Ć(a|e|i|o|u)/g, "Kj$1")
		.replace(/ć(a|e|i|o|u)/g, "kj$1")

		.replace(/Đ(A|E|I|O|U)/g, "GJ$1")
		.replace(/Đ(a|e|i|o|u)/g, "Gj$1")
		.replace(/đ(a|e|i|o|u)/g, "gj$1");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}