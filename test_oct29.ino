const int in1 = 9;
const int in2 = 6;
const int in3 = 10;
const int in4 = 11;

void setup(){
    Serial.begin(9600);
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
}

void loop(){
    if (Serial.available()){
        control = Serial.read();
        if (control == "go left"){
            Serial.println("left");
        }
        else if (control == "go backward"){
            Serial.println("backward");
        }
        else if (control == "go straight"){
            Serial.println("front");
        }
        else if (control == "go right"){
            Serial.println("right");
        }
    }
}