import pymongo

client = pymongo.MongoClient("mongodb+srv://realtonypark:qkrtmdgus@wheelchairproject.qpdsg.mongodb.net/?retryWrites=true&w=majority")
mydb = client["gps"]
mycol = mydb["gps"]

mydict = { "name": "John", "address": "Highway 37" }

x = mycol.insert_one(mydict)

