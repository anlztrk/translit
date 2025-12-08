function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/\u0023grave\u0023/g, "\u0300")
		.replace(/\u0023(acute|accent)\u0023/g, "\u0301")
		.replace(/\u0023(circumflex|caret)\u0023/g, "\u0302")
		.replace(/\u0023tilde\u0023/g, "\u0303")
		.replace(/\u0023macron\u0023/g, "\u0304")
		.replace(/\u0023breve\u0023/g, "\u0306")
		.replace(/\u0023dot(above)?\u0023/g, "\u0307")
		.replace(/\u0023(diaeresis|umlaut|trema)\u0023/g, "\u0308")
		.replace(/\u0023hook(above)?\u0023/g, "\u0309")
		.replace(/\u0023ring(above)?\u0023/g, "\u030a")
		.replace(/\u0023doubleacute\u0023/g, "\u030b")
		.replace(/\u0023(caron|hacek|hachek)\u0023/g, "\u030c")
		.replace(/\u0023(turned)?commaabove\u0023/g, "\u0312")
		.replace(/\u0023acute(accent)?below\u0023/g, "\u0317")
		.replace(/\u0023horn\u0023/g, "\u031b")
		.replace(/\u0023dotbelow\u0023/g, "\u0323")
		.replace(/\u0023comma(below)?\u0023/g, "\u0326")
		.replace(/\u0023(cedilla|tail)\u0023/g, "\u0327")
		.replace(/\u0023ogonek\u0023/g, "\u0328")
		.replace(/\u0023(vertical)?line(below)?\u0023/g, "\u0329")
		.replace(/\u0023(circumflex|caret)below\u0023/g, "\u032d")
		.replace(/\u0023U\+([0-9A-Fa-f]+)\u0023|\u0023u([0-9A-Fa-f]{4})\u0023/g, (_, uPlus, uLower) => {
			const hex = uPlus || uLower;
			return String.fromCodePoint(parseInt(hex, 16));
		})
		.normalize('NFC');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}