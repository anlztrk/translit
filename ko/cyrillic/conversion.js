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
  
  car = car.replace(/ᆫᄅ/g, 'ᆯᄅ');
  car = car.replace(/ᆯᄂ/g, 'ᆯᄅ');

  car = car.replace(/(ᅡ|ᅪ|ᅣ|ᅩ|ᅭ)에/g, '$1에\u0308');
  car = car.replace(/ᆫᄀ/g, 'ᆫ\u2019ᄀ');
  car = car.replace(/ᆼᄋ/g, 'ᆼ\u2019ᄋ');

  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ\u2019|ᆯ|ᆷ|ᆼ)ᄀ/g, '$1г');
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄃ/g, '$1д');
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄇ/g, '$1б');
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ|ᆫ|ᆯ|ᆷ|ᆼ)ᄌ/g, '$1чж');
  car = car.replace(/ᆯᄅ/g, 'лль');
  car = car.replace(/ᄀ/g, 'кх');
  car = car.replace(/ᆨ/g, 'к');
  car = car.replace(/ᄁ/g, 'кк');
  car = car.replace(/ᆩ/g, 'к');
  car = car.replace(/ᄂ/g, 'н');
  car = car.replace(/ᆫ/g, 'н');
  car = car.replace(/ᄃ/g, 'тх');
  car = car.replace(/ᆮ/g, 'т');
  car = car.replace(/ᄄ/g, 'тт');
  car = car.replace(/ᄅ/g, 'р');
  car = car.replace(/ᆯ/g, 'ль');
  car = car.replace(/ᄆ/g, 'м');
  car = car.replace(/ᆷ/g, 'м');
  car = car.replace(/ᄇ/g, 'пх');
  car = car.replace(/ᆸ/g, 'п');
  car = car.replace(/ᄈ/g, 'п');
  car = car.replace(/쉬/g, 'щви');
  car = car.replace(/ᄉ/g, 'с');
  car = car.replace(/ᆺ/g, 'т');
  car = car.replace(/ᄊ/g, 'сс');
  car = car.replace(/ᆻ/g, 'т');
  car = car.replace(/ᄋ/g, '');
  car = car.replace(/ᆼ/g, 'нъ');
  car = car.replace(/ᄌ/g, 'ч');
  car = car.replace(/ᆽ/g, 'т');
  car = car.replace(/ᄍ/g, 'тч');
  car = car.replace(/ᄎ/g, 'чх');
  car = car.replace(/ᆾ/g, 'т');
  car = car.replace(/ᄏ/g, 'кх');
  car = car.replace(/ᆿ/g, 'к');
  car = car.replace(/ᄐ/g, 'тх');
  car = car.replace(/ᇀ/g, 'т');
  car = car.replace(/ᄑ/g, 'пх');
  car = car.replace(/ᇁ/g, 'п');
  car = car.replace(/ᄒ/g, 'х');
  car = car.replace(/ᇂ/g, 'т');

  car = car.replace(/ᅡ/g, 'а');
  car = car.replace(/ᅢ/g, 'э');
  car = car.replace(/ᅣ/g, 'я');
  car = car.replace(/ᅤ/g, 'йэ');
  car = car.replace(/ᅥ/g, 'o');
  car = car.replace(/ᅦ/g, 'е');
  car = car.replace(/ᅧ/g, 'йo');
  car = car.replace(/ᅨ/g, 'йе');
  car = car.replace(/ᅩ/g, 'o');
  car = car.replace(/ᅪ/g, 'ва');
  car = car.replace(/ᅫ/g, 'вэ');
  car = car.replace(/ᅬ/g, 'ве');
  car = car.replace(/ᅭ/g, 'ё');
  car = car.replace(/ᅮ/g, 'у');
  car = car.replace(/ᅯ/g, 'вo');
  car = car.replace(/ᅰ/g, 'ве');
  car = car.replace(/ᅱ/g, 'ви');
  car = car.replace(/ᅲ/g, 'ю');
  car = car.replace(/ᅳ/g, 'ы');
  car = car.replace(/ᅴ/g, 'ый');
  car = car.replace(/ᅵ/g, 'и');   
  
  car = car.replace(/ьа/g, 'я');
  car = car.replace(/ьэ/g, 'е');
  car = car.replace(/ьo/g, 'ё');
  car = car.replace(/ьу/g, 'ю');
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
