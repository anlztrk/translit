var car;

function handleDotlessI(text) {
    const consonants = "BCÇDFGHJKLMNÑPQRSŞTVXYZbcçdfghjklmnñpqrsştvxyz";
    const backVowels = "AOUaouı";
    const frontVowels = "ÄEİÖÜäeöü";
    const vowels = backVowels + frontVowels + Ii; // Combine all vowels for easy checking

    function getVowelType(char) {
        if (backVowels.includes(char)) return 'back';
        if (frontVowels.includes(char)) return 'front';
        return 'uncertain';
    }

    function findNextVowelWithKnownBackness(index, text) {
        // Search forward
        for (let i = index + 1; i < text.length; i++) {
            const type = getVowelType(text[i]);
            if (type !== 'uncertain') {
                return type;
            }
        }
        // Search backward if no forward match
        for (let i = index - 1; i >= 0; i--) {
            const type = getVowelType(text[i]);
            if (type !== 'uncertain') {
                return type;
            }
        }
        return null; // No known vowel type found
    }

    function transformWord(word) {
        let modifiedWord = word.split('');
        let lastKnownVowelBackness = null;

        // Start from the end of the word, find the last 'I' or 'i'
        for (let i = modifiedWord.length - 1; i >= 0; i--) {
            if (modifiedWord[i] === 'I' || modifiedWord[i] === 'i') {
                lastKnownVowelBackness = findNextVowelWithKnownBackness(i, modifiedWord.join(''));
                if (lastKnownVowelBackness === null && modifiedWord[i] === 'I') {
                    modifiedWord[i] = 'İ'; // Default to 'İ' if 'I' is the only vowel and no known backness
                } else {
                    modifiedWord[i] = modifiedWord[i] === 'I' ?
                        (lastKnownVowelBackness === 'front' ? 'İ' : 'I') :
                        (lastKnownVowelBackness === 'back' ? 'ı' : 'i');
                }
            }
        }

        return modifiedWord.join('');
    }

    let words = text.split(/(\s+)/);
    let transformedText = words.map(word => /\s/.test(word) ? word : transformWord(word));
    return transformedText.join('');
}

function cyrlat() {
    car = document.transcription.text1.value;
    translit = document.transcription.text1.value;
    translit = translit.replace(/é/g, "ë");
    translit = translit.replace(/É/g, "Ë");

    car = car.replace(/gh/g, "ğ");
    car = car.replace(/Gh/g, "Ğ");
    car = car.replace(/GH/g, "Ğ");

    car = car.replace(/sh/g, "ş");
    car = car.replace(/Sh/g, "Ş");
    car = car.replace(/SH/g, "Ş");

    car = car.replace(/ch/g, "ç");
    car = car.replace(/Ch/g, "Ç");
    car = car.replace(/CH/g, "Ç");

    car = car.replace(/j/g, "c");
    car = car.replace(/J/g, "C");

    car = car.replace(/zh/g, "j");
    car = car.replace(/Zh/g, "J");
    car = car.replace(/ZH/g, "J");

    car = car.replace(/ng/g, "ñ");
    car = car.replace(/Ng/g, "Ñ");
    car = car.replace(/NG/g, "Ñ");

    car = car.replace(/ñ'h/g, "ñh");
    car = car.replace(/Ñ'h/g, "Ñh");
    car = car.replace(/Ñ'H/g, "ÑH");

    car = car.replace(/nğ/g, "ñh");
    car = car.replace(/Nğ/g, "Ñh");
    car = car.replace(/NĞ/g, "ÑH");

    car = car.replace(/n'ğ/g, "nğ");
    car = car.replace(/N'ğ/g, "Nğ");
    car = car.replace(/N'Ğ/g, "NĞ");

    car = car.replace(/g'h/g, "gh");
    car = car.replace(/G'h/g, "Gh");
    car = car.replace(/G'H/g, "GH");

    car = car.replace(/s'h/g, "sh");
    car = car.replace(/S'h/g, "Sh");
    car = car.replace(/S'H/g, "SH");

    car = car.replace(/z'h/g, "zh");
    car = car.replace(/Z'h/g, "Zh");
    car = car.replace(/Z'H/g, "ZH");

    car = car.replace(/n'g/g, "ng");
    car = car.replace(/N'g/g, "Ng");
    car = car.replace(/N'G/g, "NG");

    car = car.replace(/n'g'h/g, "ngh");
    car = car.replace(/N'g'h/g, "Ngh");
    car = car.replace(/N'G'h/g, "NGh");
    car = car.replace(/N'G'H/g, "NGH");

    car = car.replace(/e/g, "ä");
    car = car.replace(/ë/g, "e");
    car = car.replace(/é/g, "e");
    car = car.replace(/w/g, "v");
    car = car.replace(/E/g, "Ä");
    car = car.replace(/Ë/g, "E");
    car = car.replace(/É/g, "E");
    car = car.replace(/W/g, "V");

    car = car.replace(/(Ğ|Q|X|ğ|q|x)i/g, "$1ı");
    car = car.replace(/i(ğ|q|x)/g, "ı$1");
	
    car = handleDotlessI(car);
    
    document.transcription.text1.value = translit;
    document.transcription.text2.value = car;
}

function latcyr () {
    car = document.transcription.text2.value;
    car = car.replace(/ngh/g, "n'g'h");
    car = car.replace(/Ngh/g, "N'g'h");
    car = car.replace(/NGh/g, "N'G'h");
    car = car.replace(/NGH/g, "N'G'H");
    car = car.replace(/ng/g, "n'g");
    car = car.replace(/gh/g, "g'h");
    car = car.replace(/nğ/g, "n'gh");
    car = car.replace(/sh/g, "s'h");
    car = car.replace(/zh/g, "z'h");
  
    car = car.replace(/Ng/g, "N'g");
    car = car.replace(/Nğ/g, "N'gh");
    car = car.replace(/Sh/g, "S'h");
    car = car.replace(/Zh/g, "Z'h");
    car = car.replace(/Gh/g, "G'h");
  
    car = car.replace(/NG/g, "N'G");
    car = car.replace(/GH/g, "G'H");
    car = car.replace(/NĞ/g, "N'GH");
    car = car.replace(/SH/g, "S'H");
    car = car.replace(/ZH/g, "Z'H");
  
    car = car.replace(/j/g, "zh");
    car = car.replace(/c/g, "j");
    car = car.replace(/ç/g, "ch");
    car = car.replace(/e/g, "ë");
    car = car.replace(/ä/g, "e");
    car = car.replace(/ı/g, "i");
    car = car.replace(/ğ/g, "gh");
    car = car.replace(/ñ/g, "ng");
    car = car.replace(/ş/g, "sh");
    car = car.replace(/v/g, "w");
    car = car.replace(/J/g, "Zh");
    car = car.replace(/C/g, "J");
    car = car.replace(/Ç/g, "Ch");
    car = car.replace(/E/g, "Ë");
    car = car.replace(/Ä/g, "E");
    car = car.replace(/İ/g, "I");
    car = car.replace(/Ğ/g, "Gh");
    car = car.replace(/Ñ/g, "NG");
    car = car.replace(/Ş/g, "Sh");
    car = car.replace(/V/g, "W");
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
