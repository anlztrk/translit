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

		.replace(/oʻ/g, "ŏ")
		.replace(/Oʻ/g, "Ŏ")
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

		.replace(/lŏbat/g, "lŏʼbat")
		.replace(/mŏjaz/g, "mŏʼjaz")
		.replace(/mŏjiza/g, "mŏʼjiza")
		.replace(/mŏtabar/g, "mŏʼtabar")
		.replace(/mŏtad/g, "mŏʼtad")
		.replace(/mŏtazila/g, "mŏʼtazila")
		.replace(/mŏtariza/g, "mŏʼtariza")
		.replace(/Lŏbat/g, "Lŏʼbat")
		.replace(/Mŏjaz/g, "Mŏʼjaz")
		.replace(/Mŏjiza/g, "Mŏʼjiza")
		.replace(/Mŏtabar/g, "Mŏʼtabar")
		.replace(/Mŏtad/g, "Mŏʼtad")
		.replace(/Mŏtazila/g, "Mŏʼtazila")
		.replace(/Mŏtariza/g, "Mŏʼtariza")
		.replace(/LŎBAT/g, "LŎʼBAT")
		.replace(/MŎJAZ/g, "MŎʼJAZ")
		.replace(/MŎJIZA/g, "MŎʼJIZA")
		.replace(/MŎTABAR/g, "MŎʼTABAR")
		.replace(/MŎTAD/g, "MŎʼTAD")
		.replace(/MŎTAZILA/g, "MŎʼTAZILA")
		.replace(/MŎTARIZA/g, "MŎʼTARIZA");
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

		.replace(/ŏ/g, "oʻ")
		.replace(/Ŏ/g, "Oʻ")
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