var translit;

function cyrlat () {
translit = document.transcription.text1.value;
translit = translit.replace(/а/g, "a");
translit = translit.replace(/б/g, "b");
translit = translit.replace(/в/g, "v");
translit = translit.replace(/г/g, "g");
translit = translit.replace(/д/g, "d");
translit = translit.replace(/е/g, "e");
translit = translit.replace(/ж/g, "zh");
translit = translit.replace(/з/g, "z");
translit = translit.replace(/и/g, "i");
translit = translit.replace(/й/g, "i");
translit = translit.replace(/к/g, "k");
translit = translit.replace(/л/g, "l");
translit = translit.replace(/м/g, "m");
translit = translit.replace(/н/g, "n");
translit = translit.replace(/о/g, "o");
translit = translit.replace(/п/g, "p");
translit = translit.replace(/р/g, "r");
translit = translit.replace(/с/g, "s");
translit = translit.replace(/т/g, "t");
translit = translit.replace(/у/g, "u");
translit = translit.replace(/ф/g, "f");
translit = translit.replace(/х/g, "kh");
translit = translit.replace(/ц/g, "ts");
translit = translit.replace(/ч/g, "ch");
translit = translit.replace(/ш/g, "sh");
translit = translit.replace(/щ/g, "shch");
translit = translit.replace(/ъ/g, "ie");
translit = translit.replace(/ы/g, "y");
translit = translit.replace(/ь/g, "");
translit = translit.replace(/э/g, "e");
translit = translit.replace(/ю/g, "iu");
translit = translit.replace(/ё/g, "e");
translit = translit.replace(/я/g, "ia");

translit = translit.replace(/А/g, "A");
translit = translit.replace(/Б/g, "B");
translit = translit.replace(/В/g, "V");
translit = translit.replace(/Г/g, "G");
translit = translit.replace(/Д/g, "D");
translit = translit.replace(/Е/g, "E");
translit = translit.replace(/Ж/g, "Zh");
translit = translit.replace(/З/g, "Z");
translit = translit.replace(/И/g, "I");
translit = translit.replace(/Й/g, "I");
translit = translit.replace(/К/g, "K");
translit = translit.replace(/Л/g, "L");
translit = translit.replace(/М/g, "M");
translit = translit.replace(/Н/g, "N");
translit = translit.replace(/О/g, "O");
translit = translit.replace(/П/g, "P");
translit = translit.replace(/Р/g, "R");
translit = translit.replace(/С/g, "S");
translit = translit.replace(/Т/g, "T");
translit = translit.replace(/У/g, "U");
translit = translit.replace(/Ф/g, "F");
translit = translit.replace(/Х/g, "Kh");
translit = translit.replace(/Ц/g, "Ts");
translit = translit.replace(/Ч/g, "Ch");
translit = translit.replace(/Ш/g, "Sh");
translit = translit.replace(/Щ/g, "Shch");
translit = translit.replace(/Ъ/g, "IE");
translit = translit.replace(/Ы/g, "Y");
translit = translit.replace(/Ь/g, "");
translit = translit.replace(/Э/g, "E");
translit = translit.replace(/Ю/g, "Iu");
translit = translit.replace(/Ё/g, "E");
translit = translit.replace(/Я/g, "Ia");
translit = translit.replace(/«/g, "\u201e");
translit = translit.replace(/»/g, "\u201c");
document.transcription.text2.value = translit;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
