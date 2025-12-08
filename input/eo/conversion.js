function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/cx/g, "ĉ")
		.replace(/gx/g, "ĝ")
		.replace(/hx/g, "ĥ")
		.replace(/jx/g, "ĵ")
		.replace(/sx/g, "ŝ")
		.replace(/w/g, "ŭ")
		.replace(/ux/g, "ŭ")
		.replace(/Cx/g, "Ĉ")
		.replace(/Gx/g, "Ĝ")
		.replace(/Hx/g, "Ĥ")
		.replace(/Jx/g, "Ĵ")
		.replace(/Sx/g, "Ŝ")
		.replace(/Ux/g, "Ŭ")
		.replace(/CX/g, "Ĉ")
		.replace(/GX/g, "Ĝ")
		.replace(/HX/g, "Ĥ")
		.replace(/JX/g, "Ĵ")
		.replace(/SX/g, "Ŝ")
		.replace(/W/g, "Ŭ")
		.replace(/UX/g, "Ŭ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}