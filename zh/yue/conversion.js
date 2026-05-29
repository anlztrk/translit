function cyrlat () {
document.transcription.text1.value = document.transcription.text1.value
.replace(/(M|N|NG|P|T|K|m|n|ng|p|t|k)1/g, "\u0300$1")
.replace(/([AEIOUYaeiouy])1/g, "$1\u0300")
.replace(/(M|N|NG|P|T|K|m|n|ng|p|t|k)2/g, "\u0301$1")
.replace(/([AEIOUYaeiouy])2/g, "$1\u0301")
.replace(/(M|N|NG|P|T|K|m|n|ng|p|t|k)3/g, "$1")
.replace(/([AEIOUYaeiouy])3/g, "$1")
.replace(/(M|N|NG|P|T|K)4/g, "\u0300H$1")
.replace(/(m|n|ng|p|t|k)4/g, "\u0300h$1")
.replace(/([AEIOUY])4/g, "$1\u0300H")
.replace(/([aeiouy])4/g, "$1\u0300h")
.replace(/(M|N|NG|P|T|K)5/g, "\u0301H$1")
.replace(/(m|n|ng|p|t|k)5/g, "\u0301h$1")
.replace(/([AEIOUY])5/g, "$1\u0301H")
.replace(/([aeiouy])5/g, "$1\u0301h")
.replace(/(M|N|NG|P|T|K)6/g, "H$1")
.replace(/(m|n|ng|p|t|k)6/g, "h$1")
.replace(/([AEIOUY])6/g, "$1H")
.replace(/([aeiouy])6/g, "$1h")
.replace(/([AEIOUYaeiouy])([aeiouy]*)([\u0300\u0301])/gi, "$1$3$2")
.normalize("NFC");
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
