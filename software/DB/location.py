import pymongo
from pymongo import MongoClient

cluster = MongoClient('mongodb+srv://realtonypark:qkrtmdgus@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority')
db = cluster["test"]
collection = db["users"]

#post1 = {"lat":50.34, "lang":23.65, "time":"30:40", "date":"2022/05/20"}
#rem = post1
#post2 = { "$set": {"lat":10.10, "lang":20.20, "time":"30:40", "date": "2022/05/19"} }

#collection.update_one(post1, post2)
post = {
    "_id":"0", 
    "location" :{
        "lat":30.85, 
        "lang":23.65, 
    },
    "time":"30:40", 
    "date":"2022/05/20"
}
collection.insert_one(post)