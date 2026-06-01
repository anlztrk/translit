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

		.replace(/\u0915\u093c/g, 'QƏ') // क़
		.replace(/\u0916\u093c/g, 'XƏ') // ख़
		.replace(/\u0917\u093c/g, 'ĠƏ') // ग़
		.replace(/\u091c\u093c/g, 'ZƏ') // ज़
		.replace(/\u091d\u093c/g, 'ŹƏ') // झ़
		.replace(/\u092b\u093c/g, 'FƏ') // फ़
		.replace(/\u0921\u093c/g, 'ṚƏ') // ड़
		.replace(/\u0922\u093c/g, 'ṚHƏ') // ढ़
		.replace(/\u0935\u093c/g, 'WƏ') // व़

		.replace(/\u0915/g, 'KƏ') // क
		.replace(/\u0916/g, 'KHƏ') // ख
		.replace(/\u0917/g, 'GƏ') // ग
		.replace(/\u0918/g, 'GHƏ') // घ
		.replace(/\u0919/g, 'ṄƏ') // ङ
		.replace(/\u0939/g, 'HƏ') // ह
		.replace(/\u091a/g, 'CƏ') // च
		.replace(/\u091b/g, 'CHƏ') // छ
		.replace(/\u091c/g, 'JƏ') // ज
		.replace(/\u091d/g, 'JHƏ') // झ
		.replace(/\u091e/g, 'ÑƏ') // ञ
		.replace(/\u092f/g, 'YƏ') // य
		.replace(/\u0936/g, 'ŚƏ') // श
		.replace(/\u091f/g, 'ṬƏ') // ट
		.replace(/\u0920/g, 'ṬHƏ') // ठ
		.replace(/\u0921/g, 'ḌƏ') // ड
		.replace(/\u0922/g, 'ḌHƏ') // ढ
		.replace(/\u0923/g, 'ṆƏ') // ण
		.replace(/\u0930/g, 'RƏ') // र
		.replace(/\u0937/g, 'ṢƏ') // ष
		.replace(/\u0924/g, 'TƏ') // त
		.replace(/\u0925/g, 'THƏ') // थ
		.replace(/\u0926/g, 'DƏ') // द
		.replace(/\u0927/g, 'DHƏ') // ध
		.replace(/\u0928/g, 'NƏ') // न
		.replace(/\u0932/g, 'LƏ') // ल
		.replace(/\u0938/g, 'SƏ') // स
		.replace(/\u092a/g, 'PƏ') // प
		.replace(/\u092b/g, 'PHƏ') // फ
		.replace(/\u092c/g, 'BƏ') // ब
		.replace(/\u092d/g, 'BHƏ') // भ
		.replace(/\u092e/g, 'MƏ') // म
		.replace(/\u0933/g, 'ḶƏ') // ळ
		.replace(/\u0934/g, 'ḺƏ') // ऴ
		.replace(/\u0935/g, 'VƏ') // व
		.replace(/\u0905/g, 'A') // अ
		.replace(/[\u0907\u093f]/g, 'I') // इ, ि
		.replace(/[\u0909\u0941]/g, 'U') // उ, ु
		.replace(/[\u090b\u0943]/g, 'Ŕ') // ऋ, ृ
		.replace(/[\u090f\u0947]/g, 'E') // ए, े
		.replace(/[\u0913\u094b]/g, 'O') // ओ, ो
		.replace(/[\u0906\u093e]/g, 'Ā') // आ, ा
		.replace(/[\u0908\u0940]/g, 'Ī') // ई, ी
		.replace(/[\u090a\u0942]/g, 'Ū') // ऊ, ू
		.replace(/[\u0910\u0948\u090d\u0945]/g, 'AI') // ऐ, ै, ॲ, ॅ
		.replace(/[\u0914\u094c\u0911\u0949]/g, 'AU') // औ, ौ, ऑ, ॉ

		.replace(/\u0901/g, '\u0303')

		.replace(/\u0902/g, 'Ṁ')
		.replace(/Ṁ([KQXGĠṄ])/g, '\u0303Ṅ$1')
		.replace(/Ṁ([CJZŹÑ])/g, '\u0303Ñ$1')
		.replace(/Ṁ([ṬḌṚṆṢ])/g, '\u0303Ṇ$1')
		.replace(/Ṁ([TDRNS])/g, '\u0303N$1')
		.replace(/Ṁ([PFBVW])/g, '\u0303M$1')
		.replace(/Ṁ/g, '\u0303')

		.replace(/Ə\u094d/g, '')
		.replace(/Ə(?=[AĀƏEIĪOUŪŔ])/g, '')
		.replace(/(?<=[AĀƏEIĪOUŪŔ])([KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW])Ə(?=[KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW][AĀIĪOUŪŔ])/g, '$1')
		.replace(/(?<=[AĀƏEIĪOUŪŔKQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW\u0303][KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW\u0303])Ə(?![KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW\u0303])/g, '')
		.replace(/Ə/g, 'A')

		.replace(/\u0903/g, 'Ḥ')
		.replace(/\u0020[\u0964\u0965\u0970]\u0020/g, '\u002e\u0020')
		.replace(/[\u0964\u0965]/g, '\u002e')

		.replace(/\u0966/g, '\u0030')
		.replace(/\u0967/g, '\u0031')
		.replace(/\u0968/g, '\u0032')
		.replace(/\u0969/g, '\u0033')
		.replace(/\u096a/g, '\u0034')
		.replace(/\u096b/g, '\u0035')
		.replace(/\u096c/g, '\u0036')
		.replace(/\u096d/g, '\u0037')
		.replace(/\u096e/g, '\u0038')
		.replace(/\u096f/g, '\u0039')

		.normalize('NFC')

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u0303\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase()
				.normalize('NFC');
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text3.value = document.transcription.text3.value.replace(key, latinWords[key]);
	});
}

function topleft() {
	document.transcription.text2.value = document.transcription.text1.value;
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

		.replace(/\u0915\u093c/g, 'QƏ') // क़
		.replace(/\u0916\u093c/g, 'XƏ') // ख़
		.replace(/\u0917\u093c/g, 'ĠƏ') // ग़
		.replace(/\u091c\u093c/g, 'ZƏ') // ज़
		.replace(/\u091d\u093c/g, 'ŹƏ') // झ़
		.replace(/\u092b\u093c/g, 'FƏ') // फ़
		.replace(/\u0921\u093c/g, 'ṚƏ') // ड़
		.replace(/\u0922\u093c/g, 'ṚHƏ') // ढ़
		.replace(/\u0935\u093c/g, 'WƏ') // व़

		.replace(/\u0915/g, 'KƏ') // क
		.replace(/\u0916/g, 'KHƏ') // ख
		.replace(/\u0917/g, 'GƏ') // ग
		.replace(/\u0918/g, 'GHƏ') // घ
		.replace(/\u0919/g, 'ṄƏ') // ङ
		.replace(/\u0939/g, 'HƏ') // ह
		.replace(/\u091a/g, 'CƏ') // च
		.replace(/\u091b/g, 'CHƏ') // छ
		.replace(/\u091c/g, 'JƏ') // ज
		.replace(/\u091d/g, 'JHƏ') // झ
		.replace(/\u091e/g, 'ÑƏ') // ञ
		.replace(/\u092f/g, 'YƏ') // य
		.replace(/\u0936/g, 'ŚƏ') // श
		.replace(/\u091f/g, 'ṬƏ') // ट
		.replace(/\u0920/g, 'ṬHƏ') // ठ
		.replace(/\u0921/g, 'ḌƏ') // ड
		.replace(/\u0922/g, 'ḌHƏ') // ढ
		.replace(/\u0923/g, 'ṆƏ') // ण
		.replace(/\u0930/g, 'RƏ') // र
		.replace(/\u0937/g, 'ṢƏ') // ष
		.replace(/\u0924/g, 'TƏ') // त
		.replace(/\u0925/g, 'THƏ') // थ
		.replace(/\u0926/g, 'DƏ') // द
		.replace(/\u0927/g, 'DHƏ') // ध
		.replace(/\u0928/g, 'NƏ') // न
		.replace(/\u0932/g, 'LƏ') // ल
		.replace(/\u0938/g, 'SƏ') // स
		.replace(/\u092a/g, 'PƏ') // प
		.replace(/\u092b/g, 'PHƏ') // फ
		.replace(/\u092c/g, 'BƏ') // ब
		.replace(/\u092d/g, 'BHƏ') // भ
		.replace(/\u092e/g, 'MƏ') // म
		.replace(/\u0933/g, 'ḶƏ') // ळ
		.replace(/\u0934/g, 'ḺƏ') // ऴ
		.replace(/\u0935/g, 'VƏ') // व
		.replace(/[\u0905\u090d\u0945]/g, 'A') // अ
		.replace(/[\u0907\u093f]/g, 'I') // इ, ि
		.replace(/[\u0909\u0941]/g, 'U') // उ, ु
		.replace(/[\u090b\u0943]/g, 'Ŕ') // ऋ, ृ
		.replace(/[\u090f\u0947]/g, 'E') // ए, े
		.replace(/[\u0913\u094b\u0911\u0949]/g, 'O') // ओ, ो, ऑ, ॉ
		.replace(/[\u0906\u093e]/g, 'Ā') // आ, ा
		.replace(/[\u0908\u0940]/g, 'Ī') // ई, ी
		.replace(/[\u090a\u0942]/g, 'Ū') // ऊ, ू
		.replace(/[\u0910\u0948]/g, 'AI') // ऐ, ै
		.replace(/[\u0914\u094c]/g, 'AU') // औ, ौ

		.replace(/\u0901/g, '\u0303')

		.replace(/\u0902/g, 'Ṁ')
		.replace(/Ṁ([KQXGĠṄ])/g, '\u0303Ṅ$1')
		.replace(/Ṁ([CJZŹÑ])/g, '\u0303Ñ$1')
		.replace(/Ṁ([ṬḌṚṆṢ])/g, '\u0303Ṇ$1')
		.replace(/Ṁ([TDRNS])/g, '\u0303N$1')
		.replace(/Ṁ([PFBVW])/g, '\u0303M$1')
		.replace(/Ṁ/g, '\u0303')

		.replace(/Ə\u094d/g, '')
		.replace(/Ə(?=[AĀƏEIĪOUŪŔ])/g, '')
		.replace(/(?<=[AĀƏEIĪOUŪŔ])([KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW])Ə(?=[KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW][AĀIĪOUŪŔ])/g, '$1')
		.replace(/(?<=[AĀƏEIĪOUŪŔKQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW\u0303][KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW\u0303])Ə(?![KQXGĠṄHCJZŹÑYŚṬḌṚṆRṢTDNLSPFBMVW\u0303])/g, '')
		.replace(/Ə/g, 'A')

		.replace(/\u0903/g, 'Ḥ')
		.replace(/\u0020[\u0964\u0965\u0970]\u0020/g, '\u002e\u0020')
		.replace(/[\u0964\u0965]/g, '\u002e')

		.replace(/\u0966/g, '\u0030')
		.replace(/\u0967/g, '\u0031')
		.replace(/\u0968/g, '\u0032')
		.replace(/\u0969/g, '\u0033')
		.replace(/\u096a/g, '\u0034')
		.replace(/\u096b/g, '\u0035')
		.replace(/\u096c/g, '\u0036')
		.replace(/\u096d/g, '\u0037')
		.replace(/\u096e/g, '\u0038')
		.replace(/\u096f/g, '\u0039')

		.replace(/\u0303([ṄÑṆNM])/g, '$1')
		.replace(/\u0303/g, 'N')

		.replace(/AA/g, 'A\u002dA')
		.replace(/EE/g, 'E\u002dE')
		.replace(/OO/g, 'O\u002dO')
		
		.replace(/ĪE/g, 'Ī\u002dE')
		.replace(/EĪ/g, 'E\u002dĪ')
		.replace(/ŪO/g, 'Ū\u002dO')
		.replace(/OŪ/g, 'O\u002dŪ')

		.replace(/JÑ/g, 'GY')
		.replace(/X/g, 'KH')
		.replace(/Ġ/g, 'GH')
		.replace(/Ź/g, 'ZH')
		.replace(/Ṛ/g, 'R')

		.replace(/Ṅ/g, 'N')
		.replace(/C/g, 'CH')
		.replace(/Ñ/g, 'N')
		.replace(/Ś/g, 'SH')
		.replace(/Ṭ/g, 'T')
		.replace(/Ḍ/g, 'D')
		.replace(/Ṇ/g, 'N')
		.replace(/Ṣ/g, 'SH')
		.replace(/Ḷ/g, 'L')
		.replace(/Ḻ/g, 'L')
		.replace(/V/g, 'W')
		.replace(/Ŕ/g, 'RI')
		.replace(/Ā/g, 'AA')
		.replace(/Ī/g, 'EE')
		.replace(/Ū/g, 'OO')
		.replace(/Ḥ/g, 'H')

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u0303\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase()
				.normalize('NFC');
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value.replace(key, latinWords[key]);
	});
}

function lefttop() {}

function leftright() {}

function righttop() {}

function rightleft() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}

function copy3() {
	navigator.clipboard.writeText(document.transcription.text3.value);
}