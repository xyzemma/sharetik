import requests
inputurl = input("URL: ")
def convurl(url):
    headers = {
        'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:138.0) Gecko/20100101 Firefox/138.0"
    }
    vidurl = requests.get(inputurl,headers=headers).url
    if "?" in vidurl:
        qindex = vidurl.index("?")
        vidurl = vidurl[0:qindex]
    vidid = vidurl[vidurl.rfind("/")+1:]
    transformedurl = f"https://www.tiktok.com/player/v1/{vidid}"
    print(transformedurl)