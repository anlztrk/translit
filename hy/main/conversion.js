function armlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/Ե([Ււ])/g, "Վ")
		.replace(/եւ/g, "վ")

		.replace(/([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])([ԲԳԴԶԹԺԽԾԿՀՁՂՃՄՅՆՇՉՊՋՌՍՎՏՐՑՓՔՖ])/g, "$1Ը$2$3")
		.replace(/([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])([բգդզթժխծկհձղճմյնշչպջռսվտրցփքֆ])/g, "$1ը$2$3")


		.replace(/ԵՎ/g, "EW")
		.replace(/Եվ/g, "Ew")
		.replace(/Ու/g, "U")
		.replace(/ՈՒ/g, "U")
		.replace(/ու/g, "u")
		.replace(/Ա/g, "A")
		.replace(/Բ/g, "Ḅ") //b/
		.replace(/Գ/g, "G\u0323") //g/
		.replace(/Դ/g, "Ḍ") //d/
		.replace(/Ե/g, "E")
		.replace(/Զ/g, "Z")
		.replace(/Է/g, "É")
		.replace(/Ը/g, "Ĕ")
		.replace(/Թ/g, "T") //tʰ/
		.replace(/Ժ/g, "J")
		.replace(/Ի/g, "I")
		.replace(/Լ/g, "L")
		.replace(/Խ/g, "X")
		.replace(/Ծ/g, "Dz") //ts/
		.replace(/Կ/g, "G") //k/
		.replace(/Հ/g, "H")
		.replace(/Ձ/g, "Ḍz") //dz/
		.replace(/Ղ/g, "Q")
		.replace(/Ճ/g, "Dj") //tʃ/
		.replace(/Մ/g, "M")
		.replace(/Յ/g, "Y")
		.replace(/Ն/g, "N")
		.replace(/Շ/g, "Š")
		.replace(/Ո/g, "O")
		.replace(/Չ/g, "Č") //tʃʰ/
		.replace(/Պ/g, "B") //p/
		.replace(/Ջ/g, "Ḍj") //dʒ/
		.replace(/Ռ/g, "Ř")
		.replace(/Ս/g, "S")
		.replace(/Վ/g, "V")
		.replace(/Տ/g, "D") //t/
		.replace(/Ր/g, "R")
		.replace(/Ց/g, "C") //tsʰ/
		.replace(/Ւ/g, "W")
		.replace(/Փ/g, "P") //pʰ/
		.replace(/Ք/g, "K") //kʰ/
		.replace(/Օ/g, "Ó")
		.replace(/Ֆ/g, "F")
		.replace(/ա/g, "a")
		.replace(/բ/g, "ḅ") //b/
		.replace(/գ/g, "ġ") //g/
		.replace(/դ/g, "ḍ") //d/
		.replace(/ե/g, "e")
		.replace(/զ/g, "z")
		.replace(/է/g, "é")
		.replace(/ը/g, "ĕ")
		.replace(/թ/g, "t") //tʰ/
		.replace(/ժ/g, "j")
		.replace(/ի/g, "i")
		.replace(/լ/g, "l")
		.replace(/խ/g, "x")
		.replace(/ծ/g, "dz") //ts/
		.replace(/կ/g, "g") //k/
		.replace(/հ/g, "h")
		.replace(/ձ/g, "ḍz") //dz/
		.replace(/ղ/g, "q")
		.replace(/ճ/g, "dj") //tʃ/
		.replace(/մ/g, "m")
		.replace(/յ/g, "y")
		.replace(/ն/g, "n")
		.replace(/շ/g, "š")
		.replace(/ո/g, "o")
		.replace(/չ/g, "č") //tʃʰ/
		.replace(/պ/g, "b") //p/
		.replace(/ջ/g, "ḍj") //dʒ/
		.replace(/ռ/g, "ř")
		.replace(/ս/g, "s")
		.replace(/վ/g, "v")
		.replace(/տ/g, "d") //t/
		.replace(/ր/g, "r")
		.replace(/ց/g, "c") //tsʰ/
		.replace(/ւ/g, "w")
		.replace(/փ/g, "p") //pʰ/
		.replace(/ք/g, "k") //kʰ/
		.replace(/և/g, "ew")
		.replace(/օ/g, "ó")
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
