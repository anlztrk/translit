Dil modülü bu:

local dilTablosu = require("Modül:Dil/veri")

--bu fonksiyon girilen bir yazıda birinci değeri bulup
--onu ikinci değer ile değiştirmeye yarar
local function bulvedeg(yazi, bir, iki)
	return mw.ustring.sub( mw.ustring.gsub(yazi, bir, iki), 1, -1 )
end

local function dilAdiGetir(frame)
	local args = frame and frame:getParent().args or nil
	
	local d = dilTablosu[args[1]]
	
	if d ~= nil then
		return dilTablosu[args[1]][1]
	else
		return ""
	end
end

local function dilGetir(dilKodu)
	local dil = dilTablosu[dilKodu] and dilKodu or bulvedeg( dilKodu, "%-.*", "" )
	return dilTablosu[dil] or error("Girilen dil kodu veritabanında bulunamadı. Lütfen Modül:Dil/veri'yi kontrol edin.")
end

--Dil adlarına ek geldiğinde bu ekleri Türkçe yazım kurallarına göre ayarla.
local function dilDuzenle(dil)
	-- Girilen dil parametresinin son kelimesi "dili" ile bitiyorsa onu belirt, çünkü dilden sonra gelecek ek buna göre ayarlanacaktır.
	local sonHece1 = mw.ustring.sub( dil, -4 )
	
	-- Girilen dil parametresinin son iki hecesini ayırt et, çünkü dilden sonra gelecek ek buna göre ayarlanacaktır.
	local sonHece2 = mw.ustring.sub( dil, -2 )
	
	-- Daha önceden son heceleri/kelimesi ayırt edilen dil adlarının sonrasına "de", "da", "nde", "nda" eklerini ekle.
	local ekliDil = ""
	
	-- Son iki harfi "si" ile biten (Örneğin: İskoç İngilizcesi) veya son kelimesi "dili" olan (Örneğin: İdo dili) dil adlarından sonra "nde" ekini ekle.
    if dil and sonHece1 == "dili" or  sonHece2 == "si" then
    	ekliDil = ekliDil .. dil .. "nin"
    	
	-- Son iki harfi "sı" ile (Örneğin: İsviçre Almancası) dil adlarından sonra "nda" ekini ekle.
    elseif dil and sonHece2 == "sı" then
    	ekliDil = ekliDil .. dil .. "nın" 
    
    -- Son iki harfi "ce" ile (Örneğin: İngilizce) veya "çe" ile biten (Örneğin: Türkçe) dil adlarından sonra "de" ekini ekle.
    elseif dil and sonHece2 == "ce" or sonHece2 == "çe" then
    	ekliDil = ekliDil .. dil .. "nin" 
    
    -- Son iki harfi "ca" ile (Örneğin: Almanca) veya "ça" ile biten (Örneğin: Başkça) dil adlarından sonra "da" ekini ekle.
    elseif dil and sonHece2 == "ca" or sonHece2 == "ça" then
    	ekliDil = ekliDil .. dil .. "nın" 
    end
    
    return ekliDil
end

--IPA yazılışları için kullanılan fonksiyon
local function IPA(frame)
	--parametre tanımlayıcı
	local args = frame:getParent().args
	
	--burada sonuçta çıktısını vereceğimiz satırı başlat
	local IPA = ""
	
	if args["başlık"] ~= nil then
		IPA = IPA .. "<small>" .. args["başlık"] .. "&nbsp;</small>"
	else
		--eğer ilk parametreye "-" ifadesi girilirse bir dil kodu varsayılmadığını algıla
		if args[1] == "-" then
		
		else
			--eğer yukarıdaki başlıklardan hiçbiri belirtilmemişse girilen dil kodunun adını çıkart
			IPA = IPA .. "<small>" .. dilGetir(args[1])[1] .. " telaffuz:&nbsp;</small>"
		end
	end
	
	--ikinci parametrede "[]" ifadeleri varsa bunları temizle, çünkü modül bunları otomatik ekliyor
	if mw.ustring.find(args[2], "^%[") then args[2] = string.sub( args[2], 2, -1 ) end
	if mw.ustring.find(args[2], "%]$") then args[2] = mw.ustring.sub( args[2], 1, -2 ) end
	
	local parAc = mw.ustring.find(args[2], "^%/") and "" or "["
	local parKapa = mw.ustring.find(args[2], "%/$") and "" or "]"
	
	--küçük yazılacak kısmın kapanış etiketini ekle
	--daha sonra da IPA okunuşu kısmını ekle
	IPA = IPA .. "<span title='IPA Söylenişi' class='IPA'>" .. (args["b"] == "yok" and "" or "[[Yardım:IPA|") 
			  .. parAc .. args[2] .. parKapa .. (args["b"] == "yok" and "" or "]]") .. "</span>"
	
	--eğer bir ses dosyası girilirse onu da en sona ekle
	if args.medya ~= nil then
		IPA = IPA .. "<small>&nbsp; ([[Dosya:Speaker Icon.svg|13px|link=|alt=]] [[:Media:" .. args.medya .. "|dinle]])</small>"
	end
	
	--son çıktı
	return IPA
end

local function dil(frame, moduleArgs)
	--parametre tanımlayıcı
	local args = frame and frame:getParent().args or nil
	
	--eğer farklı bir modülden çağırılıyorsa,
	--modül parametrelerini kullan
	if moduleArgs then
		args = moduleArgs
	end
	
	local yazi = args[2] or args['yazı'] or ""
	local romanizasyon = "romanizasyon"
	
	if args[1] == "rtl" or args[1] == "ltr" then
		if args[1] == "rtl" then
			args['yön'] = "rtl"
		elseif args[1] == "ltr" then
			args['yön'] = "ltr"
		end
		yazi = args[3] or args['yazı'] or ""
		args[1] = args[2]
	end
	
	--sonuçtaki çıktıyı başlat
	local dil = ""
	local dil_prm = args['dil_adı'] or args['da']
	
	--dilin adını tablodan kod yardımıyla bul ve o dilin sınıfında bir span oluştur
	if dil_prm ~= 'hayır' and dil_prm ~= 'h' and dil_prm ~='yok' then
		dil = dil .. "[[" .. dilGetir(args[1])[1] .. "]]:&nbsp;"
	end
	
	--eğer girilmiş bir yön varsa onu span'ın özelliklerine ekle
	--son olarak da yazıyı span'ın içerisine yerleştir
	dil = dil .. "<span class='lang-"..args[1].."' translate='no' lang='"..args[1].."' dir='"..(args['yön'] and args['yön'] or "ltr").."'>"
	.. yazi .. "</span>"
	
	--çeviri parametresi girildiyse çeviriyi yazıdan sonra ekle
	if mw.title.new(dilDuzenle(dilGetir(args[1])[1]).." romanizasyonu").exists then
		romanizasyon = dilDuzenle(dilGetir(args[1])[1]).." romanizasyonu" or romanizasyon
	end
	
	if args['çeviri'] then
		dil = dil .. ",&#x20;<small>[["..romanizasyon.."|romanize]]:&nbsp;<span class='lang-"..args[1].." transcription' translate='no' lang='"..args[1].."-Latn'>"
		..args['çeviri'].."</span></small>"
	end
	
	return dil
end

local function dilRomanizasyon(frame, moduleArgs)
	--parametre tanımlayıcı
	local args = frame and frame:getParent().args or nil
	
	--eğer farklı bir modülden çağırılıyorsa,
	--modül parametrelerini kullan
	if moduleArgs then
		args = moduleArgs
	end
	
	return '<span translate="no" lang="' .. args[1] .. '-Latn" style="font-style: normal;" title="'
		.. dilGetir(args[1])[1] .. ' harf çevirisi">' .. args[2] .. "</span>"
end

--yerel ad şablonunun fonksiyonu
local function yerelAd(frame)
	--parametre tanımlayıcı
	local args = frame:getParent().args
	
	--her şeyden önce hata çıkmasına karşın çıktıyı başlatalım
	local yerelAd = ""
	
	--eğer ikinci parametre girilmediyse modül hata vermesin, bunun yerine izleyici kategori eklesin
	if args[2] then
		yerelAd = yerelAd .. (args["italik"] and args[2] or "" .. args[2] .. "")
	else
		yerelAd = yerelAd .. "[[Kategori:Yerel adı girilmemiş yerel adı şablonu kullanan maddeler]]"
	end
	
	--eğer şablona dil kodu girilmediyse modül hatası değil de izleme kategorisi ekle
	if dilGetir(args[1])[1] then
		yerelAd = yerelAd .. "&#x20; <small>" .. (args["parantez"] and "" or "(")
					.. (args["bağ_yok"] and "" or "[[") .. dilGetir(args[1])[1] .. (args["bağ_yok"] and "" or "]]")
					.. (args["parantez"] and "" or ")") .. "</small>"
	else
		yerelAd = yerelAd .. "[[Kategori:Dil kodu girilmemiş yerel adı şablonu kullanan maddeler]]"
	end
	
	return yerelAd
end

return {
	IPA = IPA,
	dil = dil,
	dilAdiGetir = dilAdiGetir,
	yerelAd = yerelAd,
	dilRomanizasyon = dilRomanizasyon
}


Dil şablonu bu:
<includeonly>{{#invoke:Dil|dil}}</includeonly><noinclude>
{{Belgeleme}}
</noinclude>

Benim şablonum bu:

<includeonly>{{Dil
 | dil kodu={{{dil|{{{1|}}}}}}
 | yazı={{{yazı|}}}
 | çeviri=
 | dil_adı=yok
}}
</includeonly><noinclude>
{{Belgeleme}}
</noinclude>

Sadece kendi şablonumu düzenlemek istiyorum.
