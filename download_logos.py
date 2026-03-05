import urllib.request

def download_img(url, filename):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        with urllib.request.urlopen(req) as response:
            with open(filename, 'wb') as f:
                f.write(response.read())
            print("Downloaded", filename)
    except Exception as e:
        print("Error", filename, e)

# Eller / UofA
download_img("https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/University_of_Arizona_logo.svg/1024px-University_of_Arizona_logo.svg.png", "public/images/ua_logo.png")

# DJSCE
download_img("https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/DJSCE_Logo.svg/1024px-DJSCE_Logo.svg.png", "public/images/dj_sanghvi_logo.png")

# Ryan International
download_img("https://upload.wikimedia.org/wikipedia/en/1/15/Ryan_International_Group_logo.png", "public/images/ryan_logo.png")

