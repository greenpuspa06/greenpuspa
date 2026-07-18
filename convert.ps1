Add-Type -AssemblyName System.IO.Compression.FileSystem

function Extract-DocxText {
    param($DocxPath, $OutPath)
    $zip = [System.IO.Compression.ZipFile]::OpenRead($DocxPath)
    $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
    if ($entry) {
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $xmlContent = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        
        $xml = [xml]$xmlContent
        $ns = new-object Xml.XmlNamespaceManager $xml.NameTable
        $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
        
        $nodes = $xml.SelectNodes("//w:p", $ns)
        $paragraphs = @()
        foreach ($p in $nodes) {
            $tNodes = $p.SelectNodes(".//w:t", $ns)
            $pText = ($tNodes | ForEach-Object { $_.InnerText }) -join ''
            if ($pText) {
                $paragraphs += $pText
            }
        }
        $paragraphs -join "`n" | Out-File -FilePath $OutPath -Encoding utf8
    }
    $zip.Dispose()
}

Extract-DocxText "$PWD\AGENT.md.docx" "$PWD\AGENT.md"
Extract-DocxText "$PWD\Docs\GREEN_PUSPA_KNOWLEDGE_BASE.md.docx" "$PWD\GREEN_PUSPA_KNOWLEDGE_BASE.md"
