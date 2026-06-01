function cyrlat() {
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

		.replace(/\u0915/g, 'KƏ') // क
		.replace(/\u0916/g, 'KHƏ') // ख
		.replace(/\u0917/g, 'GƏ') // ग
		.replace(/\u0918/g, 'GHƏ') // घ
		.replace(/\u0919/g, 'ṄƏ') // ङ
		.replace(/\u0939/g, 'HƏ') // ह
		.replace(/\u091A/g, 'CƏ') // च
		.replace(/\u091B/g, 'CHƏ') // छ
		.replace(/\u091C/g, 'JƏ') // ज
		.replace(/\u091D/g, 'JHƏ') // झ
		.replace(/\u091E/g, 'ÑƏ') // ञ
		.replace(/\u092F/g, 'YƏ') // य
		.replace(/\u0936/g, 'ŚƏ') // श
		.replace(/\u091F/g, 'ṬƏ') // ट
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
		.replace(/\u092A/g, 'PƏ') // प
		.replace(/\u092B/g, 'PHƏ') // फ
		.replace(/\u092C/g, 'BƏ') // ब
		.replace(/\u092D/g, 'BHƏ') // भ
		.replace(/\u092E/g, 'MƏ') // म
		.replace(/\u0935/g, 'VƏ') // व
		.replace(/\u0905/g, 'A') // अ
		.replace(/[\u0907\u093F]/g, 'I') // इ, ि
		.replace(/[\u0909\u0941]/g, 'U') // उ, ु
		.replace(/[\u090B\u0943]/g, 'Ŕ') // ऋ, ृ
		.replace(/[\u090F\u0947]/g, 'E') // ए, े
		.replace(/[\u0913\u094B]/g, 'O') // ओ, ो
		.replace(/[\u0906\u093E]/g, 'Ā') // आ, ा
		.replace(/[\u0908\u0940]/g, 'Ī') // ई, ी
		.replace(/[\u090A\u0942]/g, 'Ū') // ऊ, ू
		.replace(/[\u0910\u0948]/g, 'AI') // ऐ, ै
		.replace(/[\u0914\u094C]/g, 'AU') // औ, ौ

		.replace(/Ə([AIUŔEOĀĪŪ])/g, '$1')
		.replace(/Ə/g, 'A')

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase()
				.normalize('NFC');
		});

	Object.keys(latinWords).forEach(key => {
		document.transcription.text3.value = document.transcription.text3.value.replace(key, latinWords[key]);
	});
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
