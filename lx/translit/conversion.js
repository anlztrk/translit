function geolat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)/g, "$1ъ")
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(A|a)/g, "$1")
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(E|e)/g, "$1е")
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(I|i)/g, "$1и")
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(O|o)/g, "$1о")
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(U|u)/g, "$1у")
		.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(Y|y)/g, "$1ы")

		.replace(/(B|b)/g, "б")
		.replace(/(C|c)/g, "ц")
		.replace(/(D|d)/g, "д")
		.replace(/(G|g)/g, "г")
		.replace(/(H|h)/g, "х")
		.replace(/(J|j)/g, "й")
		.replace(/(K|k)/g, "к")
		.replace(/(L|l)/g, "л")
		.replace(/(M|m)/g, "м")
		.replace(/(P|p)/g, "п")
		.replace(/(R|r)/g, "р")
		.replace(/(S|s)/g, "с")
		.replace(/(T|t)/g, "т")
		.replace(/(W|w)/g, "ў")
		.replace(/(Z|z)/g, "з")

		.replace(/(A|a)/g, "ь")
		.replace(/(E|e)/g, "ье")
		.replace(/(I|i)/g, "ьи")
		.replace(/(O|o)/g, "ьо")
		.replace(/(U|u)/g, "ьу")
		.replace(/(Y|y)/g, "ьы");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}