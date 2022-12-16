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

  car = car.replace(/ᅡ에/g, 'ᅡ-에');
  car = car.replace(/ᅦᄋ(ᅩ|ᅬ|ᅮ|ᅴ)/g, 'ᅦ-ᄋ$1');
  car = car.replace(/ᅩ에/g, 'ᅩ-에');
  car = car.replace(/ᆫᄀ/g, 'ᆫ-ᄀ');
  car = car.replace(/ᅮ이/g, 'ᅮ-이');

  car = car.replace(/ᆯᄅ/g, 'll');
  car = car.replace(/ᄀ/g, 'g');
  car = car.replace(/ᆨ/g, 'k');
  car = car.replace(/ᄁ/g, 'kk');
  car = car.replace(/ᆩ/g, 'k');
  car = car.replace(/ᄂ/g, 'n');
  car = car.replace(/ᆫ/g, 'n');
  car = car.replace(/ᄃ/g, 'd');
  car = car.replace(/ᆮ/g, 't');
  car = car.replace(/ᄄ/g, 'tt');
  car = car.replace(/ᄅ/g, 'r');
  car = car.replace(/ᆯ/g, 'l');
  car = car.replace(/ᄆ/g, 'm');
  car = car.replace(/ᆷ/g, 'm');
  car = car.replace(/ᄇ/g, 'b');
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
  car = car.replace(/ᄏ/g, 'k');
  car = car.replace(/ᆿ/g, 'k');
  car = car.replace(/ᄐ/g, 't');
  car = car.replace(/ᇀ/g, 't');
  car = car.replace(/ᄑ/g, 'p');
  car = car.replace(/ᇁ/g, 'p');
  car = car.replace(/ᄒ/g, 'h');
  car = car.replace(/ᇂ/g, 't');

  car = car.replace(/ᅡ/g, 'a');
  car = car.replace(/ᅢ/g, 'ae');
  car = car.replace(/ᅣ/g, 'ya');
  car = car.replace(/ᅤ/g, 'yae');
  car = car.replace(/ᅥ/g, 'eo');
  car = car.replace(/ᅦ/g, 'e');
  car = car.replace(/ᅧ/g, 'yeo');
  car = car.replace(/ᅨ/g, 'ye');
  car = car.replace(/ᅩ/g, 'o');
  car = car.replace(/ᅪ/g, 'wa');
  car = car.replace(/ᅫ/g, 'wae');
  car = car.replace(/ᅬ/g, 'oe');
  car = car.replace(/ᅭ/g, 'yo');
  car = car.replace(/ᅮ/g, 'u');
  car = car.replace(/ᅯ/g, 'wo');
  car = car.replace(/ᅰ/g, 'we');
  car = car.replace(/ᅱ/g, 'wi');
  car = car.replace(/ᅲ/g, 'yu');
  car = car.replace(/ᅳ/g, 'eu');
  car = car.replace(/ᅴ/g, 'ui');
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
