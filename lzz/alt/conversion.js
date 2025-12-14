function geolat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ა/g, "a")
		.replace(/ბ/g, "b")
		.replace(/გ/g, "g")
		.replace(/დ/g, "d")
		.replace(/ე/g, "e")
		.replace(/ვ/g, "v")
		.replace(/ზ/g, "z")
		.replace(/თ/g, "t")
		.replace(/ი/g, "i")
		.replace(/კ/g, "kk")
		.replace(/ლ/g, "l")
		.replace(/მ/g, "m")
		.replace(/ნ/g, "n")
		.replace(/ო/g, "o")
		.replace(/პ/g, "pp")
		.replace(/ჟ/g, "j")
		.replace(/რ/g, "r")
		.replace(/ს/g, "s")
		.replace(/ტ/g, "tt")
		.replace(/უ/g, "u")
		.replace(/ფ/g, "p")
		.replace(/ქ/g, "k")
		.replace(/ღ/g, "q")
		.replace(/ყ/g, "qq")
		.replace(/შ/g, "ş")
		.replace(/ჩ/g, "ç")
		.replace(/ც/g, "c")
		.replace(/ძ/g, "dz")
		.replace(/წ/g, "cc")
		.replace(/ჭ/g, "çç")
		.replace(/ხ/g, "x")
		.replace(/ჯ/g, "dj")
		.replace(/ჰ/g, "h")
		.replace(/ჶ/g, "f")
		.replace(/ჲ/g, "y");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}