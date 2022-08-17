import pymongo
from pymongo import MongoClient
import sys
import os
import hashlib
import hmac
import base64
import time
import json
import requests
import keys
import time

cluster = MongoClient('mongodb+srv://realtonypark:qkrtmdgus@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority')
db = cluster['test']
collection = db['sms']

def	make_signature(uri): #POSTS
	timestamp = str(int(float(time.time()) * 1000))
	secret_key = bytes(keys.secret_key, 'UTF-8')
	access_key=keys.access_key
	message = "POST " + uri + "\n" + timestamp + "\n" + access_key
	message = bytes(message, 'UTF-8')
	signingKey = base64.b64encode(hmac.new(secret_key, msg=message, digestmod=hashlib.sha256).digest()).decode()
	return signingKey

def smssend(message_to,message_content): #POST
	url = "https://sens.apigw.ntruss.com"
	uri="/sms/v2/services/" + keys.service_ID + "/messages"
	send_url=url+uri
	timestamp = str(int(time.time() * 1000))
	headers = {'Content-Type': 'application/json; charset=utf-8',
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

#smssend(doc['contact'],doc['message'])

smsdoc = collection.find_one()

while True:
    doc = collection.find_one()
    for x in collection.find():
        doc = x
    
    if smsdoc['message'] != doc['message']:
        smssend(doc['contact'], doc['message'])
        smsdoc = doc
        print(doc)
    
    time.sleep(15)	