function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(?<=[BbCcÇçDdFfGgHhJjKkLlMmNnPpRrSsŞşTtVvYyZz])Ğ/g, "G")
		.replace(/(?<=[BbCcÇçDdFfGgHhJjKkLlMmNnPpRrSsŞşTtVvYyZz])ğ/g, "g")

		// 1. VCCCV → VCC.CV
		.replace(
			/([AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])([BbCcÇçDdFfGgĞğHhJjKkLlMmNnPpRrSsŞşTtVvYyZz]{2})(?=[BbCcÇçDdFfGgĞğHhJjKkLlMmNnPpRrSsŞşTtVvYyZz][AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])/g,
			"$1$2."
		)

		// 2. VCCV → VC.CV
		.replace(
			/([AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])([BbCcÇçDdFfGgĞğHhJjKkLlMmNnPpRrSsŞşTtVvYyZz])(?=[BbCcÇçDdFfGgĞğHhJjKkLlMmNnPpRrSsŞşTtVvYyZz][AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])/g,
			"$1$2."
		)

		// 3. VCV → V.CV
		.replace(
			/([AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])(?=[BbCcÇçDdFfGgĞğHhJjKkLlMmNnPpRrSsŞşTtVvYyZz][AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])/g,
			"$1."
		)

		// 4. VV → V.V
		.replace(
			/([AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])(?=[AaÂâEeÊêIıİiÎîOoÖöUuÛûÜü])/g,
			"$1."
		)

		.replace(/A/g, "a")
		.replace(/B/g, "b")
		.replace(/C|c/g, "ʤ")
		.replace(/Ç|ç/g, "ʧ")
		.replace(/D/g, "d")
		.replace(/E/g, "e")
		.replace(/Ê|ê/g, "eː")
		.replace(/F/g, "f")
		.replace(/G|g/g, "ɡ")
		.replace(/Ğ|ğ/g, "ɰ")
		.replace(/H/g, "h")
		.replace(/I|ı/g, "ɯ")
		.replace(/İ/g, "i")
		.replace(/Î|î/g, "iː")
		.replace(/J|j/g, "ʒ")
		.replace(/K/g, "k")
		.replace(/L|l/g, "ɫ")
		.replace(/M/g, "m")
		.replace(/N/g, "n")
		.replace(/O/g, "o")
		.replace(/Ö|ö/g, "œ")
		.replace(/P/g, "p")
		.replace(/R|r/g, "ɾ")
		.replace(/S/g, "s")
		.replace(/Ş|ş/g, "ʃ")
		.replace(/T/g, "t")
		.replace(/U/g, "u")
		.replace(/Y|y/g, "j")
		.replace(/Ü|ü/g, "y")
		.replace(/V/g, "v")
		.replace(/Z/g, "z")

		.replace(/(?<!aâoûuɯeêiîyœ)([bʤʧdfɡhʒkɫmnpɾsʃtvjz])([bʤʧdfɡhʒkɫmnpɾsʃtvjz])(?=[aâoûuɯeêiîyœ])/g, "$1ɯ.$2")

		.replace(/[Ââ]/g, "ʲa")
		.replace(/[Ûû]/g, "ʲu")

		.replace(/eɰ/g, "eĵ")
		.replace(/ĵ(?=[bʤʧdfɡhʒkɫmnpɾsʃtvjz])/g, "ː")
		.replace(/ĵ/g, "j")
		.replace(/(?<=[aiouyœɯ])ɰ/g, "ː")
		.replace(/a\.i/g, "aː.i")
		.replace(/a\.ɰɯ/g, "a.ɰa")
		.replace(/ɰ/g, "")

		.replace(/(?<=[ouyœ])v/g, "$1β")
		.replace(/v(o|u|y|œ)/g, "β$1")
		.replace(/v(?=[ouyœ])/g, "β")

		.replace(/(?<=[eiœy][bʤʧdfɡɟːhʒkcɫlmnpɾsʃtvβjz]?)ɡ/g, "ɟ")
		.replace(/(?<=[eiœy][bʤʧdfɡɟːhʒkcɫlmnpɾsʃtvβjz]?)k/g, "c")
		.replace(/(?<=[eiœy][bʤʧdfɡɟːhʒkcɫlmnpɾsʃtvβjz]?)ɫ/g, "l")
		.replace(/ɡ(?=[eiœyʲ])/g, "ɟ")
		.replace(/k(?=[eiœyʲ])/g, "c")
		.replace(/ɫ(?=[eiœyʲ])/g, "l")
		.replace(/(?<=[ɟcl])ʲ/g, "")

		.replace(/ʲ(?=[au][bʤʧdfɡɟːhʒkcɫlmnpɾsʃtvβjz])/g, "")
		.replace(/ʲ([au])/g, "$1ː")

		.replace(/n(?=[\.]?[ɡk])/g, "ŋ")
        .replace(/n(?=[\.]?[ɟc])/g, "ɲ")

		.replace(/\.mez/g, ".mæz")
		.replace(/e(?=ː?[ɾlmn])/g, "æ")
		.replace(/æ(?=ɲ\.?[cɟ])/g, "e")

		.replace(/a/g, "ɑ")

		.replace(/(?<=[ɑeæɯioœuy])ː?h/g, 'ː')
		.replace(/([ei])\.([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβjz])/g, '$1$2\.')
		.replace(/ɟ\.([ɑɯoœuy])/g, 'ɡ.j$1')
		.replace(/c\.([ɑɯoœuy])/g, 'k.j$1')
		.replace(/l\.([ɑɯoœuy])/g, 'ɫ.j$1')
		.replace(/[uy]j\.([ɑeæɯioœuy])/g, "uː\.j$1")
		.replace(/([bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβjz])[uy]j(\.)?([bʤʧdfɡɟʒkclɫmnŋɲɾsʃvβjz])/g, '$1uː.iː$2$3')
		.replace(/[uy]j/g, 'wiː')
		.replace(/jwiː(\.)?([ɑɯoœuy])/g, 'juː$1j$2')
		.replace(/jwiː/g, 'juː.iː')
		.replace(/ɑβ(\.)?([bʤʧdfɡɟʒkclɫmnŋɲɾsʃvβjz])/g, 'OW$1$2')
		.replace(/[oœ]β(\.)?([bʤʧdfɡɟʒkclɫmnŋɲɾsʃvβjz])/g, 'OH$1$2')
		.replace(/([ɑeæɯioœuy])β/g, '$1v')
		
		.replace(/([bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])(yɾ|yːɾ)/g, '$1URE')
		.replace(/(juɾ|juːɾ|jyɾ|jyːɾ)/g, 'YOOR')
		.replace(/([bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])(y|yː)([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1U$3E')
		.replace(/([bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])(y|yː)/g, '$1EW')
		.replace(/(juː|ju|jyː|jy)/g, 'YOO')
		.replace(/æɾ/g, 'AIR')
		.replace(/æ/g, 'A')
		.replace(/ɑːɾ/g, 'AR')
		.replace(/ɑː/g, 'AH')
		.replace(/eɾ/g, 'ERR')
		.replace(/e([bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'E$1')
		.replace(/([bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβjz])(ej|eː|e)([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1A$3E')
		.replace(/(ej|eː|e)/g, 'AY')
		.replace(/iɾ/g, 'IRR')
		.replace(/i([bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'I$1')
		.replace(/(iː|ij|ɯj|ɯː|i)/g, 'EE')
		.replace(/ɯːɾ/g, 'EER')
		.replace(/ɑjɾ/g, 'IRE')
		.replace(/jɑj([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'jI$1E')
		.replace(/([bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβz])ɑj([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1Y$2E')
		.replace(/([bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβz])ɑj/g, '$1YE')
		.replace(/jɑj/g, 'jI')
		.replace(/ɑj/g, 'EYE')
		.replace(/[oœ]jɾ/g, 'OIR')
		.replace(/[oœ]j/g, 'OY')
		.replace(/œɾ/g, 'UR')
		.replace(/oːɾ|oɾ/g, 'OR')
		.replace(/s(?:oː|o|œː|œ)m/g, 'SOHm')
		.replace(/([dlɫmʃ])(?:oː|o|œː|œ)([vβ])/g, '$1OH$2')
		.replace(/([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])(?:oː|o|œː|œ)([bʧdfkclɫmpɾʃtvβz])(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1O$2E')
		.replace(/(?:oː|o|œː|œ)([bʧdfkclɫmpɾʃtvβz])(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'O$1E')
		.replace(/(?:oː|o|œː|œ)ʤ/g, 'OJE')
		.replace(/(?:oː|o|œː|œ)n/g, 'OWN')
		.replace(/(?:oː|o|œː|œ)s/g, 'OSS')
		.replace(/(?:oː|o|œː|œ)/g, 'OH')
		.replace(/(?<![bʤʧdfɡhɟʒkclɫmnŋɲpɾsʃtvβjz])ɑɾ(?![bʤʧdfɡhɟʒkclɫmnŋɲpɾsʃtvβjz])/g, 'ARE')
		.replace(/ɑɾ/g, 'AR')
		.replace(/([bʤʧdfɡhɟʒlɫmnŋɲpɾsʃtvβjz])ɑ([flɫstz])([bʤdfɡɟkcmnŋɲpɾstvβjz])/g, '$1U$2$3')
		.replace(/[kc]ɑ([flɫstz])([bʤdfɡɟkcmnŋɲpɾstvβjz])/g, 'CU$1$2')
		//.replace(/\.([bʤʧdfɡhɟʒlɫmnŋɲpɾsʃtvβjz])ɑ([flɫmnstz])(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '.$1U$2$2')
		.replace(/\.[kc]ɑ([flɫmnstz])(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '.CU$1$1')
		.replace(/([bʤʧdfɡhɟʒlɫmnŋɲpɾsʃtvβjz])ɑʤ/g, '$1UDGE')
		.replace(/[kc]ɑʤ/g, 'CUDGE')
		.replace(/([bʤʧdfɡhɟʒlɫmnŋɲpɾsʃtvβjz])ɑ[kc]/g, '$1UCK')
		.replace(/([kc])ɑ[kc]/g, 'CUCK')
		.replace(/ɑ[kc]/g, 'AHK')
		.replace(/([ʤʧlɫmvβjz])ɑn(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1UNN')
		.replace(/[kc]ɑn(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'CUNN')
		.replace(/tɑn/g, 'TAHN')
		.replace(/([bʤʧdɡhɟʒlɫmnŋɲɾsʃtvβjz])ɑ[lɫ](?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1ULL')
		.replace(/([bp])ɑ[lɫ]/g, '$1AHL')
		.replace(/[kc]ɑ[lɫ](?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'CULL')
		.replace(/[kc]ɑ[lɫ]/g, 'CUL')
		.replace(/([ʤdflɫnpʃtvβz])ɑm(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1UMM')
		.replace(/[kc]ɑm/g, 'CUM')
		.replace(/([bʤʧdfɡhɟʒlɫmnŋɲpɾsʃtvβjz])ɑ([bʤdfɡɟkcmnŋɲpɾstvβz])/g, '$1U$2')
		.replace(/[kc]ɑ([bʤdfɡɟkcmnŋɲpɾstvβz])/g, 'CU$1')
		.replace(/ɑ([mnps])([bʤʧdfɡɟʒkclɫmnŋɲpɾstʃvβz])/g, 'AH$1$2')
		.replace(/ɑ([mnps])/g, 'U$1')
		.replace(/(?<![bʤʧdfɡhɟʒlɫmnŋɲpɾsʃtvβjz])ɑ([bʤʧdfɡɟʒkclɫmnŋɲpɾstʃvβz])/g, 'AH$1')
		.replace(/(uː|u|yː|y)/g, 'OO')
		.replace(/ɑ/g, 'A')
		.replace(/ɯ/g, 'Ə')
		.replace(/([AEIOUYaeuioy])ʤE/g, '$1GE')
		.replace(/([AEIOUYaeuioy])ʤ/g, '$1DGE')
		.replace(/ʤ/g, 'J')
		.replace(/([AEIOUYaeuioy])ʧE/g, '$1CHE')
		.replace(/([AEIOUYaeuioy])ʧ/g, '$1TCH')
		.replace(/ʧ/g, 'CH')
		.replace(/[ɡɟ]([EIei])/g, 'GH$1')
		.replace(/[ɡɟ]/g, 'G')
		.replace(/ʒ/g, 'ZH')
		.replace(/[lɫ]/g, 'L')
		.replace(/(ŋk|ɲc)/g, 'NK')
		.replace(/[kc]/g, 'K')
		.replace(/ŋɡ/g, 'NG')
		.replace(/[ŋɲ]/g, 'NG')
		.replace(/ɾ/g, 'R')
		.replace(/ʃ/g, 'SH')
		.replace(/hw/g, 'WH')
		.replace(/β/g, 'W')
		.replace(/j/g, 'Y')
		//.replace(/ƏR/g, 'ER')
		.replace(/Ə([CGJKLSZbdfmnpstvz])/g, 'UH$1')
		.replace(/Ə/g, 'UH')
		.replace(/\u002e/g, '\u002d')
		.toLowerCase();
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
