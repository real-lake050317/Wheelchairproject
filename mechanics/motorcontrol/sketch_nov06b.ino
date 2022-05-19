char receivedChar; //Serial 데이터를 수신해서 저장하기 위한 변수
boolean newData = false; //새로운 Serial 데이터가 수신되었는지 확인하기 위한 변수
const int in1 = 8; //모터1(왼쪽 모터) 제어를 위한 + 핀
const int in2 = 7; //모터2(오른쪽 모터) 제어를 위한 - 핀
const int in3 = 9; //모터2(오른쪽 모터) 제어를 위한 + 핀
const int in4 = 6; //모터2(오른쪽 모터) 제어를 위한 - 핀
const int speed1 = 11; //PWM 핀을 통한 모터 속도 제어, 모터드라이버의 ENA 소켓과 연결
const int speed2 = 10; //PWM 핀을 통한 모터 속도 제어, 모터드라이버의 ENB 소켓과 연결

void setup() {
    Serial.begin(19200);
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
} //모터 제어용 핀들을 OUTPUT 핀으로 설정

void recvOneChar() { //새로운 Serial 데이터를 수신하기 위한 함수
    newData = false;
    if (Serial.available() > 0) { //Serial.available() 함수는 boolean의 형태로 0, 1로 반환됨
        receivedChar = Serial.read();
        newData = true;
    }
} 

void motor_one_forward(){
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
}

void motor_one_backward(){
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
}

void motor_one_stop(){
  digitalWrite(in1, HIGH);
  digitalWrite(in2, HIGH);
}

void motor_two_forward(){
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
}

void motor_two_backward(){
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
}

void motor_two_stop(){
  digitalWrite(in3, HIGH);
  digitalWrite(in4, HIGH);
}

/* //Deprecation Warning
void set_speed1(int speed){
  analogWrite(speed1, speed);
}

void set_speed2(int speed){
  analogWrite(speed2, speed);
}
*/
// 모터의 속도 조절을 위한 함수이나 현재 사용되지 않음.


void loop() {
  receivedChar = 'a';
  recvOneChar();
  if (newData == true){
    if (receivedChar == 's'){ //Straight, 직진을 하기 위한 Serial이 입력된 경우
      motor_one_forward();
      motor_two_forward();
      delay(10);
      motor_one_stop();
      motor_two_stop();
    }
    else if (receivedChar == 'b'){ //Backwards, 후진을 하기 위한 Serial이 입력된 경우
      motor_one_backward();
      motor_two_backward();
      delay(10);
      motor_one_stop();
      motor_two_stop();
    }
    else if (receivedChar == 'l'){ //Left, 왼쪽으로 회전을 하기 위한 Serial이 입력된 경우
      motor_one_backward();
      motor_two_forward();
      delay(10);
      motor_one_stop();
      motor_two_stop();
    }
    else if (receivedChar == 'r'){ //Right, 오른쪽으로 회전을 하기 위한 Serial이 입력된 경우
      motor_one_forward();
      motor_one_backward();
      delay(10);
      motor_one_stop();
      motor_two_stop();
    }
  }
}
