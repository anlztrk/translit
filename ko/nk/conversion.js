var car;

function cyrlat () {
  car = document.transcription.text1.value;
  car = car.normalize('NFD');
  car = car.replace(/ᆪᄉ/g, 'ᆨᄊ');
  car = car.replace(/ᆬᄌ/g, 'ᆫᄍ');
  car = car.replace(/ᆰᄀ/g, 'ᆯᄁ');
  car = car.replace(/ᆲᄇ/g, 'ᆯᄈ');
  car = car.replace(/ᆹᄉ/g, 'ᆸᄊ');
  car = car.replace(/ᆳᄉ/g, 'ᆯᄊ');
  
  car = car.replace(/ᆪᄋ/g, 'ᆨᄉ');
  car = car.replace(/ᆬᄋ/g, 'ᆫᄌ');
  car = car.replace(/ᆭᄋ/g, 'ᆫᄒ');
  car = car.replace(/ᆰᄋ/g, 'ᆯᄀ');
  car = car.replace(/ᆲᄋ/g, 'ᆯᄇ');
  car = car.replace(/ᆶᄋ/g, 'ᆯᄒ');
  car = car.replace(/ᆱᄋ/g, 'ᆯᄆ');
  car = car.replace(/ᆹᄋ/g, 'ᆸᄉ');
  car = car.replace(/ㄿᄋ/g, 'ᆯᄑ');
  car = car.replace(/ᆳᄋ/g, 'ᆯᄉ');
  car = car.replace(/ㄾᄋ/g, 'ᆯᄐ');
  
  car = car.replace(/ᆭᄀ/g, 'ᆫᄏ');
  car = car.replace(/ᆭᄃ/g, 'ᆫᄐ');
  car = car.replace(/ᆭᄇ/g, 'ᆫᄑ');
  car = car.replace(/ᆭᄌ/g, 'ᆫᄎ');
  car = car.replace(/ᆶᄀ/g, 'ᆯᄏ');
  car = car.replace(/ᆶᄃ/g, 'ᆯᄐ');
  car = car.replace(/ᆶᄇ/g, 'ᆯᄑ');
  car = car.replace(/ᆶᄌ/g, 'ᆯᄎ');
  car = car.replace(/ᆬᄒ/g, 'ᆫᄎ');
  car = car.replace(/ᆰᄒ/g, 'ᆯᄏ');
  car = car.replace(/ᆲᄒ/g, 'ᆯᄑ');
  
  car = car.replace(/ᆪ/g, 'ᆨ');
  car = car.replace(/ᆬ/g, 'ᆫ');
  car = car.replace(/ᆭ/g, 'ᆫ');
  car = car.replace(/ᆰ/g, 'ᆨ');
  car = car.replace(/ᆲ/g, 'ᆯ');
  car = car.replace(/ᆶ/g, 'ᆯ');
  car = car.replace(/ᆱ/g, 'ᆷ');
  car = car.replace(/ᆹ/g, 'ᆸ');
  car = car.replace(/ㄿ/g, 'ᇁ');
  car = car.replace(/ᆳ/g, 'ᆯ');
  car = car.replace(/ㄾ/g, 'ᆯ');
  
  car = car.replace(/ᆮ이/g, '지');
  car = car.replace(/ᆮ히/g, '치');
  car = car.replace(/ᇀ이/g, '치');

  car = car.replace(/ᆨᄋ/g, 'ᄀ');
  car = car.replace(/ᆩᄋ/g, 'ᄁ');
  car = car.replace(/ᆫᄋ/g, 'ᄂ');
  car = car.replace(/ᆮᄋ/g, 'ᄃ');
  car = car.replace(/ᆯᄋ/g, 'ᄅ');
  car = car.replace(/ᆷᄋ/g, 'ᄆ');
  car = car.replace(/ᆸᄋ/g, 'ᄇ');
  car = car.replace(/ᆺᄋ/g, 'ᄉ');
  car = car.replace(/ᆻᄋ/g, 'ᄊ');
  car = car.replace(/ᆽᄋ/g, 'ᄌ');
  car = car.replace(/ᆾᄋ/g, 'ᄎ');
  car = car.replace(/ᆿᄋ/g, 'ᄏ');
  car = car.replace(/ᇀᄋ/g, 'ᄐ');
  car = car.replace(/ᇁᄋ/g, 'ᄑ');
  car = car.replace(/ᇂᄋ/g, 'ᄋ');

  car = car.replace(/(ᆨ|ᆿ)ᄂ/g, 'ᆼᄂ');
  car = car.replace(/(ᆸ|ᇁ)ᄂ/g, 'ᆷᄂ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄂ/g, 'ᆫᄂ');
  car = car.replace(/(ᆨ|ᆿ)ᄅ/g, 'ᆼᄅ');
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');
  car = car.replace(/(ᆷ|ᆸ)ᄅ/g, 'ᆷᄅ');
  car = car.replace(/ᆼᄅ/g, 'ᆼᄅ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄅ/g, 'ᆫᄅ');
  car = car.replace(/(ᆨ|ᆿ)ᄆ/g, 'ᆼᄆ');
  car = car.replace(/(ᆸ|ᇁ)ᄆ/g, 'ᆷᄆ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄆ/g, 'ᆫᄆ');

  car = car.replace(/ᇂᄀ/g, 'ᄏ');
  car = car.replace(/ᇂᄃ/g, 'ᄐ');
  car = car.replace(/ᇂᄇ/g, 'ᄑ');
  car = car.replace(/ᇂᄌ/g, 'ᄎ');
  
  car = car.replace(/ᇂᄂ/g, 'ᆫᄂ');
  car = car.replace(/ᇂ(ᄅ|ᄆ|ᄉ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ|ᄁ|ᄄ|ᄈ|ᄊ|ᄍ)/g, '$1');
  
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');
  car = car.replace(/ᆯᄂ/g, 'ᆯᄅ');

  car = car.replace(/(ᅡ|ᅪ|ᅣ)에/g, '$1-에');
  car = car.replace(/ᆼᄋ/g, 'ᆼ-ᄋ');

  car = car.replace(/(^\s*|\n\s*)(ᄀ|ᄁ|ᄂ|ᄃ|ᄄ|ᄅ|ᄆ|ᄇ|ᄈ|ᄉ|ᄊ|ᄋ|ᄌ|ᄍ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ)/g, '$1\u2060$2');

  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄀ/g, '$1g');
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄃ/g, '$1d');
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄇ/g, '$1b');
  car = car.replace(/ᄀ/g, 'k');
  car = car.replace(/ᆨ/g, 'k');
  car = car.replace(/ᄁ/g, 'kk');
  car = car.replace(/ᆩ/g, 'k');
  car = car.replace(/ᄂ/g, 'n');
  car = car.replace(/ᆫ/g, 'n');
  car = car.replace(/ᄃ/g, 't');
  car = car.replace(/ᆮ/g, 't');
  car = car.replace(/ᄄ/g, 'tt');
  car = car.replace(/ᄅ/g, 'r');
  car = car.replace(/ᆯ/g, 'l');
  car = car.replace(/ᄆ/g, 'm');
  car = car.replace(/ᆷ/g, 'm');
  car = car.replace(/ᄇ/g, 'p');
  car = car.replace(/ᆸ/g, 'p');
  car = car.replace(/ᄈ/g, 'pp');
  car = car.replace(/ᄉ/g, 's');
  car = car.replace(/ᆺ/g, 't');
  car = car.replace(/ᄊ/g, 'ss');
  car = car.replace(/ᆻ/g, 't');
  car = car.replace(/ᄋ/g, '');
  car = car.replace(/ᆼ/g, 'ng');
  car = car.replace(/ᄌ/g, 'j');
  car = car.replace(/ᆽ/g, 't');
  car = car.replace(/ᄍ/g, 'jj');
  car = car.replace(/ᄎ/g, 'ch');
  car = car.replace(/ᆾ/g, 't');
  car = car.replace(/ᄏ/g, 'kh');
  car = car.replace(/ᆿ/g, 'k');
  car = car.replace(/ᄐ/g, 'th');
  car = car.replace(/ᇀ/g, 't');
  car = car.replace(/ᄑ/g, 'ph');
  car = car.replace(/ᇁ/g, 'p');
  car = car.replace(/ᄒ/g, 'h');
  car = car.replace(/ᇂ/g, 't');

  car = car.replace(/ᅡ/g, 'a');
  car = car.replace(/ᅢ/g, 'ae');
  car = car.replace(/ᅣ/g, 'ya');
  car = car.replace(/ᅤ/g, 'yae');
  car = car.replace(/ᅥ/g, 'ŏ');
  car = car.replace(/ᅦ/g, 'e');
  car = car.replace(/ᅧ/g, 'yŏ');
  car = car.replace(/ᅨ/g, 'ye');
  car = car.replace(/ᅩ/g, 'o');
  car = car.replace(/ᅪ/g, 'wa');
  car = car.replace(/ᅫ/g, 'wae');
  car = car.replace(/ᅬ/g, 'oi');
  car = car.replace(/ᅭ/g, 'yo');
  car = car.replace(/ᅮ/g, 'u');
  car = car.replace(/ᅯ/g, 'wŏ');
  car = car.replace(/ᅰ/g, 'we');
  car = car.replace(/ᅱ/g, 'wi');
  car = car.replace(/ᅲ/g, 'yu');
  car = car.replace(/ᅳ/g, 'ŭ');
  car = car.replace(/ᅴ/g, 'ŭi');
  car = car.replace(/ᅵ/g, 'i');
  
  car = car.replace(/\u2060a/g, "A");
  car = car.replace(/\u2060b/g, "B");
  car = car.replace(/\u2060c/g, "C");
  car = car.replace(/\u2060d/g, "D");
  car = car.replace(/\u2060e/g, "E");
  car = car.replace(/\u2060f/g, "F");
  car = car.replace(/\u2060g/g, "G");
  car = car.replace(/\u2060h/g, "H");
  car = car.replace(/\u2060i/g, "I");
  car = car.replace(/\u2060j/g, "J");
  car = car.replace(/\u2060k/g, "K");
  car = car.replace(/\u2060l/g, "L");
  car = car.replace(/\u2060m/g, "M");
  car = car.replace(/\u2060n/g, "N");
  car = car.replace(/\u2060o/g, "O");
  car = car.replace(/\u2060ŏ/g, "Ŏ");
  car = car.replace(/\u2060p/g, "P");
  car = car.replace(/\u2060q/g, "Q");
  car = car.replace(/\u2060r/g, "R");
  car = car.replace(/\u2060s/g, "S");
  car = car.replace(/\u2060t/g, "T");
  car = car.replace(/\u2060u/g, "U");
  car = car.replace(/\u2060ŭ/g, "Ŭ");
  car = car.replace(/\u2060v/g, "V");
  car = car.replace(/\u2060w/g, "W");
  car = car.replace(/\u2060x/g, "X");
  car = car.replace(/\u2060y/g, "Y");
  car = car.replace(/\u2060z/g, "Z");
  car = car.normalize('NFC');
document.transcription.text2.value = car;
}


function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
