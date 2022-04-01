const int in1 = 11;
const int in2 = 10;
const int in3 = 9;
const int in4 = 8;
const int in5 = 7;

String IncomingData = "";
String Temp = "";
char var;
int flag;

void recvOneChar() {
    if (Serial.available() > 0) {
        receivedChar = Serial.read();
        newData = true;
    }
}

void setup()
{
  Serial.begin(9600);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  pinMode(in5, OUTPUT);
}

void loop()
{
  flag = 10;
  while(Serial.available())
  {
    var = Serial.read();
    Temp = String(var);
    IncomingData += Temp;
  }
  if (IncomingData == "go left"){
    digitalWrite(in1, HIGH); 
    flag = 1;
  }
  else if (IncomingData == "go right"){
    digitalWrite(in2, HIGH);
    flag = 2;
  }
  else if (IncomingData == "go straight"){
    digitalWrite(in3, HIGH);
    flag = 3;
  }
  else if (IncomingData == "go backward"){
    digitalWrite(in4, HIGH);
    flag = 4;
  }
  IncomingData = "";
  delay(500);
  digitalWrite(flag, LOW);
  delay(500);
}
