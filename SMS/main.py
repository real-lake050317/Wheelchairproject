# SMS API using Naver Opencloud
# Hyunmin Lee
# 21.10.26 v0.0.1

import sys
import os
import hashlib
import hmac
import base64
import requests
import time
import json
import keys

# https://api.ncloud-docs.com/docs/ko/ai-application-service-sens-smsv2#api-header

def	make_signature(uri): #POST
	timestamp = str(int(float(time.time()) * 1000))
	secret_key = bytes(keys.secret_key, 'UTF-8')
	access_key=keys.access_key
	message = "POST " + uri + "\n" + timestamp + "\n" + access_key
	message = bytes(message, 'UTF-8')
	signingKey = base64.b64encode(hmac.new(secret_key, msg=message, digestmod=hashlib.sha256).digest()).decode()
	return signingKey

def send(): #POST
	message_type=input("Message type-sms/lms/mms ?")
	message_to = input("to whom?")
	message_content=input("enter message content")
	url = "https://sens.apigw.ntruss.com"
	uri="/sms/v2/services/" + keys.service_ID + "/messages"
	send_url=url+uri
	timestamp = str(int(time.time() * 1000))
	headers = {'Content-ssage_to=Type': 'application/json; charset=utf-8',
		   'x-ncp-apigw-timestamp':timestamp,
		   'x-ncp-iam-access-key':keys.access_key,
		   'x-ncp-apigw-signature-v2':make_signature(uri)
		  	  }
	body={
    "type":message_type,
    "from":keys.mynumber,
	"content":"연락 바랍니다",
    "messages":[
        {
            "to":message_to,
			"content":message_content
        }
    ]
	}
	body=json.dumps(body)
	response_send=requests.post(send_url,headers=headers,data=body)
	print(response_send.text)
send()