function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(\u02c8|\u02cc|\u002e|\u02d0|\u02d1|\u0361)/g, "")
		.replace(/ᵊ/g, 'ə')
		.replace(/ɹ/g, 'r')
		.replace(/ɫ̩/g, 'ĕl')
		.replace(/m̩/g, 'ĕm')
		.replace(/n̩/g, 'ĕn')
		.replace(/hw/g, 'w')
		.replace(/(aʊ|æʊ)/g, 'aw')
		.replace(/(oʊ|əʊ)/g, 'o')
		.replace(/(u|uː)/g, 'uw')
		.replace(/(ɑ|ɑː)/g, 'ā')
		.replace(/(ɔ|ɔː)/g, 'ō')
		.replace(/(i|iː)/g, 'iy')
		.replace(/ɪə(r)?/g, 'ir')
		.replace(/ʊə(r)?/g, 'ur')
		.replace(/(ʌ|ə)/g, 'ĕ')
		.replace(/æ/g, 'a')
		.replace(/ʊ/g, 'u')
		.replace(/(ɜː|ɜ)/g, 'ö')
		.replace(/(ɝ|ɜɹ)/g, 'ör')
		.replace(/ɛː/g, 'er')
		.replace(/ɪ/g, 'i')
		.replace(/ɛ/g, 'e')
		.replace(/ɒ/g, 'å')
		.replace(/ɚ/g, 'ĕr')
		.replace(/ŋ/g, 'ń')
		.replace(/j/g, 'y')
		.replace(/(tʃ|ʧ)/g, 'ć')
		.replace(/(dʒ|ʤ)/g, 'j')
		.replace(/θ/g, 'þ')
		.replace(/ʃ/g, 'ś')
		.replace(/ð/g, 'ð')
		.replace(/ʒ/g, 'ź')
		.replace(/ɡ/g, 'g');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
