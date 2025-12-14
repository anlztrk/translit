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

		.replace(/oʻ/g, "ó")
		.replace(/Oʻ/g, "Ó")
		.replace(/gʻ/g, "ǵ")
		.replace(/Gʻ/g, "Ǵ")

		.replace(/ch/g, "ç")
		.replace(/Ch/g, "Ç")
		.replace(/CH/g, "Ç")

		.replace(/sh/g, "ş")
		.replace(/Sh/g, "Ş")
		.replace(/SH/g, "Ş")

		.replace(/sʼh/g, "sh")
		.replace(/Sʼh/g, "Sh")
		.replace(/SʼH/g, "SH")

		.replace(/lóbat/g, "lóʼbat")
		.replace(/mójaz/g, "móʼjaz")
		.replace(/mójiza/g, "móʼjiza")
		.replace(/mótabar/g, "móʼtabar")
		.replace(/mótad/g, "móʼtad")
		.replace(/mótazila/g, "móʼtazila")
		.replace(/mótariza/g, "móʼtariza")
		.replace(/Lóbat/g, "Lóʼbat")
		.replace(/Mójaz/g, "Móʼjaz")
		.replace(/Mójiza/g, "Móʼjiza")
		.replace(/Mótabar/g, "Móʼtabar")
		.replace(/Mótad/g, "Móʼtad")
		.replace(/Mótazila/g, "Móʼtazila")
		.replace(/Mótariza/g, "Móʼtariza")
		.replace(/LÓBAT/g, "LÓʼBAT")
		.replace(/MÓJAZ/g, "MÓʼJAZ")
		.replace(/MÓJIZA/g, "MÓʼJIZA")
		.replace(/MÓTABAR/g, "MÓʼTABAR")
		.replace(/MÓTAD/g, "MÓʼTAD")
		.replace(/MÓTAZILA/g, "MÓʼTAZILA")
		.replace(/MÓTARIZA/g, "MÓʼTARIZA");
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

		.replace(/ac/g, "ats")
		.replace(/ec/g, "ets")
		.replace(/ic/g, "its")
		.replace(/oc/g, "ots")
		.replace(/óc/g, "óts")
		.replace(/uc/g, "uts")
		.replace(/Ac/g, "Ats")
		.replace(/Ec/g, "Ets")
		.replace(/Ic/g, "Its")
		.replace(/Oc/g, "Ots")
		.replace(/Óc/g, "Óts")
		.replace(/Uc/g, "Uts")
		.replace(/AC/g, "ATS")
		.replace(/EC/g, "ETS")
		.replace(/IC/g, "ITS")
		.replace(/OC/g, "OTS")
		.replace(/ÓC/g, "ÓTS")
		.replace(/UC/g, "UTS")

		.replace(/c/g, "s")
		.replace(/C/g, "S")

		.replace(/ç/g, "ch")
		.replace(/Ç/g, "Ch")

		.replace(/ó/g, "oʻ")
		.replace(/Ó/g, "Oʻ")
		.replace(/ǵ/g, "gʻ")
		.replace(/Ǵ/g, "Gʻ")

		.replace(/ʻʼ/g, "ʻ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}