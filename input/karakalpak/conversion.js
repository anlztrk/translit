var car;
function cyrlat () {
document.transcription.text1.value = document.transcription.text1.value.replace(/['ˈ’‘ʻʼ´`ʿʹˊ׳′ʽߵ՚ߴ᾿ՙ῾‛ʾ՛ˋ]/g, "\u0027")
                                                                       .replace(/([AaGgIiNnOoUu])\u0027/g, "$1\u0301")
                                                                       .replace(/i\u0301/g, "ı")
                                                                       .normalize('NFC');
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
