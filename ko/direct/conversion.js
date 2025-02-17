var car;

function cyrlat () {
  car = document.transcription.text1.value;
   car = car.normalize('NFD');
   car = car.replace(/ᆪ/g, 'gs');
   car = car.replace(/ᆬ/g, 'nj');
   car = car.replace(/ᆭ/g, 'nh');
   car = car.replace(/ᆰ/g, 'rg');
   car = car.replace(/ᆲ/g, 'rb');
   car = car.replace(/ᆶ/g, 'rh');
   car = car.replace(/ᆱ/g, 'rm');
   car = car.replace(/ᆹ/g, 'bs');
   car = car.replace(/ㄿ/g, 'rp');
   car = car.replace(/ᆳ/g, 'rs');
   car = car.replace(/ㄾ/g, 'rt');
   car = car.replace(/ᄀ/g, 'g');
   car = car.replace(/ᆨ/g, 'g');
   car = car.replace(/ᄁ/g, 'ġ');
   car = car.replace(/ᆩ/g, 'ġ');
   car = car.replace(/ᄂ/g, 'n');
   car = car.replace(/ᆫ/g, 'n');
   car = car.replace(/ᄃ/g, 'd');
   car = car.replace(/ᆮ/g, 'd');
   car = car.replace(/ᄄ/g, 'ḍ');
   car = car.replace(/ᄅ/g, 'r');
   car = car.replace(/ᆯ/g, 'r');
   car = car.replace(/ᄆ/g, 'm');
   car = car.replace(/ᆷ/g, 'm');
   car = car.replace(/ᄇ/g, 'b');
   car = car.replace(/ᆸ/g, 'b');
   car = car.replace(/ᄈ/g, 'ḅ');
   car = car.replace(/ᄉ/g, 's');
   car = car.replace(/ᆺ/g, 's');
   car = car.replace(/ᄊ/g, 'ṡ');
   car = car.replace(/ᆻ/g, 'ṡ');
   car = car.replace(/ᄋ/g, '\u2019');
   car = car.replace(/ᆼ/g, 'ǹ');
   car = car.replace(/ᄌ/g, 'j');
   car = car.replace(/ᆽ/g, 'j');
   car = car.replace(/ᄍ/g, 'ɉ');
   car = car.replace(/ᄎ/g, 'c');
   car = car.replace(/ᆾ/g, 'c');
   car = car.replace(/ᄏ/g, 'k');
   car = car.replace(/ᆿ/g, 'k');
   car = car.replace(/ᄐ/g, 't');
   car = car.replace(/ᇀ/g, 't');
   car = car.replace(/ᄑ/g, 'p');
   car = car.replace(/ᇁ/g, 'p');
   car = car.replace(/ᄒ/g, 'h');
   car = car.replace(/ᇂ/g, 'h');
   car = car.replace(/([bḅcdḍgġhjɉkmnṅprsṡt])\u2019/g, "$1\u002d");
   car = car.replace(/\u2019/g, "");

   car = car.replace(/ᅡ/g, 'a');
   car = car.replace(/ᅢ/g, 'æ');
   car = car.replace(/ᅣ/g, 'ya');
   car = car.replace(/ᅤ/g, 'yæ');
   car = car.replace(/ᅥ/g, 'ŏ');
   car = car.replace(/ᅦ/g, 'e');
   car = car.replace(/ᅧ/g, 'yŏ');
   car = car.replace(/ᅨ/g, 'ye');
   car = car.replace(/ᅩ/g, 'o');
   car = car.replace(/ᅪ/g, 'ẇa');
   car = car.replace(/ᅫ/g, 'ẇæ');
   car = car.replace(/ᅬ/g, 'ẇi');
   car = car.replace(/ᅭ/g, 'yo');
   car = car.replace(/ᅮ/g, 'u');
   car = car.replace(/ᅯ/g, 'wo');
   car = car.replace(/ᅰ/g, 'we');
   car = car.replace(/ᅱ/g, 'wi');
   car = car.replace(/ᅲ/g, 'yu');
   car = car.replace(/ᅳ/g, 'ŭ');
   car = car.replace(/ᅴ/g, 'ŭy');
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
