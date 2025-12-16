function cyrlat() {
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

		.replace(/ᆽᄒ/g, 'ᄐ')
		.replace(/ᆺᄒ/g, 'ᄐ')
		.replace(/ᆨᄒ/g, 'ᄏ')
		.replace(/ᆮᄒ/g, 'ᄐ')
		.replace(/ᆸᄒ/g, 'ᄑ')

		.replace(/ᆫᄅ/g, 'ᆯᄅ')
		.replace(/ᆯᄂ/g, 'ᆯᄅ')

		.replace(/ᆼᄀ/g, 'ᆫᄀ')
		.replace(/ᆼᄁ/g, 'ᆫᄁ')
		.replace(/ᆼᄏ/g, 'ᆫᄏ')

		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ)ᄋ/g, '$1\u2019ᄋ')
		.replace(/\u2019ᄋ(ᅣ|ᅤ|ᅧ|ᅨ|ᅪ|ᅫ|ᅬ|ᅭ|ᅯ|ᅰ|ᅱ|ᅲ)/g, 'ᄋ$1')

		.replace(/시/g, 'Şᅵ')
		.replace(/씨/g, 'Şᅵ')
		.replace(/샤/g, 'Şᅡ')
		.replace(/쌰/g, 'Şᅡ')
		.replace(/섀/g, 'Şᅢ')
		.replace(/썌/g, 'Şᅢ')
		.replace(/셔/g, 'Şᅥ')
		.replace(/쎠/g, 'Şᅥ')
		.replace(/셰/g, 'Şᅦ')
		.replace(/쎼/g, 'Şᅦ')
		.replace(/쇼/g, 'Şᅩ')
		.replace(/쑈/g, 'Şᅩ')
		.replace(/슈/g, 'Şᅮ')
		.replace(/쓔/g, 'Şᅮ')
		.replace(/쉬/g, 'Şᅱ')
		.replace(/쒸/g, 'Şᅱ')

		.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄀ|ᄁ)/g, '$1ᄏ')
		.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄃ|ᄄ)/g, '$1ᄐ')
		.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄇ|ᄈ)/g, '$1ᄑ')
		.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄌ|ᄍ)/g, '$1ᄎ')

		.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄎ/g, 'ᄎᄎ')

		.replace(/ᆯᄅ/g, 'LL')

		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ|ᆷ|ᆫ|ᆼ|ᆯ)ᄀ/g, '$1G')
		.replace(/ᄀ(ᅪ|ᅱ|ᅬ|ᅫ|ᅯ|ᅰ)/g, 'G$1')
		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ|ᆷ|ᆫ|ᆼ|ᆯ)ᄃ/g, '$1D')
		.replace(/ᄃ(ᅪ|ᅱ|ᅬ|ᅫ|ᅯ|ᅰ)/g, 'D$1')
		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ|ᆷ|ᆫ|ᆼ|ᆯ)ᄇ/g, '$1B')
		.replace(/ᄇ(ᅪ|ᅱ|ᅬ|ᅫ|ᅯ|ᅰ)/g, 'B$1')
		.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ|ᆷ|ᆫ|ᆼ|ᆯ)ᄌ/g, '$1C')
		.replace(/ᄌ(ᅪ|ᅱ|ᅬ|ᅫ|ᅯ|ᅰ)/g, 'C$1')
		.replace(/ᄀ/g, 'K')
		.replace(/ᆨ/g, 'K')
		.replace(/ᄁ/g, 'K')
		.replace(/ᆩ/g, 'K')
		.replace(/ᄂ/g, 'N')
		.replace(/ᆫ/g, 'N')
		.replace(/ᄃ/g, 'T')
		.replace(/ᆮ/g, 'T')
		.replace(/ᄄ/g, 'T')
		.replace(/ᄅ/g, 'R')
		.replace(/ᆯ/g, 'L')
		.replace(/ᄆ/g, 'M')
		.replace(/ᆷ/g, 'M')
		.replace(/ᄇ/g, 'P')
		.replace(/ᆸ/g, 'P')
		.replace(/ᄈ/g, 'P')
		.replace(/ᄉ/g, 'S')
		.replace(/ᆺ/g, 'T')
		.replace(/ᄊ/g, 'S')
		.replace(/ᆻ/g, 'T')

		.replace(/ᆼ/g, 'NĞ')
		.replace(/ᄌ/g, 'Ç')
		.replace(/ᆽ/g, 'T')
		.replace(/ᄍ/g, 'Ç')
		.replace(/ᄎ/g, 'Ç')
		.replace(/ᆾ/g, 'T')
		.replace(/ᄏ/g, 'K')
		.replace(/ᆿ/g, 'K')
		.replace(/ᄐ/g, 'T')
		.replace(/ᇀ/g, 'T')
		.replace(/ᄑ/g, 'P')
		.replace(/ᇁ/g, 'P')
		.replace(/ᄒ/g, 'H')
		.replace(/ᇂ/g, 'T')

		.replace(/위/g, 'Vİ')
		.replace(/외/g, 'VE')


		.replace(/ᄋ/g, '')
		.replace(/ᅡ/g, 'A')
		.replace(/ᅢ/g, 'E')
		.replace(/ᅣ/g, 'YA')
		.replace(/ᅤ/g, 'YE')
		.replace(/ᅥ/g, 'Ô')
		.replace(/ᅦ/g, 'E')
		.replace(/ᅧ/g, 'YÔ')
		.replace(/ᅨ/g, 'YE')
		.replace(/ᅩ/g, 'O')
		.replace(/ᅪ/g, 'VA')
		.replace(/ᅫ/g, 'VE')
		.replace(/ᅬ/g, 'Ö')
		.replace(/ᅭ/g, 'YO')
		.replace(/ᅮ/g, 'U')
		.replace(/ᅯ/g, 'VÔ')
		.replace(/ᅰ/g, 'VE')
		.replace(/ᅱ/g, 'Ü')
		.replace(/ᅲ/g, 'YU')
		.replace(/ᅳ/g, 'I')
		.replace(/ᅴ/g, 'IY')
		.replace(/ᅵ/g, 'İ')

		.normalize('NFC')
		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLocaleLowerCase('tr-TR');
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value
			.replace(key, latinWords[key]);
	});
}


function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
