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

  car = car.replace(/ᆨᄂ/g, 'ᆼᄂ');
  car = car.replace(/ᆸᄂ/g, 'ᆷᄂ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄂ/g, 'ᆫᄂ');
  car = car.replace(/ᆨᄅ/g, 'ᆼᄂ');
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');
  car = car.replace(/(ᆷ|ᆸ)ᄅ/g, 'ᆷᄂ');
  car = car.replace(/ᆼᄅ/g, 'ᆼᄂ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄅ/g, 'ᆫᄂ');
  car = car.replace(/ᆨᄆ/g, 'ᆼᄆ');
  car = car.replace(/ᆸᄆ/g, 'ᆷᄆ');
  car = car.replace(/(ᆮ|ᆺ|ᆻ|ᆽ|ᆾ|ᇀ|ᇂ)ᄆ/g, 'ᆫᄆ');

  car = car.replace(/ᇂᄀ/g, 'ᄏ');
  car = car.replace(/ᇂᄃ/g, 'ᄐ');
  car = car.replace(/ᇂᄇ/g, 'ᄑ');
  car = car.replace(/ᇂᄉ/g, 'ᄉ');
  car = car.replace(/ᇂᄌ/g, 'ᄎ');
  car = car.replace(/ᇂᄐ/g, 'ᄐ');
  car = car.replace(/ᇂᄒ/g, 'ᄐ');
  car = car.replace(/ᆽᄒ/g, 'ᄐ');
  
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');

  car = car.replace(/디/g, '지');
  car = car.replace(/티/g, '치');
  
  car = car.replace(/시/g, 'şi');
  car = car.replace(/씨/g, 'şi');
  car = car.replace(/샤/g, 'şya');
  car = car.replace(/쌰/g, 'şya');
  car = car.replace(/섀/g, 'şye');
  car = car.replace(/썌/g, 'şye');
  car = car.replace(/셔/g, 'şyo');
  car = car.replace(/쎠/g, 'şyo');
  car = car.replace(/셰/g, 'şye');
  car = car.replace(/쎼/g, 'şye');
  car = car.replace(/쇼/g, 'şyo');
  car = car.replace(/쑈/g, 'şyo');
  car = car.replace(/슈/g, 'şyu');
  car = car.replace(/쓔/g, 'şyu');
  car = car.replace(/쉬/g, 'şvi');
  car = car.replace(/쒸/g, 'şvi');

  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅵ)ᄋ/g, '$1ğᄋ');
  car = car.replace(/ğᄋ(ᅣ|ᅤ|ᅧ|ᅨ|ᅪ|ᅫ|ᅬ|ᅭ|ᅯ|ᅰ|ᅱ|ᅲ)/g, 'ᄋ$1');
  
  car = car.replace(/ᆯᄅ/g, 'll');
  car = car.replace(/ᄀ/g, 'g');
  car = car.replace(/ᆨ/g, 'k');
  car = car.replace(/ᄁ/g, 'k');
  car = car.replace(/ᆩ/g, 'k');
  car = car.replace(/ᄂ/g, 'n');
  car = car.replace(/ᆫ/g, 'n');
  car = car.replace(/ᄃ/g, 'd');
  car = car.replace(/ᆮ/g, 't');
  car = car.replace(/ᄄ/g, 't');
  car = car.replace(/ᄅ/g, 'r');
  car = car.replace(/ᆯ/g, 'l');
  car = car.replace(/ᄆ/g, 'm');
  car = car.replace(/ᆷ/g, 'm');
  car = car.replace(/ᄇ/g, 'b');
  car = car.replace(/ᆸ/g, 'p');
  car = car.replace(/ᄈ/g, 'p');
  car = car.replace(/ᄉ/g, 's');
  car = car.replace(/ᆺ/g, 't');
  car = car.replace(/ᄊ/g, 's');
  car = car.replace(/ᆻ/g, 't');
  car = car.replace(/ᄋ/g, '');
  car = car.replace(/ᆼ/g, 'nğ');
  car = car.replace(/ᄌ/g, 'c');
  car = car.replace(/ᆽ/g, 't');
  car = car.replace(/ᄍ/g, 'ç');
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

  car = car.replace(/ᅡ/g, 'a');
  car = car.replace(/ᅢ/g, 'e');
  car = car.replace(/ᅣ/g, 'ya');
  car = car.replace(/ᅤ/g, 'ye');
  car = car.replace(/ᅥ/g, 'o\u0363');
  car = car.replace(/ᅦ/g, 'e');
  car = car.replace(/ᅧ/g, 'yo\u0363');
  car = car.replace(/ᅨ/g, 'ye');
  car = car.replace(/ᅩ/g, 'o');
  car = car.replace(/ᅪ/g, 'va');
  car = car.replace(/ᅫ/g, 've');
  car = car.replace(/ᅬ/g, 've');
  car = car.replace(/ᅭ/g, 'yo');
  car = car.replace(/ᅮ/g, 'u');
  car = car.replace(/ᅯ/g, 'vo\u0363');
  car = car.replace(/ᅰ/g, 've');
  car = car.replace(/ᅱ/g, 'vi');
  car = car.replace(/ᅲ/g, 'yu');
  car = car.replace(/ᅳ/g, 'ı');
  car = car.replace(/ᅴ/g, 'ıy');
  car = car.replace(/ᅵ/g, 'i');
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
