﻿//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/(Q|R|Y|U|I|Ğ|Ü|A|F|H|L|İ|Z|X|V|M|Ö|ğ|f|z|x|v)/g, "");
  car = car.replace(/ç/g, "ч");
  car = car.replace(/Ç/g, "Ч");
  car = car.replace(/ň/g, "ң");
  car = car.replace(/ö/g, "ө");
  car = car.replace(/ş/g, "ш");
  car = car.replace(/Ş/g, "Ш");
  car = car.replace(/ü/g, "ү");

  car = car.normalize('NFD');

  car = car.replace(/g/g, "ᄀ");
  car = car.replace(/G/g, "ᄁ");
  car = car.replace(/K/g, "ᄁ");
  car = car.replace(/n/g, "ᄂ");
  car = car.replace(/d/g, "ᄃ");
  car = car.replace(/D/g, "ᄄ");
  car = car.replace(/T/g, "ᄄ");
  car = car.replace(/r/g, "ᄅ");
  car = car.replace(/l/g, "ᄅ");
  car = car.replace(/m/g, "ᄆ");
  car = car.replace(/b/g, "ᄇ");
  car = car.replace(/B/g, "ᄈ");
  car = car.replace(/P/g, "ᄈ");
  car = car.replace(/s/g, "ᄉ");
  car = car.replace(/ш/g, "ᄉ");
  car = car.replace(/S/g, "ᄊ");
  car = car.replace(/Ш/g, "ᄊ");
  car = car.replace(/ң/g, "ᄋ");
  car = car.replace(/q/g, "ᄋ");
  car = car.replace(/N/g, "ᄋ");
  car = car.replace(/j/g, "ᄌ");
  car = car.replace(/c/g, "ᄌ");
  car = car.replace(/J/g, "ᄍ");
  car = car.replace(/C/g, "ᄍ");
  car = car.replace(/Ч/g, "ᄍ");
  car = car.replace(/ч/g, "ᄎ");
  car = car.replace(/k/g, "ᄏ");
  car = car.replace(/t/g, "ᄐ");
  car = car.replace(/p/g, "ᄑ");
  car = car.replace(/h/g, "ᄒ");
  car = car.replace(/a/g, "ᅡ");
  car = car.replace(/E/g, "ᅢ");
  car = car.replace(/O/g, "ᅥ");
  car = car.replace(/e/g, "ᅦ");
  car = car.replace(/o/g, "ᅩ");
  car = car.replace(/u/g, "ᅮ");
  car = car.replace(/ı/g, "ᅳ");
  car = car.replace(/i/g, "ᅵ");
  car = car.replace(/ө/g, "ᅬ");
  car = car.replace(/ү/g, "ᅱ");
  car = car.replace(/yᅡ/g, "ᅣ");
  car = car.replace(/yᅢ/g, "ᅤ");
  car = car.replace(/yᅥ/g, "ᅧ");
  car = car.replace(/yᅦ/g, "ᅨ");
  car = car.replace(/yᅩ/g, "ᅭ");
  car = car.replace(/yᅮ/g, "ᅲ");
  car = car.replace(/ᅳy/g, "ᅴ");
  car = car.replace(/wᅡ/g, "ᅪ");
  car = car.replace(/wᅢ/g, "ᅫ");
  car = car.replace(/Wᅦ/g, "ᅬ");
  car = car.replace(/Wᅵ/g, "ᅬ");
  car = car.replace(/wᅥ/g, "ᅯ");
  car = car.replace(/wᅦ/g, "ᅰ");
  car = car.replace(/wᅵ/g, "ᅱ");
  
  
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄀ/g, "$1ᆨ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄁ/g, "$1ᆩ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄂ/g, "$1ᆫ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄃ/g, "$1ᆮ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄅ/g, "$1ᆯ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄆ/g, "$1ᆷ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄇ/g, "$1ᆸ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄉ/g, "$1ᆺ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄊ/g, "$1ᆻ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄋ/g, "$1ᆼ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄌ/g, "$1ᆽ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄎ/g, "$1ᆾ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄏ/g, "$1ᆿ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄐ/g, "$1ᇀ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄑ/g, "$1ᇁ");
  car = car.replace(/(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)ᄒ/g, "$1ᇂ");
  car = car.replace(/ᆨᄉ/g, "ᆪ");
  car = car.replace(/ᆫᄌ/g, "ᆬ");
  car = car.replace(/ᆫᄒ/g, "ᆭ");
  car = car.replace(/ᆯᄀ/g, "ᆰ");
  car = car.replace(/ᆯᄆ/g, "ᆱ");
  car = car.replace(/ᆯᄇ/g, "ᆲ");
  car = car.replace(/ᆯᄉ/g, "ᆳ");
  car = car.replace(/ᆯᄐ/g, "ᆴ");
  car = car.replace(/ᆯᄑ/g, "ᆵ");
  car = car.replace(/ᆯᄒ/g, "ᆶ");
  car = car.replace(/ᆸᄉ/g, "ᆹ");
  
  car = car.replace(/ᆨ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄀ$1");
  car = car.replace(/ᆩ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄁ$1");
  car = car.replace(/ᆫ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄂ$1");
  car = car.replace(/ᆮ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄃ$1");
  car = car.replace(/ᆯ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄅ$1");
  car = car.replace(/ᆷ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄆ$1");
  car = car.replace(/ᆸ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄇ$1");
  car = car.replace(/ᆺ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄉ$1");
  car = car.replace(/ᆻ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄊ$1");
  car = car.replace(/ᆼ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄋ$1");
  car = car.replace(/ᆽ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄌ$1");
  car = car.replace(/ᆾ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄎ$1");
  car = car.replace(/ᆿ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄏ$1");
  car = car.replace(/ᇀ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄐ$1");
  car = car.replace(/ᇁ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄑ$1");
  car = car.replace(/ᇂ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᄒ$1");
  car = car.replace(/ᆪ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆨᄉ$1");
  car = car.replace(/ᆬ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆫᄌ$1");
  car = car.replace(/ᆭ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆫᄒ$1");
  car = car.replace(/ᆰ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄀ$1");
  car = car.replace(/ᆱ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄆ$1");
  car = car.replace(/ᆲ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄇ$1");
  car = car.replace(/ᆳ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄉ$1");
  car = car.replace(/ᆴ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄐ$1");
  car = car.replace(/ᆵ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄑ$1");
  car = car.replace(/ᆶ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆯᄒ$1");
  car = car.replace(/ᆹ(ᅡ|ᅢ|ᅣ|ᅤ|ᅥ|ᅦ|ᅧ|ᅨ|ᅩ|ᅪ|ᅫ|ᅬ|ᅭ|ᅮ|ᅯ|ᅰ|ᅱ|ᅲ|ᅳ|ᅴ|ᅵ)/g, "ᆸᄉ$1");
  car = car.normalize('NFC');
  
  car = car.replace(/ᄀ /g, "ㄱ");
  car = car.replace(/ᄁ /g, "ㄲ");
  car = car.replace(/ᄂ /g, "ㄴ");
  car = car.replace(/ᄃ /g, "ㄷ");
  car = car.replace(/ᄄ /g, "ㄸ");
  car = car.replace(/ᄅ /g, "ㄹ");
  car = car.replace(/ᄆ /g, "ㅁ");
  car = car.replace(/ᄇ /g, "ㅂ");
  car = car.replace(/ᄈ /g, "ㅃ");
  car = car.replace(/ᄉ /g, "ㅅ");
  car = car.replace(/ᄊ /g, "ㅆ");
  car = car.replace(/ᄋ /g, "ㅇ");
  car = car.replace(/ᄌ /g, "ㅈ");
  car = car.replace(/ᄍ /g, "ㅉ");
  car = car.replace(/ᄎ /g, "ㅊ");
  car = car.replace(/ᄏ /g, "ㅋ");
  car = car.replace(/ᄐ /g, "ㅌ");
  car = car.replace(/ᄑ /g, "ㅍ");
  car = car.replace(/ᄒ /g, "ㅎ");
  car = car.replace(/ᅡ /g, "ㅏ");
  car = car.replace(/ᅢ /g, "ㅐ");
  car = car.replace(/ᅣ /g, "ㅑ");
  car = car.replace(/ᅤ /g, "ㅒ");
  car = car.replace(/ᅥ /g, "ㅓ");
  car = car.replace(/ᅦ /g, "ㅔ");
  car = car.replace(/ᅧ /g, "ㅕ");
  car = car.replace(/ᅨ /g, "ㅖ");
  car = car.replace(/ᅩ /g, "ㅗ");
  car = car.replace(/ᅪ /g, "ㅘ");
  car = car.replace(/ᅫ /g, "ㅙ");
  car = car.replace(/ᅬ /g, "ㅚ");
  car = car.replace(/ᅭ /g, "ㅛ");
  car = car.replace(/ᅮ /g, "ㅜ");
  car = car.replace(/ᅯ /g, "ㅝ");
  car = car.replace(/ᅰ /g, "ㅞ");
  car = car.replace(/ᅱ /g, "ㅟ");
  car = car.replace(/ᅲ /g, "ㅠ");
  car = car.replace(/ᅳ /g, "ㅡ");
  car = car.replace(/ᅴ /g, "ㅢ");
  car = car.replace(/ᅵ /g, "ㅣ");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}