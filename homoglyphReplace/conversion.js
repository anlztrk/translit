function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/A/g, 'А')
		.replace(/B/g, 'В')
		.replace(/C/g, 'С')
		.replace(/Ç/g, 'Ҫ')
		.replace(/E/g, 'Е')
		.replace(/F/g, 'Ғ')
		.replace(/G/g, 'Ԍ')
		.replace(/H/g, 'Н')
		.replace(/I/g, 'І')
		.replace(/J/g, 'Ј')
		.replace(/K/g, 'Κ')
		.replace(/M/g, 'М')
		.replace(/N/g, 'Ν')
		.replace(/O/g, 'О')
		.replace(/Ö/g, 'Ӧ')
		.replace(/P/g, 'Р')
		.replace(/S/g, 'Ѕ')
		.replace(/Ş/g, 'Ș')
		.replace(/T/g, 'Т')
		.replace(/W/g, 'Ԝ')
		.replace(/X/g, 'Х')
		.replace(/Y/g, 'Ү')
		.replace(/Z/g, 'Ζ')
		.replace(/a/g, 'а')
		.replace(/b/g, 'Ь')
		.replace(/c/g, 'с')
		.replace(/ç/g, 'ҫ')
		.replace(/d/g, 'ԁ')
		.replace(/e/g, 'е')
		.replace(/h/g, 'һ')
		.replace(/i/g, 'і')
		.replace(/j/g, 'ј')
		.replace(/l/g, 'ӏ')
		.replace(/n/g, 'п')
		.replace(/o/g, 'о')
		.replace(/ö/g, 'ӧ')
		.replace(/p/g, 'р')
		.replace(/r/g, 'г')
		.replace(/s/g, 'ѕ')
		.replace(/ş/g, 'ș')
		.replace(/w/g, 'ԝ')
		.replace(/x/g, 'х')
		.replace(/y/g, 'у');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
