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
  car = car.replace(/(ᆨ|ᆿ)ᄅ/g, 'ᆼᄂ');
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');
  car = car.replace(/(ᆷ|ᆸ)ᄅ/g, 'ᆷᄂ');
  car = car.replace(/ᆼᄅ/g, 'ᆼᄂ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄅ/g, 'ᆫᄂ');
  car = car.replace(/(ᆨ|ᆿ)ᄆ/g, 'ᆼᄆ');
  car = car.replace(/(ᆸ|ᇁ)ᄆ/g, 'ᆷᄆ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄆ/g, 'ᆫᄆ');

  car = car.replace(/ᇂᄀ/g, 'ᄏ');
  car = car.replace(/ᇂᄃ/g, 'ᄐ');
  car = car.replace(/ᇂᄇ/g, 'ᄑ');
  car = car.replace(/ᇂᄌ/g, 'ᄎ');
  
  car = car.replace(/ᇂᄂ/g, 'ᆫᄂ');
  car = car.replace(/ᇂ(ᄅ|ᄆ|ᄉ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ|ᄁ|ᄄ|ᄈ|ᄊ|ᄍ)/g, '$1');
  
  car = car.replace(/ᆽᄒ/g, 'ᄐ');
  car = car.replace(/ᆺᄒ/g, 'ᄐ');
  car = car.replace(/ᆨᄒ/g, 'ᄏ');
  car = car.replace(/ᆮᄒ/g, 'ᄐ');
  car = car.replace(/ᆸᄒ/g, 'ᄑ');
  
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');
  car = car.replace(/ᆯᄂ/g, 'ᆯᄅ');
  
  car = car.replace(/ᆼᄀ/g, 'ᆫᄀ');
  car = car.replace(/ᆼᄁ/g, 'ᆫᄁ');
  car = car.replace(/ᆼᄏ/g, 'ᆫᄏ');
  
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ)ᄋ/g, '$1\u2019ᄋ');
  car = car.replace(/\u2019ᄋ(ᅣ|ᅤ|ᅧ|ᅨ|ᅪ|ᅫ|ᅬ|ᅭ|ᅯ|ᅰ|ᅱ|ᅲ)/g, 'ᄋ$1');
  
  car = car.replace(/시/g, 'şi');
  car = car.replace(/씨/g, 'şi');
  car = car.replace(/샤/g, 'şa');
  car = car.replace(/쌰/g, 'şa');
  car = car.replace(/섀/g, 'şe');
  car = car.replace(/썌/g, 'şe');
  car = car.replace(/셔/g, 'şô');
  car = car.replace(/쎠/g, 'şô');
  car = car.replace(/셰/g, 'şe');
  car = car.replace(/쎼/g, 'şe');
  car = car.replace(/쇼/g, 'şo');
  car = car.replace(/쑈/g, 'şo');
  car = car.replace(/슈/g, 'şu');
  car = car.replace(/쓔/g, 'şu');
  car = car.replace(/쉬/g, 'şü');
  car = car.replace(/쒸/g, 'şü');

  car = car.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄀ|ᄁ)/g, '$1ᄏ');
  car = car.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄃ|ᄄ)/g, '$1ᄐ');
  car = car.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄇ|ᄈ)/g, '$1ᄑ');
  car = car.replace(/(ᆨ|ᆩ|ᆮ|ᆸ|ᆺ|ᆻ|ᆽ|ᆾ|ᆿ|ᇀ|ᇁ|ᇂ)(ᄌ|ᄍ)/g, '$1ᄎ');

  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄎ/g, 'ᄎᄎ');

  car = car.replace(/(^\s*|\n\s*)(ᄀ|ᄁ|ᄂ|ᄃ|ᄄ|ᄅ|ᄆ|ᄇ|ᄈ|ᄉ|ᄊ|ᄋ|ᄌ|ᄍ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ)/g, '$1\u2060$2');

  car = car.replace(/ᆯᄅ/g, 'll');
  car = car.replace(/ᄀ/g, 'g');
  car = car.replace(/ᆨ/g, 'k');
  car = car.replace(/ᄁ/g, 'g');
  car = car.replace(/ᆩ/g, 'k');
  car = car.replace(/ᄂ/g, 'n');
  car = car.replace(/ᆫ/g, 'n');
  car = car.replace(/ᄃ/g, 'd');
  car = car.replace(/ᆮ/g, 't');
  car = car.replace(/ᄄ/g, 'd');
  car = car.replace(/ᄅ/g, 'r');
  car = car.replace(/ᆯ/g, 'l');
  car = car.replace(/ᄆ/g, 'm');
  car = car.replace(/ᆷ/g, 'm');
  car = car.replace(/ᄇ/g, 'b');
  car = car.replace(/ᆸ/g, 'p');
  car = car.replace(/ᄈ/g, 'b');
  car = car.replace(/ᄉ/g, 's');
  car = car.replace(/ᆺ/g, 't');
  car = car.replace(/ᄊ/g, 's');
  car = car.replace(/ᆻ/g, 't');
  
  car = car.replace(/ᆼ/g, 'nğ');
  car = car.replace(/ᄌ/g, 'c');
  car = car.replace(/ᆽ/g, 't');
  car = car.replace(/ᄍ/g, 'c');
  car = car.replace(/ᄎ/g, 'ç');
  car = car.replace(/ᆾ/g, 't');
  car = car.replace(/ᄏ/g, 'k');
  car = car.replace(/ᆿ/g, 'k');
  car = car.replace(/ᄐ/g, 't');
  car = car.replace(/ᇀ/g, 't');
  car = car.replace(/ᄑ/g, 'p');
  car = car.replace(/ᇁ/g, 'p');
  car = car.replace(/ᄒ/g, 'h');
  car = car.replace(/ᇂ/g, 't');

  car = car.replace(/위/g, 'vi');
  car = car.replace(/외/g, 've');


  car = car.replace(/ᄋ/g, '');
  car = car.replace(/ᅡ/g, 'a');
  car = car.replace(/ᅢ/g, 'e');
  car = car.replace(/ᅣ/g, 'ya');
  car = car.replace(/ᅤ/g, 'ye');
  car = car.replace(/ᅥ/g, 'ô');
  car = car.replace(/ᅦ/g, 'e');
  car = car.replace(/ᅧ/g, 'yô');
  car = car.replace(/ᅨ/g, 'ye');
  car = car.replace(/ᅩ/g, 'o');
  car = car.replace(/ᅪ/g, 'va');
  car = car.replace(/ᅫ/g, 've');
  car = car.replace(/ᅬ/g, 'ö');
  car = car.replace(/ᅭ/g, 'yo');
  car = car.replace(/ᅮ/g, 'u');
  car = car.replace(/ᅯ/g, 'vô');
  car = car.replace(/ᅰ/g, 've');
  car = car.replace(/ᅱ/g, 'ü');
  car = car.replace(/ᅲ/g, 'yu');
  car = car.replace(/ᅳ/g, 'ı');
  car = car.replace(/ᅴ/g, 'ıy');
  car = car.replace(/ᅵ/g, 'i');

  car = car.replace(/\u2060a/g, "A");
  car = car.replace(/\u2060b/g, "B");
  car = car.replace(/\u2060c/g, "C");
  car = car.replace(/\u2060ç/g, "Ç");
  car = car.replace(/\u2060d/g, "D");
  car = car.replace(/\u2060e/g, "E");
  car = car.replace(/\u2060f/g, "F");
  car = car.replace(/\u2060g/g, "G");
  car = car.replace(/\u2060h/g, "H");
  car = car.replace(/\u2060ı/g, "I");
  car = car.replace(/\u2060i/g, "İ");
  car = car.replace(/\u2060k/g, "K");
  car = car.replace(/\u2060l/g, "L");
  car = car.replace(/\u2060m/g, "M");
  car = car.replace(/\u2060n/g, "N");
  car = car.replace(/\u2060o/g, "O");
  car = car.replace(/\u2060ô/g, "Ô");
  car = car.replace(/\u2060p/g, "P");
  car = car.replace(/\u2060r/g, "R");
  car = car.replace(/\u2060s/g, "S");
  car = car.replace(/\u2060ş/g, "Ş");
  car = car.replace(/\u2060t/g, "T");
  car = car.replace(/\u2060u/g, "U");
  car = car.replace(/\u2060v/g, "V");
  car = car.replace(/\u2060y/g, "Y");
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
