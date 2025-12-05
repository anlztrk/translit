var car;
function cyrlat () {
document.transcription.text1.value = document.transcription.text1.value.replace(/['ˈ’‘ʻʼ´`ʿʹˊ׳′ʽߵ՚ߴ᾿ՙ῾‛ʾ՛ˋ]/g, "\u0027")
                                                                       .replace(/([AaGgIiNnOoUu])\u0027/g, "$1\u0301")
                                                                       .replace(/i\u0301/g, "ı")
                                                                       .normalize('NFC');
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
