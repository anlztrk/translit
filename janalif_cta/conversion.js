var car;

function latcyr() {
	car = document.transcription.text2.value;
	var car_Orig = car;
	{
		var letters = ["Ä", "Ç", "Ğ", "İ", "Ñ", "Ň", "Ö", "Ş", "Ţ", "Ü", "Ý", "Ž", "ä", "ç", "ğ", "ñ", "ň", "ö", "ş", "ţ", "ü", "ý"];
		for (let i = 0; i <= car.length; i++) {
			if (letters.indexOf(car.charAt(i)) == -1) {
				car = car.replace(car.charAt(i), car.charAt(i).normalize('NFD'));
			}
		}
		car = car.replace(/I(\p{M})/ug, "İ$1");
		car = car.replace(/İ\u0307/g, "İ");
	}

	car = car.replace(/\u2060/g, "");

	car = car.replace(/Ä/g, "Ə");
	car = car.replace(/Ç/g, "\u2060");
	if (/C|c/.test(car_Orig) == false) {
		car = car.replace(/J/g, "C");
		car = car.replace(/j/g, "c");
	}
	car = car.replace(/C/g, "Ç");
	car = car.replace(/\u2060/g, "C");
	car = car.replace(/(Ğ|Ǧ)/g, "Ƣ");
	if (/V|v/.test(car_Orig) == false) {
		car = car.replace(/W/g, "V");
		car = car.replace(/w/g, "v");
	}
	if (/Ň|ň|Ý|ý|Ž|ž/.test(car_Orig) && /Ə|ə|Ğ|ğ|İ|ı|Ñ|ñ|V|v/.test(car_Orig) == false) {
		car = car.replace(/Y/g, "Ь");
		car = car.replace(/y/g, "ь");
		car = car.replace(/Ý/g, "Y");
		car = car.replace(/ý/g, "y");
		car = car.replace(/b/g, "ʙ");
	}
	if (/İ|ı/.test(car_Orig)) {
		car = car.replace(/I/g, "Ь");
		car = car.replace(/b/g, "ʙ");
	}
	car = car.replace(/(J|Ž)/g, "Ƶ");
	car = car.replace(/(Ñ|Ň)/g, "Ꞑ");
	car = car.replace(/Ö/g, "Ɵ");
	car = car.replace(/(Y|Ý)/g, "J");
	car = car.replace(/Ü/g, "У");
	car = car.replace(/İ/g, "I");
	car = car.replace(/ı/g, "ь");
	car = car.replace(/ä/g, "ə");
	car = car.replace(/b/g, "ʙ");
	car = car.replace(/ç/g, "\u2060");
	car = car.replace(/c/g, "ç");
	car = car.replace(/\u2060/g, "c");
	car = car.replace(/(ğ|ǧ)/g, "ƣ");
	car = car.replace(/(j|ž)/g, "ƶ");
	car = car.replace(/(ñ|ň)/g, "ꞑ");
	car = car.replace(/ö/g, "ɵ");
	car = car.replace(/(y|ý)/g, "j");
	car = car.replace(/ü/g, "y");
	if (/Ţ|ţ/.test(car_Orig)) {
		if (/C|c/.test(car_Orig) == false) {
			car = car.replace(/Ţ/g, "Ç");
			car = car.replace(/ţ/g, "ç");
		} else {
			car = car.replace(/Ţ/g, "Ts\u2060");
			car = car.replace(/ţ/g, "ts\u2060");
		}
	}

	car = car.normalize('NFC');
	document.transcription.text1.value = car;
}

function cyrlat() {
	car = document.transcription.text1.value;
	var car_Orig = car;
	{
		var letters = ["Ə", "Ç", "Ƣ", "Ь", "Ƶ", "Ꞑ", "Ɵ", "Ş", "У", "⁠ə", "ʙ", "ç", "ƣ", "ƶ", "ꞑ", "ɵ", "ş⁠"];
		for (let i = 0; i <= car.length; i++) {
			if (letters.indexOf(car.charAt(i)) == -1) {
				car = car.replace(car.charAt(i), car.charAt(i).normalize('NFD'));
			}
		}
		car = car.replace(/I(\p{M})/ug, "Ь$1");
	}
	car = car.replace(/T(S|s)\u2060/g, "Ţ");
	car = car.replace(/ts\u2060/g, "ţ");

	car = car.replace(/\u2060/g, "");
	car = car.replace(/C/g, "\u2060");
	car = car.replace(/Ç/g, "C");
	car = car.replace(/\u2060/g, "Ç");
	car = car.replace(/Ə/g, "Ä");
	car = car.replace(/Ƣ/g, "Ğ");
	car = car.replace(/(Ꞑ|Ŋ)/g, "Ñ");
	car = car.replace(/Ɵ/g, "Ö");
	car = car.replace(/(У|Y)/g, "Ü");
	car = car.replace(/J/g, "Y");
	car = car.replace(/Ƶ/g, "J");
	if (/Ь|ь/.test(car_Orig)) {
		car = car.replace(/I/g, "İ");
	}
	car = car.replace(/Ь/g, "I");
	car = car.replace(/ь/g, "ı");
	car = car.replace(/c/g, "\u2060");
	car = car.replace(/ç/g, "c");
	car = car.replace(/\u2060/g, "ç");
	car = car.replace(/ə/g, "ä");
	car = car.replace(/ƣ/g, "ğ");
	car = car.replace(/(ꞑ|ŋ)/g, "ñ");
	car = car.replace(/ɵ/g, "ö");
	car = car.replace(/y/g, "ü");
	car = car.replace(/j/g, "y");
	car = car.replace(/ƶ/g, "j");
	car = car.replace(/(ʙ|в)/g, "b");

	car = car.normalize('NFC');
	document.transcription.text2.value = car;
}

function copy1() {
	textRange = document.transcription.text1.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}

function copy2() {
	textRange = document.transcription.text2.createTextRange();
	textRange.execCommand("Copy");
	textRange = "";
}