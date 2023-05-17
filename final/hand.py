import cv2
import mediapipe as mp
import time
import datetime
from threading import Thread
import serial
ser = serial.Serial("/dev/cu.usbmodem2101", 9600)

class handDetector():
    def __init__(self, mode=False, maxHands=11, modelComplexity=1, detectionCon=0.5, trackCon=0.5):
        self.mode = mode
        self.maxHands = maxHands
        self.detectionCon = detectionCon
        self.trackCon = trackCon
        self.modelComplex = modelComplexity

        self.mpHands = mp.solutions.hands   
        self.hands = self.mpHands.Hands(self.mode, self.maxHands,self.modelComplex, self.detectionCon, self.trackCon)
        self.mpDraw = mp.solutions.drawing_utils

    def findHands(self, img, draw=True):
        imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.results = self.hands.process(imgRGB)
        # print(results.multi_hand_landmarks)

        if self.results.multi_hand_landmarks:
            for handLms in self.results.multi_hand_landmarks:
                if draw:
                    self.mpDraw.draw_landmarks(img, handLms, self.mpHands.HAND_CONNECTIONS)
        return img

    def findPosition(self, img, handNo=0, draw=True):
        lmList = []
        if self.results.multi_hand_landmarks:
            myHand = self.results.multi_hand_landmarks[handNo]
            for id, lm in enumerate(myHand.landmark):
                # print(id, lm)
                h, w, c = img.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                # print(id, cx, cy)
                lmList.append([id, cx, cy])
                if draw:
                    cv2.circle(img, (cx, cy), 7, (255, 0, 255), cv2.FILLED)

        return lmList


def main():
    #4는 엄지 끝, 8은 검지 끝, 12는 중지 끝...
    fingertips = [4, 8, 12, 16, 20]

    pTime = 0
    cTime = 0
    cap = cv2.VideoCapture(0)
    detector = handDetector()
    
    frames = []
    while True:
        success, img = cap.read()
        img = detector.findHands(img)
        lmList = detector.findPosition(img)
        if len(lmList) != 0:
            fingers = []

            # 엄지 손가락
            if lmList[fingertips[0]][1] > lmList[fingertips[0]-1][1]:
                fingers.append(1)
                # 펴져 있으면 리스트에 1 추가
            else:
                fingers.append(0)
                # 접혀 있으면 리스트에 0 추가

            # 나머지 손가락
            for id in range(1,5):
                if lmList[fingertips[id]][2] < lmList[fingertips[id]-2][2]:
                    fingers.append(1)
                    # 펴져 있으면 리스트에 1 추가
                else:
                    fingers.append(0)
                    # 접혀 있으면 리스트에 0 추가
            
            print(fingers)
            
            if fingers == [0,0,0,0,0]: 
                command = "n" # "stop"
                temp = command.encode("utf-8")
                ser.write(temp)

            elif fingers == [0,1,0,0,0]: 
                command = "s" # "go straight"
                temp = command.encode("utf-8")
                ser.write(temp) 

            elif fingers == [0,1,1,0,0]: 
                command = "b"#"go backward"
                temp = command.encode("utf-8")
                ser.write(temp)

            elif fingers == [1,0,0,0,0]: 
                command = "l" # "go left"
                temp = command.encode("utf-8")
                ser.write(temp)

            elif fingers == [0,0,0,0,1]: 
                command = "r" #" go right"
                temp = command.encode("utf-8")
                ser.write(temp)
            
        cTime = time.time()
        fps = 1 / (cTime - pTime)
        pTime = cTime
        
        frames.append(fps)
        
        cv2.imshow("Image", img)
        cv2.waitKey(1)


if __name__ == "__main__":
    main()
