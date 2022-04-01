import serial
import time
ser = serial.Serial('3', 9600)

while True:
    command = input()
    serialwrite = "10"
    if (command == "0"):
        serialwrite = "0"
        serialwrite = serialwrite.encode('utf-8')
        ser.write(command)
    elif (command == "1"):
        serialwrite = "1"
        serialwrite = serialwrite.encode('utf-8')
        ser.write(command)
    elif (command == "2"):
        serialwrite = "2"
        serialwrite = serialwrite.encode('utf-8')
        ser.write(command)
    elif (command == "3"):
        serialwrite = "3"
        serialwrite = serialwrite.encode('utf-8')
        ser.write(command)