function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/Ę(A|Ą|B|C|Ć|D|E|Ę|F|G|H|I|J|K|M|N|Ń|O|Ó|P|Q|R|S|Ś|T|U|V|W|X|Y|Z|Ź|Ż|a|ą|b|c|ć|d|e|ę|f|g|h|i|j|k|m|n|ń|o|ó|p|q|r|s|ś|t|u|v|w|x|y|z|ź|ż)/g, "Ẽ$1")
		.replace(/ę(A|Ą|B|C|Ć|D|E|Ę|F|G|H|I|J|K|M|N|Ń|O|Ó|P|Q|R|S|Ś|T|U|V|W|X|Y|Z|Ź|Ż|a|ą|b|c|ć|d|e|ę|f|g|h|i|j|k|m|n|ń|o|ó|p|q|r|s|ś|t|u|v|w|x|y|z|ź|ż)/g, "ẽ$1")
		.replace(/Ę/g, "E")
		.replace(/ę/g, "e")
		.replace(/Ẽ/g, "Ę")
		.replace(/ẽ/g, "ę")

		.replace(/Ą(L|l|Ł|ł)/g, "O$1")
		.replace(/ą(L|l|Ł|ł)/g, "o$1")

		.replace(/C(H|h)/g, "H")
		.replace(/ch/g, "h")
		.replace(/C(Z|z)/g, "Č")
		.replace(/cz/g, "č")
		.replace(/R(Z|z)/g, "Ž")
		.replace(/rz/g, "ž")
		.replace(/S(Z|z)/g, "Š")
		.replace(/sz/g, "š")

		.replace(/C(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ć$2")
		.replace(/Ci(a|ą|e|ę|o|ó|u|y)/g, "Ć$1")
		.replace(/ci(a|ą|e|ę|o|ó|u|y)/g, "ć$1")
		.replace(/C(I|i)/g, "Ć$1")
		.replace(/ci/g, "ći")
		.replace(/S(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ś$2")
		.replace(/Si(a|ą|e|ę|o|ó|u|y)/g, "Ś$1")
		.replace(/si(a|ą|e|ę|o|ó|u|y)/g, "ś$1")
		.replace(/S(I|i)/g, "Ś$1")
		.replace(/si/g, "śi")
		.replace(/Z(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ź$2")
		.replace(/Zi(a|ą|e|ę|o|ó|u|y)/g, "Ź$1")
		.replace(/zi(a|ą|e|ę|o|ó|u|y)/g, "ź$1")
		.replace(/Z(I|i)/g, "Ź$1")
		.replace(/zi/g, "źi")
		.replace(/N(I|i)(A|Ą|E|Ę|O|Ó|U|Y)/g, "Ń$2")
		.replace(/Ni(a|ą|e|ę|o|ó|u|y)/g, "Ń$1")
		.replace(/ni(a|ą|e|ę|o|ó|u|y)/g, "ń$1")
		.replace(/NII/g, "ŃJI")
		.replace(/Nii/g, "Ńji")
		.replace(/nii/g, "ńji")
		.replace(/N(I|i)/g, "Ń$1")
		.replace(/ni/g, "ńi")

		.replace(/I(A|Ą|E|Ę|O|Ó|U|Y|I|a|ą|e|ę|o|ó|u|y|i)/g, "J$1")
		.replace(/i(a|ą|e|ę|o|ó|u|y|i)/g, "j$1")

		.replace(/Ż/g, "Ž")
		.replace(/ż/g, "ž")

		.replace(/Ą(B|C|Ć|Č|D|G|K|P|T)/g, "ON$1")
		.replace(/Ą(b|c|ć|č|d|g|k|p|t)/g, "On$1")
		.replace(/ą(b|c|ć|č|d|g|k|p|t)/g, "on$1")
		.replace(/Ę(B|C|Ć|Č|D|G|K|P|T)/g, "EN$1")
		.replace(/Ę(b|c|ć|č|d|g|k|p|t)/g, "En$1")
		.replace(/ę(b|c|ć|č|d|g|k|p|t)/g, "en$1")

		.replace(/D(Z|z)/g, "Ѕ")
		.replace(/dz/g, "ѕ")

		.replace(/D(Ž|Ź)/g, "Җ")
		.replace(/D(ž|ź)/g, "Җ")
		.replace(/d(ž|ź)/g, "җ")
		.replace(/C/g, "Ц")
		.replace(/c/g, "ц")
		.replace(/Җ/g, "C")
		.replace(/җ/g, "c")
		.replace(/Ą/g, "O")
		.replace(/ą/g, "o")
		.replace(/I/g, "İ")
		.replace(/Y/g, "I")
		.replace(/y/g, "ı")
		.replace(/J/g, "Y")
		.replace(/j/g, "y")
		.replace(/(Ć|Č)/g, "Ç")
		.replace(/(ć|č)/g, "ç")
		.replace(/Ę/g, "E")
		.replace(/ę/g, "e")
		.replace(/Ó/g, "U")
		.replace(/ó/g, "u")
		.replace(/(Ś|Š)/g, "Ş")
		.replace(/(ś|š)/g, "ş")
		.replace(/(Ž|Ź)/g, "J")
		.replace(/(ž|ź)/g, "j")
		.replace(/(W|Ł)/g, "V")
		.replace(/(w|ł)/g, "v")

		.replace(/Ń(A|E|İ|O|U|I)/g, "NY$1")
		.replace(/Ń(a|e|i|o|u|ı)/g, "Ny$1")
		.replace(/ń(a|e|i|o|u|ı)/g, "ny$1")
		.replace(/Ń/g, "N")
		.replace(/ń/g, "n")

		.replace(/(A|E|İ|O|U|I|a|e|i|o|u|ı)ЦЦ/g, "$1TTS")
		.replace(/(a|e|i|o|u|ı)Цц/g, "$1Tts")
		.replace(/(a|e|i|o|u|ı)цЦ/g, "$1tTs")
		.replace(/(a|e|i|o|u|ı)цц/g, "$1tts")
		.replace(/(A|E|İ|O|U|I)Цц/g, "$1Tts")
		.replace(/(A|E|İ|O|U|I)цЦ/g, "$1tTS")
		.replace(/(A|E|İ|O|U|I)цц/g, "$1tts")

		.replace(/(A|E|İ|O|U|I)Ц/g, "$1TS")
		.replace(/(A|E|İ|O|U|I)ц/g, "$1ts")
		.replace(/(a|e|i|o|u|ı)Ц/g, "$1Ts")
		.replace(/(a|e|i|o|u|ı)ц/g, "$1ts")
		.replace(/Ц/g, "S")
		.replace(/ц/g, "s")

		.replace(/(A|E|İ|O|U|I)Ѕ/g, "$1DZ")
		.replace(/(A|E|İ|O|U|I)ѕ/g, "$1dz")
		.replace(/(a|e|i|o|u|ı)Ѕ/g, "$1Dz")
		.replace(/(a|e|i|o|u|ı)ѕ/g, "$1dz")
		.replace(/Ѕ/g, "Z")
		.replace(/ѕ/g, "z");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}