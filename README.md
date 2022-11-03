# The Wheelchair project - The new body of the disabled
#### Korean Minjok Leadership Academy 2022-1 Integrated project member,<br><br> Jinho Kim, Seunghyeon Park, Hyunmin Lee, Donggeon Kim <br>
Since Oct. 2021

## What We Do
We make wheelchairs for disabled people.<br>
#### The Features are: <br>
+ Moving wheelchair via simple handsigns
+ Making GUI program that can be operated with eye-trackers
+ ###### The features of the GUI programs are:
  + Speaking via text-to-speech technology
  + Sending SMS
  + Map

## What we use

#### Languages We Use
+ Python
+ C++ (Arduino)
+ Javascript (jsx, es12)
+ Typescript (tsx)
+ HTML5
+ CSS3

#### Technologies We Use
+ Arduino Circuits
  + 500W/36V DC Motor
  + Motordrivers
+ Naver Cloud Service APIs:
  + SMS API
  + GPS API
+ Kakao APIs:
  + TTS API
+ Tkinter Python Library
+ Mediapipe Python Library
+ Folium Python Library
+ Javascript React
  + @googlemaps/react-wrapper 
+ Typescript React
+ Tailwind framework
+ Bootstrap framework
+ Next.js
+ Django framework
+ MongoDB
+ WebSocket
+ SQL
+ Tobii Eye Tracker
___

#### To help the disabled with our best, This repository is fully opened by open source.
#### Once this repository is released via opensource, all of the codes and schematics, etc., will be in reach of BSD 2-Clause "Simplified" License.

### How To Build
___
#### How to clone this repository
___
Open terminal in where you want to clone the repository <br>
<br>
<code> $ git clone https://github.com/real-lake050317/Wheelchairproject </code>


___
#### The computer vision program
___
Open terminal in where you want to clone the repository <br>
type: 
```
$ cd Wheelchairproject/hand_detection
  
$ ./final_serial.py
```
Then, your Python hand detection program is ready to go.
Next, you should compile the arduino program to make your hand detection program serial communicate with your wheelchair's motor.

Move to the top Wheelchairproject directory.
```
$ cd motorcontrol
  
$ ./pythonserial.ino
```
After all the process, your wheelchair is ready to be controlled only with your hand signs!
___
#### The eye tracked communication GUI program
___
Open terminal in where you cloned the repository <br>
type: 
```
$ touch listbox.txt

$ cd Wheelchairproject
  
$ ./gui.py
```
Callibrate your Tobii&trade; Eyetracker

https://help.tobii.com/hc/en-us/articles/213891645-Test-and-recalibrate

After all the process, you're ready to go!

___
### Published Competitions
* KCF (Korea Code Fair) from May 2022
