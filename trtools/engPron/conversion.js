var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.replace(/([ɑeæɯioœuy])h/g, '$1ː');
	car = car.replace(/([ɑeiuy])\.([bdfɡɟʒkclɫmnŋɲpɾsʃtvβjz])/g, '$1$2\.');
	car = car.replace(/([ɑeæɯioœuy])β/g, '$1v');
	car = car.replace(/([bfɡɟhʒkclɫmnŋɲpɾsʃvβz])(yɾ|yːɾ)/g, '$1URE');
	car = car.replace(/(juɾ|juːɾ|jyɾ|jyːɾ)/g, 'YOOR');
	car = car.replace(/([bfɡɟhʒkclɫmnŋɲpɾsʃvβz])(y|yː)/g, '$1EW');
	car = car.replace(/(ju|juː|jy|jyː)/g, 'YOO');
	car = car.replace(/æɾ/g, 'ARR');
	car = car.replace(/æ/g, 'A');
	car = car.replace(/ɑːɾ/g, 'AR');
	car = car.replace(/ɑː/g, 'AH');
	car = car.replace(/e([bdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'E$1');
	car = car.replace(/(e|ej|eː)/g, 'AY');
	car = car.replace(/iɾ/g, 'IRR');
	car = car.replace(/i([bdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'I$1');
	car = car.replace(/(i|ij|iː|ɯː)/g, 'EE');
	car = car.replace(/ɯːɾ/g, 'EER');
	car = car.replace(/ɑjɾ/g, 'IRE');
	car = car.replace(/([bdfɡɟʒkclɫmnŋɲpɾsʃtvβz])ɑj/g, '$1Y');
	car = car.replace(/ɑj/g, 'EYE');
	car = car.replace(/[oœ]jɾ/g, 'OIR');
	car = car.replace(/[oœ]j/g, 'OY');
	car = car.replace(/œɾ/g, 'UR');
	car = car.replace(/[oœ]/g, 'OH');
	car = car.replace(/ɑɾ/g, 'URR');
	car = car.replace(/ɑ([bdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'U$1');
	car = car.replace(/[uy]ɾ/g, 'UURR');
	car = car.replace(/[uy]/g, 'UU');
	car = car.replace(/(u|uː|y|yː)/g, 'OO');
	car = car.replace(/ɑ/g, 'Ə');
	car = car.replace(/ɯ/g, 'Ə');
	car = car.replace(/dʒ/g, 'J');
	car = car.replace(/([AEIOUY])tʃ/g, '$1TCH');
	car = car.replace(/tʃ/g, 'CH');
	car = car.replace(/[ɡɟ]([EI])/g, 'GH$1');
	car = car.replace(/[ɡɟ]/g, 'G');
	car = car.replace(/ʒ/g, 'ZH');
	car = car.replace(/[kc]/g, 'K');
	car = car.replace(/[lɫ]/g, 'L');
	car = car.replace(/[(ŋk|ɲc)]/g, 'NK');
	car = car.replace(/[ŋɲ]/g, 'NG');
	car = car.replace(/ʃ/g, 'SH');
	car = car.replace(/β/g, 'W');
	car = car.replace(/j/g, 'Y');
	car = car.toLowerCase();
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
