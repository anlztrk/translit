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
  
   car = car.replace(/ᆪ/g, 'ᆨᆺ');
   car = car.replace(/ᆬ/g, 'ᆫᆽ');
   car = car.replace(/ᆭ/g, 'ᆫᇂ');
   car = car.replace(/ᆰ/g, 'ᆯᆨ');
   car = car.replace(/ᆲ/g, 'ᆯᆸ');
   car = car.replace(/ᆶ/g, 'ᆯᇂ');
   car = car.replace(/ᆱ/g, 'ᆯᆷ');
   car = car.replace(/ᆹ/g, 'ᆸᆺ');
   car = car.replace(/ㄿ/g, 'ᆯᇁ');
   car = car.replace(/ᆳ/g, 'ᆯᆺ');
   car = car.replace(/ㄾ/g, 'ᆯᇀ');
  
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
  
   car = car.replace(/ᄀ/g, 'г');
   car = car.replace(/ᆨ/g, 'г');
   car = car.replace(/ᄁ/g, 'гӏ');
   car = car.replace(/ᆩ/g, 'гӏ');
   car = car.replace(/ᄂ/g, 'н');
   car = car.replace(/ᆫ/g, 'н');
   car = car.replace(/ᄃ/g, 'д');
   car = car.replace(/ᆮ/g, 'д');
   car = car.replace(/ᄄ/g, 'дӏ');
   car = car.replace(/ᄅ/g, 'л');
   car = car.replace(/ᆯ/g, 'л');
   car = car.replace(/ᄆ/g, 'м');
   car = car.replace(/ᆷ/g, 'м');
   car = car.replace(/ᄇ/g, 'б');
   car = car.replace(/ᆸ/g, 'б');
   car = car.replace(/ᄈ/g, 'бӏ');
   car = car.replace(/ᄉ/g, 'с');
   car = car.replace(/ᆺ/g, 'с');
   car = car.replace(/ᄊ/g, 'сӏ');
   car = car.replace(/ᆻ/g, 'сӏ');
   car = car.replace(/ᄋ/g, '');
   car = car.replace(/ᆼ/g, 'ң');
   car = car.replace(/ᄌ/g, 'ж');
   car = car.replace(/ᆽ/g, 'ж');
   car = car.replace(/ᄍ/g, 'жӏ');
   car = car.replace(/ᄎ/g, 'ч');
   car = car.replace(/ᆾ/g, 'ч');
   car = car.replace(/ᄏ/g, 'к');
   car = car.replace(/ᆿ/g, 'к');
   car = car.replace(/ᄐ/g, 'т');
   car = car.replace(/ᇀ/g, 'т');
   car = car.replace(/ᄑ/g, 'п');
   car = car.replace(/ᇁ/g, 'п');
   car = car.replace(/ᄒ/g, 'х');
   car = car.replace(/ᇂ/g, 'х');

   car = car.replace(/ᅡ/g, 'а');
   car = car.replace(/ᅢ/g, 'ә');
   car = car.replace(/ᅣ/g, 'я');
   car = car.replace(/ᅤ/g, 'є');
   car = car.replace(/ᅥ/g, 'ъ');
   car = car.replace(/ᅦ/g, 'э');
   car = car.replace(/ᅧ/g, 'ӗ');
   car = car.replace(/ᅨ/g, 'е');
   car = car.replace(/ᅩ/g, 'о');
   car = car.replace(/ᅪ/g, 'ўа');
   car = car.replace(/ᅫ/g, 'ўә');
   car = car.replace(/ᅬ/g, 'ө');
   car = car.replace(/ᅭ/g, 'ё');
   car = car.replace(/ᅮ/g, 'у');
   car = car.replace(/ᅯ/g, 'ўо');
   car = car.replace(/ᅰ/g, 'ўэ');
   car = car.replace(/ᅱ/g, 'ўи');
   car = car.replace(/ᅲ/g, 'ю');
   car = car.replace(/ᅳ/g, 'ы');
   car = car.replace(/ᅴ/g, 'ый');
   car = car.replace(/ᅵ/g, 'и');
 /*  
   car = car.replace(/(^\s*|\n\s*)a/g, "$1A");
   car = car.replace(/(^\s*|\n\s*)b/g, "$1B");
   car = car.replace(/(^\s*|\n\s*)c/g, "$1C");
   car = car.replace(/(^\s*|\n\s*)d/g, "$1D");
   car = car.replace(/(^\s*|\n\s*)e/g, "$1E");
   car = car.replace(/(^\s*|\n\s*)f/g, "$1F");
   car = car.replace(/(^\s*|\n\s*)g/g, "$1G");
   car = car.replace(/(^\s*|\n\s*)h/g, "$1H");
   car = car.replace(/(^\s*|\n\s*)i/g, "$1I");
   car = car.replace(/(^\s*|\n\s*)j/g, "$1J");
   car = car.replace(/(^\s*|\n\s*)k/g, "$1K");
   car = car.replace(/(^\s*|\n\s*)l/g, "$1L");
   car = car.replace(/(^\s*|\n\s*)m/g, "$1M");
   car = car.replace(/(^\s*|\n\s*)n/g, "$1N");
   car = car.replace(/(^\s*|\n\s*)o/g, "$1O");
   car = car.replace(/(^\s*|\n\s*)p/g, "$1P");
   car = car.replace(/(^\s*|\n\s*)q/g, "$1Q");
   car = car.replace(/(^\s*|\n\s*)r/g, "$1R");
   car = car.replace(/(^\s*|\n\s*)s/g, "$1S");
   car = car.replace(/(^\s*|\n\s*)t/g, "$1T");
   car = car.replace(/(^\s*|\n\s*)u/g, "$1U");
   car = car.replace(/(^\s*|\n\s*)v/g, "$1V");
   car = car.replace(/(^\s*|\n\s*)w/g, "$1W");
   car = car.replace(/(^\s*|\n\s*)x/g, "$1X");
   car = car.replace(/(^\s*|\n\s*)y/g, "$1Y");
   car = car.replace(/(^\s*|\n\s*)z/g, "$1Z");
*/
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
