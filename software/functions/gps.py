#-*-coding: utf-8-*-
#-*-coding: euc-kr-*-
# Geolocation API @ Naver
# Hyunmin Lee
# 21.11.21 v0.0.1
# https://api.ncloud-docs.com/docs/ai-application-service-geolocation-geolocation


import hashlib
import hmac
import base64
import requests
import time
import keys
import gkeys
import googlemaps
import json
from datetime import datetime


timestamp = str(int(time.time() * 1000))
ip_address="1.127.120.162"
url="https://geolocation.apigw.ntruss.com"
uri="/geolocation/v2/geoLocation"+"?ip="+ip_address+"&ext=t&responseFormatType=json"

def	make_signature():
	secret_key = bytes(keys.secret_key, 'UTF-8')
	access_key=keys.access_key
	message = "GET " + uri + "\n" + timestamp + "\n" + access_key
	message = bytes(message, 'UTF-8')
	signingKey = base64.b64encode(hmac.new(secret_key, message, digestmod=hashlib.sha256).digest())
	return signingKey

def main():
	headers = {'x-ncp-apigw-timestamp':timestamp,
		   'x-ncp-iam-access-key':keys.access_key,
		   'x-ncp-apigw-signature-v2':make_signature()
	  		  }

	send_url=url+uri
	response_send=requests.get(send_url,headers=headers)
	print(response_send.status_code)
	dict=json.loads(response_send.content.decode('utf-8'))
	latitude=dict['geoLocation']['lat']
	longtitude=dict['geoLocation']['long']
	print(reverseGeocoding(latitude,longtitude)[1]['formatted_address'])

def reverseGeocoding(latitude, longtitude):
   gmaps=googlemaps.Client(key=gkeys.API_key)
   reverse_geocode_result=gmaps.reverse_geocode((latitude, longtitude))
   return reverse_geocode_result


if __name__ == "__main__":
    main()