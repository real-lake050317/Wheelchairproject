# TTS api using Kakao API
# Hyunmin Lee
# 21.10.26 v0.0.1

import requests
import keys

def tts(predata):
        url="https://kakaoi-newtone-openapi.kakao.com/v1/synthesize"
        key=keys.REST_API_key
        headers={
                'Content-Type':'application/xml',
                'Authorization':'KakaoAK '+key
                }
        data="<speak>"+predata+"</speak>"
        data=data.encode('utf-8').decode('latin1')
        res=requests.post(url,headers=headers,data=data)
        f=open('temp.wav', 'wb')
        f.write(res.content)
        f.close()