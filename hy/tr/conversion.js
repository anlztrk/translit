function armlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/Ե(Ւ|ւ)/g, "Վ")
		.replace(/եւ/g, "վ")
		.replace(/ԵՎ/g, "EW")
		.replace(/Եվ/g, "Ew")
		.replace(/Ու/g, "U")
		.replace(/ՈՒ/g, "U")
		.replace(/ու/g, "u")
		.replace(/Ա/g, "A")
		.replace(/Բ/g, "B") //b/
		.replace(/Գ/g, "G") //g/
		.replace(/Դ/g, "D") //d/
		.replace(/Ե/g, "E")
		.replace(/Զ/g, "Z")
		.replace(/Է/g, "Ê")
		.replace(/Ը/g, "I")
		.replace(/Թ/g, "T") //tʰ/
		.replace(/Ժ/g, "J")
		.replace(/Ի/g, "Î")
		.replace(/Լ/g, "L")
		.replace(/Խ/g, "X")
		.replace(/Ծ/g, "Ǯ") //ts/
		.replace(/Կ/g, "Ǩ") //k/
		.replace(/Հ/g, "H")
		.replace(/Ձ/g, "Ž") //dz/
		.replace(/Ղ/g, "Q")
		.replace(/Ճ/g, "Ç̌") //tʃ/
		.replace(/Մ/g, "M")
		.replace(/Յ/g, "Y")
		.replace(/Ն/g, "N")
		.replace(/Շ/g, "Ş")
		.replace(/Ո/g, "O")
		.replace(/Չ/g, "Ç") //tʃʰ/
		.replace(/Պ/g, "P̌") //p/
		.replace(/Ջ/g, "C") //dʒ/
		.replace(/Ռ/g, "Ř")
		.replace(/Ս/g, "S")
		.replace(/Վ/g, "V")
		.replace(/Տ/g, "Ť") //t/
		.replace(/Ր/g, "R")
		.replace(/Ց/g, "Ʒ") //tsʰ/
		.replace(/Ւ/g, "W")
		.replace(/Փ/g, "P") //pʰ/
		.replace(/Ք/g, "K") //kʰ/
		.replace(/Օ/g, "Û")
		.replace(/Ֆ/g, "F")
		.replace(/ա/g, "a")
		.replace(/բ/g, "b") //b/
		.replace(/գ/g, "g") //g/
		.replace(/դ/g, "d") //d/
		.replace(/ե/g, "e")
		.replace(/զ/g, "z")
		.replace(/է/g, "ê")
		.replace(/ը/g, "i")
		.replace(/թ/g, "t") //tʰ/
		.replace(/ժ/g, "j")
		.replace(/ի/g, "î")
		.replace(/լ/g, "l")
		.replace(/խ/g, "x")
		.replace(/ծ/g, "ǯ") //ts/
		.replace(/կ/g, "ǩ") //k/
		.replace(/հ/g, "h")
		.replace(/ձ/g, "ž") //dz/
		.replace(/ղ/g, "q")
		.replace(/ճ/g, "ç̌") //tʃ/
		.replace(/մ/g, "m")
		.replace(/յ/g, "y")
		.replace(/ն/g, "n")
		.replace(/շ/g, "ş")
		.replace(/ո/g, "o")
		.replace(/չ/g, "ç") //tʃʰ/
		.replace(/պ/g, "p̌") //p/
		.replace(/ջ/g, "c") //dʒ/
		.replace(/ռ/g, "ř")
		.replace(/ս/g, "s")
		.replace(/վ/g, "v")
		.replace(/տ/g, "t‌̌") //t/
		.replace(/ր/g, "r")
		.replace(/ց/g, "ʒ") //tsʰ/
		.replace(/ւ/g, "w")
		.replace(/փ/g, "p") //pʰ/
		.replace(/ք/g, "k") //kʰ/
		.replace(/և/g, "ew")
		.replace(/օ/g, "û")
		.replace(/ֆ/g, "f")
		.replace(/(\u055b|\u055c|\u055e)/g, "")
		.replace(/(\u055d|\u0060)/g, "\u003b")
		.replace(/(\u003a|\u0589)/g, "\u002e")
		.replace(/\u2024/g, "\u003a")
		.replace(/\u058a/g, "\u002d")
		.replace(/\u055a/g, "\u2019");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
