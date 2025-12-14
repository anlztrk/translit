function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(\u02bb|\u02bc|\u2018|\u2019|\u0060)/g, "\u0027")
		.replace(/CHCH/g, "CCH")
		.replace(/Chch/g, "Cch")
		.replace(/chch/g, "cch")
		.replace(/SSH/g, "S\u0027SH")
		.replace(/Ssh/g, "S\u0027sh")
		.replace(/ssh/g, "s\u0027sh")
		.replace(/SHSH/g, "SSH")
		.replace(/Shsh/g, "Ssh")
		.replace(/shsh/g, "ssh")

		.replace(/lo\u0027bat/g, "lo\u0027\u0027bat")
		.replace(/mo\u0027jaz/g, "mo\u0027\u0027jaz")
		.replace(/mo\u0027jiza/g, "mo\u0027\u0027jiza")
		.replace(/mo\u0027tabar/g, "mo\u0027\u0027tabar")
		.replace(/mo\u0027tad/g, "mo\u0027\u0027tad")
		.replace(/mo\u0027tazila/g, "mo\u0027\u0027tazila")
		.replace(/mo\u0027tariza/g, "mo\u0027\u0027tariza")
		.replace(/Lo\u0027bat/g, "Lo\u0027\u0027bat")
		.replace(/Mo\u0027jaz/g, "Mo\u0027\u0027jaz")
		.replace(/Mo\u0027jiza/g, "Mo\u0027\u0027jiza")
		.replace(/Mo\u0027tabar/g, "Mo\u0027\u0027tabar")
		.replace(/Mo\u0027tad/g, "Mo\u0027\u0027tad")
		.replace(/Mo\u0027tazila/g, "Mo\u0027\u0027tazila")
		.replace(/Mo\u0027tariza/g, "Mo\u0027\u0027tariza")
		.replace(/LO\u0027BAT/g, "LO\u0027\u0027BAT")
		.replace(/MO\u0027JAZ/g, "MO\u0027\u0027JAZ")
		.replace(/MO\u0027JIZA/g, "MO\u0027\u0027JIZA")
		.replace(/MO\u0027TABAR/g, "MO\u0027\u0027TABAR")
		.replace(/MO\u0027TAD/g, "MO\u0027\u0027TAD")
		.replace(/MO\u0027TAZILA/g, "MO\u0027\u0027TAZILA")
		.replace(/MO\u0027TARIZA/g, "MO\u0027\u0027TARIZA")
		.replace(/(O|G|o|g)\u0027/g, "$1\u0306")
		.replace(/\u0027/g, "\u02bc")
		.normalize('NFC');
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}