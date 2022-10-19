char receivedChar;
boolean newData = false;

// Motor A connections
int enA = 9;
int in1 = 8;
int in2 = 7;
// Motor B connections
int enB = 3;
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
  analogWrite(enA, 255);
  analogWrite(enB, 255);
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

void loop() {
  receivedChar = 'a';
  recvOneChar();
  /*
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  delay(1000);
  
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  delay(1000);
  
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  delay(1000);
  */
  if (newData == true) {
    
  }
}