char receivedChar;
boolean newData = false;
const int in1 = 11;
const int in2 = 10;
const int in3 = 9;
const int in4 = 6;
const int in5 = 5;

void setup() {
    Serial.begin(19200);
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
    pinMode(in5, OUTPUT);
}

void recvOneChar() {
    newData = false;
    if (Serial.available() > 0) {
        receivedChar = Serial.read();
        newData = true;
    }
}

void loop() {
    receivedChar = 'a';
    recvOneChar();
    if (newData == true){
      if (receivedChar == 's'){
        digitalWrite(in1, HIGH);
        delay(10);
        digitalWrite(in1, LOW);
      }
      else if (receivedChar == 'b'){
        digitalWrite(in2, HIGH);
        delay(10);
        digitalWrite(in2, LOW);
      }
      else if (receivedChar == 'l'){
        digitalWrite(in3, HIGH);
        delay(10);
        digitalWrite(in3, LOW);
      }
      else if (receivedChar == 'r'){
        digitalWrite(in4, HIGH);
        delay(10);
        digitalWrite(in4, LOW);
      }
    }
}
