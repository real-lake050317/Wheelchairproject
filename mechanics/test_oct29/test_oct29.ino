const int in1 = 11;
const int in2 = 10;
const int in3 = 9;
const int in4 = 8;
const int in5 = 7;

void setup(){
    Serial.begin(9600);
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
    pinMode(in5, OUTPUT);
}

void loop(){
    if (Serial.available()){
        int control = Serial.read();
        if (control == 3){
            digitalWrite(in1, HIGH);
        }
        else if (control == 2){
            digitalWrite(in2, HIGH);
        }
        else if (control == 1){
            digitalWrite(in3, HIGH);
        }
        else if (control == 4){
            digitalWrite(in4, HIGH);
        }
        else{
          digitalWrite(in5, HIGH);
        }
    }
    //delay(500);
}
