var car;

function cyrlat() {
	car = document.transcription.text1.value;
	car = car.replace(/(A|a)/g, "ا");
	car = car.replace(/(B|b)/g, "ب");
	car = car.replace(/(C|c)/g, "ج");
	car = car.replace(/(Ç|ç)/g, "چ");
	car = car.replace(/(D|d)/g, "د");
	car = car.replace(/(E|e)/g, "ە");
	car = car.replace(/(Ê|ê)/g, "ێ");
	car = car.replace(/(F|f)/g, "ف");
	car = car.replace(/(G|g)/g, "گ");
	car = car.replace(/(H|h)/g, "ھ");
	car = car.replace(/(Ḧ|ḧ)/g, "ھ");
	car = car.replace(/(I|i)/g, "");
	car = car.replace(/(Î|î)/g, "ی");
	car = car.replace(/(J|j)/g, "ژ");
	car = car.replace(/(K|k)/g, "ک");
	car = car.replace(/(L|l)/g, "ل");
	car = car.replace(/(M|m)/g, "م");
	car = car.replace(/(N|n)/g, "ن");
	car = car.replace(/(O|o)/g, "ۆ");
	car = car.replace(/(P|p)/g, "پ");
	car = car.replace(/(Q|q)/g, "ق");
	car = car.replace(/(R|r)/g, "ر");
	car = car.replace(/(S|s)/g, "س");
	car = car.replace(/(Ş|ş)/g, "ش");
	car = car.replace(/(T|t)/g, "ت");
	car = car.replace(/(U|u)/g, "و");
	car = car.replace(/(Û|û)/g, "وو");
	car = car.replace(/(V|v)/g, "ڤ");
	car = car.replace(/(W|w)/g, "و");
	car = car.replace(/(X|x)/g, "خ");
	car = car.replace(/(Ẍ|ẍ)/g, "غ");
	car = car.replace(/(Y|y)/g, "ی");
	car = car.replace(/(Z|z)/g, "ز");
	document.transcription.text2.value = car;
}

function latcyr() {
	car = document.transcription.text2.value;
	car = car.replace(/ا/g, 'a');
	car = car.replace(/ب/g, 'b');
	car = car.replace(/ج/g, 'c');
	car = car.replace(/چ/g, 'ç');
	car = car.replace(/د/g, 'd');
	car = car.replace(/ە/g, 'e');
	car = car.replace(/ێ/g, 'ê');
	car = car.replace(/ف/g, 'f');
	car = car.replace(/گ/g, 'g');
	car = car.replace(/ھ/g, 'h');
	car = car.replace(/ھ/g, 'h');
	car = car.replace(/ی/g, 'î');
	car = car.replace(/ژ/g, 'j');
	car = car.replace(/ک/g, 'k');
	car = car.replace(/ل/g, 'l');
	car = car.replace(/ڵ/g, 'll');
	car = car.replace(/م/g, 'm');
	car = car.replace(/ن/g, 'n');
	car = car.replace(/ۆ/g, 'o');
	car = car.replace(/پ/g, 'p');
	car = car.replace(/ق/g, 'q');
	car = car.replace(/ر/g, 'r');
	car = car.replace(/ڕ/g, 'r');
	car = car.replace(/س/g, 's');
	car = car.replace(/ش/g, 'ş');
	car = car.replace(/ت/g, 't');
	car = car.replace(/و/g, 'u');
	car = car.replace(/و/g, 'û');
	car = car.replace(/ڤ/g, 'v');
	car = car.replace(/و/g, 'w');
	car = car.replace(/خ/g, 'x');
	car = car.replace(/غ/g, 'x');
	car = car.replace(/ز/g, 'z');	
	car = car.replace(/(ئ|ع)/g, '');
	
	car = car.replace(/uu/g, 'û');
	
	car = car.replace(/(a|e|ê|î|o|u|û)u(b|c|ç|d|f|g|h|j|k|l|m|n|p|r|s|t|w|x|y|z)?(?!(a|e|ê|î|o|u|û))/g, '$1w$2$3');
	car = car.replace(/(a|e|ê|î|o|u|û)î(b|c|ç|d|f|g|h|j|k|l|m|n|p|r|s|t|w|x|y|z)?(?!(a|e|ê|î|o|u|û))/g, '$1y$2$3');
	car = car.replace(/(?<!(a|ê|e|î|o|u|û))î(a|ê|e|î|o|u|û)

	car = car.replace(/(a|e|ê|î|o|u|û)î/g, '$1y');
	car = car.replace(/î(a|e|ê|î|o|u|û)/g, 'y$1');	
	car = car.replace(/u(a|e|ê|î|o|u|û)/g, 'w$1');
	
	car = car.replace(/(a|e|ê|î|o|u|û)û/g, '$1wu');
	car = car.replace(/û(a|e|ê|î|o|u|û)/g, 'uw$1');
	
	car = car.replace(/xw/g, "ẋ");
	
	//car = car.replace(/(?<!(a|e|ê|î|o|u|û))(b|c|ç|d|f|g|h|j|k|l|m|n|p|r|s|t|w|x|ẋ|y|z)(b|c|ç|d|f|g|h|j|k|l|m|n|p|r|s|t|w|x|ẋ|y|z)/g, "$2i$3");
	
	car = car.replace(/ẋ/g, "xw");
	document.transcription.text1.value = car;
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