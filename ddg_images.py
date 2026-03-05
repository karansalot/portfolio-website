from urllib.request import Request, urlopen
from urllib.parse import quote, unquote
import re

def search(query):
    url = "https://html.duckduckgo.com/html/?q=" + quote(query)
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urlopen(req).read().decode('utf-8')
        links = re.findall(r'//external-content\.duckduckgo\.com/iu/\?u=([^&"]+)', html)
        print(f"Results for {query}:")
        for link in links[:3]:
            print(unquote(link))
    except Exception as e:
        print("Error:", e)

search("PACE IIT MEDICAL logo png")
search("Center for the Philosophy of Freedom University of Arizona logo png")
search("Ryan International School logo png")
search("University of Arizona logo png")
search("DJ Sanghvi College of Engineering logo png")
search("Cambridge School Mumbai logo png")
