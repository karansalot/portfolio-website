import urllib.request
import re

def download_ddg_html(query, filename):
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'src="([^"]+)"', html)
        for link in links:
            if "external-content" in link:
                print(f"Downloading {link} to {filename}")
                img_url = "https:" + link if link.startswith("//") else link
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                img_data = urllib.request.urlopen(img_req, timeout=10).read()
                with open(filename, 'wb') as f:
                    f.write(img_data)
                return True
    except Exception as e:
        print(f"Failed for {query}: {e}")
    return False

download_ddg_html("PACE IIT Medical logo png", "public/images/pace_logo.png")
download_ddg_html("Center for the Philosophy of freedom University of Arizona logo png", "public/images/freedom_center_logo.png")
download_ddg_html("MHHC enterprises logo png", "public/images/mhhc_logo.png")
download_ddg_html("djs codestars logo png", "public/images/dj_codestars_logo.png")
download_ddg_html("djs beats logo png", "public/images/djs_beats_logo.png")
download_ddg_html("Happy Hunters travel logo png", "public/images/happy_hunters_logo.png")
download_ddg_html("Grace Hopper Celebration 2025 logo png", "public/images/grace_hopper_logo.png")
download_ddg_html("Cambridge School logo png", "public/images/cambridge_logo.png")

