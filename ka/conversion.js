function topleft() {
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

function topright() {
	document.transcription.text3.value = document.transcription.text1.value;
	let latinWords = {};
	let index = 0;
	document.transcription.text3.value = document.transcription.text3.value.replace(/\p{sc=Latin}+/ug, function(match) {
		let key = `__placeholder${index}__`;
		latinWords[key] = match;
		index++;
		return key;
	});

	document.transcription.text3.value = document.transcription.text3.value.replace(/Ა/g, "ა")
		.replace(/Ბ/g, "ბ")
		.replace(/Გ/g, "გ")
		.replace(/Დ/g, "დ")
		.replace(/Ე/g, "ე")
		.replace(/Ვ/g, "ვ")
		.replace(/Ზ/g, "ზ")
		.replace(/Ჱ/g, "ჱ")
		.replace(/Თ/g, "თ")
		.replace(/Ი/g, "ი")
		.replace(/Კ/g, "კ")
		.replace(/Ლ/g, "ლ")
		.replace(/Მ/g, "მ")
		.replace(/Ნ/g, "ნ")
		.replace(/Ჲ/g, "ჲ")
		.replace(/Ო/g, "ო")
		.replace(/Პ/g, "პ")
		.replace(/Ჟ/g, "ჟ")
		.replace(/Რ/g, "რ")
		.replace(/Ს/g, "ს")
		.replace(/Ტ/g, "ტ")
		.replace(/Ჳ/g, "ჳ")
		.replace(/Უ/g, "უ")
		.replace(/Ჷ/g, "ჷ")
		.replace(/Ფ/g, "ფ")
		.replace(/Ქ/g, "ქ")
		.replace(/Ღ/g, "ღ")
		.replace(/Ყ/g, "ყ")
		.replace(/Ჸ/g, "ჸ")
		.replace(/Შ/g, "შ")
		.replace(/Ჩ/g, "ჩ")
		.replace(/Ც/g, "ც")
		.replace(/Ძ/g, "ძ")
		.replace(/Წ/g, "წ")
		.replace(/Ჭ/g, "ჭ")
		.replace(/Ხ/g, "ხ")
		.replace(/Ჴ/g, "ჴ")
		.replace(/Ჯ/g, "ჯ")
		.replace(/Ჰ/g, "ჰ")
		.replace(/Ჵ/g, "ჵ")
		.replace(/Ჶ/g, "ჶ")
		.replace(/Ჹ/g, "ჹ")
		.replace(/Ჺ/g, "ჺ")
		.replace(/Ჽ/g, "ჽ")
		.replace(/Ჾ/g, "ჾ")
		.replace(/Ჿ/g, "ჿ")

		.replace(/ქქ/g, "ქ-ქ")
		.replace(/ფფ/g, "ფ-ფ")
		.replace(/თთ/g, "თ-თ")
		.replace(/ცც/g, "ც-ც")
		.replace(/ჩჩ/g, "ჩ-ჩ")

		.replace(/ა/g, "A")
		.replace(/ბ/g, "B")
		.replace(/გ/g, "G")
		.replace(/დ/g, "D")
		.replace(/ე/g, "E")
		.replace(/ვ/g, "V")
		.replace(/ზ/g, "Z")
		.replace(/თ/g, "T")
		.replace(/ი/g, "I")
		.replace(/კ/g, "KK")
		.replace(/ლ/g, "L")
		.replace(/მ/g, "M")
		.replace(/ნ/g, "N")
		.replace(/ო/g, "O")
		.replace(/პ/g, "PP")
		.replace(/ჟ/g, "Ž")
		.replace(/რ/g, "R")
		.replace(/ს/g, "S")
		.replace(/ტ/g, "TT")
		.replace(/უ/g, "U")
		.replace(/ფ/g, "P")
		.replace(/ქ/g, "K")
		.replace(/ღ/g, "Ġ")
		.replace(/ყ/g, "Q")
		.replace(/შ/g, "Š")
		.replace(/ჩ/g, "Č")
		.replace(/ც/g, "C")
		.replace(/ძ/g, "Ż")
		.replace(/წ/g, "CC")
		.replace(/ჭ/g, "ČČ")
		.replace(/ხ/g, "X")
		.replace(/ჯ/g, "J")
		.replace(/ჰ/g, "H")

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text3.value = document.transcription.text3.value.replace(key, latinWords[key]);
	});
	document.transcription.text3.value = car;
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}

function copy3() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
