import urllib.request
import urllib.parse
import re

def download_ddg_image(query, filename):
    try:
        url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # In duckduckgo html, image links might be somewhat visible, or we use a different approach.
        # Alternatively, use Wikipedia's API
    except Exception as e:
        print("Error:", e)

