# Program documentation for wheelchair

## Before we start

You should have locally installed Python (3.5.1 ~ 3.9.5) in your device.

Python versions 3.10 or higher may NOT support some of the packages required to run our programs.

DO NOT USE beta versions of Python to run these programs.

## How to build

```
$ ../Wheelchairproject  cd build

$ ../Wheelchairproject/build  pip install -r requirements.txt

$ ../Wheelchairproject/build  cd src 

$ ../Wheelchairproject/build/src  python apisms.py

$ ../Wheelchairproject/build/src  python inc_fps_serial.py

```

requirements.txt contains python packages required and verified version of those.

Version specs will be constantly updated by the developers.


## Program specifications

### 1. apisms.py

* Package Requirements:
  * Pymongo
    * MongoClient
  * sys
  * os
  * hashlib
  * hmac
  * base64
  * time
  * json
  * requests
  * time
* File Requirements:
  * keys.py

##### About keys.py

**keys.py contains VERY sensitive API keys, secret keys, etc. needed to use Naver Cloud Platform APIs.**

keys.py behaves like .env files

keys.py must be saved only in local, and should not be uploaded in git repository or any online services.

Users should insert their own key values refering to example.key.py 

The developers of the project highly recommends the users to prevent keys.py to be uploaded in git repository using .gitignore file.

Users are solely responsible for careless file management.

.gitignore guide: [https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

### 2. inc_fps_serial.py

inc_fps_serial.py allows users to operate wheelchair with handsigns.

* Hardware requirements
  * Webcam installed appropriately, with resolution of 720p or higher.
  * Electric Circuits installed appropriately
    * Batteries that supplies approximatly 36V of voltage
    * BLDC motor supplying proper amount of power, 500W/36V recommended (about 14 amps)
    * 2 channel BLDC motor driver that can endure 36V or more voltage
    * Raspberry pie or other alternate mini computers that can run python programs, and arduino codes and control motors
    *
