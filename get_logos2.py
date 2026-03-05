import urllib.request
import urllib.parse
import re
import json

def get_image(query, filename):
    url = f"https://duckduckgo.com/?q={urllib.parse.quote(query)}&iax=images&ia=images"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        # First we need the vqd token
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

get_image("Center for the Philosophy of freedom arizona logo", "public/images/freedom_center_logo.png")
get_image("MHHC enterprises logo", "public/images/mhhc_logo.png")
get_image("djs codestars logo", "public/images/dj_codestars_logo.png")
get_image("djs beats logo", "public/images/djs_beats_logo.png")
get_image("Happy Hunters travel logo", "public/images/happy_hunters_logo.png")
get_image("Grace Hopper Celebration 2025 logo", "public/images/grace_hopper_logo.png")
get_image("PACE IIT Medical logo", "public/images/pace_logo.png")
