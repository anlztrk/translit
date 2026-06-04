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

		.replace(/(?<=[ouyœ])v/g, "β")
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
		.replace(/([eiy])\.([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβjz])/g, '$1$2.')
		.replace(/ɟ\.(?=[ɑɯoœu])/g, 'ɡ.j')
		.replace(/c\.(?=[ɑɯoœu])/g, 'k.j')
		.replace(/l\.(?=[ɑɯoœu])/g, 'ɫ.j')
		
		.replace(/[uy]j\.(?=[ɑeæɯioœuy])/g, 'uː.j')
		.replace(/(?<=[bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβjz])[uy]j(?=\.?[bʤʧdfɡɟʒkclɫmnŋɲɾsʃvβjz])/g, 'uː.iː')
		.replace(/[uy]j(?!\.?[ɑeæɯioœuy])/g, 'wiː')
		.replace(/jwiː/g, 'juː.iː')
		
		.replace(/ɑβ(?=\.?[bʤʧdfɡɟʒkclɫmnŋɲɾsʃvβjz])/g, 'OW')
		.replace(/[oœ]β(?=\.?[bʤʧdfɡɟʒkclɫmnŋɲɾsʃvβjz])/g, 'OH')
		.replace(/(?<=[ɑeæɯioœuy])β/g, 'v')
		
		.replace(/(?<=[bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])yː?ɾ/g, 'URE')
		.replace(/(?<=[bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])yː?([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz](?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz]))/g, 'U$1E')
		.replace(/([bʤʧfɡɟhʒkclɫmnŋɲpɾʃvβ])(y|yː)(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, '$1EW')
		.replace(/j[uy]ː?/g, 'YOO')
		
		.replace(/æɾ/g, 'AIR')
		.replace(/æ/g, 'A')
		.replace(/ɑːɾ/g, 'AR')
		.replace(/ɑː/g, 'AH')
		.replace(/eɾ/g, 'ERR')
		.replace(/e(?=[bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'E')
		.replace(/(?<=[bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβjz])e[jː]?([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz](?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz]))/g, 'A$1E')
		.replace(/e[jː]?/g, 'AY')
		.replace(/iɾ/g, 'IRR')
		.replace(/i(?=[bʤʧdfɡɟʒkclɫmnŋɲpsʃtvβz])/g, 'I')
		.replace(/i[ːj]?|ɯ[ːj]/g, 'EE')
		.replace(/ɯːɾ/g, 'EER')
		.replace(/ɑjɾ/g, 'IRE')
		.replace(/(?<=j)ɑj([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'I$1E')
		.replace(/(?<=[bʤʧdfɡɟhʒkclɫmnŋɲpɾsʃtvβz])ɑj(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'YE')		
		.replace(/ɑj([bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'Y$1E')
		.replace(/(?<=j)ɑj/g, 'I')
		.replace(/ɑj/g, 'EYE')
		.replace(/[oœ]jɾ/g, 'OIR')
		.replace(/[oœ]j/g, 'OY')
		.replace(/œɾ/g, 'UR')
		.replace(/oː?ɾ/g, 'OR')
		.replace(/s[oœ]ː?(?=m)/g, 'SOH')
		.replace(/(?<=[dlɫmʃ])[oœ]ː?(?=[vβ])/g, 'OH')		
		.replace(/[oœ]ː?([bʤʧdfkclɫmpɾʃtvβz](?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz]))/g, 'O$1E')
		.replace(/[oœ]ː?ʤ/g, 'OJE')
		.replace(/[oœ]ː?n/g, 'OWN')
		.replace(/[oœ]ː?s(?![bʤʧdfɡɟʒkclɫmnŋɲpɾsʃtvβz])/g, 'OSS')
		.replace(/[oœ]ː?/g, 'OH')
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
