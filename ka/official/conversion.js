function geolat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/ა/g, "a")
		.replace(/ბ/g, "b")
		.replace(/გ/g, "g")
		.replace(/დ/g, "d")
		.replace(/ე/g, "e")
		.replace(/ვ/g, "v")
		.replace(/ზ/g, "z")
		.replace(/ჱ/g, "ey")
		.replace(/თ/g, "t")
		.replace(/ი/g, "i")
		.replace(/კ/g, "k\u2019")
		.replace(/ლ/g, "l")
		.replace(/მ/g, "m")
		.replace(/ნ/g, "n")
		.replace(/ჲ/g, "y")
		.replace(/ო/g, "o")
		.replace(/პ/g, "p\u2019")
		.replace(/ჟ/g, "zh")
		.replace(/რ/g, "r")
		.replace(/ს/g, "s")
		.replace(/ტ/g, "t\u2019")
		.replace(/ჳ/g, "w")
		.replace(/უ/g, "u")
		.replace(/ფ/g, "p")
		.replace(/ქ/g, "k")
		.replace(/ღ/g, "gh")
		.replace(/ყ/g, "q\u2019")
		.replace(/შ/g, "sh")
		.replace(/ჩ/g, "ch")
		.replace(/ც/g, "ts")
		.replace(/ძ/g, "dz")
		.replace(/წ/g, "tsʼ")
		.replace(/ჭ/g, "ch\u2019")
		.replace(/ხ/g, "kh")
		.replace(/ჴ/g, "q")
		.replace(/ჯ/g, "j")
		.replace(/ჰ/g, "h")
		.replace(/ჵ/g, "oo");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
