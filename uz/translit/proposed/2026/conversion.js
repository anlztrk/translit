function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/'/g, "ʼ")
		.replace(/ˈ/g, "ʼ")
		.replace(/’/g, "ʼ")
		.replace(/ʼ/g, "ʼ")
		.replace(/‘/g, "ʼ")
		.replace(/ʻ/g, "ʼ")
		.replace(/´/g, "ʼ")
		.replace(/`/g, "ʼ")
		.replace(/ʿ/g, "ʼ")
		.replace(/ʹ/g, "ʼ")
		.replace(/ˊ/g, "ʼ")
		.replace(/׳/g, "ʼ")
		.replace(/′/g, "ʼ")
		.replace(/ʽ/g, "ʼ")
		.replace(/ߵ/g, "ʼ")
		.replace(/՚/g, "ʼ")
		.replace(/ߴ/g, "ʼ")
		.replace(/᾿/g, "ʼ")
		.replace(/ՙ/g, "ʼ")
		.replace(/῾/g, "ʼ")
		.replace(/‛/g, "ʼ")
		.replace(/ʾ/g, "ʼ")
		.replace(/՛/g, "ʼ")
		.replace(/ˋ/g, "ʼ")

		.replace(/oʼ/g, "oʻ")
		.replace(/Oʼ/g, "Oʻ")
		.replace(/gʼ/g, "gʻ")
		.replace(/Gʼ/g, "Gʻ")

		.replace(/oʻ/g, "ö")
		.replace(/Oʻ/g, "Ö")
		.replace(/gʻ/g, "ğ")
		.replace(/Gʻ/g, "Ğ")

		.replace(/ch/g, "ç")
		.replace(/Ch/g, "Ç")
		.replace(/CH/g, "Ç")

		.replace(/sh/g, "ş")
		.replace(/Sh/g, "Ş")
		.replace(/SH/g, "Ş")

		.replace(/sʼh/g, "sh")
		.replace(/Sʼh/g, "Sh")
		.replace(/SʼH/g, "SH")

		.replace(/löbat/g, "löʼbat")
		.replace(/möjaz/g, "möʼjaz")
		.replace(/möjiza/g, "möʼjiza")
		.replace(/mötabar/g, "möʼtabar")
		.replace(/mötad/g, "möʼtad")
		.replace(/mötazila/g, "möʼtazila")
		.replace(/mötariza/g, "möʼtariza")
		.replace(/Löbat/g, "Löʼbat")
		.replace(/Möjaz/g, "Möʼjaz")
		.replace(/Möjiza/g, "Möʼjiza")
		.replace(/Mötabar/g, "Möʼtabar")
		.replace(/Mötad/g, "Möʼtad")
		.replace(/Mötazila/g, "Möʼtazila")
		.replace(/Mötariza/g, "Möʼtariza")
		.replace(/LÖBAT/g, "LÖʼBAT")
		.replace(/MÖJAZ/g, "MÖʼJAZ")
		.replace(/MÖJIZA/g, "MÖʼJIZA")
		.replace(/MÖTABAR/g, "MÖʼTABAR")
		.replace(/MÖTAD/g, "MÖʼTAD")
		.replace(/MÖTAZILA/g, "MÖʼTAZILA")
		.replace(/MÖTARIZA/g, "MÖʼTARIZA");
}

function latcyr() {
	document.transcription.text1.value = document.transcription.text2.value
		.replace(/'/g, "ʼ")
		.replace(/ˈ/g, "ʼ")
		.replace(/’/g, "ʼ")
		.replace(/ʼ/g, "ʼ")
		.replace(/‘/g, "ʼ")
		.replace(/ʻ/g, "ʼ")
		.replace(/´/g, "ʼ")
		.replace(/`/g, "ʼ")
		.replace(/ʿ/g, "ʼ")
		.replace(/ʹ/g, "ʼ")
		.replace(/ˊ/g, "ʼ")
		.replace(/׳/g, "ʼ")
		.replace(/′/g, "ʼ")
		.replace(/ʽ/g, "ʼ")
		.replace(/ߵ/g, "ʼ")
		.replace(/՚/g, "ʼ")
		.replace(/ߴ/g, "ʼ")
		.replace(/᾿/g, "ʼ")
		.replace(/ՙ/g, "ʼ")
		.replace(/῾/g, "ʼ")
		.replace(/‛/g, "ʼ")
		.replace(/ʾ/g, "ʼ")
		.replace(/՛/g, "ʼ")
		.replace(/ˋ/g, "ʼ")

		.replace(/sh/g, "sʼh")
		.replace(/Sh/g, "Sʼh")
		.replace(/SH/g, "SʼH")

		.replace(/ş/g, "sh")
		.replace(/Ş/g, "Sh")

		.replace(/(c|ç)/g, "ch")
		.replace(/(C|Ç)/g, "Ch")

		.replace(/ö/g, "oʻ")
		.replace(/Ö/g, "Oʻ")
		.replace(/ğ/g, "gʻ")
		.replace(/Ğ/g, "Gʻ")

		.replace(/oʻʼ/g, "oʻ")
		.replace(/Oʻʼ/g, "Oʻ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
