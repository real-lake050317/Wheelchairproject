 char receivedChar;
boolean newData = false;
const int in1 = 11;
const int in2 = 10;
const int in3 = 9;
const int in4 = 6;

void setup() {
    Serial.begin(19200);
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
}

void recvOneChar() {
    newData = false;
    if (Serial.available() > 0) {
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

void loop() {
    receivedChar = 'a';
    recvOneChar();
    if (newData == true){
      if (receivedChar == 's'){
        motor_one_forward();
        motor_two_forward();
        delay(10);
        motor_one_stop();
        motor_two_stop();
      }
      else if (receivedChar == 'b'){
        motor_one_backward();
        motor_two_backward();
        delay(10);
        motor_one_stop();
        motor_two_stop();
      }
      else if (receivedChar == 'l'){
        motor_one_backward();
        motor_two_forward();
        delay(10);
        motor_one_stop();
        motor_two_stop();
      }
      else if (receivedChar == 'r'){
        motor_one_forward();
        motor_one_backward();
        delay(10);
        motor_one_stop();
        motor_two_stop();
      }
    }
}
