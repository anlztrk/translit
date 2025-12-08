var car;

function cyrlat() {
	car = document.transcription.text1.value;
	var car_Orig = car;
	{
		var letters = ["Á", "Ǵ", "Í", "Ń", "Ó", "Ú", "á", "ǵ", "í", "ń", "ó", "ú"];
		for (let i = 0; i <= car.length; i++) {
			if (letters.indexOf(car.charAt(i)) == -1) {
				car = car.replace(car.charAt(i), car.charAt(i).normalize('NFD'));
			}
		}
		car = car.replace(/I(\p{M})/ug, "İ$1");
		car = car.replace(/İ\u0301/g, "I");
		car = car.replace(/İ\u0307/g, "İ");
	}
	car = car.replace(/C[Hh]/g, "Ç");
	car = car.replace(/S[Hh]/g, "Ş");
	car = car.replace(/C/g, "Ţ");
	if (/ZH|Zh|zh/.test(car_Orig)) {
		car = car.replace(/J/g, "C");
		car = car.replace(/Z[Hh]/g, "J");
	}
	if (/V|v/.test(car_Orig) == false) {
		car = car.replace(/W/g, "V");
		car = car.replace(/w/g, "v");
	}
	car = car.replace(/Á/g, "Ä");
	car = car.replace(/Ǵ/g, "Ğ");
	car = car.replace(/Ń/g, "Ñ");
	car = car.replace(/ó/g, "ö");
	car = car.replace(/ú/g, "ü");
	car = car.replace(/ch/g, "ç");
	car = car.replace(/sh/g, "ş");
	car = car.replace(/c/g, "ţ");
	if (/ZH|Zh|zh/.test(car_Orig)) {
		car = car.replace(/j/g, "c");
		car = car.replace(/zh/g, "j");
	}
	car = car.replace(/á/g, "ä");
	car = car.replace(/ǵ/g, "ğ");
	car = car.replace(/ń/g, "ñ");
	car = car.replace(/ó/g, "ö");
	car = car.replace(/ú/g, "ü");
	car = car.normalize('NFC');
	document.transcription.text2.value = car;
}

function latcyr() {
	car = document.transcription.text2.value;
	var car_Orig = car;
	{
		var letters = ["Ä", "Ç", "Ğ", "İ", "Ñ", "Ö", "Ş", "Ţ", "Ü", "ä", "ç", "ğ", "ñ", "ö", "ş", "ţ", "ü"];
		for (let i = 0; i <= car.length; i++) {
			if (letters.indexOf(car.charAt(i)) == -1) {
				car = car.replace(car.charAt(i), car.charAt(i).normalize('NFD'));
			}
		}
		car = car.replace(/I(\p{M})/ug, "İ$1");
		car = car.replace(/İ\u0307/g, "İ");
	}
	if (/C|c/.test(car_Orig)) {
		car = car.replace(/J/g, "Zh");
	}
	car = car.replace(/C/g, "J");
	car = car.replace(/Ţ/g, "C");
	car = car.replace(/Ğ/g, "Ǵ");
	if (/İ/.test(car_Orig)) {
		car = car.replace(/I/g, "Í");
	}
	car = car.replace(/İ/g, "I");
	car = car.replace(/Ñ/g, "Ń");
	car = car.replace(/ä/g, "á");
	if (/C|c/.test(car_Orig)) {
		car = car.replace(/j/g, "zh");
	}
	car = car.replace(/c/g, "j");
	car = car.replace(/ţ/g, "c");
	car = car.replace(/ğ/g, "ǵ");
	car = car.replace(/ñ/g, "ń");
	car = car.replace(/ö/g, "ó");
	car = car.replace(/ü/g, "ú");
	car = car.replace(/ç/g, "ch");
	car = car.replace(/ş/g, "sh");
	car = car.replace(/Ç/g, "Ch");
	car = car.replace(/Ş/g, "Sh");
	car = car.normalize('NFC');
	document.transcription.text1.value = car;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
