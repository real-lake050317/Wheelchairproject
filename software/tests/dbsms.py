from datetime import datetime
import time
import pymongo
from pymongo import MongoClient
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
import keys

cluster = MongoClient('mongodb+srv://realtonypark:qkrtmdgus@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority')
db = cluster["test"]
collection = db["sms"]

while True:
    user = collection.find_one({'name':'bobby'})
    if 