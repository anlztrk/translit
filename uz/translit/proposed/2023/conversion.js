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

		.replace(/oʻ/g, "õ")
		.replace(/Oʻ/g, "Õ")
		.replace(/gʻ/g, "ğ")
		.replace(/Gʻ/g, "Ğ")

		.replace(/ch/g, "c")
		.replace(/Ch/g, "C")
		.replace(/CH/g, "C")

		.replace(/sh/g, "ş")
		.replace(/Sh/g, "Ş")
		.replace(/SH/g, "Ş")

		.replace(/sʼh/g, "sh")
		.replace(/Sʼh/g, "Sh")
		.replace(/SʼH/g, "SH")

		.replace(/lõbat/g, "lõʼbat")
		.replace(/mõjaz/g, "mõʼjaz")
		.replace(/mõjiza/g, "mõʼjiza")
		.replace(/mõtabar/g, "mõʼtabar")
		.replace(/mõtad/g, "mõʼtad")
		.replace(/mõtazila/g, "mõʼtazila")
		.replace(/mõtariza/g, "mõʼtariza")
		.replace(/Lõbat/g, "Lõʼbat")
		.replace(/Mõjaz/g, "Mõʼjaz")
		.replace(/Mõjiza/g, "Mõʼjiza")
		.replace(/Mõtabar/g, "Mõʼtabar")
		.replace(/Mõtad/g, "Mõʼtad")
		.replace(/Mõtazila/g, "Mõʼtazila")
		.replace(/Mõtariza/g, "Mõʼtariza")
		.replace(/LÕBAT/g, "LÕʼBAT")
		.replace(/MÕJAZ/g, "MÕʼJAZ")
		.replace(/MÕJIZA/g, "MÕʼJIZA")
		.replace(/MÕTABAR/g, "MÕʼTABAR")
		.replace(/MÕTAD/g, "MÕʼTAD")
		.replace(/MÕTAZILA/g, "MÕʼTAZILA")
		.replace(/MÕTARIZA/g, "MÕʼTARIZA");
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

		.replace(/c/g, "ch")
		.replace(/C/g, "Ch")

		.replace(/õ/g, "oʻ")
		.replace(/Õ/g, "Oʻ")
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