# TTS api using Kakao API
# Hyunmin Lee
# 21.10.26 v0.0.1

import os
import requests
import json
import wave
import keys

url="https://kakaoi-newtone-openapi.kakao.com/v1/synthesize"
key=keys.REST_API_key
headers={
        'Content-Type':'application/xml',
        'Authorization':'KakaoAK '+key
        }
predata=input("문장을 입력하시오")
data="<speak>"+predata+"</speak>"
data=data.encode('utf-8').decode('latin1')

res=requests.post(url,headers=headers,data=data)
f=open('temp.wav', 'wb')
f.write(res.content)
f.close()