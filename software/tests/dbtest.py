from datetime import datetime
import time
import pymongo
from pymongo import MongoClient
from random import seed
from random import randint

seed(1)

cluster = MongoClient('mongodb+srv://realtonypark:qkrtmdgus@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority')
db = cluster["demo"]
collection = db["col"]

#print(cluster.list_database_names())

for i in range(10):
    latvalue = randint(1, 10)
    lngvalue = randint(1, 10)
    #print(latvalue, lngvalue)
    doc = {
        'name': 'Jinho Kim',
        'location': {
            'lat': latvalue,
            'lng': lngvalue
        },
        'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    print(latvalue, lngvalue, i)
    collection.insert_one(doc)
    time.sleep(15)
    collection.delete_one({
        'location':{
            'lat': latvalue,
            'lng': lngvalue
        }
    })
