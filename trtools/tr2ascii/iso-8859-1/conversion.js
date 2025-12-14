function cyrlat () {
document.transcription.text1.value = document.transcription.text1.value
  .replace(/ð/g, "ğ")
  .replace(/Ð/g, "Ğ")
  .replace(/ý/g, "ı")
  .replace(/Ý/g, "İ")
  .replace(/þ/g, "ş")
  .replace(/Þ/g, "Ş")
  .replace(/ş/g, "s")
  .replace(/Ş/g, "S")
  .replace(/ğ/g, "g")
  .replace(/Ğ/g, "G")
  .replace(/ı/g, "i")
  .replace(/İ/g, "I")
  .replace(/ə/g, "ä")
  .replace(/Ə/g, "Ä");
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}