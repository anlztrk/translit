function armlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/Ե(Ւ|ւ)/g, "Վ")
		.replace(/եւ/g, "վ")
		.replace(/(Տ|տ|Ճ|ճ|Պ|պ|Ծ|ծ|Կ|կ)(Հ|հ)/g, "$1\u2019$2")
		.replace(/(Դ|դ)(Զ|զ)/g, "$1\u2019$2")
		.replace(/(Ր|ր)(Ր|ր)/g, "$1\u2019$2")

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
		.replace(/Ը/g, "Ĕ")
		.replace(/Թ/g, "Th") //tʰ/
		.replace(/Ժ/g, "Ž")
		.replace(/Ի/g, "I")
		.replace(/Լ/g, "L")
		.replace(/Խ/g, "X")
		.replace(/Ծ/g, "C") //ts/
		.replace(/Կ/g, "K") //k/
		.replace(/Հ/g, "H")
		.replace(/Ձ/g, "Dz") //dz/
		.replace(/Ղ/g, "Q")
		.replace(/Ճ/g, "Č") //tʃ/
		.replace(/Մ/g, "M")
		.replace(/Յ/g, "Y")
		.replace(/Ն/g, "N")
		.replace(/Շ/g, "Š")
		.replace(/Ո/g, "O")
		.replace(/Չ/g, "Čh") //tʃʰ/
		.replace(/Պ/g, "P") //p/
		.replace(/Ջ/g, "J") //dʒ/
		.replace(/Ռ/g, "Rr")
		.replace(/Ս/g, "S")
		.replace(/Վ/g, "V")
		.replace(/Տ/g, "T") //t/
		.replace(/Ր/g, "R")
		.replace(/Ց/g, "Ch") //tsʰ/
		.replace(/Ւ/g, "W")
		.replace(/Փ/g, "Ph") //pʰ/
		.replace(/Ք/g, "Kh") //kʰ/
		.replace(/Օ/g, "Ô")
		.replace(/Ֆ/g, "F")
		.replace(/ա/g, "a")
		.replace(/բ/g, "b") //b/
		.replace(/գ/g, "g") //g/
		.replace(/դ/g, "d") //d/
		.replace(/ե/g, "e")
		.replace(/զ/g, "z")
		.replace(/է/g, "ê")
		.replace(/ը/g, "ĕ")
		.replace(/թ/g, "th") //tʰ/
		.replace(/ժ/g, "ž")
		.replace(/ի/g, "i")
		.replace(/լ/g, "l")
		.replace(/խ/g, "x")
		.replace(/ծ/g, "c") //ts/
		.replace(/կ/g, "k") //k/
		.replace(/հ/g, "h")
		.replace(/ձ/g, "dz") //dz/
		.replace(/ղ/g, "q")
		.replace(/ճ/g, "č") //tʃ/
		.replace(/մ/g, "m")
		.replace(/յ/g, "y")
		.replace(/ն/g, "n")
		.replace(/շ/g, "š")
		.replace(/ո/g, "o")
		.replace(/չ/g, "čh") //tʃʰ/
		.replace(/պ/g, "p") //p/
		.replace(/ջ/g, "j") //dʒ/
		.replace(/ռ/g, "rr")
		.replace(/ս/g, "s")
		.replace(/վ/g, "v")
		.replace(/տ/g, "t") //t/
		.replace(/ր/g, "r")
		.replace(/ց/g, "ch") //tsʰ/
		.replace(/ւ/g, "w")
		.replace(/փ/g, "ph") //pʰ/
		.replace(/ք/g, "kh") //kʰ/
		.replace(/և/g, "ew")
		.replace(/օ/g, "ô")
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
