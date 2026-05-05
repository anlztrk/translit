function topleft() {
	document.transcription.text2.value = document.transcription.text1.value
	let latinWords = {};
	let index = 0;
	document.transcription.text2.value = document.transcription.text2.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})

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

		.replace(/ა/g, "A")
		.replace(/ბ/g, "B")
		.replace(/გ/g, "G")
		.replace(/დ/g, "D")
		.replace(/ე/g, "E")
		.replace(/ვ/g, "V")
		.replace(/ზ/g, "Z")
		.replace(/ჱ/g, "EY")
		.replace(/თ/g, "T")
		.replace(/ი/g, "I")
		.replace(/კ/g, "K\u2019")
		.replace(/ლ/g, "L")
		.replace(/მ/g, "M")
		.replace(/ნ/g, "N")
		.replace(/ჲ/g, "Y")
		.replace(/ო/g, "O")
		.replace(/პ/g, "P\u2019")
		.replace(/ჟ/g, "ZH")
		.replace(/რ/g, "R")
		.replace(/ს/g, "S")
		.replace(/ტ/g, "T\u2019")
		.replace(/ჳ/g, "W")
		.replace(/უ/g, "U")
		.replace(/ფ/g, "P")
		.replace(/ქ/g, "K")
		.replace(/ღ/g, "GH")
		.replace(/ყ/g, "Q\u2019")
		.replace(/შ/g, "SH")
		.replace(/ჩ/g, "CH")
		.replace(/ც/g, "TS")
		.replace(/ძ/g, "DZ")
		.replace(/წ/g, "TS\u2019")
		.replace(/ჭ/g, "CH\u2019")
		.replace(/ხ/g, "KH")
		.replace(/ჴ/g, "Q")
		.replace(/ჯ/g, "J")
		.replace(/ჰ/g, "H")
		.replace(/ჵ/g, "OO")

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value.replace(key, latinWords[key])
		.normalize('NFC');
	});
}

function topright() {
	document.transcription.text3.value = document.transcription.text1.value;
	let latinWords = {};
	let index = 0;
	document.transcription.text3.value = document.transcription.text3.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})

		.replace(/Ა/g, "ა")
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
			return first + second.toLowerCase()
			.normalize('NFC');
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text3.value = document.transcription.text3.value.replace(key, latinWords[key]);
	});
}

function righttop(){
	document.transcription.text1.value = document.transcription.text3.value
		.toLowerCase()
		.replace(/[ıi]\u0307/g, "i")
		
		.replace(/tt/g, "ტ")
		.replace(/kk/g, "კ")
		.replace(/pp/g, "პ")
		.replace(/čč/g, "ჭ")
		.replace(/cc/g, "წ")
		
		.replace(/t-t/g, "tt")
		.replace(/k-k/g, "kk")
		.replace(/p-p/g, "pp")
		.replace(/č-č/g, "čč")
		.replace(/c-c/g, "cc")
		
		.replace(/a/g, "ა")
		.replace(/b/g, "ბ")
		.replace(/g/g, "გ")
		.replace(/d/g, "დ")
		.replace(/e/g, "ე")
		.replace(/v/g, "ვ")
		.replace(/t/g, "თ")
		.replace(/i/g, "ი")
		.replace(/l/g, "ლ")
		.replace(/m/g, "მ")
		.replace(/n/g, "ნ")
		.replace(/o/g, "ო")
		.replace(/ž/g, "ჟ")
		.replace(/r/g, "რ")
		.replace(/s/g, "ს")
		.replace(/u/g, "უ")
		.replace(/p/g, "ფ")
		.replace(/k/g, "ქ")
		.replace(/ġ/g, "ღ")
		.replace(/q/g, "ყ")
		.replace(/š/g, "შ")
		.replace(/č/g, "ჩ")
		.replace(/ż/g, "ძ")
		.replace(/z/g, "ზ")
		.replace(/c/g, "ც")
		.replace(/x/g, "ხ")
		.replace(/j/g, "ჯ")
		.replace(/h/g, "ჰ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}

function copy3() {
	navigator.clipboard.writeText(document.transcription.text3.value);
}
