import serial
import time
ser = serial.Serial('COM번호', 9600)

while True:
	int command
	if ****CONDITION to move forward**** :
		command = "0"
		command = command.encode('utf-8')
		ser.write(command)
	elif ****CONDITION to go reverse****:
		command = "1"
		command = command.encode('utf-8')
		ser.write(command)
	elif ****CONDITION to turn left****:
		command = "2"
		command = command.encode('utf-8')
		ser.write(command)
	elif ****CONDITION to turn right****:
		command = "3"
		command = command.encode('utf-8')
		ser.write(command)
	time.sleep(0.7)