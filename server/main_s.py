from flask import Flask, jsonify
from flask import request
import requests
import uuid     
app = Flask(__name__)   # Flask constructor 
  
# A decorator used to tell the application 
# which URL is associated function 
@app.route('/sharetik',methods=["GET"])       
def urlconv():
    url = request.args.get("url")
    headers = {
        'User-Agent': "Mozilla/5.0 (X11; Linux x86_64; rv:138.0) Gecko/20100101 Firefox/138.0"
    }
    vidurl = requests.get(url,headers=headers).url
    if "?" in vidurl:
        qindex = vidurl.index("?")
        vidurl = vidurl[0:qindex]
    vidid = vidurl[vidurl.rfind("/")+1:]
    transformedurl = f"https://www.tiktok.com/player/v1/{vidid}"
    response = jsonify(message=transformedurl)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response 
  
if __name__=='__main__': 
   app.run(debug=True) 