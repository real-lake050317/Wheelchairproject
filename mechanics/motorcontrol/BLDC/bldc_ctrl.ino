#include <Servo.h>

Servo motor1, motor2; //motor1: 왼쪽 모터, motor2: 오른쪽 모터

// 왼쪽모터는 정방향 회전이 전진
// 오른쪽 모터는 역방향 회전이 전진 -> + - 극을 반대로 연결해 방향을 반대로 제어할 수 있음

int speed1 = 0, speed2 = 0;
int pos1 = 0, pos2 = 0;
char receivedChar;
boolean newData = false;

void setup(){
    Serial.begin(9600);
    motor1.attach(10);
    motor2.attach(9);
}

void recvOneChar() {
    newData = false;
    if (Serial.available() > 0) {
        receivedChar = Serial.read();
        newData = true;
    }
}

/*\pos var이 63일때 돌기 시작함\*/

void runMotor1() {
    motor1.write(65);
}

void stopMotor1() {
    motor1.write(0);
}

void runMotor2() {
    motor2.write(65);
}

void stopMotor2() {
    motor2.write(0);
}

void goStraight() {
    runMotor1();
    runMotor2();
}

void goBackward() { //ESC Motors

}




void loop(){
    receivedChar = 'a';
    recvOneChar();

    if (newData) {
        if (receivedChar == 's'){

        }
        else if (receivedChar == 'b'){

        }
        else if (receivedChar == 'l'){

        }
        else if (receivedChar == 'r'){

        }
    }
}