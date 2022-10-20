char receivedChar;
boolean newData = false;

// Motor A connections
int enA = 11;
int in1 = 10;
int in2 = 9;
// Motor B connections
int enB = 6;
int in3 = 5;
int in4 = 4;

void recvOneChar() { //새로운 Serial 데이터를 수신하기 위한 함수
  newData = false;
  if (Serial.available() > 0) { //Serial.available() 함수는 boolean의 형태로 0, 1로 반환됨
    receivedChar = Serial.read();
    newData = true;
  }
}

void setup() {
  Serial.begin(19200);

  analogWrite(enA, 120);
  analogWrite(enB, 120);
  pinMode(enA, OUTPUT);
  pinMode(enB, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);

  // Turn off motors - Initial state
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

void stopMoving() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

void goForward() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
}

void goBackward() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
}

void turnLeft() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
}

void turnRight() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
}

void loop() {
  receivedChar = 'a';
  recvOneChar();
  if (newData == true) {
    if (receivedChar == 's') {
      goForward();
    }
    else if (receivedChar == 'b') {
      goBackward();
    }
    else if (receivedChar == 'l') {
      turnLeft();
    }
    else if (receivedChar == 'r') {
      turnRight();
    }
  }
  else {
    stopMoving();
  }
}