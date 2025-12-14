function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/XH/g, "DŽ")
		.replace(/Xh/g, "Dž")
		.replace(/G(J|j)/g, "Đ")
		.replace(/Z(H|h)/g, "Ž")
		.replace(/S(H|h)/g, "Š")
		.replace(/L(L|l)/g, "Ł")
		.replace(/gj/g, "đ")
		.replace(/xh/g, "dž")
		.replace(/zh/g, "ž")
		.replace(/sh/g, "š")
		.replace(/ll/g, "ł")
		.replace(/ç/g, "č")
		.replace(/q/g, "ć")
		.replace(/x/g, "dz")
		.replace(/l/g, "lj")
		.replace(/ł/g, "l")
		.replace(/e/g, "é")
		.replace(/ë/g, "e")
		.replace(/Ç/g, "Č")
		.replace(/Q/g, "Ć")
		.replace(/X/g, "Dz")
		.replace(/L/g, "Lj")
		.replace(/Ł/g, "L")
		.replace(/E/g, "É")
		.replace(/Ë/g, "E");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}