function topleft() {
	let latinWords = {};
	let index = 0;

	document.transcription.text2.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})

		.replace(/ᆪᄉ/g, 'ᆨᄊ')
		.replace(/ᆬᄌ/g, 'ᆫᄍ')
		.replace(/ᆰᄀ/g, 'ᆯᄁ')
		.replace(/ᆲᄇ/g, 'ᆯᄈ')
		.replace(/ᆹᄉ/g, 'ᆸᄊ')
		.replace(/ᆳᄉ/g, 'ᆯᄊ')

		.replace(/ᆪᄋ/g, 'ᆨᄉ')
		.replace(/ᆬᄋ/g, 'ᆫᄌ')
		.replace(/ᆭᄋ/g, 'ᆫᄒ')
		.replace(/ᆰᄋ/g, 'ᆯᄀ')
		.replace(/ᆲᄋ/g, 'ᆯᄇ')
		.replace(/ᆶᄋ/g, 'ᆯᄒ')
		.replace(/ᆱᄋ/g, 'ᆯᄆ')
		.replace(/ᆹᄋ/g, 'ᆸᄉ')
		.replace(/ㄿᄋ/g, 'ᆯᄑ')
		.replace(/ᆳᄋ/g, 'ᆯᄉ')
		.replace(/ㄾᄋ/g, 'ᆯᄐ')

		.replace(/ᆭᄀ/g, 'ᆫᄏ')
		.replace(/ᆭᄃ/g, 'ᆫᄐ')
		.replace(/ᆭᄇ/g, 'ᆫᄑ')
		.replace(/ᆭᄌ/g, 'ᆫᄎ')
		.replace(/ᆶᄀ/g, 'ᆯᄏ')
		.replace(/ᆶᄃ/g, 'ᆯᄐ')
		.replace(/ᆶᄇ/g, 'ᆯᄑ')
		.replace(/ᆶᄌ/g, 'ᆯᄎ')
		.replace(/ᆬᄒ/g, 'ᆫᄎ')
		.replace(/ᆰᄒ/g, 'ᆯᄏ')
		.replace(/ᆲᄒ/g, 'ᆯᄑ')

		.replace(/ᆪ/g, 'ᆨ')
		.replace(/ᆬ/g, 'ᆫ')
		.replace(/ᆭ/g, 'ᆫ')
		.replace(/ᆰ/g, 'ᆨ')
		.replace(/ᆲ/g, 'ᆯ')
		.replace(/ᆶ/g, 'ᆯ')
		.replace(/ᆱ/g, 'ᆷ')
		.replace(/ᆹ/g, 'ᆸ')
		.replace(/ㄿ/g, 'ᇁ')
		.replace(/ᆳ/g, 'ᆯ')
		.replace(/ㄾ/g, 'ᆯ')

		.replace(/ᆮ이/g, '지')
		.replace(/ᆮ히/g, '치')
		.replace(/ᇀ이/g, '치')

		.replace(/ᆨᄋ/g, 'ᄀ')
		.replace(/ᆩᄋ/g, 'ᄁ')
		.replace(/ᆫᄋ/g, 'ᄂ')
		.replace(/ᆮᄋ/g, 'ᄃ')
		.replace(/ᆯᄋ/g, 'ᄅ')
		.replace(/ᆷᄋ/g, 'ᄆ')
		.replace(/ᆸᄋ/g, 'ᄇ')
		.replace(/ᆺᄋ/g, 'ᄉ')
		.replace(/ᆻᄋ/g, 'ᄊ')
		.replace(/ᆽᄋ/g, 'ᄌ')
		.replace(/ᆾᄋ/g, 'ᄎ')
		.replace(/ᆿᄋ/g, 'ᄏ')
		.replace(/ᇀᄋ/g, 'ᄐ')
		.replace(/ᇁᄋ/g, 'ᄑ')
		.replace(/ᇂᄋ/g, 'ᄋ')

		.replace(/(ᆨ|ᆿ)ᄂ/g, 'ᆼᄂ')
		.replace(/(ᆸ|ᇁ)ᄂ/g, 'ᆷᄂ')
		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄂ/g, 'ᆫᄂ')
		.replace(/(ᆨ|ᆿ)ᄅ/g, 'ᆼᄂ')
		.replace(/ᆫᄅ/g, 'ᆯᄅ')
		.replace(/(ᆷ|ᆸ)ᄅ/g, 'ᆷᄂ')
		.replace(/ᆼᄅ/g, 'ᆼᄂ')
		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄅ/g, 'ᆫᄂ')
		.replace(/(ᆨ|ᆿ)ᄆ/g, 'ᆼᄆ')
		.replace(/(ᆸ|ᇁ)ᄆ/g, 'ᆷᄆ')
		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄆ/g, 'ᆫᄆ')

		.replace(/ᇂᄀ/g, 'ᄏ')
		.replace(/ᇂᄃ/g, 'ᄐ')
		.replace(/ᇂᄇ/g, 'ᄑ')
		.replace(/ᇂᄌ/g, 'ᄎ')

		.replace(/ᇂᄂ/g, 'ᆫᄂ')
		.replace(/ᇂ(ᄅ|ᄆ|ᄉ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ|ᄁ|ᄄ|ᄈ|ᄊ|ᄍ)/g, '$1')

		.replace(/ᆫᄅ/g, 'ᆯᄅ')
		.replace(/ᆯᄂ/g, 'ᆯᄅ')

		.replace(/(ᅡ|ᅪ|ᅣ)ᄋ(ᅦ|ᅥ|ᅳ)/g, '$1-ᄋ$2')
		.replace(/(ᅦ|ᅢ|ᅤ|ᅨ|ᅫ|ᅬ|ᅰ)ᄋ(ᅩ|ᅬ|ᅮ|ᅴ)/g, '$1-ᄋ$2')
		.replace(/(ᅥ|ᅧ|ᅩ|ᅭ|ᅯ)ᄋ(ᅦ|ᅥ|ᅳ)/g, '$1-ᄋ$2')
		.replace(/(ᅮ|ᅲ|ᅳ)이/g, '$1-이')
		// .replace(/ᆫᄀ/g, 'ᆫ-ᄀ')
		.replace(/ᆼᄋ/g, 'ᆼ-ᄋ')

		.replace(/ᆯᄅ/g, 'LL')
		.replace(/ᄀ/g, 'G')
		.replace(/ᆨ/g, 'K')
		.replace(/ᄁ/g, 'KK')
		.replace(/ᆩ/g, 'K')
		.replace(/ᄂ/g, 'N')
		.replace(/ᆫ/g, 'N')
		.replace(/ᄃ/g, 'D')
		.replace(/ᆮ/g, 'T')
		.replace(/ᄄ/g, 'TT')
		.replace(/ᄅ/g, 'R')
		.replace(/ᆯ/g, 'L')
		.replace(/ᄆ/g, 'M')
		.replace(/ᆷ/g, 'M')
		.replace(/ᄇ/g, 'B')
		.replace(/ᆸ/g, 'P')
		.replace(/ᄈ/g, 'PP')
		.replace(/ᄉ/g, 'S')
		.replace(/ᆺ/g, 'T')
		.replace(/ᄊ/g, 'SS')
		.replace(/ᆻ/g, 'T')
		.replace(/ᄋ/g, '')
		.replace(/ᆼ/g, 'NG')
		.replace(/ᄌ/g, 'J')
		.replace(/ᆽ/g, 'T')
		.replace(/ᄍ/g, 'JJ')
		.replace(/ᄎ/g, 'CH')
		.replace(/ᆾ/g, 'T')
		.replace(/ᄏ/g, 'K')
		.replace(/ᆿ/g, 'K')
		.replace(/ᄐ/g, 'T')
		.replace(/ᇀ/g, 'T')
		.replace(/ᄑ/g, 'P')
		.replace(/ᇁ/g, 'P')
		.replace(/ᄒ/g, 'H')
		.replace(/ᇂ/g, 'T')

		.replace(/ᅡ/g, 'A')
		.replace(/ᅢ/g, 'AE')
		.replace(/ᅣ/g, 'YA')
		.replace(/ᅤ/g, 'YAE')
		.replace(/ᅥ/g, 'EO')
		.replace(/ᅦ/g, 'E')
		.replace(/ᅧ/g, 'YEO')
		.replace(/ᅨ/g, 'YE')
		.replace(/ᅩ/g, 'O')
		.replace(/ᅪ/g, 'WA')
		.replace(/ᅫ/g, 'WAE')
		.replace(/ᅬ/g, 'OE')
		.replace(/ᅭ/g, 'YO')
		.replace(/ᅮ/g, 'U')
		.replace(/ᅯ/g, 'WO')
		.replace(/ᅰ/g, 'WE')
		.replace(/ᅱ/g, 'WI')
		.replace(/ᅲ/g, 'YU')
		.replace(/ᅳ/g, 'EU')
		.replace(/ᅴ/g, 'UI')
		.replace(/ᅵ/g, 'I')

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		})
		.normalize('NFC');

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value
			.replace(key, latinWords[key]);
	});
}

function topright() {
	let latinWords = {};
	let index = 0;

	document.transcription.text3.value = document.transcription.text1.value
		.normalize('NFD')
		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})

		.replace(/ᆪᄉ/g, 'ᆨᄊ')
		.replace(/ᆬᄌ/g, 'ᆫᄍ')
		.replace(/ᆰᄀ/g, 'ᆯᄁ')
		.replace(/ᆲᄇ/g, 'ᆯᄈ')
		.replace(/ᆹᄉ/g, 'ᆸᄊ')
		.replace(/ᆳᄉ/g, 'ᆯᄊ')

		.replace(/ᆪᄋ/g, 'ᆨᄉ')
		.replace(/ᆬᄋ/g, 'ᆫᄌ')
		.replace(/ᆭᄋ/g, 'ᆫᄒ')
		.replace(/ᆰᄋ/g, 'ᆯᄀ')
		.replace(/ᆲᄋ/g, 'ᆯᄇ')
		.replace(/ᆶᄋ/g, 'ᆯᄒ')
		.replace(/ᆱᄋ/g, 'ᆯᄆ')
		.replace(/ᆹᄋ/g, 'ᆸᄉ')
		.replace(/ㄿᄋ/g, 'ᆯᄑ')
		.replace(/ᆳᄋ/g, 'ᆯᄉ')
		.replace(/ㄾᄋ/g, 'ᆯᄐ')

		.replace(/ᆭᄀ/g, 'ᆫᄏ')
		.replace(/ᆭᄃ/g, 'ᆫᄐ')
		.replace(/ᆭᄇ/g, 'ᆫᄑ')
		.replace(/ᆭᄌ/g, 'ᆫᄎ')
		.replace(/ᆶᄀ/g, 'ᆯᄏ')
		.replace(/ᆶᄃ/g, 'ᆯᄐ')
		.replace(/ᆶᄇ/g, 'ᆯᄑ')
		.replace(/ᆶᄌ/g, 'ᆯᄎ')
		.replace(/ᆬᄒ/g, 'ᆫᄎ')
		.replace(/ᆰᄒ/g, 'ᆯᄏ')
		.replace(/ᆲᄒ/g, 'ᆯᄑ')

		.replace(/ᆪ/g, 'ᆨ')
		.replace(/ᆬ/g, 'ᆫ')
		.replace(/ᆭ/g, 'ᆫ')
		.replace(/ᆰ/g, 'ᆨ')
		.replace(/ᆲ/g, 'ᆯ')
		.replace(/ᆶ/g, 'ᆯ')
		.replace(/ᆱ/g, 'ᆷ')
		.replace(/ᆹ/g, 'ᆸ')
		.replace(/ㄿ/g, 'ᇁ')
		.replace(/ᆳ/g, 'ᆯ')
		.replace(/ㄾ/g, 'ᆯ')

		.replace(/ᆮ이/g, '지')
		.replace(/ᆮ히/g, '치')
		.replace(/ᇀ이/g, '치')

		.replace(/ᆨᄋ/g, 'ᄀ')
		.replace(/ᆩᄋ/g, 'ᄁ')
		.replace(/ᆫᄋ/g, 'ᄂ')
		.replace(/ᆮᄋ/g, 'ᄃ')
		.replace(/ᆯᄋ/g, 'ᄅ')
		.replace(/ᆷᄋ/g, 'ᄆ')
		.replace(/ᆸᄋ/g, 'ᄇ')
		.replace(/ᆺᄋ/g, 'ᄉ')
		.replace(/ᆻᄋ/g, 'ᄊ')
		.replace(/ᆽᄋ/g, 'ᄌ')
		.replace(/ᆾᄋ/g, 'ᄎ')
		.replace(/ᆿᄋ/g, 'ᄏ')
		.replace(/ᇀᄋ/g, 'ᄐ')
		.replace(/ᇁᄋ/g, 'ᄑ')
		.replace(/ᇂᄋ/g, 'ᄋ')

		.replace(/(ᆨ|ᆿ)ᄂ/g, 'ᆼᄂ')
		.replace(/(ᆸ|ᇁ)ᄂ/g, 'ᆷᄂ')
		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄂ/g, 'ᆫᄂ')
		.replace(/(ᆨ|ᆿ)ᄅ/g, 'ᆼᄂ')
		.replace(/ᆫᄅ/g, 'ᆯᄅ')
		.replace(/(ᆷ|ᆸ)ᄅ/g, 'ᆷᄂ')
		.replace(/ᆼᄅ/g, 'ᆼᄂ')
		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄅ/g, 'ᆫᄂ')
		.replace(/(ᆨ|ᆿ)ᄆ/g, 'ᆼᄆ')
		.replace(/(ᆸ|ᇁ)ᄆ/g, 'ᆷᄆ')
		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄆ/g, 'ᆫᄆ')

		.replace(/ᇂᄀ/g, 'ᄏ')
		.replace(/ᇂᄃ/g, 'ᄐ')
		.replace(/ᇂᄇ/g, 'ᄑ')
		.replace(/ᇂᄌ/g, 'ᄎ')

		.replace(/ᇂᄂ/g, 'ᆫᄂ')
		.replace(/ᇂ(ᄅ|ᄆ|ᄉ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ|ᄁ|ᄄ|ᄈ|ᄊ|ᄍ)/g, '$1')

		.replace(/ᆫᄅ/g, 'ᆯᄅ')
		.replace(/ᆯᄂ/g, 'ᆯᄅ')

		.replace(/(ᅡ|ᅪ|ᅣ|ᅩ|ᅭ)에/g, '$1에\u0308')
		.replace(/ᆫᄀ/g, 'ᆫ\u2019ᄀ')
		.replace(/ᆼᄋ/g, 'ᆼ\u2019ᄋ')

		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ\u2019|ᆯ|ᆷ|ᆼ)ᄀ/g, '$1G')
		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄃ/g, '$1D')
		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄇ/g, '$1B')
		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄌ/g, '$1J')
		.replace(/ᆯᄅ/g, 'LL')
		.replace(/ᄀ/g, 'K')
		.replace(/ᆨ/g, 'K')
		.replace(/ᄁ/g, 'KK')
		.replace(/ᆩ/g, 'K')
		.replace(/ᄂ/g, 'N')
		.replace(/ᆫ/g, 'N')
		.replace(/ᄃ/g, 'T')
		.replace(/ᆮ/g, 'T')
		.replace(/ᄄ/g, 'TT')
		.replace(/ᄅ/g, 'R')
		.replace(/ᆯ/g, 'L')
		.replace(/ᄆ/g, 'M')
		.replace(/ᆷ/g, 'M')
		.replace(/ᄇ/g, 'P')
		.replace(/ᆸ/g, 'P')
		.replace(/ᄈ/g, 'PP')
		.replace(/쉬/g, 'SHWI')
		.replace(/ᄉ/g, 'S')
		.replace(/ᆺ/g, 'T')
		.replace(/ᄊ/g, 'SS')
		.replace(/ᆻ/g, 'T')
		.replace(/ᄋ/g, '')
		.replace(/ᆼ/g, 'NG')
		.replace(/ᄌ/g, 'CH')
		.replace(/ᆽ/g, 'T')
		.replace(/ᄍ/g, 'TCH')
		.replace(/ᄎ/g, 'CH\u2019')
		.replace(/ᆾ/g, 'T')
		.replace(/ᄏ/g, 'K\u2019')
		.replace(/ᆿ/g, 'K')
		.replace(/ᄐ/g, 'T\u2019')
		.replace(/ᇀ/g, 'T')
		.replace(/ᄑ/g, 'P\u2019')
		.replace(/ᇁ/g, 'P')
		.replace(/ᄒ/g, 'H')
		.replace(/ᇂ/g, 'T')

		.replace(/ᅡ/g, 'A')
		.replace(/ᅢ/g, 'AE')
		.replace(/ᅣ/g, 'YA')
		.replace(/ᅤ/g, 'YAE')
		.replace(/ᅥ/g, 'Ŏ')
		.replace(/ᅦ/g, 'E')
		.replace(/ᅧ/g, 'YŎ')
		.replace(/ᅨ/g, 'YE')
		.replace(/ᅩ/g, 'O')
		.replace(/ᅪ/g, 'WA')
		.replace(/ᅫ/g, 'WAE')
		.replace(/ᅬ/g, 'OE')
		.replace(/ᅭ/g, 'YO')
		.replace(/ᅮ/g, 'U')
		.replace(/ᅯ/g, 'WŎ')
		.replace(/ᅰ/g, 'WE')
		.replace(/ᅱ/g, 'WI')
		.replace(/ᅲ/g, 'YU')
		.replace(/ᅳ/g, 'Ŭ')
		.replace(/ᅴ/g, 'ŬI')
		.replace(/ᅵ/g, 'I')

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		})
		.normalize('NFC');

	Object.keys(latinWords).forEach(key => {
		document.transcription.text3.value = document.transcription.text3.value
			.replace(key, latinWords[key]);
	});
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
