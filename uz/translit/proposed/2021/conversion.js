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

		.replace(/oʻ/g, "ō")
		.replace(/Oʻ/g, "Ō")
		.replace(/gʻ/g, "ḡ")
		.replace(/Gʻ/g, "Ḡ")

		.replace(/ch/g, "ç")
		.replace(/Ch/g, "Ç")
		.replace(/CH/g, "Ç")

		.replace(/sh/g, "ş")
		.replace(/Sh/g, "Ş")
		.replace(/SH/g, "Ş")

		.replace(/sʼh/g, "sh")
		.replace(/Sʼh/g, "Sh")
		.replace(/SʼH/g, "SH")

		.replace(/lōbat/g, "lōʼbat")
		.replace(/mōjaz/g, "mōʼjaz")
		.replace(/mōjiza/g, "mōʼjiza")
		.replace(/mōtabar/g, "mōʼtabar")
		.replace(/mōtad/g, "mōʼtad")
		.replace(/mōtazila/g, "mōʼtazila")
		.replace(/mōtariza/g, "mōʼtariza")
		.replace(/Lōbat/g, "Lōʼbat")
		.replace(/Mōjaz/g, "Mōʼjaz")
		.replace(/Mōjiza/g, "Mōʼjiza")
		.replace(/Mōtabar/g, "Mōʼtabar")
		.replace(/Mōtad/g, "Mōʼtad")
		.replace(/Mōtazila/g, "Mōʼtazila")
		.replace(/Mōtariza/g, "Mōʼtariza")
		.replace(/LŌBAT/g, "LŌʼBAT")
		.replace(/MŌJAZ/g, "MŌʼJAZ")
		.replace(/MŌJIZA/g, "MŌʼJIZA")
		.replace(/MŌTABAR/g, "MŌʼTABAR")
		.replace(/MŌTAD/g, "MŌʼTAD")
		.replace(/MŌTAZILA/g, "MŌʼTAZILA")
		.replace(/MŌTARIZA/g, "MŌʼTARIZA");
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

		.replace(/ç/g, "ch")
		.replace(/Ç/g, "Ch")

		.replace(/ō/g, "oʻ")
		.replace(/Ō/g, "Oʻ")
		.replace(/ḡ/g, "gʻ")
		.replace(/Ḡ/g, "Gʻ")

		.replace(/oʻʼ/g, "oʻ")
		.replace(/Oʻʼ/g, "Oʻ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}