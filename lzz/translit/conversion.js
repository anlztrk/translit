function latgeo() {
	document.transcription.text2.value = document.transcription.text2.value
		.normalize('NFC')
		.replace(/\u2019/g, "\u0027")
		
		.replace(/Ç(\u0306|\u0027)/g, "Ç\u030c")
		.replace(/ç(\u0306|\u0027)/g, "ç\u030c")
		.replace(/Ḉ/g, "Ç\u030c")
		.replace(/ḉ/g, "ç\u030c")
		.replace(/Ğ/g, "Ǧ")
		.replace(/ğ/g, "ǧ")
		.replace(/İ/g, "I")
		.replace(/ı/g, "i")
		.replace(/Ḱ/g, "Ǩ")
		.replace(/ḱ/g, "ǩ")
		.replace(/K(\u0306|\u0027)/g, "Ǩ")
		.replace(/k(\u0306|\u0027)/g, "ǩ")
		.replace(/Ṕ/g, "P\u030c")
		.replace(/ṕ/g, "p\u030c")
		.replace(/P(\u0306|\u0027)/g, "P\u030c")
		.replace(/p(\u0306|\u0027)/g, "p\u030c")
		.replace(/T(\u0306|\u0027)/g, "Ť")
		.replace(/t(\u0306|\u0027)/g, "t\u200c\u030c")
		.replace(/ť/g, "t\u200c\u030c")
		.replace(/Z(\u0306|\u0027)/g, "Ž")
		.replace(/z(\u0306|\u0027)/g, "ž")
		.replace(/Ʒ(\u0306|\u0027)/g, "Ǯ")
		.replace(/ʒ(\u0306|\u0027)/g, "ǯ")
		
		.replace(/Ӡ/g, "Ʒ")
		.replace(/ӡ/g, "ʒ")
		
		.replace(/3\u0027(\p{Lu})/ug, "Ǯ$1")
		.replace(/(\p{Ll}) 3\u0027(\p{Ll})/ug, "$1 ǯ$2")
		.replace(/3\u0027(\p{Ll})/ug, "Ǯ$1")
		.replace(/(\p{Ll})3\u0027/ug, "$1ǯ")
		.replace(/(\p{Lu})3\u0027/ug, "$1Ǯ")
		
		.replace(/3(\p{Lu})/ug, "Ʒ$1")
		.replace(/(\p{Ll}) 3(\p{Ll})/ug, "$1 ʒ$2")
		.replace(/3(\p{Ll})/ug, "Ʒ$1")
		.replace(/(\p{Ll})3/ug, "$1ʒ")
		.replace(/(\p{Lu})3/ug, "$1Ʒ")
		
		.replace(/ts\u0027/g, "ǯ")
		.replace(/T[Ss]\u0027/g, "Ǯ")
		.replace(/ts/g, "ʒ")
		.replace(/T[Ss]/g, "Ʒ")
		.replace(/dz/g, "ž")
		.replace(/D[Zz]/g, "Ž"); 
		
	document.transcription.text1.value = document.transcription.text2.value
		.toLowerCase()
		.replace(/[ıi]\u0307/g, "i")
		.replace(/t\u200c\u030c/g, "ť")
		.replace(/ç\u030c/g, "ḉ")
		.replace(/p\u030c/g, "ṕ")
		
		.replace(/a/g, "ა")
		.replace(/b/g, "ბ")
		.replace(/g/g, "გ")
		.replace(/d/g, "დ")
		.replace(/e/g, "ე")
		.replace(/v/g, "ვ")
		.replace(/ť/g, "ტ")
		.replace(/t/g, "თ")
		.replace(/i/g, "ი")
		.replace(/ǩ/g, "კ")
		.replace(/l/g, "ლ")
		.replace(/m/g, "მ")
		.replace(/n/g, "ნ")
		.replace(/o/g, "ო")
		.replace(/ṕ/g, "პ")
		.replace(/j/g, "ჟ")
		.replace(/r/g, "რ")
		.replace(/s/g, "ს")
		.replace(/u/g, "უ")
		.replace(/p/g, "ფ")
		.replace(/k/g, "ქ")
		.replace(/ǧ/g, "ღ")
		.replace(/q/g, "ყ")
		.replace(/ş/g, "შ")
		.replace(/ḉ/g, "ჭ")
		.replace(/ç/g, "ჩ")
		.replace(/ž/g, "ძ")
		.replace(/z/g, "ზ")
		.replace(/ǯ/g, "წ")
		.replace(/ʒ/g, "ც")
		.replace(/x/g, "ხ")
		.replace(/c/g, "ჯ")
		.replace(/h/g, "ჰ")
		.replace(/f/g, "ჶ")
		.replace(/y/g, "ჲ");
}

function geolat() {
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
		.replace(/თ/g, "T")
		.replace(/ი/g, "I")
		.replace(/კ/g, "Ǩ")
		.replace(/ლ/g, "L")
		.replace(/მ/g, "M")
		.replace(/ნ/g, "N")
		.replace(/ჲ/g, "Y")
		.replace(/ო/g, "O")
		.replace(/პ/g, "P\u030c")
		.replace(/ჟ/g, "J")
		.replace(/რ/g, "R")
		.replace(/ს/g, "S")
		.replace(/ტ/g, "Ť")
		.replace(/უ/g, "U")
		.replace(/ფ/g, "P")
		.replace(/ქ/g, "K")
		.replace(/ღ/g, "Ǧ")
		.replace(/ყ/g, "Q")
		.replace(/შ/g, "Ş")
		.replace(/ჩ/g, "Ç")
		.replace(/ც/g, "Ʒ")
		.replace(/ძ/g, "Ž")
		.replace(/ჶ/g, "F")
		.replace(/წ/g, "Ǯ")
		.replace(/ჭ/g, "Ç\u030c")
		.replace(/ხ/g, "X")
		.replace(/ჯ/g, "C")
		.replace(/ჰ/g, "H")

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019\u030c'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		})
		
		.replace(/ť/g, "t\u200c\u030c");

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value.replace(key, latinWords[key])
		.normalize('NFC');
	});
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}