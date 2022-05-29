from datetime import datetime
import time
import pymongo
from pymongo import MongoClient
import string
import pynmea2
import serial

cluster = MongoClient('mongodb+srv://<username>:<password>@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority')
db = cluster["demo"]
collection = db["col"]

while True:
    port="/dev/ttyAMA0"
    ser=serial.Serial(port, baudrate=9600, timeout=0.5)
    dataout = pynmea2.NMEAStreamReader()
    newdata=ser.readline()
    
    if newdata[0:6] == "$GPRMC":
    	newmsg=pynmea2.parse(newdata)
	    latvalue=newmsg.latitude
	    lngvalue=newmsg.longitude
    
    doc = {
        'name': 'Jinho Kim',
        'location': {
            'lat': latvalue,
            'lng': lngvalue
        },
        'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    
    collection.insert_one(doc)
    time.sleep(15)
    collection.delete_one({
        'location':{
            'lat': latvalue,
            'lng': lngvalue
        }
    })
