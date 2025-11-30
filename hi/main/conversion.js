/* Cleaned Hindi(Devanagari) → Latin transliteration script
   - Uses a deterministic mapping table
   - Inserts a temporary schwa-marker (MARK) for the first realizable schwa,
     then transliterates and finally replaces MARK with 'A'
*/

var car;

const ZWNJ = '\u200c'; // zero-width non-joiner
const ZWSP = '\u200b'; // zero-width space
const MARK = ZWNJ + ZWSP; // temporary schwa marker inserted into syllable
const REALIZED_SCHWA = 'A';

// Devanagari sets (explicit, including common nukta forms)
const VOWELS = 'अआइईउऊएऐओऔऋ';
const MATRAS = 'ािीुूेैोौृ';
const HALANT = '\u094d'; // virama

// consonants base + nukta variants included explicitly
const CONSONANTS = [
  'क','ख','ग','घ','ङ',
  'च','छ','ज','झ','ञ',
  'ट','ठ','ड','ढ','ण',
  'त','थ','द','ध','न',
  'प','फ','ब','भ','म',
  'य','र','ल','व','श','ष','स','ह','ळ'
];
// common nukta variants (single-char letters in Devanagari block)
const NUKTA_FORMS = ['क़','ख़','ग़','ज़','ड़','ढ़','फ़','य़','व़','झ़']; // include variants you use

// helper: escape for regex
function reEscape(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// Realize first valid schwa in each Devanagari word
function realizeFirstValidSchwa(text) {
  // Build class strings for regex
  const vowelClass = '[' + VOWELS.split('').map(reEscape).join('') + ']';
  const matraClass  = '[' + MATRAS.split('').map(reEscape).join('') + HALANT + ']';
  const consonantClass = '[' + CONSONANTS.concat(NUKTA_FORMS).map(reEscape).join('') + ']';

  return text.replace(/[\u0900-\u097F]+/g, function(word) {
    // If word starts with a standalone vowel, skip
    if (new RegExp('^' + vowelClass).test(word)) return word;

    // If the first consonant is immediately followed by a matra or halant, skip
    if (new RegExp('^' + consonantClass + '(?:' + matraClass + ')').test(word)) return word;

    // Else: insert the MARK after the first consonant to mark realized schwa
    return word.replace(new RegExp('^(' + consonantClass + ')'), `$1${MARK}`);
  });
}

// Programmatic mapping tables (nukta forms + regular)
const mappingPairs = [
  // Nukta-added consonants first (explicit)
  ['क़','Q'], ['ख़','KH'], ['ग़','GH'], ['ज़','Z'], ['झ़','ZH'], ['फ़','F'],
  ['ड़','R'], ['ढ़','RH'], ['य़','Y'], ['व़','W'],

  // Common ligature
  ['ज्ञ','GY'],

  // Regular consonants
  ['क','K'], ['ख','KH'], ['ग','G'], ['घ','GH'], ['ङ','N'],
  ['च','CH'], ['छ','CHH'], ['ज','J'], ['झ','JH'], ['ञ','N'],
  ['ट','T'], ['ठ','TH'], ['ड','D'], ['ढ','DH'], ['ण','N'],
  ['त','T'], ['थ','TH'], ['द','D'], ['ध','DH'], ['न','N'],
  ['प','P'], ['फ','PH'], ['ब','B'], ['भ','BH'], ['म','M'],
  ['य','Y'], ['र','R'], ['ल','L'], ['व','W'],
  ['श','SH'], ['ष','SH'], ['स','S'], ['ह','H'], ['ळ','L']
];

// Vowel letters (independent)
const vowelPairs = [
  ['अ','A'], ['आ','AA'], ['इ','I'], ['ई','EE'], ['उ','U'], ['ऊ','OO'],
  ['ए','E'], ['ऐ','AI'], ['ओ','O'], ['औ','AU'], ['ऋ','RI']
];

// Matra signs (dependent vowels) — note these map to strings without leading marker
const matraPairs = [
  ['ा','AA'], ['ि','I'], ['ी','EE'], ['ु','U'], ['ू','OO'],
  ['े','E'], ['ै','AI'], ['ो','O'], ['ौ','AU'], ['ृ','RI']
];

// Visarga
const visargaPair = ['ः', 'H'];

// Additional punctuation conversions
const punctuationPairs = [
  ['\u0964', '.'], // danda -> period
  ['\u0965', '']   // double danda -> drop
];

function cyrlat() {
  // Read input
  car = document.transcription.text1.value || '';

  // Normalize to NFD to ensure diacritics are separate
  car = car.normalize('NFD');

  // 1) Realize first schwa in each Devanagari word by inserting MARK
  car = realizeFirstValidSchwa(car);

  // 2) Protect Latin-script words (and numbers) with placeholders
  const latinWords = {};
  let idx = 0;
  car = car.replace(/[A-Za-z0-9]+/g, function(m){
    const key = `__p${idx}__`;
    latinWords[key] = m;
    idx++;
    return key;
  });

  // 3) Nasal handling (including nukta forms)
  // velars (k-series) -> nasal N
  car = car.replace(/(ं|ँ)(क|ख|ग|घ|ङ|क़|ख़|ग़)/g, ZWSP + 'N$2');
  // dentals/coronals -> N
  car = car.replace(/(ं|ँ)(त|थ|द|ध|न|ट|ठ|ड|ढ|ण)/g, ZWSP + 'N$2');
  // labials -> M
  car = car.replace(/(ं|ँ)(प|फ|ब|भ|व|फ़)/g, ZWSP + 'M$2');
  // fallback nasal -> N (if not followed by a matra immediately)
  car = car.replace(/(ं|ँ)(?![\u093E-\u094C])/g, ZWSP + 'N');

  // 4) Remove ZWNJ only when it's immediately before a halant or matra (protect consonant clusters)
  car = car.replace(new RegExp(reEscape(ZWNJ) + '(?=' + '[' + reEscape(MATRAS) + reEscape(HALANT) + '])', 'g'), '');

  // 5) Transliterate: perform mapping pairs in deterministic order
  // First handle multi-character sequences (like ज्ञ), nukta forms, then single characters.
  function replaceAllPairs(text, pairs) {
    for (const [dev, lat] of pairs) {
      const devEsc = reEscape(dev);
      // two-phase replacement to preserve MARK if present:
      //  - If dev is followed by MARK, keep MARK in output (so schwa realization remains)
      //  - If dev followed by anything else, just replace dev
      text = text.replace(new RegExp(devEsc + reEscape(MARK), 'g'), lat + MARK);
      text = text.replace(new RegExp(devEsc, 'g'), lat);
    }
    return text;
  }

  // apply nukta & consonant/vowel maps
  car = replaceAllPairs(car, mappingPairs);
  car = replaceAllPairs(car, vowelPairs);
  car = replaceAllPairs(car, matraPairs);

  // visarga
  car = car.replace(new RegExp(reEscape(visargaPair[0]), 'g'), visargaPair[1]);

  // punctuation
  for (const [dev, repl] of punctuationPairs) {
    car = car.replace(new RegExp(reEscape(dev), 'g'), repl);
  }

  // 6) Now replace MARK with realized schwa letter 'A'
  car = car.replace(new RegExp(reEscape(MARK), 'g'), REALIZED_SCHWA);

  // 7) Remove remaining halants (virama) which should not appear in Latin output
  car = car.replace(new RegExp(reEscape(HALANT), 'g'), '');

  // 8) Remove any stray ZWNJ/ZWSP that may remain
  car = car.replace(new RegExp(reEscape(ZWNJ), 'g'), '');
  car = car.replace(new RegExp(reEscape(ZWSP), 'g'), '');

  // 9) Normalize back to NFC
  car = car.normalize('NFC');

  // 10) Lowercase Latin sequences but preserve placeholders like __p0__
  // Lowercase any run of Latin letters/digits while skipping placeholders
  car = car.replace(/__p\d+__/g, function(ph){ return ph; }); // ensure placeholders intact
  car = car.replace(/[A-Za-z][A-Za-z0-9'"\-() ,;]*/g, function(m){
    // If it is a placeholder, keep as-is
    if (/^__p\d+__$/.test(m)) return m;
    return m.toLowerCase();
  });

  // 11) Restore Latin placeholders
  for (let k in latinWords) {
    car = car.replace(new RegExp(reEscape(k), 'g'), latinWords[k]);
  }

  // Output
  document.transcription.text2.value = car;
}

// Modern copy functions (navigator.clipboard) with fallback
function copy1() {
  const text = document.transcription.text1.value || '';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(()=> { fallbackCopy(text); });
  } else {
    fallbackCopy(text);
  }
}
function copy2() {
  const text = document.transcription.text2.value || '';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(()=> { fallbackCopy(text); });
  } else {
    fallbackCopy(text);
  }
}
function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch (e) {
    console.warn('Copy failed', e);
  }
}
