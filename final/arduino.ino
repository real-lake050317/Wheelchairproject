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
  Serial.begin(9600);

  analogWrite(enA, 10);
  analogWrite(enB, 10);
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
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
}

void goBackward() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
}

void turnLeft() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

void turnRight() {
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
}

void loop() {
  receivedChar = 'a';
  recvOneChar();
  if (newData == true) {
    if (receivedChar == 's') {
      Serial.println(receivedChar);
      goForward();
    }
    else if (receivedChar == 'b') {
      Serial.println(receivedChar);
      goBackward();
    }
    else if (receivedChar == 'l') {
      Serial.println(receivedChar);
      turnLeft();
    }
    else if (receivedChar == 'r') {
      Serial.println(receivedChar);
      turnRight();
    }
  }
  else {
    stopMoving();
  }
  delay(50);
}