import urllib.request
import re
import os

urls = {
    "neuronexus": "https://devpost.com/software/neuronexus",
    "regen_art": "https://devfolio.co/projects/regen-art-dao-1a93",
    "keyless_ai": "https://ethglobal.com/showcase/keyless-znz6x"
}

os.makedirs("public/images", exist_ok=True)

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Regex to find meta property="og:image" content="..."
        match = re.search(r'<meta[^>]*property=["\']og:image["\'][^>]*content=["\']([^"\']+)["\']', html)
        if not match:
             match = re.search(r'<meta[^>]*content=["\']([^"\']+)["\'][^>]*property=["\']og:image["\']', html)
        
        if match:
            img_url = match.group(1)
            print(f"Downloading {img_url} for {name}")
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(img_req).read()
            with open(f"public/images/{name}.jpg", "wb") as f:
                f.write(img_data)
        else:
            print(f"No og:image found for {name}")
    except Exception as e:
        print(f"Failed for {name}: {e}")
