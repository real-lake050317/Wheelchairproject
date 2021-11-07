char receivedChar;
boolean newData = false;
const int in1 = 11;
const int in1 = 10;
const int in1 = 9;
const int in1 = 8;
const int in1 = 7;

void setup() {
    Serial.begin(9600);
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
    pinMode(in5, OUTPUT);
}

void recvOneChar() {
    if (Serial.available() > 0) {
        receivedChar = Serial.read();
        newData = true;
    }
}

void showNewData() {
    if (newData == true) {
        Serial.print("This just in ... ");
        Serial.println(receivedChar);
        newData = false;
    }
}

void loop() {
    recvOneChar();
    if (newData == true){
      digitalWrite(in1, HIGH);
      digitalWrite(in1, HIGH);
    }
}
