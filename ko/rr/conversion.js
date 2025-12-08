var car;

function cyrlat () {
   car = document.transcription.text1.value;
   car = car.normalize('NFD');

   let latinWords = {};
   let index = 0;
   car = car.replace(/\p{sc=Latin}+/ug, function(match) {
     let key = `__placeholder${index}__`;
     latinWords[key] = match;
     index++;
     return key;
   });
  
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

   car = car.replace(/(ᅡ|ᅪ|ᅣ)ᄋ(ᅦ|ᅥ|ᅳ)/g, '$1-ᄋ$2');
   car = car.replace(/(ᅦ|ᅢ|ᅤ|ᅨ|ᅫ|ᅬ|ᅰ)ᄋ(ᅩ|ᅬ|ᅮ|ᅴ)/g, '$1-ᄋ$2');
   car = car.replace(/(ᅥ|ᅧ|ᅩ|ᅭ|ᅯ)ᄋ(ᅦ|ᅥ|ᅳ)/g, '$1-ᄋ$2');
   car = car.replace(/(ᅮ|ᅲ|ᅳ)이/g, '$1-이');
// car = car.replace(/ᆫᄀ/g, 'ᆫ-ᄀ');
   car = car.replace(/ᆼᄋ/g, 'ᆼ-ᄋ');
   
   car = car.replace(/(^\s*|\n\s*)(ᄀ|ᄁ|ᄂ|ᄃ|ᄄ|ᄅ|ᄆ|ᄇ|ᄈ|ᄉ|ᄊ|ᄋ|ᄌ|ᄍ|ᄎ|ᄏ|ᄐ|ᄑ|ᄒ)/g, '$1\u2060$2');

   car = car.replace(/ᆯᄅ/g, 'LL');
   car = car.replace(/ᄀ/g, 'G');
   car = car.replace(/ᆨ/g, 'K');
   car = car.replace(/ᄁ/g, 'KK');
   car = car.replace(/ᆩ/g, 'K');
   car = car.replace(/ᄂ/g, 'N');
   car = car.replace(/ᆫ/g, 'N');
   car = car.replace(/ᄃ/g, 'D');
   car = car.replace(/ᆮ/g, 'T');
   car = car.replace(/ᄄ/g, 'TT');
   car = car.replace(/ᄅ/g, 'R');
   car = car.replace(/ᆯ/g, 'L');
   car = car.replace(/ᄆ/g, 'M');
   car = car.replace(/ᆷ/g, 'M');
   car = car.replace(/ᄇ/g, 'B');
   car = car.replace(/ᆸ/g, 'P');
   car = car.replace(/ᄈ/g, 'PP');
   car = car.replace(/ᄉ/g, 'S');
   car = car.replace(/ᆺ/g, 'T');
   car = car.replace(/ᄊ/g, 'SS');
   car = car.replace(/ᆻ/g, 'T');
   car = car.replace(/ᄋ/g, '');
   car = car.replace(/ᆼ/g, 'NG');
   car = car.replace(/ᄌ/g, 'J');
   car = car.replace(/ᆽ/g, 'T');
   car = car.replace(/ᄍ/g, 'JJ');
   car = car.replace(/ᄎ/g, 'CH');
   car = car.replace(/ᆾ/g, 'T');
   car = car.replace(/ᄏ/g, 'K');
   car = car.replace(/ᆿ/g, 'K');
   car = car.replace(/ᄐ/g, 'T');
   car = car.replace(/ᇀ/g, 'T');
   car = car.replace(/ᄑ/g, 'P');
   car = car.replace(/ᇁ/g, 'P');
   car = car.replace(/ᄒ/g, 'H');
   car = car.replace(/ᇂ/g, 'T');

   car = car.replace(/ᅡ/g, 'A');
   car = car.replace(/ᅢ/g, 'AE');
   car = car.replace(/ᅣ/g, 'YA');
   car = car.replace(/ᅤ/g, 'YAE');
   car = car.replace(/ᅥ/g, 'EO');
   car = car.replace(/ᅦ/g, 'E');
   car = car.replace(/ᅧ/g, 'YEO');
   car = car.replace(/ᅨ/g, 'YE');
   car = car.replace(/ᅩ/g, 'O');
   car = car.replace(/ᅪ/g, 'WA');
   car = car.replace(/ᅫ/g, 'WAE');
   car = car.replace(/ᅬ/g, 'OE');
   car = car.replace(/ᅭ/g, 'YO');
   car = car.replace(/ᅮ/g, 'U');
   car = car.replace(/ᅯ/g, 'WO');
   car = car.replace(/ᅰ/g, 'WE');
   car = car.replace(/ᅱ/g, 'WI');
   car = car.replace(/ᅲ/g, 'YU');
   car = car.replace(/ᅳ/g, 'EU');
   car = car.replace(/ᅴ/g, 'UI');
   car = car.replace(/ᅵ/g, 'I');

   car = car.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019'"()]+)/gu, function(_, first, second) {
    return first + second.toLowerCase();
});

   Object.keys(latinWords).forEach(key => {
     car = car.replace(key, latinWords[key]);
});
document.transcription.text2.value = car;
}


function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
