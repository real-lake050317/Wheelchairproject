from datetime import datetime
import time
#import pymongo
#from pymongo import MongoClient
from random import seed
from random import randint
import sys
import os
import hashlib
import hmac
import base64
import requests
import time
import json
from dotenv import load_dotenv

load_dotenv()

dotenv_path = Path('../../web/GUI_renewal/backend/.env')
load_dotenv(dotenv_path=dotenv_path)

API_KEY = os.getenv('API_KEY')
access_key = os.getenv('access_key')
service_ID = os.getenv('service_ID')
secret_key = os.getenv('secret_key')
mynumber = os.getenv('mynumber')
service_key = os.getenv('service_key')
'''
cluster = MongoClient('mongodb+srv://realtonypark:qkrtmdgus@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority')
db = cluster["test"]
collection = db["sms"]
'''
def	make_signature(uri): #POSTS
	timestamp = str(int(float(time.time()) * 1000))
	secret_key = bytes(keys.secret_key, 'UTF-8')
	access_key=keys.access_key
	message = "POST " + uri + "\n" + timestamp + "\n" + access_key
	message = bytes(message, 'UTF-8')
	signingKey = base64.b64encode(hmac.new(secret_key, msg=message, digestmod=hashlib.sha256).digest()).decode()
	return signingKey

def smssend(message_to, message_content): #POST
	url = "https://sens.apigw.ntruss.com"
	uri="/sms/v2/services/" + keys.service_ID + "/messages"
	send_url=url+uri
	timestamp = str(int(time.time() * 1000))
	headers = {
        'Content-Type': 'application/json; charset=utf-8',
		'x-ncp-apigw-timestamp':timestamp,
		'x-ncp-iam-access-key':keys.access_key,
		'x-ncp-apigw-signature-v2':make_signature(uri)
	}
	body={
        "type":'sms',
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

#while True:
#    user = collection.find_one({'name':'bobby'})
smssend("01099666503","ㅎㅇ")   