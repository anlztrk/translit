function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/(\u2018|\u2019|\u02bc)/g, "\u0027")
		.replace(/İ/g, "I")
		.replace(/ı/g, "i")
		.normalize('NFD')
		.replace(/(3|Ʒ)(\u002a|\u003e|\u005c)/g, "ʒ")
		.replace(/ʒ(\u002a|\u003e|\u005c)/g, "Ʒ")
		.replace(/(C\u0327|c\u0327|K|k|P|p|T|Z|z|Ʒ|ʒ)\u0027/g, "$1\u030c")
		.replace(/3\u0027/g, "ʒ\u030c")
		.replace(/(C\u0327|c\u0327|K|k|P|p|Z|z)\u0301/g, "$1\u030c")
		.replace(/t(\u0027|\u0306|\u030c)/g, "t\u200c\u030c")
		.replace(/(G|g|T)\u0306/g, "$1\u030c")
		.replace(/T(S|s)/g, "Ʒ")
		.replace(/ts/g, "ʒ")
		.replace(/D(Z|z)/g, "Z\u030c")
		.replace(/dz/g, "z\u030c")

		.replace(/Ӡ/g, "Ʒ")
		.replace(/ӡ/g, "ʒ")
		.replace(/З/g, "Ʒ")
		.replace(/з/g, "ʒ")
		.normalize('NFC');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}