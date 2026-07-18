import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text(docx_path, out_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            paragraphs = []
            for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
            
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(paragraphs))
            print(f"Successfully extracted {docx_path} to {out_path}")
    except Exception as e:
        print(f"Error reading {docx_path}: {e}")
        # Maybe it's just a text file renamed
        try:
            with open(docx_path, 'r', encoding='utf-8') as f:
                content = f.read()
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"File was plain text, copied to {out_path}")
        except Exception as e2:
            print(f"Also failed as plain text: {e2}")

extract_text('AGENT.md.docx', 'AGENT.md')
extract_text('Docs/GREEN_PUSPA_KNOWLEDGE_BASE.md.docx', 'GREEN_PUSPA_KNOWLEDGE_BASE.md')
