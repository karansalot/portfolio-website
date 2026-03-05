import urllib.request
import json
import urllib.parse
import re

def get_image(query, filename):
    url = f"https://duckduckgo.com/?q={urllib.parse.quote(query)}&iax=images&ia=images"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        vqd_match = re.search(r'vqd=([\d-]+)', html)
        if vqd_match:
            vqd = vqd_match.group(1)
            search_url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json&vqd={vqd}"
            search_req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
            res = urllib.request.urlopen(search_req).read().decode('utf-8')
            data = json.loads(res)
            if data.get("results"):
                img_url = data["results"][0]["image"]
                print(f"Downloading {img_url} to {filename}")
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                img_data = urllib.request.urlopen(img_req, timeout=10).read()
                with open(filename, 'wb') as f:
                    f.write(img_data)
                return True
    except Exception as e:
        print(f"Failed for {query}: {e}")
    return False

get_image("NeuroNexus Hack Arizona Devpost", "public/images/neuronexus_1.jpg")
get_image("Regen Art DAO Devfolio ETHDenver", "public/images/regen_1.jpg")
get_image("Keyless AI ETHGlobal Showcase", "public/images/keyless_1.jpg")
