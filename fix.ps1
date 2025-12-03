$scriptBlock = @'
<script>
// Sync scroll positions of both textareas
function syncScroll(e) {
    const t1 = document.getElementsByName("text1")[0];
    const t2 = document.getElementsByName("text2")[0];

    const source = e.target;

    // Scroll percentage of source
    const percent = source.scrollTop / (source.scrollHeight - source.clientHeight);

    // Apply to other textarea
    [t1, t2].forEach(t => {
        if (t !== source) {
            t.scrollTop = percent * (t.scrollHeight - t.clientHeight);
        }
    });
}

window.addEventListener("DOMContentLoaded", function() {
    const t1 = document.getElementsByName("text1")[0];
    const t2 = document.getElementsByName("text2")[0];

    t1.addEventListener("scroll", syncScroll);
    t2.addEventListener("scroll", syncScroll);
});
</script>
'@

# Tüm .htm/.html dosyaları
Get-ChildItem -Recurse -Include *.htm, *.html | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw

    # 1) onKeyUp → style="resize: none;" onKeyUp"
    $content = $content -replace 'onKeyUp', 'style="resize: none;" onKeyUp"'

    # 2) Çiftlenen style ögelerini teke indir
    $content = $content -replace '(style="resize:\s*none;")\s+(style="resize:\s*none;")', '$1'

    # 3) </table>...</form> arasına script ekle
    #    eski script varsa tamamen temizlenir
    $pattern = '</table>\s*(?:<script[\s\S]*?</script>)?\s*</form>'
    $replacement = "</table>`r`n$scriptBlock`r`n</form>"

    $content = [regex]::Replace($content, $pattern, $replacement, 'IgnoreCase')

    # Değişiklikleri kaydet
    Set-Content -Path $file -Value $content -Encoding UTF8
}
